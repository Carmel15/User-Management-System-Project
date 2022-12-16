import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { useNavigate } from "react-router-dom";

 function Viewuser() {
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
  const navigate = useNavigate();

  useEffect(() => { 
    setLoading1(true);
    listCustomer();
    console.log("Call fired....");
  }, []);

  const remove = async (id) => {
    alert("Do you want to delete ?")
    await fetch(`http://localhost:8080/deleteuserbyid/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
        listCustomer();
    });
  }

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
            <th width="10%">Id </th> 
            <th width="10%">First Name</th>
            <th width="10%">Last Name</th>   
            <th width="10%">Operation</th>    
          </tr>
        </thead>
        <tbody> 
          {
            employee1.map(e => (
              <tr key={e.id}>
               <td> {e.id} </td>
                <td >{e.firstName}</td>
                <td >{e.lastName}</td>
               
              <td>  <a onClick={() => remove(e.id)}><button>Delete</button></a> 
                {
              <Button ><Link className="btn btn-outline-primary mx-2"
                to ={`/edit/${e.id}`}>Edit</Link></Button>  
                 }
                </td> 
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