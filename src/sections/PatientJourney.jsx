import React from 'react';
import {
  Calendar,
  UserCheck,
  Activity,
  HeartPulse,
  ClipboardCheck,
  ArrowRight,
} from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';

export function PatientJourney({ onBookAppointment }) {
  const steps = [
    {
      num: '01',
      title: 'Book',
      description: 'Choose a specialty or specialist based on your symptoms or referral.',
      icon: Calendar,
      detail: 'Online requests or patient coordination desk assistance.',
    },
    {
      num: '02',
      title: 'Consult',
      description: 'Meet the clinical care team for an in-depth medical evaluation.',
      icon: UserCheck,
      detail: 'Discussion of symptoms, family history, and clinical signs.',
    },
    {
      num: '03',
      title: 'Diagnose',
      description: 'Complete recommended diagnostic evaluation where clinically indicated.',
      icon: Activity,
      detail: 'On-site digital imaging, ECG, ultrasound, or laboratory testing.',
    },
    {
      num: '04',
      title: 'Treat',
      description: 'Receive an appropriate, individualized care plan from qualified professionals.',
      icon: HeartPulse,
      detail: 'Medical management, therapeutic counseling, or procedural care.',
    },
    {
      num: '05',
      title: 'Follow Up',
      description: 'Continue guided recovery, medication monitoring, and follow-up reviews.',
      icon: ClipboardCheck,
      detail: 'Continuity of care to assess long-term health outcomes.',
    },
  ];

  return (
    <section
      aria-label="The Patient Care Pathway"
      className="py-16 md:py-24 bg-white dark:bg-navy-950 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Structured Navigation"
          title="THE PATIENT CARE JOURNEY"
          subtitle="A clear, organized pathway connecting your first specialist consultation to long-term recovery."
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-4 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative rounded-2xl bg-slate-50 dark:bg-navy-900 border border-slate-200/80 dark:border-slate-800 p-6 flex flex-col justify-between shadow-subtle hover:shadow-card hover:border-brand-300 dark:hover:border-brand-700 transition-all duration-300 group"
              >
                <div>
                  {/* Step Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-brand-600 dark:text-brand-400 font-heading">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-navy-850 text-slate-700 dark:text-slate-200 shadow-sm flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800/80">
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    {step.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action strip */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onBookAppointment}
            className="btn-primary py-3 px-7 text-sm"
          >
            <span>Begin Your Care Journey</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
