import React from "react";
import "./login.css";
// import { NavLink } from "react-router-dom";
// import light from "./images/light.png";

const login = () => {
  const handleSubmit = (event) => {
    console.log(event.target[0].value);
    console.log(event.target[1].value);
    event.preventDefault();
  };

  return (
    //  html code
    <>
      <div className="container">
        {
          // <div>
          // <img  className='image-left' src={light} alt="light"/>
          // </div>
        }
        <div className="box">
          <div className="heading">LOGIN</div>
          <form onSubmit={handleSubmit}>
            <h4 className="content">Mobile No.</h4>
            <input
              className="input-box"
              type="text"
              placeholder="Enter your Mobile No."
            ></input>
            <h4 className="content">Password</h4>
            <input
              className="input-box"
              type="password"
              placeholder="Enter your Password"
            ></input>
            <br></br>
            <div className="div-btn">
              <button className="btn">submit</button>
            </div>
          </form>
        </div>
        {
          //   <div>
          // <img className='image-right' src={light} alt="light"/>
          // </div>
        }
      </div>
    </>
  );
};

export default login;
