import React from 'react';
import { Clock, BookOpen, ArrowRight } from 'lucide-react';

export function HealthResourceCard({ resource, onSelect }) {
  return (
    <div
      onClick={() => onSelect(resource)}
      className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-subtle hover:shadow-card-hover hover:border-brand-300 dark:hover:border-brand-700 transition-all duration-300 cursor-pointer"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(resource);
        }
      }}
      aria-label={`Read article: ${resource.title}`}
    >
      <div>
        <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-navy-950">
          <img
            src={resource.image}
            alt={resource.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-white/95 dark:bg-navy-900/95 text-brand-700 dark:text-brand-300 shadow-sm border border-slate-200 dark:border-slate-800">
              {resource.category}
            </span>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2">
            <Clock className="w-3.5 h-3.5" />
            <span>{resource.readTime}</span>
          </div>

          <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors line-clamp-2">
            {resource.title}
          </h3>

          <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
            {resource.excerpt}
          </p>
        </div>
      </div>

      <div className="px-5 pb-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <span className="text-xs font-semibold text-brand-600 dark:text-brand-400 group-hover:underline">
          Read Guide
        </span>
        <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-navy-800 flex items-center justify-center text-slate-500 group-hover:bg-brand-600 group-hover:text-white transition-colors">
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
}
