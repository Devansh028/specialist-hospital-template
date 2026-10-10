import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Calendar,
  PhoneCall,
  Activity,
  HeartHandshake,
  ShieldAlert,
  ChevronRight,
} from 'lucide-react';
import { hospitalConfig } from '../../config/hospitalConfig';
import { ThemeToggle } from './ThemeToggle';

export function Navbar({ onBookAppointment, onEmergencyClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { name, shortName, emergency, appointments } = hospitalConfig;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Specialties', href: '#specialties' },
    { label: 'Doctors', href: '#doctors' },
    { label: 'Treatments', href: '#treatments' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Patient Care', href: '#patient-care' },
    { label: 'Resources', href: '#resources' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    setMobileMenuOpen(false);
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-navy-900/95 backdrop-blur-md shadow-md border-b border-slate-200/80 dark:border-slate-800/80 py-3'
          : 'bg-white/90 dark:bg-navy-950/90 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg p-1"
            aria-label={`${name} Home`}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-700 to-brand-500 flex items-center justify-center text-white shadow-md shadow-brand-600/20 group-hover:scale-105 transition-transform duration-200">
              <Activity className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white font-heading">
                {shortName}
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-brand-600 dark:text-brand-400 -mt-1">
                Specialist Hospital
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden xl:flex items-center gap-1 2xl:gap-2 text-sm font-medium text-slate-600 dark:text-slate-300"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-2 rounded-lg hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100/70 dark:hover:bg-navy-800/70 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />

            {/* Emergency CTA button if enabled */}
            {emergency?.enabled && (
              <button
                type="button"
                onClick={onEmergencyClick}
                className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900/60 rounded-xl hover:bg-rose-100 dark:hover:bg-rose-900/80 transition-colors"
                aria-label="Emergency guidance"
              >
                <ShieldAlert className="w-3.5 h-3.5" />
                Emergency
              </button>
            )}

            {/* Book Appointment CTA */}
            {appointments?.enabled && (
              <button
                type="button"
                onClick={onBookAppointment}
                className="btn-primary py-2.5 px-5 text-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            )}
          </div>

          {/* Mobile Action Cluster */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />

            {appointments?.enabled && (
              <button
                type="button"
                onClick={onBookAppointment}
                className="px-3 py-1.5 rounded-lg bg-brand-600 text-white text-xs font-semibold shadow-sm hover:bg-brand-700 active:bg-brand-800 transition-colors"
                aria-label="Book Appointment"
              >
                Book
              </button>
            )}

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white/98 dark:bg-navy-900/98 backdrop-blur-xl animate-fade-in shadow-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-4">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-brand-50 dark:hover:bg-navy-800 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3">
              {appointments?.enabled && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookAppointment();
                  }}
                  className="w-full btn-primary py-3"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </button>
              )}

              {emergency?.enabled && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onEmergencyClick();
                  }}
                  className="w-full btn-emergency py-3 text-sm"
                >
                  <ShieldAlert className="w-4 h-4" />
                  <span>24/7 Emergency Assistance</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
