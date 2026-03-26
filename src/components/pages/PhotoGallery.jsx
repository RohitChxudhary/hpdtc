import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Camera, MapPin, Image as ImageIcon } from 'lucide-react';
import clsx from 'clsx';

const GALLERY_DATA = [
  {
    id: "satluj",
    title: "Satluj Circuit Gallery",
    featuredLocations: "Shimla, Chail, Sarahan, Narkanda, Renukaji",
    images: ["circuits/satluj_circuit_1.jpeg", "circuits/satluj_circuit_2.jpeg", "circuits/satluj_circuit_3.jpeg"],
    circuitLink: "/tourist-circuits#satluj",
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: "beas",
    title: "Beas Circuit Gallery",
    featuredLocations: "Kullu, Manali, Mandi",
    images: ["circuits/beas_circuit_1.jpeg", "circuits/beas_circuit_2.jpeg", "circuits/beas_circuit_3.jpeg"],
    circuitLink: "/tourist-circuits#beas",
    color: "from-amber-500 to-orange-600"
  },
  {
    id: "dhauladhar",
    title: "Dhauladhar Circuit Gallery",
    featuredLocations: "Dharamshala, Khajjiar, Palampur, Jawalaji",
    images: ["circuits/dhauladhar_circuit_1.jpeg", "circuits/dhauladhar_circuit_2.jpeg", "circuits/dhauladhar_circuit_3.jpeg"],
    circuitLink: "/tourist-circuits#dhauladhar",
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: "tribal",
    title: "Tribal Circuit Gallery",
    featuredLocations: "Kalpa, Keylong, Kaza, Bharmour",
    images: ["circuits/tribal_circuit_1.jpeg", "circuits/tribal_circuit_2.jpeg", "circuits/tribal_circuit_3.jpeg"],
    circuitLink: "/tourist-circuits#tribal",
    color: "from-purple-500 to-pink-600"
  }
];

export default function PhotoGallery() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-28 pb-24 font-sans overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-[800px] overflow-hidden z-0 pointer-events-none">
        <motion.div 
          style={{ y }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3], rotate: [0, 5, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-bl from-blue-500/10 via-[#002060]/5 to-transparent rounded-full blur-[80px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-40 -left-20 w-[600px] h-[600px] bg-gradient-to-tr from-[#FF5A2A]/10 to-transparent rounded-full blur-[80px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            className="inline-flex items-center text-blue-600 font-bold tracking-[0.2em] uppercase text-sm mb-6 drop-shadow-sm px-5 py-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full border border-blue-500/20 shadow-sm"
          >
            <ImageIcon className="w-4 h-4 mr-2" />
            Visual Assets
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#002060] mb-8 tracking-tight font-serif relative" 
            style={{ textShadow: "0 4px 20px rgba(0,32,96,0.05)" }}
          >
            HPTDC Photo Gallery
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-1.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full opacity-80"
            />
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed font-medium mt-4 mb-4"
          >
            Experience the majestic beauty of Himachal Pradesh across four major circuits. Browse our curated visual collections to inspire your next journey.
          </motion.p>
        </motion.div>

        {/* Gallery Content mapped per Circuit */}
        <div className="space-y-24">
          {GALLERY_DATA.map((circuit, index) => (
            <motion.div 
              key={circuit.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 gap-4">
                <div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[#002060] font-serif mb-3">
                    {circuit.title}
                  </h2>
                  <div className="flex items-center text-gray-600 font-medium bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100 w-fit">
                    <MapPin className="w-5 h-5 text-[#FF5A2A] mr-2" />
                    {circuit.featuredLocations}
                  </div>
                </div>
                
              </div>

              {/* Masonry-style Image Grid for Each Circuit */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {circuit.images.map((imgUrl, imgIndex) => (
                  <motion.div
                    key={imgIndex}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={clsx(
                      "relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group cursor-pointer",
                      imgIndex === 0 ? "md:col-span-2 md:row-span-2 min-h-[500px]" : "min-h-[240px]"
                    )}
                  >
                    <div className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                    </div>
                    
                    <motion.img 
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      src={imgUrl} 
                      alt={`${circuit.title} Image ${imgIndex + 1}`}
                      className="w-full h-full object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#002060]/70 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
                    
                    {/* View Full Screen Icon on Hover */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 transform scale-75 group-hover:scale-100 transition-all duration-300">
                        <ImageIcon className="w-6 h-6 text-white" />
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
