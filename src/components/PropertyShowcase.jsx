import React from 'react';
import { motion } from 'motion/react';
import { Star, MapPin, ArrowRight } from 'lucide-react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const properties = [
  {
    id: 1,
    name: 'Hotel Kunzum',
    location: 'Manali',
    desc: 'Wake up to the Dhauladhars',
    rating: 4.8,
    reviews: 1240,
    price: '₹4,500',
    image: 'home_hotel_img/kunzam_hotel.jpeg',
  },
  {
    id: 2,
    name: 'The Peterhoff',
    location: 'Shimla',
    desc: 'Heritage stay in the capital',
    rating: 4.9,
    reviews: 890,
    price: '₹6,200',
    image: 'home_hotel_img/peterhoff_hotel.jpeg',
  },
  {
    id: 3,
    name: 'Hotel Bhagsu',
    location: 'Dharamshala',
    desc: 'Serenity amidst the pines',
    rating: 4.7,
    reviews: 560,
    price: '₹3,800',
    image: 'home_hotel_img/bhagsu_hotel.jpeg',
  },
];

export default function PropertyShowcase() {
  return (
    <section className="py-2">
      <Container className="py-5">
        <div className="d-flex justify-content-between align-items-end mb-5">
          <div>
            <h2 className="display-4 font-serif fw-bold text-h-dark mb-3">
              HPTDC Premium Stays
            </h2>
            <p className="lead text-secondary" style={{ maxWidth: '600px' }}>
              Experience the warmth of Himachali hospitality at our iconic properties.
            </p>
          </div>
          <Button variant="link" className="d-none d-md-flex align-items-center text-h-blue fw-bold text-decoration-none p-0">
            View all properties <ArrowRight className="ms-2" size={20} />
          </Button>
        </div>

        <Row className="g-4">
          {properties.map((prop, index) => (
            <Col md={4} key={prop.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-100"
              >
                <Card className="h-100 border-0 rounded-4 overflow-hidden group glass-card">
                  <div className="position-relative overflow-hidden" style={{ height: '250px' }}>
                    <Card.Img 
                      variant="top" 
                      src={prop.image} 
                      alt={prop.name} 
                      className="w-100 h-100 object-cover transition-transform duration-700 group-hover-scale"
                      style={{ transition: 'transform 0.7s ease' }}
                      referrerPolicy="no-referrer"
                      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    <div className="position-absolute top-0 end-0 m-3 bg-white bg-opacity-90 backdrop-blur-sm px-2 py-1 rounded-pill d-flex align-items-center shadow-sm">
                      <Star size={14} className="text-warning me-1" style={{ fill: 'currentColor' }} />
                      <span className="small fw-bold text-dark">{prop.rating}</span>
                      <span className="small text-secondary ms-1">({prop.reviews})</span>
                    </div>
                  </div>
                  
                  <Card.Body className="p-4 d-flex flex-column">
                    <div className="d-flex align-items-center text-secondary small mb-2">
                      <MapPin size={14} className="me-1 text-h-saffron" />
                      {prop.location}
                    </div>
                    <Card.Title className="fs-4 font-serif fw-bold text-h-dark mb-2">
                      {prop.name}
                    </Card.Title>
                    <Card.Text className="text-secondary mb-4 fst-italic flex-grow-1">
                      "{prop.desc}"
                    </Card.Text>
                    
                    <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                      <div>
                        <span className="small text-secondary text-uppercase tracking-wider d-block" style={{ fontSize: '0.7rem' }}>Starting from</span>
                        <span className="fs-5 fw-bold text-h-dark">{prop.price}</span>
                        <span className="small text-secondary"> / night</span>
                      </div>
                      <Button className="btn-h-blue px-4 py-2 rounded-3 fw-bold">
                        Book
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
