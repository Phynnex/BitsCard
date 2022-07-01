import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const SingleNews = () => {
  let param = useParams()
  let navigate = useNavigate();
  let [news, setNews] = useState(null);
  let [newsErr, setNewsErr] = useState(null);

  console.log(param.id)
  useEffect(() => {
    const fetchNews = async () => {
      let response = await axios
        .get(`https://www.dev.bitscard.co/api/news/${param.id}`)
        .catch((error) => {
          console.log(error);
          setNewsErr(error);
        });
      setNews(response.data);
      console.log(response.data)
    };
    fetchNews();
  }, [setNews]);
  return (
    <div className="container ">
      {
        news === null ? <div>loading...</div>:

        <div>
          <div style={{backgroundImage:`url(${news.image})`}} className="news-cover-img mt-5"></div>
          <div className="news-cover-title my-2">{news.title}</div>

          <div>{news.description}</div>

        </div>
      }

      

    </div>
  );
};

export default SingleNews;
