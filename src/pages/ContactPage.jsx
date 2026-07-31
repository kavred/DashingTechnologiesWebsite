import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Calendar, CheckCircle2, 
  ChevronDown, ChevronUp, Send, ShieldCheck, ArrowRight 
} from 'lucide-react';
import './ContactPage.css';

export default function ContactPage({ onOpenLOI }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    printerCount: '1-2',
    interest: 'Pilot Hardware Trial',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What printers are compatible with the Dashing harvesting arm?",
      a: "Dashing side-rack harvesters support popular Cartesian, CoreXY, and Bed-Slinger printers running Klipper firmware (e.g. Voron, Prusa, Bambu, Creality Ender/K1). Open-source Klipper API bridges allow plug-and-play connection."
    },
    {
      q: "Is there a binding legal requirement when submitting an LOI?",
      a: "No. The Letter of Intent (LOI) is a non-binding expression of commercial interest designed to secure your priority queue position for Batch 1 & 2 hardware allocations."
    },
    {
      q: "Can we install Dashing inside standard 19-inch server racks?",
      a: "Yes! Our Enterprise Farm Array modules are designed specifically for standard 19-inch server racks with integrated power distribution (PDU) and Ethernet telemetry."
    },
    {
      q: "How does optical spaghetti detection work?",
      a: "Our local node controller runs real-time computer vision inference on 1080p camera feeds. If it detects print detachment or layer drift, it automatically halts extrusion and alerts your cloud dashboard."
    }
  ];

  return (
    <div className="contact-page">
      {/* Header */}
      <section className="contact-page-header bg-grid-pattern-dark">
        <div className="container">
          <div className="tech-meta-tag light">B2B PILOT PROGRAM & DISCOVERY</div>
          <h1 style={{ color: '#FFFFFF', marginTop: '0.5rem' }}>Schedule Pilot Unit & Discovery Call</h1>
          <p style={{ color: '#94A3B8', fontSize: '1.1rem', maxWidth: '640px', marginTop: '1rem', lineHeight: '1.7' }}>
            Request an on-site pilot unit, schedule a technical discovery call with our founding engineering team, or submit an LOI for priority delivery.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '3rem' }}>
            {/* Contact / Pilot Form */}
            <div className="contact-card-box">
              <h3 style={{ marginBottom: '0.5rem' }}>Request Pilot Program Trial</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
                Fill out your details below to schedule an initial discovery call and reserve launch priority.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="grid-2" style={{ gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input 
                        type="text" 
                        className="form-input" 
                        required 
                        placeholder="Jordan Miller"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Work Email *</label>
                      <input 
                        type="email" 
                        className="form-input" 
                        required 
                        placeholder="jordan@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid-2" style={{ gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Company / University</label>
                      <input 
                        type="text" 
                        className="form-input" 
                        placeholder="Stanford Robotics Lab"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Primary Objective</label>
                      <select 
                        className="form-select"
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      >
                        <option value="Pilot Hardware Trial">On-Site Pilot Hardware Trial</option>
                        <option value="Founders Discovery Call">Founders Technical Discovery Call</option>
                        <option value="Enterprise LOI Reservation">Enterprise Farm LOI Reservation</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Tell Us About Your Print Farm Setup & Goals</label>
                    <textarea 
                      className="form-textarea" 
                      rows="4"
                      placeholder="We currently operate 6 3D printers and want to automate overnight build plate clearing..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                    <button type="submit" className="btn btn-primary btn-lg" style={{ flex: 1 }} disabled={isSubmitting}>
                      {isSubmitting ? 'Sending Request...' : 'Submit Pilot Request'}
                    </button>
                    <button type="button" className="btn btn-secondary btn-lg" onClick={onOpenLOI}>
                      Digital LOI
                    </button>
                  </div>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                  <div style={{ width: 64, height: 64, backgroundColor: 'var(--success-bg)', color: 'var(--success)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
                    <CheckCircle2 size={36} />
                  </div>
                  <h3>Pilot Request Received!</h3>
                  <p style={{ marginTop: '0.5rem', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
                    Thank you, <strong>{formData.name}</strong>. Our engineering team will review your farm requirements and reach out within 24 hours to schedule your discovery call.
                  </p>
                  <button className="btn btn-secondary" onClick={() => setSubmitted(false)}>
                    Submit Another Inquiry
                  </button>
                </div>
              )}
            </div>

            {/* Direct Contact Info & Perks */}
            <div>
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Direct Founder Contact</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Have specific technical questions regarding Klipper firmware hooks, kinematic tolerances, or rack dimensions?</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', backgroundColor: 'var(--accent-light)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Mail size={22} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>Email Inquiry</div>
                      <div style={{ fontWeight: 700, fontSize: '0.975rem' }}>info@dashingtechnologies.com</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', backgroundColor: 'var(--accent-light)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Calendar size={22} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>Discovery Meeting</div>
                      <div style={{ fontWeight: 700, fontSize: '0.975rem' }}>30-Minute Founders Video Call</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', backgroundColor: 'var(--accent-light)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <MapPin size={22} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>Headquarters</div>
                      <div style={{ fontWeight: 700, fontSize: '0.975rem' }}>San Francisco, CA / Hardware Lab</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Priority Placement Box */}
              <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-accent)', borderRadius: 'var(--radius-md)', padding: '1.5rem' }}>
                <div className="use-case-category-tag" style={{ marginBottom: '0.4rem' }}>
                  <ShieldCheck size={15} /> LAUNCH PRIORITY
                </div>
                <h4 style={{ marginBottom: '0.4rem' }}>Signing a Letter of Intent (LOI)</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  B2B customers who submit a signed LOI receive early evaluation access, custom G-code fleet integration support, and fixed launch batch pricing.
                </p>
                <button className="btn btn-primary btn-sm" style={{ marginTop: '1rem' }} onClick={onOpenLOI}>
                  <span>Open Digital LOI Modal</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div style={{ marginTop: '4.5rem' }}>
            <div className="section-head-left" style={{ marginBottom: '2rem' }}>
              <span className="tech-meta-tag">FREQUENTLY ASKED QUESTIONS</span>
              <h2>Technical & Pilot FAQs</h2>
            </div>

            <div style={{ maxWidth: '840px' }}>
              {faqs.map((faq, idx) => (
                <div key={idx} className="faq-accordion-item">
                  <div className="faq-question" onClick={() => toggleFaq(idx)}>
                    <span>{faq.q}</span>
                    {activeFaq === idx ? <ChevronUp size={20} color="var(--accent)" /> : <ChevronDown size={20} color="var(--text-muted)" />}
                  </div>
                  {activeFaq === idx && (
                    <div className="faq-answer">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
