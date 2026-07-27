import React, { useState } from 'react';
import { X, CheckCircle, Shield, ArrowRight, Server, Layers, Lock, Download } from 'lucide-react';
import './LOIModal.css';

export default function LOIModal({ isOpen, onClose }) {
  const [selectedTier, setSelectedTier] = useState('desktop');
  const [fullName, setFullName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [companyName, setCompany] = useState('');
  const [printerCount, setPrinterCount] = useState('2');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [reservationId, setReservationId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !workEmail) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      const randomId = 'LOI-BETA-' + Math.floor(100000 + Math.random() * 900000);
      setReservationId(randomId);
    }, 900);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFullName('');
    setWorkEmail('');
    setCompany('');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="loi-modal-header">
          <div>
            <span className="badge badge-cyan" style={{ marginBottom: '0.4rem' }}>
              Priority Hardware Queue
            </span>
            <h3 style={{ margin: 0, fontSize: '1.3rem' }}>Letter of Intent (LOI) Reserve</h3>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="loi-modal-body">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <p style={{ fontSize: '0.925rem', marginBottom: '1.25rem' }}>
                Reserve priority manufacturing delivery for Dashing Technologies zero-touch robotic print nodes. No commitment fee required for Beta Queue reservation.
              </p>

              <div className="form-group">
                <label className="form-label">Deployment Architecture Target</label>
                <div className="tier-select-grid">
                  <div 
                    className={`tier-select-card ${selectedTier === 'desktop' ? 'selected' : ''}`}
                    onClick={() => setSelectedTier('desktop')}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700 }}>
                      <Layers size={18} color="var(--accent)" />
                      <span>Desktop / Prosumer</span>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
                      1–2 Printer Racks
                    </div>
                    <div className="tier-price">$1,499 / node</div>
                  </div>

                  <div 
                    className={`tier-select-card ${selectedTier === 'enterprise' ? 'selected' : ''}`}
                    onClick={() => setSelectedTier('enterprise')}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700 }}>
                      <Server size={18} color="var(--accent)" />
                      <span>Enterprise Array</span>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
                      4+ Server-Rack Nodes
                    </div>
                    <div className="tier-price">Custom / Farm</div>
                  </div>
                </div>
              </div>

              <div className="grid-2" style={{ gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    required 
                    placeholder="Alex Vance"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Work Email *</label>
                  <input 
                    type="email" 
                    className="form-input" 
                    required 
                    placeholder="alex@company.com"
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid-2" style={{ gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Company / Lab Name</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Apex Robotics Lab"
                    value={companyName}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Active / Planned Printer Count</label>
                  <select 
                    className="form-select"
                    value={printerCount}
                    onChange={(e) => setPrinterCount(e.target.value)}
                  >
                    <option value="1-2">1–2 Printers (Desktop Deck)</option>
                    <option value="3-8">3–8 Printers (Prototyping Lab)</option>
                    <option value="9-25">9–25 Printers (Enterprise Array)</option>
                    <option value="25+">25+ Printers (Industrial Micro-Farm)</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '1rem 0 1.5rem 0', fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                <Lock size={16} color="var(--accent)" />
                <span>Your LOI secures launch batch delivery placement with no upfront legal obligation.</span>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary btn-lg" 
                style={{ width: '100%' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>Generating LOI Reservation...</span>
                ) : (
                  <>
                    <span>Submit Digital LOI & Reserve Slot</span>
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="success-box">
              <div className="success-icon-wrapper">
                <CheckCircle size={40} />
              </div>
              <h3 style={{ marginBottom: '0.5rem' }}>Reservation Confirmed!</h3>
              <p style={{ marginBottom: '1.25rem' }}>
                Thank you, <strong>{fullName}</strong>. Your Letter of Intent (LOI) reservation has been placed into the priority manufacturing queue.
              </p>

              <div style={{ 
                backgroundColor: 'var(--bg-secondary)', 
                border: '1px solid var(--border-light)', 
                borderRadius: 'var(--radius-md)', 
                padding: '1.25rem',
                fontFamily: 'var(--font-mono)',
                textAlign: 'left',
                fontSize: '0.875rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{ color: 'var(--accent)', fontWeight: 700, marginBottom: '0.5rem' }}>
                  RESERVATION TICKET: #{reservationId}
                </div>
                <div>Target Arch: {selectedTier === 'desktop' ? 'Desktop Prosumer Node (1-2 Units)' : 'Enterprise Farm Array (4+ Server-Rack Units)'}</div>
                <div>Work Email: {workEmail}</div>
                <div>Queue Position: #14 (Beta Batch 1 Delivery)</div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <button className="btn btn-secondary" onClick={resetForm}>
                  Close Window
                </button>
                <button className="btn btn-primary" onClick={() => alert(`LOI Certificate #${reservationId} generated for ${fullName}.`)}>
                  <Download size={16} /> Download Summary
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
