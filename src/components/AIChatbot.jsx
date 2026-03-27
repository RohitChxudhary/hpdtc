import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mic, X, Volume2, Languages, Loader2 } from 'lucide-react';
import { Button } from 'react-bootstrap';

export default function VoiceAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('How can I help you explore Himachal?');
  const [lang, setLang] = useState('en-IN');

  const recognitionRef = useRef(null);

  // Initialize Speech Recognition
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = true;

      recognitionRef.current.onresult = (event) => {
        const current = event.resultIndex;
        const text = event.results[current][0].transcript;
        setTranscript(text);

        if (event.results[current].isFinal) {
          handleLogic(text);
        }
      };

      recognitionRef.current.onend = () => setIsListening(false);
    }
  }, [lang]);

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      window.speechSynthesis.cancel(); 
      setTranscript('');
      setResponse('Listening...');
      recognitionRef.current.lang = lang;
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const handleLogic = (input) => {
    let reply = "";
    if (lang === 'hi-IN') {
      reply = `हिमाचल में आपका स्वागत है! आपने ${input} के बारे में पूछा। यह बहुत सुंदर जगह है।`;
    } else {
      reply = `Welcome to Himachal! Regarding ${input}, it's one of our most popular destinations.`;
    }
    
    setResponse(reply);
    speak(reply);
  };

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ 
          scale: 1,
          boxShadow: [
            "0px 0px 0px 0px rgba(249, 115, 22, 0.8)", 
            "0px 0px 0px 20px rgba(249, 115, 22, 0)",
            "0px 0px 0px 0px rgba(249, 115, 22, 0)"
          ]
        }}
        transition={{ 
          scale: { type: "spring", stiffness: 200, damping: 15 },
          boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`position-fixed bottom-0 end-0 m-4 z-10 rounded-circle border-0 d-flex align-items-center justify-content-center ${isOpen ? 'd-none' : 'd-flex'}`}
        style={{ width: '60px', height: '60px', backgroundColor: 'var(--accent)', color: 'white' }}
      >
        <Mic size={28} />
      </motion.button>

      {/* Voice Assistant Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="position-fixed bottom-0 end-0 m-4 z-25 bg-white rounded-4 shadow-lg border-0 overflow-hidden d-flex flex-column"
            style={{ width: '350px', borderTop: '4px solid var(--primary)' }}
          >
            {/* Header */}
            <div className="p-3 d-flex justify-content-between align-items-center border-bottom">
              <div className="d-flex align-items-center gap-2">
                <Button 
                  variant="outline-light" 
                  size="sm" 
                  className="text-dark border-0 d-flex align-items-center gap-1"
                  onClick={() => setLang(lang === 'en-IN' ? 'hi-IN' : 'en-IN')}
                >
                  <Languages size={16} className="text-primary" />
                  <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>
                    {lang === 'en-IN' ? 'English' : 'हिंदी'}
                  </span>
                </Button>
              </div>
              <Button variant="link" onClick={() => setIsOpen(false)} className="text-muted p-0">
                <X size={20} />
              </Button>
            </div>

            {/* Visualizer Area */}
            <div className="flex-grow-1 p-4 text-center d-flex flex-column align-items-center justify-content-center bg-light bg-opacity-50">
              <div className="position-relative mb-4">
                {/* Pulsing Background when listening/speaking */}
                {(isListening || isSpeaking) && (
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.2, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="position-absolute top-50 start-50 translate-middle rounded-circle"
                    style={{ 
                      width: '100px', height: '100px', 
                      backgroundColor: isListening ? 'var(--accent)' : 'var(--primary)' 
                    }}
                  />
                )}
                
                <button
                  onClick={toggleListening}
                  className="btn rounded-circle shadow-lg d-flex align-items-center justify-content-center border-0 position-relative z-1"
                  style={{ 
                    width: '80px', height: '80px', 
                    backgroundColor: isListening ? 'var(--accent)' : 'var(--primary)',
                    color: 'white'
                  }}
                >
                  {isListening ? <Loader2 className="animate-spin" size={32} /> : <Mic size={32} />}
                </button>
              </div>

              <h5 className="fw-bold mb-2" style={{ color: 'var(--text)' }}>
                {isListening ? "I'm Listening..." : isSpeaking ? "Speaking..." : "Tap to Speak"}
              </h5>
              
              <div className="mt-3 p-3 rounded-3 bg-white border border-light w-100 min-vh-10">
                <p className="small text-muted mb-1 text-uppercase fw-bold" style={{ fontSize: '0.65rem' }}>Transcription</p>
                <p className="mb-0 italic text-dark">"{transcript || '...'}"</p>
              </div>
            </div>

            {/* Response Footer */}
            <div className="p-3 bg-white border-top">
              <div className="d-flex align-items-start gap-2">
                <Volume2 size={18} className="text-primary mt-1" />
                <p className="small mb-0 text-secondary fw-medium">
                  {response}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}