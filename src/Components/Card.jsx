import React from "react";
import { Link } from "react-router-dom";

import Rating from "./Rating";

const Card = (props) => {
  return (
    <div id="card" Key={props.Key}>
      <Rating
        handleStars={props.handleStars}
        title={props.movie.Title}
        Rating={props.movie.Rating}
      />

      <Link to={`/movie/${props.movie.Title}`}>
        <img
          src={props.movie.Image}
          alt="movie-image"
          style={{ width: "310px", height: "350px" }}
        />
      </Link>
      <h3>{props.movie.Date}</h3>
    </div>
  );
};

export default Card;
