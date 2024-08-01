import React from "react";
import "../Header/assets/css/bootstrap.min.css"
import './header.css';
import { Link } from "react-router-dom";
function Header(){
   return(
<div className="container">
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    
    <Link to="/Path"  className="navbar-brand"> Contact us </Link> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/Path"  className="nav-link"> Contact us </Link> 
        </li>
        <li className="nav-item">
        <Link to="/Path"  className="nav-link"> Contact us </Link> 
        </li>
        <li className="nav-item">
        <Link to="/Path"  className="nav-link"> Contact us </Link> 
        </li>
      </ul>
      <span className="navbar-text">
        Navbar text
      </span>
    </div>
  </div>
</nav>
<br></br>


   <div className="row d-flex">
        <div className="col-md-4">
          <img className="student" src={require('./assets/image/illustration-of-a-teenage-muslim-girl-student-using-a-laptop-RAC64P.jpg')} alt=""/>
          <ul>
            <li className="li"> <Link to="/Path" > Contact us </Link> 
     
            </li>
        
          </ul>
        </div>
        <div className="col-md-4">
          <img className="student" src={require('./assets/image/illustration-of-a-teenage-muslim-girl-student-using-a-laptop-RAC64P.jpg')} alt=""/>
          <ul>
            <li className="li">
              
              <Link to="/Path" > Contact us </Link> </li>
           
          </ul>
        </div>
        <div className="col-md-4">
          <img className="student" src={require('./assets/image/illustration-of-a-teenage-muslim-girl-student-using-a-laptop-RAC64P.jpg')} alt=""/>
          <ul>
            <li className="li">
            <Link to="/Path" > Contact us </Link> 
            </li>
          </ul>
        </div>  
      </div>
      <br></br>     
</div>

   ); 
}
export default Header;