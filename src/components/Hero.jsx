import React from "react";
import { motion, MotionConfig } from "motion/react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LAYOUT_SPRING = { type: "spring", stiffness: 200, damping: 28 };

export default function Hero() {
  const navigate = useNavigate();

  return (
    <MotionConfig transition={LAYOUT_SPRING}>
      <div className="position-relative vh-100 w-100 overflow-hidden d-flex">
        <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden" style={{ zIndex: 0 }}>
          <motion.img
            initial={{ scale: 1.0 }}
            animate={{ scale: 1.12 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            src="/hero-bg.jpg"
            alt="Khajjiar in Winter, Himachal Pradesh"
            className="w-100 h-100 object-cover"
            referrerPolicy="no-referrer"
          />
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.5) 100%)",
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
              className="text-h-saffron fw-semibold text-uppercase small mb-3 d-block"
              style={{ letterSpacing: "0.1em" }}
            >
              Devbhumi — Land of the Gods
            </span>

            <h1 className="display-1 font-serif fw-bold text-white mb-4">
              Find Your <br />
              <span className="fst-italic fw-light">Altitude.</span>
            </h1>

            <p
              className="lead text-white-50 mx-auto mb-5 fw-light"
              style={{ maxWidth: "600px" }}
            >
              From the snow-capped peaks of Spiti to the lush valleys of Kangra,
              discover the untamed beauty of Himachal Pradesh.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="d-flex justify-content-center mt-4 gap-3 gap-md-4 flex-column flex-sm-row"
            >
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-pill fw-bold shadow-lg position-relative overflow-hidden group backdrop-blur-md border border-white/50 text-white"
                style={{
                  padding: "14px 32px",
                  fontSize: "16px",
                  background: "#F97316",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <span className="position-relative" style={{ zIndex: 1 }}>
                  Book Now
                </span>
                <div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    transform: "skewX(-20deg) translateX(-150%)",
                    transition: "transform 0.5s ease",
                    background:
                      "linear-gradient(to right, transparent, rgba(255,255,255,0.25), transparent)",
                  }}
                />
              </motion.button>

              <motion.button
                onClick={() => {
                  navigate("/weather");
                  window.scrollTo(0, 0);
                }}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-pill fw-bold shadow-lg position-relative overflow-hidden group backdrop-blur-md text-white"
                style={{
                  padding: "14px 32px",
                  fontSize: "16px",
                  background: "#F97316",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <span className="position-relative" style={{ zIndex: 1 }}>
                  Check Weather
                </span>
                <div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    transform: "skewX(-20deg) translateX(-150%)",
                    transition: "transform 0.5s ease",
                    background:
                      "linear-gradient(to right, transparent, rgba(255,255,255,0.25), transparent)",
                  }}
                />
              </motion.button>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </MotionConfig>
  );
}
