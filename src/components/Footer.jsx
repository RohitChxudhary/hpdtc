import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="bg-h-dark text-white pt-5 pb-4">
      <Container className="pt-5">
        
        <Row className="gy-5 mb-5">
          
          {/* Brand & Contact */}
          <Col lg={4}>
            <span className="font-serif fs-2 fw-bold text-decoration-none mb-4 d-block">
              Himachal<span className="text-h-saffron">.</span>
            </span>
            <p className="text-white-50 small mb-4 lh-lg">
              The official tourism portal of Himachal Pradesh. Discover the magic of the Himalayas, from snow-capped peaks to vibrant valleys.
            </p>
            <div className="d-flex flex-column gap-2 small text-white-50">
              <div className="d-flex align-items-center">
                <MapPin size={16} className="me-2 text-h-saffron flex-shrink-0" />
                Shimla, Himachal Pradesh 171001
              </div>
              <div className="d-flex align-items-center">
                <Phone size={16} className="me-2 text-h-saffron flex-shrink-0" />
                1800-180-8077 (Toll Free)
              </div>
              <div className="d-flex align-items-center">
                <Mail size={16} className="me-2 text-h-saffron flex-shrink-0" />
                tourism@himachal.gov.in
              </div>
            </div>
          </Col>

          {/* Quick Links */}
          <Col md={4} lg={2}>
            <h4 className="fw-bold fs-5 mb-4">Explore</h4>
            <ul className="list-unstyled d-flex flex-column gap-2 small text-white-50">
              <li><a href="#" className="text-white-50 text-decoration-none hover-text-h-saffron transition-colors">Destinations</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none hover-text-h-saffron transition-colors">Things to Do</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none hover-text-h-saffron transition-colors">Festivals & Events</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none hover-text-h-saffron transition-colors">Itineraries</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none hover-text-h-saffron transition-colors">Travel Trade</a></li>
            </ul>
          </Col>

          {/* Plan Your Trip */}
          <Col md={4} lg={2}>
            <h4 className="fw-bold fs-5 mb-4">Plan Your Trip</h4>
            <ul className="list-unstyled d-flex flex-column gap-2 small text-white-50">
              <li><a href="#" className="text-white-50 text-decoration-none hover-text-h-saffron transition-colors">How to Reach</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none hover-text-h-saffron transition-colors">Weather & Best Time</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none hover-text-h-saffron transition-colors">Visa & Entry</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none hover-text-h-saffron transition-colors">HPTDC Hotels</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none hover-text-h-saffron transition-colors">Transport Services</a></li>
            </ul>
          </Col>

          {/* Newsletter & Social */}
          <Col md={4} lg={4}>
            <h4 className="fw-bold fs-5 mb-4">Stay Connected</h4>
            <p className="small text-white-50 mb-3">Subscribe to our newsletter for the latest updates and travel inspiration.</p>
            <Form className="mb-4">
              <InputGroup>
                <Form.Control 
                  type="email" 
                  placeholder="your email address" 
                  className="bg-gray-800 bg-opacity-10 border-white placeholder-white border-opacity-25 text-black shadow-none"
                />
                <Button className="btn-h-saffron fw-semibold">
                  Subscribe
                </Button>
              </InputGroup>
            </Form>
            
            <div className="d-flex gap-3">
              <a href="#" className="rounded-circle bg-white bg-opacity-10 d-flex align-items-center justify-content-center text-white text-decoration-none hover-bg-h-saffron transition-colors" style={{ width: '40px', height: '40px' }}>
                <Facebook size={20} />
              </a>
              <a href="#" className="rounded-circle bg-white bg-opacity-10 d-flex align-items-center justify-content-center text-white text-decoration-none hover-bg-h-saffron transition-colors" style={{ width: '40px', height: '40px' }}>
                <Instagram size={20} />
              </a>
              <a href="#" className="rounded-circle bg-white bg-opacity-10 d-flex align-items-center justify-content-center text-white text-decoration-none hover-bg-h-saffron transition-colors" style={{ width: '40px', height: '40px' }}>
                <Twitter size={20} />
              </a>
              <a href="#" className="rounded-circle bg-white bg-opacity-10 d-flex align-items-center justify-content-center text-white text-decoration-none hover-bg-h-saffron transition-colors" style={{ width: '40px', height: '40px' }}>
                <Youtube size={20} />
              </a>
            </div>
          </Col>

        </Row>

        {/* Bottom Bar */}
        <div className="pt-4 border-top border-white border-opacity-10 d-flex flex-column flex-md-row justify-content-between align-items-center small text-white-50">
          <p className="mb-3 mb-md-0">Â© {new Date().getFullYear()} Department of Tourism & Civil Aviation, Himachal Pradesh. All rights reserved.</p>
          <div className="d-flex gap-3">
            <a href="#" className="text-white-50 text-decoration-none hover-text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white-50 text-decoration-none hover-text-white transition-colors">Terms of Use</a>
            <a href="#" className="text-white-50 text-decoration-none hover-text-white transition-colors">Sitemap</a>
          </div>
        </div>
        
      </Container>
    </footer>
  );
}
