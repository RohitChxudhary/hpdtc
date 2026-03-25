import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin, Star, Wifi, Coffee, Car, Utensils, Home, TreePine,
  Mountain, Phone, ChevronRight, Heart, Snowflake, Flame,
  Search, SlidersHorizontal
} from 'lucide-react';

/* ─────────────────────────────────────────
   DATA  –  HPTDC-inspired huts & cottages
   ───────────────────────────────────────── */
const COTTAGES = [
  {
    id: 1,
    name: 'The Log Huts, Manali',
    location: 'Manali, Kullu Valley',
    image: 'https://hptdc.in/wp-content/uploads/2021/03/lh_2.jpg',
    rating: 4.9,
    reviews: 312,
    price: '₹4,500',
    category: 'Log Hut',
    amenities: [
      { icon: <Wifi size={15} />, label: 'Wi-Fi' },
      { icon: <Utensils size={15} />, label: 'Restaurant' },
      { icon: <Car size={15} />, label: 'Parking' },
      { icon: <Snowflake size={15} />, label: 'Heating' },
    ],
    featured: true,
    tag: 'Top Pick',
    description:
      'Perched among towering deodars, these cosy log huts offer panoramic mountain views, warm wooden interiors, and all modern comforts.',
  },
  {
    id: 2,
    name: 'Pine Forest Cottage, Dalhousie',
    location: 'Dalhousie, Chamba',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=900&auto=format&fit=crop',
    rating: 4.7,
    reviews: 198,
    price: '₹3,800',
    category: 'Cottage',
    amenities: [
      { icon: <Wifi size={15} />, label: 'Wi-Fi' },
      { icon: <Coffee size={15} />, label: 'Café' },
      { icon: <TreePine size={15} />, label: 'Nature Walk' },
    ],
    featured: false,
    tag: null,
    description:
      'Nestled in fragrant pine groves with misty valley vistas — the perfect escape for couples and solo travellers seeking absolute peace.',
  },
  {
    id: 3,
    name: 'Apple Blossom Hut, Thanedar',
    location: 'Thanedar, Shimla District',
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=900&auto=format&fit=crop',
    rating: 4.8,
    reviews: 245,
    price: '₹5,200',
    category: 'Hut',
    amenities: [
      { icon: <Coffee size={15} />, label: 'Breakfast' },
      { icon: <TreePine size={15} />, label: 'Orchard' },
      { icon: <Flame size={15} />, label: 'Bonfire' },
    ],
    featured: true,
    tag: 'Trending',
    description:
      'Surrounded by apple orchards, this hut gives you the true taste of Himachali village life — fresh air, starlit skies, and farm-fresh produce.',
  },
  {
    id: 4,
    name: 'Valley View Retreat, Kasol',
    location: 'Kasol, Parvati Valley',
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=900&auto=format&fit=crop',
    rating: 4.6,
    reviews: 163,
    price: '₹3,500',
    category: 'Cottage',
    amenities: [
      { icon: <Wifi size={15} />, label: 'Wi-Fi' },
      { icon: <Mountain size={15} />, label: 'Trekking' },
      { icon: <Utensils size={15} />, label: 'Meals' },
    ],
    featured: false,
    tag: null,
    description:
      'Overlooking the roaring Parvati river with Himalayan peaks as your backdrop — a perfect base for trekking and total rejuvenation.',
  },
  {
    id: 5,
    name: 'Cedar Ridge Chalet, Mashobra',
    location: 'Mashobra, Shimla',
    image: 'https://hblimg.mmtcdn.com/content/hubble/img/shimla/mmt/activities/m_activities_Shimla_%20The%20Chalets%20Naldehra_l_400_640.jpg',
    rating: 4.9,
    reviews: 287,
    price: '₹6,800',
    category: 'Chalet',
    amenities: [
      { icon: <Wifi size={15} />, label: 'Wi-Fi' },
      { icon: <Coffee size={15} />, label: 'Café' },
      { icon: <Car size={15} />, label: 'Parking' },
      { icon: <Flame size={15} />, label: 'Fireplace' },
    ],
    featured: true,
    tag: 'Luxury',
    description:
      'A Himalayan chalet featuring a stone fireplace, cedar-wood décor, and sweeping views of the snow-capped Shivalik range.',
  },
  {
    id: 6,
    name: 'Eagle Nest Hut, Bir Billing',
    location: 'Bir Billing, Kangra',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=900&auto=format&fit=crop',
    rating: 4.5,
    reviews: 121,
    price: '₹2,900',
    category: 'Hut',
    amenities: [
      { icon: <Mountain size={15} />, label: 'Paragliding' },
      { icon: <Utensils size={15} />, label: 'Meals' },
      { icon: <Car size={15} />, label: 'Pickup' },
    ],
    featured: false,
    tag: null,
    description:
      'Budget-friendly huts in Asia&apos;s paragliding capital — breathtaking Dhauladhar panoramas and a true adventure spirit await you.',
  },
];

const FEATURES = [
  {
    icon: <Home className="w-6 h-6" />,
    title: 'Handpicked Properties',
    desc: 'Every retreat is inspected for quality, comfort, and authentic Himachali character.',
  },
  {
    icon: <Mountain className="w-6 h-6" />,
    title: 'Scenic Locations',
    desc: 'Wake up to valleys, apple orchards, deodar forests, and Himalayan peaks.',
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: 'Government Assured',
    desc: 'Operated under HPTDC — transparent pricing, safety standards, reliable service.',
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: '24×7 Support',
    desc: 'Our hospitality team is always a call away for bookings, travel, and guidance.',
  },
];

const CATEGORIES = ['All', 'Log Hut', 'Cottage', 'Chalet', 'Hut'];

/* ─────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────── */
export default function HutsCottages() {
  const [wishlist, setWishlist] = useState([]);
  const [search, setSearch]     = useState('');
  const [filter, setFilter]     = useState('All');

  const filtered = COTTAGES.filter((c) => {
    const q = search.toLowerCase();
    const matchSearch = c.name.toLowerCase().includes(q) || c.location.toLowerCase().includes(q);
    const matchFilter = filter === 'All' || c.category === filter;
    return matchSearch && matchFilter;
  });

  const toggleWishlist = (id) =>
    setWishlist((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);

  return (
    <div className="pt-24 pb-20 bg-[#f5f7fb] min-h-screen font-sans text-gray-800">

      {/* ── HERO ── */}
      <div className="relative h-[520px] mb-20 overflow-hidden">
        <img
          src="https://res.cloudinary.com/dyiffrkzh/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_center,h_400,q_auto,w_700/v1694259235/bbj/terz2rukpdvtg2cjzvc8.jpg"
          alt="Himachal Huts & Cottages"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 60%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001233]/95 via-[#001233]/55 to-transparent" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 px-5 py-2 rounded-full mb-5"
          >
            <TreePine className="w-4 h-4 text-emerald-300" />
            <span className="text-white/90 text-xs font-bold uppercase tracking-widest">
              HPTDC Official Retreats
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-5 leading-tight tracking-tight"
          >
            Huts &amp; Cottages
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed font-medium"
          >
            Discover HPTDC's charming mountain retreats — rustic log huts, orchard
            cottages, and forest chalets across the breathtaking landscapes of Himachal Pradesh.
          </motion.p>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="w-full max-w-xl bg-white/12 backdrop-blur-xl border border-white/20 rounded-full p-1.5 flex items-center shadow-2xl"
          >
            <div className="flex items-center flex-1 px-5 gap-3">
              <Search className="w-5 h-5 text-white/60 shrink-0" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name or location…"
                className="w-full bg-transparent outline-none text-white placeholder-white/45 font-medium text-sm"
              />
            </div>
            <button 
              className="bg-[#FF5A2A] hover:bg-[#e04a1f] active:scale-95 text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-lg"
              style={{ borderRadius: '50px' }}
            >
              Search
            </button>
          </motion.div>
        </div>

        {/* wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 0C1200 50 900 65 720 40C540 15 240 50 0 0L0 60Z" fill="#f5f7fb" />
          </svg>
        </div>
      </div>

      {/* ── FEATURE STRIP ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-3xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-[#002060]/8 text-[#002060] rounded-2xl flex items-center justify-center">
                {f.icon}
              </div>
              <div>
                <h3 className="font-bold text-[#002060] mb-1 text-sm">{f.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── PROPERTY GRID ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* section header + filter pills */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[2px] bg-[#FF5A2A]" />
              <span className="text-[#FF5A2A] font-bold text-xs uppercase tracking-widest">Our Collection</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#002060]">
              Stay in the Lap of Nature
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-lg leading-relaxed">
              Every property is HPTDC-managed — explore huts, cottages, and chalets across Himachal's most scenic destinations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <SlidersHorizontal className="w-4 h-4 text-gray-400 mr-1" />
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold border transition-all duration-200 ${
                  filter === cat
                    ? 'bg-[#002060] text-white border-[#002060] shadow-md'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-[#002060] hover:text-[#002060]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* cards */}
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-24 text-gray-400"
            >
              <Mountain className="mx-auto mb-4 w-12 h-12 opacity-25" />
              <p className="font-semibold">No retreats found. Try a different search or filter.</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover="hover"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07, duration: 0.45 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col group"
                >
                  {/* image */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={item.image}
                      alt={item.name}
                      variants={{ hover: { scale: 1.1 } }}
                      transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                      className="w-full h-full object-cover"
                    />
                    <motion.div
                      variants={{ hover: { opacity: 0.2 } }}
                      className="absolute inset-0 bg-black opacity-0 pointer-events-none"
                    />

                    {/* tag */}
                    {item.tag && (
                      <span className="absolute top-4 left-4 bg-[#FF5A2A] text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                        {item.tag}
                      </span>
                    )}

                    {/* category */}
                    <span className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md text-[#002060] text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow">
                      {item.category}
                    </span>

                    {/* wishlist */}
                    <button
                      onClick={() => toggleWishlist(item.id)}
                      className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 shadow-lg active:scale-90 ${
                        wishlist.includes(item.id)
                          ? 'bg-rose-500 border-rose-500'
                          : 'bg-white/25 backdrop-blur-md border-white/30 hover:bg-rose-500 hover:border-rose-500'
                      }`}
                    >
                      <Heart
                        size={16}
                        className="text-white transition-all"
                        fill={wishlist.includes(item.id) ? 'white' : 'none'}
                      />
                    </button>
                  </div>

                  {/* body */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-[#002060] mb-1 leading-snug group-hover:text-[#FF5A2A] transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex items-center text-gray-400 text-sm gap-1 mb-3">
                      <MapPin className="w-3.5 h-3.5 text-[#FF5A2A]/80 shrink-0" />
                      {item.location}
                    </div>

                    <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2">
                      {item.description}
                    </p>

                    {/* amenities + rating */}
                    <div className="flex items-center justify-between py-4 border-y border-gray-50 mb-5">
                      <div className="flex items-center gap-2">
                        {item.amenities.slice(0, 4).map((a, i) => (
                          <div
                            key={i}
                            title={a.label}
                            className="w-8 h-8 bg-[#f5f7fb] rounded-full flex items-center justify-center text-gray-400 group-hover:text-[#002060] transition-colors"
                          >
                            {a.icon}
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-100 px-3 py-1.5 rounded-full">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        <span className="text-sm font-bold text-amber-700">{item.rating}</span>
                        <span className="text-xs text-amber-400 font-medium">({item.reviews})</span>
                      </div>
                    </div>

                    {/* price + cta */}
                    <div className="flex items-center justify-between mt-auto">
                      <div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-0.5">Per Night</span>
                        <span className="text-2xl font-black text-[#002060]">{item.price}</span>
                      </div>
                      <button 
                        className="flex items-center gap-1.5 bg-[#002060] hover:bg-[#FF5A2A] text-white px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 shadow-[0_8px_24px_-6px_rgba(0,32,96,0.35)] hover:shadow-[0_8px_24px_-6px_rgba(255,90,42,0.4)] hover:-translate-y-0.5 active:translate-y-0"
                        style={{ borderRadius: '50px' }}
                      >
                        Book Now
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* ── CTA BANNER ── */}
        <div className="mt-24 relative rounded-[40px] overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=2000&auto=format&fit=crop"
            alt="Himalayan peaks"
            className="w-full h-[420px] object-cover transition-transform duration-1000 group-hover:scale-105"
            style={{ objectPosition: 'center 40%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001233]/92 via-[#001233]/70 to-transparent flex flex-col items-start justify-center px-10 md:px-20">
            <div className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full mb-5">
              <Phone className="w-3.5 h-3.5 text-white/70" />
              <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Plan Your Stay</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-white mb-5 max-w-xl leading-tight">
              Not sure which retreat is right for you?
            </h3>
            <p className="text-white/65 text-base mb-8 max-w-md leading-relaxed">
              Our HPTDC travel experts will help you pick the perfect hut or cottage
              based on your budget, dates, and preferred destination.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                className="bg-[#FF5A2A] hover:bg-[#e04a1f] active:scale-95 text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl hover:shadow-2xl"
                style={{ borderRadius: '50px' }}
              >
                Talk to an Expert
              </button>
              <button 
                className="bg-white/10 backdrop-blur-md border border-white/25 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold transition-all"
                style={{ borderRadius: '50px' }}
              >
                View All Properties
              </button>
            </div>
          </div>
        </div>

        {/* ── NEWSLETTER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-[#002060] to-[#0a3280] rounded-3xl p-10 md:p-14 text-center"
        >
          <h3 className="text-2xl md:text-4xl font-black text-white mb-3">
            Get Exclusive Deals &amp; Travel Tips
          </h3>
          <p className="text-white/60 mb-8 max-w-lg mx-auto leading-relaxed text-sm">
            Subscribe to HPTDC updates and be the first to know about seasonal
            offers, new properties, and Himachal travel advisories.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 px-6 py-4 rounded-full outline-none focus:ring-2 focus:ring-[#FF5A2A]/50 font-medium text-sm"
            />
            <button 
              className="bg-[#FF5A2A] hover:bg-[#e04a1f] active:scale-95 text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl whitespace-nowrap"
              style={{ borderRadius: '50px' }}
            >
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}