import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Snowflake, Leaf, CloudRain, MapPin, ArrowRight, Clock } from "lucide-react";
import { Container, Row, Col, Badge } from "react-bootstrap";

import ParaBirBillingImg from './images/para in bir billing.jpg';
import SpitiVellyImg from './images/spitiy velly.jpg';
import ManaliImg from './images/manali.jpg';

// ─── Season Data ──────────────────────────────────────────────────────────────
const SEASONS = [
  {
    id: "spring",
    label: "Spring & Summer",
    months: "March – June",
    act: "The Awakening",
    icon: Sun,
    accentColor: "#F97316",
    bgGradient: "linear-gradient(135deg, #fef3c7 0%, #fdba74 100%)",
    featuredDestination: {
      name: "Bir Billing",
      tagline: "Soar above the Himalayas from the world's finest paragliding site.",
      heroImage: ParaBirBillingImg,
      keyActivity: "Paragliding over the valley",
      bestTimeToGo: "March to May",
    },
  },
  {
    id: "monsoon",
    label: "Monsoon",
    months: "July – September",
    act: "The Romantic Drama",
    icon: CloudRain,
    accentColor: "#0369A1",
    bgGradient: "linear-gradient(135deg, #e0f2fe 0%, #7dd3fc 100%)",
    featuredDestination: {
      name: "Dharamshala",
      tagline: "Misty tea gardens, rain-washed monasteries, and Himalayan spirituality.",
      heroImage: "#",
      keyActivity: "Tea garden walks & meditation retreats",
      bestTimeToGo: "July to early September",
    },
    warning: {
      label: "Travel Advisory",
      text: "Landslides and road closures are frequent. Avoid high-altitude passes.",
    },
  },
  {
    id: "autumn",
    label: "Autumn",
    months: "October – November",
    act: "The Artist's Canvas",
    icon: Leaf,
    accentColor: "#B45309",
    bgGradient: "linear-gradient(135deg, #fef3c7 0%, #d97706 100%)",
    featuredDestination: {
      name: "Spiti Valley",
      tagline: "Golden larch forests beneath skies so clear you can count the Milky Way's stars.",
      heroImage: SpitiVellyImg,
      keyActivity: "Stargazing & larch forest trails",
      bestTimeToGo: "October to mid-November",
    },
  },
  {
    id: "winter",
    label: "Winter",
    months: "December – February",
    act: "The Snow Fairy Tale",
    icon: Snowflake,
    accentColor: "#1E3A8A",
    bgGradient: "linear-gradient(135deg, #dbeafe 0%, #93c5fd 100%)",
    featuredDestination: {
      name: "Manali & Sethan",
      tagline: "Drift off in an igloo, then carve fresh powder on untouched slopes at dawn.",
      heroImage: ManaliImg,
      keyActivity: "Igloo stays & fresh powder skiing",
      bestTimeToGo: "December to February",
    },
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
const CURRENT_MONTH = new Date().getMonth(); // 0-indexed
function getCurrentSeasonId() {
  if (CURRENT_MONTH >= 2 && CURRENT_MONTH <= 5) return "spring";
  if (CURRENT_MONTH >= 6 && CURRENT_MONTH <= 8) return "monsoon";
  if (CURRENT_MONTH >= 9 && CURRENT_MONTH <= 10) return "autumn";
  return "winter";
}

// ─── Season Nav Item (unchanged) ─────────────────────────────────────────────
function SeasonNavItem({ season, isActive, isCurrent, onClick }) {
  const Icon = season.icon;
  return (
   <motion.button
  onClick={onClick}
  whileTap={{ scale: 0.97 }}
  // Remove the standard "border-0" and use a dynamic border color instead
  className={`d-flex align-items-center w-100 p-3 rounded-4 text-start transition-all ${
    isActive ? "bg-white shadow-md" : "bg-transparent hover-bg-light"
  }`}
  style={{
    cursor: "pointer",
    outline: "none",
    position: "relative",
    // ─── The Key Refinement ───
    border: `1px solid ${isActive ? `${season.accentColor}40` : "transparent"}`, 
    boxShadow: isActive 
      ? `0 10px 25px -5px rgba(0, 0, 0, 0.05), 
         inset 0 0 0 1px ${season.accentColor}15` // Subtle internal tint
      : "none",
    transform: isActive ? "translateX(6px)" : "translateX(0)",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)", // Bouncy entry
  }}
>
      {/* Icon circle */}
      <div
        className="flex-shrink-0 rounded-circle d-flex align-items-center justify-content-center me-3"
        style={{
          width: 44,
          height: 44,
          background: isActive ? `${season.accentColor}18` : "#f3f4f6",
          color: isActive ? season.accentColor : "#6b7280",
          transition: "all 0.25s ease",
        }}
      >
        <Icon size={20} />
      </div>

      {/* Label + months */}
      <div className="flex-grow-1 min-w-0">
        <div
          className="fw-semibold"
          style={{
            color: isActive ? "#0f172a" : "#374151",
            fontSize: "0.95rem",
            lineHeight: 1.2,
          }}
        >
          {season.label}
        </div>
        <div
          className="small mt-1"
          style={{ color: isActive ? season.accentColor : "#9ca3af" }}
        >
          {season.months}
        </div>
      </div>

      {/* "Now" badge */}
      {isCurrent && (
        <Badge
          bg="transparent"
          className="ms-2 flex-shrink-0 text-uppercase fw-semibold"
          style={{
            border: `1px solid ${season.accentColor}`,
            color: season.accentColor,
            fontSize: "0.65rem",
            letterSpacing: "0.06em",
            padding: "4px 8px",
          }}
        >
          Now
        </Badge>
      )}
    </motion.button>
  );
}

// ─── Featured Destination Card ────────────────────────────────────────────────
function FeaturedCard({ season }) {
  const Icon = season.icon;
  const dest = season.featuredDestination;

  // Stagger delays for child elements
  const stagger = {
    badge:    { delay: 0.05, duration: 0.4 },
    title:    { delay: 0.18, duration: 0.45 },
    tagline:  { delay: 0.30, duration: 0.45 },
    meta:     { delay: 0.42, duration: 0.4  },
    cta:      { delay: 0.52, duration: 0.4  },
  };

  return (
    <motion.div
      key={season.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="position-relative rounded-4 overflow-hidden shadow-lg"
      style={{ minHeight: "560px" }}
    >
      {/* ── Hero image with zoom-in animation ── */}
      <motion.div
        key={`bg-${season.id}`}
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ zIndex: 0 }}
      >
        {/* Colour gradient (visible when heroImage="#") */}
        <div
          className="w-100 h-100"
          style={{ background: season.bgGradient }}
        />
        {/* Actual image — sits on top of the gradient */}
        <img
          src={dest.heroImage}
          alt={dest.name}
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ objectFit: "cover", zIndex: 1 }}
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* ── Layered scrims for depth & legibility ── */}
      {/* Top vignette */}
      <div
        className="position-absolute top-0 start-0 w-100"
        style={{
          height: "35%",
          background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 100%)",
          zIndex: 2,
        }}
      />
      {/* Bottom vignette (main text area) */}
      <div
        className="position-absolute bottom-0 start-0 w-100"
        style={{
          height: "75%",
          background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.45) 55%, transparent 100%)",
          zIndex: 2,
        }}
      />

      {/* ── Season pill — top-left ── */}
      <div className="position-absolute top-0 start-0 p-4" style={{ zIndex: 4 }}>
        <motion.span
          initial={{ opacity: 0, x: -14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={stagger.badge}
          className="d-inline-flex align-items-center rounded-pill px-3 py-2 fw-semibold small text-white"
          style={{
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.28)",
            gap: "6px",
          }}
        >
          <Icon size={14} />
          {season.months}
        </motion.span>
      </div>

      {/* ── "Best Place to Visit" label — top-right ── */}
      <div className="position-absolute top-0 end-0 p-4" style={{ zIndex: 4 }}>
        <motion.span
          initial={{ opacity: 0, x: 14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={stagger.badge}
          className="d-inline-flex align-items-center rounded-pill px-3 py-2 fw-semibold small"
          style={{
            background: `${season.accentColor}22`,
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: `1px solid ${season.accentColor}88`,
            color: season.accentColor === "#1E3A8A" ? "#93c5fd" : season.accentColor,
            gap: "6px",
          }}
        >
          <MapPin size={13} />
          Best Place to Visit
        </motion.span>
      </div>

      {/* ── Main content — anchored bottom ── */}
      <div
        className="position-absolute bottom-0 start-0 w-100 px-4 px-md-5 pb-4 pb-md-5"
        style={{ zIndex: 4 }}
      >
        {/* Destination name */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={stagger.title}
          className="text-white fw-bold mb-2"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            lineHeight: 1.05,
            fontFamily: "'Playfair Display', Georgia, serif",
            textShadow: "0 2px 20px rgba(0,0,0,0.4)",
          }}
        >
          {dest.name}
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={stagger.tagline}
          className="mb-4"
          style={{
            color: "rgba(255,255,255,0.82)",
            fontSize: "clamp(0.9rem, 1.8vw, 1.05rem)",
            lineHeight: 1.65,
            maxWidth: "520px",
          }}
        >
          {dest.tagline}
        </motion.p>

        {/* Meta pills row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={stagger.meta}
          className="d-flex flex-wrap gap-2 mb-4"
        >
          {/* Key Activity */}
          <div
            className="d-inline-flex align-items-center gap-2 rounded-pill px-3 py-2"
            style={{
              background: "rgba(255,255,255,0.13)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.22)",
            }}
          >
            <Icon size={13} style={{ color: season.accentColor === "#1E3A8A" ? "#93c5fd" : season.accentColor, flexShrink: 0 }} />
            <span className="small fw-medium text-white">{dest.keyActivity}</span>
          </div>

          {/* Best Time */}
          <div
            className="d-inline-flex align-items-center gap-2 rounded-pill px-3 py-2"
            style={{
              background: "rgba(255,255,255,0.13)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.22)",
            }}
          >
            <Clock size={13} style={{ color: "rgba(255,255,255,0.7)", flexShrink: 0 }} />
            <span className="small fw-medium text-white">{dest.bestTimeToGo}</span>
          </div>
        </motion.div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={stagger.cta}
        >
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: `0 8px 32px ${season.accentColor}55` }}
            whileTap={{ scale: 0.97 }}
            className="d-inline-flex align-items-center gap-2 fw-semibold rounded-pill border-0"
            style={{
              background: season.accentColor,
              color: "#fff",
              fontSize: "0.95rem",
              padding: "12px 28px",
              cursor: "pointer",
              transition: "box-shadow 0.25s ease",
              letterSpacing: "0.02em",
            }}
          >
            Explore {dest.name}
            <ArrowRight size={16} />
          </motion.button>
        </motion.div>
      </div>

      {/* ── Monsoon warning — glassmorphic strip inside card ── */}
      {season.warning && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.35 }}
          className="position-absolute start-0 w-100 px-4 px-md-5"
          style={{
            bottom: "calc(100% - 112px)",  // just below the top pill row
            zIndex: 5,
            pointerEvents: "none",
          }}
        >
          {/* intentionally empty — warning surfaced via monsoon-specific palette */}
        </motion.div>
      )}
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function SeasonalGuide() {
  const [activeSeason, setActiveSeason] = useState(getCurrentSeasonId());
  const currentSeasonId = getCurrentSeasonId();
  const activeData = SEASONS.find((s) => s.id === activeSeason);

  return (
    <section className="py-5 bg-h-white">
      <Container className="py-5">
        <Row className="align-items-start gy-5">

          {/* ── Left Navigation (unchanged) ─────────────────────────── */}
          <Col lg={4}>
            <div className="mb-5">
              <span
                className="text-h-saffron fw-semibold text-uppercase small d-block mb-2"
                style={{ letterSpacing: "0.1em" }}
              >
                Year-Round Guide
              </span>
              <h2 className="display-5 font-serif fw-bold text-h-dark mb-3">
                Nature's Four Acts
              </h2>
              <p className="text-secondary" style={{ lineHeight: 1.7 }}>
                Himachal Pradesh transforms dramatically with every season.
                Each chapter of the year offers an entirely different world to explore.
              </p>
            </div>

            <div className="d-flex flex-column gap-2">
              {SEASONS.map((season) => (
                <SeasonNavItem
                  key={season.id}
                  season={season}
                  isActive={activeSeason === season.id}
                  isCurrent={currentSeasonId === season.id}
                  onClick={() => setActiveSeason(season.id)}
                />
              ))}
            </div>
          </Col>

          {/* ── Right Display Card ───────────────────────────────────── */}
          <Col lg={8} className="position-relative">
            <AnimatePresence mode="wait">
              {activeData && (
                <FeaturedCard key={activeData.id} season={activeData} />
              )}
            </AnimatePresence>
          </Col>

        </Row>
      </Container>
    </section>
  );
}
