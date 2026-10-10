import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, BellRing } from 'lucide-react';
import { newsArticles } from '../data/news';
import { hospitalConfig } from '../config/hospitalConfig';
import { SectionHeading } from '../components/common/SectionHeading';
import { Modal } from '../components/common/Modal';

export function NewsSection() {
  const [activeArticle, setActiveArticle] = useState(null);

  if (!hospitalConfig.news?.enabled) return null;

  return (
    <section
      aria-label="Hospital News & Announcements"
      className="py-16 md:py-24 bg-white dark:bg-navy-950 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Hospital Bulletin"
          title="NEWS & CLINICAL ANNOUNCEMENTS"
          subtitle="Stay informed with recent facility expansions, clinical updates, and community health initiatives."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {newsArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => setActiveArticle(article)}
              className="group flex flex-col justify-between rounded-2xl bg-slate-50 dark:bg-navy-900 border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-subtle hover:shadow-card hover:border-brand-300 dark:hover:border-brand-700 transition-all duration-300 cursor-pointer"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveArticle(article);
                }
              }}
              aria-label={`Read announcement: ${article.title}`}
            >
              <div>
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-navy-950">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-white/95 dark:bg-navy-900/95 text-brand-700 dark:text-brand-300 shadow-sm border border-slate-200 dark:border-slate-800">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{article.date}</span>
                    <span>•</span>
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-3 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs font-semibold text-brand-600 dark:text-brand-400 group-hover:underline">
                  Read Full Notice
                </span>
                <div className="w-7 h-7 rounded-lg bg-white dark:bg-navy-850 flex items-center justify-center text-slate-500 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      <Modal
        isOpen={!!activeArticle}
        onClose={() => setActiveArticle(null)}
        title={activeArticle?.title}
        subtitle={`${activeArticle?.category} • ${activeArticle?.date}`}
        maxWidth="max-w-2xl"
      >
        {activeArticle && (
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/8] bg-slate-100 dark:bg-navy-950">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {activeArticle.content}
            </p>
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-navy-850 text-xs text-slate-500 italic">
              All announcements are demonstration content for hospital template clients.
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
