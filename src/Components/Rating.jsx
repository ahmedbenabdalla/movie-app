import React, { useState } from "react";
import "./Style.css";

const Rating = ({ title, handleStars, handleRating, Rating }) => {
  function stars(rating) {
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        arr.push(
          <span
            onClick={(e) => handleClick(i)}
            className="rating"
            style={{ color: "gold", fontSize: "24px" }}
          >
            ★
          </span>
        );
      } else if (i > rating) {
        arr.push(
          <span
            onClick={(e) => handleClick(i)}
            className="rating"
            style={{ color: "gray", fontSize: "24px" }}
          >
            ★
          </span>
        );
      }
    }
    return arr;
  }
  const handleClick = (i) => {
    if (title) handleStars(title, i);
    else {
      stars(i);
      handleRating(i);
    }
  };

  let arr = [];

  return <div>{stars(Rating)}</div>;
};

export default Rating;
