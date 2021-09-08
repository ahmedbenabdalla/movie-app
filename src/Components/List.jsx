import React from "react";

import Card from "./Card";
import Details from "./Details";
import "./Style.css";
const List = (props) => {
  console.log(props);
  return (
    <div className="card-list">
      {props.Data.map((movie, i) => (
        <Card key={i} movie={movie} handleStars={props.handleStars}></Card>
      ))}
    </div>
  );
};

export default List;
