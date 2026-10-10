import React from 'react';
import { ArrowRight, Layers, GitBranch } from 'lucide-react';

export function TreatmentCard({ treatment, onSelect }) {
  return (
    <div
      onClick={() => onSelect(treatment)}
      className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-subtle hover:shadow-card-hover hover:border-brand-300 dark:hover:border-brand-700 transition-all duration-300 cursor-pointer"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(treatment);
        }
      }}
      aria-label={`View treatment pathway for ${treatment.title}`}
    >
      {/* Top Image Preview */}
      <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-navy-950">
        <img
          src={treatment.image}
          alt={treatment.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-white/95 dark:bg-navy-900/95 text-brand-700 dark:text-brand-300 shadow-sm border border-slate-100 dark:border-slate-800">
            {treatment.specialty}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
            {treatment.title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
            {treatment.shortDescription}
          </p>
        </div>

        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center text-xs font-medium text-slate-500 dark:text-slate-400">
            <GitBranch className="w-4 h-4 text-brand-600 dark:text-brand-400 mr-1.5" />
            <span>Structured Pathway</span>
          </div>

          <span className="inline-flex items-center text-xs font-semibold text-brand-600 dark:text-brand-400 group-hover:translate-x-1 transition-transform">
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </span>
        </div>
      </div>
    </div>
  );
}
