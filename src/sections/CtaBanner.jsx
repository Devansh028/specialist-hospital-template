import React from 'react';
import { Calendar, UserCheck, ArrowRight, ShieldCheck } from 'lucide-react';
import { hospitalConfig } from '../config/hospitalConfig';

export function CtaBanner({ onBookAppointment, onFindDoctor }) {
  const { appointments } = hospitalConfig;

  return (
    <section
      aria-label="Appointment Request Banner"
      className="py-14 bg-gradient-to-r from-brand-700 via-brand-600 to-tealAccent-700 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="space-y-2 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/15 text-brand-100 border border-white/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Specialist Consultation Desk</span>
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading">
              NEED SPECIALIST CARE?
            </h2>

            <p className="text-base sm:text-lg text-brand-100 leading-relaxed font-normal">
              Find the right clinical department or submit an appointment request with our patient navigation team.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <button
              type="button"
              onClick={onFindDoctor}
              className="px-6 py-3.5 rounded-xl font-bold text-sm bg-white/15 hover:bg-white/25 active:bg-white/30 text-white border border-white/30 transition-all flex items-center gap-2"
            >
              <UserCheck className="w-4 h-4" />
              <span>Find a Doctor</span>
            </button>

            {appointments?.enabled && (
              <button
                type="button"
                onClick={onBookAppointment}
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-white text-brand-800 hover:bg-slate-100 active:bg-slate-200 shadow-xl transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-brand-700" />
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
