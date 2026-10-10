import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldAlert,
  Send,
  CheckCircle2,
  Navigation,
} from 'lucide-react';
import { hospitalConfig } from '../config/hospitalConfig';
import { SectionHeading } from '../components/common/SectionHeading';

export function ContactSection() {
  const { contact, map, emergency } = hospitalConfig;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Patient Enquiry',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Hospital Information"
      className="py-16 md:py-24 bg-white dark:bg-navy-950 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Hospital Directory"
          title="CONNECT WITH OUR TEAMS"
          subtitle="Reach out to our outpatient consultation desks, patient relations office, or emergency triage service."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-navy-900 border border-slate-200/80 dark:border-slate-800 shadow-subtle flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-brand-50 dark:bg-brand-950/70 text-brand-600 dark:text-brand-400 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs text-brand-600 dark:text-brand-400 mb-1">
                  Hospital Campus Location
                </h4>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {contact.location || 'YOUR HOSPITAL LOCATION'}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  (Client-neutral placeholder — editable in hospitalConfig.js)
                </p>
              </div>
            </div>

            {/* Telephone Card */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-navy-900 border border-slate-200/80 dark:border-slate-800 shadow-subtle flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-brand-50 dark:bg-brand-950/70 text-brand-600 dark:text-brand-400 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs text-brand-600 dark:text-brand-400 mb-1">
                  Outpatient Telephone & Helpline
                </h4>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {contact.phone || 'YOUR PHONE'}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Hours: {contact.hours}
                </p>
              </div>
            </div>

            {/* Email Desk */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-navy-900 border border-slate-200/80 dark:border-slate-800 shadow-subtle flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-brand-50 dark:bg-brand-950/70 text-brand-600 dark:text-brand-400 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs text-brand-600 dark:text-brand-400 mb-1">
                  General Inquiries Email
                </h4>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {contact.email || 'YOUR EMAIL'}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Responses typically coordinated within 1 business day.
                </p>
              </div>
            </div>

            {/* Emergency Hotline (if enabled) */}
            {emergency?.enabled && (
              <div className="p-6 rounded-2xl bg-rose-50/80 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60 shadow-subtle flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-rose-600 text-white flex items-center justify-center flex-shrink-0">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-rose-900 dark:text-rose-300 uppercase tracking-wider text-xs mb-1">
                    Emergency Triage Helpline
                  </h4>
                  <p className="text-base font-bold text-rose-800 dark:text-rose-200">
                    {contact.emergencyPhone || 'YOUR EMERGENCY NUMBER'}
                  </p>
                  <p className="text-xs text-rose-600/80 dark:text-rose-400 mt-1">
                    Immediate critical care coordination around the clock.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Contact Inquiry Form & Map */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-navy-900 border border-slate-200/80 dark:border-slate-800 shadow-card">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Send a Non-Urgent Hospital Inquiry
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                For medical emergencies, do NOT use this form. Please call the emergency desk or visit the triage unit.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-white dark:bg-navy-850 border border-slate-200 dark:border-slate-800 text-center space-y-3 animate-fade-in">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    Message Received (Demo Mode)
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    Your inquiry has been submitted in demonstration mode. No emails have been transmitted.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'General Patient Enquiry',
                        message: '',
                      });
                    }}
                    className="btn-secondary text-xs py-2 px-4 mt-2"
                  >
                    Send Another Demo Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Jane Smith"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-850 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="jane@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-850 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Contact Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-850 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Department / Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-850 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-500"
                      >
                        <option>General Patient Enquiry</option>
                        <option>Specialist Outpatient Booking</option>
                        <option>Diagnostic & Lab Tests</option>
                        <option>Insurance Desk & Billing</option>
                        <option>Feedback & Patient Relations</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Please write your inquiry here..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-850 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full py-3 text-sm flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Demo Inquiry</span>
                  </button>
                </form>
              )}
            </div>

            {/* Optional Map section */}
            {map?.enabled && map.embedUrl && (
              <div className="mt-8 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md">
                <iframe
                  title="Hospital Campus Location"
                  src={map.embedUrl}
                  className="w-full h-64 border-0"
                  loading="lazy"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
