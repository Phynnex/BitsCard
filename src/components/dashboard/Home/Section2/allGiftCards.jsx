import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { giftCard } from "./giftcardList";
import axios from "axios";

const AllGiftCards = () => {
  const [giftCards, setGiftCards] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchGiftCard();
  }, [setGiftCards]);

  const fetchGiftCard = async () => {
    const response = await axios
      .get("https://www.dev.bitscard.co/public/api/giftcards")
      .catch((error) => {
        console.log(error.toJSON());
        setError(error.message);
      });

    let arr = [];
    Object.keys(response.data).forEach(function (key) {
      arr.push(response.data[key]);
    });
    setGiftCards(arr);
    console.log(arr);
  };

  return (
    <div className="giftcard-wrapper">
      {error != null ? (
        <div>you encountered {error}</div>
      ) : giftCards === null ? (
        <div>Loading...</div>
      ) : (
        giftCards.map((card, index) => {
          return (
            <Link key={index} to={`${card.id}`}>
              <img width="140" src={`${card.image}`} alt={card.name} />
              <div className="text-center gift-card-name">{card.name}</div>
            </Link>
          );
        })
      )}
    </div>
  );
};

export default AllGiftCards;
