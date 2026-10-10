import React from 'react';
import {
  FlaskConical,
  Scan,
  Activity,
  Radio,
  Cpu,
  HeartPulse,
  Heart,
  ShieldCheck,
  Clock,
  ArrowRight,
} from 'lucide-react';

const iconMap = {
  FlaskConical,
  Scan,
  Activity,
  Radio,
  Cpu,
  HeartPulse,
  Heart,
  ShieldCheck,
};

export function DiagnosticCard({ service, onSelect }) {
  const IconComponent = iconMap[service.icon] || Activity;

  return (
    <div
      onClick={() => onSelect(service)}
      className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/80 dark:border-slate-800 p-6 shadow-subtle hover:shadow-card-hover hover:border-brand-300 dark:hover:border-brand-700 transition-all duration-300 cursor-pointer"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(service);
        }
      }}
      aria-label={`View diagnostic service details for ${service.name}`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-tealAccent-50 dark:bg-tealAccent-950/70 text-tealAccent-600 dark:text-tealAccent-400 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-tealAccent-500 group-hover:text-white">
            <IconComponent className="w-6 h-6" />
          </div>

          <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-navy-850 text-slate-600 dark:text-slate-300">
            {service.category}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
          {service.name}
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
          {service.shortDescription}
        </p>

        {/* Turnaround Badge */}
        <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
          <Clock className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
          <span>{service.turnaroundTime}</span>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <span className="text-xs font-semibold text-brand-600 dark:text-brand-400 group-hover:underline">
          Preparation & Details
        </span>
        <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-navy-800 flex items-center justify-center text-slate-500 group-hover:bg-brand-600 group-hover:text-white transition-colors">
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
}
