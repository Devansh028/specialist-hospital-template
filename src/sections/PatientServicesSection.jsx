import React from 'react';
import {
  CalendarCheck,
  Receipt,
  ShieldAlert,
  Pill,
  Clock,
  UserCheck,
  FileText,
  PhoneCall,
  CheckCircle,
  HelpCircle,
} from 'lucide-react';
import { patientServices, insuranceFeatures } from '../data/patientServices';
import { hospitalConfig } from '../config/hospitalConfig';
import { SectionHeading } from '../components/common/SectionHeading';

const iconMap = {
  CalendarCheck,
  Receipt,
  ShieldAlert,
  Pill,
  Clock,
  UserCheck,
  FileText,
  PhoneCall,
};

export function PatientServicesSection({ onBookAppointment, onContactClick }) {
  const { insurance } = hospitalConfig;

  return (
    <section
      id="patient-care"
      aria-label="Patient Support & Care Navigation"
      className="py-16 md:py-24 bg-white dark:bg-navy-950 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Support & Advocacy"
          title="PATIENT CARE & HOSPITAL SERVICES"
          subtitle="Comprehensive navigation services designed to assist you and your family before, during, and following your visit."
        />

        {/* 8 Patient Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {patientServices.map((service) => {
            const Icon = iconMap[service.icon] || UserCheck;
            return (
              <div
                key={service.id}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-navy-900 border border-slate-200/80 dark:border-slate-800 shadow-subtle hover:shadow-card hover:border-brand-300 dark:hover:border-brand-700 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-100 dark:bg-brand-950/70 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                  {service.badge}
                </span>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1 mb-2">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Insurance & Payment Desk Section (Configurable) */}
        {insurance?.enabled && (
          <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-brand-900 via-navy-900 to-navy-950 text-white shadow-xl relative overflow-hidden border border-brand-800/40">
            <div className="max-w-3xl space-y-4 relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-brand-200 border border-white/15">
                Financial Support Desk
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                INSURANCE & PAYMENT SUPPORT
              </h3>

              <p className="text-sm sm:text-base text-brand-100/90 leading-relaxed">
                {insurance.notice ||
                  'Insurance and payment options can vary by hospital and service. Contact the hospital for current details.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {insuranceFeatures.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                  >
                    <div className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-tealAccent-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white">
                          {item.title}
                        </h4>
                        <p className="text-xs text-brand-100/70 mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onContactClick}
                  className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white text-navy-950 hover:bg-slate-100 transition-colors shadow-sm"
                >
                  Contact Billing Desk
                </button>
                <span className="text-xs text-brand-200 italic">
                  * All insurance policies subject to individual provider approval.
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
