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
      image: "#",
      title: "Explore Spiti Valley",
      cta: "Plan Your Journey",
    },
    cards: [
      {
        image: "#",
        title: "Manali Retreat",
        subtitle: "Snow-capped mountains",
      },
      {
        image: "#",
        title: "Shimla Ridge",
        subtitle: "Colonial heritage",
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
      image: "#",
      title: "Luxury Stays",
      cta: "Book Now",
    },
    cards: [
      {
        image: "#",
        title: "Boutique Hotels",
        subtitle: "Curated experiences",
      },
      {
        image: "#",
        title: "Nature Resorts",
        subtitle: "Disconnect & relax",
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
      image: "#",
      title: "Scenic Drives",
      cta: "Explore Routes",
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
      image: "#",
      title: "Cultural Festivals",
      cta: "Experience Now",
    },
    cards: [
      {
        image: "#",
        title: "Local Cuisines",
        subtitle: "Authentic flavors",
      },
      {
        image: "#",
        title: "Adventure",
        subtitle: "Thrilling activities",
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

const MegaMenuCard = ({ image, title, subtitle }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 15 },
      visible: { opacity: 1, y: 0 },
    }}
    className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-video md:aspect-[4/3] shadow-sm hover:shadow-lg transition-all duration-300 h-full"
  >
    <img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
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

const FeaturedCard = ({ image, title, cta }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 15 },
      visible: { opacity: 1, y: 0 },
    }}
    className="group relative overflow-hidden rounded-2xl cursor-pointer h-full min-h-[180px] shadow-sm hover:shadow-xl transition-all duration-300"
  >
    <img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#002060]/90 via-[#002060]/20 to-transparent" />
    <div className="absolute bottom-0 left-0 p-6 w-full">
      <h3 className="text-white font-extrabold text-2xl mb-2 group-hover:text-[#FF5A2A] transition-colors">
        {title}
      </h3>
      <div className="flex items-center text-white font-semibold text-sm group-hover:text-[#FF5A2A] transition-colors">
        {cta}{" "}
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </motion.div>
);

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
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 font-sans ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2 border-b border-gray-100"
            : "bg-white/90 backdrop-blur-md shadow-sm py-3"
        }`}
        style={{ color: "#002060" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center relative z-50">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex-shrink-0 cursor-pointer flex items-center gap-2 group"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#002060] to-[#003B99] shadow-md flex items-center justify-center transform group-hover:scale-105 transition-all duration-300">
                <span className="text-white font-bold text-lg">HP</span>
              </div>
              <span className="font-extrabold text-[1.3rem] hidden sm:block tracking-tight text-[#002060] drop-shadow-sm group-hover:text-[#FF5A2A] transition-colors duration-300">
                HPTDC
              </span>
            </Link>

            <nav className="hidden lg:flex items-center space-x-3 xl:space-x-4 ml-4">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.title}
                  className="relative h-full"
                >
                  <div className="flex items-center h-full pt-0.5 pb-0.5">
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                      className={clsx(
                        "flex items-center gap-1 font-semibold px-3 py-2 text-sm xl:text-[15px] transition-colors focus:outline-none rounded-full cursor-pointer",
                        activeDropdown === item.title
                          ? "text-[#FF5A2A]"
                          : "hover:text-[#FF5A2A]",
                      )}
                    >
                      {item.title}
                      <ChevronDown
                        className={clsx(
                          "w-4 h-4 transition-transform duration-300",
                          activeDropdown === item.title ? "rotate-180" : "",
                        )}
                      />
                    </button>
                  </div>
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-5 xl:space-x-6 ml-4">
              <a 
                href="tel:112"
                className="flex items-center gap-1.5 bg-gradient-to-r from-red-600 to-red-500 text-white px-3.5 py-1.5 rounded-full font-bold shadow-[0_0_15px_rgba(220,38,38,0.4)] hover:shadow-[0_0_20px_rgba(220,38,38,0.8)] transform hover:-translate-y-0.5 transition-all"
              >
                <Phone className="w-3.5 h-3.5 fill-white animate-pulse" />
                <span className="text-sm tracking-widest">SOS</span>
              </a>

              <div className="hidden lg:flex items-center gap-2 border-l border-gray-200 pl-4">
              <button 
                onClick={() => {
                  if (window.location.pathname !== "/") {
                    window.location.href = "/#interactive-map";
                  } else {
                    const el = document.getElementById("interactive-map");
                    if (el) {
                      const y = el.getBoundingClientRect().top + window.scrollY - 60;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }
                }}
                className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 ease-in-out hover:bg-black/5 hover:scale-110 hover:shadow-[0_0_10px_rgba(0,0,0,0.3)] focus:outline-none overflow-hidden border-0 p-0 bg-transparent"
                style={{ borderRadius: '50%' }}
                >
                <img src="/hp-logo.png" alt="HP Logo" className="w-8 h-8 object-contain group-hover:scale-110 transition-transform drop-shadow-sm" />
              </button>
              <LanguageSelector isMobile={false} />
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 ease-in-out hover:bg-black/5 hover:scale-110 hover:shadow-[0_0_10px_rgba(0,0,0,0.3)] focus:outline-none overflow-hidden border-0 p-0 bg-transparent"
                style={{ borderRadius: '50%' }}
              >
                <Search className="w-8 h-8" />
              </button>
              </div>
            </div>

            <div className="flex lg:hidden items-center space-x-4">
              <a 
                href="tel:112"
                className="flex items-center justify-center bg-gradient-to-r from-red-600 to-red-500 text-white w-8 h-8 rounded-full shadow-[0_0_10px_rgba(220,38,38,0.4)] animate-pulse"
              >
                <Phone className="w-4 h-4 fill-white flex-shrink-0" />
              </a>
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="text-[#002060] p-1.5 hover:bg-gray-50 rounded-full transition-colors"
                >
                <Search className="w-5 h-5" />
              </button>
              <LanguageSelector isMobile={true} />
              <button
                className="text-[#002060] p-1.5 hover:bg-gray-50 rounded-full transition-colors focus:outline-none"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Global Mega Menu Container */}
        <div className="absolute top-full left-0 w-full flex justify-center pointer-events-none px-4 sm:px-6 z-40">
          <AnimatePresence>
            {activeDropdown && (
              <motion.div
                key="mega-menu"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="w-full max-w-6xl mt-0 pointer-events-auto relative"
              >
                {/* Bridge to prevent hover gap issues */}
                <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent -z-10"></div>

                <div className="bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden max-h-[calc(100vh-5rem)] overflow-y-auto">
                  {NAV_ITEMS.map((item) => {
                    if (item.title !== activeDropdown) return null;
                    const hasCards =
                      item.featuredCard ||
                      (item.cards && item.cards.length > 0);
                    return (
                      <div
                        key={item.title}
                        className="p-6 flex flex-col lg:flex-row gap-8 min-h-[200px]"
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
                              <h4 className="font-bold text-[12px] tracking-[0.15em] uppercase text-gray-400 mb-5 px-3">
                                {col.heading}
                              </h4>
                              <ul className="space-y-1">
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
                                                  : link.name === "Plan Your Visit"
                                                ? "/plan-your-trip"
                                                : link.name ===
                                                    "Tourist Circuits"
                                                  ? "/tourist-circuits"
                                                  : link.name === "Travel Tips"
                                                    ? "/travel-tips"
                                                    : link.name ===
                                                        "Access (How to Reach)"
                                                      ? "/access"
                                                      : link.name ===
                                                          "Local Taxis"
                                                        ? "/local-taxis"
                                                        : link.name === "Bus Booking"
                                                          ? "/bus-booking"
                                                          : "#"
                                      }
                                      className="relative block p-4 rounded-2xl !no-underline border-2 border-gray-400 bg-white transition-all duration-300 ease-out group/link hover:-translate-y-[4px] hover:scale-[1.03] hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.50)] hover:border-[#1E3A8A]"
                                    >
                                      <div className="absolute inset-0 bg-gradient-to-r from-[#F97316]/5 to-transparent opacity-0 group-hover/link:opacity-100 transition duration-300 rounded-2xl"></div>

                                      <div className="relative z-10">
                                        <div className="font-bold text-[15.5px] text-[#002060] group-hover/link:text-[#F97316] transition-colors flex items-center justify-between">
                                          {link.name}
                                          <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-1 group-hover/link:scale-110 transition-all duration-300" />
                                        </div>

                                        <div className="text-gray-600 text-[13.5px] leading-relaxed mt-1 pr-6">
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
                            className="hidden lg:grid w-full lg:w-3/5 gap-5 grid-cols-2"
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
                                <FeaturedCard {...item.featuredCard} />
                              </div>
                            )}

                            {/* Smaller Cards */}
                            {item.cards?.length > 0 && (
                              <div className="flex flex-col gap-5 justify-between">
                                {item.cards.map((card, idx) => (
                                  <MegaMenuCard key={idx} {...card} />
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
      </header>

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
                <p className="text-gray-500 font-medium mb-4">Try searching for:</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {["Shimla", "Manali Stays", "Spiti Valley", "Hotel Booking", "Treks"].map((term) => (
                    <button key={term} className="px-5 py-2.5 rounded-full bg-gray-50 border border-gray-200 text-[#002060] hover:border-[#FF5A2A] hover:text-[#FF5A2A] hover:bg-orange-50 transition-all shadow-sm font-semibold">
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
                                        : link.name === "Access (How to Reach)"
                                          ? "/access"
                                          : link.name === "Local Taxis"
                                            ? "/local-taxis"
                                            : link.name === "Bus Booking"
                                              ? "/bus-booking"
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
                      const y = el.getBoundingClientRect().top + window.scrollY - 80;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }, 100);
                }
              }}
              className="flex flex-col items-center gap-1 p-2 hover:text-[#FF5A2A] transition-colors group">
              <img src="/hp-logo.png" alt="HP Logo" className="w-9 h-9 object-contain group-hover:-translate-y-1 transition-transform" />
              <span className="text-xs font-semibold">Locations</span>
            </button>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                setIsSearchOpen(true);
              }}
              className="flex flex-col items-center gap-1.5 p-2 hover:text-[#FF5A2A] transition-colors group">
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
