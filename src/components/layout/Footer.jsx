import React from 'react';
import {
  Activity,
  MapPin,
  Phone,
  Mail,
  ShieldAlert,
  ArrowUp,
} from 'lucide-react';
import { hospitalConfig } from '../../config/hospitalConfig';

// Inline SVGs for brand social icons (client-neutral, no extra dependency)
const SocialIcons = {
  Instagram: () => (
    <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  ),
  Facebook: () => (
    <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
      <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
    </svg>
  ),
  YouTube: () => (
    <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  ),
  LinkedIn: () => (
    <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  ),
  X: () => (
    <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
};

export function Footer({ onBookAppointment, onFindDoctor, onEmergencyClick }) {
  const { name, shortName, tagline, contact, social, disclaimer, emergency } =
    hospitalConfig;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'Instagram', url: social?.instagram, icon: SocialIcons.Instagram },
    { name: 'Facebook', url: social?.facebook, icon: SocialIcons.Facebook },
    { name: 'YouTube', url: social?.youtube, icon: SocialIcons.YouTube },
    { name: 'LinkedIn', url: social?.linkedin, icon: SocialIcons.LinkedIn },
    { name: 'X', url: social?.x, icon: SocialIcons.X },
  ].filter((s) => Boolean(s.url));

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-tealAccent-500 flex items-center justify-center text-white shadow-md">
                <Activity className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white font-heading">
                  {shortName}
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-brand-400 block -mt-1">
                  Specialist Hospital
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {tagline}
            </p>

            <p className="text-xs text-slate-400 leading-relaxed">
              A premium, client-neutral hospital website template designed for specialist healthcare institutions, clinical networks, and medical centers.
            </p>

            {/* Configured Social Icons only */}
            {socialLinks.length > 0 && (
              <div className="flex items-center gap-2 pt-2">
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-brand-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                      aria-label={s.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Quick Links: Hospital */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Hospital
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-brand-400 transition-colors">
                  About Our Hospital
                </a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-brand-400 transition-colors">
                  Clinical Specialties
                </a>
              </li>
              <li>
                <a href="#doctors" className="hover:text-brand-400 transition-colors">
                  Consultant Directory
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-brand-400 transition-colors">
                  Specialized Treatments
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-brand-400 transition-colors">
                  Campus Facilities
                </a>
              </li>
              <li>
                <a href="#patient-care" className="hover:text-brand-400 transition-colors">
                  Patient Services
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links: Patients */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Patient Care
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  type="button"
                  onClick={onBookAppointment}
                  className="hover:text-brand-400 transition-colors text-left"
                >
                  Book an Appointment
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onFindDoctor}
                  className="hover:text-brand-400 transition-colors text-left"
                >
                  Find a Specialist Doctor
                </button>
              </li>
              <li>
                <a href="#diagnostics" className="hover:text-brand-400 transition-colors">
                  Diagnostics & Imaging
                </a>
              </li>
              <li>
                <a href="#patient-care" className="hover:text-brand-400 transition-colors">
                  Insurance & Cashless Desk
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-brand-400 transition-colors">
                  Patient Educational Guides
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-brand-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact Desk
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                <span>{contact.location || 'YOUR HOSPITAL LOCATION'}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                <span>Outpatient: {contact.phone || 'YOUR PHONE'}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                <span>Inquiries: {contact.email || 'YOUR EMAIL'}</span>
              </div>
              {emergency?.enabled && (
                <div className="flex items-start gap-2.5 pt-1 text-rose-400 font-semibold">
                  <ShieldAlert className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span>
                    Emergency: {contact.emergencyPhone || 'YOUR EMERGENCY NUMBER'}
                  </span>
                </div>
              )}
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                aria-label="Back to top"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Return to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Medical & Legal Disclaimers (Section 42 & 43) */}
        <div className="py-8 border-b border-slate-800 space-y-3 text-xs text-slate-400 leading-relaxed">
          <p>
            <strong className="text-slate-300">Medical Disclaimer:</strong>{' '}
            {disclaimer.medical}
          </p>
          <p>
            <strong className="text-rose-400">Emergency Protocol:</strong>{' '}
            {disclaimer.emergency}
          </p>
          <p className="text-[11px] text-slate-400 italic">
            <strong>Template Certification Note:</strong> {disclaimer.templateNote}
          </p>
        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
          <div className="flex items-center gap-4 flex-wrap">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Accessibility Statement</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Patient Bill of Rights</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
