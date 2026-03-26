import React from 'react';
import { motion } from 'motion/react';
import { Flame, Mountain, Leaf, Landmark } from 'lucide-react';
import { Container } from 'react-bootstrap';

const CATEGORIES = [
  {
    id: "religious",
    title: "Religious",
    icon: Flame,
    color: "#7C3AED",
    bg: "rgba(124, 58, 237, 0.1)",
    description: "Explore spiritual sites and ancient monasteries."
  },
  {
    id: "culture",
    title: "Cultural",
    icon: Landmark,
    color: "#0369A1",
    bg: "rgba(3, 105, 161, 0.1)",
    description: "Discover the rich history and architecture."
  },
  {
    id: "adventure",
    title: "Adventurous",
    icon: Mountain,
    color: "#065F46",
    bg: "rgba(6, 95, 70, 0.1)",
    description: "Conquer the peaks and thrilling treks."
  },
  {
    id: "wellness",
    title: "Wellness",
    icon: Leaf,
    color: "#166534",
    bg: "rgba(22, 101, 52, 0.1)",
    description: "Rejuvenate in natural hot springs and spas."
  },
];

export default function HorizontalCategories() {
  return (
    <section className="py-5 bg-light">
      <Container className="py-4">
        <div className="text-center mb-5">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="display-6 font-serif fw-bold text-dark mb-3"
          >
            Explore by Category
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lead text-muted mx-auto"
            style={{ maxWidth: '600px' }}
          >
            Find exactly what you're looking for in the majestic landscapes of Himachal.
          </motion.p>
        </div>

        <div className="row g-4 justify-content-center">
          {CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div className="col-12 col-sm-6 col-lg-3" key={cat.id}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: idx * 0.15, 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  whileHover={{ 
                    y: -12, 
                    scale: 1.03,
                    boxShadow: '0 25px 40px -12px rgba(0,0,0,0.15)',
                    borderColor: 'transparent'
                  }}
                  className="group h-100 p-4 rounded-4 text-center cursor-pointer transition-all border border-light bg-white"
                  style={{ 
                    boxShadow: '0 10px 30px -10px rgba(0,0,0,0.08)' 
                  }}
                >
                  <motion.div 
                    className="mx-auto rounded-circle d-flex align-items-center justify-content-center mb-4"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 3 + idx * 0.4, 
                      ease: "easeInOut" 
                    }}
                    style={{ 
                      width: '80px', 
                      height: '80px', 
                      backgroundColor: cat.bg 
                    }}
                  >
                    <div className="transition-transform duration-300 group-hover:scale-[1.15] group-hover:rotate-12">
                      <Icon size={36} color={cat.color} />
                    </div>
                  </motion.div>
                  <h4 className="fw-bold text-dark mb-2 transition-colors group-hover:text-primary">{cat.title}</h4>
                  <p className="text-muted small mb-0 transition-colors group-hover:text-dark">{cat.description}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
