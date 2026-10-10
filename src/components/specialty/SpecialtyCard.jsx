import React from 'react';
import {
  HeartPulse,
  Brain,
  Bone,
  ShieldAlert,
  Stethoscope,
  ShieldPlus,
  Wind,
  Baby,
  Users,
  Cross,
  Sparkles,
  Volume2,
  ArrowRight,
} from 'lucide-react';

const iconMap = {
  HeartPulse,
  Brain,
  Bone,
  ShieldAlert,
  Stethoscope,
  ShieldPlus,
  Wind,
  Baby,
  Users,
  Cross,
  Sparkles,
  Volume2,
};

export function SpecialtyCard({ specialty, onSelect }) {
  const IconComponent = iconMap[specialty.icon] || Stethoscope;

  return (
    <div
      onClick={() => onSelect(specialty)}
      className="group relative flex flex-col justify-between rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/80 dark:border-slate-800 p-6 shadow-subtle hover:shadow-card-hover hover:border-brand-300 dark:hover:border-brand-700 transition-all duration-300 cursor-pointer"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(specialty);
        }
      }}
      aria-label={`View clinical details for ${specialty.name}`}
    >
      <div>
        {/* Header Icon + Featured pill */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-13 h-13 w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-950/70 text-brand-600 dark:text-brand-400 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white dark:group-hover:bg-brand-500">
            <IconComponent className="w-6 h-6" />
          </div>

          {specialty.featured && (
            <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-brand-100 text-brand-800 dark:bg-brand-950 dark:text-brand-300 dark:border dark:border-brand-800/40">
              Key Center
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
          {specialty.name}
        </h3>

        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
          {specialty.shortDescription}
        </p>

        {/* Common Services Bullet Snapshot */}
        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/60 space-y-1.5">
          {specialty.commonServices.slice(0, 3).map((service, idx) => (
            <div
              key={idx}
              className="flex items-center text-xs text-slate-500 dark:text-slate-400"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mr-2 flex-shrink-0" />
              <span className="truncate">{service}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Action Link */}
      <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
        <span className="text-xs font-semibold text-brand-600 dark:text-brand-400 group-hover:underline">
          View Specialty Details
        </span>
        <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-navy-800 flex items-center justify-center text-slate-500 group-hover:bg-brand-600 group-hover:text-white dark:group-hover:bg-brand-500 transition-colors">
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </div>
  );
}
