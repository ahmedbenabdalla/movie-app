import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Rating from "./Rating";
import { useState } from "react";

const Add = ({ handleClose, handleShow, show }) => {
  const [image, setimage] = useState("");
  const [stars, setstars] = useState(1);
  const [date, setdate] = useState("");
  const [moviename, setmoviename] = useState("");
  const handleName = (e) => {
    setmoviename(e.target.value);
    console.log(moviename);
  };

  const handleRating = (i) => {
    setstars(i);
    console.log(stars);
  };

  const handleImage = (e) => {
    setimage(e.target.value);
    console.log(image);
  };

  const handleDate = (e) => {
    setdate(e.target.value);
    console.log(date);
  };

  const handleSubmit = (e) => {
    setmoviename("");
    setdate("");
    setstars(1);
    setimage("");
    const movie = {
      Title: moviename,
      Image: image,
      Date: date,
      Rating: stars,
    };

    handleClose(movie);
    console.log(stars + { ...movie });
  };
  return (
    <div>
      <Button variant="primary" id="btn" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <h6>Movie Name:</h6>
            <input
              type="Text"
              value={moviename}
              placeholder="movie name"
              onChange={handleName}
            />
            <h6>Rating:</h6>
            <Rating handleRating={handleRating} Rating={stars} />
            <h6>Image:</h6>
            <input
              type="url"
              placeholder="url image"
              value={image}
              onChange={handleImage}
            />
            <h6>Date:</h6>
            <input
              type="Date"
              placeholder="url image"
              value={date}
              onChange={handleDate}
            />
          </Modal.Body>

          <Modal.Footer>
            <Button id="btn" onClick={handleSubmit}>
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default Add;
