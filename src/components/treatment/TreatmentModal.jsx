import React from 'react';
import {
  Calendar,
  GitBranch,
  FileCheck2,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';
import { Modal } from '../common/Modal';

export function TreatmentModal({ treatment, isOpen, onClose, onBookAppointment }) {
  if (!treatment) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={treatment.title}
      subtitle={`Specialized Clinical Care Pathway • ${treatment.specialty}`}
      maxWidth="max-w-4xl"
      ariaLabel={`${treatment.title} Clinical Details`}
    >
      <div className="space-y-6">
        {/* Banner image */}
        <div className="relative rounded-2xl overflow-hidden aspect-[16/7] bg-slate-100 dark:bg-navy-950">
          <img
            src={treatment.image}
            alt={treatment.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand-600 text-white shadow-md">
              Department: {treatment.specialty}
            </span>
          </div>
        </div>

        {/* Clinical Overview */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-2">
            Clinical Overview
          </h4>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {treatment.overview}
          </p>
        </div>

        {/* Typical Care Pathway (Phases 1-4) */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <GitBranch className="w-5 h-5 text-brand-600 dark:text-brand-400" />
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Typical Clinical Care Pathway
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {treatment.typicalPathway.map((step) => (
              <div
                key={step.step}
                className="p-4 rounded-xl bg-slate-50 dark:bg-navy-850 border border-slate-200/80 dark:border-slate-800 relative pl-12"
              >
                <div className="absolute left-3 top-4 w-7 h-7 rounded-lg bg-brand-600 text-white text-xs font-bold flex items-center justify-center">
                  {step.step}
                </div>
                <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                  {step.phase}
                </h5>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Suitable For & Related Diagnostics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-850 border border-slate-200/80 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="w-4 h-4 text-brand-600 dark:text-brand-400" />
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Clinical Indication Context
              </h5>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {treatment.suitableFor}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-850 border border-slate-200/80 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-2">
              <FileCheck2 className="w-4 h-4 text-tealAccent-600 dark:text-tealAccent-400" />
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Correlated Diagnostic Workups
              </h5>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {treatment.relatedDiagnostics.map((diag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-white dark:bg-navy-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                >
                  {diag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Mandatory Medical Disclaimer Notice */}
        <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/50 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
            <strong>Clinical Notice:</strong> Care pathways are general clinical descriptions. Exact steps, timelines, and therapeutic choices are decided exclusively by consulting physicians based on individual patient evaluation.
          </p>
        </div>

        {/* Action Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Consult our specialists to evaluate treatment suitability.
          </span>
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
                onBookAppointment(treatment.specialtyId);
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
