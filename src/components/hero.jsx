import React from 'react'
import * as bootstrap from 'bootstrap';
//import * as Icons from 'react-bootstrap-icons';
import { Container,Col,Row } from 'react-bootstrap'; 
import Typewriter  from 'typewriter-effect';
export function Hero(){
  return (
  <div>
    <section id="hero" className="d-flex flex-column justify-content-center  bg-black text-white">
    <Container className="bg-black text-white " >
    <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
      <Typewriter
      style={{
        color: '#333', // Text color
        fontSize: '1.5rem', // Font size
        fontFamily: 'Arial, sans-serif', // Font family
        fontWeight: 'bold', // Font weight
        padding: '20px', // Padding
        border: '1px solid #ccc', // Border
        borderRadius: '5px', // Border radius
        display: 'inline-block', // Display inline
      }}
        options={{
        strings: ['Designer', 'Developer', 'Content Writer','MERN Stack'],
        deletedSpeed: 50,
        autoStart: true,
        loop: true,
    
      }}
  
/>
      <div className="social-links d-flex ">
        <a href="https://x.com/?lang=en" className="twitter"><i className="bi bi-twitter-x"></i></a>
        <a href="https://www.facebook.com/" className="facebook"><i className="bi bi-facebook"></i></a>
        <a href="https://www.instagram.com/" className="instagram"><i className="bi bi-instagram"></i></a>
        <a href="https://secure.skype.com/portal/profile" className="google-plus"><i className="bi bi-skype"></i></a>
        <a href="https://www.linkedin.com/in/ratul-kumar-biswal-393691229" className="linkedin"><i className="bi bi-linkedin"></i></a>
      </div>
    </Container>
    </section>
    

    
  </div>
  )
}
