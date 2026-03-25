import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { 
  FaCalendarAlt, 
  FaMapMarkedAlt, 
  FaRoute, 
  FaBus, 
  FaHotel, 
  FaInfoCircle, 
  FaChevronRight 
} from 'react-icons/fa';

const PlanYourTrip = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const categories = [
    { 
      title: 'Best Time to Visit', 
      icon: <FaCalendarAlt />, 
      desc: 'Himachal is a year-round destination. Experience lush springs (Mar-Jun), misty monsoons (Jul-Sep), or the magical snowscapes of winter (Oct-Feb).',
      color: 'bg-blue-50'
    },
    { 
      title: 'Top Destinations', 
      icon: <FaMapMarkedAlt />, 
      desc: 'From the colonial charm of Shimla to the adventurous terrains of Manali and the spiritual serenity of Dharamshala, explore the soul of the mountains.',
      color: 'bg-orange-50'
    },
    { 
      title: 'Tourist Circuits', 
      icon: <FaRoute />, 
      desc: "Discover curated routes like the Beas, Dhauladhar, and Tribal circuits, each offering a unique glimpse into the state's diverse heritage and landscapes.",
      color: 'bg-green-50'
    },
    { 
      title: 'How to Reach', 
      icon: <FaBus />, 
      desc: 'Easily accessible by air (Bhuntar, Jubbarhatti), rail (UNESCO Heritage Kalka-Shimla), or by the extensive network of HPTDC premium bus services.',
      color: 'bg-purple-50'
    },
    { 
      title: 'Stay & Booking', 
      icon: <FaHotel />, 
      desc: "Book your stay at HPTDC's premium hotels and cozy cottages. We offer the best locations with breathtaking views and warm Himachali hospitality.",
      color: 'bg-red-50'
    },
    { 
      title: 'Travel Essentials', 
      icon: <FaInfoCircle />, 
      desc: 'Ensure a hassle-free trip with our safety guides, altitude advice, and packing tips. Stay updated with real-time weather and local travel alerts.',
      color: 'bg-cyan-50'
    },
  ];

  return (
    <div className="plan-your-trip bg-light min-vh-100">
      {/* Hero Section */}
      <section className="position-relative overflow-hidden py-5 mb-5" 
               style={{ 
                 background: 'linear-gradient(135deg, var(--h-blue) 0%, #1e40af 100%)',
                 color: 'white',
                 minHeight: '400px',
                 display: 'flex',
                 alignItems: 'center'
               }}>
        {/* Decorative background shapes */}
        <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10" 
             style={{ 
               backgroundImage: 'radial-gradient(circle at 20% 30%, white 1px, transparent 1px)', 
               backgroundSize: '30px 30px' 
             }}></div>
        
        <Container className="position-relative z-1">
          <motion.div {...fadeInUp} className="text-center text-md-start">
            <h1 className="display-2 font-serif fw-bold mt-5 mb-4">
              Your Journey <br />
              <span className="text-h-saffron">Begins Here</span>
            </h1>
            <p className="lead mb-5 opacity-90 max-w-2xl text-balance">
              Let us help you craft the perfect Himachali experience. From snow-capped 
              peaks to emerald valleys, every detail of your trip is handled with care.
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
              <Button size="lg" className="btn-h-saffron px-5 py-3 rounded-pill fw-bold shadow-lg border-0 hover-scale transition-all">
                Create Itinerary
              </Button>
              <Button size="lg" variant="outline-light" className="px-5 py-3 rounded-pill fw-bold hover-bg-white hover-text-dark transition-all">
                View Brochures
              </Button>
            </div>
          </motion.div>
        </Container>

        {/* Floating decorative elements */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="position-absolute d-none d-lg-block"
          style={{ bottom: '10%', right: '10%', width: '150px', height: '150px', background: 'rgba(255,255,255,0.05)', borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
        />
      </section>

      {/* Main Categories Section */}
      <Container className="my-5 pb-5">
        <div className="text-center mb-5">
          <motion.h2 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            className="display-5 font-serif fw-bold text-h-dark mb-3"
          >
            Plan Like a Pro
          </motion.h2>
          <div className="mx-auto" style={{ width: '80px', height: '4px', background: 'var(--h-saffron)', borderRadius: '2px' }}></div>
        </div>

        {/* Grid for Equal Height Cards */}
        <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
          {categories.map((cat, idx) => (
            <Col key={idx} className="d-flex">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="w-100"
              >
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden hover-shadow-xl transition-all duration-300">
                  <div className="card-body p-4 d-flex flex-column">
                    <div className={`p-3 rounded-4 d-inline-flex align-items-center justify-content-center mb-4 ${cat.color} text-h-blue`} 
                         style={{ width: '64px', height: '64px', fontSize: '1.75rem' }}>
                      {cat.icon}
                    </div>
                    <h3 className="h4 fw-bold text-h-dark mb-3">{cat.title}</h3>
                    <p className="text-muted flex-grow-1" style={{ lineHeight: '1.6' }}>
                      {cat.desc}
                    </p>
                    <button className="btn p-0 text-h-saffron fw-bold d-flex align-items-center mt-4 group">
                      Explore Details 
                      <span className="ms-2 transition-transform group-hover-translate-x-1">
                        <FaChevronRight size={14} />
                      </span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </Col>
          ))}
        </div>
      </Container>

      {/* Trust & Stats Section */}
      <section className="py-5" style={{ background: '#f8fafc' }}>
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <motion.div 
                initial={{ opacity: 0, x: -30 }} 
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="display-4 font-serif fw-bold text-h-dark mb-4">Official Tourism Support</h2>
                <p className="lead text-muted mb-4 text-balance">
                  With over four decades of excellence, HPTDC provides comprehensive support
                  for travelers. Our vast network of hotels, transport, and information 
                  centers ensures your comfort and safety.
                </p>
                <div className="d-flex flex-column gap-3 mb-5">
                  <div className="d-flex align-items-start gap-3">
                    <div className="text-h-saffron mt-1"><FaInfoCircle /></div>
                    <div>
                      <h4 className="h6 fw-bold mb-1">Local Expertise</h4>
                      <p className="small text-muted mb-0">Direct access to local guides and specialized mountain staff.</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start gap-3">
                    <div className="text-h-saffron mt-1"><FaInfoCircle /></div>
                    <div>
                      <h4 className="h6 fw-bold mb-1">Government Backed</h4>
                      <p className="small text-muted mb-0">Trusted services with standardized pricing and quality control.</p>
                    </div>
                  </div>
                </div>
                <Button className="btn-h-blue px-4 py-2 rounded-pill fw-bold">
                  Contact Help Desk
                </Button>
              </motion.div>
            </Col>
            <Col lg={6}>
              <div className="bg-white p-5 rounded-4 shadow-sm border">
                <Row className="g-4 text-center">
                  <Col sm={6}>
                    <h3 className="display-5 fw-bold text-h-blue mb-2">55+</h3>
                    <p className="text-muted text-uppercase small tracking-wider">Hotels & Resorts</p>
                  </Col>
                  <Col sm={6}>
                    <h3 className="display-5 fw-bold text-h-blue mb-2">12</h3>
                    <p className="text-muted text-uppercase small tracking-wider">Scenic Districts</p>
                  </Col>
                  <Col sm={6}>
                    <h3 className="display-5 fw-bold text-h-blue mb-2">24/7</h3>
                    <p className="text-muted text-uppercase small tracking-wider">Travel Support</p>
                  </Col>
                  <Col sm={6}>
                    <h3 className="display-5 fw-bold text-h-blue mb-2">1M+</h3>
                    <p className="text-muted text-uppercase small tracking-wider">Happy Travelers</p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Inline styles for hover effects and refinements */}
      <style>{`
        .hover-scale { transition: transform 0.2s; }
        .hover-scale:hover { transform: scale(1.05); }
        .hover-shadow-xl { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important; }
        .group-hover-translate-x-1 { transition: transform 0.2s; }
        .group:hover .group-hover-translate-x-1 { transform: translateX(4px); }
        
        @media (max-width: 768px) {
          .display-2 { font-size: 2.5rem; }
          .display-5 { font-size: 2rem; }
        }
      `}</style>
    </div>
  );
};

export default PlanYourTrip;
