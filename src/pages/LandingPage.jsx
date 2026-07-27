import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, Zap, Layers, Server, RefreshCw, UploadCloud, Play, 
  Check, ArrowRight, ShieldCheck, Activity, Thermometer, 
  Sliders, FileText, CheckCircle2, ChevronRight, Download, Eye
} from 'lucide-react';
import './LandingPage.css';

export default function LandingPage({ onOpenLOI }) {
  // Live Telemetry simulation state for Hero Mock UI
  const [printProgress, setPrintProgress] = useState(84);
  const [hotendTemp, setHotendTemp] = useState(214.8);
  const [bedTemp, setBedTemp] = useState(60.1);
  const [secondsRemaining, setSecondsRemaining] = useState(135);

  // Interactive CAD demo state
  const [selectedCad, setSelectedCad] = useState({
    id: 1,
    name: 'housing_v4_mount.step',
    size: '14.2 MB',
    estimatedTime: '42 mins',
    filament: 'PETG Carbon',
    status: 'Ready to Dispatch'
  });
  const [isSimulatingDispatch, setIsSimulatingDispatch] = useState(false);
  const [activeJobQueue, setActiveJobQueue] = useState([
    { id: 'JOB-904', name: 'housing_v4_mount.step', printer: 'Node #01', status: 'In Progress', progress: 84 },
    { id: 'JOB-905', name: 'impeller_blade.stl', printer: 'Node #02', status: 'Queued', progress: 0 },
    { id: 'JOB-906', name: 'sensor_bracket_v2.step', printer: 'Node #01', status: 'Queued', progress: 0 },
  ]);

  // Quick form state
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  // Live telemetry timer effect
  useEffect(() => {
    const interval = setInterval(() => {
      setPrintProgress((prev) => {
        if (prev >= 99) return 12; // Cycle loop
        return prev + 1;
      });
      setHotendTemp((prev) => +(214 + Math.random() * 1.5).toFixed(1));
      setBedTemp((prev) => +(59.8 + Math.random() * 0.5).toFixed(1));
      setSecondsRemaining((prev) => (prev > 10 ? prev - 2 : 120));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const sampleCadFiles = [
    { id: 1, name: 'housing_v4_mount.step', size: '14.2 MB', estimatedTime: '42 mins', filament: 'PETG Carbon', status: 'Ready to Dispatch' },
    { id: 2, name: 'titanium_bracket_r3.stl', size: '8.7 MB', estimatedTime: '1 hr 18 mins', filament: 'PLA Pro', status: 'Ready to Dispatch' },
    { id: 3, name: 'drone_arm_assembly.step', size: '22.5 MB', estimatedTime: '2 hrs 05 mins', filament: 'ABS Reinforced', status: 'Ready to Dispatch' }
  ];

  const handleSimulateDispatch = () => {
    setIsSimulatingDispatch(true);
    setTimeout(() => {
      setIsSimulatingDispatch(false);
      const newJob = {
        id: `JOB-${Math.floor(910 + Math.random() * 80)}`,
        name: selectedCad.name,
        printer: `Node #0${Math.floor(1 + Math.random() * 3)}`,
        status: 'Auto-Slicing & Routed',
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
      {/* 1. HERO SECTION (Above the Fold) */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="badge badge-cyan hero-badge">
                <Cpu size={14} /> Modular Robotic Harvesting & Enterprise Cloud
              </div>
              
              <h1 className="hero-title">
                Zero-Touch 3D Printing.<br />
                <span className="hero-title-highlight">Continuous Unattended Yield.</span>
              </h1>
              
              <p className="hero-subtitle">
                Automate your print farm with modular robotic harvesting and enterprise cloud control—from 2-printer desktop racks to enterprise server arrays.
              </p>

              <div className="hero-cta-group">
                <button className="btn btn-primary btn-lg" onClick={onOpenLOI}>
                  <span>Pre-Order / Get Early Access</span>
                  <ArrowRight size={20} />
                </button>
                <a href="#software-demo" className="btn btn-secondary btn-lg">
                  <Play size={18} fill="currentColor" />
                  <span>Explore Dashboard</span>
                </a>
              </div>

              <div className="hero-trust-bar">
                <div className="trust-item">
                  <ShieldCheck size={18} color="var(--accent)" />
                  <span>Zero Bed Swapping Labor</span>
                </div>
                <div className="trust-item">
                  <Activity size={18} color="var(--accent)" />
                  <span>Open Klipper API Bridge</span>
                </div>
                <div className="trust-item">
                  <RefreshCw size={18} color="var(--accent)" />
                  <span>24/7 Continuous Queue</span>
                </div>
              </div>
            </div>

            {/* Visual Alternative: Live Interactive Mock UI Component displaying Fleet Telemetry */}
            <div className="hero-mock-ui">
              <div className="mock-ui-header">
                <div className="mock-ui-dots">
                  <span className="mock-dot" style={{ backgroundColor: '#EF4444' }}></span>
                  <span className="mock-dot" style={{ backgroundColor: '#F59E0B' }}></span>
                  <span className="mock-dot" style={{ backgroundColor: '#10B981' }}></span>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Cpu size={14} color="#38BDF8" /> DASHING-HUB-NODE-01
                </div>
                <div className="badge badge-success" style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem' }}>
                  <span className="badge-dot pulse"></span> Automated Swapping Active
                </div>
              </div>

              <div className="mock-ui-body">
                <div className="telemetry-card">
                  <div className="telemetry-row">
                    <div>
                      <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Active Job</div>
                      <div style={{ fontWeight: 700, fontSize: '1.05rem' }}>housing_v4_mount.step</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Est. Auto-Eject</div>
                      <div className="telemetry-font" style={{ color: '#38BDF8', fontWeight: 700 }}>
                        {Math.floor(secondsRemaining / 60)}m {secondsRemaining % 60}s
                      </div>
                    </div>
                  </div>

                  <div className="progress-ring-container">
                    <div style={{ position: 'relative', width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                      <span className="telemetry-font" style={{ position: 'absolute', fontWeight: 800, fontSize: '0.85rem' }}>
                        {printProgress}%
                      </span>
                    </div>

                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                        <span>Layer 184 / 220</span>
                        <span style={{ color: '#10B981' }}>Layer Time: 18.2s</span>
                      </div>
                      <div style={{ height: 6, backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 3, overflow: 'hidden' }}>
                        <div style={{ width: `${printProgress}%`, height: '100%', backgroundColor: '#0284C7', transition: 'width 0.5s ease' }}></div>
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <RefreshCw size={12} className="pulse" color="#38BDF8" /> Robotic Sheet Ejector Armed & Calibrated
                      </div>
                    </div>
                  </div>

                  <div className="temp-gauge-grid">
                    <div className="temp-gauge-box">
                      <div style={{ fontSize: '0.7rem', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <Thermometer size={12} color="#EF4444" /> HOTEND TEMP
                      </div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', marginTop: '0.2rem' }}>
                        {hotendTemp} °C <span style={{ fontSize: '0.75rem', color: '#64748B' }}>/ 215°C</span>
                      </div>
                    </div>
                    <div className="temp-gauge-box">
                      <div style={{ fontSize: '0.7rem', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <Thermometer size={12} color="#F59E0B" /> HEATED BED
                      </div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', marginTop: '0.2rem' }}>
                        {bedTemp} °C <span style={{ fontSize: '0.75rem', color: '#64748B' }}>/ 60°C</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: '#94A3B8' }}>
                  <span>Next in Queue: <strong>impeller_blade.stl</strong></span>
                  <span style={{ color: '#38BDF8', cursor: 'pointer' }} onClick={() => alert('Robotic eject mechanism status: Nominal')}>
                    Test Eject Arm &rarr;
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM & VALUE PROPOSITION (3-Column Grid) */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-cyan">Why Autonomous Farming</span>
            <h2>Eliminate the Bottleneck of Manual Labor</h2>
            <p>Traditional 3D printer farms lose over 40% of potential yield waiting for human operators to pull parts and reset build plates.</p>
          </div>

          <div className="grid-3">
            {/* Card 1 */}
            <div className="value-card">
              <div className="value-card-icon">
                <Zap size={28} />
              </div>
              <h3 style={{ marginBottom: '0.85rem' }}>24/7 Unattended Output</h3>
              <p>
                Stop letting printers sit idle for 8 hours overnight or waking up at 3 AM to clear build plates. Our robotic mechanical ejector harvest completed parts automatically.
              </p>
              <div style={{ marginTop: 'auto', paddingTop: '1.5rem', fontWeight: 700, color: 'var(--accent)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <span>+240% Weekly Production Capacity</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="value-card">
              <div className="value-card-icon">
                <UploadCloud size={28} />
              </div>
              <h3 style={{ marginBottom: '0.85rem' }}>Hardware-Enabled SaaS</h3>
              <p>
                Upload CAD files directly to the web dashboard. Our cloud engine automatically slices, routes, and dispatches jobs to empty nodes with zero human intervention.
              </p>
              <div style={{ marginTop: 'auto', paddingTop: '1.5rem', fontWeight: 700, color: 'var(--accent)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <span>Drag-and-Drop Automated Routing</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="value-card">
              <div className="value-card-icon">
                <Server size={28} />
              </div>
              <h3 style={{ marginBottom: '0.85rem' }}>Infinite Modular Scaling</h3>
              <p>
                Start small with a 1–2 printer desktop node or scale seamlessly into dense, server-rack deployments as your prototyping demand or production business expands.
              </p>
              <div style={{ marginTop: 'auto', paddingTop: '1.5rem', fontWeight: 700, color: 'var(--accent)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <span>Standard 19-inch Server-Rack Mounts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS (The "Zero-Touch" Process Pipeline) */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-cyan">Autonomous Workflow</span>
            <h2>The "Zero-Touch" Process Pipeline</h2>
            <p>From digital file to harvested physical part without touching a single tool or bed scraper.</p>
          </div>

          <div className="pipeline-flow">
            {/* Step 1 */}
            <div className="pipeline-card">
              <span className="pipeline-step-num">STEP 01</span>
              <div className="pipeline-icon">
                <UploadCloud size={24} />
              </div>
              <h4 style={{ marginBottom: '0.5rem' }}>Drag & Drop CAD</h4>
              <p style={{ fontSize: '0.875rem' }}>
                Drag STEP or STL files directly into the Dashing web platform from your browser.
              </p>
            </div>

            {/* Step 2 */}
            <div className="pipeline-card">
              <span className="pipeline-step-num">STEP 02</span>
              <div className="pipeline-icon">
                <Cpu size={24} />
              </div>
              <h4 style={{ marginBottom: '0.5rem' }}>Auto-Slicing & Routing</h4>
              <p style={{ fontSize: '0.875rem' }}>
                The backend cloud engine prepares file gcode and dispatches it to an idle node.
              </p>
            </div>

            {/* Step 3 */}
            <div className="pipeline-card">
              <span className="pipeline-step-num">STEP 03</span>
              <div className="pipeline-icon">
                <RefreshCw size={24} />
              </div>
              <h4 style={{ marginBottom: '0.5rem' }}>Robotic Execution</h4>
              <p style={{ fontSize: '0.875rem' }}>
                Printing executes instantly; upon completion, spring-steel swapper ejects the plate.
              </p>
            </div>

            {/* Step 4 */}
            <div className="pipeline-card">
              <span className="pipeline-step-num">STEP 04</span>
              <div className="pipeline-icon">
                <Zap size={24} />
              </div>
              <h4 style={{ marginBottom: '0.5rem' }}>Continuous Queue</h4>
              <p style={{ fontSize: '0.875rem' }}>
                The node resets to "Idle" in seconds and immediately grabs the next queued job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE SOFTWARE EXPERIENCE (Live Interactive Demo Section) */}
      <section className="section section-alt" id="software-demo">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-cyan">Interactive SaaS Experience</span>
            <h2>"Hardware is the Hook. Software is the Product."</h2>
            <p>Test drive our cloud fleet management interface below. Pick or drop a CAD model to watch real-time dispatching and queue updates.</p>
          </div>

          <div className="software-demo-box">
            <div className="software-demo-grid">
              {/* Sidebar: CAD File Drop & Selection */}
              <div className="demo-sidebar">
                <h4 style={{ fontSize: '1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <UploadCloud size={18} color="var(--accent)" /> CAD Dispatch Terminal
                </h4>

                <div 
                  className="demo-drop-zone"
                  onClick={() => handleSimulateDispatch()}
                >
                  <UploadCloud size={32} color="var(--accent)" style={{ margin: '0 auto 0.5rem auto' }} />
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)' }}>
                    Drop CAD File Here
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    Supports .STEP, .STL, .3MF
                  </div>
                </div>

                <div style={{ marginTop: '1.5rem' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                    Select Sample Project:
                  </div>

                  {sampleCadFiles.map((file) => (
                    <div 
                      key={file.id} 
                      className={`cad-file-item ${selectedCad.id === file.id ? 'selected' : ''}`}
                      onClick={() => setSelectedCad(file)}
                    >
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-main)' }}>{file.name}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{file.size} • {file.filament}</div>
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
                  {isSimulatingDispatch ? 'Auto-Slicing & Dispatching...' : 'Dispatch Selected CAD &rarr;'}
                </button>
              </div>

              {/* Viewport: Live Fleet Fleet Dashboard */}
              <div className="demo-viewport">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Fleet Telemetry & Dispatch Control</h3>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Active Farm Node Array: 3 Racks Online</div>
                  </div>
                  <div className="badge badge-success">
                    <span className="badge-dot pulse"></span> Cloud Auto-Routing Active
                  </div>
                </div>

                {/* Job Dispatch Alert */}
                <div style={{ backgroundColor: 'var(--accent-light)', border: '1px solid var(--border-accent)', borderRadius: 'var(--radius-md)', padding: '1rem 1.25rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <FileText size={20} color="var(--accent)" />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Target Payload: {selectedCad.name}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Estimated Duration: {selectedCad.estimatedTime} | Material: {selectedCad.filament}</div>
                    </div>
                  </div>
                  <button className="btn btn-primary btn-sm" onClick={handleSimulateDispatch}>
                    <Play size={14} fill="currentColor" /> Dispatch Now
                  </button>
                </div>

                {/* Queue Table */}
                <div style={{ background: '#FFFFFF', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                  <div style={{ padding: '0.85rem 1.25rem', background: 'var(--bg-secondary)', fontWeight: 700, fontSize: '0.85rem', borderBottom: '1px solid var(--border-light)', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
                    <span>Job ID</span>
                    <span>CAD File</span>
                    <span>Target Printer</span>
                    <span>Status</span>
                  </div>

                  {activeJobQueue.map((job) => (
                    <div key={job.id} style={{ padding: '0.85rem 1.25rem', borderBottom: '1px solid var(--border-light)', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', alignItems: 'center', fontSize: '0.875rem' }}>
                      <span className="telemetry-font" style={{ fontWeight: 700, color: 'var(--accent)' }}>{job.id}</span>
                      <span style={{ fontWeight: 600 }}>{job.name}</span>
                      <span style={{ color: 'var(--text-muted)' }}>{job.printer}</span>
                      <div>
                        {job.status === 'In Progress' ? (
                          <span className="badge badge-success" style={{ fontSize: '0.75rem' }}>
                            <span className="badge-dot pulse"></span> Printing ({job.progress}%)
                          </span>
                        ) : (
                          <span className="badge badge-cyan" style={{ fontSize: '0.75rem' }}>
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
        </div>
      </section>

      {/* 5. MODULAR DEPLOYMENT OPTIONS (Pricing & Tiers) */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-cyan">Scalable Hardware Racks</span>
            <h2>Modular Deployment Options</h2>
            <p>Deploy zero-touch print nodes whether you are a prosumer or an enterprise manufacturing facility.</p>
          </div>

          <div className="pricing-grid">
            {/* Tier 1 */}
            <div className="pricing-card">
              <div>
                <div className="badge badge-cyan" style={{ marginBottom: '1rem' }}>Prosumer & Prototyping Desks</div>
                <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Desktop Node</h3>
                <p style={{ fontSize: '0.925rem' }}>Ideal for Etsy sellers, individual engineering desks, and small prototyping teams.</p>

                <div style={{ margin: '1.5rem 0' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-main)' }}>$1,499</span>
                  <span style={{ color: 'var(--text-muted)' }}> / per node</span>
                </div>

                <ul className="pricing-feature-list">
                  <li className="pricing-feature-item">
                    <Check size={18} color="var(--accent)" /> 1–2 Printer Rack Side-Arm Harvester
                  </li>
                  <li className="pricing-feature-item">
                    <Check size={18} color="var(--accent)" /> Compact Desktop Footprint (Open Frame)
                  </li>
                  <li className="pricing-feature-item">
                    <Check size={18} color="var(--accent)" /> Core Web Cloud Dispatcher & Queue
                  </li>
                  <li className="pricing-feature-item">
                    <Check size={18} color="var(--accent)" /> Spring-Steel Ejection Sheet Mechanism
                  </li>
                  <li className="pricing-feature-item">
                    <Check size={18} color="var(--accent)" /> Klipper / Moonraker API Integration
                  </li>
                </ul>
              </div>

              <button className="btn btn-secondary btn-lg" style={{ width: '100%', marginTop: '1.5rem' }} onClick={onOpenLOI}>
                Reserve Desktop Node
              </button>
            </div>

            {/* Tier 2 */}
            <div className="pricing-card featured">
              <span className="pricing-featured-badge">Most Popular for Scale</span>
              <div>
                <div className="badge badge-dark" style={{ marginBottom: '1rem' }}>Universities & Labs</div>
                <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Enterprise Farm Array</h3>
                <p style={{ fontSize: '0.925rem' }}>Designed for university labs, B2B manufacturing hubs, and 24/7 continuous micro-farms.</p>

                <div style={{ margin: '1.5rem 0' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-main)' }}>Custom Tier</span>
                  <span style={{ color: 'var(--text-muted)' }}> / 4+ Server Racks</span>
                </div>

                <ul className="pricing-feature-list">
                  <li className="pricing-feature-item">
                    <Check size={18} color="var(--accent)" /> 19-inch Server Rack Standard Integration
                  </li>
                  <li className="pricing-feature-item">
                    <Check size={18} color="var(--accent)" /> Centralized PDU Power Management & Fail-safes
                  </li>
                  <li className="pricing-feature-item">
                    <Check size={18} color="var(--accent)" /> Multi-User Team Roles & Cloud Dashboard
                  </li>
                  <li className="pricing-feature-item">
                    <Check size={18} color="var(--accent)" /> Optical Spaghetti Detection & Auto-Abort
                  </li>
                  <li className="pricing-feature-item">
                    <Check size={18} color="var(--accent)" /> Priority Hardware Batch Delivery
                  </li>
                </ul>
              </div>

              <button className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '1.5rem' }} onClick={onOpenLOI}>
                Request Enterprise LOI
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA / LEAD CAPTURE BANNER */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="bottom-cta-box">
            <h2>Ready to Automate Your Production?</h2>
            <p style={{ maxWidth: '560px', margin: '1rem auto 0 auto', color: '#94A3B8' }}>
              Join the priority beta queue to secure hardware delivery spots for your print farm.
            </p>

            <form className="bottom-cta-form" onSubmit={handleLeadSubmit}>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Your Name"
                value={leadName}
                onChange={(e) => setLeadName(e.target.value)}
                style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', color: '#FFFFFF' }}
              />
              <input 
                type="email" 
                className="form-input" 
                required 
                placeholder="Work Email Address"
                value={leadEmail}
                onChange={(e) => setLeadEmail(e.target.value)}
                style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', color: '#FFFFFF' }}
              />
              <button type="submit" className="btn btn-primary btn-lg" style={{ whiteSpace: 'nowrap' }}>
                <span>{leadSubmitted ? 'Opening Form...' : 'Request LOI Info'}</span>
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
