import React from 'react';
import {
  ShieldAlert,
  PhoneCall,
  AlertTriangle,
  Clock,
  HeartPulse,
  Activity,
} from 'lucide-react';
import { Modal } from '../common/Modal';
import { hospitalConfig } from '../../config/hospitalConfig';

export function EmergencyModal({ isOpen, onClose }) {
  const { contact, emergency } = hospitalConfig;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Emergency Medical Care Information"
      subtitle="Critical triage protocols and urgent contact guidance"
      maxWidth="max-w-2xl"
      ariaLabel="Emergency Medical Care Protocols"
    >
      <div className="space-y-5">
        {/* Urgent Alert Banner */}
        <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900/60 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-rose-600 dark:text-rose-400 flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-rose-900 dark:text-rose-200 space-y-1">
            <p className="font-bold">Life-Threatening Emergency Notice:</p>
            <p>
              If you or someone around you is experiencing sudden chest pain, severe shortness of breath, acute facial drooping or weakness, loss of consciousness, or massive bleeding, seek immediate medical attention or call your local municipal emergency number immediately.
            </p>
          </div>
        </div>

        {/* Emergency Desk Contact Box */}
        <div className="p-5 rounded-2xl bg-slate-50 dark:bg-navy-850 border border-slate-200/80 dark:border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Hospital Emergency Line
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-ping"></span>
              24/7 Available
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center flex-shrink-0">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <p className="text-lg font-bold text-slate-900 dark:text-white">
                {contact.emergencyPhone || 'YOUR EMERGENCY NUMBER'}
              </p>
              <p className="text-xs text-slate-500">
                Direct hospital emergency reception & triage unit
              </p>
            </div>
          </div>
        </div>

        {/* Triage Steps */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
            What Happens Upon Arrival:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-navy-850 border border-slate-200/60 dark:border-slate-800">
              <span className="font-bold text-brand-600 block mb-1">01. Rapid Triage</span>
              <span className="text-slate-600 dark:text-slate-400">
                Immediate vital assessment by emergency nursing staff.
              </span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-navy-850 border border-slate-200/60 dark:border-slate-800">
              <span className="font-bold text-brand-600 block mb-1">02. Acute Resuscitation</span>
              <span className="text-slate-600 dark:text-slate-400">
                Stabilization by on-duty emergency physicians.
              </span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-navy-850 border border-slate-200/60 dark:border-slate-800">
              <span className="font-bold text-brand-600 block mb-1">03. Specialist On-Call</span>
              <span className="text-slate-600 dark:text-slate-400">
                Direct paging of cardiology, neuro, or surgical specialists.
              </span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-[11px] text-slate-500 dark:text-slate-400 italic pt-2 border-t border-slate-100 dark:border-slate-800">
          Note: This template does not deliver medical dispatch services. For live emergencies, dial your region's official medical dispatcher.
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="button"
            onClick={onClose}
            className="btn-secondary text-xs sm:text-sm py-2 px-5"
          >
            Understood & Close
          </button>
        </div>
      </div>
    </Modal>
  );
}
