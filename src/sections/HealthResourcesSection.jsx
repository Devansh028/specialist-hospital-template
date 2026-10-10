import React, { useState, useMemo } from 'react';
import { healthResources } from '../data/healthResources';
import { SectionHeading } from '../components/common/SectionHeading';
import { HealthResourceCard } from '../components/resources/HealthResourceCard';
import { ResourceModal } from '../components/resources/ResourceModal';

export function HealthResourcesSection() {
  const [selectedCat, setSelectedCat] = useState('All');
  const [activeResource, setActiveResource] = useState(null);

  const categories = ['All', 'Health Guides', 'Preventive Care', 'Treatment Guides', 'Recovery', 'Wellness'];

  const filteredResources = useMemo(() => {
    if (selectedCat === 'All') return healthResources;
    return healthResources.filter((r) => r.category === selectedCat);
  }, [selectedCat]);

  return (
    <section
      id="resources"
      aria-label="Patient Education & Health Resources"
      className="py-16 md:py-24 bg-slate-50 dark:bg-navy-900/60 border-y border-slate-200/60 dark:border-slate-800/60 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Educational Library"
          title="PATIENT HEALTH RESOURCES"
          subtitle="Clear, physician-informed articles and preparation guides to help you navigate your appointments and recovery with confidence."
        />

        {/* Category Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-6 pt-1 px-1 no-scrollbar mb-8">
          {categories.map((cat) => {
            const isSelected = selectedCat === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCat(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-600/20'
                    : 'bg-white dark:bg-navy-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredResources.map((res) => (
            <HealthResourceCard
              key={res.id}
              resource={res}
              onSelect={setActiveResource}
            />
          ))}
        </div>
      </div>

      <ResourceModal
        resource={activeResource}
        isOpen={!!activeResource}
        onClose={() => setActiveResource(null)}
      />
    </section>
  );
}
