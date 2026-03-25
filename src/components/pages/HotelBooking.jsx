import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  Users, 
  MapPin, 
  CreditCard, 
  ShieldCheck, 
  ChevronRight, 
  Star,
  CheckCircle2,
  Lock,
  ArrowRight,
  Info,
  Clock,
  FileText,
  Percent,
  Search
} from 'lucide-react';

const FEATURED_HOTELS = [
  { id: 1, name: 'The Holiday Home', location: 'Shimla', price: '₹ 3,500', rating: 4.5, image: 'https://3.imimg.com/data3/NO/VJ/MY-6916176/55.jpg' },
  { id: 2, name: 'The Castle', location: 'Naggar', price: '₹ 4,200', rating: 4.7, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop' },
  { id: 3, name: 'The Palace', location: 'Chail', price: '₹ 5,500', rating: 4.8, image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=800&auto=format&fit=crop' },
];

export default function HotelBooking() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: '2 Guests, 1 Room',
  });
  const [error, setError] = useState("");

  useEffect(() => {
    // Auto-advance from step 2 (Searching) to step 3 (Confirmed) after a brief delay
    if (step === 2) {
      const timer = setTimeout(() => {
        setStep(3);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleChange = (e) => {
    setError(""); // Clear error on typing
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    
    if (step === 1) {
      // Validate inputs
      if (!formData.destination.trim() || !formData.checkIn || !formData.checkOut) {
        setError("Please fill in destination and both check-in and check-out dates.");
        return;
      }
      if (new Date(formData.checkIn) > new Date(formData.checkOut)) {
        setError("Check-out date cannot be earlier than check-in date.");
        return;
      }
      // If validation passes, move to searching state
      setStep(2);
    } else if (step < 3) {
      setStep(step + 1);
    }
  };

  const resetBooking = () => {
    setStep(1);
    setFormData({
      destination: '',
      checkIn: '',
      checkOut: '',
      guests: '2 Guests, 1 Room',
    });
    setError("");
  };

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen font-sans text-gray-900">
      {/* Hero Section */}
      <div className="relative h-[400px] mb-16 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#002060]">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-40 -right-40 w-[40rem] h-[40rem] bg-[#FF5A2A] rounded-full blur-[140px]"
          ></motion.div>
          <div className="absolute -top-32 -left-32 w-[30rem] h-[30rem] bg-white rounded-full blur-[120px] opacity-10"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/20 mb-8 shadow-xl"
          >
            <ShieldCheck className="w-4 h-4 text-[#FF5A2A]" />
            <span className="text-white text-xs font-bold uppercase tracking-widest">Official HPTDC Booking Portal</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 drop-shadow-md tracking-tight"
          >
            Book Your Perfect Stay
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-white/80 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Experience authentic Himachal hospitality with our heritage properties, luxury resorts, and cozy cottages.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-10">
            {/* Booking Form Widget */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-[40px] shadow-[0_20px_60px_-15px_rgba(0,32,96,0.1)] border border-gray-100 p-8 md:p-12 relative z-20 -mt-32"
            >
              <div className="flex items-center justify-between mb-12 border-b border-gray-100 pb-8 relative">
                <div className="absolute bottom-0 left-0 h-1 bg-[#002060] transition-all duration-500 rounded-full" style={{ width: `${((step - 1) / 2) * 100}%` }}></div>
                {[
                  { num: 1, label: 'Search' },
                  { num: 2, label: 'Details' },
                  { num: 3, label: 'Confirm' }
                ].map(({ num, label }) => (
                  <div key={num} className="flex items-center gap-3 relative z-10 bg-white px-2">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 shadow-sm ${step >= num ? 'bg-[#002060] text-white' : 'bg-gray-50 text-gray-400 border border-gray-200'}`}
                    >
                      {step > num ? <CheckCircle2 className="w-6 h-6" /> : num}
                    </motion.div>
                    <span className={`hidden sm:block font-bold text-sm uppercase tracking-wider transition-colors duration-500 ${step >= num ? 'text-[#002060]' : 'text-gray-400'}`}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-8">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div 
                      key="step1"
                      initial={{ opacity: 0, x: -20 }} 
                      animate={{ opacity: 1, x: 0 }} 
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-6"
                    >
                      {error && (
                        <div className="bg-red-50 text-red-600 px-6 py-4 rounded-full text-sm font-bold flex items-center gap-3 shadow-sm border border-red-100">
                          <Info className="w-5 h-5 shrink-0" />
                          {error}
                        </div>
                      )}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-2">Destination / Hotel</label>
                          <div className="relative group">
                            <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#FF5A2A] transition-colors" />
                            <input 
                              type="text" 
                              name="destination"
                              value={formData.destination || ''}
                              onChange={handleChange}
                              placeholder="e.g. Shimla, Manali" 
                              className="w-full bg-gray-50 hover:bg-gray-100 border-2 border-transparent focus:border-[#FF5A2A]/30 focus:bg-white rounded-full py-4 pl-14 pr-6 outline-none font-semibold text-gray-800 transition-all shadow-inner"
                            />
                          </div>
                        </div>
                        <div className="space-y-3">
                          <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-2">Guests & Rooms</label>
                          <div className="relative group">
                            <Users className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#FF5A2A] transition-colors" />
                            <input 
                              type="text" 
                              name="guests"
                              value={formData.guests || ''}
                              onChange={handleChange}
                              className="w-full bg-gray-50 hover:bg-gray-100 border-2 border-transparent focus:border-[#FF5A2A]/30 focus:bg-white rounded-full py-4 pl-14 pr-6 outline-none font-semibold text-gray-800 transition-all shadow-inner cursor-pointer"
                            />
                          </div>
                        </div>
                        <div className="space-y-3">
                          <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-2">Check-in Date</label>
                          <div className="relative group">
                            <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#FF5A2A] transition-colors" />
                            <input 
                              type="date" 
                              name="checkIn"
                              value={formData.checkIn || ''}
                              onChange={handleChange}
                              className="w-full bg-gray-50 hover:bg-gray-100 border-2 border-transparent focus:border-[#FF5A2A]/30 focus:bg-white rounded-full py-4 pl-14 pr-6 outline-none font-semibold text-gray-800 transition-all shadow-inner"
                            />
                          </div>
                        </div>
                        <div className="space-y-3">
                          <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-2">Check-out Date</label>
                          <div className="relative group">
                            <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#FF5A2A] transition-colors" />
                            <input 
                              type="date" 
                              name="checkOut"
                              value={formData.checkOut || ''}
                              onChange={handleChange}
                              className="w-full bg-gray-50 hover:bg-gray-100 border-2 border-transparent focus:border-[#FF5A2A]/30 focus:bg-white rounded-full py-4 pl-14 pr-6 outline-none font-semibold text-gray-800 transition-all shadow-inner"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div 
                      key="step2"
                      initial={{ opacity: 0, x: -20 }} 
                      animate={{ opacity: 1, x: 0 }} 
                      exit={{ opacity: 0, x: 20 }}
                      className="py-12 text-center"
                    >
                      <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                         <Search className="w-10 h-10 text-[#002060] animate-bounce" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#002060] mb-2">Searching Availability...</h3>
                      <p className="text-gray-500 mb-6">Please wait while we find the best rooms for your selected dates.</p>
                      <div className="flex justify-center">
                        <div className="h-2 w-32 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-[#FF5A2A] w-1/2 animate-[pulse_1s_ease-in-out_infinite] rounded-full"></div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div 
                      key="step3"
                      initial={{ opacity: 0, x: -20 }} 
                      animate={{ opacity: 1, x: 0 }} 
                      className="py-12 text-center"
                    >
                      <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                         <CheckCircle2 className="w-12 h-12 text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#002060] mb-2">Booking Confirmed!</h3>
                      <p className="text-gray-500 mb-8 max-w-md mx-auto">Your reservation details for <strong>{formData.destination}</strong> have been successfully processed.</p>
                      <motion.button 
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={resetBooking}
                        className="bg-gray-800 hover:bg-gray-900 text-white px-12 py-4 rounded-full font-black text-lg transition-all duration-300 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.3)] flex items-center justify-center gap-3 mx-auto"
                      >
                        Make Another Booking
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {step === 1 && (
                  <div className="flex pt-8 mt-8 border-t border-gray-100">
                    <motion.button 
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleNextStep}
                      className="w-full md:w-auto ml-auto bg-[#002060] hover:bg-[#FF5A2A] text-white px-12 py-4 !rounded-full font-black text-lg transition-all duration-300 shadow-[0_15px_30px_-10px_rgba(0,32,96,0.3)] hover:shadow-[0_15px_30px_-10px_rgba(255,90,42,0.4)] flex items-center justify-center gap-3"
                    >
                      Search Availability
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                )}
              </div>
            </motion.div>

            {/* General Information blocks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <ShieldCheck className="text-emerald-500 w-7 h-7" />, title: 'Secure Payment', desc: '100% encrypted checkout' },
                { icon: <CreditCard className="text-blue-500 w-7 h-7" />, title: 'No Hidden Fees', desc: 'Transparent HPTDC pricing' },
                { icon: <Star className="text-amber-500 w-7 h-7" />, title: 'Best Price', desc: 'Guaranteed government rates' },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h4 className="font-bold text-[#002060] text-base mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* HPTDC Booking Guidelines */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[40px] p-8 md:p-10 shadow-sm border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-[#FF5A2A]"></div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center">
                  <Info className="w-6 h-6 text-[#FF5A2A]" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#002060]">HPTDC Booking Guidelines</h3>
                  <p className="text-gray-500 text-sm font-medium">Please review before confirming your stay</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-[#002060] shrink-0" />
                  <div>
                    <h5 className="font-bold text-gray-900 mb-1">Check-in & Check-out</h5>
                    <p className="text-sm text-gray-600 leading-relaxed">Standard Check-in time is <strong className="text-gray-900">2:00 PM</strong> and Check-out is at <strong className="text-gray-900">12:00 Noon</strong>. Early check-in is subject to availability.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CreditCard className="w-6 h-6 text-[#002060] shrink-0" />
                  <div>
                    <h5 className="font-bold text-gray-900 mb-1">Advance Payment</h5>
                    <p className="text-sm text-gray-600 leading-relaxed">A 100% advance payment is required to generate a confirmed booking voucher.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FileText className="w-6 h-6 text-[#002060] shrink-0" />
                  <div>
                    <h5 className="font-bold text-gray-900 mb-1">Mandatory Identification</h5>
                    <p className="text-sm text-gray-600 leading-relaxed">Valid Govt. approved photo ID is mandatory for all guests during check-in.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Percent className="w-6 h-6 text-[#002060] shrink-0" />
                  <div>
                    <h5 className="font-bold text-gray-900 mb-1">Taxes & Discounts</h5>
                    <p className="text-sm text-gray-600 leading-relaxed">GST is applicable as per government norms. Special discounts for Senior Citizens available upon verification.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-[#002060] rounded-[40px] p-8 md:p-10 relative overflow-hidden group shadow-2xl">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:bg-[#FF5A2A]/20 transition-colors duration-700"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-white font-black text-2xl mb-4 leading-tight">Need a Group Booking?</h4>
                <p className="text-white/80 text-sm mb-8 leading-relaxed font-medium">Planning a corporate retreat, educational tour, or destination wedding? Contact our HPTDC concierge team for bulk discounts.</p>
                <motion.button 
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#FF5A2A] hover:bg-white hover:!text-black text-white px-12 py-4 !rounded-full font-black text-lg transition-all duration-300 shadow-[0_15px_30px_-10px_rgba(255,90,42,0.4)] hover:shadow-[0_15px_30px_-10px_rgba(0,32,96,0.2)] flex items-center justify-center gap-3"
                >
                  Contact Specialist
                </motion.button>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-6 px-2">
                <h3 className="text-xl font-bold text-[#002060]">Popular Stays</h3>
                <span className="text-xs font-bold text-[#FF5A2A] uppercase tracking-widest cursor-pointer hover:underline flex items-center gap-1 group">
                  View All <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
              
              <div className="space-y-5">
                {FEATURED_HOTELS.map((hotel) => (
                  <motion.div 
                    key={hotel.id}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent z-10"></div>
                      <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg z-20">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-current" />
                        <span className="text-xs font-black text-gray-900">{hotel.rating}</span>
                      </div>
                      <div className="absolute bottom-4 left-4 z-20">
                        <div className="flex items-center text-[10px] font-bold text-white/90 uppercase tracking-widest mb-1 drop-shadow-md">
                          <MapPin className="w-3 h-3 mr-1 text-[#FF5A2A]" />
                          {hotel.location}
                        </div>
                        <h4 className="text-xl font-bold text-white group-hover:text-[#FF5A2A] transition-colors drop-shadow-md">{hotel.name}</h4>
                      </div>
                    </div>
                    <div className="p-5 flex items-center justify-between bg-white">
                      <div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase block mb-0.5">Starting from</span>
                        <span className="text-lg font-black text-[#002060]">{hotel.price} <span className="text-xs font-medium text-gray-400">/ night</span></span>
                      </div>
                      <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-[#FF5A2A] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
