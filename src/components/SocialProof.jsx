import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Heart, MessageCircle } from 'lucide-react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ManaliImg from './images/manali.webp';

const posts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=2940&auto=format&fit=crop',
    likes: '1.2k',
    comments: 84,
    author: '@travelwithme'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2076&auto=format&fit=crop',
    likes: '856',
    comments: 42,
    author: '@himalayan_soul'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=2803&auto=format&fit=crop',
    likes: '2.4k',
    comments: 156,
    author: '@trekking_diaries'
  },
  {
    id: 4,
    image: ManaliImg,
    likes: '3.1k',
    comments: 210,
    author: '@manali_vibes'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1581793746485-04698e79a4e8?q=80&w=2940&auto=format&fit=crop',
    likes: '945',
    comments: 67,
    author: '@kinnaur_diaries'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?q=80&w=2940&auto=format&fit=crop',
    likes: '1.8k',
    comments: 112,
    author: '@wellness_retreats'
  }
];

export default function SocialProof() {
  return (
    <section className="py-4 py-md-5 overflow-hidden">
      <Container className="py-3 py-md-5">
        <div className="text-center mb-5">
          <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4" style={{ width: '48px', height: '48px', background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}>
            <Instagram size={24} className="text-white" />
          </div>
          <h2 className="display-5 font-serif fw-bold text-h-dark mb-3">
            #HimachalTourism
          </h2>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: '600px' }}>
            See Himachal through the eyes of our travelers. Share your moments with us.
          </p>
        </div>

        <Row className="g-3">
          {posts.map((post, index) => (
            <Col xs={6} md={4} lg={2} key={post.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="position-relative overflow-hidden rounded-3 cursor-pointer group"
                style={{ aspectRatio: '1/1' }}
              >
                <img loading="lazy" src={post.image} 
                  alt={`Instagram post by ${post.author}`} 
                  className="w-100 h-100 object-cover transition-transform duration-500 group-hover-scale"
                  style={{ transition: 'transform 0.5s ease' }}
                  referrerPolicy="no-referrer"
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-0 hover-opacity-50 transition-opacity d-flex flex-column align-items-center justify-content-center text-white" style={{ transition: 'opacity 0.3s ease' }}>
                  <div className="d-flex gap-3 mb-2">
                    <span className="d-flex align-items-center fw-bold small">
                      <Heart size={16} className="me-1" style={{ fill: 'currentColor' }} /> {post.likes}
                    </span>
                    <span className="d-flex align-items-center fw-bold small">
                      <MessageCircle size={16} className="me-1" style={{ fill: 'currentColor' }} /> {post.comments}
                    </span>
                  </div>
                  <span className="small fw-medium text-white-50">{post.author}</span>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
        
        <div className="mt-5 text-center">
          <Button variant="outline-dark" className="rounded-pill px-5 py-2 fw-bold border-2">
            Follow Us @HimachalTourism
          </Button>
        </div>
      </Container>
    </section>
  );
}
