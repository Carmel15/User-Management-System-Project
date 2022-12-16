import React , { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams,Link } from "react-router-dom";

export default function EditUser() {

    let navigate=useNavigate();
    const {id}=useParams()
    const [user,setUser]=useState({
        firstName:"",
        lastName:"",
        mobileNo:"",
        password:"",
        userType:"",
        gender:""
    })

    const {firstName, lastName,mobileNo, password, userType, gender}=user
    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})     
    };

useEffect(()=>{
    loadUser()
},[]);

    const onSubmit=async(e)=>{
        e.preventDefault();
        await  axios.post(`http://localhost:8080/updateuser/${id}`,user);
        alert("Edited Sucessfully")
           navigate("/Adminhomepage") ;
    };

    const loadUser =async ()=>{
        const result=await axios.get(`http://localhost:8080/getuserbyid/${id}`)
        setUser(result.data)
    }

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
        <div className="Form3">
                    <h1><center>Edit Details</center></h1>
                    <form onSubmit={(e)=>onSubmit(e)}>
                    <div className="containerupdate">
                        <label>
                            First Name
                        </label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter your First Name"
                        name="firstName"
                        value={firstName}
                        onChange={(e)=>onInputChange(e)}
                        />
                        <label>
                            Last Name
                        </label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter your Last Name"
                        name="lastName"
                        value={lastName}
                        onChange={(e)=>onInputChange(e)}
                        />                    
                        <label >
                            Mobile Number
                        </label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter your Mobile No"
                        name="mobileNo"
                        value={mobileNo}
                        onChange={(e)=>onInputChange(e)}
                        />
                        <label>
                            Password
                        </label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter your Password"
                        name="password"
                        value={password}
                        onChange={(e)=>onInputChange(e)}
                        />
                        <label>
                            Gender
                        </label>
                        <br></br>
                        <select name="gender" value={gender}
                        onChange={(e)=>onInputChange(e)}  placeholder="gender">
                            <option value="select">--SELECT--</option>
                            <option value="female">FEMALE</option>
                            <option value="male">MALE</option>
                        </select>
                        <br></br>
                        <label>
                            User Type
                        </label>
                        <br></br>
                        <select name="userType" value={userType}
                        onChange={(e)=>onInputChange(e)}  placeholder="userType">
                            <option value="select">--SELECT--</option>
                            <option value="admin">ADMIN</option>
                            <option value="user">USER</option>
                        </select>
                    <br/>
                    <br/><br/>
                    <button type="submit" className="btn-outline-primary">Submit</button>
                    <button className="btn-outline-danger"> <Link to="/Adminhomepage" >Cancel</Link>
                     </button>
                    </div>
                    </form>                  
                </div>
        </>
    )
}