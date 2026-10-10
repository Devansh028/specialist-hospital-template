import React from 'react';
import { ShieldAlert, PhoneCall, AlertTriangle, Clock, ArrowRight } from 'lucide-react';
import { hospitalConfig } from '../config/hospitalConfig';

export function EmergencySection({ onEmergencyClick }) {
  const { emergency, contact } = hospitalConfig;

  if (!emergency?.enabled) return null;

  return (
    <section
      aria-label="Urgent Medical Care & Emergency Information"
      className="py-16 md:py-20 bg-gradient-to-r from-rose-900 via-rose-800 to-rose-950 text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/15 text-rose-100 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping"></span>
              <span>Emergency Services Desk</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight font-heading">
              WHEN CARE CAN'T WAIT.
            </h2>

            <p className="text-base sm:text-lg text-rose-100 max-w-2xl leading-relaxed">
              For urgent medical situations, seek immediate professional medical assistance or contact the appropriate local emergency service.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-rose-200">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-rose-300" />
                <span>24/7 Triage & Acute Resuscitation Unit</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-300" />
                <span>Immediate Critical Care Evaluation</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
            {/* Configurable Emergency Phone Badge */}
            <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white text-rose-700 flex items-center justify-center flex-shrink-0 shadow-md">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-rose-200">
                  Emergency Line (Configurable)
                </p>
                <p className="text-lg sm:text-xl font-bold tracking-tight">
                  {contact.emergencyPhone || 'YOUR EMERGENCY NUMBER'}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onEmergencyClick}
              className="py-3.5 px-6 rounded-2xl font-bold text-sm bg-white text-rose-900 hover:bg-rose-50 active:bg-rose-100 shadow-xl flex items-center justify-center gap-2 transition-all"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Emergency Guidance & Triage</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
