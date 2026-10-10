import React from 'react';
import {
  Calendar,
  UserCheck,
  Layers,
  ShieldAlert,
  Activity,
  PhoneCall,
  ArrowRight,
} from 'lucide-react';
import { hospitalConfig } from '../config/hospitalConfig';

export function QuickActions({
  onBookAppointment,
  onFindDoctor,
  onExploreSpecialties,
  onEmergencyClick,
  onExploreDiagnostics,
  onContactClick,
}) {
  const { emergency, appointments, diagnostics } = hospitalConfig;

  const actions = [
    ...(appointments?.enabled
      ? [
          {
            id: 'book',
            title: 'Book Appointment',
            subtitle: 'Schedule with a clinical specialist',
            icon: Calendar,
            action: onBookAppointment,
            accent: 'brand',
          },
        ]
      : []),
    {
      id: 'doctor',
      title: 'Find a Doctor',
      subtitle: 'Browse specialists by department',
      icon: UserCheck,
      action: onFindDoctor,
      accent: 'teal',
    },
    {
      id: 'specialties',
      title: 'Explore Specialties',
      subtitle: 'Review clinical departments & care',
      icon: Layers,
      action: onExploreSpecialties,
      accent: 'brand',
    },
    ...(emergency?.enabled
      ? [
          {
            id: 'emergency',
            title: 'Emergency Care',
            subtitle: 'Immediate acute triage information',
            icon: ShieldAlert,
            action: onEmergencyClick,
            accent: 'rose',
          },
        ]
      : []),
    ...(diagnostics?.enabled
      ? [
          {
            id: 'diagnostics',
            title: 'Diagnostic Services',
            subtitle: 'Imaging, scans & pathology tests',
            icon: Activity,
            action: onExploreDiagnostics,
            accent: 'indigo',
          },
        ]
      : []),
    {
      id: 'contact',
      title: 'Contact Hospital',
      subtitle: 'Location, numbers & desk inquiries',
      icon: PhoneCall,
      action: onContactClick,
      accent: 'slate',
    },
  ];

  return (
    <section
      aria-label="Hospital Quick Actions"
      className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {actions.map((item) => {
          const Icon = item.icon;
          const isRose = item.accent === 'rose';

          return (
            <button
              key={item.id}
              type="button"
              onClick={item.action}
              className={`group text-left p-4 rounded-2xl transition-all duration-200 border ${
                isRose
                  ? 'bg-rose-50/80 dark:bg-rose-950/30 border-rose-200 dark:border-rose-900/60 hover:border-rose-400 hover:shadow-lg'
                  : 'bg-white dark:bg-navy-900 border-slate-200/90 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700 hover:shadow-card-hover'
              } flex flex-col justify-between`}
            >
              <div>
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110 ${
                    isRose
                      ? 'bg-rose-600 text-white shadow-sm'
                      : 'bg-brand-50 dark:bg-brand-950/80 text-brand-600 dark:text-brand-400'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3
                  className={`text-sm font-bold leading-snug ${
                    isRose
                      ? 'text-rose-900 dark:text-rose-200'
                      : 'text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400'
                  }`}
                >
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  {item.subtitle}
                </p>
              </div>

              <div className="mt-3 flex items-center text-xs font-semibold text-brand-600 dark:text-brand-400 group-hover:translate-x-1 transition-transform">
                <span>Access</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
