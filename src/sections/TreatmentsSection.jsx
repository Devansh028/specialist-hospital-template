import React, { useState } from 'react';
import { treatments } from '../data/treatments';
import { SectionHeading } from '../components/common/SectionHeading';
import { TreatmentCard } from '../components/treatment/TreatmentCard';
import { TreatmentModal } from '../components/treatment/TreatmentModal';

export function TreatmentsSection({ onBookAppointment }) {
  const [activeTreatment, setActiveTreatment] = useState(null);

  return (
    <section
      id="treatments"
      aria-label="Specialized Treatments & Care Pathways"
      className="py-16 md:py-24 bg-slate-50 dark:bg-navy-900/60 border-y border-slate-200/60 dark:border-slate-800/60 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Structured Care Pathways"
          title="SPECIALIZED TREATMENTS"
          subtitle="Explore multi-step clinical pathways designed to provide coordinated care from initial consultation through monitored recovery."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {treatments.map((item) => (
            <TreatmentCard
              key={item.id}
              treatment={item}
              onSelect={setActiveTreatment}
            />
          ))}
        </div>
      </div>

      <TreatmentModal
        treatment={activeTreatment}
        isOpen={!!activeTreatment}
        onClose={() => setActiveTreatment(null)}
        onBookAppointment={onBookAppointment}
      />
    </section>
  );
}
