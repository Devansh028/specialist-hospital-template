import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  User,
  Stethoscope,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  AlertCircle,
  FileText,
  Mail,
  Phone,
} from 'lucide-react';
import { Modal } from '../common/Modal';
import { DoctorAvatar } from '../common/DoctorAvatar';
import { specialties } from '../../data/specialties';
import { doctors } from '../../data/doctors';

export function AppointmentModal({
  isOpen,
  onClose,
  initialSpecialtyId = '',
  initialDoctorId = '',
}) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    specialtyId: initialSpecialtyId || '',
    doctorId: initialDoctorId || '',
    preferredDate: '',
    preferredTime: '',
    fullName: '',
    phone: '',
    email: '',
    dateOfBirth: '',
    reasonForVisit: '',
  });

  const [errors, setErrors] = useState({});

  // Reset or initialize when opened
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setCurrentStep(1);
      setErrors({});
      setFormData((prev) => ({
        ...prev,
        specialtyId: initialSpecialtyId || prev.specialtyId || specialties[0]?.id || '',
        doctorId: initialDoctorId || '',
      }));
    }
  }, [isOpen, initialSpecialtyId, initialDoctorId]);

  // Filter available doctors for the chosen specialty
  const availableDoctors = doctors.filter(
    (doc) => !formData.specialtyId || doc.specialtyId === formData.specialtyId
  );

  // Available Time Slots
  const timeSlots = [
    '09:00 AM – 09:30 AM',
    '10:00 AM – 10:30 AM',
    '11:30 AM – 12:00 PM',
    '02:00 PM – 02:30 PM',
    '03:30 PM – 04:00 PM',
    '04:30 PM – 05:00 PM',
  ];

  // Helper validation per step
  const validateStep = (step) => {
    const errs = {};
    if (step === 1 && !formData.specialtyId) {
      errs.specialtyId = 'Please select a clinical specialty.';
    }
    if (step === 2 && !formData.doctorId) {
      errs.doctorId = 'Please select a specialist doctor (or choose Any Consultant).';
    }
    if (step === 3 && !formData.preferredDate) {
      errs.preferredDate = 'Please select a preferred date.';
    }
    if (step === 4 && !formData.preferredTime) {
      errs.preferredTime = 'Please select a consultation time slot.';
    }
    if (step === 5) {
      if (!formData.fullName.trim()) errs.fullName = 'Full name is required.';
      if (!formData.phone.trim()) errs.phone = 'Phone number is required.';
      if (!formData.email.trim()) {
        errs.email = 'Email address is required.';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errs.email = 'Please enter a valid email address.';
      }
      if (!formData.reasonForVisit.trim()) {
        errs.reasonForVisit = 'Please provide a brief reason for visit.';
      }
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(5)) {
      // In a real application, call your booking API here
      setIsSubmitted(true);
    }
  };

  const selectedSpecialtyObj = specialties.find((s) => s.id === formData.specialtyId);
  const selectedDoctorObj = doctors.find((d) => d.id === formData.doctorId);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isSubmitted ? 'Appointment Request Received' : 'Schedule a Specialist Consultation'}
      subtitle={
        isSubmitted
          ? 'Front-End Demonstration Confirmation'
          : `Step ${currentStep} of 5 — Patient Care Navigation`
      }
      maxWidth="max-w-3xl"
      ariaLabel="Specialist Appointment Booking"
    >
      {isSubmitted ? (
        /* Submission Success Demo View */
        <div className="py-6 text-center space-y-5 animate-fade-in">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center shadow-md">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div className="max-w-md mx-auto space-y-2">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white">
              Request Successfully Recorded
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Your appointment request has been received. This is a demo website, so no real appointment has been created.
            </p>
          </div>

          {/* Submitted Summary Card */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-navy-850 border border-slate-200/80 dark:border-slate-800 text-left max-w-lg mx-auto text-xs sm:text-sm space-y-2">
            <div className="flex justify-between py-1 border-b border-slate-200/60 dark:border-slate-800">
              <span className="text-slate-500">Patient:</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {formData.fullName}
              </span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-200/60 dark:border-slate-800">
              <span className="text-slate-500">Department:</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {selectedSpecialtyObj?.name || 'Any Department'}
              </span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-200/60 dark:border-slate-800">
              <span className="text-slate-500">Specialist:</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {selectedDoctorObj?.name || 'Next Available Specialist'}
              </span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-500">Requested Time:</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {formData.preferredDate} ({formData.preferredTime})
              </span>
            </div>
          </div>

          <div className="pt-4 flex justify-center">
            <button
              type="button"
              onClick={onClose}
              className="btn-primary text-sm py-2.5 px-6"
            >
              Close Booking Window
            </button>
          </div>
        </div>
      ) : (
        /* Multi-step Flow */
        <div className="space-y-6">
          {/* Progress Indicators */}
          <div className="grid grid-cols-5 gap-2 pb-2">
            {[1, 2, 3, 4, 5].map((step) => (
              <div key={step} className="flex flex-col items-center">
                <div
                  className={`w-full h-1.5 rounded-full transition-colors ${
                    step <= currentStep
                      ? 'bg-brand-600 dark:bg-brand-500'
                      : 'bg-slate-200 dark:bg-navy-800'
                  }`}
                />
                <span
                  className={`text-[10px] sm:text-xs mt-1.5 font-semibold hidden sm:inline ${
                    step === currentStep
                      ? 'text-brand-600 dark:text-brand-400'
                      : 'text-slate-400'
                  }`}
                >
                  {step === 1 && 'Specialty'}
                  {step === 2 && 'Doctor'}
                  {step === 3 && 'Date'}
                  {step === 4 && 'Time'}
                  {step === 5 && 'Patient'}
                </span>
              </div>
            ))}
          </div>

          {/* STEP 1: Choose Specialty */}
          {currentStep === 1 && (
            <div className="space-y-4 animate-fade-in">
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Step 1: Choose Medical Specialty
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Select the clinical department best matched to your healthcare concern.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-72 overflow-y-auto pr-1">
                {specialties.map((spec) => {
                  const isSelected = formData.specialtyId === spec.id;
                  return (
                    <div
                      key={spec.id}
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          specialtyId: spec.id,
                          doctorId: '', // Reset doctor if specialty changed
                        }));
                        setErrors({});
                      }}
                      className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all flex items-center justify-between ${
                        isSelected
                          ? 'border-brand-600 bg-brand-50/70 dark:bg-brand-950/60 dark:border-brand-500'
                          : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-navy-850 hover:border-slate-300'
                      }`}
                    >
                      <div>
                        <p className="text-sm font-bold text-slate-900 dark:text-white">
                          {spec.name}
                        </p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                          {spec.shortDescription}
                        </p>
                      </div>
                      {isSelected && (
                        <CheckCircle2 className="w-5 h-5 text-brand-600 dark:text-brand-400 flex-shrink-0" />
                      )}
                    </div>
                  );
                })}
              </div>
              {errors.specialtyId && (
                <p className="text-xs text-rose-500">{errors.specialtyId}</p>
              )}
            </div>
          )}

          {/* STEP 2: Choose Doctor */}
          {currentStep === 2 && (
            <div className="space-y-4 animate-fade-in">
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Step 2: Choose Specialist Doctor
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Showing consultants available under {selectedSpecialtyObj?.name || 'Selected Specialty'}.
                </p>
              </div>

              <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
                {/* General Option: Any Consultant */}
                <div
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, doctorId: 'any' }));
                    setErrors({});
                  }}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                    formData.doctorId === 'any'
                      ? 'border-brand-600 bg-brand-50/70 dark:bg-brand-950/60 dark:border-brand-500'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-navy-850'
                  }`}
                >
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      Next Available Specialist Consultant
                    </p>
                    <p className="text-xs text-slate-500">
                      Our triage desk will match the earliest opening with the appropriate consultant.
                    </p>
                  </div>
                  {formData.doctorId === 'any' && (
                    <CheckCircle2 className="w-5 h-5 text-brand-600 dark:text-brand-400 flex-shrink-0" />
                  )}
                </div>

                {availableDoctors.map((doc) => {
                  const isSelected = formData.doctorId === doc.id;
                  return (
                    <div
                      key={doc.id}
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, doctorId: doc.id }));
                        setErrors({});
                      }}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                        isSelected
                          ? 'border-brand-600 bg-brand-50/70 dark:bg-brand-950/60 dark:border-brand-500'
                          : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-navy-850'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                          <DoctorAvatar
                            src={doc.avatar}
                            name={doc.name}
                            alt={doc.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900 dark:text-white">
                            {doc.name}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            {doc.role} • {doc.availability}
                          </p>
                        </div>
                      </div>
                      {isSelected && (
                        <CheckCircle2 className="w-5 h-5 text-brand-600 dark:text-brand-400 flex-shrink-0" />
                      )}
                    </div>
                  );
                })}
              </div>
              {errors.doctorId && (
                <p className="text-xs text-rose-500">{errors.doctorId}</p>
              )}
            </div>
          )}

          {/* STEP 3: Choose Date */}
          {currentStep === 3 && (
            <div className="space-y-4 animate-fade-in">
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Step 3: Select Preferred Date
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Choose a preferred outpatient day for your visit.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Consultation Date
                </label>
                <input
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.preferredDate}
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, preferredDate: e.target.value }));
                    setErrors({});
                  }}
                  className="w-full sm:w-80 px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-850 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-500"
                />
                {errors.preferredDate && (
                  <p className="text-xs text-rose-500 mt-1">{errors.preferredDate}</p>
                )}
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-850 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-500">
                <p className="font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Outpatient Clinic Schedule:
                </p>
                <p>
                  Consultation clinics operate Monday through Saturday. Emergency triage remains open 24/7.
                </p>
              </div>
            </div>
          )}

          {/* STEP 4: Choose Time */}
          {currentStep === 4 && (
            <div className="space-y-4 animate-fade-in">
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Step 4: Select Preferred Time Window
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Pick a preferred consultation block for {formData.preferredDate || 'your chosen date'}.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {timeSlots.map((slot) => {
                  const isSelected = formData.preferredTime === slot;
                  return (
                    <div
                      key={slot}
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, preferredTime: slot }));
                        setErrors({});
                      }}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                        isSelected
                          ? 'border-brand-600 bg-brand-50/70 dark:bg-brand-950/60 dark:border-brand-500'
                          : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-navy-850 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Clock className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                        <span className="text-sm font-semibold text-slate-900 dark:text-white">
                          {slot}
                        </span>
                      </div>
                      {isSelected && (
                        <CheckCircle2 className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                      )}
                    </div>
                  );
                })}
              </div>
              {errors.preferredTime && (
                <p className="text-xs text-rose-500">{errors.preferredTime}</p>
              )}
            </div>
          )}

          {/* STEP 5: Patient Information & Final Submission */}
          {currentStep === 5 && (
            <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Step 5: Patient Information & Reason for Visit
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Please provide primary contact information for appointment confirmation.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, fullName: e.target.value }))
                    }
                    placeholder="e.g. John Doe"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-850 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-500"
                  />
                  {errors.fullName && (
                    <p className="text-xs text-rose-500 mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, phone: e.target.value }))
                    }
                    placeholder="e.g. +1 (555) 000-0000"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-850 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-500"
                  />
                  {errors.phone && (
                    <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, email: e.target.value }))
                    }
                    placeholder="e.g. patient@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-850 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-500"
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-500 mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, dateOfBirth: e.target.value }))
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-850 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>

              {/* Reason for Visit */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Primary Symptoms / Reason for Visit *
                </label>
                <textarea
                  rows={3}
                  value={formData.reasonForVisit}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, reasonForVisit: e.target.value }))
                  }
                  placeholder="Describe your health concern, symptoms, or previous diagnosis..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-850 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-500"
                />
                {errors.reasonForVisit && (
                  <p className="text-xs text-rose-500 mt-1">{errors.reasonForVisit}</p>
                )}
              </div>

              {/* Demo Notice */}
              <div className="p-3.5 rounded-xl bg-brand-50 dark:bg-navy-950 border border-brand-100 dark:border-brand-900/40 text-xs text-slate-600 dark:text-slate-400">
                <p>
                  <strong>Template Notice:</strong> Submitting this form displays front-end demo confirmation. No patient health records or medical slots are transmitted.
                </p>
              </div>
            </form>
          )}

          {/* Modal Navigation Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="btn-secondary py-2 px-4 text-xs sm:text-sm"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="py-2 px-3 text-xs sm:text-sm text-slate-500 hover:text-slate-800 dark:hover:text-white"
              >
                Cancel
              </button>

              {currentStep < 5 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="btn-primary py-2 px-5 text-xs sm:text-sm"
                >
                  <span>Continue</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="btn-primary py-2 px-6 text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800"
                >
                  <span>Request Appointment</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}
