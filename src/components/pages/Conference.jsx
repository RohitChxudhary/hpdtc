import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Users,
  Wifi,
  Monitor,
  Coffee,
  Mic,
  Car,
  UtensilsCrossed,
  Projector,
  ChevronRight,
  MapPin,
  Star,
  Phone,
  Mail,
  CheckCircle2,
  Building2,
  CalendarDays,
  Award,
  Clock,
  ArrowRight,
} from 'lucide-react';

/* ─────────────────────────────────────────
   DATA
   ───────────────────────────────────────── */
const VENUES = [
  {
    id: 1,
    name: 'Grand Ballroom',
    location: 'Hotel Peterhof, Shimla',
    capacity: '500',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=900&auto=format&fit=crop',
    features: ['Projector & Screen', 'Central A/C', 'Stage Setup', 'Banquet Dining'],
    rating: 4.9,
    tag: 'Most Popular',
    price: '₹ 45,000 / Day',
    desc: 'Our flagship venue in Shimla — a grand, heritage-style ballroom perfect for large conferences, award nights, and government summits.',
  },
  {
    id: 2,
    name: 'Pinecrest Seminar Hall',
    location: 'Holiday Home, Shimla',
    capacity: '120',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=900&auto=format&fit=crop',
    features: ['High-Speed Wi-Fi', 'Projector', 'Breakout Rooms', 'Tea & Snacks'],
    rating: 4.7,
    tag: 'Best for Workshops',
    price: '₹ 18,000 / Day',
    desc: 'A contemporary seminar hall with panoramic mountain views, ideal for corporate workshops, training programs, and government meetings.',
  },
  {
    id: 3,
    name: 'Kunzam Conference Suite',
    location: 'Hotel Kunzam, Manali',
    capacity: '80',
    image: 'https://hptdc.in/wp-content/uploads/2021/03/kunzam_2.jpg',
    features: ['Video Conferencing', 'Whiteboard', 'Stationery Kit', 'Catering'],
    rating: 4.8,
    tag: null,
    price: '₹ 14,000 / Day',
    desc: 'An intimate, fully-equipped suite in Manali designed for executive board meetings, leadership retreats, and strategic planning sessions.',
  },
  {
    id: 4,
    name: 'Cedar Hall',
    location: 'Hotel Iravati, Chamba',
    capacity: '200',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=900&auto=format&fit=crop',
    features: ['5.1 Sound System', 'LED Wall', 'Breakout Lobby', 'Buffet Meals'],
    rating: 4.6,
    tag: 'Best Value',
    price: '₹ 22,000 / Day',
    desc: 'Set amidst the heritage charm of Chamba, Cedar Hall accommodates mid-scale corporate events, cultural programmes, and seminars.',
  },
];

const FACILITIES = [
  { icon: <Monitor className="w-6 h-6" />, title: 'AV & Projectors', desc: 'State-of-the-art audiovisual equipment with laser projectors, LED screens, and 4K displays available at all venues.' },
  { icon: <Wifi className="w-6 h-6" />, title: 'High-Speed Wi-Fi', desc: 'Dedicated, high-bandwidth internet connectivity to support seamless virtual presentations and live streaming.' },
  { icon: <Mic className="w-6 h-6" />, title: 'PA System & Mic', desc: 'Professional PA systems with wireless lapel, handheld, and podium microphones for crystal-clear audio.' },
  { icon: <Coffee className="w-6 h-6" />, title: 'Tea & Refreshments', desc: 'Freshly brewed tea, coffee, and seasonal Himachali snacks served during breaks by our in-house catering team.' },
  { icon: <UtensilsCrossed className="w-6 h-6" />, title: 'Full Banquet Catering', desc: 'Custom menus featuring multi-cuisine buffets and traditional Himachali platters prepared by our executive chefs.' },
  { icon: <Car className="w-6 h-6" />,  title: 'Transportation', desc: 'Dedicated transport arrangements from airports, railway stations, and bus terminals for delegates and guests.' },
];

const PACKAGES = [
  {
    name: 'Day Conference',
    price: '₹ 12,000',
    unit: 'per event',
    highlight: false,
    perks: [
      'Venue for up to 8 hours',
      'Projector & Screen',
      'Wi-Fi Access',
      'Tea & Snacks (2 sessions)',
      'Stationery & Writing Pads',
    ],
  },
  {
    name: 'Executive Package',
    price: '₹ 28,000',
    unit: 'per event',
    highlight: true,
    perks: [
      'Venue for up to 12 hours',
      'Full AV Setup + PA System',
      'Dedicated Wi-Fi',
      'Working Lunch + Tea Breaks',
      'Accommodation Tie-up Available',
      'Event Coordinator Support',
    ],
  },
  {
    name: 'Summit Package',
    price: '₹ 55,000',
    unit: 'per event',
    highlight: false,
    perks: [
      'Grand Ballroom — 2 Days',
      'LED Wall + Video Conferencing',
      'Gala Dinner Included',
      'VIP Transfers',
      'Dedicated Media Room',
      'On-site Technical Staff',
    ],
  },
];

const PROCESS = [
  { num: '01', title: 'Submit Enquiry', desc: 'Fill in your event details — venue preference, dates, capacity, and requirements.' },
  { num: '02', title: 'Get Custom Quote', desc: 'Our events team reviews your request and shares a personalised proposal within 24 hours.' },
  { num: '03', title: 'Confirm & Pay', desc: 'Approve the package and complete the advance payment to secure your booking.' },
  { num: '04', title: 'Day of Event', desc: 'Our on-site coordinator ensures a smooth setup, flawless execution, and memorable experience.' },
];

/* ─────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────── */
export default function Conference() {
  const [activeVenue, setActiveVenue] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', date: '', guests: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.date) return;
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 bg-[#f5f7fb] min-h-screen font-sans text-gray-800">

      {/* ── HERO ── */}
      <div className="relative h-[560px] mb-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2000&auto=format&fit=crop"
          alt="HPTDC Conference Halls"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 45%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001233]/95 via-[#001233]/55 to-transparent" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 px-5 py-2 rounded-full mb-5"
          >
            <Building2 className="w-4 h-4 text-[#FF5A2A]" />
            <span className="text-white/90 text-xs font-bold uppercase tracking-widest">
              Services &rsaquo; Conference
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-5 leading-tight tracking-tight"
          >
            Host Your Next Event
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed font-medium"
          >
            HPTDC's premium conference halls and event venues across Himachal Pradesh — fully equipped, government-assured, and set amid spectacular mountain scenery.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a href="#venues">
              <button
                className="bg-[#FF5A2A] hover:bg-[#e04a1f] text-white px-10 py-4 !rounded-full font-black text-base transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:scale-95 flex items-center gap-2"
              >
                Explore Venues <ChevronRight className="w-5 h-5" />
              </button>
            </a>
            <a href="#enquiry">
              <button
                className="bg-white/10 backdrop-blur-md border border-white/25 hover:bg-white/20 text-white px-10 py-4 !rounded-full font-black text-base transition-all hover:-translate-y-0.5 active:scale-95"
              >
                Send Enquiry
              </button>
            </a>
          </motion.div>
        </div>

        {/* wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 0C1200 50 900 65 720 40C540 15 240 50 0 0L0 60Z" fill="#f5f7fb" />
          </svg>
        </div>
      </div>

      {/* ── STATS ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '15+', label: 'Venues Across HP', icon: <Building2 className="w-6 h-6" /> },
            { value: '500+', label: 'Max Capacity', icon: <Users className="w-6 h-6" /> },
            { value: '1000+', label: 'Events Hosted', icon: <Award className="w-6 h-6" /> },
            { value: '24×7', label: 'Support Available', icon: <Clock className="w-6 h-6" /> },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-7 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-[#002060]/8 text-[#002060] rounded-full flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-black text-[#002060] mb-1">{stat.value}</div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── VENUES ── */}
      <div id="venues" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-8 h-[2px] bg-[#FF5A2A]" />
          <span className="text-[#FF5A2A] font-bold text-xs uppercase tracking-widest">Our Venues</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#002060] mb-3">
          Premium Conference Spaces
        </h2>
        <p className="text-gray-500 mb-12 text-sm max-w-2xl leading-relaxed">
          Each HPTDC venue is fully equipped with modern infrastructure, professional catering, and dedicated event support — all set against the backdrop of the Himalayas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {VENUES.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover="hover"
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col group cursor-pointer"
              onClick={() => setActiveVenue(activeVenue === v.id ? null : v.id)}
            >
              <div className="relative h-60 overflow-hidden">
                <motion.img
                  src={v.image}
                  alt={v.name}
                  variants={{ hover: { scale: 1.08 } }}
                  transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                {v.tag && (
                  <span className="absolute top-4 left-4 bg-[#FF5A2A] text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                    {v.tag}
                  </span>
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span className="text-xs font-black text-gray-900">{v.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center text-[10px] font-bold text-white/80 uppercase tracking-widest mb-1">
                    <MapPin className="w-3 h-3 mr-1 text-[#FF5A2A]" />
                    {v.location}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#FF5A2A] transition-colors">{v.name}</h3>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{v.desc}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {v.features.map((f, fi) => (
                    <span key={fi} className="bg-[#f5f7fb] text-[#002060] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#002060]/10">
                      {f}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-auto pt-5 border-t border-gray-50">
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase block mb-0.5">Capacity</span>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-[#FF5A2A]" />
                      <span className="font-black text-[#002060] text-lg">{v.capacity} Pax</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-gray-400 uppercase block mb-0.5">Starting from</span>
                    <span className="font-black text-[#002060] text-lg">{v.price}</span>
                  </div>
                </div>

                <AnimatePresence>
                  {activeVenue === v.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-5 pt-5 border-t border-gray-100"
                    >
                      <a href="#enquiry">
                        <button className="w-full bg-[#002060] hover:bg-[#FF5A2A] text-white px-10 py-4 rounded-full font-black text-base transition-all duration-300 shadow-[0_15px_30px_-10px_rgba(0,32,96,0.3)] hover:shadow-[0_15px_30px_-10px_rgba(255,90,42,0.4)] flex items-center justify-center gap-2 hover:-translate-y-0.5 active:scale-95">
                          Enquire About This Venue <ChevronRight className="w-5 h-5" />
                        </button>
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── FACILITIES ── */}
      <div className="bg-white py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-[#FF5A2A]" />
              <span className="text-[#FF5A2A] font-bold text-xs uppercase tracking-widest">What We Offer</span>
              <span className="w-8 h-[2px] bg-[#FF5A2A]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#002060] mb-3">
              Everything Your Event Needs
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              From high-tech AV setups to gourmet Himachali catering, every facility is meticulously managed by our professional events team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACILITIES.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                className="bg-[#f5f7fb] rounded-3xl p-7 flex gap-5 items-start hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group"
              >
                <div className="w-14 h-14 bg-white text-[#002060] rounded-2xl flex items-center justify-center shadow-sm shrink-0 group-hover:bg-[#FF5A2A]/10 group-hover:text-[#FF5A2A] transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                  {f.icon}
                </div>
                <div>
                  <h4 className="font-bold text-[#002060] mb-2 text-base">{f.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PACKAGES ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#FF5A2A]" />
            <span className="text-[#FF5A2A] font-bold text-xs uppercase tracking-widest">Packages</span>
            <span className="w-8 h-[2px] bg-[#FF5A2A]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#002060] mb-3">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Choose from our curated plans or contact us for a custom quote tailored to your event's size and requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`rounded-3xl p-8 flex flex-col shadow-sm hover:shadow-2xl transition-all duration-400 border relative overflow-hidden ${
                pkg.highlight
                  ? 'bg-[#002060] border-[#002060] text-white'
                  : 'bg-white border-gray-100 text-gray-800'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute top-0 right-0 bg-[#FF5A2A] text-white text-[10px] font-black px-4 py-2 rounded-bl-2xl uppercase tracking-wider">
                  Most Chosen
                </div>
              )}
              <h3 className={`text-xl font-black mb-2 ${pkg.highlight ? 'text-white' : 'text-[#002060]'}`}>{pkg.name}</h3>
              <div className="mb-6">
                <span className={`text-4xl font-black ${pkg.highlight ? 'text-white' : 'text-[#002060]'}`}>{pkg.price}</span>
                <span className={`text-sm ml-2 font-medium ${pkg.highlight ? 'text-white/60' : 'text-gray-400'}`}>{pkg.unit}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.perks.map((p, pi) => (
                  <li key={pi} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${pkg.highlight ? 'text-[#FF5A2A]' : 'text-emerald-500'}`} />
                    <span className={pkg.highlight ? 'text-white/85' : 'text-gray-600'}>{p}</span>
                  </li>
                ))}
              </ul>

              <a href="#enquiry">
                <button
                  className={`w-full px-10 py-4 !rounded-full font-black text-base transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5 active:scale-95 ${
                    pkg.highlight
                      ? 'bg-[#FF5A2A] hover:bg-white text-white hover:text-[#002060] shadow-[0_15px_30px_-10px_rgba(255,90,42,0.5)]'
                      : 'bg-[#002060] hover:bg-[#FF5A2A] text-white shadow-[0_15px_30px_-10px_rgba(0,32,96,0.25)] hover:shadow-[0_15px_30px_-10px_rgba(255,90,42,0.35)]'
                  }`}
                >
                  Get This Package <ChevronRight className="w-5 h-5" />
                </button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── HOW IT WORKS ── */}
      <div className="bg-white py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-[#FF5A2A]" />
              <span className="text-[#FF5A2A] font-bold text-xs uppercase tracking-widest">Simple Process</span>
              <span className="w-8 h-[2px] bg-[#FF5A2A]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#002060] mb-3">
              How to Book Your Venue
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Booking a conference venue with HPTDC is straightforward. From enquiry to event day, we handle every detail.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-9 left-[12.5%] right-[12.5%] h-px bg-dashed bg-gradient-to-r from-[#002060]/20 via-[#FF5A2A]/30 to-[#002060]/20 z-0" />
            {PROCESS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-[72px] h-[72px] rounded-full bg-[#002060] text-white font-black text-2xl flex items-center justify-center mb-5 shadow-[0_8px_24px_-6px_rgba(0,32,96,0.35)]">
                  {step.num}
                </div>
                <h4 className="font-bold text-[#002060] text-base mb-2">{step.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ENQUIRY FORM ── */}
      <div id="enquiry" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[40px] shadow-[0_20px_60px_-15px_rgba(0,32,96,0.1)] border border-gray-100 p-8 md:p-14 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-[#FF5A2A]" />
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center shrink-0">
              <CalendarDays className="w-7 h-7 text-[#FF5A2A]" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-[#002060]">Send an Enquiry</h2>
              <p className="text-gray-500 text-sm font-medium">We respond to all enquiries within 24 hours</p>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-12 h-12 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-[#002060] mb-2">Enquiry Submitted!</h3>
                <p className="text-gray-500 mb-8 max-w-sm mx-auto">Our events team will reach out to you within 24 hours with a tailored proposal.</p>
                <button
                  type="button"
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', date: '', guests: '', message: '' }); }}
                  className="bg-[#002060] hover:bg-[#FF5A2A] text-white px-12 py-4 rounded-full font-black text-base transition-all duration-300 shadow-[0_15px_30px_-10px_rgba(0,32,96,0.3)] hover:shadow-[0_15px_30px_-10px_rgba(255,90,42,0.4)] hover:-translate-y-0.5 active:scale-95"
                >
                  Send Another Enquiry
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { label: 'Full Name', name: 'name', type: 'text', placeholder: 'Your full name' },
                    { label: 'Email Address', name: 'email', type: 'email', placeholder: 'you@example.com' },
                    { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '+91 98765 43210' },
                    { label: 'Preferred Event Date', name: 'date', type: 'date', placeholder: '' },
                  ].map((f) => (
                    <div key={f.name} className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-2">{f.label}</label>
                      <input
                        type={f.type}
                        name={f.name}
                        value={formData[f.name]}
                        onChange={handleChange}
                        placeholder={f.placeholder}
                        required={['name', 'email', 'date'].includes(f.name)}
                        className="w-full bg-gray-50 hover:bg-gray-100 border-2 border-transparent focus:border-[#FF5A2A]/30 focus:bg-white rounded-full py-4 px-6 outline-none font-semibold text-gray-800 transition-all"
                      />
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-2">Expected Guests</label>
                  <div className="relative">
                    <Users className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      placeholder="e.g. 150"
                      min="1"
                      className="w-full bg-gray-50 hover:bg-gray-100 border-2 border-transparent focus:border-[#FF5A2A]/30 focus:bg-white rounded-full py-4 pl-14 pr-6 outline-none font-semibold text-gray-800 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-2">Additional Requirements</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your event, preferred venue, catering needs, AV requirements..."
                    className="w-full bg-gray-50 hover:bg-gray-100 border-2 border-transparent focus:border-[#FF5A2A]/30 focus:bg-white rounded-[24px] py-4 px-6 outline-none font-semibold text-gray-800 transition-all resize-none"
                  />
                </div>

                <div className="flex pt-4">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full md:w-auto ml-auto bg-[#002060] hover:bg-[#FF5A2A] text-white px-14 py-4 !rounded-full font-black text-lg transition-all duration-300 shadow-[0_15px_30px_-10px_rgba(0,32,96,0.3)] hover:shadow-[0_15px_30px_-10px_rgba(255,90,42,0.4)] flex items-center justify-center gap-3"
                  >
                    Submit Enquiry <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── CONTACT STRIP ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#002060] to-[#0a3280] rounded-[40px] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Need a Custom Event Solution?</h3>
            <p className="text-white/65 text-sm leading-relaxed max-w-lg">
              Our dedicated events team specialises in government functions, corporate summits, cultural events, and educational tours across Himachal Pradesh.
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0">
            <a href="tel:01772651370">
              <button className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 !rounded-full font-black text-sm transition-all hover:-translate-y-0.5 active:scale-95">
                <Phone className="w-5 h-5 text-[#FF5A2A]" /> Call Us
              </button>
            </a>
            <a href="mailto:hptdc@gmail.com">
              <button className="flex items-center gap-3 bg-[#FF5A2A] hover:bg-white text-white hover:text-[#002060] px-8 py-4 !rounded-full font-black text-sm transition-all duration-300 shadow-[0_15px_30px_-10px_rgba(255,90,42,0.4)] hover:-translate-y-0.5 active:scale-95">
                <Mail className="w-5 h-5" /> Email Us
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
