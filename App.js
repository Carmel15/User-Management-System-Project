import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Adminhomepage from './components/Adminhomepage'
import Userhomepage from './Modals/Userhomepage';
import Registrationform from './REGISTRATION/Registrationform';
import Viewuser from './Modals/Viewuser'
import Adminview from './components/Adminview';
import UpdateDetails from './components/UpdateDetails';
import Profile from './Modals/Myprofile'; 
import Loginold from './Loginpage/Loginold'


function App() {
  return ( 
    <div>      
 <Router> <Routes> 

    <Route path='/' element={<Loginold/>}/>
    <Route path='/Userhomepage' element={<Userhomepage/>}/>
    <Route path='/Adminhomepage' element={<Adminhomepage/>}/> 
    <Route path="/edit/:id" element={<UpdateDetails/>}/> 
    <Route path='/Registrationform' element={<Registrationform/>}></Route>
    <Route path='/Adminview' element={<Adminview/>}></Route>
    <Route path='/Viewuser' element={<Viewuser/>}></Route> 
    <Route path='/Myprofile' element={<Profile/>}></Route> 
   
</Routes></Router> 


    </div>    
  );
}
export default App;
