import React, { useState, useEffect } from "react";
 function Historyview() {
    const empInitial1 = {
        id:'',
        lastLoginTimeStamp:''
    };

  let loaded = false;
  const [employee1, setEmployee1] = useState({empInitial1});
  const [loading1, setLoading1] = useState(true)

  useEffect(() => { 
    setLoading1(true);
    listHistory();
    console.log("Call fired....");
  }, []);

  async function listHistory() {
    const response = await fetch('http://localhost:8080/gethistorylist');
    const json = await response.json();
    json.sort((a) => {
      return new Date(a.lastLoginTimeStamp).getTime() 
  }).reverse();
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
      <center><h1>Login History</h1></center>
      <center>
      <table border="2">
        <thead>
          <tr>
            <th width="10%">Id </th> 
            <th width="10%">Last Login time</th>
            <th width ="10%">User Id</th>
          </tr>
        </thead>
        <tbody> 
          {
            employee1.map(e => (
              <tr key={e.id}>
               {
                <>
                <td>{e.id}</td>
                <td> {e.lastLoginTimeStamp} </td> 
                <td> {localStorage.getItem("Id")} </td> 
                </>}
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
export default Historyview;