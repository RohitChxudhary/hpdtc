import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { MapPin, Clock, Calendar, Star } from 'lucide-react';

const EVENTS_DATA = [
  {
    id: "event-kullu-dusshera",
    eventName: "Kullu Dusshera",
    dateTimeline: "October / November",
    location: "Kullu",
    duration: "7 Days",
    highlights: ["Grand cultural festivities", "Deity processions"],
    image: {
      path: "events/kullu_dusshera.jpg",
      altText: "Vibrant procession of local deities at Kullu Dusshera festival"
    }
  },
  {
    id: "event-himalayan-festival",
    eventName: "International Himalayan Festival",
    dateTimeline: "2nd week of December",
    location: "Kangra Valley",
    duration: "3 Days",
    highlights: ["Cultural programs", "Regional performances"],
    image: {
      path: "events/international_himalayan_festival.jpeg",
      altText: "Traditional cultural programs at the International Himalayan Festival"
    }
  },
  {
    id: "event-ice-skating",
    eventName: "Ice Skating Carnival",
    dateTimeline: "December to February",
    location: "Shimla & Dalhousie",
    duration: "3 Months",
    highlights: ["Ice skating competitions", "Winter sports"],
    image: {
      path: "events/ice_skating_carnival.jpeg",
      altText: "People enjoying the open-air ice skating rink carnival"
    }
  },
  {
    id: "event-new-year",
    eventName: "Christmas & New Year",
    dateTimeline: "25th–31st December",
    location: "Across Himachal Pradesh",
    duration: "7 Days",
    highlights: ["Special HPTDC packages", "Gala dinners"],
    image: {
      path: "events/christmas_new_year.jpeg",
      altText: "Festive Christmas and New Year decorations across HPTDC properties"
    }
  },
  {
    id: "event-halda-sazo",
    eventName: "Halda & Sazo",
    dateTimeline: "January",
    location: "Lahaul & Kinnaur",
    duration: "Varies",
    highlights: ["Local music", "Traditional dancing"],
    image: {
      path: "events/halda_sazo.jpg",
      altText: "Bonfires, traditional music, and dancing during Halda and Sazo"
    }
  },
  {
    id: "event-winter-carnival",
    eventName: "Himachal Winter Carnival",
    dateTimeline: "January",
    location: "Manali",
    duration: "Varies",
    highlights: ["Skiing", "Food Fest", "Local Bands"],
    image: {
      path: "events/himachal_winter_carnival.jpeg",
      altText: "Skiing events and winter food fest in Manali"
    }
  },
  {
    id: "event-losar",
    eventName: "Losar Festival",
    dateTimeline: "January / March",
    location: "Tibetan Monasteries across HP",
    duration: "Varies",
    highlights: ["Mask Dances", "Buddhist rituals"],
    image: {
      path: "events/losar_festival.jpeg",
      altText: "Monks performing vibrant mask dances for the Losar Festival"
    }
  },
  {
    id: "event-mandi-shivaratri",
    eventName: "Mandi Shivaratri",
    dateTimeline: "February / March",
    location: "Mandi",
    duration: "7 Days",
    highlights: ["Gathering of local deities", "Grand fairs"],
    image: {
      path: "events/mandi_shivaratri.jpeg",
      altText: "Massive religious gathering of deities during Mandi Shivaratri"
    }
  },
  {
    id: "event-nalwari",
    eventName: "Nalwari Fair",
    dateTimeline: "March",
    location: "Bilaspur",
    duration: "Varies",
    highlights: ["Wrestling matches", "Cattle trading"],
    image: {
      path: "events/nalwari_fair.jpeg",
      altText: "Local wrestling match and cattle trading at Bilaspur Nalwari Fair"
    }
  }
];

export default function Events() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

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

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-32 pb-24 font-sans overflow-hidden relative">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[600px] overflow-hidden z-0 pointer-events-none">
        <motion.div 
          style={{ y }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-bl from-[#FF5A2A]/10 to-transparent rounded-full blur-[80px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-20 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-[#002060]/10 to-transparent rounded-full blur-[80px]"
        />
      </div>

      {/* Hero Section */}
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
            Experiences
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#002060] mb-8 tracking-tight font-serif relative" 
            style={{ textShadow: "0 4px 20px rgba(0,32,96,0.05)" }}
          >
            Festivals & Events
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-transparent via-[#FF5A2A] to-transparent rounded-full opacity-80"
            />
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed font-medium mt-4"
          >
            Immerse yourself in the vibrant culture, deeply rooted traditions, and spectacular seasonal celebrations of Himachal Pradesh.
          </motion.p>
        </motion.div>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {EVENTS_DATA.map((event) => (
            <motion.div
              key={event.id}
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

              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  src={event.image.path} 
                  alt={event.image.altText} 
                  className="w-full h-full object-cover"
                />
                
                {/* Floating Date Badge */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute top-5 right-5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-white/40 transform group-hover:-translate-y-1 transition-transform duration-300 z-10"
                >
                  <div className="flex items-center gap-2 text-[#002060] font-bold text-sm tracking-wide">
                    <Calendar className="w-4 h-4 text-[#FF5A2A]" />
                    {event.dateTimeline}
                  </div>
                </motion.div>

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#002060]/90 via-[#002060]/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow relative bg-white z-10">
                <h3 className="text-3xl font-extrabold text-[#002060] mb-5 group-hover:text-[#FF5A2A] transition-colors duration-300 font-serif leading-tight">
                  {event.eventName}
                </h3>

                <div className="flex flex-col gap-4 mb-8">
                  <div className="flex items-center text-gray-600 group-hover:text-gray-900 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-[#FF5A2A]/10 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-[#FF5A2A]/20 transition-colors">
                      <MapPin className="w-5 h-5 text-[#FF5A2A]" />
                    </div>
                    <span className="font-semibold text-[15px]">{event.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 group-hover:text-gray-900 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-[#002060]/5 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-[#002060]/10 transition-colors">
                      <Clock className="w-5 h-5 text-[#002060]" />
                    </div>
                    <span className="font-semibold text-[15px]">{event.duration}</span>
                  </div>
                </div>

                {/* Highlights Tags */}
                <div className="mt-auto pt-6 border-t border-gray-100/80">
                  <div className="flex flex-wrap gap-2.5">
                    {event.highlights.map((highlight, idx) => (
                      <motion.span 
                        key={idx}
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,90,42,0.1)", borderColor: "rgba(255,90,42,0.3)", color: "#FF5A2A" }}
                        className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[13px] font-bold bg-[#002060]/5 text-[#002060] border border-[#002060]/10 transition-colors duration-300 cursor-default"
                      >
                        <Star className="w-3.5 h-3.5 mr-1.5 text-[#FF5A2A]" />
                        {highlight}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
