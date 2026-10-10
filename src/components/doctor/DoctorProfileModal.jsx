import React from 'react';
import {
  Calendar,
  Clock,
  Globe2,
  CheckCircle2,
  ShieldCheck,
  Video,
  AlertCircle,
} from 'lucide-react';
import { Modal } from '../common/Modal';
import { DoctorAvatar } from '../common/DoctorAvatar';

export function DoctorProfileModal({ doctor, isOpen, onClose, onBookAppointment }) {
  if (!doctor) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={doctor.name}
      subtitle={`${doctor.role} • ${doctor.specialtyName}`}
      maxWidth="max-w-3xl"
      ariaLabel={`Clinical Profile of ${doctor.name}`}
    >
      <div className="space-y-6">
        {/* Top Profile Card */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-5 rounded-2xl bg-slate-50 dark:bg-navy-850 border border-slate-200/80 dark:border-slate-800">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-slate-200 dark:bg-navy-950 flex-shrink-0 border-2 border-white dark:border-navy-800 shadow-md">
            <DoctorAvatar
              src={doctor.avatar}
              name={doctor.name}
              alt={doctor.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center sm:text-left flex-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-100 text-brand-800 dark:bg-brand-950 dark:text-brand-300 mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{doctor.department}</span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {doctor.name}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
              {doctor.designation} • {doctor.experienceLabel}
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                <span>{doctor.availability}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe2 className="w-4 h-4 text-slate-400" />
                <span>Languages: {doctor.languages.join(', ')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Clinical Biography */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-2">
            Clinical Practice & Background
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {doctor.fullBio}
          </p>
        </div>

        {/* Key Areas of Clinical Focus */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
            Primary Areas of Clinical Focus
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {doctor.areasOfFocus.map((focus, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-navy-850 text-xs sm:text-sm text-slate-700 dark:text-slate-200 border border-slate-200/60 dark:border-slate-800"
              >
                <CheckCircle2 className="w-4 h-4 text-brand-500 flex-shrink-0" />
                <span>{focus}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Credentials & Demo Note */}
        <div className="p-4 rounded-xl bg-slate-100 dark:bg-navy-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
          <p className="font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Clinical Credentials Note:
          </p>
          <p>
            Professional credentials, hospital privileges, and faculty appointments — editable demo template placeholder.
          </p>
        </div>

        {/* Action Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <div className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
            <span>Next estimated consultation slot: </span>
            <span className="font-semibold text-slate-700 dark:text-slate-200">
              {doctor.nextAvailableSlot}
            </span>
          </div>

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
                onBookAppointment(doctor.specialtyId, doctor.id);
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
