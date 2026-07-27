import React from 'react';
import { 
  Cpu, Layers, ShieldCheck, Activity, Terminal, Server, 
  Settings, CheckCircle2, ArrowRight, Download, Zap, RefreshCw, Eye 
} from 'lucide-react';
import './TechnologyPage.css';

export default function TechnologyPage({ onOpenLOI }) {
  return (
    <div className="technology-page">
      {/* Header */}
      <section className="tech-page-header">
        <div className="container">
          <div className="badge badge-dark">Architecture & Hardware Specifications</div>
          <h1 style={{ color: '#FFFFFF', marginTop: '0.75rem' }}>Product Specs & Kinematic Engineering</h1>
          <p className="tech-hero-subtitle">
            Built for enterprise lab CTOs and production engineers who require rigorous mechanical standards, Klipper API compatibility, and robust optical fail-safes.
          </p>
        </div>
      </section>

      {/* 1. KINEMATICS & FRAME */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="badge badge-cyan">Mechanical Rigidity</span>
              <h2 style={{ marginTop: '0.5rem', marginBottom: '1.25rem' }}>High-Rigidity Chassis & Linear Motion</h2>
              <p>
                Every Dashing rack module is built around an extruded 3030 aluminum structural frame with CNC-machined steel gantry plates. Linear rails with dual recirculating ball carriages guarantee smooth, zero-backlash positioning even under 24/7 high-speed operation.
              </p>

              <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <CheckCircle2 color="var(--accent)" size={22} style={{ flexShrink: 0 }} />
                  <div>
                    <strong>Klipper / Moonraker API Bridge:</strong> Full native REST/WebSocket API endpoints allowing integration into OctoPrint, Mainsail, Fluidd, or custom ERP software.
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <CheckCircle2 color="var(--accent)" size={22} style={{ flexShrink: 0 }} />
                  <div>
                    <strong>Industrial Motion Components:</strong> MGN12H linear guides and high-torque NEMA 17 stepper motors with Trinamic TMC2209 silent stepper drivers.
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <CheckCircle2 color="var(--accent)" size={22} style={{ flexShrink: 0 }} />
                  <div>
                    <strong>19-Inch Server Rack Compatible:</strong> Standard 6U form factor per dual-printer shelf.
                  </div>
                </div>
              </div>
            </div>

            {/* Line Art Vector Diagram: Chassis Kinematics */}
            <div className="schematic-box">
              <div style={{ textAlign: 'center', marginBottom: '1rem', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)' }}>
                FIG 1.0 — EXPANDED RACK FRAME & MOTION KINEMATICS SCHEMATIC
              </div>
              <div className="schematic-svg-container">
                <svg viewBox="0 0 500 300" width="100%" height="240" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer Frame */}
                  <rect x="50" y="30" width="400" height="240" rx="8" stroke="#0F172A" strokeWidth="2.5" strokeDasharray="6 3" />
                  {/* Vertical Linear Rails */}
                  <line x1="90" y1="50" x2="90" y2="250" stroke="#0284C7" strokeWidth="4" />
                  <line x1="410" y1="50" x2="410" y2="250" stroke="#0284C7" strokeWidth="4" />
                  {/* Gantry Crossbeam */}
                  <rect x="80" y="120" width="340" height="16" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2" rx="4" />
                  {/* Print Head Carriage */}
                  <rect x="220" y="105" width="60" height="46" fill="#0F172A" rx="4" />
                  <circle cx="250" cy="128" r="8" fill="#38BDF8" />
                  {/* Swapper Arm Mechanism */}
                  <path d="M120 220 L380 220" stroke="#10B981" strokeWidth="3" strokeDasharray="4 2" />
                  <rect x="140" y="210" width="220" height="20" fill="#ECFDF5" stroke="#10B981" strokeWidth="2" rx="4" />
                  {/* Callout Labels */}
                  <text x="250" y="80" textAnchor="middle" fill="#0284C7" fontSize="12" fontFamily="sans-serif" fontWeight="bold">Direct Drive Toolhead & Fan</text>
                  <text x="250" y="250" textAnchor="middle" fill="#10B981" fontSize="11" fontFamily="sans-serif" fontWeight="bold">Robotic Spring-Steel Swapper Base</text>
                  <text x="60" y="150" fill="#64748B" fontSize="10" fontFamily="sans-serif">Dual Rails</text>
                </svg>
              </div>
              <div style={{ textAlign: 'center', marginTop: '0.85rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Isometric technical schematic detailing dual MGN12H linear motion & spring-steel swapper plate.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ROBOTICS & EJECTION MECHANISM */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-cyan">Automated Harvesting</span>
            <h2>Spring-Steel Sheet Swapper Mechanism</h2>
            <p>How our patented mechanical actuation system ejects prints automatically in under 15 seconds without damaging parts.</p>
          </div>

          <div className="grid-2" style={{ gap: '2rem', alignItems: 'center' }}>
            <div className="schematic-box" style={{ margin: 0 }}>
              <div style={{ textAlign: 'center', marginBottom: '1rem', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)' }}>
                FIG 2.0 — 3-STAGE AUTOMATED EJECTION SEQUENCE
              </div>
              <div className="schematic-svg-container" style={{ backgroundColor: '#FFFFFF' }}>
                <svg viewBox="0 0 460 260" width="100%" height="220" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Stage 1: Cooled Bed */}
                  <rect x="30" y="40" width="110" height="12" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
                  <rect x="40" y="25" width="40" height="15" fill="#0284C7" rx="2" />
                  <text x="85" y="75" textAnchor="middle" fill="#0F172A" fontSize="11" fontWeight="bold">1. Job Finish</text>
                  <text x="85" y="90" textAnchor="middle" fill="#64748B" fontSize="9">Bed Cooled to 35°C</text>

                  {/* Stage 2: Mechanical Flexing */}
                  <path d="M170 48 Q225 30 280 48" stroke="#0284C7" strokeWidth="4" fill="none" />
                  <rect x="210" y="10" width="30" height="18" fill="#0284C7" rx="2" transform="rotate(-10 225 20)" />
                  <text x="225" y="75" textAnchor="middle" fill="#0F172A" fontSize="11" fontWeight="bold">2. Sheet Flex</text>
                  <text x="225" y="90" textAnchor="middle" fill="#64748B" fontSize="9">Part Pops Off PEI</text>

                  {/* Stage 3: Arm Harvest & Reset */}
                  <rect x="320" y="40" width="110" height="12" fill="#10B981" stroke="#0F172A" strokeWidth="1.5" />
                  <rect x="410" y="15" width="25" height="25" fill="#38BDF8" rx="2" />
                  <path d="M370 40 L415 25" stroke="#10B981" strokeWidth="2" strokeDasharray="3 2" />
                  <text x="375" y="75" textAnchor="middle" fill="#0F172A" fontSize="11" fontWeight="bold">3. Auto Harvest</text>
                  <text x="375" y="90" textAnchor="middle" fill="#64748B" fontSize="9">Clean Sheet Reloaded</text>

                  {/* Flow Arrow */}
                  <path d="M145 46 L165 46" stroke="#0284C7" strokeWidth="2" markerEnd="url(#arrow)" />
                  <path d="M285 46 L315 46" stroke="#0284C7" strokeWidth="2" />
                </svg>
              </div>
            </div>

            <div>
              <h3 style={{ marginBottom: '1rem' }}>Zero Scraper. Zero Damage.</h3>
              <p style={{ marginBottom: '1.25rem' }}>
                The swapper mechanism uses magnetic latching and linear actuator flex channels. When a print finishes and the bed cools, the actuator flexes the spring-steel PEI sheet by 3.5 degrees, popping parts off cleanly into a collection bin before sliding a fresh sheet into position.
              </p>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                <div style={{ fontWeight: 700, color: 'var(--accent)', marginBottom: '0.4rem' }}>
                  Harvest Cycle Speed: 14.8 Seconds
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  Restores printer to active queue in seconds compared to 10+ minutes of manual technician bed clearing.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SAFETY & SENSORS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-cyan">Industrial Reliability</span>
            <h2>Onboard Safety & Optical Sensors</h2>
            <p>Fail-safe protection systems built to run unattended without supervision risks.</p>
          </div>

          <div className="grid-3">
            <div className="card">
              <Eye size={32} color="var(--accent)" style={{ marginBottom: '1rem' }} />
              <h4>Optical Spaghetti Detection</h4>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Onboard 1080p AI camera monitors print layers. If detachment or filament spaghetti occurs, the cloud immediately pauses the job and flags the technician.
              </p>
            </div>

            <div className="card">
              <Zap size={32} color="var(--accent)" style={{ marginBottom: '1rem' }} />
              <h4>Thermal Runaway Safeguards</h4>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Independent hardware thermistor logic cuts heater power instantly if temperature variance exceeds ±3°C from target setpoints.
              </p>
            </div>

            <div className="card">
              <ShieldCheck size={32} color="var(--accent)" style={{ marginBottom: '1rem' }} />
              <h4>Centralized Power PDU</h4>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Rack-wide power distribution unit with emergency shutoff relay, current draw monitoring, and surge suppression.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPREHENSIVE SPEC SHEET MATRIX */}
      <section className="section section-alt" id="hardware-specs">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-dark">Technical Data Matrix</span>
            <h2>System Specification Sheet</h2>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table className="spec-matrix-table">
              <thead>
                <tr>
                  <th>Specification Category</th>
                  <th>Desktop Node (1-2 Printers)</th>
                  <th>Enterprise Farm Array (4+ Server Racks)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Build Volume per Printer</strong></td>
                  <td>256 x 256 x 256 mm</td>
                  <td>300 x 300 x 300 mm (Expandable)</td>
                </tr>
                <tr>
                  <td><strong>Max Hotend Temperature</strong></td>
                  <td>300 °C (All-Metal High Flow)</td>
                  <td>350 °C (Hardened Steel / Titanium)</td>
                </tr>
                <tr>
                  <td><strong>Max Bed Temperature</strong></td>
                  <td>110 °C Heated Aluminum Bed</td>
                  <td>120 °C Magnetic AC High-Heat Bed</td>
                </tr>
                <tr>
                  <td><strong>Ejection Mechanism</strong></td>
                  <td>Side-Rack Spring-Steel Flex Arm</td>
                  <td>Multi-Sheet Conveyor / Rack Elevator</td>
                </tr>
                <tr>
                  <td><strong>Firmware & Control</strong></td>
                  <td>Klipper + Moonraker API</td>
                  <td>Klipper Enterprise Cluster + Docker SaaS</td>
                </tr>
                <tr>
                  <td><strong>Power Requirement</strong></td>
                  <td>110V / 15A AC Standard Outlet</td>
                  <td>220V / 30A Server Rack PDU</td>
                </tr>
                <tr>
                  <td><strong>Network Connectivity</strong></td>
                  <td>Wi-Fi 6 & Ethernet RJ-45</td>
                  <td>Dual Gigabit Ethernet (Redundant Failover)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button className="btn btn-primary btn-lg" onClick={onOpenLOI}>
              <span>Reserve Priority Hardware Queue Spot</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
