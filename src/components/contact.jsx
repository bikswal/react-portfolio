import React from 'react'

import * as bootstrap from 'bootstrap';
//import * as Icons from 'react-bootstrap-icons';
import { Container,Row,Col} from 'react-bootstrap';
export function Contact(){
  return (
  <div>
    <section id="contact" className="contact">
      <Container >
      <div className="section-title">
        <h2>Contact</h2>
      </div>

      <Col lg>
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt-fill"></i>
                <h4>Location:</h4>
                <p> Marathalli, Bengaluru, Karnataka 560037</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope-fill"></i>
                <h4>Email:</h4>
                <p>biswalratul007@gmail.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone-fill"></i>
                <h4>Call:</h4>
                <p>+91 7064658007</p>
              </div>

            </div>

          </Col>

      </Container>
    </section>
  </div>
  )
}
