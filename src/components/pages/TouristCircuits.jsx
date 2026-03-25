import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaClock, FaStar, FaArrowRight, FaMapMarkerAlt, FaMap } from 'react-icons/fa';

const TouristCircuits = () => {
  const circuits = [
    {
      title: 'The Beas Circuit',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
      duration: '5-7 Days',
      rating: 4.8,
      desc: 'Follow the Roaring River Beas through Kullu, Manali, and Rohtang Pass.',
      highlights: ['River Rafting', 'Hadimba Temple', 'Solang Valley'],
      route: 'Delhi > Chandigarh > Kullu > Manali > Rohtang > Solang'
    },
    {
      title: 'The Dhauladhar Circuit',
      image: 'https://i0.wp.com/trailsofinju.com/wp-content/uploads/2020/06/A-Tiny-Speck-In-Front-Of-Dhauladhar.jpg?fit=1280%2C720&ssl=1',
      duration: '4-6 Days',
      rating: 4.9,
      desc: 'Explore the majestic Dhauladhar ranges covering Dharamshala and Dalhousie.',
      highlights: ['Tea Gardens', 'Bhagsunag Falls', 'Cricket Stadium'],
      route: 'Pathankot > Dharamshala > McLeodganj > Dalhousie > Khajjiar'
    },
    {
      title: 'The Tribal Circuit',
      image: 'https://www.snowhillsvacation.com/wp-content/uploads/2019/09/Chandratal.jpg',
      duration: '10-12 Days',
      rating: 4.7,
      desc: 'A rugged journey through Kinnaur, Lahaul, and the mystical Spiti Valley.',
      highlights: ['Key Monastery', 'Chandratal Lake', 'High Passes'],
      route: 'Shimla > Sarahan > Sangla > Kalpa > Tabo > Kaza > Manali'
    },
    {
      title: 'The Sutlej Circuit',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/A_view_of_Sutlej_river_Himachal_Pradesh_India_2014.jpg',
      duration: '6-8 Days',
      rating: 4.6,
      desc: 'Discover the heritage of Shimla and the beautiful valleys of the Sutlej river.',
      highlights: ['The Ridge', 'Jakhu Temple', 'Tattapani Hot Springs'],
      route: 'Chandigarh > Shimla > Narkanda > Rampur > Sarahan'
    }
  ];

  return (
    <div className="tourist-circuits bg-white pt-5">
      {/* Page Header */}
      <section className="bg-h-dark text-white py-5 mb-5 position-relative">
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-h-blue opacity-25"></div>
        <Container className="position-relative z-1">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="display-4 font-serif fw-bold mb-3">Tourist Circuits</h1>
            <p className="lead opacity-75 max-w-2xl">
              Embark on curated journeys that capture the soul of Himachal. 
              Each circuit is designed to offer a unique blend of culture, nature, and adventure.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Circuits List */}
      <Container className="mb-5 pb-5">
        <Row className="g-5">
          {circuits.map((circuit, idx) => (
            <Col key={idx} lg={12}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card className="border-0 shadow-sm overflow-hidden rounded-4 group">
                  <Row className="g-0">
                    <Col md={5} className="overflow-hidden">
                      <motion.img 
                        src={circuit.image} 
                        alt={circuit.title}
                        className="h-100 w-100 object-cover transition-all duration-700 group-hover:scale-110"
                        style={{ minHeight: '350px' }}
                      />
                    </Col>
                    <Col md={7}>
                      <Card.Body className="p-4 p-lg-5 d-flex flex-column h-100 justify-content-center">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <Badge className="bg-h-saffron px-3 py-2 rounded-pill d-inline-flex align-items-center gap-2">
                            <FaClock size={14} /> <span>{circuit.duration}</span>
                          </Badge>
                          <div className="text-h-saffron fw-bold d-flex align-items-center gap-1">
                            <FaStar size={16} /> {circuit.rating}
                          </div>
                        </div>
                        <Card.Title className="display-6 font-serif fw-bold text-h-dark mb-3">
                          {circuit.title}
                        </Card.Title>
                        <Card.Text className="text-muted lead mb-4">
                          {circuit.desc}
                        </Card.Text>
                        
                        <div className="mb-4">
                           <h6 className="text-uppercase tracking-widest text-h-blue fw-bold mb-2" style={{ fontSize: '0.75rem' }}>
                            Route Points
                          </h6>
                          <p className="small text-muted mb-3 d-flex align-items-start gap-2">
                            <FaMapMarkerAlt className="text-h-saffron mt-1 flex-shrink-0" />
                            <span>{circuit.route}</span>
                          </p>
                          <h6 className="text-uppercase tracking-widest text-h-blue fw-bold mb-3" style={{ fontSize: '0.75rem' }}>
                            Highlights
                          </h6>
                          <div className="d-flex flex-wrap gap-2">
                            {circuit.highlights.map((h, i) => (
                              <Badge key={i} bg="light" className="text-h-dark border px-3 py-2 fw-medium rounded-pill">
                                {h}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Button className="btn-h-blue d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill align-self-start fw-bold hover-scale transition-all">
                          View Detailed Itinerary <FaArrowRight size={18} />
                        </Button>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Route Your Adventure Section */}
      <section id="route-map" className="py-5 bg-h-blue text-white overflow-hidden">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={5}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="d-inline-flex align-items-center gap-2 bg-white bg-opacity-10 px-3 py-1 rounded-pill mb-4 border border-white border-opacity-20">
                  <FaMap size={14} className="text-h-saffron" />
                  <span className="small fw-bold text-uppercase tracking-wider">Interactive Explorer</span>
                </div>
                <h2 className="display-5 font-serif fw-bold mb-4">Route Your Adventure</h2>
                <p className="lead opacity-75 mb-4">
                  Visualize your journey through the majestic landscapes of Himachal. 
                  Our interactive map highlights the key stops along each circuit to help you plan your perfect mountain escape.
                </p>
                <ul className="list-unstyled mb-5 d-flex flex-column gap-3">
                  <li className="d-flex align-items-center gap-3">
                    <div className="bg-h-saffron p-2 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                      <FaMapMarkerAlt size={14} />
                    </div>
                    <span>Optimized routes for maximum scenic beauty</span>
                  </li>
                  <li className="d-flex align-items-center gap-3">
                    <div className="bg-h-saffron p-2 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                      <FaMapMarkerAlt size={14} />
                    </div>
                    <span>Verified HPTDC hotel stops at every hub</span>
                  </li>
                </ul>
                <Button variant="light" className="text-h-blue px-5 py-3 rounded-pill fw-bold shadow-lg border-0 hover-scale transition-all">
                  Open in Fullscreen
                </Button>
              </motion.div>
            </Col>
            <Col lg={7}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-2 rounded-4 shadow-lg overflow-hidden position-relative"
                style={{ height: '450px' }}
              >
                <iframe 
                  title="Himachal Pradesh Tourism Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1746244.597!2d76!3d31.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390453c367f3107d%3A0x95163cff271e1131!2sHimachal%20Pradesh!5e0!3m2!1sen!2sin!4v1711295000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, borderRadius: '12px' }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      <style>{`
        .hover-scale { transition: transform 0.2s; }
        .hover-scale:hover { transform: scale(1.05); }
      `}</style>
    </div>
  );
};

export default TouristCircuits;
