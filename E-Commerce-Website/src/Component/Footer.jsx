import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="text-center text-lg-start bg-dark text-white pt-4">
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* Left */}
          <div className="me-5 d-none d-lg-block">
            <span>Connect with us on social networks:</span>
          </div>
          {/* Left */}

          {/* Right */}
          <div>
            <a href="https://facebook.com" className="me-4 text-reset" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="me-4 text-reset" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" className="me-4 text-reset" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" className="me-4 text-reset" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}

        {/* Section: Links  */}
        <section className="p-4">
          <Container className="text-center text-md-start mt-5">
            {/* Grid row */}
            <Row className="mt-3">
              {/* Grid column */}
              <Col md={3} col-lg={4} col-xl={3} mx-auto mb-4>
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-shopping-cart me-3"></i>E-commerce Store
                </h6>
                <p>
                  Your one-stop shop for all your needs, offering a wide range of products at unbeatable prices.
                </p>
              </Col>
              {/* Grid column */}

              {/* Grid column */}
              <Col md={2} col-lg={2} col-xl={2} mx-auto mb-4>
                <h6 className="text-uppercase fw-bold mb-4">
                  Services
                </h6>
                <p>
                  <a href="#!" className="text-reset">Shop</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Special Offers</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Gift Cards</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Customer Support</a>
                </p>
              </Col>
              {/* Grid column */}

              {/* Grid column */}
              <Col md={3} col-lg={2} col-xl={2} mx-auto mb-4>
                <h6 className="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <p>
                  <a href="#!" className="text-reset">Your Account</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Order Tracking</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Return Policy</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Contact Us</a>
                </p>
              </Col>
              {/* Grid column */}

              {/* Grid column */}
              <Col md={4} col-lg={3} col-xl={3} mx-auto mb-md-0 mb-4>
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3"></i> XYZ City, 12345, India</p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  support@ecommerce.com
                </p>
                <p><i className="fas fa-phone me-3"></i> +91 234 567 890</p>
                <p><i className="fas fa-print me-3"></i> +91 234 567 891</p>
              </Col>
              {/* Grid column */}
            </Row>
            {/* Grid row */}

            {/* Newsletter Subscription */}
            <Row className="my-4 justify-content-center w-100">
              <Col md={6}>
                <form action="#" method="post">
                  <div className="input-group justify-content-center">
                    <input type="email" className="form-control" placeholder="Subscribe for updates" aria-label="Email" aria-describedby="basic-addon2" />
                    <button className="btn btn-outline-light" type="submit">Subscribe</button>
                  </div>
                </form>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Section: Links */}

        {/* Copyright */}
        <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © {new Date().getFullYear()} E-commerce Store - All Rights Reserved
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </>
  );
};

export default Footer;
