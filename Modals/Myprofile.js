import React, { useState, useEffect } from "react";

 function Myprofile() {
    const empInitial1 = {
        id:'',
        firstName: '',
        lastName: '',
        email: '',
        mobileNo: '',
        gender:'',
        password:'',
        userType:''
    };

  let loaded = false;
  const [employee1, setEmployee1] = useState({empInitial1});

  const [loading1, setLoading1] = useState(true)

  useEffect(() => {
    
    setLoading1(true);
    Viewprofile();
    console.log("Call fired....");
  }, []);

  async function Viewprofile(firstName) {

    const response = await fetch(`http://localhost:8080/getuserbyname/${localStorage.getItem("names")}`);
    const json = await response.json();
    setEmployee1(json);
    console.log(json);
    loaded = true;
    setLoading1(false);
  }

  if (loading1) {
    return <p>Loading...!</p>;
  }

  return (
    <div className="Form2">
         <nav>
           <div >
            <ul id="navbar">
            <li>Hi..{localStorage.getItem("names")}</li>
                
                <li><a className="active" href="http://localhost:3000">Logout</a></li>
               
            </ul>
           </div>
        </nav>
        <br></br><br></br>
      <center><h1>My Profile</h1></center>
      <br></br><br></br>
      <center>
      <table border="2">
        <thead>
          <tr>
            <th width="10%">First Name: </th> 
            <th width="10%">Last Name:</th>
            <th width="10%">Email Address:</th>
            <th width="10%"> Phone Number:</th>
            <th width="10%">Gender:</th>   
            <th width="10%">Password:</th>    
            <th width="10%">User Type:</th> 
          </tr>
        </thead>
        <tbody>
          {
              <tr >
               <td> {employee1.firstName}</td>
                <td >{employee1.lastName}</td>
                <td >{employee1.email}</td>
                <td >{employee1.mobileNo}</td>
                <td >{employee1.gender}</td>
                <td >{employee1.password}</td>
                <td >{employee1.userType}</td>
               
              </tr>
          }
        </tbody>
      </table>
      </center>
    </div>
  )
}
export default Myprofile;
