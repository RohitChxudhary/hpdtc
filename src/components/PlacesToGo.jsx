import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import ShimlaImg from './images/shimla.jpeg';
import ManaliImg from './images/manali.jpg';
import SpitiVellyImg from './images/spitiy velly.jpg';
import KinnaurImg from './images/kinnaur.jpeg';

const places = [
  {
    name: 'Shimla',
    desc: 'The Queen of Hills',
    image: ShimlaImg,
    colSpan: 'col-md-6',
    rowSpan: 'h-100',
  },
  {
    name: 'Manali',
    desc: 'Valley of the Gods',
    image: ManaliImg,
    colSpan: 'col-md-3',
    rowSpan: 'h-50',
  },
  {
    name: 'Spiti Valley',
    desc: 'The Middle Land',
    image: SpitiVellyImg,
    colSpan: 'col-md-3',
    rowSpan: 'h-100',
  },
  {
    name: 'Dharamshala',
    desc: 'Little Lhasa',
    image: '#',
    colSpan: 'col-md-3',
    rowSpan: 'h-50',
  },
  {
    name: 'Kinnaur',
    desc: 'Land of Fairytales',
    image: KinnaurImg,
    colSpan: 'col-md-6',
    rowSpan: 'h-50',
  },
];

export default function PlacesToGo() {
  return (
    <section className="py-5 bg-white">
      <Container className="py-5">
        <div className="d-flex justify-content-between align-items-end mb-5">
          <div>
            <h2 className="display-4 font-serif fw-bold text-h-dark mb-3">
              Places to Go
            </h2>
            <p className="lead text-secondary" style={{ maxWidth: '600px' }}>
              Discover the diverse regions of Himachal, from bustling hill stations to remote, high-altitude deserts.
            </p>
          </div>
          <Button variant="link" className="d-none d-md-flex align-items-center text-h-blue fw-bold text-decoration-none p-0">
            View all destinations <ArrowUpRight className="ms-1" size={20} />
          </Button>
        </div>

        {/* Bento Grid - Simplified for Bootstrap */}
        <Row className="g-4" style={{ minHeight: '600px' }}>
          {places.map((place, index) => (
            <Col key={place.name} md={place.colSpan === 'col-md-6' ? 6 : 3} className="d-flex flex-column">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="position-relative overflow-hidden rounded-4 cursor-pointer flex-grow-1 group w-100"
                style={{ minHeight: '250px' }}
              >
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-100 h-100 object-cover transition-transform duration-700 group-hover-scale"
                  style={{ transition: 'transform 0.7s ease' }}
                  referrerPolicy="no-referrer"
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25 hover-opacity-50 transition-opacity" style={{ transition: 'opacity 0.3s ease' }} />
                
                <div className="position-absolute bottom-0 start-0 p-4 w-100 text-white">
                  <p className="small fw-medium text-uppercase tracking-wider mb-1 opacity-75">
                    {place.desc}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <h3 className="fs-3 font-serif fw-bold mb-0">
                      {place.name}
                    </h3>
                    <div className="rounded-circle bg-white bg-opacity-25 backdrop-blur-sm d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                      <ArrowUpRight size={20} className="text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
        
        <Button variant="link" className="d-md-none mt-4 w-100 d-flex justify-content-center align-items-center text-h-blue fw-bold text-decoration-none">
          View all destinations <ArrowUpRight className="ms-1" size={20} />
        </Button>
      </Container>
    </section>
  );
}
