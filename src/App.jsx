import React from 'react';
import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import HorizontalCategories from './components/HorizontalCategories';
import PlacesToGo from './components/PlacesToGo';
import ThingsToDo from './components/ThingsToDo';
import SeasonalGuide from './components/SeasonalGuide';
import InteractiveMap from './components/InteractiveMap';
import PropertyShowcase from './components/PropertyShowcase';
import ItineraryBuilder from './components/ItineraryBuilder';
import SocialProof from './components/SocialProof';
import AIChatbot from './components/AIChatbot';
import Footer from './components/Footer';

// pages
import Hotels from "./components/pages/Hotels";
import HotelBooking from "./components/pages/HotelBooking";
import HutsCottages from "./components/pages/HutsCottages";
import PlanYourTrip from "./components/pages/PlanYourTrip";
import TouristCircuits from "./components/pages/TouristCircuits";
import TravelTips from "./components/pages/TravelTips";
import Access from "./components/pages/Access";
import LocalTaxis from "./components/pages/LocalTaxis";
import Weather from "./components/pages/Weather";
import BusBooking from "./components/pages/BusBooking";

export default function App() {
  return (
    <div className="position-relative min-vh-100 bg-white">
      
      <Navbar />

      <Routes>
        {/* ✅ Homepage (your current layout) */}
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <HorizontalCategories />
              <Story />
              <PlacesToGo />
              <ThingsToDo />
              <SeasonalGuide />
              <InteractiveMap />
              <PropertyShowcase />
              <ItineraryBuilder />
              <SocialProof />
            </main>
          }
        />

        {/* ✅ Other Pages */}
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotel-booking" element={<HotelBooking />} />
        <Route path="/huts-cottages" element={<HutsCottages />} />
        <Route path="/plan-your-trip" element={<PlanYourTrip />} />
        <Route path="/tourist-circuits" element={<TouristCircuits />} />
        <Route path="/travel-tips" element={<TravelTips />} />
        <Route path="/access" element={<Access />} />
        <Route path="/local-taxis" element={<LocalTaxis />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/bus-booking" element={<BusBooking />} />
      </Routes>

      <Footer />
      <AIChatbot />
    </div>
  );
}