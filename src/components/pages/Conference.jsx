import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Users, MapPin, Building, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

const CONFERENCE_DATA = [
  {
    venueName: "The Pinewood",
    location: "Barog",
    capacity: "20 - 500",
    description: "A popular destination hotel that helped establish Barog as a full-fledged tourist spot.",
    imageUrl: "conference/the_pinewood_barog.jpeg"
  },
  {
    venueName: "The Holiday Home",
    location: "Shimla",
    capacity: "30 - 1000",
    description: "HPTDC's flagship hotel; an imposing building located in the heart of town with comprehensive facilities.",
    imageUrl: "conference/the_holiday_home.jpeg"
  },
  {
    venueName: "The Peterhof",
    location: "Shimla",
    capacity: "30 - 1500",
    description: "Historical landmark that housed seven Viceroys and Governor Generals; located near the Viceregal Lodge.",
    imageUrl: "conference/the_peterhof_shimla.jpeg"
  },
  {
    venueName: "The Palace",
    location: "Chail",
    capacity: "20 - 100",
    description: "Built in 1891 by the Maharaja of Patiala; set in 75 acres of regal gardens with spectacular views.",
    imageUrl: "conference/the_palace_chail.jpeg"
  },
  {
    venueName: "The Hamir",
    location: "Hamirpur",
    capacity: "20 - 200",
    description: "Conveniently located on the highway to Jwalamukhi, near the main bus station.",
    imageUrl: "conference/the_hamir_hamirpur.jpeg"
  },
  {
    venueName: "Hotel Dhauladhar",
    location: "Dharamshala",
    capacity: "20 - 60",
    description: "Offers commanding views of the Dhauladhar mountain ranges and the Pong Dam reservoir.",
    imageUrl: "conference/hotel_dhauladhar_dharamshala.jpeg"
  },
  {
    venueName: "The Tea Bud",
    location: "Palampur",
    capacity: "15 - 60",
    description: "Located in the finest part of town, directly opposite lush tea gardens.",
    imageUrl: "conference/the_tea_bud_palampur.jpeg"
  },
  {
    venueName: "Hotel Manimahesh",
    location: "Dalhousie",
    capacity: "15 - 60",
    description: "A modern hotel named after the sacred Mount Manimahesh, which is visible from the property.",
    imageUrl: "conference/hotel_manimahesh_dalhousie.jpeg"
  },
  {
    venueName: "Hotel Jwalaji",
    location: "Jwalamukhi",
    capacity: "15 - 80",
    description: "An elegant dressed-stone building with lawns, located 350m from the sacred shrine.",
    imageUrl: "conference/hotel_jwalaji_jawalamukhi.jpeg"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 70, 
      damping: 15 
    } 
  }
};

export default function Conference() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-32 pb-24 font-sans overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-[600px] overflow-hidden z-0 pointer-events-none">
        <motion.div 
          style={{ y }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3], rotate: [0, 5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-bl from-[#FF5A2A]/10 to-transparent rounded-full blur-[80px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-20 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-[#002060]/10 to-transparent rounded-full blur-[80px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="text-center flex flex-col items-center"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            className="inline-block text-[#FF5A2A] font-bold tracking-[0.2em] uppercase text-sm mb-6 drop-shadow-sm px-5 py-2 bg-gradient-to-r from-[#FF5A2A]/5 to-[#FF5A2A]/10 rounded-full border border-[#FF5A2A]/20 shadow-sm"
          >
            Corporate & Events
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#002060] mb-8 tracking-tight font-serif relative" 
            style={{ textShadow: "0 4px 20px rgba(0,32,96,0.05)" }}
          >
            Conference Facilities
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-1.5 bg-gradient-to-r from-transparent via-[#FF5A2A] to-transparent rounded-full opacity-80"
            />
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed font-medium mt-4"
          >
            Elevate your corporate events and grand celebrations with breathtaking backdrops, state-of-the-art facilities, and premium hospitality across Himachal Pradesh.
          </motion.p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {CONFERENCE_DATA.map((venue) => {
            return (
              <motion.div
                key={venue.venueName}
                variants={itemVariants}
                whileHover={{ 
                  y: -12,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                className="group bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_60px_-15px_rgba(0,32,96,0.15)] transition-shadow duration-500 flex flex-col h-full border border-gray-100 relative"
              >
                <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </div>

                <div className="relative h-72 overflow-hidden">
                  <motion.img 
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    src={venue.imageUrl} 
                    alt={venue.venueName} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002060]/90 via-[#002060]/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none" />
                  
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="absolute top-5 right-5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-white/40 transform group-hover:-translate-y-1 transition-transform duration-300 z-10"
                  >
                    <div className="flex items-center gap-2 font-bold text-sm tracking-wide text-[#002060]">
                      <Users className="w-4 h-4 text-[#FF5A2A] flex-shrink-0" />
                      {venue.capacity} Pax
                    </div>
                  </motion.div>
                </div>

                <div className="p-8 flex flex-col flex-grow relative bg-white z-10">
                  <h3 className="text-3xl font-extrabold text-[#002060] mb-5 group-hover:text-[#FF5A2A] transition-colors duration-300 font-serif leading-tight">
                    {venue.venueName}
                  </h3>
                  
                  <div className="flex flex-col gap-4 mb-4">
                    <div className="flex items-center text-gray-600 group-hover:text-gray-900 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-[#FF5A2A]/10 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-[#FF5A2A]/20 transition-colors">
                        <MapPin className="w-5 h-5 text-[#FF5A2A]" />
                      </div>
                      <div className="font-semibold text-[15px]">
                        {venue.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-gray-100/80">
                      <p className="text-gray-600 text-[15px] font-medium leading-relaxed italic">
                        "{venue.description}"
                      </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
