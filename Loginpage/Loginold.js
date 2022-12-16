import { useEffect,useState} from "react";
import Symbol from '../newlogo.jpg'
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import '../components/Adminhomepage.css'
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Login(){
  const navigate = useNavigate();
  const [values,setValues]=useState({
    email:'',
    password:''

  })

  const[errors,setError]=useState({})

  function handleChange(e){
    setValues({...values,[e.target.name]:e.target.value})
  }


 function handleSubmit(e){
  e.preventDefault();
  setError(Loginvalidation(values));
 };

const Loginvalidation =(values)=>{
    let errors ={}

    if(!values.email){
        errors.email="email is Required"
    }
        else if(values.email.length< 5){
            errors.email="name must be more than 5 characters"
    }

    if(!values.password){
        errors.password="password is Required"
    }
        else if(values.password.length<8){
            errors.password="password must be more than 9 characters"
    }
    {

    const data = {

        email: values.email,
        userType:values.userType,
        password: values.password,
        firstName: values.firstName,
        lastName:values.lastName

      };

      console.log("----data----", data);

const url =
        " http://localhost:8080/login";

      axios
        
        .post(url, data)
        .then((result) => {
          console.log(data);
          console.log("result : ",result);
          if(result.status=="200")
         {
          localStorage.setItem("names",result.data.firstName)
          alert(" Login Successful");
          
          if(result.data.userType==="admin")

          navigate('/Adminhomepage');
          else if(result.data.userType==="user")
          navigate('/Userhomepage');
         }else if (result.status=="500") {
          alert("User Invalid");
        }
        })
        .catch((error) => {
          alert(error);
        });
    }   
    return errors;
}
  return(
    <>
    <nav>
           <div >
            <ul id="navbar">
           <br/><br/>
               
            </ul>
           </div>
        </nav>
        <div className="image">
        <img src={Symbol} alt="error" />
        </div>
      
    <div className='wrap'>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <center><label>LOGIN PAGE</label></center>
          <label><b>Username: </b></label>
          <input type="text" placeholder="Enter Username" value={values.email} name="email" onChange={handleChange}/>
          {errors.email &&<p style={{color:'red',fontsize:"15px"}}>{errors.email}</p>}
         

          <label><b>Password: </b></label>
          <input type="password" placeholder="Enter password" value={values.password} name="password" onChange={handleChange}/>
          {errors.password &&<p style={{color:'red',fontsize:"15px"}}>{errors.password}</p>}
       
          <button type="submit">Login</button>
          
        </div>
      </form>
      <center>
     <div class="social-container-login">
      <br/>
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
      <br/>   <br/>
</div>
</center>
    </div>
    </>
  )
}
export default Login;