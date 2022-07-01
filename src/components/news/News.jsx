import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "../../assets/css/home.module.css";
import moment from "moment";


const News = () => {
  const fetchNews = async () => {
    let response = await axios
      .get("https://www.dev.bitscard.co/api/news")
      .catch((error) => {
        console.log(error.toJSON());
        setNewsErr(error.message);
      });
    setNews(response.data);
  };
  const [news, setNews] = useState(null);
  const [newsErr, setNewsErr] = useState(null);
  useEffect(() => {
    fetchNews();
  }, [setNews]);
  return (
    <div className="container">
      <h2 className="text-white mb-5">Latest News</h2>

      <div className={styles.cryptoNewsTableWrapper}>
        {newsErr != null ? (
          <div>You encountered {newsErr}</div>
        ) : news === null ? (
          <div>Loading ... </div>
        ) : (
          news.map((val, key) => {
            return (
              <Link key={key} to={`/news/${val.id}`}>
                <div className="news-card">
                  <div
                    style={{
                      backgroundImage: `url(http://www.dev.bitscard.co/uploads/${val.image})`,
                    }}
                    className="news-card-img"
                  ></div>
                  <div>
                    <div className="text-white m-0">{val.title}</div>
                    <span>{val.author}</span>
                    <p className="m-o">{moment("2022-05-15T19:39:03.000000Z").fromNow()} </p>

                  </div>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default News;
