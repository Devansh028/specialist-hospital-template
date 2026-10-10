import React from 'react';
import {
  Activity,
  CheckCircle2,
  Calendar,
  AlertCircle,
  FileCheck2,
  Stethoscope,
} from 'lucide-react';
import { Modal } from '../common/Modal';

export function SpecialtyModal({ specialty, isOpen, onClose, onBookAppointment }) {
  if (!specialty) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={specialty.name}
      subtitle="Clinical Department Overview & Patient Services"
      maxWidth="max-w-4xl"
      ariaLabel={`${specialty.name} Clinical Overview`}
    >
      <div className="space-y-6">
        {/* Banner image & department intro */}
        <div className="relative rounded-2xl overflow-hidden aspect-[16/7] bg-slate-100 dark:bg-navy-950">
          <img
            src={specialty.image}
            alt={`${specialty.name} clinical environment`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6">
            <p className="text-white text-sm sm:text-base font-medium max-w-2xl drop-shadow">
              {specialty.shortDescription}
            </p>
          </div>
        </div>

        {/* Detailed Overview */}
        <div>
          <h4 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs text-brand-600 dark:text-brand-400 mb-2">
            Clinical Scope & Mission
          </h4>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {specialty.fullDescription}
          </p>
        </div>

        {/* Common Services and Common Conditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Services Offered */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-navy-850 border border-slate-200/80 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-3">
              <Stethoscope className="w-5 h-5 text-brand-600 dark:text-brand-400" />
              <h5 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                Common Consultations & Services
              </h5>
            </div>
            <ul className="space-y-2">
              {specialty.commonServices.map((service, idx) => (
                <li
                  key={idx}
                  className="flex items-start text-xs sm:text-sm text-slate-600 dark:text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Conditions Evaluated */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-navy-850 border border-slate-200/80 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-3">
              <Activity className="w-5 h-5 text-tealAccent-600 dark:text-tealAccent-400" />
              <h5 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                Evaluated Clinical Conditions
              </h5>
            </div>
            <ul className="space-y-2">
              {specialty.commonConditions.map((cond, idx) => (
                <li
                  key={idx}
                  className="flex items-start text-xs sm:text-sm text-slate-600 dark:text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-tealAccent-500 mr-2.5 flex-shrink-0 mt-2" />
                  <span>{cond}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Diagnostic Links */}
        <div className="p-4 rounded-xl bg-brand-50/60 dark:bg-navy-950/80 border border-brand-100 dark:border-brand-900/40">
          <h5 className="text-xs font-bold uppercase tracking-wider text-brand-800 dark:text-brand-300 mb-2">
            Associated Diagnostics & Testing
          </h5>
          <div className="flex flex-wrap gap-2">
            {specialty.diagnosticTests.map((test, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-white dark:bg-navy-850 text-slate-700 dark:text-slate-200 border border-brand-200/60 dark:border-slate-700"
              >
                <FileCheck2 className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
                {test}
              </span>
            ))}
          </div>
        </div>

        {/* Mandatory Medical Disclaimer Notice */}
        <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/50 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
            <strong>Medical Notice:</strong> Information shown is for general informational purposes and should not replace professional medical advice, clinical diagnosis, or individualized treatment plans from a licensed doctor.
          </p>
        </div>

        {/* Action Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <p className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
            Ready to consult with this department? Request an appointment slot online.
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary w-full sm:w-auto text-sm py-2.5 px-4"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onBookAppointment(specialty.id);
              }}
              className="btn-primary w-full sm:w-auto text-sm py-2.5 px-5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
