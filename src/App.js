import axios from 'axios';
import './App.css';
import { useState } from 'react';
import {Routes, Route } from 'react-router-dom';
import * as React from 'react';
import Home from './components/Home/home';
import Register from './components/Register/register';
import Login from './components/Login/login';
import Dashboard from './components/Admin/Dashboard/dashboard';
import Protected from './components/Admin/protected';

function App() {

  const [isSignedIn, setIsSignedIn] = useState(() => {
    const userLogged = localStorage.getItem("access_token");
    return userLogged || false;
  });


  return(
    <Routes>
      <Route path = "/" element={<Home/>}/>
      <Route path= "/register" element = {<Register/>}/>
      <Route path= "/login" element = {<Login/>}/>
      <Route
            path="/dashboard"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Dashboard />
              </Protected>
            }
          />
   </Routes>
  );
}

export default App;
