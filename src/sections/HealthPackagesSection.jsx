import React from 'react';
import { CheckCircle2, ShieldCheck, Sparkles, Clock, Calendar } from 'lucide-react';
import { healthPackages } from '../data/healthPackages';
import { hospitalConfig } from '../config/hospitalConfig';
import { SectionHeading } from '../components/common/SectionHeading';

export function HealthPackagesSection({ onBookAppointment }) {
  if (!hospitalConfig.healthPackages?.enabled) return null;

  return (
    <section
      aria-label="Preventive Health Checkup Packages"
      className="py-16 md:py-24 bg-slate-50 dark:bg-navy-900/60 border-y border-slate-200/60 dark:border-slate-800/60 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Preventive Profiling"
          title="PREVENTIVE HEALTH CHECKUP PACKAGES"
          subtitle="Structured diagnostic profiles designed for proactive health monitoring and early medical detection."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {healthPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                pkg.popular
                  ? 'bg-white dark:bg-navy-900 border-2 border-brand-500 shadow-xl relative'
                  : 'bg-white dark:bg-navy-900 border border-slate-200/80 dark:border-slate-800 shadow-subtle hover:shadow-card'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand-600 text-white shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Comprehensive Profile</span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {pkg.name}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300">
                    {pkg.testsIncludedCount}
                  </span>
                </div>

                <p className="text-xs text-brand-600 dark:text-brand-400 font-semibold mb-2">
                  {pkg.tagline}
                </p>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
                  <strong>Recommended for:</strong> {pkg.suitableFor}
                </p>

                {/* Tests included */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Key Profile Inclusions:
                  </p>
                  {pkg.components.map((comp, idx) => (
                    <div
                      key={idx}
                      className="flex items-start text-xs text-slate-600 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{pkg.preparation}</span>
                </div>

                <button
                  type="button"
                  onClick={onBookAppointment}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                    pkg.popular
                      ? 'btn-primary'
                      : 'bg-slate-100 dark:bg-navy-850 hover:bg-brand-600 hover:text-white dark:hover:bg-brand-600 text-slate-800 dark:text-slate-200'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Health Check</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
