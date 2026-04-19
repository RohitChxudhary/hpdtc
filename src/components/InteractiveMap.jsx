import React, { useState } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Navigation,
  Map as MapIcon,
  ExternalLink,
  Search,
  Info,
} from "lucide-react";
import { Container, Form, Button, Row, Col, Badge } from "react-bootstrap";

export default function InteractiveMap() {
  const [originInput, setOriginInput] = useState("");
  const [destInput, setDestInput] = useState("");
  const [mapUrl, setMapUrl] = useState(
    "https://maps.google.com/maps?q=Himachal%20Pradesh&output=embed",
  );

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
      className="py-4 py-md-5 position-relative overflow-hidden glass-section-dark"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      ></div>
      {/* Decorative Glow Orb */}
      <div
        className="position-absolute"
        style={{
          top: "10%",
          left: "15%",
          width: "300px",
          height: "300px",
          background: "rgba(59, 130, 246, 0.05)",
          filter: "blur(100px)",
          borderRadius: "50%",
        }}
      />

      <Container className="py-2 py-md-4 position-relative z-1">
        <div className="text-center mb-3 mb-md-5">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="display-5 fw-bold mb-2 mb-md-3 text-white tracking-tight">
              <span className="text-primary">Smart </span>Route Finder
            </h2>
            <p
              className="lead text-white-50 mx-auto"
              style={{ maxWidth: "650px", fontSize: "1.1rem" }}
            >
              Navigate the scenic corridors of Himachal with precision. Get
              real-time route visualization for your next mountain getaway.
            </p>
          </motion.div>
        </div>

        {/* Floating Glass Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-5 mb-4 shadow-2xl overflow-hidden"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
          }}
        >
          <div className="p-3 p-md-4">
            <Form onSubmit={handlePlanTour}>
              <Row className="g-4 align-items-end">
                <Col lg={5}>
                  <Form.Group>
                    <Form.Label className="text-white-50 small fw-bold mb-1 mb-md-2 d-flex align-items-center">
                      <MapPin size={14} className="me-2 text-primary" />{" "}
                      STARTING LOCATION
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter city or landmark..."
                      value={originInput}
                      onChange={(e) => setOriginInput(e.target.value)}
                      className="bg-dark border-0 text-white py-2 py-md-3 px-2 px-md-4 rounded-4 custom-input-focus"
                      style={{
                        border: "1px solid rgba(255,255,255,0.1) !important",
                      }}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col lg={5}>
                  <Form.Group>
                    <Form.Label className="text-white-50 small fw-bold mb-1 mb-md-2 d-flex align-items-center">
                      <Navigation size={14} className="me-2 text-info" />{" "}
                      DESTINATION
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Where to?"
                      value={destInput}
                      onChange={(e) => setDestInput(e.target.value)}
                      className="bg-dark border-0 text-white py-2 py-md-3 px-2 px-md-4 rounded-4 custom-input-focus"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col lg={2}>
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 py-2 py-md-3 rounded-4 fw-bold shadow-lg transition-hover d-flex align-items-center justify-content-center"
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
          className="map-container position-relative w-100 rounded-5 overflow-hidden shadow-2xl border border-dark"
          style={{
            boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.7)",
            outline: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter: "grayscale(0.2) contrast(1.1)", // Keeps map clear but slightly desaturated for the dark theme
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
              style={{ backdropFilter: "blur(4px)" }}
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
        .map-container { height: 400px; }
        @media (min-width: 768px) { .map-container { height: 600px; } }
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
