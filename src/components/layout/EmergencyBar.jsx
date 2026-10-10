import React from 'react';
import { PhoneCall, AlertCircle, ShieldAlert } from 'lucide-react';
import { hospitalConfig } from '../../config/hospitalConfig';

export function EmergencyBar({ onEmergencyClick }) {
  const { emergency, contact } = hospitalConfig;

  if (!emergency?.enabled) return null;

  return (
    <aside
      aria-label="Emergency Care Information"
      className="bg-rose-700 text-white py-2 px-4 border-b border-rose-800 text-xs sm:text-sm font-medium shadow-sm transition-colors"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="flex h-2 w-2 relative flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-200 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <span className="font-bold tracking-wider uppercase text-rose-100 flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5" />
            {emergency.badgeText || "24/7 EMERGENCY CARE"}
          </span>
          <span className="hidden md:inline text-rose-200">|</span>
          <span className="hidden md:inline text-rose-100 text-xs font-normal">
            {emergency.description || "Rapid triage and emergency stabilization"}
          </span>
          <span className="text-rose-200 text-xs italic font-normal">
            (Demo Information Only)
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-semibold text-white tracking-wide">
            <PhoneCall className="w-3.5 h-3.5 text-rose-200" />
            <span>{contact.emergencyPhone || "YOUR EMERGENCY NUMBER"}</span>
          </div>

          <button
            type="button"
            onClick={onEmergencyClick}
            className="px-2.5 py-1 bg-white/15 hover:bg-white/25 active:bg-white/30 text-white rounded-md text-xs font-semibold tracking-wide uppercase transition-colors focus-visible:ring-2 focus-visible:ring-white"
            aria-label="View emergency protocols and advice"
          >
            Emergency Info
          </button>
        </div>
      </div>
    </aside>
  );
}
