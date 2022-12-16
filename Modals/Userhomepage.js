import Symbol from '../newlogo.jpg'
import React from "react";
import { useNavigate } from 'react-router-dom';
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Userhome()
{
   const navigate= useNavigate();
    return(
        <>
        <nav>
           <div >
            <ul id="navbar">
            <li>Hi..{localStorage.getItem("names")}</li>
                
                <li><a className="active" href="http://localhost:3000">Logout</a></li>
               
            </ul>
           </div>
        </nav>
        <img src={Symbol} alt="error" /> 
       < div className='containeruser'>
       <div className='bt'><center> <button id="buttag1" onClick={()=>navigate("/Viewuser")} >VIEW USER</button></center></div>
     <div className='bt1'><center> <button id="buttag2" onClick={()=>navigate("/Myprofile")} >MY PROFILE</button></center></div>
     </div>
     <center>
    <div class="social-container-user">
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
export default Userhome;
