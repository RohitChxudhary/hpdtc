import React from 'react';
import { motion } from 'motion/react';
import { Flame, Mountain, Leaf, Landmark, ArrowRight, Compass } from 'lucide-react';
import { Container } from 'react-bootstrap';
import BudhImg from './images/budh_mandir_card.jpeg';
import RaulaneImg from './images/raulane_festival_card.jpeg';

const CATEGORIES = [
  {
    id: "religious",
    title: "Religious",
    icon: Flame,
    color: "#EAB308", // Golden Yellow
    description: "Explore spiritual sites, ancient temples, and majestic monasteries.",
    image: BudhImg
  },
  {
    id: "culture",
    title: "Cultural",
    icon: Landmark,
    color: "#3B82F6", // Blue
    description: "Discover the rich history, vibrant traditions, and beautiful architecture.",
    image: RaulaneImg
  },
  {
    id: "adventure",
    title: "Adventure",
    icon: Mountain,
    color: "#10B981", // Emerald
    description: "Conquer snow-capped peaks and experience thrilling trekking routes.",
    image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "wellness",
    title: "Wellness",
    icon: Leaf,
    color: "#6366F1", // Indigo
    description: "Rejuvenate in natural hot springs and serene luxury nature retreats.",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800"
  },
];

export default function HorizontalCategories() {
  return (
    <section className="py-5 bg-light position-relative" style={{ overflow: 'hidden' }}>
      {/* Decorative Background Elements */}
      <div 
        className="position-absolute rounded-circle bg-primary" 
        style={{ width: '400px', height: '400px', top: '-10%', left: '-5%', filter: 'blur(100px)', zIndex: 0, opacity: 0.15 }}
      />
      <div 
        className="position-absolute rounded-circle bg-success" 
        style={{ width: '300px', height: '300px', bottom: '-10%', right: '-5%', filter: 'blur(80px)', zIndex: 0, opacity: 0.15 }}
      />

      <Container className="py-5 position-relative z-1">
        <div className="text-center mb-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill mb-3 bg-white border shadow-sm"
          >
            <Compass size={16} className="text-primary" />
            <span className="text-dark fw-semibold small text-uppercase tracking-wider" style={{ letterSpacing: '1px' }}>Experiences</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="display-5 font-serif fw-bold text-dark mb-3"
          >
            Explore by Category
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lead text-muted mx-auto"
            style={{ maxWidth: '650px' }}
          >
            Find exactly what you're looking for in the majestic landscapes of Himachal. From thrilling adventures to serene spiritual escapes.
          </motion.p>
        </div>

        <div className="row g-4 justify-content-center">
          {CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div className="col-12 col-md-6 col-lg-3" key={cat.id}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: idx * 0.15, 
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                  whileHover="hover"
                  className="h-100 position-relative rounded-4 overflow-hidden shadow"
                  style={{ minHeight: '380px', cursor: 'pointer', backgroundColor: '#fff' }}
                >
                  {/* Image Background Layer */}
                  <motion.div 
                    className="position-absolute w-100 h-100 top-0 start-0"
                    variants={{
                      hover: { scale: 1.1 }
                    }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    <img 
                      src={cat.image} 
                      alt={cat.title} 
                      className="w-100 h-100"
                      style={{ objectFit: 'cover' }}
                    />
                  </motion.div>

                  {/* Gradient Overlay Layer */}
                  <div 
                    className="position-absolute w-100 h-100 top-0 start-0" 
                    style={{ 
                      background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.05) 100%)',
                      transition: 'background 0.3s ease'
                    }}
                  />

                  {/* Content Container Layer */}
                  <div className="position-absolute w-100 h-100 top-0 start-0 d-flex flex-column justify-content-between p-4 z-1">
                    
                    {/* Top Section */}
                    <div className="d-flex justify-content-between align-items-start">
                      <motion.div 
                        className="rounded-circle d-flex align-items-center justify-content-center bg-white shadow"
                        style={{ width: '50px', height: '50px' }}
                        variants={{
                          hover: { y: -3, scale: 1.05 }
                        }}
                      >
                        <Icon size={24} color={cat.color} />
                      </motion.div>

                      <motion.div 
                        className="rounded-circle d-flex align-items-center justify-content-center bg-white text-dark shadow-sm"
                        style={{ width: '36px', height: '36px', opacity: 0, x: -10 }}
                        variants={{
                          hover: { opacity: 1, x: 0 }
                        }}
                        transition={{ duration: 0.3 }}
                      >
                         <ArrowRight size={18} />
                      </motion.div>
                    </div>

                    {/* Bottom Section */}
                    <motion.div 
                      className="text-white"
                      variants={{
                        hover: { y: -8 }
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="fw-bold mb-2 fs-4">{cat.title}</h3>
                      <p className="mb-0 text-light" style={{ fontSize: '0.95rem', lineHeight: '1.5', opacity: 0.9 }}>
                        {cat.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
