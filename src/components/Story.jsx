import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Container, Row, Col } from 'react-bootstrap';
import HimachaliCultureImg from './images/Kullu-Dussehra( culture).jpeg';
import SpitiMonasteryImg from './images/spitiy.jpg';

export default function Story() {
  return (
    <section className="py-5 bg-h-white position-relative overflow-hidden">
      <Container className="py-5">
        <Row className="align-items-center gy-5">

          {/* Text Content */}
          <Col lg={6} className="order-2 order-lg-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="display-4 font-serif fw-bold text-h-dark mb-4">
                The Story of <br />
                <span className="fst-italic text-h-green fw-light">Himachal</span>
              </h2>
              <div className="bg-h-saffron mb-4" style={{ width: '50px', height: '4px' }}></div>
              <p className="lead text-secondary mb-4">
                Nestled in the western Himalayas, Himachal Pradesh is a tapestry of ancient traditions, diverse cultures, and breathtaking landscapes. It's a place where every valley has its own deity, every village its own dialect, and every season its own distinct color.
              </p>
              <p className="lead text-secondary mb-5">
                From the colonial charm of Shimla to the stark, lunar landscapes of Lahaul and Spiti, journey through a land that has inspired sages, artists, and wanderers for millennia.
              </p>
              <button className="btn btn-link text-h-blue fw-bold text-decoration-none p-0 d-flex align-items-center group">
                Read the full story
                <ArrowRight className="ms-2" size={20} />
              </button>
            </motion.div>
          </Col>

          {/* Image Collage */}
          <Col lg={6} className="order-1 order-lg-2">
            <div className="position-relative" style={{ height: '500px' }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="position-absolute top-0 end-0 w-75 h-75 rounded-4 overflow-hidden shadow-lg"
              >
                <img
                  src={HimachaliCultureImg}
                  alt="Himachali Culture"
                  className="w-100 h-100 object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="position-absolute bottom-0 start-0 w-75 h-75 rounded-4 overflow-hidden shadow-lg border border-4 border-white"
              >
                <img
                  src={SpitiMonasteryImg}
                  alt="Monastery in Spiti"
                  className="w-100 h-100 object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}
