import React, { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "motion/react";
import { Flame, Mountain, Leaf, Landmark, X } from "lucide-react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// ─── Category Data ────────────────────────────────────────────────────────────
// Fix 3: All src replaced with "#" for clean local development
const CATEGORIES = [
  {
    id: "religious",
    title: "Religious",
    icon: Flame,
    thumbColor: "#7C3AED",
    cards: [
      { title: "Monasteries", image: "#" },
      { title: "Temples",     image: "#" },
      { title: "Gurudwaras",  image: "#" },
      { title: "Mosques",     image: "#" },
    ],
  },
  {
    id: "culture",
    title: "Culture",
    icon: Landmark,
    thumbColor: "#0369A1",
    cards: [
      { title: "Kangra Fort",   image: "#" },
      { title: "Key Monastery", image: "#" },
      { title: "Naggar Castle", image: "#" },
      { title: "Gorton Castle", image: "#" },
    ],
  },
  {
    id: "adventure",
    title: "Adventure",
    icon: Mountain,
    thumbColor: "#065F46",
    cards: [
      { title: "Bir Billing",   image: "#" },
      { title: "Rohtang Pass",  image: "#" },
      { title: "Triund Trek",   image: "#" },
      { title: "Solang Valley", image: "#" },
    ],
  },
  {
    id: "wellness",
    title: "Wellness",
    icon: Leaf,
    thumbColor: "#166534",
    cards: [
      { title: "Vashisht Springs",  image: "#" },
      { title: "Tirthan Retreats",  image: "#" },
      { title: "Yoga & Meditation", image: "#" },
      { title: "Mashobra Spa",      image: "#" },
    ],
  },
];

// ─── Spring Config ────────────────────────────────────────────────────────────
const SPRING = { type: "spring", stiffness: 300, damping: 22 };
const LAYOUT_SPRING = { type: "spring", stiffness: 200, damping: 28 };

// ─── Sidebar Mini-Card ────────────────────────────────────────────────────────
function MiniCard({ cat, isOverlayOpen, onClick }) {
  const Icon = cat.icon;
  return (
    <motion.button
      layout
      onClick={onClick}
      whileTap={{ scale: 0.96 }}
      style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
      className="w-full text-left"
      aria-label={`Open ${cat.title}`}
    >
      {/* Card shell — Fix 2: wider from 88 → 128px */}
      <div
        className="rounded-2xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-md backdrop-saturate-150 shadow-xl"
        style={{ width: "128px" }}
      >
        {/* Image container with spring scale on hover */}
        {/* Image wrapper — spring hover scale lives here */}
        <motion.div
          className="overflow-hidden"
          style={{ aspectRatio: "1 / 1", position: "relative", background: `linear-gradient(135deg, ${cat.thumbColor}55 0%, rgba(255,255,255,0.08) 100%)` }}
          whileHover={{ scale: 1.12, y: -4 }}
          transition={SPRING}
        >
          {/* layoutId ties this sidebar image to overlay hero card slot 0 */}
          {/* Fix 3: src="#" — placeholder bg keeps card visible without real image */}
          <motion.img
            layoutId={`${cat.id}-hero-img`}
            src={cat.cards[0].image}
            alt={cat.title}
            className="w-full h-full object-cover"
            animate={{ opacity: isOverlayOpen ? 0 : 1 }}
            transition={{ duration: 0.15 }}
            style={{ display: "block", width: "100%", height: "100%", opacity: cat.cards[0].image === "#" ? 0 : undefined }}
          />
          {/* Icon badge */}
          <div
            className="position-absolute bottom-1 end-1 rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: 22,
              height: 22,
              background: "rgba(249,115,22,0.85)",
              backdropFilter: "blur(4px)",
            }}
          >
            <Icon size={12} className="text-white" />
          </div>
        </motion.div>

        {/* Label */}
        <div className="py-1 px-1 text-center">
          <span
            className="text-white fw-semibold d-block"
            style={{
              fontSize: "10px",
              letterSpacing: "0.04em",
              lineHeight: 1.3,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {cat.title}
          </span>
        </div>
      </div>
    </motion.button>
  );
}

function CategoryOverlay({ cat, onClose }) {
  return (
    <motion.div
      key="overlay-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      onClick={onClose}
      className="position-absolute inset-0 d-flex align-items-center justify-content-center"
      style={{
        zIndex: 60,
        background: "rgba(15,23,42,0.55)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
      }}
    >
      {/* Close button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ delay: 0.2, ...SPRING }}
        onClick={onClose}
        className="position-absolute top-0 end-0 m-4 d-flex align-items-center justify-content-center rounded-circle border border-white/30 bg-white/10 backdrop-blur-sm text-white"
        style={{
          width: 44,
          height: 44,
          cursor: "pointer",
          background: "none",
        }}
        aria-label="Close overlay"
      >
        <X size={20} />
      </motion.button>

      {/* 2×2 Card Grid — stops click propagation so cards don't close overlay */}
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 px-4"
        style={{ maxWidth: "1100px", width: "100%", marginTop: "3rem" }}
        onClick={(e) => e.stopPropagation()}
      >
        {cat.cards.map((card, i) => {
          const isHero = i === 0;
          return (
            <motion.div
              key={card.title}
              // Hero card: stagger delay 0, others delayed
              initial={isHero ? { opacity: 0 } : { opacity: 0, y: 30 }}
              animate={isHero ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={isHero ? { opacity: 0 } : { opacity: 0, y: 20 }}
              transition={
                isHero
                  ? { duration: 0.2 }
                  : { delay: i * 0.1, duration: 0.4, ease: "easeOut" }
              }
              whileHover={{ y: -6, scale: 1.03 }}
              className="relative overflow-hidden rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md shadow-2xl group cursor-pointer"
              style={{ aspectRatio: "3 / 4" }}
            >
              {isHero ? (
                // ← Shared element: same layoutId as sidebar MiniCard
                // Glassmorphic bg placeholder visible when src="#"
                <motion.div
                  layoutId={`${cat.id}-hero-img`}
                  className="absolute inset-0 w-full h-full"
                  style={{
                    background: `linear-gradient(135deg, ${cat.thumbColor}88 0%, rgba(255,255,255,0.06) 100%)`,
                  }}
                >
                  {card.image !== "#" && (
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </motion.div>
              ) : (
                <div
                  className="absolute inset-0 w-full h-full opacity-80"
                  style={{
                    background: `linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 100%)`,
                  }}
                >
                  {card.image !== "#" && (
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500"
                    />
                  )}
                </div>
              )}

              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
                }}
              />

              {/* Hero card accent badge */}
              {isHero && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, ...SPRING }}
                  className="position-absolute top-3 start-3"
                >
                  <span
                    className="d-inline-flex align-items-center gap-1 rounded-pill px-2 py-1 text-white fw-semibold"
                    style={{
                      fontSize: "11px",
                      background: "#F97316",
                      letterSpacing: "0.05em",
                    }}
                  >
                    ★ Spotlight
                  </span>
                </motion.div>
              )}

              {/* Title */}
              <div className="position-absolute bottom-0 start-0 w-100 p-3">
                <h3
                  className="text-white fw-bold m-0"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: isHero ? "1.15rem" : "0.95rem",
                    textShadow: "0 2px 8px rgba(0,0,0,0.6)",
                  }}
                >
                  {card.title}
                </h3>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(null);

  const activeCat = CATEGORIES.find((c) => c.id === activeCategory) ?? null;

  return (
    <MotionConfig transition={LAYOUT_SPRING}>
      <div className="position-relative vh-100 w-100 overflow-hidden d-flex">
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 0 }}>
          <img
            src="#"
            alt="Spiti Valley, Himachal Pradesh"
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

        <motion.div
          animate={{ opacity: activeCategory ? 0.4 : 1 }}
          transition={{ duration: 0.3 }}
          className="position-absolute top-0 start-0 h-100 d-flex flex-column align-items-center justify-content-center gap-2"
          style={{
            zIndex: 40,
            paddingTop: "64px",
            paddingLeft: "14px",
            paddingRight: "6px",
            pointerEvents: activeCategory ? "none" : "auto",
          }}
        >
          <div
            className="d-flex flex-column gap-3 align-items-center py-3 px-2 rounded-3"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          >
            {CATEGORIES.map((cat) => (
              <MiniCard
                key={cat.id}
                cat={cat}
                isOverlayOpen={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
              />
            ))}
          </div>
        </motion.div>

        <AnimatePresence>
          {activeCat && (
            <CategoryOverlay
              key={activeCat.id}
              cat={activeCat}
              onClose={() => setActiveCategory(null)}
            />
          )}
        </AnimatePresence>

        <Container
          className="position-relative h-100 d-flex flex-column align-items-center justify-content-center text-center pt-5 pointer-events-none"
          style={{ zIndex: 10, paddingLeft: "160px" }}
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
