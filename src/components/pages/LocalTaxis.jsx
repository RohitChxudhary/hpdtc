import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MdLocalTaxi,
  MdLocationOn,
  MdOutlineVerified,
  MdSupportAgent,
  MdAirplanemodeActive,
  MdDirectionsRailway,
  MdPhoneInTalk,
} from 'react-icons/md';
import {
  FaCar,
  FaMapMarkerAlt,
  FaMountain,
  FaShieldAlt,
  FaRegCreditCard,
  FaRoute,
  FaClock,
  FaChevronDown,
  FaChevronUp,
} from 'react-icons/fa';
import { GiMountainRoad } from 'react-icons/gi';

const services = [
  {
    Icon: MdAirplanemodeActive,
    title: 'Airport & Rail Transfers',
    desc: 'Punctual pick-up and drop services from Gaggal (Dharamshala), Bhuntar (Manali), and Jubarhatti (Shimla) airports, as well as Kalka and Pathankot rail stations.',
    color: 'var(--primary)',
  },
  {
    Icon: FaMapMarkerAlt,
    title: 'Local Sightseeing',
    desc: 'Full-day and half-day customised tours to temples, waterfalls, snow viewpoints, and heritage sites across all major hill stations.',
    color: 'var(--accent)',
  },
  {
    Icon: FaRoute,
    title: 'Inter-City Travel',
    desc: 'Comfortable outstation trips — Shimla to Manali, Dharamshala to Dalhousie, Manali to Spiti, and more, with experienced mountain drivers.',
    color: 'var(--secondary)',
  },
  {
    Icon: GiMountainRoad,
    title: 'High-Altitude Expeditions',
    desc: 'Specialised 4×4 vehicles for remote trekking base camps and high-altitude passes like Rohtang, Baralacha La, and Kunzum Pass.',
    color: '#7c3aed',
  },
  {
    Icon: FaClock,
    title: 'Outstation Packages',
    desc: 'Multi-day taxi packages for popular circuits — Shimla–Manali–Dharamshala — with flexible start points and return options.',
    color: '#0891b2',
  },
  {
    Icon: MdLocalTaxi,
    title: 'City Cab on Demand',
    desc: 'On-demand city cabs within Shimla, Manali, Dharamshala, and Dalhousie for quick errands, market runs, or hospital visits.',
    color: '#be185d',
  },
];

const fares = [
  { route: 'Shimla Local Sightseeing', vehicle: 'Hatchback / Sedan', rate: '₹2,500 – ₹3,500' },
  { route: 'Manali to Rohtang Pass', vehicle: '4×4 SUV (Permit Required)', rate: '₹4,000 – ₹5,500' },
  { route: 'Dharamshala to McLeodganj', vehicle: 'Auto / Taxi', rate: '₹300 – ₹800' },
  { route: 'Airport Drop (Average)', vehicle: 'Sedan', rate: '₹1,500 – ₹2,500' },
  { route: 'Shimla to Manali (One Way)', vehicle: 'Sedan / Innova', rate: '₹5,500 – ₹8,000' },
  { route: 'Manali to Spiti Valley', vehicle: '4×4 SUV', rate: '₹8,000 – ₹12,000' },
];

const vehicleTypes = [
  {
    icon: FaCar,
    name: 'Hatchback / Sedan',
    eg: 'Swift Dzire, Honda Amaze',
    capacity: '4 passengers',
    best: 'City rides & short transfers',
  },
  {
    icon: MdLocalTaxi,
    name: 'MUV / Innova',
    eg: 'Toyota Innova, Ertiga',
    capacity: '6–7 passengers',
    best: 'Family trips & inter-city rides',
  },
  {
    icon: GiMountainRoad,
    name: '4×4 SUV / Bolero',
    eg: 'Bolero, Thar, Fortuner',
    capacity: '5–7 passengers',
    best: 'High-altitude & offroad routes',
  },
];

const trustPoints = [
  {
    Icon: MdOutlineVerified,
    title: 'Verified Drivers',
    desc: 'All empanelled drivers pass identity checks and mountain-driving assessments before operating under state tourism.',
    color: 'var(--primary)',
  },
  {
    Icon: FaShieldAlt,
    title: 'Fixed Union Tariff',
    desc: 'No haggling. All fares follow union-approved price charts governed by the Himachal Pradesh Motor Vehicles Department.',
    color: 'var(--accent)',
  },
  {
    Icon: MdSupportAgent,
    title: '24 / 7 Helpline',
    desc: 'A dedicated transport helpline is available round the clock for assistance, complaints, or emergency support.',
    color: 'var(--secondary)',
  },
  {
    Icon: FaRegCreditCard,
    title: 'Transparent Billing',
    desc: 'Receive a printed fare receipt at trip completion. No hidden tolls or extra charges beyond the agreed rate.',
    color: '#7c3aed',
  },
];

const faqs = [
  {
    q: 'Do I need to book a taxi in advance in Himachal Pradesh?',
    a: 'During peak season (May–June and October), advance booking is strongly recommended, especially for popular routes like Manali–Rohtang and Dharamshala–McLeodganj. Off-season taxis are readily available at major stands.',
  },
  {
    q: 'Are there shared taxi options available?',
    a: 'Yes. Shared taxis operate on fixed routes between towns like Manali–Kullu, Dharamshala–Palampur, and Shimla–Rampur. They are significantly cheaper but operate on flexible departure schedules.',
  },
  {
    q: 'Is a Rohtang Pass permit mandatory?',
    a: 'Yes. The National Green Tribunal mandates a permit for all vehicles crossing Rohtang Pass. Your taxi operator typically arranges this; always confirm beforehand.',
  },
  {
    q: 'Can I hire a taxi for multiple days?',
    a: 'Absolutely. Multi-day packages are a common and convenient option, particularly for circuits like Shimla–Manali or Dharamshala–Dalhousie–Khajjiar.',
  },
];

/* ────────────────────────── COMPONENT ────────────────────────── */

const LocalTaxis = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div style={{ backgroundColor: 'var(--background)' }}>

      {/* ── Hero ── */}
      <section
        className="position-relative overflow-hidden d-flex align-items-center"
        style={{ minHeight: '420px', background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)' }}
      >
        {/* Decorative blobs */}
        <div className="position-absolute rounded-circle" style={{ width: 420, height: 420, background: 'rgba(255,255,255,0.06)', top: '-120px', right: '-100px' }} />
        <div className="position-absolute rounded-circle" style={{ width: 260, height: 260, background: 'rgba(255,255,255,0.06)', bottom: '-70px', left: '-70px' }} />

        <Container className="position-relative z-1 py-5 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span
              className="text-uppercase fw-bold d-block mt-5 mb-3"
              style={{ opacity: 0.8, letterSpacing: '3px', fontSize: '0.82rem' }}
            >
              HPTDC Transport Services
            </span>
            <h1 className="display-3 font-serif fw-bold mb-4">Local Taxi Services</h1>
            <p className="lead mx-auto" style={{ maxWidth: '600px', opacity: 0.85 }}>
              Safe, comfortable, and professionally driven taxis through the winding roads and
              soaring passes of Himachal Pradesh.
            </p>

            {/* Stat pills */}
            <div className="d-flex flex-wrap justify-content-center gap-3 mt-5">
              {[
                { icon: MdLocalTaxi,         text: 'Authorized Taxi Unions' },
                { icon: FaMountain,           text: 'High-Altitude Capable Fleets' },
                { icon: MdDirectionsRailway,  text: 'Airport & Station Pickups' },
              ].map(({ icon: Icon, text }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + i * 0.15 }}
                  className="d-flex align-items-center gap-2 px-4 py-2 rounded-pill"
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.25)',
                  }}
                >
                  <Icon size={17} />
                  <span className="small fw-semibold">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── Services Grid ── */}
      <Container className="py-5">
        <div className="text-center mb-5">
          <span className="text-uppercase fw-bold d-block mb-2" style={{ color: 'var(--accent)', letterSpacing: '3px', fontSize: '0.8rem' }}>
            What We Offer
          </span>
          <h2 className="display-6 font-serif fw-bold" style={{ color: 'var(--text)' }}>
            Our Transport Offerings
          </h2>
          <div className="mx-auto mt-3 rounded-pill" style={{ width: 56, height: 4, background: 'var(--primary)' }} />
        </div>

        <Row className="g-4">
          {services.map(({ Icon, title, desc, color }, idx) => (
            <Col key={idx} md={6} lg={4}>
              <motion.div
                className="h-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
              >
                <Card
                  className="h-100 border-0 rounded-4 p-4"
                  style={{
                    background: 'white',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
                    transition: 'box-shadow 0.25s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = '0 12px 36px rgba(0,0,0,0.13)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.07)'}
                >
                  <div
                    className="rounded-3 d-flex align-items-center justify-content-center mb-4"
                    style={{ width: 54, height: 54, background: color + '18', color }}
                  >
                    <Icon size={26} />
                  </div>
                  <h5 className="fw-bold mb-2" style={{ color: 'var(--text)' }}>{title}</h5>
                  <p className="small text-muted mb-0">{desc}</p>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* ── Vehicle Types ── */}
      <section className="py-5 bg-white border-top border-bottom">
        <Container>
          <div className="text-center mb-5">
            <span className="text-uppercase fw-bold d-block mb-2" style={{ color: 'var(--accent)', letterSpacing: '3px', fontSize: '0.8rem' }}>
              Fleet
            </span>
            <h2 className="display-6 font-serif fw-bold" style={{ color: 'var(--text)' }}>
              Available Vehicle Categories
            </h2>
            <div className="mx-auto mt-3 rounded-pill" style={{ width: 56, height: 4, background: 'var(--primary)' }} />
          </div>

          <Row className="g-4 justify-content-center">
            {vehicleTypes.map(({ icon: Icon, name, eg, capacity, best }, i) => (
              <Col key={i} md={6} lg={4}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <Card
                    className="border-0 rounded-4 overflow-hidden"
                    style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.07)' }}
                  >
                    <div
                      className="d-flex align-items-center gap-3 px-4 py-3"
                      style={{ background: 'var(--primary)' }}
                    >
                      <Icon size={22} color="white" />
                      <span className="fw-bold text-white">{name}</span>
                    </div>
                    <Card.Body className="p-4">
                      <div className="d-flex flex-column gap-2">
                        <div className="d-flex gap-2 align-items-start">
                          <FaCar size={14} style={{ color: 'var(--accent)', marginTop: 3, flexShrink: 0 }} />
                          <p className="small mb-0"><span className="fw-semibold">Examples:</span> {eg}</p>
                        </div>
                        <div className="d-flex gap-2 align-items-start">
                          <MdLocationOn size={15} style={{ color: 'var(--primary)', marginTop: 2, flexShrink: 0 }} />
                          <p className="small mb-0"><span className="fw-semibold">Capacity:</span> {capacity}</p>
                        </div>
                        <div className="d-flex gap-2 align-items-start">
                          <FaShieldAlt size={13} style={{ color: 'var(--secondary)', marginTop: 3, flexShrink: 0 }} />
                          <p className="small mb-0"><span className="fw-semibold">Best for:</span> {best}</p>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ── Fare Table + Booking Panel ── */}
      <Container className="py-5">
        <Row className="g-4 align-items-stretch">

          {/* Fare Table */}
          <Col lg={7}>
            <motion.div
              className="h-100"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="bg-white p-4 p-lg-5 rounded-4 h-100"
                style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.07)' }}
              >
                <span className="text-uppercase fw-bold d-block mb-2" style={{ color: 'var(--accent)', letterSpacing: '3px', fontSize: '0.78rem' }}>
                  Reference Rates
                </span>
                <h3 className="font-serif fw-bold mb-1" style={{ color: 'var(--text)' }}>
                  Indicative Fare Guidelines
                </h3>
                <p className="text-muted mb-4 small">
                  Rates are subject to seasonal variations and taxi union regulations. Confirm exact fares
                  at booking. All prices are for full-vehicle hire (not per person).
                </p>

                <div className="table-responsive">
                  <table className="table table-hover align-middle mb-0" style={{ fontSize: '0.9rem' }}>
                    <thead>
                      <tr style={{ background: 'rgba(30,58,138,0.06)' }}>
                        <th className="border-0 py-3 fw-bold" style={{ color: 'var(--text)' }}>Route / Package</th>
                        <th className="border-0 py-3 fw-bold" style={{ color: 'var(--text)' }}>Vehicle Type</th>
                        <th className="border-0 py-3 fw-bold text-end" style={{ color: 'var(--text)' }}>Est. Fare</th>
                      </tr>
                    </thead>
                    <tbody>
                      {fares.map(({ route, vehicle, rate }, idx) => (
                        <tr key={idx}>
                          <td className="border-0 py-3 fw-medium" style={{ color: 'var(--text)' }}>{route}</td>
                          <td className="border-0 py-3 text-muted small">{vehicle}</td>
                          <td className="border-0 py-3 text-end fw-bold" style={{ color: 'var(--primary)' }}>{rate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </Col>

          {/* Booking Panel */}
          <Col lg={5}>
            <motion.div
              className="h-100"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="rounded-4 h-100 p-4 p-lg-5 text-white position-relative overflow-hidden"
                style={{ background: 'linear-gradient(145deg, var(--text) 0%, #1a3a6e 100%)' }}
              >
                {/* Background icon */}
                <div className="position-absolute" style={{ top: -20, right: -20, opacity: 0.06 }}>
                  <MdLocalTaxi size={220} />
                </div>

                <div className="position-relative">
                  <span className="text-uppercase fw-bold d-block mb-3" style={{ opacity: 0.7, letterSpacing: '3px', fontSize: '0.78rem' }}>
                    Book a Ride
                  </span>
                  <h3 className="font-serif fw-bold mb-3">Reserve Your Taxi</h3>
                  <p className="mb-5" style={{ opacity: 0.75, fontSize: '0.95rem' }}>
                    Contact our authorised taxi unions or the state tourism helpline to book
                    verified drivers at fixed, transparent pricing.
                  </p>

                  <div className="d-flex flex-column gap-4 mb-5">
                    {/* Helpline */}
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                        style={{ width: 50, height: 50, background: 'var(--accent)' }}
                      >
                        <MdPhoneInTalk size={24} />
                      </div>
                      <div>
                        <p className="mb-0 small text-uppercase fw-bold" style={{ opacity: 0.6, letterSpacing: '2px' }}>Helpline</p>
                        <p className="mb-0 fw-bold fs-5">1800-419-1000</p>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                        style={{ width: 50, height: 50, background: 'rgba(255,255,255,0.12)' }}
                      >
                        <FaRegCreditCard size={22} />
                      </div>
                      <div>
                        <p className="mb-0 small text-uppercase fw-bold" style={{ opacity: 0.6, letterSpacing: '2px' }}>Pricing Policy</p>
                        <p className="mb-0 fw-bold fs-5">Fixed Union Rates</p>
                      </div>
                    </div>

                    {/* Availability */}
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                        style={{ width: 50, height: 50, background: 'rgba(255,255,255,0.12)' }}
                      >
                        <FaClock size={20} />
                      </div>
                      <div>
                        <p className="mb-0 small text-uppercase fw-bold" style={{ opacity: 0.6, letterSpacing: '2px' }}>Availability</p>
                        <p className="mb-0 fw-bold fs-5">24 / 7 Service</p>
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://hptdc.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn w-100 py-3 rounded-pill fw-bold"
                    style={{ background: 'var(--accent)', color: 'white', border: 'none', fontSize: '1rem' }}
                  >
                    Open Booking Portal
                  </a>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* ── Trust & Safety ── */}
      <section className="py-5" style={{ background: 'var(--background)' }}>
        <Container>
          <div className="text-center mb-5">
            <span className="text-uppercase fw-bold d-block mb-2" style={{ color: 'var(--accent)', letterSpacing: '3px', fontSize: '0.8rem' }}>
              Safety First
            </span>
            <h2 className="display-6 font-serif fw-bold" style={{ color: 'var(--text)' }}>
              Why Choose Authorised Taxis?
            </h2>
            <div className="mx-auto mt-3 rounded-pill" style={{ width: 56, height: 4, background: 'var(--primary)' }} />
          </div>

          <Row className="g-4">
            {trustPoints.map(({ Icon, title, desc, color }, i) => (
              <Col key={i} md={6} lg={3}>
                <motion.div
                  className="h-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div
                    className="rounded-4 p-4 h-100"
                    style={{
                      background: 'white',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                      border: '1px solid rgba(0,0,0,0.05)',
                      borderTop: `4px solid ${color}`,
                    }}
                  >
                    <div
                      className="rounded-3 d-flex align-items-center justify-content-center mb-4"
                      style={{ width: 52, height: 52, background: color + '18', color }}
                    >
                      <Icon size={24} />
                    </div>
                    <h6 className="fw-bold mb-2" style={{ color: 'var(--text)' }}>{title}</h6>
                    <p className="small text-muted mb-0">{desc}</p>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ── FAQs ── */}
      <section className="py-5 bg-white border-top">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="text-center mb-5">
                <span className="text-uppercase fw-bold d-block mb-2" style={{ color: 'var(--accent)', letterSpacing: '3px', fontSize: '0.8rem' }}>
                  Common Questions
                </span>
                <h2 className="display-6 font-serif fw-bold" style={{ color: 'var(--text)' }}>
                  Frequently Asked Questions
                </h2>
                <div className="mx-auto mt-3 rounded-pill" style={{ width: 56, height: 4, background: 'var(--primary)' }} />
              </div>

              <div className="d-flex flex-column gap-3">
                {faqs.map(({ q, a }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div
                      className="rounded-4 overflow-hidden"
                      style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.06)' }}
                    >
                      <button
                        className="w-100 d-flex align-items-center justify-content-between gap-3 p-4 text-start border-0 bg-white"
                        style={{ cursor: 'pointer', color: 'var(--text)' }}
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      >
                        <span className="fw-semibold" style={{ fontSize: '0.95rem' }}>{q}</span>
                        {openFaq === i ? <FaChevronUp size={14} style={{ flexShrink: 0, color: 'var(--primary)' }} /> : <FaChevronDown size={14} style={{ flexShrink: 0, color: 'var(--primary)' }} />}
                      </button>

                      <AnimatePresence initial={false}>
                        {openFaq === i && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            style={{ overflow: 'hidden' }}
                          >
                            <div
                              className="px-4 pb-4 small text-muted"
                              style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '1rem' }}
                            >
                              {a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ── CTA Banner ── */}
      <section
        className="py-5"
        style={{ background: 'linear-gradient(135deg, var(--text) 0%, #1a3a6e 100%)' }}
      >
        <Container>
          <motion.div
            className="text-white text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="display-5 font-serif fw-bold mb-3">Ready to Explore Himachal?</h3>
            <p className="lead mb-5 mx-auto" style={{ maxWidth: 520, opacity: 0.8 }}>
              Book a trusted taxi and set off on a journey through snow-capped peaks, alpine meadows,
              and ancient temples — all at your own pace.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <a
                href="https://hptdc.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn px-5 py-3 rounded-pill fw-bold"
                style={{ background: 'var(--accent)', color: 'white', border: 'none' }}
              >
                Book with HPTDC
              </a>
              <a
                href="tel:18004191000"
                className="btn btn-outline-light px-5 py-3 rounded-pill fw-bold"
              >
                Call Helpline
              </a>
            </div>
          </motion.div>
        </Container>
      </section>

    </div>
  );
};

export default LocalTaxis;
