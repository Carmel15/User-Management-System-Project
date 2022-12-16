import React, { useState, useEffect } from "react";
import Symbol from '../newlogo.jpg'
import './Adminhomepage.css'
import { useNavigate } from "react-router-dom";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Adminhomepage() {
  const navigate = useNavigate();

  return (
    <>
      <nav>
        <div >
          <ul id="navbar">
            <li>Hi..{localStorage.getItem("names")}</li>
            <li><a className="active" href="http://localhost:3000">Logout</a></li>
          </ul>
        </div>
      </nav>
      <div className="image">
        <img src={Symbol} alt="error" />
      </div>
      <center>
        < div className='containerhome'>
          <div className='b1'> <button onClick={() => navigate("/Registrationform")} id="buttag7">ADD</button></div>
          <div className='b2'><button onClick={() => navigate("/Adminview")} id="buttag8">VIEW</button></div>
        </div>
      </center>
      <center>
        <div class="social-container-home">
          <a href="https://www.facebook.com/learnbuildteach/"
            className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.instagram.com/learnbuildteach"
            className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.youtube.com/c/jamesqquick"
            className="youtube social">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a href="https://www.twitter.com/jamesqquick" className="twitter social">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.linkedin.com/learnbuildteach"
            className="linkedin social">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </center>
    </>
  )
}
export default Adminhomepage;