import React, { useState, useEffect } from "react";

 function Viewuser() {
  let time=new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime]=useState(time);

    const empInitial1 = {
        id:'',
        firstName: '',
        lastName: '',
        emailId: '',
        phone: '',
        gender:'',
        password:'',
        userType:''
    };

  let loaded = false;
  const [employee1, setEmployee1] = useState({empInitial1});

  const [loading1, setLoading1] = useState(true)
 
  useEffect(() => {
    
    setLoading1(true);
    listCustomer();
    console.log("Call fired....");
  }, []);


  async function listCustomer() {

    const response = await fetch('http://localhost:8080/getuserlist');
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
    <>
     <nav>
           <div >
            <ul id="navbar">
            <li>Hi..{localStorage.getItem("names")}</li>
                
                <li><a className="active" href="http://localhost:3000">Logout</a></li>
               
            </ul>
           </div>
        </nav>
        <br></br><br></br>
    <div className="Form2">
      <center><h1>All Users List</h1></center>
      <center>
      <table border="2">
        <thead>
          <tr>
            <th width="30%">Id </th> 
            <th width="30%">First Name</th>
            <th width="30%">Last Name</th> 
            <th width="30%">Last Login Time</th>  
          </tr>
        </thead>
        <tbody>
          {
            employee1.map(e => (
              <tr key={e.id}>
               <td> {e.id} </td>
                <td >{e.firstName}</td>
                <td >{e.lastName}</td>
                <td >{currentTime}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      </center>
    </div>
    </>
  )
}
export default Viewuser;