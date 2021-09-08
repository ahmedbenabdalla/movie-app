import React from "react";
import { Card } from "react-bootstrap";
import List from "./List";

const Details = (props) => {
  let movie = props.movies.find((m) => m.Title === props.match.params.Title);
  console.log(props);
  return (
    <div style={{ color: "black" }}>
      <List Data={[movie]}></List>
    </div>
  );
};

export default Details;
