import React from "react";
import "./main.css";
import Bulb from "./images/bulb.png";

const Main = () => {
  return (
    <div className="container">
      <div className="nav">
        <img className="bulb" src={Bulb} alt="bulb" />
        <span className="title">Light up your world</span>
        <img className="bulb" src={Bulb} alt="bulb" />
      </div>
      <div className="box">
        <div className="heading">
          <h3>Upload image</h3>
         
        </div>
        <label for="images" className="drop-container">
          <span className="drop-title">Drop files here</span>
          or
          <input type="file" id="images" accept="image/*" required />
        </label>
        <div className="heading">
          <h3>Description</h3>
        </div>
        <textarea
          className="textarea"
          rows="50"
          cols="85"
          placeholder="Write Description"
        ></textarea>
        <button className="button-36" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Main;
