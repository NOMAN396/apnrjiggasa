import React, {useState, useEffect } from 'react';
import Header from '../Header/header';
import Nav from 'react-bootstrap/Nav';
import './home.css';
import Button from 'react-bootstrap/Button';
import { Carousel } from 'react-bootstrap';

function Home(){

    return(
        <div className="container">
            <Header/> 
            <br></br>
            <div className="row d-flex">
               <div className='col-md-6'>
                <p className='choice'><Nav.Link  className="size"href="#">
              hello this is one of the your choice you can choce as your own  your question 
            </Nav.Link></p>
                <p className='choice'><Nav.Link  className="size"href="#">
              hello this is one of the your choice you can choce as your own your question 
            </Nav.Link></p>
                <p className='choice'><Nav.Link  className="size"href="#">
              hello this is one of the your choice you can choce as your own for your question 
            </Nav.Link></p>
                <p className='choice'><Nav.Link  className="size"href="#">
              hello this is one of the your choice you can choce as your own for your ans
            </Nav.Link></p>
                <p className='choice'><Nav.Link  className="size"href="#">
              hello this is one of the your choice you can choce as your own as you like from
            </Nav.Link></p>

               </div>
               <div className='col-md-6'>
               <img className="student" src={require('./assets/image/illustration-of-a-teenage-muslim-girl-student-using-a-laptop-RAC64P.jpg')} alt=""/>
                </div>
            </div>

            
    <Carousel interval={3000} controls={false} >
      <Carousel.Item>
        <div className='row'>
          <div className='col-md-3 d-flex'>
            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
            <Button variant="success">Success</Button>{' '}
      
          </div>
          <div className='col-md-3 d-flex'>
            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
            <Button variant="success">Success</Button>{' '}
      
      
      
          </div>
          <div className='col-md-3 d-flex'>
            <Button variant="primary">janay</Button>{' '}
            <Button variant="secondary">dana</Button>{' '}
            <Button variant="success">bussess</Button>{' '}
            
      
          </div>
          <div className='col-md-3 d-flex'>
            <Button variant="primary">kala</Button>{' '}
            <Button variant="secondary">kharaf</Button>{' '}
            <Button variant="success">valo</Button>{' '}
      
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='row'>
          <div className='col-md-3 d-flex'>
            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
            <Button variant="success">Success</Button>{' '}
            
      
          </div>
          <div className='col-md-3 d-flex'>
            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
            <Button variant="success">Success</Button>{' '}
      
          </div>
          <div className='col-md-3 d-flex'>
            <Button variant="primary">Pri</Button>{' '}
            <Button variant="secondary">Sec</Button>{' '}
            <Button variant="success">Suc</Button>{' '}
            
      
          </div>
          <div className='col-md-3 d-flex'>
            <Button variant="primary">imary</Button>{' '}
            <Button variant="secondary">condary</Button>{' '}
            <Button variant="success">ccess</Button>{' '}
      
          </div>
        </div>     
      </Carousel.Item>
    </Carousel>
        </div>
    )
}

export default Home;