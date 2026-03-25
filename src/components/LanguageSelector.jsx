import React, { useState, useEffect, useRef } from 'react';
import { Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import './LanguageSelector.css';

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'Hindi' },
  { code: 'pa', label: 'Punjabi' },
  { code: 'ta', label: 'Tamil' },
  { code: 'bn', label: 'Bengali' },
  { code: 'fr', label: 'French' },
  { code: 'de', label: 'German' },
];

// Single ID used by both instances to find the hidden Google element
const GOOGLE_ELEMENT_ID = 'google_translate_element_global';

const LanguageSelector = ({ isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const initTranslate = () => {
      if (window.google && window.google.translate) {
        const el = document.getElementById(GOOGLE_ELEMENT_ID);
        // Only initialize if the element exists and hasn't been filled yet
        if (el && !el.hasChildNodes()) {
          new window.google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'en,hi,pa,ta,bn,fr,de',
            autoDisplay: false
          }, GOOGLE_ELEMENT_ID);
        }
      }
    };

    // Check every 500ms until google is ready
    const interval = setInterval(() => {
      if (window.google?.translate) {
        initTranslate();
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleLanguageChange = (langCode) => {
    // 1. Find the hidden Google Select box
    const selectElement = document.querySelector('.goog-te-combo');
    
    if (selectElement) {
      selectElement.value = langCode;
      
      // 2. Trigger the change event so Google script notices
      selectElement.dispatchEvent(new Event('change', { bubbles: true }));
      
      // 3. Update the UI
      setIsOpen(false);
      
      // 4. Force a small scroll or click to ensure the browser paints the change
      console.log(`Language changed to: ${langCode}`);
    } else {
      console.error("Google Translate element not found in DOM yet.");
    }
  };

  return (
    <div className="relative flex items-center justify-center z-[100]" ref={dropdownRef}>
      {/* CRITICAL: We only want ONE of these on the whole page. 
         If isMobile is false (Desktop), we render the hidden div.
      */}
      {!isMobile && (
        <div 
          id={GOOGLE_ELEMENT_ID} 
          style={{ 
            position: 'fixed', 
            top: '-1000px', 
            // left: '-1000px', 
            visibility: 'hidden' 
          }} 
        />
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 ease-in-out hover:bg-black/5 hover:scale-110 hover:shadow-[0_0_10px_rgba(0,0,0,0.3)] focus:outline-none overflow-hidden border-0 p-0 bg-transparent"
  style={{ borderRadius: '50%' }}

        aria-label="Select Language"
      >
        <Globe className="w-8 h-8 text-[#002060] opacity-80" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={`absolute ${isMobile ? "top-full mt-2 right-0" : "top-full mt-3 right-0"} w-40 bg-white/95 backdrop-blur-xl border border-white/40 shadow-xl rounded-2xl overflow-hidden py-2`}
          >
            <div className="max-h-[250px] overflow-y-auto">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className="w-full text-left px-4 py-2 hover:bg-[#FF5A2A]/10 text-[#002060] font-semibold text-sm transition-colors"
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;