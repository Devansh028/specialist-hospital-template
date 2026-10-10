import React from 'react';
import {
  Globe,
  Plane,
  Home,
  FileText,
  Languages,
  CalendarCheck,
  Mail,
} from 'lucide-react';
import { hospitalConfig } from '../config/hospitalConfig';
import { SectionHeading } from '../components/common/SectionHeading';

export function InternationalPatientsSection({ onBookAppointment }) {
  if (!hospitalConfig.internationalPatients?.enabled) return null;

  const services = [
    {
      title: 'Remote Case Review',
      description: 'Pre-travel review of medical summaries and clinical records with relevant specialists.',
      icon: FileText,
    },
    {
      title: 'Appointment Scheduling',
      description: 'Consolidated scheduling of specialist consultations, diagnostic imaging, and admissions.',
      icon: CalendarCheck,
    },
    {
      title: 'Travel & Visa Guidance',
      description: 'Assistance with medical visa documentation letters and travel planning information.',
      icon: Plane,
    },
    {
      title: 'Accommodation Support',
      description: 'Recommendations for partner hotels and serviced apartments convenient to the hospital.',
      icon: Home,
    },
    {
      title: 'Language Assistance',
      description: 'Dedicated patient coordinators providing translation and multilingual escorting.',
      icon: Languages,
    },
  ];

  return (
    <section
      aria-label="International & Outstation Patient Desk"
      className="py-16 md:py-24 bg-slate-50 dark:bg-navy-900/60 border-y border-slate-200/60 dark:border-slate-800/60 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Global Healthcare Support"
          title="CARE FOR PATIENTS FROM ANYWHERE"
          subtitle="Dedicated support services for outstation and international patients seeking advanced clinical care."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((serv) => {
            const Icon = serv.icon;
            return (
              <div
                key={serv.title}
                className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/80 dark:border-slate-800 shadow-subtle flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-50 dark:bg-brand-950/70 text-brand-600 dark:text-brand-400 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {serv.title}
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {serv.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
