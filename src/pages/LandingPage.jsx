import React, { useState, useEffect } from 'react';
import { 
  Cpu, Zap, Layers, Server, RefreshCw, UploadCloud, Play, 
  Check, ArrowRight, ShieldCheck, Activity, Thermometer, 
  Sliders, FileText, CheckCircle2, ChevronRight, Eye, Terminal, Clock
} from 'lucide-react';
import ROICalculator from '../components/ROICalculator';
import './LandingPage.css';

export default function LandingPage({ onOpenLOI }) {
  // Live Telemetry simulation state for Hero Mock UI
  const [printProgress, setPrintProgress] = useState(84);
  const [hotendTemp, setHotendTemp] = useState(214.8);
  const [bedTemp, setBedTemp] = useState(60.1);
  const [secondsRemaining, setSecondsRemaining] = useState(135);

  // Tabbed feature showcase state
  const [activeFeatureTab, setActiveFeatureTab] = useState('cloud-dispatch');

  // G-code Demo state
  const [selectedCad, setSelectedCad] = useState({
    id: 1,
    name: 'housing_v1_mount.gcode',
    size: '14.2 MB',
    estimatedTime: '42 mins',
    filament: 'PETG Carbon',
    status: 'Ready to Dispatch'
  });
  const [isSimulatingDispatch, setIsSimulatingDispatch] = useState(false);
  const [activeJobQueue, setActiveJobQueue] = useState([
    { id: 'JOB-904', name: 'housing_v1_mount.gcode', printer: 'Node #01', status: 'In Progress', progress: 84 },
    { id: 'JOB-905', name: 'impeller_blade.gcode', printer: 'Node #02', status: 'Queued', progress: 0 },
    { id: 'JOB-906', name: 'sensor_bracket_v1.gcode', printer: 'Node #01', status: 'Queued', progress: 0 },
  ]);

  // Lead form state
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  // Telemetry loop effect
  useEffect(() => {
    const interval = setInterval(() => {
      setPrintProgress((prev) => (prev >= 99 ? 12 : prev + 1));
      setHotendTemp((prev) => +(214 + Math.random() * 1.5).toFixed(1));
      setBedTemp((prev) => +(59.8 + Math.random() * 0.5).toFixed(1));
      setSecondsRemaining((prev) => (prev > 10 ? prev - 2 : 120));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const sampleGcodeFiles = [
    { id: 1, name: 'housing_v1_mount.gcode', size: '14.2 MB', estimatedTime: '42 mins', filament: 'PETG Carbon', status: 'Ready to Dispatch' },
    { id: 2, name: 'titanium_bracket_r1.gcode', size: '8.7 MB', estimatedTime: '1 hr 18 mins', filament: 'PLA Pro', status: 'Ready to Dispatch' },
    { id: 3, name: 'drone_arm_assembly.gcode', size: '22.5 MB', estimatedTime: '2 hrs 05 mins', filament: 'ABS Reinforced', status: 'Ready to Dispatch' }
  ];

  const handleSimulateDispatch = () => {
    setIsSimulatingDispatch(true);
    setTimeout(() => {
      setIsSimulatingDispatch(false);
      const newJob = {
        id: `JOB-${Math.floor(910 + Math.random() * 80)}`,
        name: selectedCad.name,
        printer: `Node #0${Math.floor(1 + Math.random() * 3)}`,
        status: 'Routed & Dispatched',
        progress: 5
      };
      setActiveJobQueue([newJob, ...activeJobQueue.slice(0, 3)]);
    }, 1200);
  };

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    if (!leadEmail) return;
    setLeadSubmitted(true);
    setTimeout(() => {
      onOpenLOI();
    }, 800);
  };

  return (
    <div className="landing-page">
      {/* 1. HERO SECTION (Asymmetrical 60/40 Layout) */}
      <section className="hero-section bg-grid-pattern">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="hero-title">
                Printer So Good...<br />
                <span className="hero-title-highlight">It Doesn't Need You.</span>
              </h1>
              
              <p className="hero-subtitle">
                Upload pre-sliced G-code to our cloud platform—Dasher 1 automatically routes jobs to idle nodes, prints them, and robotically ejects finished parts around the clock.
              </p>

              <div className="hero-cta-group">
                <button className="btn btn-primary btn-lg" onClick={onOpenLOI}>
                  <span>Reserve Dasher 1</span>
                  <ArrowRight size={18} />
                </button>
                <a href="#interactive-simulator" className="btn btn-secondary btn-lg">
                  <Sliders size={18} />
                  <span>Simulate Farm Yield</span>
                </a>
              </div>

              <div className="hero-stats-ribbon">
                <div className="ribbon-item">
                  <div className="ribbon-num">0 Hrs</div>
                  <div className="ribbon-label">Overnight Labor Needed</div>
                </div>
              </div>
            </div>

            {/* Live Interactive Node Telemetry Box */}
            <div className="hero-node-monitor">
              <div className="monitor-topbar">
                <div className="node-id-label">
                  <Cpu size={14} color="#38BDF8" /> DASHING-HUB-NODE-01
                </div>
                <div className="node-status-badge">
                  <span className="pulse-green-dot"></span> Storage Rack Swapper Active
                </div>
              </div>

              <div className="monitor-body">
                <div className="telemetry-card">
                  <div className="telemetry-row">
                    <div>
                      <div className="telemetry-subhead">Active Payload</div>
                      <div className="telemetry-filename">{selectedCad.name}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div className="telemetry-subhead">Est. Plate Swap</div>
                      <div className="telemetry-font time-readout">
                        {Math.floor(secondsRemaining / 60)}m {secondsRemaining % 60}s
                      </div>
                    </div>
                  </div>

                  <div className="progress-ring-container">
                    <div className="svg-ring-box">
                      <svg width="64" height="64" viewBox="0 0 64 64">
                        <circle cx="32" cy="32" r="26" stroke="rgba(255,255,255,0.1)" strokeWidth="6" fill="none" />
                        <circle 
                          cx="32" cy="32" r="26" 
                          stroke="#38BDF8" 
                          strokeWidth="6" 
                          fill="none" 
                          strokeDasharray="163.3"
                          strokeDashoffset={163.3 - (163.3 * printProgress) / 100}
                          strokeLinecap="round"
                          style={{ transition: 'stroke-dashoffset 0.5s ease' }}
                        />
                      </svg>
                      <span className="telemetry-font ring-percent-text">
                        {printProgress}%
                      </span>
                    </div>

                    <div style={{ flex: 1 }}>
                      <div className="progress-text-row">
                        <span>Layer 184 / 220</span>
                        <span style={{ color: '#10B981' }}>Layer Time: 18.2s</span>
                      </div>
                      <div className="progress-bar-track">
                        <div className="progress-bar-fill" style={{ width: `${printProgress}%` }}></div>
                      </div>
                      <div className="arm-status-row">
                        <RefreshCw size={12} className="pulse" color="#38BDF8" /> Plate Storage Swapper Armed & Calibrated
                      </div>
                    </div>
                  </div>

                  <div className="temp-gauge-grid">
                    <div className="temp-gauge-box">
                      <div className="gauge-label">
                        <Thermometer size={12} color="#EF4444" /> HOTEND TEMP
                      </div>
                      <div className="gauge-val">
                        {hotendTemp} °C <span className="gauge-target">/ 215°C</span>
                      </div>
                    </div>
                    <div className="temp-gauge-box">
                      <div className="gauge-label">
                        <Thermometer size={12} color="#F59E0B" /> HEATED BED
                      </div>
                      <div className="gauge-val">
                        {bedTemp} °C <span className="gauge-target">/ 60°C</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="monitor-footer">
                  <span>Next in Queue: <strong>impeller_blade.gcode</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM & ASYMMETRICAL SOLUTION BLOCK */}
      <section className="section section-alt">
        <div className="container">
          <div className="editorial-split-block">
            <div className="editorial-left">
              <span className="tech-meta-tag">THE FARM BOTTLENECK</span>
              <h2>Why 40% of Print Capacity is Wasted Waiting for Humans</h2>
              <p>
                Traditional 3D printer farms lose hours every night and weekend. Completed parts sit on build plates waiting for technicians to manually scrape them off and reset the bed.
              </p>
              
              <div className="bottleneck-list">
                <div className="bottleneck-item">
                  <div className="b-num">01</div>
                  <div>
                    <strong>Overnight Downtime:</strong> Printers sit idle for 8–12 hours between evening job completion and morning technician arrival.
                  </div>
                </div>
                <div className="bottleneck-item">
                  <div className="b-num">02</div>
                  <div>
                    <strong>Manual Build Plate Swaps:</strong> Technicians must physically swap build plates between jobs, creating bottlenecks and limiting continuous throughput.
                  </div>
                </div>
                <div className="bottleneck-item">
                  <div className="b-num">03</div>
                  <div>
                    <strong>Manual File Routing:</strong> Technicians manually transfer G-code via SD cards or send individual print commands one machine at a time.
                  </div>
                </div>
              </div>
            </div>

            <div className="editorial-right-card">
              <div className="solution-card-header">
                <Zap size={24} color="var(--accent)" />
                <h4>The Dashing Solution</h4>
              </div>
              <ul className="solution-bullets">
                <li>
                  <CheckCircle2 size={18} color="var(--accent)" />
                  <div><strong>Automated Plate Swapping:</strong> Completed prints are swapped into the storage rack and replaced with fresh plates automatically.</div>
                </li>
                <li>
                  <CheckCircle2 size={18} color="var(--accent)" />
                  <div><strong>Cloud Auto-Routing:</strong> Upload pre-sliced G-code once; the cloud engine queues and dispatches files to idle farm nodes automatically.</div>
                </li>
                <li>
                  <CheckCircle2 size={18} color="var(--accent)" />
                  <div><strong>Modular Hardware:</strong> Rack-mountable form factor scales from 2-printer desktop units to 50+ printer server arrays.</div>
                </li>
              </ul>

              <div className="solution-card-footer">
                <span>Result: Continuous 24/7 output with zero night/weekend labor overhead.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE FARM ROI CALCULATOR */}
      <section className="section" id="interactive-simulator">
        <div className="container">
          <ROICalculator onOpenLOI={onOpenLOI} />
        </div>
      </section>

      {/* 5. TABBED HARDWARE & SOFTWARE EXPERIENCE */}
      <section className="section" id="software-demo">
        <div className="container">
          <div className="section-head-left">
            <span className="tech-meta-tag">INTEGRATED ECOSYSTEM</span>
            <h2>Hardware is the Hook. Software is the Product.</h2>
            <p>Inspect our web-based fleet management platform and G-code upload & dispatch engine.</p>

            <div className="feature-tab-buttons">
              <button 
                className={`tab-btn ${activeFeatureTab === 'cloud-dispatch' ? 'active' : ''}`}
                onClick={() => setActiveFeatureTab('cloud-dispatch')}
              >
                <UploadCloud size={16} /> Cloud Dispatch Terminal
              </button>
              <button 
                className={`tab-btn ${activeFeatureTab === 'harvest-seq' ? 'active' : ''}`}
                onClick={() => setActiveFeatureTab('harvest-seq')}
              >
                <RefreshCw size={16} /> Automated Plate Swapping
              </button>
            </div>
          </div>

          {activeFeatureTab === 'cloud-dispatch' ? (
            <div className="software-demo-box">
              <div className="software-demo-grid">
                {/* Sidebar */}
                <div className="demo-sidebar">
                  <h4 className="sidebar-title">
                    <UploadCloud size={18} color="var(--accent)" /> G-Code Dispatch Terminal
                  </h4>

                  <div className="demo-drop-zone" onClick={handleSimulateDispatch}>
                    <UploadCloud size={30} color="var(--accent)" style={{ margin: '0 auto 0.4rem auto' }} />
                    <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-main)' }}>
                      Drop G-Code File Here
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                      Supports .gcode, .g, .gc
                    </div>
                  </div>

                  <div style={{ marginTop: '1.25rem' }}>
                    <div className="sample-project-label">Select Sample Payload:</div>
                    {sampleGcodeFiles.map((file) => (
                      <div 
                        key={file.id} 
                        className={`cad-file-item ${selectedCad.id === file.id ? 'selected' : ''}`}
                        onClick={() => setSelectedCad(file)}
                      >
                        <div>
                          <div className="cad-file-name">{file.name}</div>
                          <div className="cad-file-meta">{file.size} • {file.filament}</div>
                        </div>
                        <ChevronRight size={16} color="var(--accent)" />
                      </div>
                    ))}
                  </div>

                  <button 
                    className="btn btn-primary btn-sm" 
                    style={{ width: '100%', marginTop: '1.25rem' }}
                    onClick={handleSimulateDispatch}
                    disabled={isSimulatingDispatch}
                  >
                    {isSimulatingDispatch ? 'Routing to Idle Node...' : 'Dispatch G-Code &rarr;'}
                  </button>
                </div>

                {/* Viewport */}
                <div className="demo-viewport">
                  <div className="viewport-header">
                    <div>
                      <h3 style={{ fontSize: '1.15rem', margin: 0 }}>Fleet Telemetry & Dispatch Queue</h3>
                      <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Active Farm Node Array: 3 Racks Online</div>
                    </div>
                    <div className="status-indicator-pill">
                      <span className="status-indicator-dot"></span> Cloud Auto-Routing Active
                    </div>
                  </div>

                  <div className="dispatch-target-banner">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <FileText size={20} color="var(--accent)" />
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.875rem' }}>Payload: {selectedCad.name}</div>
                        <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>Est. Duration: {selectedCad.estimatedTime} | Filament: {selectedCad.filament}</div>
                      </div>
                    </div>
                    <button className="btn btn-primary btn-sm" onClick={handleSimulateDispatch}>
                      <Play size={14} fill="currentColor" /> Dispatch
                    </button>
                  </div>

                  <div className="queue-table-box">
                    <div className="queue-table-header">
                      <span>Job ID</span>
                      <span>G-Code File</span>
                      <span>Target Printer</span>
                      <span>Status</span>
                    </div>

                    {activeJobQueue.map((job) => (
                      <div key={job.id} className="queue-table-row">
                        <span className="telemetry-font" style={{ fontWeight: 700, color: 'var(--accent)' }}>{job.id}</span>
                        <span style={{ fontWeight: 600 }}>{job.name}</span>
                        <span style={{ color: 'var(--text-muted)' }}>{job.printer}</span>
                        <div>
                          {job.status === 'In Progress' ? (
                            <span className="badge badge-success" style={{ fontSize: '0.725rem' }}>
                              <span className="badge-dot pulse"></span> Printing ({job.progress}%)
                            </span>
                          ) : (
                            <span className="badge badge-cyan" style={{ fontSize: '0.725rem' }}>
                              {job.status}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Ejection Logic Tab */
            <div className="harvest-logic-card">
              <div className="harvest-grid">
                <div className="harvest-step">
                  <div className="harvest-step-num">STAGE 01</div>
                  <h4>Job Completion & Cooldown</h4>
                  <p>Print finishes and nozzle parks while the heated bed undergoes a rapid cooldown cycle.</p>
                </div>
                <div className="harvest-step">
                  <div className="harvest-step-num">STAGE 02</div>
                  <h4>Robotic Plate Swap</h4>
                  <p>Gantry retrieves the completed plate and securely slots it into the integrated storage rack.</p>
                </div>
                <div className="harvest-step">
                  <div className="harvest-step-num">STAGE 03</div>
                  <h4>Fresh Plate Loading</h4>
                  <p>A new PEI sheet is pulled from the storage rack and magnetically seated, ready for the next dispatch.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 6. TECHNICAL COMPARISON: DESKTOP VS ENTERPRISE */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head-left">
            <span className="tech-meta-tag">MODULAR FORM FACTORS</span>
            <h2>Architected for Individual Desks to Server Arrays</h2>
            <p>Deploy zero-touch print nodes tailored to your prototyping volume.</p>
          </div>

          <div className="tier-comparison-grid">
            {/* Desktop Card */}
            <div className="tier-card">
              <div className="tier-badge">Prosumer & R&D Desks</div>
              <h3 className="tier-title">Dasher 1</h3>
              <p className="tier-desc">Compact 1-2 printer open-rack module for engineering desks and prototyping teams.</p>
              
              <div className="tier-price-row">
                <span className="price-val">$1,499</span>
                <span className="price-unit">/ per node</span>
              </div>

              <div className="tier-specs-list">
                <div className="tier-spec-item"><Check size={16} color="var(--accent)" /> Integrated Multi-Plate Storage Rack</div>
                <div className="tier-spec-item"><Check size={16} color="var(--accent)" /> Compact Open-Frame Desktop Footprint</div>
                <div className="tier-spec-item"><Check size={16} color="var(--accent)" /> Core Web G-Code Queue & Dispatch SaaS</div>
                <div className="tier-spec-item"><Check size={16} color="var(--accent)" /> Klipper / Moonraker API Bridge</div>
              </div>

              <button className="btn btn-secondary btn-lg" style={{ width: '100%', marginTop: '1.5rem' }} onClick={onOpenLOI}>
                Reserve Dasher 1
              </button>
            </div>

            {/* Enterprise Card */}
            <div className="tier-card featured">
              <div className="featured-banner">Enterprise Scale Choice</div>
              <div className="tier-badge dark">Universities & Manufacturing Labs</div>
              <h3 className="tier-title">Enterprise Farm Array</h3>
              <p className="tier-desc">Standard 19-inch server rack integration for 24/7 continuous micro-manufacturing hubs.</p>
              
              <div className="tier-price-row">
                <span className="price-val">Custom Tier</span>
                <span className="price-unit">/ 4+ Server Racks</span>
              </div>

              <div className="tier-specs-list">
                <div className="tier-spec-item"><Check size={16} color="var(--accent)" /> Standard 19-inch 6U Rack Module Integration</div>
                <div className="tier-spec-item"><Check size={16} color="var(--accent)" /> Centralized PDU Power Cut & Thermal Safeguards</div>
                <div className="tier-spec-item"><Check size={16} color="var(--accent)" /> Optical Spaghetti AI Camera Detection</div>
                <div className="tier-spec-item"><Check size={16} color="var(--accent)" /> Multi-User Role Permissions & Docker SaaS</div>
              </div>

              <button className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '1.5rem' }} onClick={onOpenLOI}>
                Request Enterprise LOI
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM LEAD CAPTURE / PILOT APPLICATION */}
      <section className="section">
        <div className="container">
          <div className="bottom-cta-container">
            <div className="cta-header">
              <h2>Join the Priority Hardware Beta Queue</h2>
              <p>Secure hardware delivery spots for your print farm and receive direct technical onboard assistance.</p>
            </div>

            <form className="bottom-cta-form" onSubmit={handleLeadSubmit}>
              <input 
                type="text" 
                className="form-input custom-dark-input" 
                placeholder="Your Name"
                value={leadName}
                onChange={(e) => setLeadName(e.target.value)}
              />
              <input 
                type="email" 
                className="form-input custom-dark-input" 
                required 
                placeholder="Work Email Address"
                value={leadEmail}
                onChange={(e) => setLeadEmail(e.target.value)}
              />
              <button type="submit" className="btn btn-primary btn-lg">
                <span>{leadSubmitted ? 'Opening Beta Form...' : 'Reserve Beta Spot'}</span>
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
