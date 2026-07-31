import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Shield, Activity, Terminal, ArrowUpRight } from 'lucide-react';
import './Footer.css';

export default function Footer({ onOpenLOI }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-brand-title">
              <Cpu size={26} color="var(--accent-cyan)" />
              <span>DASHING TECHNOLOGIES</span>
            </div>
            <p style={{ maxWidth: '340px' }}>
              Zero-Touch 3D Printing & Modular Build Plate Storage. Continuous unattended yield from desktop racks to enterprise server arrays.
            </p>
          </div>

          <div>
            <div className="footer-col-title">Platform</div>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Product Overview</Link></li>
              <li><Link to="/technology" className="footer-link">Plate Swapping System</Link></li>
              <li><Link to="/technology" className="footer-link">Open Klipper/Moonraker API</Link></li>
              <li><Link to="/use-cases" className="footer-link">Enterprise Farm Arrays</Link></li>
              <li><button onClick={onOpenLOI} className="footer-link" style={{ textAlign: 'left' }}>Letter of Intent (LOI)</button></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Use Cases</div>
            <ul className="footer-links">
              <li><Link to="/use-cases" className="footer-link">Engineering & R&D Labs</Link></li>
              <li><Link to="/use-cases" className="footer-link">University Print Fleets</Link></li>
              <li><Link to="/use-cases" className="footer-link">Micro-Farm Manufacturing</Link></li>
              <li><Link to="/use-cases" className="footer-link">Print-on-Demand Scaling</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Company</div>
            <ul className="footer-links">
              <li><Link to="/contact" className="footer-link">Pilot Program Request</Link></li>
              <li><Link to="/contact" className="footer-link">Schedule Founders Discovery</Link></li>
              <li><a href="#hardware-specs" className="footer-link">Hardware Spec Sheet</a></li>
              <li><a href="mailto:info@dashingtechnologies.com" className="footer-link">info@dashingtechnologies.com</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Dashing Technologies Inc. All rights reserved. Built for 24/7 autonomous production.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span style={{ cursor: 'pointer', color: '#64748B' }}>Privacy Policy</span>
            <span style={{ cursor: 'pointer', color: '#64748B' }}>Terms of Service</span>
            <span style={{ cursor: 'pointer', color: '#64748B' }}>Klipper Bridge Docs</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
