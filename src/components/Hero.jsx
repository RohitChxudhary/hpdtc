import React from "react";
import { motion, MotionConfig } from "motion/react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import HimachalHero from './images/akash-rawat.jpg';


const LAYOUT_SPRING = { type: "spring", stiffness: 200, damping: 28 };

export default function Hero() {
  const navigate = useNavigate();

  return (
    <MotionConfig transition={LAYOUT_SPRING}>
      <div className="position-relative vh-100 w-100 overflow-hidden d-flex">
        <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden" style={{ zIndex: 0 }}>
          <motion.img loading="lazy" initial={{ scale: 1.0 }}
            animate={{ scale: 1.12 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            src={HimachalHero}
            alt="Khajjiar in Winter, Himachal Pradesh"
            className="w-100 h-100 object-cover"
            referrerPolicy="no-referrer"
          />
          <div
            className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none"
            style={{
              background: "rgba(15, 23, 42, 0.5)",
            }}
          />
        </div>

        <Container
          className="position-relative h-100 d-flex flex-column align-items-center justify-content-center text-center pt-5 pointer-events-none"
          style={{ zIndex: 10 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-100 pointer-events-auto"
            style={{ maxWidth: "800px" }}
          >
            <span
              className="text-h-saffron fw-semibold text-uppercase  mb-3 d-block"
              style={{ letterSpacing: "0.1em" }}
            >
              Devbhumi — Land of the Gods
            </span>

            <h1 className="display-1 font-serif fw-bold text-white mb-4">
              Find Your <br />
              <span className="fst-italic fw-light">Altitude.</span>
            </h1>

            <p
              className="lead text-white mx-auto mb-5 fw-light"
              style={{ maxWidth: "600px" }}
            >
              From the <span className="fw-semibold text-orange-400">snow-capped peaks</span> of Spiti to the <span className="fw-semibold text-orange-400">lush valleys</span> of Kangra,
              discover the untamed beauty of Himachal Pradesh.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="d-flex justify-content-center mt-4 gap-3 gap-md-4 flex-column flex-sm-row"
            >
              <motion.button
                onClick={() => window.open("https://play.google.com/store/apps/details?id=nic.hp.hptdc.app&hl=en", "_blank")}
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(249,115,22,0.4)' }}
                whileTap={{ scale: 0.95 }}
                // animate={{ y: [0, -5, 0] }}
                // transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="rounded-pill fw-bold text-white border-0 position-relative glass-shine overflow-hidden"
                style={{
                  padding: "18px 42px",
                  fontSize: "1.15rem",
                  minWidth: "250px", 
                  background: "linear-gradient(135deg, #F97316 0%, #EA580C 100%)",
                  cursor: "pointer",
                  letterSpacing: "0.5px",
                  boxShadow: '0 10px 20px -5px rgba(234,88,12,0.5)'
                }}
              >
                <span className="position-relative" style={{ zIndex: 1 }}>Download App</span>
              </motion.button>

              <motion.button
                onClick={() => {
                  navigate("/weather");
                  window.scrollTo(0, 0);
                }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }}
                whileTap={{ scale: 0.95 }}
                className="rounded-pill fw-bold text-white border-2 border-white/40 position-relative backdrop-blur-md"
                style={{
                  padding: "18px 42px",
                  fontSize: "1.15rem",
                  minWidth: "250px", // Exact same size
                  background: "rgba(255,255,255,0.1)",
                  cursor: "pointer",
                  letterSpacing: "0.5px"
                }}
              >
                <span className="position-relative" style={{ zIndex: 1 }}>Check Weather</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </MotionConfig>
  );
}
