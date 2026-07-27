import React, { useState } from 'react';
import { Cpu, Settings, ShieldCheck, Eye, RefreshCw, CheckCircle2, ArrowRight } from 'lucide-react';
import './HardwareHotspots.css';

export default function HardwareHotspots() {
  const [activeHotspotId, setActiveHotspotId] = useState('flex-arm');

  const hotspots = [
    {
      id: 'frame',
      title: '3030 Extruded Aluminum Frame',
      category: 'Structural Kinematics',
      cx: 120,
      cy: 60,
      icon: Settings,
      summary: 'Heavy-duty CNC machined steel corner brackets and 3030 extruded aluminum profiles prevent frame deflection during high-acceleration prints.',
      specs: [
        'Frame Material: T6-6061 Anodized Aluminum',
        'Standard 19-inch 6U Server Rack Mount',
        'Vibration Damping Isolation Mounts'
      ]
    },
    {
      id: 'linear-rails',
      title: 'Dual MGN12H Linear Motion',
      category: 'Motion Precision',
      cx: 90,
      cy: 140,
      icon: Cpu,
      summary: 'Recirculating stainless steel ball carriages eliminate belt slop and gantry tilt, ensuring sub-10 micron positioning repeatability.',
      specs: [
        'Guide Rail: MGN12H Stainless Steel',
        'Stepper Drivers: Trinamic TMC2209 Silent',
        'Max Acceleration: 12,000 mm/s²'
      ]
    },
    {
      id: 'flex-arm',
      title: 'Spring-Steel PEI Ejection Arm',
      category: 'Harvest Automation',
      cx: 260,
      cy: 220,
      icon: RefreshCw,
      summary: 'Actuator flexes magnetic PEI sheet by 3.5 degrees upon bed cooling. Completed parts pop cleanly into collection chute without tools.',
      specs: [
        'Ejection Speed: 14.8 Seconds / Part',
        'PEI Coating: Textured & Smooth Dual-Sided',
        'Bed Magnetic Hold: 120°C High-Temp Neodymium'
      ]
    },
    {
      id: 'optical-ai',
      title: '1080p Optical Spaghetti AI Camera',
      category: 'Safety & Quality',
      cx: 250,
      cy: 100,
      icon: Eye,
      summary: 'Layer-by-layer optical neural network monitors nozzle extrusion. Automatically pauses job and alerts fleet manager if detachment is detected.',
      specs: [
        'Camera Sensor: 1080p HDR Wide Angle',
        'Detection Speed: Sub-2 Layer Failure Flag',
        'Night-Vision IR Illuminator Built-in'
      ]
    },
    {
      id: 'controller',
      title: 'Klipper / Moonraker Board',
      category: 'Cloud Firmware',
      cx: 380,
      cy: 160,
      icon: ShieldCheck,
      summary: 'Dedicated Quad-Core Linux SoC running Klipper core. Communicates directly with Dashing SaaS via secure WebSocket API.',
      specs: [
        'API Architecture: Native REST & WebSockets',
        'Network: Wi-Fi 6 + RJ-45 Ethernet',
        'Power Relay: Emergency Soft & Hard Cut'
      ]
    }
  ];

  const activeHotspot = hotspots.find(h => h.id === activeHotspotId) || hotspots[2];

  return (
    <div className="hardware-hotspots-container">
      <div className="hotspots-header">
        <div>
          <span className="tech-tag">INSPECT HARDWARE SPECIFICATIONS</span>
          <h3>Interactive Node Blueprint & Kinematic Assembly</h3>
          <p>Click any numbered callout on the technical schematic to inspect Dashing's mechanical engineering components.</p>
        </div>
      </div>

      <div className="hotspots-grid">
        {/* SVG Blueprint Viewer */}
        <div className="blueprint-canvas-box">
          <div className="blueprint-canvas-header">
            <div className="blueprint-title">SCHEMATIC FIG 1.4 — DASHING AUTOMATED RACK NODE</div>
            <div className="blueprint-status"><span className="status-dot"></span> LIVE VECTOR SCHEMATIC</div>
          </div>

          <div className="blueprint-svg-wrapper">
            <svg viewBox="0 0 500 300" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Outer Rack Frame */}
              <rect x="50" y="30" width="400" height="240" rx="6" stroke="#0284C7" strokeWidth="2" strokeDasharray="6 3" opacity="0.6" />
              <rect x="58" y="38" width="384" height="224" rx="4" stroke="#64748B" strokeWidth="1" opacity="0.3" />
              
              {/* Vertical Linear Rails */}
              <line x1="90" y1="50" x2="90" y2="250" stroke="#0284C7" strokeWidth="3" />
              <line x1="410" y1="50" x2="410" y2="250" stroke="#0284C7" strokeWidth="3" />
              
              {/* Horizontal Motion Crossbar */}
              <rect x="80" y="120" width="340" height="14" fill="#0F172A" stroke="#0284C7" strokeWidth="1.5" rx="2" />
              
              {/* Direct Drive Toolhead Assembly */}
              <rect x="220" y="90" width="60" height="50" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" rx="4" />
              <circle cx="250" cy="115" r="10" fill="#0284C7" opacity="0.8" />
              
              {/* Robotic Swapper PEI Base */}
              <rect x="110" y="210" width="280" height="22" fill="#0F172A" stroke="#10B981" strokeWidth="2" rx="4" />
              <path d="M120 221 L380 221" stroke="#10B981" strokeWidth="2" strokeDasharray="4 2" />
              
              {/* Controller Board Block */}
              <rect x="350" y="140" width="50" height="40" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5" rx="3" />
              <line x1="360" y1="150" x2="390" y2="150" stroke="#F59E0B" strokeWidth="2" />
              <line x1="360" y1="160" x2="385" y2="160" stroke="#F59E0B" strokeWidth="2" />
              
              {/* Grid background lines inside SVG */}
              <line x1="250" y1="30" x2="250" y2="270" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              <line x1="50" y1="150" x2="450" y2="150" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

              {/* Hotspot Markers */}
              {hotspots.map((hs, index) => {
                const isActive = hs.id === activeHotspotId;
                return (
                  <g 
                    key={hs.id} 
                    onClick={() => setActiveHotspotId(hs.id)} 
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Outer pulse circle if active */}
                    {isActive && (
                      <circle cx={hs.cx} cy={hs.cy} r="18" fill="none" stroke="#38BDF8" strokeWidth="2" opacity="0.8">
                        <animate attributeName="r" values="14;22;14" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite" />
                      </circle>
                    )}
                    
                    {/* Hotspot pin circle */}
                    <circle 
                      cx={hs.cx} 
                      cy={hs.cy} 
                      r="12" 
                      fill={isActive ? '#0284C7' : '#0F172A'} 
                      stroke={isActive ? '#38BDF8' : '#64748B'} 
                      strokeWidth="2" 
                    />
                    
                    {/* Hotspot index number */}
                    <text 
                      x={hs.cx} 
                      y={hs.cy + 4} 
                      textAnchor="middle" 
                      fill="#FFFFFF" 
                      fontSize="10" 
                      fontFamily="var(--font-mono)" 
                      fontWeight="bold"
                    >
                      0{index + 1}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="hotspot-select-bar">
            {hotspots.map((hs, idx) => (
              <button 
                key={hs.id} 
                className={`hotspot-pill-btn ${hs.id === activeHotspotId ? 'active' : ''}`}
                onClick={() => setActiveHotspotId(hs.id)}
              >
                0{idx + 1}. {hs.title.split(' ')[0]} {hs.title.split(' ')[1]}
              </button>
            ))}
          </div>
        </div>

        {/* Hotspot Spec Detail Panel */}
        <div className="hotspot-detail-panel">
          <div className="detail-category-tag">
            <activeHotspot.icon size={16} color="var(--accent-cyan)" />
            <span>{activeHotspot.category}</span>
          </div>

          <h4 className="detail-title">{activeHotspot.title}</h4>
          
          <p className="detail-summary">{activeHotspot.summary}</p>

          <div className="detail-specs-list">
            <div className="specs-list-title">ENGINEERING SPECIFICATIONS:</div>
            {activeHotspot.specs.map((spec, i) => (
              <div key={i} className="spec-item">
                <CheckCircle2 size={16} color="var(--accent)" style={{ flexShrink: 0 }} />
                <span>{spec}</span>
              </div>
            ))}
          </div>

          <div className="detail-footer-note">
            Tested & validated under 500+ continuous continuous harvest print cycles.
          </div>
        </div>
      </div>
    </div>
  );
}
