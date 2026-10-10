import React from 'react';
import {
  Calendar,
  Layers,
  UserCheck,
  ShieldCheck,
  Activity,
  GitBranch,
  HeartHandshake,
  ArrowRight,
  Clock,
} from 'lucide-react';
import { hospitalConfig } from '../config/hospitalConfig';

export function Hero({ onBookAppointment, onExploreSpecialties, onFindDoctor }) {
  const { tagline, appointments } = hospitalConfig;

  return (
    <section
      id="home"
      aria-label="Welcome to Medivera Specialist Hospital"
      className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-brand-50/50 via-white to-slate-50 dark:from-navy-950 dark:via-navy-900 dark:to-navy-950"
    >
      {/* Background subtle ambient orbs */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-brand-200/30 dark:bg-brand-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-24 w-80 h-80 rounded-full bg-teal-200/20 dark:bg-teal-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand-100/80 text-brand-800 dark:bg-brand-950/80 dark:text-brand-300 dark:border dark:border-brand-800/60 shadow-subtle">
              <span className="w-2 h-2 rounded-full bg-brand-600 dark:bg-brand-400 animate-pulse"></span>
              <span>{tagline}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12] font-heading">
              SPECIALIZED CARE FOR EVERY{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-700 to-tealAccent-600 dark:from-brand-400 dark:to-tealAccent-400">
                IMPORTANT MOMENT.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Expert-led healthcare supported by advanced facilities, coordinated care and a patient-first approach.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              {appointments?.enabled && (
                <button
                  type="button"
                  onClick={onBookAppointment}
                  className="btn-primary text-base px-7 py-3.5"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book an Appointment</span>
                </button>
              )}

              <button
                type="button"
                onClick={onExploreSpecialties}
                className="btn-secondary text-base px-6 py-3.5"
              >
                <Layers className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                <span>Explore Specialties</span>
              </button>

              <button
                type="button"
                onClick={onFindDoctor}
                className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors group"
              >
                <UserCheck className="w-4 h-4 text-slate-400 group-hover:text-brand-600 dark:group-hover:text-brand-400" />
                <span>Find a Doctor</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust Pill / Operational indicator */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <Clock className="w-4 h-4 text-brand-600 dark:text-brand-400" />
              <span>Inpatient & Emergency Services Active 24/7 • Coordinated Outpatient Clinics</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Medical Photo Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-navy-800 bg-slate-100 dark:bg-navy-900 aspect-[4/4.8]">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=85"
                  alt="Specialist clinical doctor in modern medical facility consultation suite"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 dark:bg-navy-900/95 backdrop-blur-md border border-white/50 dark:border-slate-800 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/60 flex items-center justify-center text-brand-600 dark:text-brand-400 flex-shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-700 dark:text-brand-400">
                        Multidisciplinary Team Care
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                        Coordinated clinical review across medical specialties
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge Left */}
              <div className="hidden sm:flex absolute -left-6 top-1/4 p-3.5 rounded-2xl bg-white dark:bg-navy-850 shadow-xl border border-slate-100 dark:border-slate-800 items-center gap-3 animate-fade-in">
                <div className="w-10 h-10 rounded-xl bg-tealAccent-50 dark:bg-tealAccent-950/60 flex items-center justify-center text-tealAccent-600 dark:text-tealAccent-400 flex-shrink-0">
                  <Activity className="w-5 h-5" />
                </div>
                <div className="pr-2">
                  <p className="text-xs font-bold text-slate-900 dark:text-white">Advanced Diagnostics</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">High-resolution imaging suites</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Qualitative Trust/Support Row */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white dark:bg-navy-900/60 border border-slate-200/60 dark:border-slate-800/60 shadow-subtle">
              <div className="w-11 h-11 rounded-xl bg-brand-50 dark:bg-brand-950/60 flex items-center justify-center text-brand-600 dark:text-brand-400 flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">Specialist Teams</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Dedicated consultants across disciplines</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white dark:bg-navy-900/60 border border-slate-200/60 dark:border-slate-800/60 shadow-subtle">
              <div className="w-11 h-11 rounded-xl bg-brand-50 dark:bg-brand-950/60 flex items-center justify-center text-brand-600 dark:text-brand-400 flex-shrink-0">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">Advanced Diagnostics</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Integrated clinical evaluations</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white dark:bg-navy-900/60 border border-slate-200/60 dark:border-slate-800/60 shadow-subtle">
              <div className="w-11 h-11 rounded-xl bg-brand-50 dark:bg-brand-950/60 flex items-center justify-center text-brand-600 dark:text-brand-400 flex-shrink-0">
                <GitBranch className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">Coordinated Care</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Connected clinical pathways</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white dark:bg-navy-900/60 border border-slate-200/60 dark:border-slate-800/60 shadow-subtle">
              <div className="w-11 h-11 rounded-xl bg-brand-50 dark:bg-brand-950/60 flex items-center justify-center text-brand-600 dark:text-brand-400 flex-shrink-0">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">Patient Support</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Guidance through every step</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
