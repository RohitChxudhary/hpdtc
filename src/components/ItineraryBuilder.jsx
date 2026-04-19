import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Map, Calendar, Compass, Sparkles, CheckCircle2, Save, Share2, MapPin, Clock } from 'lucide-react';
import { Container, Row, Col, Card, Button, ProgressBar, Badge } from 'react-bootstrap';

const ITINERARIES = {
  'Adventure': {
    'Weekend Getaway (2-3 days)': {
      title: 'Solang Valley Snow Rush',
      description: 'A high-octane weekend in the heart of the Himalayas.',
      highlights: ['Paragliding at Solang Valley', 'ATV Ride through snow trails', 'Skiing session with experts'],
      schedule: [
        { day: 1, activity: 'Arrival in Manali, check-in and evening walk at Mall Road.' },
        { day: 2, activity: 'Full day adventure at Solang Valley: Paragliding and Zorbing.' },
        { day: 3, activity: 'River rafting in Beas river and departure.' }
      ]
    },
    'Short Trip (4-6 days)': {
      title: 'Hampta Pass Explorer',
      description: 'A moderate trek offering dramatic landscape changes.',
      highlights: ['Trek from Prini to Chikha', 'Camping under the stars at Balu ka Ghera', 'Crossing the snowy Hampta Pass'],
      schedule: [
        { day: 1, activity: 'Manali to Jobra drive and trek to Chikha.' },
        { day: 2, activity: 'Trek from Chikha to Balu ka Ghera.' },
        { day: 3, activity: 'Balu ka Ghera to Siagoru via Hampta Pass trek.' },
        { day: 4, activity: 'Siagoru to Chatru and visit Chandratal Lake.' },
        { day: 5, activity: 'Return journey from Chatru to Manali via Rohtang.' }
      ]
    }
  },
  'Relaxation': {
    'Weekend Getaway (2-3 days)': {
      title: 'Kasol Riverside Peace',
      description: 'Unwind by the Parvati River and soak in the mountain vibes.',
      highlights: ['Riverside cafe hopping', 'Short walk to Chalal village', 'Manikaran Sahib hot springs'],
      schedule: [
        { day: 1, activity: 'Arrival in Kasol, riverside camping setup and relaxation.' },
        { day: 2, activity: 'Hike to Chalal and evening at local cafes.' },
        { day: 3, activity: 'Visit Manikaran Sahib and departure.' }
      ]
    },
    'Short Trip (4-6 days)': {
      title: 'Dharamshala Spiritual Retreat',
      description: 'Find inner peace among cedar forests and monasteries.',
      highlights: ['Morning meditation at McLeod Ganj', 'Bhagsunag Waterfall trek', 'Naddi sunset point'],
      schedule: [
        { day: 1, activity: 'Arrival in Dharamshala, check-in at a retreat center.' },
        { day: 2, activity: 'Visit Tsuglagkhang Complex (Dalai Lama Temple).' },
        { day: 3, activity: 'Exploration of Dharamkot and Bhagsu waterfall.' },
        { day: 4, activity: 'Visit Norbulingka Institute and HPCA Stadium.' },
        { day: 5, activity: 'Leisure day for personalized meditation and spa.' }
      ]
    }
  },
  'Culture': {
    'Weekend Getaway (2-3 days)': {
      title: 'Shimla Heritage Trail',
      description: 'Explore the colonial charm of the summer capital.',
      highlights: ['Walk on the Ridge', 'Heritage tour of Viceregal Lodge', 'Jakhu Temple visit'],
      schedule: [
        { day: 1, activity: 'Arrival in Shimla, evening at Mall Road.' },
        { day: 2, activity: 'Visit Viceregal Lodge and State Museum.' },
        { day: 3, activity: 'Hike to Jakhu Temple and departure.' }
      ]
    }
  },
  'Nature': {
    'Short Trip (4-6 days)': {
      title: 'Spiti Valley Gateway',
      description: 'A journey into the Trans-Himalayan cold desert.',
      highlights: ['Key Monastery exploration', 'Highest post office in Hikkim', 'Stargazing in Kibber'],
      schedule: [
        { day: 1, activity: 'Shimla to Kalpa scenic drive.' },
        { day: 2, activity: 'Kalpa to Kaza via Nako Lake.' },
        { day: 3, activity: 'Visit Key Monastery and Kibber village.' },
        { day: 4, activity: 'Visit Hikkim, Langza and Komic villages.' },
        { day: 5, activity: 'Drive back towards Manali via Kunzum Pass.' }
      ]
    }
  }
};

const DEFAULT_ITINERARY = {
  title: 'Custom Himachal Expedition',
  description: 'A curated journey tailored to your specific taste.',
  highlights: ['Scenic mountain drives', 'Local culinary experiences', 'Hidden gem explorations'],
  schedule: [
    { day: 1, activity: 'Arrival and acclimatization.' },
    { day: 2, activity: 'Local sightseeing and shopping.' },
    { day: 3, activity: 'Check-out and departure with memories.' }
  ]
};

export default function ItineraryBuilder() {
  const [step, setStep] = useState(1);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [genText, setGenText] = useState('Analyzing preferences...');
  const [result, setResult] = useState(null);

  const genTexts = [
    'Analyzing your preferences...',
    'Scouting the best trails...',
    'Checking weather conditions...',
    'Finding cozy stays...',
    'Finalizing your journey...'
  ];

  useEffect(() => {
    let interval;
    if (isGenerating) {
      let i = 0;
      interval = setInterval(() => {
        i = (i + 1) % genTexts.length;
        setGenText(genTexts[i]);
      }, 800);
    }
    return () => clearInterval(interval);
  }, [isGenerating]);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const styleData = ITINERARIES[selectedStyle];
      const itin = styleData ? (styleData[selectedDuration] || Object.values(styleData)[0]) : DEFAULT_ITINERARY;
      setResult(itin);
      setIsGenerating(false);
      setStep(4);
    }, 4000);
  };

  const reset = () => {
    setStep(1);
    setSelectedStyle(null);
    setSelectedDuration(null);
    setResult(null);
  };

  return (
    <section className="py-4 py-md-5 text-white position-relative overflow-hidden glass-section-dark">
      <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <Container className="py-2 py-md-5 position-relative z-1">
        <Row className="align-items-center gy-3">
          
          <Col lg={step === 4 ? 12 : 6}>
            <motion.div animate={{ opacity: step === 4 ? 0 : 1, y: step === 4 ? -20 : 0 }} className={step === 4 ? 'd-none' : ''}>

              <h2 className="display-4 font-serif fw-bold mb-1 mb-md-4">
                Design Your Perfect <br/>Himachal Journey
              </h2>
              <p className="lead text-white-50 mb-4 mb-md-5" style={{ maxWidth: '500px' }}>
                Tell us what you love, and our intelligent builder will craft a personalized itinerary that matches your pace, interests, and budget.
              </p>
              
              <div className="d-flex flex-column gap-3 gap-md-4 my-3 my-md-0">
                <div className="d-flex align-items-start">
                  <div className="rounded-circle bg-white bg-opacity-10 d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: '40px', height: '40px' }}>
                    <Compass size={24} className="text-h-saffron" />
                  </div>
                  <div>
                    <h4 className="fs-5 fw-bold mb-1">Tailored Experiences</h4>
                    <p className="text-white-50 mb-0">From adrenaline-pumping treks to serene monastery visits.</p>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <div className="rounded-circle bg-white bg-opacity-10 d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: '40px', height: '40px' }}>
                    <Map size={24} className="text-h-saffron" />
                  </div>
                  <div>
                    <h4 className="fs-5 fw-bold mb-1">Smart Routing</h4>
                    <p className="text-white-50 mb-0">Optimized travel times between destinations with real-time road conditions.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </Col>

          <Col lg={step === 4 ? 12 : 6}>
            <AnimatePresence mode="wait">
              <motion.div 
                key={step}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className={`border-0 rounded-4 shadow-lg text-dark p-4 ${step === 4 ? 'p-md-4' : 'p-md-5'}`} style={{ minHeight: step === 4 ? 'auto' : '450px' }}>
                  {step < 4 && (
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h3 className="fs-4 font-serif fw-bold mb-0">Trip Builder</h3>
                      <span className="small fw-semibold text-secondary">Step {step} of 3</span>
                    </div>
                  )}

                  {step < 4 && (
                    <ProgressBar now={(step / 3) * 100} variant="warning" className="mb-4" style={{ height: '8px' }} />
                  )}

                  {isGenerating ? (
                    <div className="text-center py-5">
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="mb-4"
                      >
                        <Sparkles size={60} className="text-h-saffron" />
                      </motion.div>
                      <h4 className="fw-bold mb-2">{genText}</h4>
                      <p className="text-secondary">Crafting something special for you...</p>
                    </div>
                  ) : (
                    <>
                      {step === 1 && (
                        <div>
                          <h4 className="fs-5 fw-bold mb-3">What's your travel style?</h4>
                          <Row className="g-3 mb-4">
                            {['Adventure', 'Relaxation', 'Culture', 'Nature'].map((style) => (
                              <Col xs={6} key={style}>
                                <Button 
                                  variant={selectedStyle === style ? "warning" : "outline-secondary"}
                                  onClick={() => setSelectedStyle(style)}
                                  className={`w-100 py-3 rounded-3 fw-semibold text-start border-2 ${selectedStyle === style ? 'text-dark shadow-sm' : ''}`}
                                >
                                  {style}
                                </Button>
                              </Col>
                            ))}
                          </Row>
                          <Button 
                            disabled={!selectedStyle}
                            onClick={() => setStep(2)}
                            className="w-100 btn-h-blue py-3 rounded-3 fw-bold"
                          >
                            Next Step
                          </Button>
                        </div>
                      )}

                      {step === 2 && (
                        <div>
                          <h4 className="fs-5 fw-bold mb-3">How long are you staying?</h4>
                          <div className="d-flex flex-column gap-3 mb-4">
                            {['Weekend Getaway (2-3 days)', 'Short Trip (4-6 days)', 'Explorer (1-2 weeks)', 'Nomad (2+ weeks)'].map((duration) => (
                              <Button 
                                key={duration} 
                                variant={selectedDuration === duration ? "warning" : "outline-secondary"}
                                onClick={() => setSelectedDuration(duration)}
                                className={`w-100 py-3 rounded-3 fw-semibold text-start border-2 d-flex align-items-center ${selectedDuration === duration ? 'text-dark shadow-sm' : ''}`}
                              >
                                <Calendar size={20} className={`me-3 ${selectedDuration === duration ? 'text-dark' : 'text-secondary'}`} />
                                {duration}
                              </Button>
                            ))}
                          </div>
                          <div className="d-flex gap-3">
                            <Button variant="outline-secondary" onClick={() => setStep(1)} className="w-25 py-3 rounded-3 fw-bold border-2">Back</Button>
                            <Button 
                              disabled={!selectedDuration}
                              onClick={() => setStep(3)} 
                              className="w-75 btn-h-blue py-3 rounded-3 fw-bold"
                            >
                              Next Step
                            </Button>
                          </div>
                        </div>
                      )}

                      {step === 3 && (
                        <div className="text-center py-4">
                          <div className="rounded-circle bg-success bg-opacity-10 d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: '80px', height: '80px' }}>
                            <CheckCircle2 size={40} className="text-success" />
                          </div>
                          <h4 className="fs-3 font-serif fw-bold mb-2">Ready to generate!</h4>
                          <p className="text-secondary mb-4">We have enough info to craft your perfect itinerary.</p>
                          <div className="p-3 bg-light rounded-3 mb-4 text-start small border border-secondary border-opacity-10">
                            <div className="mb-1"><strong>Style:</strong> {selectedStyle}</div>
                            <div><strong>Duration:</strong> {selectedDuration}</div>
                          </div>
                          <div className="d-flex gap-3">
                            <Button variant="outline-secondary" onClick={() => setStep(2)} className="w-25 py-3 rounded-3 fw-bold border-2">Back</Button>
                            <Button onClick={handleGenerate} className="w-75 btn-h-saffron py-3 rounded-3 fw-bold shadow-sm">
                              Generate My Itinerary
                            </Button>
                          </div>
                        </div>
                      )}

                      {step === 4 && result && (
                        <div className="itinerary-result">
                          <div className="d-flex justify-content-between align-items-start mb-4">
                            <div>
                              <Badge bg="warning" text="dark" className="px-3 py-2 mb-2 rounded-pill small">AI Generated</Badge>
                              <h3 className="fs-2 font-serif fw-bold mb-1">{result.title}</h3>
                              <p className="text-secondary mb-0">{result.description}</p>
                            </div>
                            <div className="d-none d-md-flex gap-2">
                              <Button variant="outline-dark" size="sm" className="rounded-circle p-2"><Save size={18} /></Button>
                              <Button variant="outline-dark" size="sm" className="rounded-circle p-2"><Share2 size={18} /></Button>
                            </div>
                          </div>

                          <Row className="g-4">
                            <Col md={4}>
                              <div className="mb-4">
                                <h5 className="fw-bold mb-3 d-flex align-items-center">
                                  <Sparkles size={18} className="me-2 text-h-saffron" />
                                  Highlights
                                </h5>
                                <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                                  {result.highlights.map((h, i) => (
                                    <li key={i} className="d-flex align-items-start small">
                                      <CheckCircle2 size={14} className="text-success me-2 mt-1 flex-shrink-0" />
                                      {h}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="p-3 bg-light rounded-3 d-flex align-items-center gap-3">
                                <MapPin size={24} className="text-h-blue" />
                                <div>
                                  <div className="fw-bold small">Location</div>
                                  <div className="text-secondary small">Himachal Pradesh</div>
                                </div>
                              </div>
                            </Col>
                            <Col md={8}>
                              <div className="ps-md-4 border-start">
                                <h5 className="fw-bold mb-4 d-flex align-items-center">
                                  <Clock size={18} className="me-2 text-h-blue" />
                                  Day-wise Schedule
                                </h5>
                                <div className="d-flex flex-column gap-4">
                                  {result.schedule.map((item, idx) => (
                                    <div key={idx} className="position-relative">
                                      <div className="fw-bold mb-1 text-h-blue">Day {item.day}</div>
                                      <div className="small text-dark">{item.activity}</div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </Col>
                          </Row>

                          <hr className="my-4 opacity-10" />

                            <div className="d-flex justify-content-between align-items-center">
                              <p className="small text-secondary mb-0 italic">This itinerary is optimized for {selectedStyle.toLowerCase()} lovers.</p>
                              <Button variant="outline-secondary" onClick={reset} className="px-4 py-2 rounded-3 fw-semibold">Start Over</Button>
                            </div>
                        </div>
                      )}
                    </>
                  )}
                </Card>
              </motion.div>
            </AnimatePresence>
          </Col>

        </Row>
      </Container>
    </section>
  );
}
