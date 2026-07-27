import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Cpu, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ onOpenLOI }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="brand-logo" onClick={() => setMobileMenuOpen(false)}>
          <div className="logo-icon-wrapper">
            <Cpu size={22} strokeWidth={2.5} />
          </div>
          <div className="brand-name">
            <span className="brand-name-top">DASHING</span>
            <span className="brand-name-sub">TECHNOLOGIES</span>
          </div>
        </Link>

        <ul className="nav-menu">
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Product
            </NavLink>
          </li>
          <li>
            <NavLink to="/technology" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Technology & Specs
            </NavLink>
          </li>
          <li>
            <NavLink to="/use-cases" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Use Cases
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Contact & Pilot
            </NavLink>
          </li>
        </ul>

        <div className="nav-actions">
          <div className="badge badge-success">
            <span className="badge-dot pulse"></span>
            Beta Node v2.4 Live
          </div>
          <button className="btn btn-primary btn-sm" onClick={onOpenLOI}>
            <span>Reserve Beta Unit</span>
            <ArrowRight size={16} />
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
                <span>Product</span>
                <ArrowRight size={18} />
              </Link>
            </li>
            <li>
              <Link to="/technology" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                <span>Technology & Specs</span>
                <ArrowRight size={18} />
              </Link>
            </li>
            <li>
              <Link to="/use-cases" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                <span>Use Cases</span>
                <ArrowRight size={18} />
              </Link>
            </li>
            <li>
              <Link to="/contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                <span>Contact & Pilot Program</span>
                <ArrowRight size={18} />
              </Link>
            </li>
          </ul>

          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button className="btn btn-primary btn-lg" style={{ width: '100%' }} onClick={() => { setMobileMenuOpen(false); onOpenLOI(); }}>
              <span>Reserve Beta Unit</span>
              <ArrowRight size={18} />
            </button>
            <div style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
              <ShieldCheck size={16} color="var(--accent)" /> Priority Hardware Queue Spot
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
