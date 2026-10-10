import React from 'react';
import { Quote, Star, ShieldCheck } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import { SectionHeading } from '../components/common/SectionHeading';

export function TestimonialsSection() {
  return (
    <section
      aria-label="Patient Experience & Feedback"
      className="py-16 md:py-24 bg-white dark:bg-navy-950 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Patient Experience"
          title="VOICES OF CARE & COORDINATION"
          subtitle="Reflecting on transparent communication, organized clinical navigation, and compassionate team support."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-navy-900 border border-slate-200/80 dark:border-slate-800 shadow-subtle flex flex-col justify-between hover:shadow-card hover:border-brand-300 dark:hover:border-brand-700 transition-all duration-300"
            >
              <div>
                <Quote className="w-8 h-8 text-brand-300 dark:text-brand-700 mb-4" />

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic mb-4">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800">
                <p className="text-xs font-bold text-slate-900 dark:text-white">
                  {item.author}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {item.context}
                </p>
                <span className="text-[10px] text-brand-600 dark:text-brand-400 font-semibold block mt-1 uppercase tracking-wider">
                  ({item.note})
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
