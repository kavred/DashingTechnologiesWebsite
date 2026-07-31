import React, { useState } from 'react';
import { 
  Building2, GraduationCap, Factory, TrendingUp, 
  Clock, DollarSign, ArrowRight, CheckCircle2, ShieldCheck 
} from 'lucide-react';
import ROICalculator from '../components/ROICalculator';
import './UseCasesPage.css';

export default function UseCasesPage({ onOpenLOI }) {
  return (
    <div className="use-cases-page">
      {/* Hero Header */}
      <section className="use-case-hero bg-grid-pattern-dark">
        <div className="container">
          <div className="tech-meta-tag light">FIELD DEPLOYMENT SCENARIOS</div>
          <h1 style={{ color: '#FFFFFF', marginTop: '0.5rem' }}>Built for Continuous Productivity</h1>
          <p style={{ color: '#94A3B8', fontSize: '1.1rem', maxWidth: '640px', marginTop: '1rem', lineHeight: '1.7' }}>
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
                  <div className="use-case-category-tag">
                    <Building2 size={15} /> ENGINEERING & R&D LABS
                  </div>
                  <h2>Overnight Prototyping Queues</h2>
                  <p style={{ marginTop: '0.75rem', marginBottom: '1.25rem' }}>
                    Engineers queue up pre-sliced G-code files before leaving at 5 PM. Dashing nodes print overnight, flex-eject completed parts into bin trays, and reset automatically. Engineers arrive at 8 AM to find 3 consecutive iterations ready for inspection.
                  </p>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                      <CheckCircle2 size={18} color="var(--accent)" /> 2x Faster Product Iteration Cycles
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                      <CheckCircle2 size={18} color="var(--accent)" /> Zero Downtime Between Print Jobs
                    </li>
                  </ul>

                  <button className="btn btn-secondary" onClick={onOpenLOI}>
                    Request Engineering Lab Setup &rarr;
                  </button>
                </div>

                <div className="quote-callout-box">
                  <div className="case-stat-badge">+210%</div>
                  <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-main)' }}>Weekly Prototype Yield</div>
                  <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: 'var(--text-muted)' }}>
                    "Our engineering team used to waste 2 hours every morning swapping build plates and restarting jobs. With Dasher 1, plates change automatically and the next job starts immediately—zero technician supervision."
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
                <div className="quote-callout-box" style={{ order: 2 }}>
                  <div className="case-stat-badge">100%</div>
                  <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-main)' }}>Automated Student Submissions</div>
                  <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: 'var(--text-muted)' }}>
                    "Managing 400 engineering students' G-code files used to require 3 full-time lab TAs. Now students upload via the cloud portal, and the Dashing array handles queuing, printing, and ejection automatically."
                  </p>
                  <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    — Innovation Hub Director, Robotics University
                  </div>
                </div>

                <div style={{ order: 1 }}>
                  <div className="use-case-category-tag">
                    <GraduationCap size={15} /> UNIVERSITIES & EDUCATION
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
                  <div className="use-case-category-tag">
                    <Factory size={15} /> PRINT-ON-DEMAND & MICRO-FARMS
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

                <div className="quote-callout-box">
                  <div className="case-stat-badge">3.4x</div>
                  <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-main)' }}>Daily Shipped Part Volume</div>
                  <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: 'var(--text-muted)' }}>
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
          <ROICalculator onOpenLOI={onOpenLOI} />
        </div>
      </section>
    </div>
  );
}
