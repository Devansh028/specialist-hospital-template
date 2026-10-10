import React from 'react';
import { ShieldCheck, Activity, GitBranch, HeartHandshake } from 'lucide-react';
import { hospitalConfig } from '../config/hospitalConfig';
import { SectionHeading } from '../components/common/SectionHeading';

export function TrustHighlights() {
  const icons = {
    ShieldCheck,
    Activity,
    GitBranch,
    HeartHandshake,
  };

  return (
    <section
      aria-label="Clinical Highlights"
      className="py-16 md:py-24 bg-white dark:bg-navy-950 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Specialist Care Matters"
          title="CLINICAL EXCELLENCE WITH A PATIENT-FIRST CORE"
          subtitle="A healthcare environment built on specialized clinical depth, advanced diagnostic infrastructure, and continuous patient support."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {hospitalConfig.highlights.map((highlight) => {
            const Icon = icons[highlight.icon] || ShieldCheck;
            return (
              <div
                key={highlight.id}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-navy-900 border border-slate-200/80 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700 transition-all duration-200 shadow-subtle hover:shadow-card group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-950/80 text-brand-700 dark:text-brand-300 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
