import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { CreditCard, Crown, Gift, Utensils, Hotel, CheckCircle, FileText, AlertCircle, ShieldCheck, ArrowRight, X, Upload } from 'lucide-react';
import clsx from 'clsx';

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 15 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function PrivilegeCard() {
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-28 pb-24 font-sans overflow-x-hidden relative">
      <div className="absolute top-0 left-0 w-full h-[800px] overflow-x-hidden pointer-events-none">
        <motion.div 
          style={{ y }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3], rotate: [0, 5, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-bl from-amber-500/10 via-[#FF5A2A]/5 to-transparent rounded-full blur-[80px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-40 -left-20 w-[600px] h-[600px] bg-gradient-to-tr from-[#002060]/10 to-transparent rounded-full blur-[80px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="text-center flex flex-col items-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            className="inline-flex items-center text-amber-600 font-bold tracking-[0.2em] uppercase text-sm mb-6 drop-shadow-sm px-5 py-2 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-full border border-amber-500/20 shadow-sm"
          >
            <Crown className="w-4 h-4 mr-2" />
            Exclusive Membership
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#002060] mb-8 tracking-tight font-serif relative" 
            style={{ textShadow: "0 4px 20px rgba(0,32,96,0.05)" }}
          >
            HPTDC Privilege Card
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-1.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full opacity-80"
            />
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed font-medium mt-4"
          >
            Unlock unparalleled savings, premium hospitality, and exclusive loyalty rewards across Himachal Pradesh. Designed for the frequent traveler who demands the best.
          </motion.p>
        </motion.div>

        {/* Pricing & Validity Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring" }}
          className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 mb-16 relative overflow-hidden group hover:shadow-[0_30px_60px_-15px_rgba(0,32,96,0.1)] transition-all duration-500"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-full blur-[40px] -mr-32 -mt-32 pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row items-center gap-12 relative">
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 mb-6 border border-amber-100 shadow-sm">
                <CreditCard className="w-8 h-8" />
              </div>
              <h2 className="text-4xl font-extrabold text-[#002060] mb-6 font-serif">Pricing & Validity</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Join the HPTDC family and enjoy two years of incredible privileges, discounts, and reward points.
              </p>
              
              <div className="space-y-5">
                <div className="flex items-start bg-gray-50/80 p-5 rounded-2xl border border-gray-100">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-4 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#002060] text-lg">Membership Fee</h4>
                    <p className="text-gray-600 mt-1">₹4,000 + 18% GST (Valid for 2 full years).</p>
                  </div>
                </div>
                <div className="flex items-start bg-gray-50/80 p-5 rounded-2xl border border-gray-100">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-4 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#002060] text-lg">Renewal Fee</h4>
                    <p className="text-gray-600 mt-1">₹1,500 + 18% GST (Must be renewed within 7 days of expiry).</p>
                  </div>
                </div>
                <div className="flex items-start bg-gray-50/80 p-5 rounded-2xl border border-gray-100">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-4 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#002060] text-lg">Card Replacement</h4>
                    <p className="text-gray-600 mt-1">₹500 for a duplicate card in case of loss.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md aspect-[1.586] rounded-2xl shadow-2xl bg-gradient-to-br from-[#002060] to-[#0A3080] p-8 overflow-hidden transform group-hover:scale-105 group-hover:-rotate-2 transition-transform duration-500 ease-out">
                {/* Card Design */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[30px] -mr-20 -mt-20 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#FF5A2A]/20 rounded-full blur-[40px] -ml-10 -mb-10 pointer-events-none" />
                
                <div className="flex justify-between items-start relative z-10 mb-12">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center">
                      <span className="text-[#002060] font-bold text-sm tracking-tighter">HP</span>
                    </div>
                    <span className="font-extrabold text-white text-lg tracking-wide hidden sm:block">HPTDC</span>
                  </div>
                  <Crown className="w-8 h-8 text-amber-400 opacity-90" />
                </div>
                
                <div className="relative z-10 text-white mt-auto">
                  <div className="font-serif tracking-widest text-2xl sm:text-3xl opacity-90 mb-2 drop-shadow-sm">4920 1834 5021 9901</div>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/60 mb-1">Card Holder</p>
                      <p className="font-bold tracking-wider text-lg">PRIVILEGED MEMBER</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/60 mb-1">Valid Thru</p>
                      <p className="font-bold tracking-wider">12/26</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {/* Benefit 1 */}
          <motion.div variants={fadeInVariants} className="bg-white rounded-[2rem] p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-start relative overflow-hidden group">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 mb-6 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <Hotel className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-[#002060] mb-4">20% Off Accommodation</h3>
            <p className="text-gray-600 leading-relaxed mb-4">Enjoy a massive 20% discount during Prime Time seasons.</p>
            <div className="bg-blue-50/50 p-4 rounded-xl w-full mt-auto">
              <p className="text-xs font-semibold text-blue-900 uppercase tracking-wide mb-2">Prime Time Dates:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• April 1 – June 30</li>
                <li>• Sept 15 – Nov 15</li>
                <li>• Dec 23 – Jan 2</li>
              </ul>
              <p className="text-xs text-gray-500 mt-3 italic">No discount during off-season as rates are already reduced.</p>
            </div>
          </motion.div>

          {/* Benefit 2 */}
          <motion.div variants={fadeInVariants} className="bg-white rounded-[2rem] p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-start relative overflow-hidden group">
            <div className="w-14 h-14 rounded-2xl bg-[#FF5A2A]/10 text-[#FF5A2A] mb-6 flex items-center justify-center group-hover:bg-[#FF5A2A] group-hover:text-white transition-colors duration-300">
              <Utensils className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-[#002060] mb-4">Dining Privileges</h3>
            <p className="text-gray-600 leading-relaxed mb-6">Savor authentic Himachali cuisines and premium beverages at special member rates, applicable year-round.</p>
            <div className="space-y-3 w-full mt-auto">
              <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                <span className="font-semibold text-gray-700">Food & Non-Alcoholic</span>
                <span className="font-black text-[#FF5A2A] text-lg">20% OFF</span>
              </div>
              <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                <span className="font-semibold text-gray-700">Alcoholic Beverages</span>
                <span className="font-black text-[#FF5A2A] text-lg">10% OFF</span>
              </div>
            </div>
          </motion.div>

          {/* Benefit 3 */}
          <motion.div variants={fadeInVariants} className="bg-white rounded-[2rem] p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-start relative overflow-hidden group">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 mb-6 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
              <Gift className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-[#002060] mb-4">Loyalty Reward Points</h3>
            <p className="text-gray-600 leading-relaxed mb-6">Every stay brings you closer to a free vacation. Earn points on every rupee spent across our properties.</p>
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 p-5 rounded-xl w-full mt-auto text-white shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="font-bold">+1</span>
                </div>
                <p className="text-sm font-medium">Earn 1 point for every ₹1,500 spent.</p>
              </div>
              <div className="border-t border-white/20 pt-3">
                <p className="text-xs font-semibold text-white/90 uppercase tracking-widest mb-1">The Reward:</p>
                <p className="font-bold">150 Points = 2 Nights / 3 Days</p>
                <p className="text-sm text-white/80">Free lodging at any HPTDC hotel.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Detailed Info Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Terms & Conditions */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-6 h-6 text-[#002060]" />
              <h3 className="text-2xl font-bold text-[#002060]">Usage & Terms</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <AlertCircle className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Usage Limit:</strong> Discount is valid for a maximum of 2 rooms (accommodating 4-6 persons) at a given time.</span>
              </li>
              <li className="flex items-start">
                <AlertCircle className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Non-Transferable:</strong> The privilege card and its benefits cannot be transferred, sold, or shared with non-members.</span>
              </li>
              <li className="flex items-start">
                <AlertCircle className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Point Redemption:</strong> The free lodging reward applies to Regular/Deluxe category rooms subject to availability.</span>
              </li>
            </ul>
          </motion.div>

          {/* Application Checklist */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-[#FF5A2A]" />
              <h3 className="text-2xl font-bold text-[#002060]">Application Checklist</h3>
            </div>
            <p className="text-gray-600 mb-6">To apply for the HPTDC Privilege Card, ensure you have the following details and documents ready:</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-[#002060] text-sm mb-2">Personal Details</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Full Name</li>
                  <li>• Father's Name</li>
                  <li>• Date of Birth</li>
                  <li>• Occupation</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-[#002060] text-sm mb-2">Required Uploads</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Digital Passport Photo</li>
                  <li>• Specimen Signature</li>
                  <li>• Spouse Name (Opt)</li>
                  <li>• Anniversary (Opt)</li>
                </ul>
              </div>
            </div>

            <button onClick={() => setIsApplicationOpen(true)} className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#002060] text-white font-bold hover:bg-[#002060]/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Application Form Modal */}
      <AnimatePresence>
        {isApplicationOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsApplicationOpen(false)}
              className="absolute inset-0 bg-[#002060]/40 backdrop-blur-sm cursor-pointer"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative z-10 flex flex-col"
            >
              {/* Header */}
              <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-100 p-6 flex justify-between items-center z-20 rounded-t-3xl shadow-sm">
                <div>
                  <h2 className="text-2xl font-bold text-[#002060] font-serif">Apply for Privilege Card</h2>
                  <p className="text-gray-500 text-sm mt-1">Fill in your details to unlock exclusive HPTDC benefits.</p>
                </div>
                <button 
                  onClick={() => setIsApplicationOpen(false)}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:bg-red-50 hover:text-red-500 transition-colors focus:outline-none"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Form Content */}
              <div className="p-6 md:p-8 flex-1 overflow-y-auto">
                <form 
                  onSubmit={(e) => { 
                    e.preventDefault(); 
                    alert("Application successfully submitted! Your HPTDC Privilege Card is being processed."); 
                    setIsApplicationOpen(false); 
                  }} 
                  className="space-y-8"
                >
                  {/* Personal Details */}
                  <div className="space-y-5">
                    <h3 className="text-lg font-bold text-[#002060] flex items-center gap-3 border-b border-gray-100 pb-3">
                      <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs">1</span>
                      Personal Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                        <input type="text" required className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#FF5A2A] focus:ring-4 focus:ring-[#FF5A2A]/10 transition-all font-medium" placeholder="Enter your full name" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Father's Name *</label>
                        <input type="text" required className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#FF5A2A] focus:ring-4 focus:ring-[#FF5A2A]/10 transition-all font-medium" placeholder="Enter father's name" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Date of Birth *</label>
                        <input type="date" required className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#FF5A2A] focus:ring-4 focus:ring-[#FF5A2A]/10 transition-all font-medium text-gray-600" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Occupation *</label>
                        <input type="text" required className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#FF5A2A] focus:ring-4 focus:ring-[#FF5A2A]/10 transition-all font-medium" placeholder="e.g. Software Engineer" />
                      </div>
                    </div>
                  </div>

                  {/* Family Details */}
                  <div className="space-y-5">
                    <h3 className="text-lg font-bold text-[#002060] flex items-center gap-3 border-b border-gray-100 pb-3">
                      <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs">2</span>
                      Family Details <span className="text-gray-400 font-normal text-sm ml-auto opacity-80">(Optional)</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Spouse Name</label>
                        <input type="text" className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#FF5A2A] focus:ring-4 focus:ring-[#FF5A2A]/10 transition-all font-medium" placeholder="Enter spouse's name" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Anniversary Date</label>
                        <input type="date" className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#FF5A2A] focus:ring-4 focus:ring-[#FF5A2A]/10 transition-all font-medium text-gray-600" />
                      </div>
                    </div>
                  </div>

                  {/* Documents Upload */}
                  <div className="space-y-5">
                    <h3 className="text-lg font-bold text-[#002060] flex items-center gap-3 border-b border-gray-100 pb-3">
                      <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs">3</span>
                      Required Uploads
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-[#FF5A2A] hover:bg-[#FF5A2A]/5 hover:shadow-md transition-all cursor-pointer group">
                        <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-3 group-hover:bg-[#FF5A2A]/10 transition-colors">
                          <Upload className="w-5 h-5 text-gray-400 group-hover:text-[#FF5A2A] transition-colors" />
                        </div>
                        <p className="text-sm font-bold text-gray-700 group-hover:text-[#FF5A2A] transition-colors">Digital Passport Photo *</p>
                        <p className="text-xs text-gray-500 mt-1">JPG or PNG (Max 2MB)</p>
                      </div>
                      <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-[#FF5A2A] hover:bg-[#FF5A2A]/5 hover:shadow-md transition-all cursor-pointer group">
                        <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-3 group-hover:bg-[#FF5A2A]/10 transition-colors">
                          <Upload className="w-5 h-5 text-gray-400 group-hover:text-[#FF5A2A] transition-colors" />
                        </div>
                        <p className="text-sm font-bold text-gray-700 group-hover:text-[#FF5A2A] transition-colors">Specimen Signature *</p>
                        <p className="text-xs text-gray-500 mt-1">JPG or PNG (Max 1MB)</p>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6 mt-4 flex flex-col md:flex-row items-center justify-between border-t border-gray-100 gap-4">
                    <p className="text-sm text-gray-500 text-center md:text-left">
                      By applying, you agree to the <a href="#" className="text-[#FF5A2A] font-medium hover:underline">Terms & Conditions</a>.
                    </p>
                    <button type="submit" className="w-full md:w-auto px-8 py-3.5 rounded-xl bg-[#002060] text-white font-bold hover:bg-[#002060]/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                      Submit Application
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
