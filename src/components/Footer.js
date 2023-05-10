import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function footer() {
    return (
  <>
  


    <footer className="bg-dark text-light ">
      <Container >
        <div className='py-4'>
        <Row >
          <Col md={4}>
            <h4 >About Us</h4>
            <p>
              Lorem ipsum lllldolor sit amet, consectetur adipiscing elit. Ut venenatis libero id mauris congue, ac fringilla velit bibendum.
            </p>
          </Col>
          <Col md={4}>
            <h4>Connect with Us</h4>
            <p>
              <a href="mailto:info@example.com">info@example.com</a>
              <br />
              <a href="tel:+1234567890">123-456-7890</a>
            </p>
            <p>
            <a href="/faq">FAQ</a>

            </p>
            <div className="social-icons ">
              <a href="#" className='mx-2' >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              
              <a href="#" className='mx-2'>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className='mx-2'>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </Col>
          <Col md={4}>
            <h4>Join Our Newsletter</h4>
            <form>
              <div className="input-group">
                <input type="email" className="form-control" placeholder="Enter your email" />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-primary">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </Col>
        </Row>
        </div>
      </Container>
      <div className="footer-bottom">
        <Container>
          <Row>
            <Col>
              <p className="text-center">
                © 2023 Example Company. All rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
</>
  )
};
        
export default footer;
