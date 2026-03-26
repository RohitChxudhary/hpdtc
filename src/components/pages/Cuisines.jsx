import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChefHat, Info, UtensilsCrossed } from 'lucide-react';

const CUISINES_DATA = [
  {
    id: "cuisine-chah-meat",
    dishName: "Chah Meat",
    category: "Non-Veg",
    keyIngredients: ["Mutton", "Buttermilk", "Local Spices"],
    description: "Slow-cooked mutton infused with the tangy richness of buttermilk and aromatic spices.",
    image: {
      tag: "traditional-indian-mutton-curry",
      placeholderUrl: "cuisines/chah_meat.jpeg",
      altText: "Rich, slow-cooked Himachali Chah Meat mutton curry"
    }
  },
  {
    id: "cuisine-sepu-vadi",
    dishName: "Sepu Vadi",
    category: "Main Course (Veg)",
    keyIngredients: ["Urad Dal Dumplings", "Spinach", "Curd"],
    description: "A Mandi specialty featuring lentil dumplings simmered in a luscious spinach and curd gravy.",
    image: {
      tag: "spinach-gravy-dumplings",
      placeholderUrl: "cuisines/sepu_vadi.jpeg",
      altText: "Sepu Vadi in rich spinach and curd gravy"
    }
  },
  {
    id: "cuisine-channa-madra",
    dishName: "Channa Madra",
    category: "Main Course (Veg)",
    keyIngredients: ["White Chickpeas", "Curd", "Dry Fruits"],
    description: "A rich and creamy yogurt-based stew loaded with white chickpeas and sweet dry fruits.",
    image: {
      tag: "chickpea-yogurt-curry",
      placeholderUrl: "cuisines/channa_madra.jpeg",
      altText: "Creamy Channa Madra made with chickpeas and yogurt"
    }
  },
  {
    id: "cuisine-siddu",
    dishName: "Siddu",
    category: "Bread & Sides",
    keyIngredients: ["Wheat Flour", "Poppy Seeds", "Ghee"],
    description: "Distinctive steamed wheat bread packed with a savory poppy seed stuffing, generously served with melted ghee.",
    image: {
      tag: "steamed-stuffed-bread",
      placeholderUrl: "cuisines/siddu.jpeg",
      altText: "Traditional steamed Siddu bread served with ghee"
    }
  },
  {
    id: "cuisine-bathu-kheer",
    dishName: "Bathu ki Kheer",
    category: "Dessert",
    keyIngredients: ["Bathu (Chenopodium)", "Milk", "Sugar"],
    description: "A comforting, traditional Himachali pudding made by slow-cooking nutrient-rich Bathu seeds in sweetened milk.",
    image: {
      tag: "traditional-indian-kheer-pudding",
      placeholderUrl: "cuisines/bathu_ki_kheer.jpeg",
      altText: "Sweet Bathu ki Kheer dessert served in a bowl"
    }
  },
  {
    id: "cuisine-khatia-kaddu",
    dishName: "Khatia Kaddu",
    category: "Main Course (Veg)",
    keyIngredients: ["Pumpkin", "Tamarind", "Local Spices"],
    description: "A delightful medley of sweet and sour flavors featuring tender pumpkin tossed in indigenous spices.",
    image: {
      tag: "sweet-and-sour-pumpkin-curry",
      placeholderUrl: "cuisines/khatia_kaddu.jpeg",
      altText: "Sweet and tangy Khatia Kaddu pumpkin preparation"
    }
  }
];

export default function Cuisines() {
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
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-[#FF5A2A]/10 to-transparent rounded-full blur-[80px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-20 -right-20 w-[500px] h-[500px] bg-gradient-to-tl from-[#002060]/10 to-transparent rounded-full blur-[80px]"
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
            Authentic Flavors
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
            A culinary journey through the heart of the Himalayas. Discover recipes passed down through generations.
          </motion.p>
        </motion.div>
      </div>

      {/* Culinary Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {CUISINES_DATA.map((cuisine) => (
            <motion.div
              key={cuisine.id}
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
                  src={cuisine.image.placeholderUrl} 
                  alt={cuisine.image.altText} 
                  className="w-full h-full object-cover"
                />
                
                {/* Floating Category Badge */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-white/40 transform group-hover:-translate-y-1 transition-transform duration-300 z-10"
                >
                  <div className="flex items-center gap-2 text-[#002060] font-bold text-sm tracking-wide">
                    {cuisine.category === "Non-Veg" ? (
                      <span className="w-2.5 h-2.5 rounded-sm bg-red-500" />
                    ) : cuisine.category.includes("Veg") ? (
                      <span className="w-2.5 h-2.5 rounded-sm bg-green-500" />
                    ) : (
                      <ChefHat className="w-4 h-4 text-[#FF5A2A]" />
                    )}
                    {cuisine.category}
                  </div>
                </motion.div>

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#002060]/90 via-[#002060]/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow relative bg-white z-10">
                <h3 className="text-3xl font-extrabold text-[#002060] mb-3 group-hover:text-[#FF5A2A] transition-colors duration-300 font-serif leading-tight">
                  {cuisine.dishName}
                </h3>
                
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{cuisine.description}"</p>

                <div className="flex items-start text-gray-500 mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#002060]/5 flex items-center justify-center mr-3 flex-shrink-0">
                    <UtensilsCrossed className="w-4 h-4 text-[#002060]" />
                  </div>
                  <span className="font-bold text-[#002060] text-sm mt-1.5 uppercase tracking-wider">Key Ingredients</span>
                </div>

                {/* Ingredients Tags */}
                <div className="mt-auto pt-2 pl-11">
                  <div className="flex flex-wrap gap-2.5">
                    {cuisine.keyIngredients.map((ingredient, idx) => (
                      <motion.span 
                        key={idx}
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(0,32,96,0.1)", borderColor: "rgba(0,32,96,0.2)" }}
                        className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[13px] font-semibold bg-gray-50 text-gray-700 border border-gray-200 transition-colors duration-300 cursor-default"
                      >
                        {ingredient}
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
