import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Snowflake, Leaf, CloudRain, MapPin, AlertTriangle, CheckCircle } from "lucide-react";
import { Container, Row, Col, Badge } from "react-bootstrap";

// ─── Season Data: Nature's Four Acts ─────────────────────────────────────────
const SEASONS = [
  {
    id: "spring",
    label: "Spring & Summer",
    months: "March – June",
    act: "The Awakening",
    icon: Sun,
    accentColor: "#F97316",          // saffron
    bgGradient: "linear-gradient(135deg, #fef3c7 0%, #fdba74 100%)",
    description:
      "As winter's grip loosens, Himachal bursts back to life. Melting snow feeds crystal rivers, rhododendrons paint the hillsides vivid crimson, and the high passes gradually reopen. Temperatures range from a pleasant 15–25°C in the valleys — perfect weather to explore without the summer crowds.",
    locations: ["Shimla", "Manali", "Bir Billing"],
    whyVisit: [
      "Apple orchards in full bloom",
      "Great Himalayan National Park treks",
      "Paragliding at Bir — World's best site",
      "River rafting in Kullu Valley",
    ],
    tags: ["Trekking", "Paragliding", "Rafting", "Wildlife"],
    warning: null,
  },
  {
    id: "monsoon",
    label: "Monsoon",
    months: "July – September",
    act: "The Romantic Drama",
    icon: CloudRain,
    accentColor: "#0369A1",          // deep blue
    bgGradient: "linear-gradient(135deg, #e0f2fe 0%, #7dd3fc 100%)",
    description:
      "The rains transform Himachal into a vivid emerald world. Every hillside drips with lush vegetation, dramatic waterfalls appear overnight, and the valleys wear a perpetual romantic mist. The lower foothills around Dharamshala and Kasauli are spectacular — though the high mountains demand caution.",
    locations: ["Dharamshala", "Kasauli", "Dalhousie"],
    whyVisit: [
      "Lush green landscapes at their peak",
      "Roaring waterfalls along every road",
      "Fewer tourists — peaceful tea-house treks",
      "Dramatic cloud-sea views at sunset",
    ],
    tags: ["Waterfalls", "Tea Gardens", "Photography", "Offbeat"],
    warning: {
      label: "Travel Advisory",
      text: "Landslides and road closures are frequent during heavy rains. Avoid high-altitude passes (Rohtang, Spiti). Always check road conditions before travel and carry emergency supplies.",
    },
  },
  {
    id: "autumn",
    label: "Autumn",
    months: "October – November",
    act: "The Artist's Canvas",
    icon: Leaf,
    accentColor: "#B45309",          // amber
    bgGradient: "linear-gradient(135deg, #fef3c7 0%, #d97706 100%)",
    description:
      "October blankets Himachal in a breathtaking palette of gold, amber, and russet. The post-monsoon skies are flawlessly clear, the air sharp and invigorating. The harvest brings Dussehra and Kullu Festivals into full swing — and the Spiti high desert shines under deep-blue skies before snow seals it shut.",
    locations: ["Spiti Valley", "Kullu", "Sangla"],
    whyVisit: [
      "Crystal-clear skies — ideal for photography",
      "Kullu Dussehra — Himachal's grandest festival",
      "Spiti Valley before winter road closures",
      "Apple harvest in Kinnaur",
    ],
    tags: ["Photography", "Festivals", "Spiti Drives", "Apple Trails"],
    warning: null,
  },
  {
    id: "winter",
    label: "Winter",
    months: "December – February",
    act: "The Snow Fairy Tale",
    icon: Snowflake,
    accentColor: "#1E3A8A",          // deep blue
    bgGradient: "linear-gradient(135deg, #dbeafe 0%, #93c5fd 100%)",
    description:
      "A thick white blanket transforms Himachal into a storybook dreamland. Shimla's Mall Road sparkles under fresh snowfall, while Solang Valley and Kufri become ski-resort hubs. Manali in winter is pure magic — silent pine forests, frozen waterfalls, and the warmth of a roaring fireplace after a day on the slopes.",
    locations: ["Manali", "Solang Valley", "Shimla"],
    whyVisit: [
      "Skiing and snow sports at Solang Valley",
      "Snowfall on Shimla's colonial architecture",
      "Rohtang Pass snowfall experience",
      "New Year and Christmas celebrations in Manali",
    ],
    tags: ["Skiing", "Snow Trekking", "Snowfall", "Festivals"],
    warning: null,
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────
const CURRENT_MONTH = new Date().getMonth(); // 0-indexed
function getCurrentSeasonId() {
  if (CURRENT_MONTH >= 2 && CURRENT_MONTH <= 5) return "spring";
  if (CURRENT_MONTH >= 6 && CURRENT_MONTH <= 8) return "monsoon";
  if (CURRENT_MONTH >= 9 && CURRENT_MONTH <= 10) return "autumn";
  return "winter";
}

// ─── Season Nav Item ──────────────────────────────────────────────────────────
function SeasonNavItem({ season, isActive, isCurrent, onClick }) {
  const Icon = season.icon;
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      className={`d-flex align-items-center w-100 p-3 rounded-4 text-start border-0 transition-all ${
        isActive
          ? "bg-white shadow-sm"
          : "bg-transparent hover-bg-light text-secondary"
      }`}
      style={{
        cursor: "pointer",
        borderLeft: isActive ? `4px solid ${season.accentColor}` : "4px solid transparent",
        outline: "none",
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

      {/* Current season badge */}
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

// ─── Display Card ─────────────────────────────────────────────────────────────
function SeasonCard({ season }) {
  const Icon = season.icon;
  return (
    <motion.div
      key={season.id}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="position-relative rounded-4 overflow-hidden shadow-lg"
      style={{ minHeight: "540px" }}
    >
      {/* Background image placeholder */}
      <img
        src="#"
        alt={`${season.label} in Himachal Pradesh`}
        className="w-100 h-100 object-cover position-absolute top-0 start-0"
        style={{ zIndex: 0 }}
        referrerPolicy="no-referrer"
      />

      {/* Colour gradient fill (visible when src="#") */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ background: season.bgGradient, zIndex: 1 }}
      />

      {/* Dark scrim for text legibility */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)",
          zIndex: 2,
        }}
      />

      {/* "Act" badge — top-left */}
      <div className="position-absolute top-0 start-0 p-4" style={{ zIndex: 3 }}>
        <motion.span
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.35 }}
          className="d-inline-flex align-items-center rounded-pill px-3 py-2 fw-semibold small text-white"
          style={{
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.25)",
          }}
        >
          <Icon size={15} className="me-2" />
          {season.months}
        </motion.span>
      </div>

      {/* Main content overlay — anchored to bottom-0 ONLY, no top constraint */}
      <div
        className="position-absolute bottom-0 top-18 start-0 w-100 px-4 px-md-5 pb-4 pb-md-5"
        style={{ zIndex: 3 }}
      >
        {/* Glass panel — max-height prevents it from eating the top badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="rounded-4"
          style={{
            background: "rgba(255,255,255,0.18)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.3)",
            maxHeight: "73vh",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* ── Pinned header (never scrolls away) ── */}
          <div className="px-4 pt-4 pb-3" style={{ flexShrink: 0 }}>
            {/* Act name */}
            <div
              className="small fw-semibold text-uppercase mb-2"
              style={{ color: season.accentColor, letterSpacing: "0.12em" }}
            >
              Act · {season.act}
            </div>

            {/* Season title */}
            <h3
              className="font-serif fw-bold text-white mb-0"
              style={{ fontSize: "clamp(1.25rem, 2.8vw, 1.85rem)", lineHeight: 1.2 }}
            >
              {season.label}
            </h3>
          </div>

          {/* ── Scrollable body ── */}
          <div
            className="px-4 pb-4 seasonal-glass-scroll"
            style={{
              overflowY: "auto",
              flexGrow: 1,
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(255,255,255,0.25) transparent",
            }}
          >
            {/* Warning banner — shown only for Monsoon */}
            {season.warning && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="d-flex align-items-start gap-2 rounded-3 mb-3 p-3"
                style={{
                  background: "rgba(239,68,68,0.15)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  border: "1px solid rgba(239,68,68,0.35)",
                }}
              >
                <AlertTriangle size={18} className="flex-shrink-0 mt-1" style={{ color: "#fca5a5" }} />
                <div>
                  <div className="fw-bold small mb-1" style={{ color: "#fca5a5", letterSpacing: "0.04em" }}>
                    ⚠ {season.warning.label}
                  </div>
                  <div className="small" style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>
                    {season.warning.text}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Description */}
            <p
              className="mb-4 mt-2"
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "0.88rem",
                lineHeight: 1.7,
                maxWidth: "580px",
              }}
            >
              {season.description}
            </p>

            {/* Highlights + Locations row */}
            <div className="d-flex flex-column flex-sm-row gap-4 mb-4">
              {/* Why Visit */}
              <div className="flex-grow-1">
                <div
                  className="small fw-semibold mb-2 text-uppercase"
                  style={{ color: "rgba(255,255,255,0.6)", letterSpacing: "0.08em" }}
                >
                  Highlights
                </div>
                <ul className="list-unstyled m-0 d-flex flex-column gap-1">
                  {season.whyVisit.map((item) => (
                    <li key={item} className="d-flex align-items-start gap-2">
                      <CheckCircle size={14} className="flex-shrink-0 mt-1" style={{ color: season.accentColor }} />
                      <span className="small" style={{ color: "rgba(255,255,255,0.82)", lineHeight: 1.45 }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Locations */}
              <div className="flex-shrink-0">
                <div
                  className="small fw-semibold mb-2 text-uppercase"
                  style={{ color: "rgba(255,255,255,0.6)", letterSpacing: "0.08em" }}
                >
                  Key Destinations
                </div>
                <div className="d-flex flex-column gap-2">
                  {season.locations.map((loc) => (
                    <div key={loc} className="d-flex align-items-center gap-2">
                      <MapPin size={13} style={{ color: season.accentColor }} />
                      <span className="small fw-medium text-white">{loc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Activity tags */}
            <div className="d-flex gap-2 flex-wrap">
              {season.tags.map((tag) => (
                <Badge
                  key={tag}
                  bg="transparent"
                  className="fw-normal px-3 py-2 rounded-3"
                  style={{
                    border: "1px solid rgba(255,255,255,0.35)",
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "0.78rem",
                  }}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
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

          {/* ── Left Navigation ─────────────────────────────────────────── */}
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

          {/* ── Right Display Card ───────────────────────────────────────── */}
          <Col lg={8} className="position-relative">
            <AnimatePresence mode="wait">
              {activeData && <SeasonCard key={activeData.id} season={activeData} />}
            </AnimatePresence>
          </Col>

        </Row>
      </Container>
    </section>
  );
}
