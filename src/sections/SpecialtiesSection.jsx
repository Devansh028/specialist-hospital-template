import React, { useState, useMemo } from 'react';
import { specialties } from '../data/specialties';
import { SectionHeading } from '../components/common/SectionHeading';
import { SpecialtyFilter } from '../components/specialty/SpecialtyFilter';
import { SpecialtyCard } from '../components/specialty/SpecialtyCard';
import { SpecialtyModal } from '../components/specialty/SpecialtyModal';

export function SpecialtiesSection({ onBookAppointment }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeSpecialty, setActiveSpecialty] = useState(null);

  const filteredSpecialties = useMemo(() => {
    if (selectedCategory === 'all') return specialties;
    return specialties.filter((s) => s.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section
      id="specialties"
      aria-label="Clinical Specialties"
      className="py-16 md:py-24 bg-white dark:bg-navy-950 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Clinical Departments"
          title="OUR SPECIALTIES"
          subtitle="Explore our comprehensive departments led by experienced clinical specialists and supported by dedicated diagnostic facilities."
        />

        {/* Filter bar */}
        <div className="mb-10">
          <SpecialtyFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        {/* Specialty cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredSpecialties.map((specialty) => (
            <SpecialtyCard
              key={specialty.id}
              specialty={specialty}
              onSelect={setActiveSpecialty}
            />
          ))}
        </div>

        {/* Empty state fallback if category has no matches */}
        {filteredSpecialties.length === 0 && (
          <div className="text-center py-12 p-8 rounded-2xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-slate-800">
            <p className="text-slate-600 dark:text-slate-400 font-medium">
              No specialties found for this filter category.
            </p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="mt-3 text-sm text-brand-600 dark:text-brand-400 font-semibold underline"
            >
              Reset to all specialties
            </button>
          </div>
        )}
      </div>

      {/* Specialty detail modal */}
      <SpecialtyModal
        specialty={activeSpecialty}
        isOpen={!!activeSpecialty}
        onClose={() => setActiveSpecialty(null)}
        onBookAppointment={onBookAppointment}
      />
    </section>
  );
}
