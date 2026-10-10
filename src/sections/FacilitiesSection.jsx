import React from 'react';
import { CheckCircle2, Building, ShieldCheck } from 'lucide-react';
import { facilities } from '../data/facilities';
import { hospitalConfig } from '../config/hospitalConfig';
import { SectionHeading } from '../components/common/SectionHeading';

export function FacilitiesSection() {
  if (!hospitalConfig.facilities?.enabled) return null;

  return (
    <section
      id="facilities"
      aria-label="Modern Hospital Facilities"
      className="py-16 md:py-24 bg-slate-50 dark:bg-navy-900/60 border-y border-slate-200/60 dark:border-slate-800/60 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Infrastructure & Amenities"
          title="PURPOSE-BUILT CLINICAL FACILITIES"
          subtitle="Engineered for patient safety, clinical sterility, and quiet recovery, integrating modern architectural standards with medical technology."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {facilities.map((fac) => (
            <div
              key={fac.id}
              className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-subtle hover:shadow-card-hover hover:border-brand-300 dark:hover:border-brand-700 transition-all duration-300"
            >
              <div>
                {/* Photo */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-navy-950">
                  <img
                    src={fac.image}
                    alt={fac.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-white/95 dark:bg-navy-900/95 text-brand-700 dark:text-brand-300 shadow-sm border border-slate-200 dark:border-slate-800">
                      {fac.category}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {fac.name}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {fac.description}
                  </p>
                </div>
              </div>

              {/* Feature Chips */}
              <div className="px-5 pb-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-1.5">
                {fac.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center text-[11px] text-slate-500 dark:text-slate-400"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 mr-1.5 flex-shrink-0" />
                    <span className="truncate">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
