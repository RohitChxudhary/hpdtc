import React from "react";
import { motion, MotionConfig } from "motion/react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import HimachalHero from "./images/_hero_3.webp";
import HeroCard from "./images/key_monastry2.jpg";

const LAYOUT_SPRING = { type: "spring", stiffness: 200, damping: 28 };

export default function Hero() {
  const navigate = useNavigate();

  return (
    <MotionConfig transition={LAYOUT_SPRING}>
      <div className="position-relative vh-100 w-100 overflow-hidden d-flex">
        <div
          className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden"
          style={{ zIndex: 0 }}
        >
          <motion.img
            loading="lazy"
            initial={{ scale: 1.0 }}
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

        <style>
          {`
            .hero-safe-zone {
              padding-top: 120px;
              padding-bottom: 60px;
              min-height: 100vh;
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              position: relative;
              z-index: 10;
              max-width: 1320px;
              pointer-events: none;
              text-align: left;
            }
            .hero-grid-layout {
              display: grid;
              grid-template-columns: 1fr;
              gap: 40px;
              align-items: start;
              width: 100%;
            }
            @media (min-width: 992px) {
              .hero-safe-zone {
                padding-top: 130px;
              }
              .hero-grid-layout {
                grid-template-columns: 1.1fr 0.9fr;
                gap: 50px;
              }
            }
          `}
        </style>
        <Container className="hero-safe-zone">
          <div className="hero-grid-layout">
            {/* LEFT COLUMN (Copy & Actions) */}
            <div className="pointer-events-auto">
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="d-inline-block px-4 py-2 mb-4 rounded-pill fw-semibold text-uppercase"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid gray/50",
                  color: "var(--h-saffron)",
                  letterSpacing: "0.15em",
                  backdropFilter: "blur(8px)",
                  fontSize: "0.9rem",
                }}
              >
                Devbhumi — Land of the Gods
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="font-serif fw-bold text-white mb-4"
                style={{
                  fontSize: "clamp(3.5rem, 5vw, 5rem)",
                  lineHeight: 1.1,
                }}
              >
                Find Your <br />
                <span
                  className="fst-italic fw-light"
                  style={{ color: "var(--h-saffron)" }}
                >
                  Altitude.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-5 fw-light"
                style={{
                  color: "rgba(255, 250, 253, 0.82)",
                  maxWidth: "540px",
                  fontSize: "1.15rem",
                  lineHeight: "1.6",
                }}
              >
                From the snow-capped peaks of Spiti to the lush valleys of
                Kangra, discover the untamed beauty of Himachal Pradesh.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="d-flex gap-3 gap-md-4 flex-column flex-sm-row mb-5"
              >
                <motion.button
                  onClick={() =>
                    window.open(
                      "https://play.google.com/store/apps/details?id=nic.hp.hptdc.app&hl=en",
                      "_blank",
                    )
                  }
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(226, 196, 140, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-pill fw-bold border-0 position-relative overflow-hidden"
                  style={{
                    padding: "16px 36px",
                    fontSize: "1.1rem",
                    background:
                      "linear-gradient(135deg, var(--h-saffron) 0%, var(--h-saffron) 100%)",
                    color: "var(--white)",
                    cursor: "pointer",
                    letterSpacing: "0.5px",
                    boxShadow: "0 10px 20px -5px rgba(226, 196, 140, 0.5)",
                  }}
                >
                  <span className="position-relative" style={{ zIndex: 1 }}>
                    Download App
                  </span>
                </motion.button>

                <motion.button
                  onClick={() => {
                    navigate("/weather");
                    window.scrollTo(0, 0);
                  }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-pill fw-bold text-white position-relative"
                  style={{
                    padding: "16px 36px",
                    fontSize: "1.1rem",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    backdropFilter: "blur(12px)",
                    cursor: "pointer",
                    letterSpacing: "0.5px",
                  }}
                >
                  <span className="position-relative" style={{ zIndex: 1 }}>
                    Check Weather
                  </span>
                </motion.button>
              </motion.div>
            </div>

            {/* RIGHT COLUMN (Visuals & Floating Cards) */}
            <div className="pointer-events-auto position-relative d-flex flex-column align-items-center w-100">
              <div
                className="position-relative w-100 d-flex justify-content-center align-items-start"
                style={{ minHeight: "480px" }}
              >
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="position-relative w-100"
                  style={{
                    maxWidth: "380px",
                    aspectRatio: "4/5",
                    maxHeight: "410px",
                    borderRadius: "34px",
                    // border: "1px solid var(--h-saffron)",
                    boxShadow: "var(--shadow-deep)",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <img
                    src={HeroCard}
                    alt="Himachal Scenic View"
                    className="w-100 h-100 object-fit-cover"
                    style={{ objectFit: "cover" }}
                  />
                </motion.div>

                {/* Desktop Floating Cards */}
                <div className="d-none d-lg-block w-100 h-100 position-absolute top-0 start-0 pointer-events-none d-flex justify-content-center">
                  <div
                    className="position-relative w-100 h-100"
                    style={{ maxWidth: "470px" }}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 1 }}
                      className="position-absolute pointer-events-auto"
                      style={{
                        top: "40px",
                        left: "-26px",
                        background: "rgba(255, 255, 255, 0.1)",
                        border: "1px solid rgba(14, 24, 40, 0.45)",
                        backdropFilter: "blur(12px)",
                        borderRadius: "20px",
                        padding: "16px 24px",
                        boxShadow: "var(--shadow-deep)",
                        zIndex: 2,
                        height: "max-content",
                      }}
                    >
                      <span
                        className="d-block small text-uppercase mb-1 font-semibold"
                        style={{
                          color: "rgb(14, 24, 40)",
                          letterSpacing: "1px",
                        }}
                      >
                        THE HIGH DESERT
                      </span>
                      <h3
                        className="h5 mb-0 fw-semibold"
                        style={{ color: "var(--h-saffron)" }}
                      >
                        Spiti
                      </h3>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                      className="position-absolute pointer-events-auto"
                      style={{
                        bottom: "56px",
                        right: "-24px",
                        background: "rgba(255, 255, 255, 0.1)",
                        border: "1px solid rgba(14, 24, 40, 0.45)",
                        backdropFilter: "blur(12px)",
                        borderRadius: "20px",
                        padding: "16px 24px",
                        boxShadow: "var(--shadow-deep)",
                        zIndex: 2,
                        height: "max-content",
                      }}
                    >
                      <span
                        className="d-block small text-uppercase mb-1 font-semibold"
                        style={{
                          color: "rgb(14, 24, 40)",
                          letterSpacing: "1px",
                        }}
                      >
                        Vibe
                      </span>
                      <h3
                        className="h5 mb-0 fw-semibold"
                        style={{ color: "var(--h-saffron)" }}
                      >
                        Eternal & Astral
                      </h3>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Mobile Static Cards */}
              <div
                className="d-flex d-lg-none flex-column flex-sm-row gap-3 w-100 mt-4 px-2"
                style={{ maxWidth: "470px" }}
              >
                <div
                  className="flex-grow-1"
                  style={{
                    background: "rgba(14, 24, 40, 0.76)",
                    backdropFilter: "blur(12px)",
                    borderRadius: "20px",
                    padding: "16px 24px",
                    boxShadow: "var(--shadow-deep)",
                    height: "max-content",
                  }}
                >
                  <span
                    className="d-block small text-uppercase mb-1"
                    style={{
                      color: "rgba(255, 255, 255, 0.6)",
                      letterSpacing: "1px",
                    }}
                  >
                    Highest Peak
                  </span>
                  <h3
                    className="h5 mb-0 fw-semibold"
                    style={{ color: "var(--h-saffron)" }}
                  >
                    Reo Purgyil
                  </h3>
                </div>
                <div
                  className="flex-grow-1"
                  style={{
                    background: "rgba(14, 24, 40, 0.76)",
                    backdropFilter: "blur(12px)",
                    borderRadius: "20px",
                    padding: "16px 24px",
                    boxShadow: "var(--shadow-deep)",
                    height: "max-content",
                  }}
                >
                  <span
                    className="d-block small text-uppercase mb-1"
                    style={{
                      color: "rgba(255, 255, 255, 0.6)",
                      letterSpacing: "1px",
                    }}
                  >
                    Vibe
                  </span>
                  <h3
                    className="h5 mb-0 fw-semibold"
                    style={{ color: "var(-h-saffron)" }}
                  >
                    Serene & Untamed
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </MotionConfig>
  );
}
