import React, { useState } from 'react';
import { 
  Building2, GraduationCap, Factory, TrendingUp, 
  Clock, DollarSign, ArrowRight, CheckCircle2, ShieldCheck 
} from 'lucide-react';
import './UseCasesPage.css';

export default function UseCasesPage({ onOpenLOI }) {
  // Interactive ROI Calculator State
  const [numPrinters, setNumPrinters] = useState(4);
  const [labourRate, setLabourRate] = useState(35); // $/hr
  const [overnightHours, setOvernightHours] = useState(12);

  // Calculations
  const hoursSavedPerDay = (numPrinters * 1.5).toFixed(1);
  const annualLaborSavings = Math.round(hoursSavedPerDay * labourRate * 250);
  const extraYieldMultiplier = ((overnightHours / 8) * 100).toFixed(0);

  return (
    <div className="use-cases-page">
      {/* Hero Header */}
      <section className="use-case-hero">
        <div className="container">
          <div className="badge badge-dark">Target Applications & Field Deployment</div>
          <h1 style={{ color: '#FFFFFF', marginTop: '0.75rem' }}>Built for Continuous Productivity</h1>
          <p style={{ color: '#94A3B8', fontSize: '1.15rem', maxWidth: '640px', marginTop: '1rem' }}>
            Discover how engineering labs, universities, and micro-farms unlock 24/7 production output without adding technician labor.
          </p>
        </div>
      </section>

      {/* 3 Main Use Case Sections */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            
            {/* Use Case 1: Engineering & Prototyping Labs */}
            <div className="case-study-card">
              <div className="grid-2" style={{ alignItems: 'center' }}>
                <div>
                  <div className="badge badge-cyan" style={{ marginBottom: '0.75rem' }}>
                    <Building2 size={14} /> Engineering & R&D Labs
                  </div>
                  <h2>Overnight Prototyping Queues</h2>
                  <p style={{ marginTop: '0.75rem', marginBottom: '1.25rem' }}>
                    Engineers submit CAD iterations before leaving at 5 PM. Dashing nodes print overnight, flex-eject completed parts into bin trays, and reset automatically. Engineers arrive at 8 AM to find 3 consecutive iterations ready for inspection.
                  </p>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                      <CheckCircle2 size={18} color="var(--accent)" /> 2x Faster Product Iteration Cycles
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                      <CheckCircle2 size={18} color="var(--accent)" /> Zero Morning Plate-Clearing Delay
                    </li>
                  </ul>

                  <button className="btn btn-secondary" onClick={onOpenLOI}>
                    Request Engineering Lab Setup &rarr;
                  </button>
                </div>

                <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                  <div className="case-stat-badge">+210%</div>
                  <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-main)' }}>Weekly Prototype Yield</div>
                  <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
                    "Our engineering team used to waste 2 hours every morning scraping plates and restarting failed jobs. With Dashing, we run continuous 16-hour overnight queues with zero technician supervision."
                  </p>
                  <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    — Lead Mechatronics Engineer, Defense R&D Lab
                  </div>
                </div>
              </div>
            </div>

            {/* Use Case 2: Universities & Education */}
            <div className="case-study-card">
              <div className="grid-2" style={{ alignItems: 'center' }}>
                <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', order: 2 }}>
                  <div className="case-stat-badge">100%</div>
                  <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-main)' }}>Automated Student Submissions</div>
                  <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
                    "Managing 400 engineering students' STL files used to require 3 full-time lab TAs. Now students upload via cloud portal, and the Dashing array handles auto-slicing, printing, and ejection."
                  </p>
                  <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    — Innovation Hub Director, Robotics University
                  </div>
                </div>

                <div style={{ order: 1 }}>
                  <div className="badge badge-cyan" style={{ marginBottom: '0.75rem' }}>
                    <GraduationCap size={14} /> Universities & Education
                  </div>
                  <h2>Hands-Off Student Print Fleets</h2>
                  <p style={{ marginTop: '0.75rem', marginBottom: '1.25rem' }}>
                    Eliminate student line queues and manual lab assistant shifts. Students submit jobs remotely, and automated queues process assignments around the clock with multi-user permissions.
                  </p>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                      <CheckCircle2 size={18} color="var(--accent)" /> Automated Student Role Permissions
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                      <CheckCircle2 size={18} color="var(--accent)" /> Zero TA Labor Required for Bed Swapping
                    </li>
                  </ul>

                  <button className="btn btn-secondary" onClick={onOpenLOI}>
                    Request Academic Pricing &rarr;
                  </button>
                </div>
              </div>
            </div>

            {/* Use Case 3: Print-on-Demand / Micro-Farms */}
            <div className="case-study-card">
              <div className="grid-2" style={{ alignItems: 'center' }}>
                <div>
                  <div className="badge badge-cyan" style={{ marginBottom: '0.75rem' }}>
                    <Factory size={14} /> Print-on-Demand & Micro-Farms
                  </div>
                  <h2>Scale Production Without Added Floor Space</h2>
                  <p style={{ marginTop: '0.75rem', marginBottom: '1.25rem' }}>
                    Small manufacturing hubs can triple their daily shipped part volume on 2 to 5 machines without hiring night-shift operators or leasing larger warehouse square footage.
                  </p>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                      <CheckCircle2 size={18} color="var(--accent)" /> High-Density Server-Rack Stackability
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                      <CheckCircle2 size={18} color="var(--accent)" /> Low Payback Period (&lt; 4 Months)
                    </li>
                  </ul>

                  <button className="btn btn-secondary" onClick={onOpenLOI}>
                    Explore Micro-Farm Array &rarr;
                  </button>
                </div>

                <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                  <div className="case-stat-badge">3.4x</div>
                  <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-main)' }}>Daily Shipped Part Volume</div>
                  <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
                    "We expanded our Etsy manufacturing store from $12k/mo to $45k/mo yield without buying more floor space. Dashing runs continuously while we sleep."
                  </p>
                  <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    — Owner, Precision Micro-Parts Co.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INTERACTIVE ROI & PRODUCTIVITY CALCULATOR */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-dark">Interactive Yield Model</span>
            <h2>Calculate Your Automated Savings & ROI</h2>
            <p>Adjust the sliders below to estimate your annual labor savings and output multiplier with Dashing Technologies.</p>
          </div>

          <div className="roi-calculator-box">
            <div className="grid-2" style={{ gap: '2.5rem', alignItems: 'center' }}>
              <div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                    <span>Active 3D Printer Count:</span>
                    <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>{numPrinters} Machines</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="25" 
                    value={numPrinters} 
                    onChange={(e) => setNumPrinters(Number(e.target.value))}
                    className="roi-slider"
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                    <span>Technician Hourly Labor Cost:</span>
                    <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>${labourRate} / hr</span>
                  </div>
                  <input 
                    type="range" 
                    min="15" 
                    max="85" 
                    value={labourRate} 
                    onChange={(e) => setLabourRate(Number(e.target.value))}
                    className="roi-slider"
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                    <span>Unattended Overnight Hours Target:</span>
                    <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>{overnightHours} Hours/Day</span>
                  </div>
                  <input 
                    type="range" 
                    min="6" 
                    max="16" 
                    value={overnightHours} 
                    onChange={(e) => setOvernightHours(Number(e.target.value))}
                    className="roi-slider"
                  />
                </div>
              </div>

              {/* Output Results Box */}
              <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: 'var(--radius-md)', border: '2px solid var(--accent)', boxShadow: 'var(--shadow-md)' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>
                  ESTIMATED ANNUAL IMPACT
                </div>

                <div style={{ margin: '1.25rem 0' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>
                    ${annualLaborSavings.toLocaleString()}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: 600 }}>
                    Direct Annual Saved Technician Labor
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                  <span>Unattended Output Bonus:</span>
                  <span style={{ fontWeight: 700, color: '#10B981' }}>+{extraYieldMultiplier}% Extra Parts/Wk</span>
                </div>

                <div style={{ marginTop: '1.5rem' }}>
                  <button className="btn btn-primary" style={{ width: '100%' }} onClick={onOpenLOI}>
                    <span>Reserve Hardware to Unlock Yield</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
