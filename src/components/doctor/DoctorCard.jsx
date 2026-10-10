import React from 'react';
import {
  Calendar,
  Clock,
  Globe2,
  Video,
  UserCheck,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { DoctorAvatar } from '../common/DoctorAvatar';

export function DoctorCard({ doctor, onSelect, onBookAppointment }) {
  const isVideoAvailable = doctor.consultationType.toLowerCase().includes('teleconsultation');

  return (
    <div className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/80 dark:border-slate-800 p-6 shadow-subtle hover:shadow-card-hover hover:border-brand-300 dark:hover:border-brand-700 transition-all duration-300">
      <div>
        {/* Top Header: Avatar + Meta */}
        <div className="flex items-start gap-4 mb-4">
          <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden bg-slate-100 dark:bg-navy-950 flex-shrink-0 border-2 border-white dark:border-navy-800 shadow-sm">
            <DoctorAvatar
              src={doctor.avatar}
              name={doctor.name}
              alt={doctor.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-brand-50 text-brand-700 dark:bg-brand-950/80 dark:text-brand-300 border border-brand-100 dark:border-brand-900/40">
                {doctor.specialtyName}
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                {doctor.experienceLabel}
              </span>
            </div>

            <h3
              onClick={() => onSelect(doctor)}
              className="text-lg font-bold text-slate-900 dark:text-white mt-1 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors cursor-pointer truncate"
              title={doctor.name}
            >
              {doctor.name}
            </h3>

            <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
              {doctor.role}
            </p>
          </div>
        </div>

        {/* Short Biography */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2 mb-4">
          {doctor.shortBio}
        </p>

        {/* Key Areas of Focus Chips */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {doctor.areasOfFocus.slice(0, 3).map((focus, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded-md text-[11px] bg-slate-100 dark:bg-navy-850 text-slate-600 dark:text-slate-300"
            >
              {focus}
            </span>
          ))}
        </div>

        {/* Consultation & Schedule Info */}
        <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400 flex-shrink-0" />
            <span className="truncate">{doctor.availability}</span>
          </div>

          <div className="flex items-center gap-2">
            <Globe2 className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <span>Languages: {doctor.languages.join(', ')}</span>
          </div>
        </div>
      </div>

      {/* Card CTA Actions */}
      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onSelect(doctor)}
          className="flex-1 py-2 px-3 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-navy-850 hover:bg-slate-200 dark:hover:bg-navy-800 text-slate-700 dark:text-slate-200 transition-colors"
          aria-label={`View clinical profile of ${doctor.name}`}
        >
          View Profile
        </button>

        <button
          type="button"
          onClick={() => onBookAppointment(doctor.specialtyId, doctor.id)}
          className="flex-1 py-2 px-3 text-xs font-semibold rounded-xl bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white shadow-sm flex items-center justify-center gap-1.5 transition-colors"
          aria-label={`Book appointment with ${doctor.name}`}
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Now</span>
        </button>
      </div>
    </div>
  );
}
