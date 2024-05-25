import React from 'react'
import * as bootstrap from 'bootstrap';
//import * as Icons from 'react-bootstrap-icons';
import * as Reactbootstrap from 'react-bootstrap';
export function Footer(){
  return (
  <div>
    <footer id="footer">
    <div className="container text-center text-lg-start  ">
      <h3>Ratul kumar Biswal</h3>
      <p>Creating the web, one pixel at a time.</p>
      <div className="social-links">
        <a href="https://x.com/?lang=en" className="twitter"><i className ="bi bi-twitter"></i></a>
        <a href="https://www.facebook.com/" className="facebook"><i className ="bi bi-facebook"></i></a>
        <a href="https://www.instagram.com/" className="instagram"><i className ="bi bi-instagram"></i></a>
        <a href="https://secure.skype.com/portal/profile" className="skype"><i className ="bi bi-skype"></i></a>
        <a href="https://www.linkedin.com/in/ratul-kumar-biswal-393691229" className="linkedin"><i className ="bi bi-linkedin"></i></a>
      </div>
      <div className="copyright">
        &copy; Copyright <strong><span>MyResume</span></strong>. All Rights Reserved
      </div>
      </div>
    </footer>
  </div>
  )
}
