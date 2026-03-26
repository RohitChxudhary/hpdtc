import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Wind, Waves, Mountain, Snowflake, Plane, Bike, Fish, Flag, Compass, MapPin, Calendar, Activity, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

const iconMap = {
  "air-glider-icon": Wind,
  "river-wave-icon": Waves,
  "mountain-hiking-icon": Mountain,
  "snow-ski-icon": Snowflake,
  "helicopter-snow-icon": Plane,
  "mountain-bike-icon": Bike,
  "fishing-rod-icon": Fish,
  "golf-flag-icon": Flag,
  "safari-jeep-icon": Compass
};

const intensityConfig = {
  "Beginner": {
    color: "text-emerald-700",
    bg: "bg-emerald-50",
    border: "border-emerald-200"
  },
  "Intermediate": {
    color: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-200"
  },
  "Expert": {
    color: "text-rose-700",
    bg: "bg-rose-50",
    border: "border-rose-200"
  }
};

const ADVENTURE_DATA = [
  {
    activityName: "Paragliding",
    topDestinations: ["Bir-Billing", "Solang Valley"],
    intensityLevel: "Intermediate",
    keyHighlights: "Soar over lush valleys and experience world-class tandem flights with breathtaking panoramic aerial views.",
    seasonalAvailability: "March \u2013 June, Sep \u2013 Nov",
    safetyIconTag: "air-glider-icon",
    imageUrl: "adventure/paragliding.jpg"
  },
  {
    activityName: "River Rafting",
    topDestinations: ["Kullu (Beas)", "Tattapani (Sutlej)"],
    intensityLevel: "Expert",
    keyHighlights: "Navigate thrilling white-water rapids through deep mountain gorges for an ultimate adrenaline-pumping adventure.",
    seasonalAvailability: "April \u2013 June",
    safetyIconTag: "river-wave-icon",
    imageUrl: "adventure/river_rafting.jpeg"
  },
  {
    activityName: "Trekking",
    topDestinations: ["Spiti Valley", "Hampta Pass"],
    intensityLevel: "Intermediate",
    keyHighlights: "Explore pristine alpine pastures and conquer snow-capped peaks on unforgettable, scenic high-altitude mountain trails.",
    seasonalAvailability: "May \u2013 October",
    safetyIconTag: "mountain-hiking-icon",
    imageUrl: "adventure/trekking.jpeg"
  },
  {
    activityName: "Skiing",
    topDestinations: ["Solang Valley", "Kufri"],
    intensityLevel: "Intermediate",
    keyHighlights: "Glide down pristine powdery slopes and master thrilling winter descents amid breathtaking snowy landscapes.",
    seasonalAvailability: "January \u2013 March",
    safetyIconTag: "snow-ski-icon",
    imageUrl: "adventure/skiing.jpeg"
  },
  {
    activityName: "Heli-Skiing",
    topDestinations: ["Jobri Top (Kullu)"],
    intensityLevel: "Expert",
    keyHighlights: "Experience the ultimate winter thrill by dropping onto extraordinary untouched snow slopes from a helicopter.",
    seasonalAvailability: "January \u2013 March",
    safetyIconTag: "helicopter-snow-icon",
    imageUrl: "adventure/heli_skiing.jpg"
  },
  {
    activityName: "Mountain Cycling",
    topDestinations: ["Kangra Valley", "Spiti"],
    intensityLevel: "Expert",
    keyHighlights: "Conquer rugged trails and traverse extraordinarily diverse geographic terrains on breathtaking mountain cycling expeditions.",
    seasonalAvailability: "All year (except Monsoons)",
    safetyIconTag: "mountain-bike-icon",
    imageUrl: "adventure/mountain_cycling.jpeg"
  },
  {
    activityName: "Angling",
    topDestinations: ["Rohru", "Tirthan Valley"],
    intensityLevel: "Beginner",
    keyHighlights: "Relax and enjoy peaceful Brown and Rainbow Trout fishing in crystal-clear, pristine idyllic mountain rivers.",
    seasonalAvailability: "April \u2013 October",
    safetyIconTag: "fishing-rod-icon",
    imageUrl: "adventure/angling.jpeg"
  },
  {
    activityName: "Golfing",
    topDestinations: ["Naldehra (Shimla)"],
    intensityLevel: "Beginner",
    keyHighlights: "Tee off at one of India's oldest and most spectacularly scenic 9-hole mountain golf courses.",
    seasonalAvailability: "All year",
    safetyIconTag: "golf-flag-icon",
    imageUrl: "adventure/golfing.jpeg"
  },
  {
    activityName: "Vehicle Safaris",
    topDestinations: ["Churah Valley"],
    intensityLevel: "Beginner",
    keyHighlights: "Embark on an adventurous off-road vehicle safari through unexplored, immensely picturesque landscapes of Churah Valley.",
    seasonalAvailability: "All year",
    safetyIconTag: "safari-jeep-icon",
    imageUrl: "adventure/vehicle_safaris.jpeg"
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

/* AdventureCard relocated inline to maintain perfect animation staggering consistency */

export default function Adventure() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-28 pb-24 font-sans overflow-hidden relative">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-[1000px] overflow-hidden z-0 pointer-events-none">
        <motion.div 
          style={{ y }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#FF5A2A]/5 via-orange-500/5 to-transparent rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-96 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-[#002060]/5 to-transparent rounded-full blur-[80px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header section */}
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="text-center flex flex-col items-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            className="inline-flex items-center text-[#FF5A2A] font-bold tracking-[0.2em] uppercase text-sm mb-6 drop-shadow-sm px-5 py-2 bg-[#FF5A2A]/10 rounded-full border border-[#FF5A2A]/20 shadow-sm"
          >
            <Compass className="w-4 h-4 mr-2" />
            Thrills & Expeditions
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#002060] mb-8 tracking-tight font-serif relative" 
            style={{ textShadow: "0 4px 20px rgba(0,32,96,0.05)" }}
          >
            Adventure
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
            From soaring high above lush valleys to tackling the wildest rapids, experience Himachal Pradesh's ultimate adrenaline boosts. 
          </motion.p>
        </motion.div>

        {/* The Grid Component */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {ADVENTURE_DATA.map((item) => {
            const Icon = iconMap[item.safetyIconTag] || Compass;
            const intensityStyle = intensityConfig[item.intensityLevel] || intensityConfig["Beginner"];
            return (
              <motion.div
                key={item.activityName}
                variants={itemVariants}
                whileHover={{ 
                  y: -12,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                className="group bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_60px_-15px_rgba(0,32,96,0.15)] transition-shadow duration-500 flex flex-col h-full border border-gray-100 relative"
              >
                {/* Shine effect on hover */}
                <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </div>

                {/* Image Container matching Events.jsx */}
                <div className="relative h-72 overflow-hidden">
                  <motion.img 
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    src={item.imageUrl} 
                    alt={item.activityName} 
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002060]/90 via-[#002060]/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Floating Date Badge equivalent (Intensity) */}
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="absolute top-5 right-5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-white/40 transform group-hover:-translate-y-1 transition-transform duration-300 z-10"
                  >
                    <div className="flex items-center gap-2 font-bold text-sm tracking-wide text-[#002060]">
                      <Activity className={clsx("w-4 h-4 flex-shrink-0", intensityStyle.color)} />
                      {item.intensityLevel}
                    </div>
                  </motion.div>
                </div>

                {/* Content Container */}
                <div className="p-8 flex flex-col flex-grow relative bg-white z-10">
                  <h3 className="text-3xl font-extrabold text-[#002060] mb-5 group-hover:text-[#FF5A2A] transition-colors duration-300 font-serif leading-tight">
                    {item.activityName}
                  </h3>
                  
                  <div className="flex flex-col gap-4 mb-4">
                    <div className="flex items-center text-gray-600 group-hover:text-gray-900 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-[#FF5A2A]/10 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-[#FF5A2A]/20 transition-colors">
                        <MapPin className="w-5 h-5 text-[#FF5A2A]" />
                      </div>
                      <div className="font-semibold text-[15px]">
                        {item.topDestinations.join(", ")}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-600 group-hover:text-gray-900 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-[#002060]/5 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-[#002060]/10 transition-colors">
                        <Calendar className="w-5 h-5 text-[#002060]" />
                      </div>
                      <div className="font-semibold text-[15px]">
                        {item.seasonalAvailability}
                      </div>
                    </div>
                  </div>
                  
                  {/* Key Highlights mapped precisely to bottom section */}
                  <div className="mt-auto pt-6 border-t border-gray-100/80">
                      <p className="text-gray-600 text-sm font-medium leading-relaxed italic">
                        "{item.keyHighlights}"
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
