import logo from "./logo.svg";
import "./App.css";

import List from "./Components/List";
import { useState } from "react";
import Data from "./Data";
import Rating from "./Components/Rating";
import Add from "./Components/Add";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Details from "./Components/Details";

function App() {
  const [data, setdata] = useState(Data);
  console.log("import", data);
  const [stars, setstars] = useState(0);
  const [show, setShow] = useState(false);
  const [researsh, setresearsh] = useState("");
  const handleClose = (movie) => {
    if (movie) {
      setdata([...data, movie]);
    }
    setShow(false);
  };

  const handleShow = () => setShow(true);
  //
  const handleStars = (title, i) => {
    setdata([...data.map((m) => (m.Title == title ? { ...m, Rating: i } : m))]);
  };
  const handleSearsh = (e) => {
    setresearsh(e.target.value);
  };
  const handleRating = (i) => {
    setstars(i);
  };

  return (
    <div className="App">
      <div className="nav-bar">
        <input
          type="text"
          value={researsh}
          onChange={handleSearsh}
          placeholder="Recherche"
        />
        <Rating
          className="stars"
          handleRating={handleRating}
          Rating={stars}
        ></Rating>
      </div>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <List
                handleStars={handleStars}
                Data={data.filter(
                  (el) =>
                    el.Title.toLowerCase().includes(researsh.toLowerCase()) &&
                    el.Rating >= stars
                )}
              ></List>
            )}
          ></Route>
          <Route
            exact
            path="/movie/:Title"
            render={(props) => <Details movies={data} {...props}></Details>}
          ></Route>
          <div className="fixed">
            <Add
              handleClose={handleClose}
              handleShow={handleShow}
              show={show}
            />
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
