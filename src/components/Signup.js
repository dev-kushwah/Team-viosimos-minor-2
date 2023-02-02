import React from "react";
import "./Signup.css";

export default function Signup() {
    return (
        <>
            <div className="container">
                {
                    // <div>
                    // <img  className='image-left' src={light} alt="light"/>
                    // </div>
                }
                <div className="box">
                    <div className="heading">Signup</div>
                    <form>
                        <h4 className="content">Name</h4>
                        <input
                            className="input-box"
                            type="text"
                            placeholder="Enter your Name"
                        ></input>

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

                        <h4 className="content">Confirm Password</h4>
                        <input
                            className="input-box"
                            type="password"
                            placeholder="Confirm Password"
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
}
