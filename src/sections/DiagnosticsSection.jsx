import React, { useState } from 'react';
import { diagnostics } from '../data/diagnostics';
import { hospitalConfig } from '../config/hospitalConfig';
import { SectionHeading } from '../components/common/SectionHeading';
import { DiagnosticCard } from '../components/diagnostics/DiagnosticCard';
import { DiagnosticModal } from '../components/diagnostics/DiagnosticModal';

export function DiagnosticsSection({ onBookAppointment }) {
  const [activeService, setActiveService] = useState(null);

  if (!hospitalConfig.diagnostics?.enabled) return null;

  return (
    <section
      id="diagnostics"
      aria-label="Diagnostic & Laboratory Imaging Services"
      className="py-16 md:py-24 bg-white dark:bg-navy-950 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="High-Precision Evaluation"
          title="DIAGNOSTICS & IMAGING"
          subtitle="Advanced clinical laboratory testing and digital medical imaging structured to provide prompt, accurate findings for clinical decision-making."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {diagnostics.map((service) => (
            <DiagnosticCard
              key={service.id}
              service={service}
              onSelect={setActiveService}
            />
          ))}
        </div>
      </div>

      <DiagnosticModal
        service={activeService}
        isOpen={!!activeService}
        onClose={() => setActiveService(null)}
        onBookAppointment={onBookAppointment}
      />
    </section>
  );
}
