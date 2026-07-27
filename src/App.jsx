import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LOIModal from './components/LOIModal';

import LandingPage from './pages/LandingPage';
import TechnologyPage from './pages/TechnologyPage';
import UseCasesPage from './pages/UseCasesPage';
import ContactPage from './pages/ContactPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isLOIOpen, setIsLOIOpen] = useState(false);

  const handleOpenLOI = () => setIsLOIOpen(true);
  const handleCloseLOI = () => setIsLOIOpen(false);

  return (
    <Router>
      <ScrollToTop />
      <Navbar onOpenLOI={handleOpenLOI} />
      
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<LandingPage onOpenLOI={handleOpenLOI} />} />
          <Route path="/technology" element={<TechnologyPage onOpenLOI={handleOpenLOI} />} />
          <Route path="/use-cases" element={<UseCasesPage onOpenLOI={handleOpenLOI} />} />
          <Route path="/contact" element={<ContactPage onOpenLOI={handleOpenLOI} />} />
        </Routes>
      </main>

      <Footer onOpenLOI={handleOpenLOI} />

      {/* Global LOI Lead Reservation Modal */}
      <LOIModal isOpen={isLOIOpen} onClose={handleCloseLOI} />
    </Router>
  );
}
