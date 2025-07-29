import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavbarFHA';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About'
import Services from './Components/Services';
import Contact from './Components/Contact';
import ServiceDetail from './Components/serviceDetail';
import Partners from './Components/Partners';
import ScrollToTop from './Components/ScrollToTop';
import './App.css';
import QuoteSection from './Components/QuoteSection';

const App = () => {
  return (
    <Router>
      <div className="app bg-black text-white font-sans">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/quoteSection" element={<QuoteSection />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
