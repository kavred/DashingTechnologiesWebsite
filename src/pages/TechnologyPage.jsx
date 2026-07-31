import React from 'react';
import { 
  Cpu, Layers, ShieldCheck, Activity, Terminal, Server, 
  Settings, CheckCircle2, ArrowRight, Download, Zap, RefreshCw, Eye 
} from 'lucide-react';
import HardwareHotspots from '../components/HardwareHotspots';
import './TechnologyPage.css';

export default function TechnologyPage({ onOpenLOI }) {
  return (
    <div className="technology-page">
      {/* Header */}
      <section className="tech-page-header bg-grid-pattern-dark">
        <div className="container">
          <div className="tech-meta-tag light">KINEMATIC & FIRMWARE ARCHITECTURE</div>
          <h1 style={{ color: '#FFFFFF', marginTop: '0.5rem' }}>Dasher 1 Specs & Kinematic Engineering</h1>
          <p className="tech-hero-subtitle">
            Engineered for lab CTOs and enterprise production managers requiring sub-10 micron positioning, Klipper API compatibility, and optical fail-safes.
          </p>
        </div>
      </section>

      {/* 1. INTERACTIVE BLUEPRINT SPECIFICATION SECTION */}
      <section className="section">
        <div className="container">
          <HardwareHotspots />
        </div>
      </section>

      {/* 2. AUTOMATED HARVESTING & FLEX MECHANISM */}
      <section className="section section-alt">
        <div className="container">
          <div className="editorial-split-block">
            <div>
              <span className="tech-meta-tag">AUTOMATED PLATE SWAPPING</span>
              <h2>Multi-Plate Storage Rack System</h2>
              <p style={{ marginBottom: '1.25rem' }}>
                The storage rack mechanism uses a dedicated gantry and magnetic latching to swap entire build plates automatically. When a print finishes, the plate is slotted securely into a multi-tiered magazine rack, allowing the printer to pull a fresh sheet and begin the next job immediately while you collect parts on your own time.
              </p>

              <div className="spec-highlight-box">
                <div className="spec-highlight-num">10-Plate Capacity</div>
                <div className="spec-highlight-text">
                  Continuous multi-job queue execution without needing to manually clear beds.
                </div>
              </div>
            </div>

            <div className="harvest-sequence-box">
              <div className="seq-title">MECHANICAL SWAP SEQUENCE</div>
              
              <div className="seq-item">
                <div className="seq-num">01</div>
                <div>
                  <strong>Job Completion & Cooldown:</strong> Print finishes and nozzle parks.
                </div>
              </div>
              
              <div className="seq-item">
                <div className="seq-num">02</div>
                <div>
                  <strong>Robotic Plate Transfer:</strong> Gantry retrieves the completed plate and slots it into the storage rack.
                </div>
              </div>

              <div className="seq-item">
                <div className="seq-num">03</div>
                <div>
                  <strong>Fresh Plate Loading:</strong> A new PEI sheet is pulled from the rack and magnetically seated, ready for dispatch.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SAFETY & OPTICAL SENSORS */}
      <section className="section">
        <div className="container">
          <div className="section-head-left">
            <span className="tech-meta-tag">INDUSTRIAL RELIABILITY</span>
            <h2>Onboard Safety & Optical Sensors</h2>
            <p>Independent protection layers built to operate safely unattended 24/7.</p>
          </div>

          <div className="safety-grid">
            <div className="safety-card">
              <Eye size={28} color="var(--accent)" style={{ marginBottom: '0.85rem' }} />
              <h4>Optical AI Spaghetti Detection</h4>
              <p style={{ fontSize: '0.9rem', marginTop: '0.4rem' }}>
                Onboard 1080p camera runs layer-by-layer neural network inference. Automatically pauses heating and notifies technicians if spaghetti detachment occurs.
              </p>
            </div>

            <div className="safety-card">
              <ShieldCheck size={28} color="var(--accent)" style={{ marginBottom: '0.85rem' }} />
              <h4>Centralized PDU Management</h4>
              <p style={{ fontSize: '0.9rem', marginTop: '0.4rem' }}>
                Server rack power distribution units feature soft-start relays, real-time current draw telemetry, and remote web emergency shutoff switches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL SPECIFICATION DATA MATRIX */}
      <section className="section section-alt" id="hardware-specs">
        <div className="container">
          <div className="section-head-left">
            <span className="tech-meta-tag">TECHNICAL MATRIX</span>
            <h2>System Specification Sheet</h2>
          </div>

          <div className="table-responsive-box">
            <table className="spec-matrix-table">
              <thead>
                <tr>
                  <th>Specification Parameter</th>
                  <th>Dasher 1 (1-2 Printers)</th>
                  <th>Enterprise Farm Array (4+ Racks)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Build Volume / Printer</strong></td>
                  <td><span className="telemetry-font">256 x 256 x 256 mm</span></td>
                  <td><span className="telemetry-font">300 x 300 x 300 mm (Expandable)</span></td>
                </tr>
                <tr>
                  <td><strong>Max Hotend Temp</strong></td>
                  <td><span className="telemetry-font">300 °C (All-Metal High Flow)</span></td>
                  <td><span className="telemetry-font">350 °C (Hardened Steel / Titanium)</span></td>
                </tr>
                <tr>
                  <td><strong>Max Bed Temp</strong></td>
                  <td><span className="telemetry-font">110 °C Aluminum Magnetic</span></td>
                  <td><span className="telemetry-font">120 °C AC High-Heat Magnetic</span></td>
                </tr>
                <tr>
                  <td><strong>Ejection Mechanism</strong></td>
                  <td>Multi-Plate Storage Rack</td>
                  <td>Multi-Sheet Conveyor / Rack Elevator</td>
                </tr>
                <tr>
                  <td><strong>Firmware API Bridge</strong></td>
                  <td>Klipper + Moonraker WebSocket API</td>
                  <td>Klipper Enterprise Cluster + Docker SaaS</td>
                </tr>
                <tr>
                  <td><strong>Power Requirements</strong></td>
                  <td><span className="telemetry-font">110V / 15A AC Standard Outlet</span></td>
                  <td><span className="telemetry-font">220V / 30A Server Rack PDU</span></td>
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
