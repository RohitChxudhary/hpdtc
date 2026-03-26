import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Monitor, Download, Image as ImageIcon, HardDrive } from 'lucide-react';

const SCREENSAVER_DATA = [
  {
    title: "Prashar Lake, Mandi",
    description: "A mysterious floating island lake surrounded by the Dhauladhar ranges.",
    imageUrl: "screen_saver/prashar_lake_mndi.jpeg",
  },
  {
    title: "The Kailash Cottage, Kalpa",
    description: "A panoramic view of the HPTDC property overlooking the Himalayas.",
    imageUrl: "screen_saver/the_kailash_cottage_kalpa.jpeg",
  },
  {
    title: "The Kinner Kailash, Kalpa",
    description: "Majestic views of the sacred peak known for its color-changing properties.",
    imageUrl: "screen_saver/the_kinner_kailash_kalpa.jpeg",
  },
  {
    title: "The Giriganga, Kharapathar",
    description: "A serene forest and mountain view near the source of the Giri River.",
    imageUrl: "screen_saver/the_giriganga_kharapathar.jpeg",
  },
  {
    title: "The Srikhand, Sarahan",
    description: "Stunning landscapes featuring the Srikhand Mahadev peak.",
    imageUrl: "screen_saver/the_srikhand_sarahan.jpeg",
  },
  {
    title: "The Apple Blossom, Fagu",
    description: "Seasonal beauty of apple orchards in the high-altitude village of Fagu.",
    imageUrl: "screen_saver/the_apple_blossom_fagu.jpeg",
  },
  {
    title: "Shimla - Red Carpet Awaits",
    description: "A scenic road view in the Rohru region of Shimla district.",
    imageUrl: "screen_saver/shimla_red.jpg",
  },
  {
    title: "Fields from Castle Naggar",
    description: "A lush agricultural view from the historic Naggar Castle in Kullu.",
    imageUrl: "screen_saver/fields_castle_naggar.jpeg",
  },
  {
    title: "Khajjiar, Chamba",
    description: "The 'Mini Switzerland of India' featuring vast meadows and cedar forests.",
    imageUrl: "screen_saver/khajjiar_chamba.jpeg",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  show: { 
    opacity: 1, scale: 1, y: 0,
    transition: { type: "spring", stiffness: 60, damping: 15 }
  }
};

export default function ScreenSaver() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const handleDownload = async (imageUrl, title) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      // Generate valid filename
      a.download = `${title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.jpg`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (e) {
      alert('Download failed. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-28 pb-24 font-sans overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-[800px] overflow-hidden z-0 pointer-events-none">
        <motion.div 
          style={{ y }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3], rotate: [0, 5, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-bl from-indigo-500/10 via-[#002060]/5 to-transparent rounded-full blur-[80px]"
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
            className="inline-flex items-center text-indigo-600 font-bold tracking-[0.2em] uppercase text-sm mb-6 drop-shadow-sm px-5 py-2 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-full border border-indigo-500/20 shadow-sm"
          >
            <Monitor className="w-4 h-4 mr-2" />
            Digital Downloads
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#002060] mb-8 tracking-tight font-serif relative" 
            style={{ textShadow: "0 4px 20px rgba(0,32,96,0.05)" }}
          >
            HPTDC Screensavers
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-1.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent rounded-full opacity-80"
            />
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed font-medium mt-4 mb-4"
          >
            Bring the enchanting beauty of Himachal right to your desktop. Download high-resolution landscape imagery captured from our exclusive properties.
          </motion.p>
        </motion.div>

        {/* Masonry-Style Screensaver Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SCREENSAVER_DATA.map((item, index) => (
            <motion.div
              variants={itemVariants}
              key={index}
              className="bg-white rounded-[2.5rem] p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col group relative overflow-hidden h-full"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 shadow-inner">
                <motion.img 
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover relative z-0"
                />
                
                {/* Resolution Badge */}
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 z-10 pointer-events-none">
                  <span className="text-white text-xs font-bold tracking-wide flex items-center">
                    <ImageIcon className="w-3 h-3 mr-1.5 opacity-80" /> HD / 4K
                  </span>
                </div>
              </div>

              {/* Text Container */}
              <div className="flex flex-col flex-1 px-2">
                <h3 className="text-2xl font-bold text-[#002060] mb-3 leading-tight font-serif group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-[15px] leading-relaxed mb-6 flex-1">
                  {item.description}
                </p>

                {/* Download Button */}
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleDownload(item.imageUrl, item.title)}
                  style={{ borderRadius: "9999px" }}
                  className="w-full mt-auto flex items-center justify-center gap-2 py-3.5 rounded-full rounded-pill bg-[#002060] text-white font-semibold transition-all duration-300 shadow-md hover:shadow-[0_8px_20px_-6px_rgba(0,32,96,0.4)] hover:bg-[#0a2a70] focus:outline-none focus:ring-4 focus:ring-[#002060]/20 border-0"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Now</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
