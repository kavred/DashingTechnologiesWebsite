import React, { useState } from 'react';
import { Calculator, TrendingUp, Clock, DollarSign, ShieldCheck, ArrowRight } from 'lucide-react';
import './ROICalculator.css';

export default function ROICalculator({ onOpenLOI }) {
  const [printerCount, setPrinterCount] = useState(8);
  const [dailyHours, setDailyHours] = useState(16);
  const [hourlyRate, setHourlyRate] = useState(35);

  // Calculations
  // Average technician time spent clearing bed, resetting, reloading, inspecting: ~0.25 hrs (15 mins) per print cycle
  const cyclesPerDay = Math.floor(dailyHours / 4); // assuming ~4hr avg job duration
  const totalJobsPerMonth = printerCount * cyclesPerDay * 30;
  const laborHoursSavedMonthly = Math.round(totalJobsPerMonth * 0.25); // 15 mins saved per job cycle
  const monthlyLaborSavings = laborHoursSavedMonthly * hourlyRate;
  const annualSavings = monthlyLaborSavings * 12;
  
  // Extra unattended print hours unlocked (night/weekend continuous queue)
  const additionalYieldHours = Math.round(printerCount * 8 * 30); // 8 extra overnight hours per printer

  // Dynamic Payback Period Estimate ($1,200 estimated automation module cost per node)
  const estimatedHardwareCost = printerCount * 1200;
  const paybackMonths = monthlyLaborSavings > 0 
    ? (estimatedHardwareCost / monthlyLaborSavings).toFixed(1) 
    : '0.0';

  return (
    <div className="roi-calculator-card">
      <div className="roi-header">
        <div className="roi-header-badge">
          <Calculator size={16} /> Interactive Fleet Yield & Financial Simulator
        </div>
        <h3>Calculate Your Print Farm's Unattended ROI*</h3>
        <p>See how much technician labor cost you eliminate and how many extra production hours you unlock with automated plate swapping.</p>
      </div>

      <div className="roi-grid">
        {/* Controls Column */}
        <div className="roi-controls">
          {/* Control 1 */}
          <div className="roi-control-group">
            <div className="roi-label-row">
              <label htmlFor="printer-slider">Number of 3D Printers</label>
              <span className="roi-value-tag">{printerCount} Node Racks</span>
            </div>
            <input 
              id="printer-slider"
              type="range" 
              min="2" 
              max="50" 
              value={printerCount} 
              onChange={(e) => setPrinterCount(parseInt(e.target.value))}
              className="roi-slider"
            />
            <div className="roi-range-labels">
              <span>2 Dasher 1 Units</span>
              <span>25 Mid-Farm</span>
              <span>50 Enterprise Array</span>
            </div>
          </div>

          {/* Control 2 */}
          <div className="roi-control-group">
            <div className="roi-label-row">
              <label htmlFor="hours-slider">Target Operating Hours/Day</label>
              <span className="roi-value-tag">{dailyHours} hrs / day</span>
            </div>
            <input 
              id="hours-slider"
              type="range" 
              min="8" 
              max="24" 
              value={dailyHours} 
              onChange={(e) => setDailyHours(parseInt(e.target.value))}
              className="roi-slider"
            />
            <div className="roi-range-labels">
              <span>8 hrs (Shift)</span>
              <span>16 hrs (Extended)</span>
              <span>24 hrs (Continuous)</span>
            </div>
          </div>

          {/* Control 3 */}
          <div className="roi-control-group">
            <div className="roi-label-row">
              <label htmlFor="rate-slider">Technician / Operator Rate</label>
              <span className="roi-value-tag">${hourlyRate} / hr</span>
            </div>
            <input 
              id="rate-slider"
              type="range" 
              min="20" 
              max="75" 
              step="5"
              value={hourlyRate} 
              onChange={(e) => setHourlyRate(parseInt(e.target.value))}
              className="roi-slider"
            />
            <div className="roi-range-labels">
              <span>$20/hr</span>
              <span>$45/hr</span>
              <span>$75/hr</span>
            </div>
          </div>
        </div>

        {/* Results Metrics Column */}
        <div className="roi-results-box">
          <div className="roi-metric-highlight">
            <div className="metric-label">Estimated Annual Labor Savings</div>
            <div className="metric-primary-value">
              ${annualSavings.toLocaleString()}
            </div>
            <div className="metric-sub-text">
              Direct reduction in manual build plate swap and job reset labor.
            </div>
          </div>

          <div className="roi-metrics-pair">
            <div className="roi-mini-metric">
              <div className="mini-icon"><Clock size={18} color="var(--accent)" /></div>
              <div>
                <div className="mini-value">{laborHoursSavedMonthly} hrs</div>
                <div className="mini-label">Labor Saved / Month</div>
              </div>
            </div>

            <div className="roi-mini-metric">
              <div className="mini-icon"><TrendingUp size={18} color="var(--success)" /></div>
              <div>
                <div className="mini-value">+{additionalYieldHours.toLocaleString()} hrs</div>
                <div className="mini-label">Unattended Capacity / Mo</div>
              </div>
            </div>
          </div>

          <div className="roi-action-bar">
            <div className="roi-payback-tag">
              <ShieldCheck size={16} color="var(--success)" /> Estimated Payback: <strong>{paybackMonths} Months</strong>
            </div>
            <button className="btn btn-primary btn-sm" onClick={onOpenLOI}>
              <span>Get Fleet Proposal</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Formula Definition Footer */}
      <div className="roi-formula-footer">
        <div className="roi-formula-title">
          <strong>* ROI Calculation Formula & Methodology:</strong>
        </div>
        <p className="roi-formula-text">
          <strong>Annual Savings</strong> = (Printers × Daily Jobs × 30 days × 0.25 hrs labor saved per job) × Hourly Rate × 12 months.
          Assumes an average 4-hour job duration, 15 minutes of manual labor eliminated per harvest/reset cycle, and 8 hours of unlocked overnight production capacity per printer.
        </p>
      </div>
    </div>
  );
}
