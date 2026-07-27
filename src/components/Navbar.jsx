import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Cpu, Menu, X, ArrowRight, Activity } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ onOpenLOI }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="brand-logo" onClick={() => setMobileMenuOpen(false)}>
          <div className="logo-icon-wrapper">
            <Cpu size={20} strokeWidth={2.5} color="#FFFFFF" />
          </div>
          <div className="brand-name">
            <span className="brand-name-main">DASHING</span>
            <span className="brand-name-sub">TECHNOLOGIES</span>
          </div>
        </Link>

        <ul className="nav-menu">
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Product Overview
            </NavLink>
          </li>
          <li>
            <NavLink to="/technology" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Kinematics & Specs
            </NavLink>
          </li>
          <li>
            <NavLink to="/use-cases" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Farm Deployment
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Pilot Program
            </NavLink>
          </li>
        </ul>

        <div className="nav-actions">
          <div className="status-indicator-pill">
            <span className="status-indicator-dot"></span>
            <span className="status-indicator-text">Beta v2.4 Active</span>
          </div>
          <button className="btn btn-primary btn-sm nav-cta-btn" onClick={onOpenLOI}>
            <span>Reserve Beta Unit</span>
            <ArrowRight size={15} />
          </button>
        </div>

        <button className="mobile-toggle" onClick={toggleMobileMenu} aria-label="Toggle Navigation">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <ul className="mobile-nav-list">
            <li>
              <Link to="/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                <span>Product Overview</span>
                <ArrowRight size={18} />
              </Link>
            </li>
            <li>
              <Link to="/technology" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                <span>Kinematics & Specs</span>
                <ArrowRight size={18} />
              </Link>
            </li>
            <li>
              <Link to="/use-cases" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                <span>Farm Deployment</span>
                <ArrowRight size={18} />
              </Link>
            </li>
            <li>
              <Link to="/contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                <span>Pilot Program</span>
                <ArrowRight size={18} />
              </Link>
            </li>
          </ul>

          <div style={{ marginTop: '2rem' }}>
            <button className="btn btn-primary btn-lg" style={{ width: '100%' }} onClick={() => { setMobileMenuOpen(false); onOpenLOI(); }}>
              <span>Reserve Beta Unit</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
