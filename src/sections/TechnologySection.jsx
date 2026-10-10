import React from 'react';
import {
  Cpu,
  Scan,
  Activity,
  HeartPulse,
  FlaskConical,
  CheckCircle2,
} from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';

export function TechnologySection() {
  const technologies = [
    {
      title: 'Digital Diagnostics & PACS',
      category: 'Diagnostic Infrastructure',
      description: 'Integrated digital picture archiving and communications system enabling rapid specialist consultation across departments.',
      icon: Scan,
      points: ['Instant image availability', 'Secure encrypted archiving', 'Multi-department access'],
    },
    {
      title: 'High-Resolution Imaging Suites',
      category: 'Radiology',
      description: 'Low-dose digital radiography, multi-slice computed tomography, and magnetic resonance protocols for precision evaluation.',
      icon: Cpu,
      points: ['Volumetric cross-sections', 'Sub-millimeter detail', 'Reduced scan duration'],
    },
    {
      title: 'Endoscopic & Laparoscopic Video Towers',
      category: 'Surgical Suites',
      description: 'High-definition endoscopic camera systems supporting minimally invasive diagnostic and surgical interventions.',
      icon: Activity,
      points: ['Magnified tissue visualization', 'Precision instruments', 'Optimized surgical ergonomics'],
    },
    {
      title: 'Continuous Patient Hemodynamic Monitoring',
      category: 'Critical & Inpatient Care',
      description: 'Multi-parameter bedside telemetry constantly tracking cardiac rhythm, oxygenation, and vital physiological variables.',
      icon: HeartPulse,
      points: ['Synchronized central alerts', 'Arrhythmia detection', 'Continuous nurse station telemetry'],
    },
  ];

  return (
    <section
      aria-label="Clinical Technology Infrastructure"
      className="py-16 md:py-24 bg-slate-50 dark:bg-navy-900/60 border-y border-slate-200/60 dark:border-slate-800/60 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technological Infrastructure"
          title="ADVANCED MEDICAL TECHNOLOGY"
          subtitle="Equipping our clinical specialists with modern diagnostic and therapeutic instruments to support safety and accurate clinical decision-making."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.title}
                className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/80 dark:border-slate-800 shadow-subtle flex flex-col justify-between hover:shadow-card hover:border-brand-300 dark:hover:border-brand-700 transition-all duration-300 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-950/70 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                    {tech.category}
                  </span>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1 mb-2">
                    {tech.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {tech.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
                  {tech.points.map((pt, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-xs text-slate-500 dark:text-slate-400"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-tealAccent-500 mr-1.5 flex-shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
