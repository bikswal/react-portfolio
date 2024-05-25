import React from 'react'
import * as bootstrap from 'bootstrap';
//import * as Icons from 'react-bootstrap-icons';
import {Container,Row,Col} from 'react-bootstrap';
import { AiOutlineDownload } from "react-icons/ai";

import Button from 'react-bootstrap/Button';
import pdf from "./MERNSTACK.pdf";
export function Resume(){
  return (
  <div>

<section id="resume" className="resume">
      <Container >

        <div className="section-title">
          <h2>Resume</h2>
          <p>To obtain a challenging Developer position where my creativity, problem-solving skills, and experience in designing and developing robust web applications, engaging and user-friendly interfaces can be utilized to enhance user experiences and drive business objectives.</p>
        </div>

        <Row>
          <Col lg={6}>
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Ratul kumar Biswal</h4>
              <p><em>Highly skilled MERN Stack developer experienced in designing and developing robust web applications. Proficient in front-end and back-end technologies, including Rect.js, Node.js, Mongo DB and Express.js. Strong understanding of responsive web design principles and cross-browser compatibility. A collaborative team player, dedicated to ensuring seamless user experiences and designing scalable solutions.</em></p>
              <ul>
                <li>Yellareddyguda, Ameerpet,Hyderabad, Telangana</li>
                <li>(+91) 7064658007</li>
                <li>biswalratul007@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Master in Computer Application</h4>
              <h5>2021 - 2023</h5>
              <p><em>National Institute of Science and  Technology, Berhampur, Odisha</em></p>
              
            </div>
            <div className="resume-item">
              <h4>Bachelor in Physical Science with honours in Chemistry</h4>
              <h5>2017 - 2021</h5>
              <p><em>Science Degree College, Kukudakhandi, Odisha</em></p>
              
            </div>
          </Col>
          <Col lg={6}>
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Summer Internship</h4>
              <h5>2022</h5>
              <p><em>NPTEL</em></p>
              <p>One month course at NPTEL python for Data Science upon and awarded 'B' grade</p>
            </div>
            <div className="resume-item">
              <h4>Javascript Algorithms and Data Structure</h4>
              <h5>2023</h5>
              <p><em>Developer certification of coursework at freeCodeCamp.org</em></p>
            </div>
            <div className="resume-item">
              <h4>Training</h4>
              <h5>2023</h5>
              <p><em>6 month course of UI Full Stack Development with React from Naresh I technologies, Hyderabad,Telangana</em></p>
            </div>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </section>

  </div>
  )
}
