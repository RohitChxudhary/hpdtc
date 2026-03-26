import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import ParaBirBillingImg from './images/para in bir billing.jpg';
import HamptaPassImg from './images/hampta pass.jpg';
import KangraFortImg from './images/kangra fort.jpeg';
import HotSpringVashishtImg from './images/hot spring vashisht.jpg';

const categories = ['All', 'Adventure', 'Spirituality', 'Wellness', 'Culture'];

const activities = [
  {
    id: 1,
    title: 'Paragliding in Bir Billing',
    category: 'Adventure',
    image: ParaBirBillingImg,
  },
  {
    id: 2,
    title: 'Meditate at Key Monastery',
    category: 'Spirituality',
    image: '#',
  },
  {
    id: 3,
    title: 'Yoga Retreat in Dharamshala',
    category: 'Wellness',
    image: '#',
  },
  {
    id: 4,
    title: 'Trek the Hampta Pass',
    category: 'Adventure',
    image: HamptaPassImg,
  },
  {
    id: 5,
    title: 'Explore Kangra Fort',
    category: 'Culture',
    image: KangraFortImg,
  },
  {
    id: 6,
    title: 'Hot Springs at Vashisht',
    category: 'Wellness',
    image: HotSpringVashishtImg,
  },
];

export default function ThingsToDo() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredActivities = activeCategory === 'All' 
    ? activities 
    : activities.filter(a => a.category === activeCategory);

  return (
    <section className="py-5 bg-h-dark text-white">
      <Container className="py-5">
        <div className="text-center mb-5">
          <h2 className="display-4 font-serif fw-bold mb-4">
            Things to Do
          </h2>
          <p className="lead text-white-50 mx-auto mb-5" style={{ maxWidth: '600px' }}>
            Whether you seek adrenaline, inner peace, or cultural immersion, find your perfect experience.
          </p>
          
          {/* Filter Pills */}
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? 'h-saffron' : 'outline-light'}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-pill px-4 py-2 border-0 ${activeCategory === cat ? 'bg-h-saffron text-white' : 'bg-white bg-opacity-10 text-white-50'}`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div layout>
          <Row className="g-4">
            <AnimatePresence>
              {filteredActivities.map((activity) => (
                <Col md={6} lg={4} key={activity.id}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="position-relative rounded-4 overflow-hidden cursor-pointer group"
                    style={{ height: '320px' }}
                  >
                    <img 
                      src={activity.image} 
                      alt={activity.title} 
                      className="w-100 h-100 object-cover transition-transform duration-700"
                      style={{ transition: 'transform 0.7s ease' }}
                      referrerPolicy="no-referrer"
                      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50" />
                    <div className="position-absolute bottom-0 start-0 p-4 w-100">
                      <span className="text-h-saffron small fw-bold text-uppercase tracking-wider mb-2 d-block">
                        {activity.category}
                      </span>
                      <h3 className="fs-4 font-serif fw-bold text-white mb-0">
                        {activity.title}
                      </h3>
                    </div>
                  </motion.div>
                </Col>
              ))}
            </AnimatePresence>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
}
