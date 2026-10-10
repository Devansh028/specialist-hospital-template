import React from 'react';
import {
  CheckCircle2,
  Users2,
  Building2,
  Heart,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { hospitalConfig } from '../config/hospitalConfig';
import { SectionHeading } from '../components/common/SectionHeading';

export function AboutSection({ onExploreSpecialties, onBookAppointment }) {
  const { shortName } = hospitalConfig;

  const features = [
    {
      title: 'Specialist-Led Care',
      desc: 'Experienced clinical consultants direct every diagnostic and treatment recommendation.',
    },
    {
      title: 'Multidisciplinary Collaboration',
      desc: 'Cross-department consultations ensure complex clinical situations receive thorough review.',
    },
    {
      title: 'Modern Clinical Facilities',
      desc: 'Dedicated diagnostic suites, outpatient consultation rooms, and monitored recovery spaces.',
    },
    {
      title: 'Patient-Centered Services',
      desc: 'From initial appointment scheduling to discharge planning, patient clarity comes first.',
    },
  ];

  return (
    <section
      id="about"
      aria-label="About Our Hospital"
      className="py-16 md:py-24 bg-slate-50 dark:bg-navy-900/60 border-y border-slate-200/60 dark:border-slate-800/60 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Side */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-navy-800 bg-slate-200 dark:bg-navy-950">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80"
                alt="Modern hospital reception and specialized patient consultation environment"
                className="w-full h-[460px] object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 dark:bg-navy-900/95 backdrop-blur-md border border-white/40 dark:border-slate-800 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-tealAccent-50 dark:bg-tealAccent-950/70 text-tealAccent-600 dark:text-tealAccent-400 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      Patient-First Philosophy
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      Transparent communication, clinical respect, and coordinated support at every touchpoint.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Top Badge */}
            <div className="hidden sm:flex absolute -top-5 -right-5 p-4 rounded-2xl bg-white dark:bg-navy-850 shadow-xl border border-slate-100 dark:border-slate-800 items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/70 text-brand-600 dark:text-brand-400 flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">Purpose-Built Facility</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Integrated medical architecture</p>
              </div>
            </div>
          </div>

          {/* Editorial Content Side */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <SectionHeading
              align="left"
              badge="About Our Organization"
              title="CARE BUILT AROUND PEOPLE."
              subtitle={`${shortName} is a fictional specialist hospital concept focused on bringing clinical expertise, modern facilities, and coordinated patient care together under one roof.`}
              className="mb-6"
            />

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              We believe healthcare achieves the highest standard when specialist consultation, non-invasive diagnostics, and personalized recovery roadmaps function in harmony. Rather than navigating fragmented appointments across multiple locations, our patients experience cohesive care tailored to their medical needs.
            </p>

            {/* 4 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {features.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-2xl bg-white dark:bg-navy-850 border border-slate-200/80 dark:border-slate-800/80 shadow-subtle flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-600 dark:text-brand-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                type="button"
                onClick={onExploreSpecialties}
                className="btn-primary"
              >
                <span>Explore Clinical Specialties</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onBookAppointment}
                className="btn-secondary"
              >
                <span>Book Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
