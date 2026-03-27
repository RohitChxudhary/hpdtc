import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Map as MapIcon, ExternalLink, Search, Info } from 'lucide-react';
import { Container, Form, Button, Row, Col, Badge } from 'react-bootstrap';

export default function InteractiveMap() {
  const [originInput, setOriginInput] = useState('');
  const [destInput, setDestInput] = useState('');
  const [mapUrl, setMapUrl] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.22!2d77.1734!3d31.1048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390578e3e35d0f67%3A0x1fb89467614e59f!2sHimachal%20Pradesh!5e0!3m2!1sen!2sin!4v1647425000000!5m2!1sen!2sin");

  const handlePlanTour = (e) => {
    e.preventDefault();
    if (originInput && destInput) {
       const url = `https://www.google.com/maps?q=${encodeURIComponent(originInput)}+to+${encodeURIComponent(destInput)}&output=embed`;
       setMapUrl(url);
    }
  };

  return (
    <section 
      id="interactive-map" 
      className="py-5 position-relative overflow-hidden"
      style={{ 
        background: 'radial-gradient(circle at 50% -20%, #1e293b 0%, #0f172a 100%)', // Deep Navy/Black Gradient
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Decorative Glow Orb */}
      <div 
        className="position-absolute" 
        style={{ 
          top: '10%', left: '15%', width: '300px', height: '300px', 
          background: 'rgba(59, 130, 246, 0.05)', filter: 'blur(100px)', borderRadius: '50%' 
        }} 
      />

      <Container className="py-5 position-relative z-1">
        <div className="text-center mb-5">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge bg="primary" className="mb-3 px-3 py-2 rounded-pill fw-medium shadow-sm">
              Smart Route Finder
            </Badge>
            <h2 className="display-4 fw-bold mb-3 text-white tracking-tight">
              Plan Your <span className="text-primary">HP Adventure</span>
            </h2>
            <p className="lead text-white-50 mx-auto" style={{ maxWidth: '650px', fontSize: '1.1rem' }}>
              Navigate the scenic corridors of Himachal with precision. Get real-time route visualization for your next mountain getaway.
            </p>
          </motion.div>
        </div>

        {/* Floating Glass Form Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-5 mb-5 shadow-2xl overflow-hidden"
          style={{ 
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
          }}
        >
          <div className="p-4 p-md-5">
            <Form onSubmit={handlePlanTour}>
              <Row className="g-4 align-items-end">
                <Col lg={5}>
                  <Form.Group>
                    <Form.Label className="text-white-50 small fw-bold mb-2 d-flex align-items-center">
                      <MapPin size={14} className="me-2 text-primary" /> STARTING LOCATION
                    </Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter city or landmark..." 
                      value={originInput}
                      onChange={(e) => setOriginInput(e.target.value)}
                      className="bg-dark border-0 text-white py-3 px-4 rounded-4 custom-input-focus"
                      style={{ border: '1px solid rgba(255,255,255,0.1) !important' }}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col lg={5}>
                  <Form.Group>
                    <Form.Label className="text-white-50 small fw-bold mb-2 d-flex align-items-center">
                      <Navigation size={14} className="me-2 text-info" /> DESTINATION
                    </Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Where to?" 
                      value={destInput}
                      onChange={(e) => setDestInput(e.target.value)}
                      className="bg-dark border-0 text-white py-3 px-4 rounded-4 custom-input-focus"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col lg={2}>
                  <Button 
                    variant="primary" 
                    type="submit" 
                    className="w-100 py-3 rounded-4 fw-bold shadow-lg transition-hover d-flex align-items-center justify-content-center"
                  >
                    Find <Search size={18} className="ms-2" />
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </motion.div>

        {/* The Map "Stage" */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="position-relative w-100 rounded-5 overflow-hidden shadow-2xl border border-dark"
          style={{ 
            height: '600px',
            boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.7)',
            outline: '1px solid rgba(255,255,255,0.05)'
          }}
        >
          <iframe 
            src={mapUrl}
            width="100%" 
            height="100%" 
            style={{ 
              border: 0, 
              filter: 'grayscale(0.2) contrast(1.1)', // Keeps map clear but slightly desaturated for the dark theme
            }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Interactive Route Map"
          ></iframe>

          {/* Floating UI Detail on Map */}
          <div className="position-absolute bottom-0 start-0 p-4 w-100 pointer-events-none">
             <div 
               className="d-inline-flex align-items-center bg-dark bg-opacity-75 text-white px-3 py-2 rounded-pill small border border-secondary"
               style={{ backdropFilter: 'blur(4px)' }}
             >
                <Info size={14} className="me-2 text-primary" />
                Live traffic and weather conditions may affect travel time.
             </div>
          </div>
        </motion.div>
        
        <div className="mt-5 text-center">
          <p className="text-white-50 small mb-0 opacity-50">
            <MapIcon size={14} className="me-2" /> 
            Official Route Data Powered by Google Cloud
          </p>
        </div>
      </Container>

      <style>{`
        .custom-input-focus:focus {
          background-color: #111827 !important;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2) !important;
          border-color: #3b82f6 !important;
        }
        .transition-hover {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .transition-hover:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3) !important;
        }
        .shadow-2xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </section>
  );
}