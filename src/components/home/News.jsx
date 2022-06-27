import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "../../assets/css/home.module.css";

const News = () => {
  const fetchNews = async () => {
    let response = await axios
      .get("https://www.dev.bitscard.co/api/news")
      .catch((error) => {
        console.log(error.toJSON());
        setNewsErr(error.message);
      });
    setNews(response.data.slice(0, 4));
  };
  const [news, setNews] = useState(null);
  const [newsErr, setNewsErr] = useState(null);
  useEffect(() => {
    fetchNews();
  }, [setNews]);
  return (
    <div>
      <div className="d-flex justify-content-between mt-3">
        <h2 className={styles.cryptoNewsTableHeader}>News of The Day</h2>
        
      </div>

      <div className={styles.cryptoNewsTableWrapper}>
        {newsErr != null ? (
          <div>You encountered {newsErr}</div>
        ) : news === null ? (
          <div>Loading ... </div>
        ) : (
          news.map((val, key) => {
            return (
              <Link key={key} to={`/news/${val.id}`}>
                <div>
                  <div className="news-card">
                    <div
                      style={{
                        backgroundImage: `url(http://www.dev.bitscard.co/uploads/${val.image})`,
                      }}
                      className="news-card-img"
                    ></div>
                    <div className="w-50">
                      <p className="text-white m-0">{val.title}</p>
                      <span>{val.author}</span>
                      <p>{val.created_at}</p>
                    </div>
                  
                  </div>
                  
                </div>
             
              </Link>
            );
          })
        )}
        
      </div>
      <div className="d-flex justify-content-center">
        <Link to="/">
          <button className="pri-btn">View More</button>
        </Link>

        </div>
    </div>
    
  );
};

export default News;
