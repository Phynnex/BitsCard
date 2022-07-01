import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

import styles from "../../assets/css/news.module.css";

const Hero = () => {
  const [news, setNews] = useState(null);
  const [newsErr, setNewsErr] = useState(null);

  const fetchNews = async () => {
    let response = await axios
      .get("https://www.dev.bitscard.co/api/news")
      .catch((error) => {
        console.log(error.toJSON());
        setNewsErr(error.message);
      });
    setNews(response.data.slice(0, 3));
  };

  useEffect(() => {
    fetchNews();
  }, [setNews]);
  return (
    <div className="container">
      <h2 className="text-white mb-5 mt-5">Trending News</h2>
      <div style={{ height: "300px" }}>
        <div className="container h-100 d-flex justify-content-evenly ">
          {newsErr != null ? (
            <div>You encountered {newsErr}</div>
          ) : news === null ? (
            <div>Loading ... </div>
          ) : (
            news.map((val, key) => {
              return (
                <div key={key}   style={{
                    backgroundImage: `url(http://www.dev.bitscard.co/uploads/${val.image})`,
                  }}className="news-card-container">
                  <div  className={styles.cardNews}>
                    <div className="d-flex justify-content-between">
                      <p className="text-white m-0">Author</p>
                      <p className="font-weight-bold">.</p>
                     
                      <p>{moment("2022-05-15T19:39:03.000000Z").fromNow()} </p>
                    </div>
                    <div className="d-flex justify-content-center flex-column">
                        <h4 className="text-white">Title</h4>
                      <p className="m-0">{val.title}</p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
