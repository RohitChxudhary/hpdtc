import React, { useState, useEffect } from "react";
import {
  Search,
  MapPin,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Phone,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";

// Explore button images
import SpitiyVellyImg from "./images/spitiy-velly.webp";
import ManaliRetreatImg from "./images/manali_retreat.webp";
import ShimlaRidgeImg from "./images/shimla_ridge.webp";

// Stay button images
import LuxuryStayImg from "./images/luxury_hotel.webp";
import BoutiqueHotelsImg from "./images/boutique_hotel.webp";
import NatureHotelsImg from "./images/nature_hotel.webp";

// Transport button image
import HimanchalTransportImg from "./images/himanchal_transport.webp";

//Experience button images
import HimanchalCulturalImg from "./images/himanchal_culture.webp";
import LocalCuisinesImg from "./images/local_cuisines.webp";
import AdventureImg from "./images/paragliding_hp.webp";

const NAV_ITEMS = [
  {
    title: "Explore",
    columns: [
      {
        heading: "Discover",
        links: [
          { name: "Plan Your Visit", desc: "Everything you need to know" },
          { name: "Tourist Circuits", desc: "Explore curated journeys" },
          { name: "Travel Tips", desc: "Practical advice for your trip" },
          { name: "Access (How to Reach)", desc: "Getting here made easy" },
        ],
      },
    ],
    featuredCard: {
      image: SpitiyVellyImg,
      title: "Explore Spiti Valley",
      cta: "Plan Your Journey",
      link: "/plan-your-trip",
    },
    cards: [
      {
        image: ManaliRetreatImg,
        title: "Manali Retreat",
        subtitle: "Snow-capped mountains",
        link: "/plan-your-trip",
      },
      {
        image: ShimlaRidgeImg,
        title: "Shimla Ridge",
        subtitle: "Colonial heritage",
        link: "/plan-your-trip",
      },
    ],
  },
  {
    title: "Stay",
    columns: [
      {
        heading: "Accommodation",
        links: [
          { name: "Hotels", desc: "Find your perfect room" },
          { name: "Huts & Cottages", desc: "Cozy retreats in nature" },
          { name: "Hotel Booking", desc: "Secure your stay online" },
        ],
      },
    ],
    featuredCard: {
      image: LuxuryStayImg,
      title: "Luxury Stays",
      cta: "Book Now",
      link: "/hotel-booking",
    },
    cards: [
      {
        image: BoutiqueHotelsImg,
        title: "Boutique Hotels",
        subtitle: "Curated experiences",
        link: "/hotel-booking",
      },
      {
        image: NatureHotelsImg,
        title: "Nature Resorts",
        subtitle: "Disconnect & relax",
        link: "/hotel-booking",
      },
    ],
  },
  {
    title: "Transport",
    columns: [
      {
        heading: "Getting Around",
        links: [
          { name: "Bus Booking", desc: "Comfortable road travel" },
          { name: "Local Taxis", desc: "Hire a cab locally" },
        ],
      },
    ],
    featuredCard: {
      image: HimanchalTransportImg,
      title: "Scenic Drives",
      cta: "Explore Routes",
      link: "/bus-booking",
    },
    cards: [],
  },
  {
    title: "Experiences",
    columns: [
      {
        heading: "Engage",
        links: [
          { name: "Events", desc: "Festivals and happenings" },
          { name: "Cuisines", desc: "Taste the local flavors" },
          { name: "Adventure", desc: "Thrilling activities to explore" },
        ],
      },
    ],
    featuredCard: {
      image: HimanchalCulturalImg,
      title: "Cultural Festivals",
      cta: "Experience Now",
      link: "/events",
    },
    cards: [
      {
        image: LocalCuisinesImg,
        title: "Local Cuisines",
        subtitle: "Authentic flavors",
        link: "/cuisines",
      },
      {
        image: AdventureImg,
        title: "Adventure",
        subtitle: "Thrilling activities",
        link: "/adventure",
      },
    ],
  },
  {
    title: "Services",
    columns: [
      {
        heading: "Offerings",
        links: [
          { name: "Conference", desc: "Host your next event" },
          { name: "Privilege Card", desc: "Exclusive member benefits" },
        ],
      },
    ],
    featuredCard: null,
    cards: [],
  },
  {
    title: "Media",
    columns: [
      {
        heading: "Visuals",
        links: [
          { name: "Photo Gallery", desc: "Stunning HD images" },
          { name: "Photography Contest", desc: "Showcase your skills" },
          { name: "Screen Saver", desc: "Download beautiful wallpapers" },
        ],
      },
    ],
    featuredCard: null,
    cards: [],
  },
  {
    title: "About",
    columns: [
      {
        heading: "Learn More",
        links: [
          { name: "Awards", desc: "Our achievements and recognition" },
          { name: "Feedback", desc: "We value your opinion" },
          { name: "Contacts", desc: "Get in touch with us" },
        ],
      },
    ],
    featuredCard: null,
    cards: [],
  },
];

const MegaMenuCard = ({ image, title, subtitle, link, onClick }) => {
  return (
    <motion.div
      /* 1. Define the hover state on the PARENT */
      whileHover="hovered" 
      initial="initial"
      className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-video md:aspect-[4/3] shadow-sm h-full"
    >
      <motion.img
        loading="lazy"
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        /* 2. Link the image scale to the parent's "hovered" state */
        variants={{
          initial: { scale: 1 },
          hovered: { scale: 1.1 }
        }}
        /* 3. Set a very long duration to test if it's working */
        transition={{ duration: 0.7, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#002060]/90 via-[#002060]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 p-5">
        <h4 className="text-white font-bold text-lg leading-tight group-hover:text-[#FF5A2A] transition-colors duration-300">
          {title}
        </h4>
        {subtitle && <p className="text-white/80 text-sm mt-1">{subtitle}</p>}
      </div>
    </motion.div>
  );
  return link ? (
    <Link to={link} className="block h-full" onClick={onClick}>
      {content}
    </Link>
  ) : (
    content
  );
};


const FeaturedCard = ({ image, title, cta, link, onClick }) => {
  const content = (
    <motion.div
      // 1. Define the hover trigger on the parent
      initial="initial"
      whileHover="hovered"
      variants={{
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0 },
      }}
      className="group relative overflow-hidden rounded-2xl cursor-pointer h-full min-h-[180px] shadow-sm hover:shadow-xl transition-all duration-700 ease-in-out"
    >
      {/* 2. Change to motion.img and use variants for the scale */}
      <motion.img
        loading="lazy"
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        variants={{
          initial: { scale: 1 },
          hovered: { scale: 1.1 }
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      
      {/* 3. Add pointer-events-none to the gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#002060]/90 via-[#002060]/20 to-transparent pointer-events-none" />
      
      {/* 4. Add pointer-events-none to the text container */}
      <div className="absolute bottom-0 left-0 p-6 w-full pointer-events-none">
        <h3 className="text-white font-extrabold text-2xl mb-2 group-hover:text-[#FF5A2A] transition-colors duration-500">
          {title}
        </h3>
        <div className="flex items-center text-white font-semibold text-sm group-hover:text-[#FF5A2A] transition-colors duration-500">
          {cta}{" "}
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-500" />
        </div>
      </div>
    </motion.div>
  );
  return link ? (
    <Link to={link} className="block h-full" onClick={onClick}>
      {content}
    </Link>
  ) : (
    content
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // State for Desktop Dropdown
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = React.useRef(null);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [location.pathname]);

  // Handle clicks outside the navbar to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Allow clicking inside to not close the menu, but outside closes it
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle scroll effect for shadow and size
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu, search, or desktop mega menu is open
  useEffect(() => {
    if (mobileMenuOpen || isSearchOpen || activeDropdown) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen, isSearchOpen, activeDropdown]);

  const toggleMobileSubmenu = (title) => {
    setActiveMobileMenu(activeMobileMenu === title ? null : title);
  };

  return (
    <>
      <div 
        ref={navRef} 
        className="fixed top-4 left-0 right-0 z-[60] flex flex-col items-center pointer-events-none"
      >
        <header
          className={clsx(
            "pointer-events-auto relative max-w-7xl transition-all duration-500 font-sans rounded-2xl border border-white/20",
            // Base Glassmorphism Styles
            "backdrop-blur-md",
            isScrolled
              ? "bg-black/50 shadow-2xl py-2 w-[98%] xl:w-[95%]"
              : "bg-black/30 shadow-lg py-3 w-[95%] xl:w-[90%]",
          )}
          style={{
            color: "#ffffff",
            // Adding a subtle saturation boost makes the colors behind the glass "pop"
            backdropFilter: "blur(12px) saturate(160%)",
            WebkitBackdropFilter: "blur(12px) saturate(160%)",
          }}
        >
        <div className="w-full relative">
          <div className="flex items-center justify-between w-full px-6 relative z-50">
            {/* Left Side: Logo */}
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex-shrink-0 cursor-pointer flex items-center gap-2 group"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#002060] to-[#003B99] shadow-md flex items-center justify-center transform group-hover:scale-105 transition-all duration-300">
                <span className="text-white font-bold text-lg">HP</span>
              </div>
              <span className="font-extrabold text-[1.3rem] hidden sm:block tracking-tight text-h-saffron drop-shadow-sm transition-colors duration-300">
                HPTDC
              </span>
            </Link>

            {/* Center Section: Primary Navigation Links */}
            <nav className="hidden lg:flex flex-1 justify-center items-center  xl:gap-x-1 px-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.title} className="relative h-full">
                  <div className="flex items-center h-full pt-0.5 pb-0.5">
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.title ? null : item.title,
                        )
                      }
                      className={clsx(
                        "relative flex items-center gap-1 font-semibold uppercase tracking-wider px-3 py-2 text-sm whitespace-nowrap transition-colors focus:outline-none rounded-full cursor-pointer group/nav",
                        activeDropdown === item.title
                          ? "text-h-saffron"
                          : "text-white/80 hover-text-h-saffron"
                      )}
                    >
                      {item.title}
                      <ChevronDown
                        className={clsx(
                          "w-4 h-4 transition-transform duration-300",
                          activeDropdown === item.title ? "rotate-180" : "",
                        )}
                      />
                      {/* Premium Underline Animation */}
                      <span
                        className={clsx(
                          "absolute bottom-0 left-1/2 w-0 h-[2px] bg-white transition-all duration-300 -translate-x-1/2 rounded-full",
                          activeDropdown === item.title
                            ? "w-[80%]"
                            : "group-hover/nav:w-[80%]",
                        )}
                      ></span>
                    </button>
                  </div>
                </div>
              ))}
            </nav>

            {/* Right Side: Functional Icons */}
            <div className="hidden lg:flex flex-shrink-0 items-center justify-end gap-3">
              <a
                href="tel:112"
                className="flex items-center gap-1.5 bg-gradient-to-r from-red-600 to-red-500 text-white px-3.5 py-1.5 rounded-full font-bold shadow-[0_0_15px_rgba(220,38,38,0.4)] hover:shadow-[0_0_20px_rgba(220,38,38,0.8)] transform hover:-translate-y-0.5 transition-all"
              >
                <Phone className="w-3.5 h-3.5 fill-white animate-pulse" />
                <span className="text-sm tracking-widest">SOS</span>
              </a>

              <div className="hidden lg:flex items-center gap-0.5 border-l border-gray-200 pl-4">
                <button
                  onClick={() => {
                    if (window.location.pathname !== "/") {
                      window.location.href = "/#interactive-map";
                    } else {
                      const el = document.getElementById("interactive-map");
                      if (el) {
                        const y =
                          el.getBoundingClientRect().top + window.scrollY - 60;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                    }
                  }}
                  className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 ease-in-out hover:bg-black/5 hover:scale-110 hover:shadow-[0_0_10px_rgba(0,0,0,0.3)] focus:outline-none overflow-hidden border-0 p-0 bg-transparent"
                  style={{ borderRadius: "50%" }}
                >
                  <MapPin className="w-5 h-5" />
                </button>
                <div className="text-white/80 hover:text-white transition-colors">
                  <LanguageSelector isMobile={false} />
                </div>
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 ease-in-out hover:bg-black/5 hover:scale-110 hover:shadow-[0_0_10px_rgba(0,0,0,0.3)] focus:outline-none overflow-hidden border-0 p-0 bg-transparent"
                  style={{ borderRadius: "50%" }}
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex lg:hidden items-center space-x-4">
              <a
                href="tel:112"
                className="flex items-center justify-center bg-gradient-to-r from-red-600 to-red-500 text-white w-8 h-8 rounded-full shadow-[0_0_10px_rgba(220,38,38,0.4)] animate-pulse border border-white/20"
              >
                <Phone className="w-4 h-4 fill-white flex-shrink-0" />
              </a>
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-white p-1.5 hover:bg-white/10 rounded-full transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
              <div className="text-white">
                <LanguageSelector isMobile={true} />
              </div>
              <button
                className="text-white p-1.5 hover:bg-white/10 rounded-full transition-colors focus:outline-none"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        </header>

        {/* Global Mega Menu Container */}
        <div className="w-full max-w-7xl flex justify-center pointer-events-none px-4 sm:px-6 z-40">
          <AnimatePresence>
            {activeDropdown && (
              <motion.div
                key="mega-menu"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="w-full max-w-7xl mt-1 pointer-events-auto relative bg-black/40 border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
                style={{
                  backdropFilter: "blur(12px) saturate(160%)",
                  WebkitBackdropFilter: "blur(12px) saturate(160%)",
                }}
              >

                {/* This inner div handles the scrolling while the outer motion.div handles the blur */}
                <div className="max-h-[calc(100vh-6rem)] overflow-y-auto">
                  {NAV_ITEMS.map((item) => {
                    if (item.title !== activeDropdown) return null;
                    const hasCards =
                      item.featuredCard ||
                      (item.cards && item.cards.length > 0);
                    return (
                      <div
                        key={item.title}
                        className="p-8 md:p-10 flex flex-col lg:flex-row gap-12 min-h-[200px]"
                      >
                        {/* LEFT SECTION (40% or 100%) - Navigation Links */}
                        <div
                          className={clsx(
                            "flex gap-8",
                            hasCards ? "w-full lg:w-2/5" : "w-full",
                          )}
                        >
                          {item.columns.map((col, idx) => (
                            <div key={idx} className="w-full">
                              <h4 className="font-bold text-[11px] tracking-[0.2em] uppercase text-white mb-4 px-4">
                                {col.heading}
                              </h4>
                              <ul className="space-y-2">
                                {col.links.map((link) => (
                                  <li key={link.name}>
                                    <Link
                                      to={
                                        link.name === "Hotels"
                                          ? "/hotels"
                                          : link.name === "Huts & Cottages"
                                            ? "/huts-cottages"
                                            : link.name === "Hotel Booking"
                                              ? "/hotel-booking"
                                              : link.name === "Events"
                                                ? "/events"
                                                : link.name === "Cuisines"
                                                  ? "/cuisines"
                                                  : link.name === "Awards"
                                                    ? "/awards"
                                                    : link.name === "Feedback"
                                                      ? "/feedback"
                                                      : link.name === "Contacts"
                                                        ? "/contacts"
                                                        : link.name ===
                                                            "Plan Your Visit"
                                                          ? "/plan-your-trip"
                                                          : link.name ===
                                                              "Tourist Circuits"
                                                            ? "/tourist-circuits"
                                                            : link.name ===
                                                                "Travel Tips"
                                                              ? "/travel-tips"
                                                              : link.name ===
                                                                  "Access (How to Reach)"
                                                                ? "/access"
                                                                : link.name ===
                                                                    "Local Taxis"
                                                                  ? "/local-taxis"
                                                                  : link.name ===
                                                                      "Bus Booking"
                                                                    ? "/bus-booking"
                                                                    : link.name ===
                                                                        "Adventure"
                                                                      ? "/adventure"
                                                                      : link.name ===
                                                                          "Conference"
                                                                        ? "/conference"
                                                                        : link.name ===
                                                                            "Privilege Card"
                                                                          ? "/privilege-card"
                                                                          : link.name ===
                                                                              "Photo Gallery"
                                                                            ? "/photo-gallery"
                                                                            : link.name ===
                                                                                "Photography Contest"
                                                                              ? "/photography-contest"
                                                                              : link.name ===
                                                                                  "Screen Saver"
                                                                                ? "/screen-saver"
                                                                                : "#"
                                      }
                                      className="relative block p-4 rounded-xl !no-underline border border-white/10 bg-black/30 transition-all duration-300 ease-out group/link hover:-translate-y-[2px] hover:bg-black/40 hover:border-white/30 hover:shadow-[0_0_15px_rgba(0,0,0,0.05)]"
                                    >
                                      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover/link:opacity-100 transition duration-300 rounded-xl"></div>

                                      <div className="relative z-10">
                                        <div className="font-bold text-[15px] text-white/90 group-hover/link:text-white transition-colors flex items-center justify-between">
                                          {link.name}
                                          <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-300" />
                                        </div>

                                        <div className="text-white/60 text-[13px] leading-relaxed mt-1 pr-6 group-hover/link:text-white/80 transition-colors">
                                          {link.desc}
                                        </div>
                                      </div>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        {/* RIGHT SECTION (60%) - Visual Content */}
                        {hasCards && (
                          <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                              visible: {
                                transition: { staggerChildren: 0.1 },
                              },
                            }}
                            className="hidden lg:grid w-full lg:w-3/5 gap-6 grid-cols-2"
                          >
                            {/* Featured Card */}
                            {item.featuredCard && (
                              <div
                                className={
                                  item.cards?.length > 0
                                    ? "col-span-1"
                                    : "col-span-2"
                                }
                              >
                                <FeaturedCard
                                  {...item.featuredCard}
                                  onClick={() => setActiveDropdown(null)}
                                />
                              </div>
                            )}

                            {/* Smaller Cards */}
                            {item.cards?.length > 0 && (
                              <div className="flex flex-col gap-6 justify-between">
                                {item.cards.map((card, idx) => (
                                  <MegaMenuCard
                                    key={idx}
                                    {...card}
                                    onClick={() => setActiveDropdown(null)}
                                  />
                                ))}
                              </div>
                            )}
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-md flex items-start justify-center pt-32 px-4"
          >
            <div className="w-full max-w-4xl relative">
              <button
                onClick={() => setIsSearchOpen(false)}
                className="absolute -top-16 right-0 text-[#002060] hover:text-[#FF5A2A] transition-colors p-3 rounded-full hover:bg-gray-100/50"
              >
                <X className="w-8 h-8" />
              </button>
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="relative"
              >
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-8 h-8 text-[#FF5A2A]" />
                <input
                  type="text"
                  placeholder="Search for destinations, hotels, experiences..."
                  className="w-full bg-white border-2 border-[#002060]/10 rounded-full py-6 pl-20 pr-8 text-xl focus:outline-none focus:border-[#FF5A2A] focus:ring-4 focus:ring-[#FF5A2A]/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] transition-all placeholder:text-gray-400 text-[#002060] font-medium"
                  autoFocus
                />
              </motion.div>
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mt-8 text-center"
              >
                <p className="text-gray-500 font-medium mb-4">
                  Try searching for:
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    "Shimla",
                    "Manali Stays",
                    "Spiti Valley",
                    "Hotel Booking",
                    "Treks",
                  ].map((term) => (
                    <button
                      key={term}
                      className="px-5 py-2.5 rounded-full bg-gray-50 border border-gray-200 text-[#002060] hover:border-[#FF5A2A] hover:text-[#FF5A2A] hover:bg-orange-50 transition-all shadow-sm font-semibold"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-gray-900/40 backdrop-blur-[2px] z-[60] lg:hidden transition-all duration-400 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[90vw] max-w-sm bg-white z-[70] lg:hidden transform transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] flex flex-col font-sans shadow-2xl ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b border-gray-100">
          <span className="font-bold text-xl text-[#002060]">Menu</span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-4 scrollbar-hide">
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.title}
                className="border-b border-gray-50 last:border-0 pb-1"
              >
                <button
                  onClick={() => toggleMobileSubmenu(item.title)}
                  className="w-full flex justify-between items-center py-3 text-left font-semibold text-lg text-[#002060]"
                >
                  {item.title}
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      activeMobileMenu === item.title ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Mobile Submenu Dropdown */}
                <div
                  className={`overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
                    activeMobileMenu === item.title
                      ? "max-h-[500px] opacity-100 mb-3"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="pl-4 space-y-1 mt-1">
                    {item.columns[0].links.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={
                            link.name === "Hotels"
                              ? "/hotels"
                              : link.name === "Huts & Cottages"
                                ? "/huts-cottages"
                                : link.name === "Hotel Booking"
                                  ? "/hotel-booking"
                                  : link.name === "Events"
                                    ? "/events"
                                    : link.name === "Cuisines"
                                      ? "/cuisines"
                                      : link.name === "Awards"
                                        ? "/awards"
                                        : link.name === "Feedback"
                                          ? "/feedback"
                                          : link.name === "Contacts"
                                            ? "/contacts"
                                            : link.name === "Plan Your Visit"
                                              ? "/plan-your-trip"
                                              : link.name === "Tourist Circuits"
                                                ? "/tourist-circuits"
                                                : link.name === "Travel Tips"
                                                  ? "/travel-tips"
                                                  : link.name ===
                                                      "Access (How to Reach)"
                                                    ? "/access"
                                                    : link.name ===
                                                        "Local Taxis"
                                                      ? "/local-taxis"
                                                      : link.name ===
                                                          "Bus Booking"
                                                        ? "/bus-booking"
                                                        : link.name ===
                                                            "Adventure"
                                                          ? "/adventure"
                                                          : link.name ===
                                                              "Conference"
                                                            ? "/conference"
                                                            : link.name ===
                                                                "Privilege Card"
                                                              ? "/privilege-card"
                                                              : link.name ===
                                                                  "Photo Gallery"
                                                                ? "/photo-gallery"
                                                                : link.name ===
                                                                    "Photography Contest"
                                                                  ? "/photography-contest"
                                                                  : link.name ===
                                                                      "Screen Saver"
                                                                    ? "/screen-saver"
                                                                    : "#"
                          }
                          className="block py-2.5 px-3 rounded-lg hover:bg-gray-50/80 group/mobilelink transition-all"
                        >
                          <div className="flex items-center text-gray-700 font-semibold group-hover/mobilelink:text-[#F97316] transition-colors text-[15px]">
                            <ChevronRight className="w-4 h-4 mr-2 text-gray-400 group-hover/mobilelink:translate-x-1 transition-transform" />
                            {link.name}
                          </div>
                          <div className="text-[13px] text-gray-500 mt-1 ml-6">
                            {link.desc}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Bottom Actions */}
        <div className="p-5 border-t border-gray-100 bg-gray-50">
          <div className="flex justify-center gap-12 text-[#002060]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (window.location.pathname !== "/") {
                  window.location.href = "/#interactive-map";
                } else {
                  setTimeout(() => {
                    const el = document.getElementById("interactive-map");
                    if (el) {
                      const y =
                        el.getBoundingClientRect().top + window.scrollY - 80;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }, 100);
                }
              }}
              className="flex flex-col items-center gap-1 p-2 hover:text-[#FF5A2A] transition-colors group"
            >
              <img
                loading="lazy"
                src="/hp-logo.png"
                alt="HP Logo"
                className="w-9 h-9 object-contain group-hover:-translate-y-1 transition-transform"
              />
              <span className="text-xs font-semibold">Locations</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsSearchOpen(true);
              }}
              className="flex flex-col items-center gap-1.5 p-2 hover:text-[#FF5A2A] transition-colors group"
            >
              <Search className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
              <span className="text-xs font-semibold">Search</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
