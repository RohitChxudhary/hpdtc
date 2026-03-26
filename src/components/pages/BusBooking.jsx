import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  Calendar,
  Users,
  Search,
  Clock,
  Star,
  ArrowRight,
  X,
  CheckCircle2,
  ShieldCheck,
  CreditCard,
  Wifi,
  Zap,
  Wind,
  ChevronRight,
  Filter,
  Bus,
} from 'lucide-react';

const LOCATIONS = [
  'Shimla', 'Manali', 'Dharamshala', 'Kullu', 'Dalhousie',
  'Chamba', 'Mandi', 'Solan', 'Palampur', 'Kasauli',
  'Delhi (ISBT Kashmere Gate)', 'Chandigarh (ISBT 43)',
];

const BUS_DATA = [
  {
    id: 1,
    name: 'Himsuta Volvo (HPTDC)',
    type: 'AC Volvo',
    badge: 'Top Rated',
    from: 'ISBT Shimla',
    to: 'Manali Mall Road',
    departure: '21:30',
    arrival: '07:00+1',
    duration: '9h 30m',
    price: 1200,
    originalPrice: 1450,
    seats: 12,
    rating: 4.5,
    amenities: ['wifi', 'charging', 'ac'],
    gradient: 'from-green-50 to-emerald-50',
    accentBorder: 'border-green-200',
  },
  {
    id: 2,
    name: 'Himgaurav Deluxe',
    type: 'Non-AC Deluxe',
    badge: 'Value Pick',
    from: 'ISBT Shimla',
    to: 'Manali Bus Stand',
    departure: '18:15',
    arrival: '04:30+1',
    duration: '10h 15m',
    price: 750,
    originalPrice: null,
    seats: 4,
    rating: 3.8,
    amenities: ['charging'],
    gradient: 'from-blue-50 to-sky-50',
    accentBorder: 'border-blue-200',
  },
  {
    id: 3,
    name: 'Shivalik Super Express',
    type: 'AC Semi-Sleeper',
    badge: 'New',
    from: 'ISBT Shimla',
    to: 'Manali Mall Road',
    departure: '07:30',
    arrival: '17:00',
    duration: '9h 30m',
    price: 980,
    originalPrice: 1100,
    seats: 20,
    rating: 4.2,
    amenities: ['ac', 'charging'],
    gradient: 'from-purple-50 to-violet-50',
    accentBorder: 'border-purple-200',
  },
];

const POPULAR_ROUTES = [
  {
    from: 'Shimla', to: 'Manali', duration: '9h 30m', price: '750',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&auto=format&fit=crop&q=60',
  },
  {
    from: 'Dharamshala', to: 'Chandigarh', duration: '5h 00m', price: '550',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&auto=format&fit=crop&q=60',
  },
  {
    from: 'Delhi', to: 'Shimla', duration: '9h 00m', price: '900',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&auto=format&fit=crop&q=60',
  },
  {
    from: 'Chandigarh', to: 'Manali', duration: '7h 00m', price: '650',
    image: 'https://images.unsplash.com/photo-1609766857413-d984aaca2ea5?w=600&auto=format&fit=crop&q=60',
  },
];

const WHY_US = [
  { icon: <ShieldCheck className="w-6 h-6" />, title: 'Safe Travel', desc: 'Expert drivers trained for Himalayan terrain with GPS tracking.' },
  { icon: <CreditCard className="w-6 h-6" />, title: 'Affordable Fares', desc: 'Government-regulated prices with no hidden charges.' },
  { icon: <CheckCircle2 className="w-6 h-6" />, title: 'Easy Booking', desc: 'Instant confirmation and e-ticket on your mobile.' },
  { icon: <Star className="w-6 h-6" />, title: 'Comfortable Seats', desc: 'Spacious push-back seats with ample legroom.' },
];

// Build a 40-seat grid: rows of [A, B, aisle, C, D]
const buildSeats = () => {
  const bookedSeats = [1, 4, 7, 13, 14, 22, 28, 35];
  return Array.from({ length: 40 }, (_, i) => ({
    id: i + 1,
    label: `${i + 1}`,
    booked: bookedSeats.includes(i + 1),
  }));
};

const AmenityIcon = ({ type }) => {
  const map = {
    wifi: <Wifi className="w-3.5 h-3.5" />,
    charging: <Zap className="w-3.5 h-3.5" />,
    ac: <Wind className="w-3.5 h-3.5" />,
  };
  return map[type] || null;
};

function BusCard({ bus, onBook }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3 }}
      className={`bg-gradient-to-br ${bus.gradient} rounded-3xl border ${bus.accentBorder} shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden`}
    >
      <div className="p-6 flex flex-col md:flex-row gap-5 items-center">

        {/* Bus Info */}
        <div className="w-full md:w-[30%] md:border-r md:border-gray-200 md:pr-6">
          <div className="flex items-start justify-between mb-2">
            <div>
              <span className="inline-block bg-[#002060] text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full mb-2">
                {bus.badge}
              </span>
              <h3 className="font-bold text-[#002060] text-[17px] leading-tight">{bus.name}</h3>
              <p className="text-sm text-gray-500 mt-0.5">{bus.type}</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm text-xs font-bold text-gray-700 px-2 py-1 rounded-xl flex items-center gap-1 shadow-sm">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              {bus.rating}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {bus.amenities.map((a) => (
              <span key={a} className="flex items-center gap-1 bg-white/70 text-gray-600 text-xs font-semibold px-2.5 py-1 rounded-lg border border-white shadow-sm">
                <AmenityIcon type={a} /> {a.charAt(0).toUpperCase() + a.slice(1)}
              </span>
            ))}
          </div>
        </div>

        {/* Route & Timing */}
        <div className="w-full md:flex-1 flex items-center justify-between gap-4 px-2">
          <div className="text-center min-w-[70px]">
            <p className="text-2xl font-black text-[#002060]">{bus.departure}</p>
            <p className="text-[11px] text-gray-500 font-semibold uppercase mt-1 leading-tight">{bus.from}</p>
          </div>
          <div className="flex-1 flex flex-col items-center gap-1">
            <p className="text-[11px] text-gray-400 font-semibold">{bus.duration}</p>
            <div className="w-full flex items-center gap-1">
              <div className="w-2 h-2 rounded-full border-2 border-gray-300 flex-shrink-0 bg-white" />
              <div className="h-px flex-1 bg-gradient-to-r from-gray-300 via-[#002060]/30 to-gray-300 relative">
                <Bus className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#002060]/40 w-3 h-3" />
              </div>
              <div className="w-2 h-2 rounded-full border-2 border-[#002060]/40 flex-shrink-0 bg-[#002060]/20" />
            </div>
            <p className="text-[10px] text-gray-400">Direct</p>
          </div>
          <div className="text-center min-w-[70px]">
            <p className="text-2xl font-black text-[#002060]">{bus.arrival}</p>
            <p className="text-[11px] text-gray-500 font-semibold uppercase mt-1 leading-tight">{bus.to}</p>
          </div>
        </div>

        {/* Price & Book */}
        <div className="w-full md:w-[22%] flex flex-col items-stretch md:items-end justify-center md:border-l md:border-gray-200 md:pl-6 pt-4 md:pt-0 border-t md:border-t-0 border-gray-200 gap-3">
          {/* Price block */}
          <div className="flex md:flex-col items-center md:items-end justify-between md:justify-start gap-1">
            <div className="text-left md:text-right">
              {bus.originalPrice && (
                <p className="text-xs text-gray-400 line-through leading-none">₹ {bus.originalPrice.toLocaleString()}</p>
              )}
              <p className="text-2xl font-black text-[#002060] leading-tight">₹ {bus.price.toLocaleString()}</p>
              <p className="text-xs text-gray-400 font-medium">per seat</p>
            </div>
            <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full border whitespace-nowrap
              ${bus.seats <= 5
                ? 'text-orange-600 bg-orange-50 border-orange-200'
                : 'text-green-700 bg-green-50 border-green-200'}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${bus.seats <= 5 ? 'bg-orange-500' : 'bg-green-500'} animate-pulse`} />
              {bus.seats <= 5 ? `${bus.seats} left!` : `${bus.seats} avail.`}
            </span>
          </div>

          {/* Book Button — premium gradient style */}
          <button
            onClick={() => onBook(bus)}
            className="relative overflow-hidden group/btn w-full md:w-auto flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#FF5A2A] to-[#ff7d55] hover:from-[#e04c21] hover:to-[#FF5A2A] text-white font-bold py-1.5 px-3 rounded-xl transition-all duration-300 shadow-[0_3px_10px_rgba(255,90,42,0.3)] hover:shadow-[0_5px_15px_rgba(255,90,42,0.5)] hover:-translate-y-0.5 active:scale-95 text-xs uppercase tracking-wide whitespace-nowrap"
          >
            {/* Shine sweep on hover */}
            <span className="absolute inset-0 w-full h-full translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] pointer-events-none" />
            <Bus className="w-4 h-4" />
            <span>Select Seats</span>
            <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function FiltersSidebar({ priceVal, setPriceVal, selectedTypes, toggleType, timeFilter, setTimeFilter }) {
  const types = ['AC Volvo', 'Non-AC Deluxe', 'AC Semi-Sleeper', 'Ordinary'];
  const times = [
    { label: 'Early Morning', sub: '00:00–06:00', icon: '🌙' },
    { label: 'Morning', sub: '06:00–12:00', icon: '🌅' },
    { label: 'Afternoon', sub: '12:00–18:00', icon: '☀️' },
    { label: 'Evening', sub: '18:00–24:00', icon: '🌆' },
  ];

  return (
    <aside className="w-full lg:w-[280px] flex-shrink-0">
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 sticky top-24">
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-gray-100">
          <div className="flex items-center gap-2 font-bold text-[#002060]">
            <Filter className="w-4 h-4" /> Filters
          </div>
          <button
            onClick={() => { setPriceVal(3000); selectedTypes.forEach(t => toggleType(t)); setTimeFilter(''); }}
            className="text-xs text-[#FF5A2A] font-bold hover:underline"
          >
            Reset All
          </button>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Price Range</h4>
          <input
            type="range" min={300} max={3000} value={priceVal} step={50}
            onChange={(e) => setPriceVal(Number(e.target.value))}
            className="w-full accent-[#15803d]"
          />
          <div className="flex justify-between text-xs font-semibold text-gray-500 mt-1">
            <span>₹300</span>
            <span className="text-[#002060] font-bold">≤ ₹{priceVal.toLocaleString()}</span>
          </div>
        </div>

        {/* Bus Type */}
        <div className="mb-6">
          <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Bus Type</h4>
          <div className="space-y-2">
            {types.map((t) => (
              <label key={t} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(t)}
                  onChange={() => toggleType(t)}
                  className="w-4 h-4 accent-[#15803d] rounded"
                />
                <span className="text-sm font-medium text-gray-600 group-hover:text-[#002060] transition-colors">{t}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Departure Time */}
        <div>
          <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Departure Time</h4>
          <div className="grid grid-cols-2 gap-2">
            {times.map((t) => (
              <button
                key={t.label}
                onClick={() => setTimeFilter(timeFilter === t.label ? '' : t.label)}
                className={`border rounded-2xl py-2 px-2 flex flex-col items-center transition-all text-xs font-bold
                  ${timeFilter === t.label
                    ? 'border-[#002060] bg-blue-50 text-[#002060]'
                    : 'border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-50'}`}
              >
                <span className="text-lg mb-0.5">{t.icon}</span>
                {t.label}
                <span className="text-[9px] font-normal opacity-60 mt-0.5">{t.sub}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

function SeatModal({ bus, onClose }) {
  const [seats] = useState(buildSeats);
  const [selected, setSelected] = useState([]);
  const [step, setStep] = useState(1); // 1: seats, 2: details
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const toggle = (seat) => {
    if (seat.booked) return;
    setSelected((prev) =>
      prev.includes(seat.id)
        ? prev.filter((s) => s !== seat.id)
        : prev.length >= 4 ? prev : [...prev, seat.id]
    );
  };

  const totalAmount = bus.price * selected.length;

  const handlePay = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1600);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col relative"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-gray-100 flex-shrink-0">
          <div>
            <h2 className="text-xl font-black text-[#002060]">{bus.name}</h2>
            <p className="text-sm text-gray-500 mt-0.5">{bus.from} → {bus.to}  •  {bus.departure}</p>
          </div>
          <button onClick={onClose} className="w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-500 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step indicator */}
        <div className="flex gap-2 px-8 pt-4 flex-shrink-0">
          {['Select Seats', 'Passenger Details'].map((label, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs transition-all ${step > i + 1 ? 'bg-green-500 text-white' : step === i + 1 ? 'bg-[#002060] text-white' : 'bg-gray-100 text-gray-400'}`}>
                {step > i + 1 ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
              </div>
              <span className={`text-xs font-bold ${step >= i + 1 ? 'text-[#002060]' : 'text-gray-300'}`}>{label}</span>
              {i < 1 && <div className="w-8 h-px bg-gray-200 mx-1" />}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-16 px-8 text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-black text-[#002060] mb-2">Booking Confirmed!</h3>
              <p className="text-gray-500 mb-1">Seats: {selected.join(', ')}</p>
              <p className="text-gray-500 mb-6">Amount Paid: ₹ {totalAmount.toLocaleString()}</p>
              <p className="text-sm text-gray-400 mb-8">A confirmation e-ticket has been sent to your email. Enjoy your journey through Himachal Pradesh!</p>
              <button onClick={onClose} className="bg-[#002060] text-white font-bold px-8 py-3 rounded-2xl hover:bg-[#FF5A2A] transition-colors">
                Close
              </button>
            </motion.div>
          ) : step === 1 ? (
            <div className="p-8">
              {/* Legend */}
              <div className="flex flex-wrap gap-4 mb-6 justify-center text-xs font-semibold text-gray-500">
                <span className="flex items-center gap-1.5"><span className="w-5 h-5 rounded bg-gray-200 border border-gray-300 inline-block" /> Available</span>
                <span className="flex items-center gap-1.5"><span className="w-5 h-5 rounded bg-[#002060] inline-block" /> Selected</span>
                <span className="flex items-center gap-1.5"><span className="w-5 h-5 rounded bg-gray-300 opacity-50 inline-block" /> Booked</span>
              </div>

              {/* Seat Grid */}
              <div className="max-w-xs mx-auto">
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6">
                  {/* Driver row */}
                  <div className="flex justify-end mb-4">
                    <div className="w-10 h-10 rounded-full border-4 border-gray-300 flex items-center justify-center text-gray-400">
                      <Bus className="w-4 h-4" />
                    </div>
                  </div>
                  {/* Seats: rows of 4 (2 + aisle + 2) */}
                  <div className="space-y-3">
                    {Array.from({ length: 10 }, (_, row) => {
                      const base = row * 4;
                      const leftSeats = [seats[base], seats[base + 1]];
                      const rightSeats = [seats[base + 2], seats[base + 3]];
                      return (
                        <div key={row} className="flex items-center gap-3 justify-center">
                          {leftSeats.map((seat) => seat && (
                            <button
                              key={seat.id}
                              onClick={() => toggle(seat)}
                              disabled={seat.booked}
                              className={`w-10 h-10 rounded-xl text-xs font-bold border-2 transition-all duration-200 flex items-center justify-center
                                ${seat.booked
                                  ? 'bg-gray-200 border-gray-200 text-gray-400 cursor-not-allowed opacity-60'
                                  : selected.includes(seat.id)
                                    ? 'bg-[#002060] border-[#001040] text-white shadow-md scale-105'
                                    : 'bg-white border-gray-300 text-gray-600 hover:border-[#002060] hover:bg-blue-50'
                                }`}
                            >
                              {seat.label}
                            </button>
                          ))}
                          <div className="w-6" /> {/* Aisle */}
                          {rightSeats.map((seat) => seat && (
                            <button
                              key={seat.id}
                              onClick={() => toggle(seat)}
                              disabled={seat.booked}
                              className={`w-10 h-10 rounded-xl text-xs font-bold border-2 transition-all duration-200 flex items-center justify-center
                                ${seat.booked
                                  ? 'bg-gray-200 border-gray-200 text-gray-400 cursor-not-allowed opacity-60'
                                  : selected.includes(seat.id)
                                    ? 'bg-[#002060] border-[#001040] text-white shadow-md scale-105'
                                    : 'bg-white border-gray-300 text-gray-600 hover:border-[#002060] hover:bg-blue-50'
                                }`}
                            >
                              {seat.label}
                            </button>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { label: 'First Name', key: 'firstName', type: 'text', placeholder: 'Rahul' },
                  { label: 'Last Name', key: 'lastName', type: 'text', placeholder: 'Sharma' },
                  { label: 'Email', key: 'email', type: 'email', placeholder: 'rahul@example.com' },
                  { label: 'Phone Number', key: 'phone', type: 'tel', placeholder: '+91 98765 43210' },
                ].map(({ label, key, type, placeholder }) => (
                  <div key={key}>
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">{label}</label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      value={form[key]}
                      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      className="w-full bg-[#F8FAFC] border-2 border-transparent focus:border-[#002060]/20 focus:bg-white rounded-2xl py-3.5 px-5 outline-none font-semibold text-gray-700 transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Bar */}
        {!success && (
          <div className="flex-shrink-0 border-t border-gray-100 px-8 py-5 bg-gray-50/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm text-gray-500">
                Selected: <span className="font-bold text-[#002060]">{selected.length > 0 ? selected.join(', ') : 'None'}</span>
              </p>
              <p className="text-xl font-black text-[#002060]">
                Total: ₹ {totalAmount.toLocaleString()}
              </p>
            </div>
            <div className="flex gap-3">
              {step === 2 && (
                <button
                  onClick={() => setStep(1)}
                  className="px-5 py-2.5 rounded-2xl border border-gray-300 font-bold text-gray-600 hover:bg-gray-100 transition-colors text-sm"
                >
                  Back
                </button>
              )}
              <button
                disabled={selected.length === 0 || (step === 2 && loading)}
                onClick={() => step === 1 ? setStep(2) : handlePay()}
                className="bg-[#FF5A2A] disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-[#e04c21] text-white font-black py-2.5 px-8 rounded-2xl transition-all shadow-md hover:shadow-lg active:scale-95 text-sm uppercase tracking-wide flex items-center gap-2"
              >
                {loading ? (
                  <><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Processing…</>
                ) : step === 1 ? (
                  <>Continue <ChevronRight className="w-4 h-4" /></>
                ) : (
                  <><CreditCard className="w-4 h-4" /> Pay ₹{totalAmount.toLocaleString()}</>
                )}
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

// Main Page 

export default function BusBooking() {
  const today = new Date().toISOString().split('T')[0];

  const [searchState, setSearchState] = useState({
    from: 'Shimla',
    to: 'Manali',
    date: today,
    passengers: '1',
  });
  const [searched, setSearched] = useState(true);
  const [selectedBus, setSelectedBus] = useState(null);
  const [priceVal, setPriceVal] = useState(3000);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [timeFilter, setTimeFilter] = useState('');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const toggleType = (t) =>
    setSelectedTypes((prev) => prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]);

  const filteredBuses = BUS_DATA.filter((b) => {
    if (b.price > priceVal) return false;
    if (selectedTypes.length > 0 && !selectedTypes.includes(b.type)) return false;
    return true;
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setSearched(true);
  };

  const handleSwap = () => {
    setSearchState((prev) => ({ ...prev, from: prev.to, to: prev.from }));
  };

  return (
    <div className="pt-[72px] min-h-screen bg-[#FAFCFF] font-sans text-[#1A1A1A]">

      {/*Hero */}
      <section className="relative h-[420px] md:h-[480px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&auto=format&fit=crop&q=80"
          alt="Himachal mountains"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#002060]/75 via-[#002060]/60 to-[#002060]/75" />

        <div className="relative z-10 text-center px-4 w-full max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-5">
              <Bus className="w-4 h-4 text-[#FF5A2A]" />
              <span className="text-white text-xs font-black uppercase tracking-widest">HPTDC Transport Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 drop-shadow-lg leading-tight">
              Bus Booking Services
            </h1>
            <p className="text-lg text-white/80 mb-8 font-medium">Comfortable and Affordable Travel Across Himachal</p>
          </motion.div>

          {/* Search Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            onSubmit={handleSearch}
            className="bg-white/95 backdrop-blur-md rounded-2xl p-4 md:p-5 shadow-2xl"
          >
            <div className="flex flex-col sm:flex-row gap-3 items-end">
              {/* From */}
              <div className="flex-1">
                <label className="block text-left text-[10px] font-black text-gray-400 uppercase tracking-wider mb-1 ml-1">From</label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <select
                    value={searchState.from}
                    onChange={(e) => setSearchState((p) => ({ ...p, from: e.target.value }))}
                    className="w-full bg-gray-50 border-2 border-gray-100 focus:border-[#002060]/20 rounded-xl py-2.5 pl-10 pr-3 outline-none font-semibold text-[#002060] text-sm appearance-none cursor-pointer"
                  >
                    {LOCATIONS.map((l) => <option key={l}>{l}</option>)}
                  </select>
                </div>
              </div>

              {/* Swap Button */}
              <button
                type="button"
                onClick={handleSwap}
                className="flex-shrink-0 w-9 h-9 bg-gray-100 hover:bg-[#002060] hover:text-white rounded-full flex items-center justify-center text-gray-500 transition-all mb-0.5 self-end"
                title="Swap"
              >
                <ArrowRight className="w-4 h-4 rotate-[-45deg]" />
              </button>

              {/* To */}
              <div className="flex-1">
                <label className="block text-left text-[10px] font-black text-gray-400 uppercase tracking-wider mb-1 ml-1">To</label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FF5A2A]" />
                  <select
                    value={searchState.to}
                    onChange={(e) => setSearchState((p) => ({ ...p, to: e.target.value }))}
                    className="w-full bg-gray-50 border-2 border-gray-100 focus:border-[#002060]/20 rounded-xl py-2.5 pl-10 pr-3 outline-none font-semibold text-[#002060] text-sm appearance-none cursor-pointer"
                  >
                    {LOCATIONS.map((l) => <option key={l}>{l}</option>)}
                  </select>
                </div>
              </div>

              {/* Date */}
              <div className="flex-1">
                <label className="block text-left text-[10px] font-black text-gray-400 uppercase tracking-wider mb-1 ml-1">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  <input
                    type="date"
                    min={today}
                    value={searchState.date}
                    onChange={(e) => setSearchState((p) => ({ ...p, date: e.target.value }))}
                    className="w-full bg-gray-50 border-2 border-gray-100 focus:border-[#002060]/20 rounded-xl py-2.5 pl-10 pr-3 outline-none font-semibold text-[#002060] text-sm"
                  />
                </div>
              </div>

              {/* Passengers */}
              <div className="w-full sm:w-36">
                <label className="block text-left text-[10px] font-black text-gray-400 uppercase tracking-wider mb-1 ml-1">Passengers</label>
                <div className="relative">
                  <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  <select
                    value={searchState.passengers}
                    onChange={(e) => setSearchState((p) => ({ ...p, passengers: e.target.value }))}
                    className="w-full bg-gray-50 border-2 border-gray-100 focus:border-[#002060]/20 rounded-xl py-2.5 pl-10 pr-3 outline-none font-semibold text-[#002060] text-sm appearance-none cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6].map((n) => <option key={n} value={n}>{n} Passenger{n > 1 ? 's' : ''}</option>)}
                  </select>
                </div>
              </div>

              {/* Search Button */}
              <button
                type="submit"
                className="flex-shrink-0 bg-[#FF5A2A] hover:bg-[#e04c21] text-white font-black py-2.5 px-7 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 flex items-center gap-2 text-sm uppercase tracking-wider whitespace-nowrap h-[44px]"
              >
                <Search className="w-4 h-4" /> Search
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Results Area  */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {searched && (
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Mobile Filter Toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="flex items-center gap-2 bg-white border border-gray-200 rounded-2xl px-5 py-2.5 font-bold text-sm text-[#002060] shadow-sm"
              >
                <Filter className="w-4 h-4" /> Filters
              </button>
            </div>

            {/* Filters – desktop */}
            <div className="hidden lg:block">
              <FiltersSidebar
                priceVal={priceVal} setPriceVal={setPriceVal}
                selectedTypes={selectedTypes} toggleType={toggleType}
                timeFilter={timeFilter} setTimeFilter={setTimeFilter}
              />
            </div>

            {/* Mobile filter drawer */}
            <AnimatePresence>
              {mobileFilterOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 bg-gray-900/50 lg:hidden"
                  onClick={() => setMobileFilterOpen(false)}
                >
                  <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-100%' }}
                    transition={{ type: 'spring', damping: 25 }}
                    className="absolute left-0 top-0 bottom-0 w-80 bg-white overflow-y-auto p-4 shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold text-[#002060]">Filters</h3>
                      <button onClick={() => setMobileFilterOpen(false)}><X className="w-5 h-5" /></button>
                    </div>
                    <FiltersSidebar
                      priceVal={priceVal} setPriceVal={setPriceVal}
                      selectedTypes={selectedTypes} toggleType={toggleType}
                      timeFilter={timeFilter} setTimeFilter={setTimeFilter}
                    />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bus Listing */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="text-xl font-black text-[#002060]">
                    {searchState.from} <ArrowRight className="inline w-4 h-4" /> {searchState.to}
                  </h2>
                  <p className="text-sm text-gray-400 mt-0.5">{filteredBuses.length} buses found</p>
                </div>
                <select className="text-sm border border-gray-200 rounded-xl px-3 py-2 focus:outline-none text-gray-600 font-semibold bg-white shadow-sm">
                  <option>Cheapest First</option>
                  <option>Earliest Departure</option>
                  <option>Highest Rating</option>
                </select>
              </div>

              {filteredBuses.length > 0 ? (
                <div className="space-y-5">
                  {filteredBuses.map((bus) => (
                    <BusCard key={bus.id} bus={bus} onBook={setSelectedBus} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-3xl border border-gray-100 p-16 text-center shadow-sm">
                  <Bus className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-[#002060] mb-2">No buses found</h3>
                  <p className="text-gray-400 text-sm">Try adjusting your filters to see more results.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Popular Routes */}
        <section className="mt-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-black text-[#002060]">Popular Routes</h2>
              <p className="text-gray-400 mt-1">Frequently travelled scenic corridors across Himachal</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {POPULAR_ROUTES.map((route, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-3xl cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 min-h-[280px] flex flex-col justify-end"
              >
                {/* Image wrapper — own overflow-hidden so card's framer scale doesn't break clipping */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  <img
                    src={route.image}
                    alt={`${route.from} to ${route.to}`}
                    className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                </div>
                {/* Premium Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#002060]/95 via-[#002060]/40 to-transparent" />
                
                {/* Content block - Center aligned & flexible */}
                <div className="relative z-10 w-full p-6 flex flex-col items-center text-center mt-auto">
                  <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 mb-2.5 w-full">
                    <span className="text-white font-black text-xl leading-tight drop-shadow-md">{route.from}</span>
                    <ArrowRight className="w-5 h-5 text-[#FF5A2A] flex-shrink-0 drop-shadow-md" />
                    <span className="text-white font-black text-xl leading-tight drop-shadow-md">{route.to}</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-3 text-white/90 text-sm font-semibold w-full">
                    <span className="flex items-center whitespace-nowrap"><Clock className="w-3.5 h-3.5 mr-1" />{route.duration}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    <span className="text-[#FF5A2A] font-black tracking-wide whitespace-nowrap">From ₹{route.price}</span>
                  </div>
                </div>

                {/* Glassmorphism Badge */}
                <div className="absolute top-6 inset-x-0 mx-auto w-max bg-white/90 backdrop-blur-md px-5 py-2 rounded-full border border-white/50 text-[#002060] text-xs font-black shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 flex items-center gap-1.5">
                  Book Now <ChevronRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mt-20 bg-gradient-to-br from-[#002060] to-[#003B99] rounded-[40px] p-10 md:p-14 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF5A2A]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-center text-3xl font-black text-white mb-2">Why Book With HPTDC?</h2>
            <p className="text-center text-white/50 text-sm mb-12">Trusted by millions of travellers for over 50 years</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {WHY_US.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 text-center hover:bg-white/20 transition-all border border-white/10"
                >
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 border border-white/20">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-white text-base mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {selectedBus && (
          <SeatModal bus={selectedBus} onClose={() => setSelectedBus(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
