import React from 'react'
import * as bootstrap from 'bootstrap';

import * as Icons from 'react-bootstrap-icons';
import { Container, Nav, Navbar } from 'react-bootstrap'; 
export function Barnav(){
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{backgroundColor:'black',color:'white'}}>
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#hero"><i className="bi bi-home"></i>Home</Nav.Link>
            <Nav.Link href="#about"><i className="bx bx-home"></i>About</Nav.Link>
            <Nav.Link href="#resume"><i className="bx bx-home"></i>Resume</Nav.Link>
            <Nav.Link href="#portfolio"><i className="bx bx-home"></i>Portfolio</Nav.Link>
            <Nav.Link href="#footer"><i className="bx bx-home"></i>Contact</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    /*=============================================
    <div>
    <header id="header" className="d-flex flex-column justify-content-center">
    <nav id="navbar" className="navbar navbar-toggleable navbar-dark navbar-primary">
    <button className="navbar-toggler navbar"><span className="navbar-toggler-icon"></span></button>
    <ul>
    <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
    <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
    <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
    <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
    
        <li><a href="#footer" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
        </ul>
        </nav>
        </header>
        </div>
      */
        )
      }
      