import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqs } from '../data/faqs';
import { hospitalConfig } from '../config/hospitalConfig';
import { SectionHeading } from '../components/common/SectionHeading';

export function FAQSection() {
  const [openId, setOpenId] = useState(faqs[0]?.id || null);

  // Filter FAQs based on active feature toggles in hospitalConfig
  const visibleFaqs = faqs.filter((item) => {
    if (!item.requiresFeature) return true;
    return !!hospitalConfig[item.requiresFeature]?.enabled;
  });

  const toggleItem = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      aria-label="Frequently Asked Questions"
      className="py-16 md:py-24 bg-slate-50 dark:bg-navy-900/60 border-y border-slate-200/60 dark:border-slate-800/60 transition-colors"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Clarifications & Policies"
          title="FREQUENTLY ASKED QUESTIONS"
          subtitle="Clear answers regarding our specialist appointment flow, diagnostic services, visiting guidance, and hospital policies."
        />

        <div className="space-y-3.5">
          {visibleFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white dark:bg-navy-900 border-brand-300 dark:border-brand-700 shadow-card'
                    : 'bg-white dark:bg-navy-900 border-slate-200/80 dark:border-slate-800 shadow-subtle hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 dark:text-white text-sm sm:text-base focus-visible:ring-2 focus-visible:ring-brand-500"
                >
                  <span className="flex-1">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200 flex-shrink-0 ${
                      isOpen
                        ? 'bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 rotate-180'
                        : 'bg-slate-100 dark:bg-navy-850 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 animate-fade-in"
                  >
                    <p>{faq.answer}</p>
                    <span className="inline-block mt-3 text-[10px] font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                      Topic: {faq.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
