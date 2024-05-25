import React from 'react'
import * as bootstrap from 'bootstrap';

import * as Icons from 'react-bootstrap-icons';
import { Container,Row,Col} from 'react-bootstrap';

export function About(){
  return (
  <div>
    
    <section id="about" className="about">
       <Container>

       <div className="section-title">
          <h2>About</h2>
           <p>Highly skilled MERN Stack developer experienced in designing and developing robust web applications. Proficient in front-end and back-end technologies, including Rect.js, Node.js, Mongo DB and Express.js. Strong understanding of responsive web design principles and cross-browser compatibility. A collaborative team player, dedicated to ensuring seamless user experiences scalable solutions. and d</p>
        </div>
        <Row>
          <Col lg={4} >
            <img src="./Picsart.jpg" className="img-fluid" alt="" style={{ width: '200px', height: '200px', borderRadius: '100%' }}/>
          </Col>
          <Col lg={8} className=" pt-4 pt-lg-0 content">
            <h3>UI/UX Designer &amp; Web Developer.</h3>
            <p className="fst-italic">
            To obtain a challenging Developer position where my creativity, problem-solving skills, and experience in designing and developing robust web applications, engaging and user-friendly interfaces can be utilized to enhance user experiences and drive business objectives. 
            </p>
            <Row>
              <Col lg={6}>
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>17 Jan 1999</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 7064658007</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Banglore, Karnataka</span></li>
                </ul>
              </Col>
              <Col lg={6}>
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>25</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Masters Of Computer Application</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>biswalratul007@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </Col>
            </Row>
            <p>
            From my degree in computer science, I have gained a solid foundation in programming languages such as C, JavaScript, React, Nodejs, Express js, Mongo db and Python. Through my coursework and personal projects, I have designed, developed, and customized, highly responsive websites and e-commerce solutions using advanced technologies. In addition, I have developed a strong understanding of software development principles and best practices.
            </p>
          </Col>
        </Row>
       </Container>

      </section>
      <section id="facts" className="facts">
      <Container>

        <div className="section-title">
          <h2>Facts</h2>
          <p>As a passionate and driven individual with background in computer science, I am excited about the opportunity to contribute to your innovative team and gain valuable hands-on experience in software development.</p>
        </div>

        <Row>

          <Col lg={4} md={6} className=" mt-5 mt-lg-0" >
            <div className="count-box">
              <i className="bi bi-award"></i>
              <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
              <p>Happy Clients</p>
            </div>
          </Col>

          <Col lg={4} md={6} className=" mt-5 mt-md-0">
            <div className="count-box">
              <i className="bi bi-journal-richtext"></i>
              <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
              <p>Projects</p>
            </div>
          </Col>

          <Col lg={4} md={6} className=" mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-headset"></i>
              <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter"></span>
              <p>Hours Of Support</p>
            </div>
          </Col>

          
        </Row>

      </Container>
    </section>
    {/*=============Skills section==============*/} 
    
  </div>
  )
}
