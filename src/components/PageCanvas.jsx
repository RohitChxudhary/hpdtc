import React from "react";

const ORBS = [
  // Hero zone — top
  {
    id: 1,
    left: "12%",
    top: "14%",
    color: "rgba(249,115,22,0.44)",   // saffron
    size: 700,
    anim: "orbDrift1 6s ease-in-out infinite 0s",
  },
  {
    id: 2,
    left: "78%",
    top: "18%",
    color: "rgba(30,58,138,0.5)",    // navy
    size: 780,
    anim: "orbDrift2 6s ease-in-out infinite 3s",
  },
  // Categories / ItineraryBuilder zone
  {
    id: 3,
    left: "-2%",
    top: "23%",
    color: "rgba(6,78,59,0.7)",      // forest green
    size: 640,
    anim: "orbDrift3 6s ease-in-out infinite 6s",
  },
  {
    id: 4,
    left: "85%",
    top: "32%",
    color: "rgba(124,58,237,0.6)",   // violet
    size: 700,
    anim: "orbDrift1 6s ease-in-out infinite 2s",
  },
    {
    id: 5,
    left: "18%",
    top: "40%",
    color: "rgba(30,58,138,0.7)",    // navy
    size: 780,
    anim: "orbDrift2 6s ease-in-out infinite 3s",
  },
  // Story / PlacesToGo zone
  {
    id: 6,
    left: "38%",
    top: "50%",
    color: "rgba(30,58,138,0.5)",    // navy
    size: 840,
    anim: "orbDrift2 6s ease-in-out infinite 8s",
  },
  // SeasonalGuide zone
  {
    id: 7,
    left: "7%",
    top: "63%",
    color: "rgba(249,115,22,0.55)",   // saffron
    size: 1040,
    anim: "orbDrift3 6s ease-in-out infinite 4s",
  },
  // InteractiveMap zone
  {
    id: 8,
    left: "76%",
    top: "74%",
    color: "rgba(6,78,59,0.7)",      // forest green
    size: 810,
    anim: "orbDrift1 6s ease-in-out infinite 10s",
  },
  // PropertyShowcase / SocialProof zone
  {
    id: 9,
    left: "30%",
    top: "89%",
    color: "rgba(30,58,138,0.5)",    // navy
    size: 940,
    anim: "orbDrift2 6s ease-in-out infinite 7s",
  },
];

const GRAIN_URI =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function PageCanvas({ children }) {
  return (
    <div className="page-canvas">
      <div aria-hidden="true" className="page-canvas__orbs">
        {ORBS.map((orb) => (
          <div
            key={orb.id}
            style={{
              zIndex: 100,
              position: "absolute",
              left: orb.left,
              top: orb.top,
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
              filter: "blur(60px)",
              transform: "translate(-50%, -50%)",
              animation: orb.anim,
              willChange: "transform",
            }}
          />
        ))}
      </div>

      <div
        aria-hidden="true"
        className="page-canvas__grain"
        style={{
          backgroundImage: GRAIN_URI,
        }}
      />

      <div className="page-canvas__content">{children}</div>
    </div>
  );
}
