import React from 'react'
import "./login.css";
import light from "./images/light.png";

const login = () => {

  return (
     //  html code

    
    <div className='container'>
      <div>
      <img  className='image-left' src={light} alt="light"/>
      </div>
      <div className='box'>
      <div className='heading'>LOGIN</div>
      <form>
      <h4 className='content'>Username</h4>
      <input className='input-box' type="text" placeholder='Enter your Username'></input>
          <h4 className='content'>Password</h4>
          <input className='input-box'  type="password" placeholder='Enter your Password'></input><br></br>
          <div className='div-btn'><button className='btn'>Submit</button></div>
      
        </form>



      </div>
      <div>
      <img className='image-right' src={light} alt="light"/>
      </div>
    </div>
  )
}

export default login
