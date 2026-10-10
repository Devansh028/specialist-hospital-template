import React from 'react';
import {
  Clock,
  AlertCircle,
  FileCheck2,
  Calendar,
  CheckCircle2,
} from 'lucide-react';
import { Modal } from '../common/Modal';

export function DiagnosticModal({ service, isOpen, onClose, onBookAppointment }) {
  if (!service) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={service.name}
      subtitle={`Diagnostic Wing • ${service.category}`}
      maxWidth="max-w-2xl"
      ariaLabel={`${service.name} Diagnostic Information`}
    >
      <div className="space-y-5">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-2">
            Service Description
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {service.fullDescription}
          </p>
        </div>

        {/* Preparation Guidelines */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-850 border border-slate-200/80 dark:border-slate-800">
          <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-1.5 flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-brand-600 dark:text-brand-400" />
            <span>Preparation Instructions & Turnaround</span>
          </h5>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            <strong>Preparation:</strong> {service.preparationNotes}
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
            <strong>Results Availability:</strong> {service.turnaroundTime}
          </p>
        </div>

        {/* Common Tests */}
        <div>
          <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
            Frequently Conducted Investigations
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {service.commonTests.map((t, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 p-2 rounded-lg bg-slate-50 dark:bg-navy-850 border border-slate-200/60 dark:border-slate-800"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-tealAccent-500 flex-shrink-0" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Notice */}
        <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/50 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-amber-800 dark:text-amber-300">
            Please adhere to the specific fasting and arrival instructions communicated by your physician or the appointment desk.
          </p>
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
          <button
            type="button"
            onClick={onClose}
            className="btn-secondary text-xs sm:text-sm py-2 px-4"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onBookAppointment();
            }}
            className="btn-primary text-xs sm:text-sm py-2 px-5"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Schedule Investigation</span>
          </button>
        </div>
      </div>
    </Modal>
  );
}
