import React from 'react';
import { Clock, AlertCircle, BookOpen, Share2 } from 'lucide-react';
import { Modal } from '../common/Modal';

export function ResourceModal({ resource, isOpen, onClose }) {
  if (!resource) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={resource.title}
      subtitle={`Patient Education Guide • ${resource.category} • ${resource.readTime}`}
      maxWidth="max-w-3xl"
      ariaLabel={resource.title}
    >
      <div className="space-y-6">
        <div className="relative rounded-2xl overflow-hidden aspect-[16/8] bg-slate-100 dark:bg-navy-950">
          <img
            src={resource.image}
            alt={resource.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content body formatted with clean typography */}
        <div className="prose prose-sm dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
          {resource.content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('### ')) {
              return (
                <h4
                  key={idx}
                  className="text-lg font-bold text-slate-900 dark:text-white pt-2"
                >
                  {paragraph.replace('### ', '')}
                </h4>
              );
            }
            if (paragraph.startsWith('#### ')) {
              return (
                <h5
                  key={idx}
                  className="text-sm font-bold text-brand-700 dark:text-brand-300 pt-2"
                >
                  {paragraph.replace('#### ', '')}
                </h5>
              );
            }
            if (paragraph.startsWith('* ')) {
              const bullets = paragraph.split('\n');
              return (
                <ul key={idx} className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                  {bullets.map((b, bIdx) => (
                    <li key={bIdx}>{b.replace('* ', '')}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={idx} className="text-xs sm:text-sm">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Mandatory Medical Disclaimer */}
        <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/50 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
            <strong>Disclaimer:</strong> This content is for general informational purposes and does not replace advice from a qualified healthcare professional. Always consult a physician for personal medical diagnoses.
          </p>
        </div>

        <div className="flex justify-end pt-3 border-t border-slate-100 dark:border-slate-800">
          <button
            type="button"
            onClick={onClose}
            className="btn-secondary text-xs sm:text-sm py-2 px-5"
          >
            Close Guide
          </button>
        </div>
      </div>
    </Modal>
  );
}
