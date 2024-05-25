import React from 'react'
import * as Bootstrap from 'bootstrap';
import {progress} from 'bootstrap';
//import * as Icons from 'react-bootstrap-icons';
import { Container,Row,Col,} from 'react-bootstrap';
import { Techstack } from './Techstack';
export function Portfolio(){
  return (
  <div>
    
    {/*facts*/}
    <section id="portfolio" className="skills section-bg">
      <Container >

        <div id="skillsid1" className="section-title">
          <h2>Skills</h2>
          <p>Experience in developing and maintaining web application. Proficient in frontend technologies, strong knowledge in database design, implementation, and optimization using Mongo DB. Proficient in React.js for building user interface and state management.Ability to debug and resolve issues in exisiting codebase.</p>
        </div>
        {/*
        
      */}
      <Techstack/>

      </Container>
    </section>
  </div>
  )
}
