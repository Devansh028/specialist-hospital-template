import React, { useState, useMemo } from 'react';
import { doctors } from '../data/doctors';
import { SectionHeading } from '../components/common/SectionHeading';
import { DoctorCard } from '../components/doctor/DoctorCard';
import { DoctorFilters } from '../components/doctor/DoctorFilters';
import { DoctorProfileModal } from '../components/doctor/DoctorProfileModal';

export function DoctorsSection({ onBookAppointment }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState('all');
  const [selectedConsultationType, setSelectedConsultationType] = useState('all');
  const [activeDoctor, setActiveDoctor] = useState(null);

  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    selectedSpecialty !== 'all' ||
    selectedExperience !== 'all' ||
    selectedConsultationType !== 'all';

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedSpecialty('all');
    setSelectedExperience('all');
    setSelectedConsultationType('all');
  };

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doc) => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = doc.name.toLowerCase().includes(q);
        const matchesSpecialty = doc.specialtyName.toLowerCase().includes(q);
        const matchesDepartment = doc.department.toLowerCase().includes(q);
        const matchesFocus = doc.areasOfFocus.some((f) => f.toLowerCase().includes(q));
        if (!matchesName && !matchesSpecialty && !matchesDepartment && !matchesFocus) {
          return false;
        }
      }

      // 2. Specialty Filter
      if (selectedSpecialty !== 'all' && doc.specialtyId !== selectedSpecialty) {
        return false;
      }

      // 3. Experience Filter
      if (selectedExperience !== 'all') {
        const minYears = parseInt(selectedExperience, 10);
        if (doc.experienceYears < minYears) return false;
      }

      // 4. Consultation Mode Filter
      if (selectedConsultationType === 'tele') {
        if (!doc.consultationType.toLowerCase().includes('teleconsultation')) {
          return false;
        }
      } else if (selectedConsultationType === 'in-person') {
        if (doc.consultationType.toLowerCase().includes('teleconsultation')) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedSpecialty, selectedExperience, selectedConsultationType]);

  return (
    <section
      id="doctors"
      aria-label="Find a Specialist Doctor"
      className="py-16 md:py-24 bg-white dark:bg-navy-950 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Specialist Directory"
          title="CONSULTANT MEDICAL FACULTY"
          subtitle="Discover experienced consultants across disciplines, review clinical focus areas, and schedule outpatient consultations."
        />

        {/* Filter & Search Bar */}
        <div className="max-w-4xl mx-auto mb-10">
          <DoctorFilters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedSpecialty={selectedSpecialty}
            onSpecialtyChange={setSelectedSpecialty}
            selectedExperience={selectedExperience}
            onExperienceChange={setSelectedExperience}
            selectedConsultationType={selectedConsultationType}
            onConsultationTypeChange={setSelectedConsultationType}
            onResetFilters={handleResetFilters}
            hasActiveFilters={hasActiveFilters}
          />
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onSelect={setActiveDoctor}
              onBookAppointment={onBookAppointment}
            />
          ))}
        </div>

        {/* Empty state */}
        {filteredDoctors.length === 0 && (
          <div className="text-center py-16 px-6 max-w-xl mx-auto rounded-3xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-slate-800">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">
              No specialists found.
            </h4>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Try adjusting your search criteria or resetting filters to see all available medical consultants.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="mt-5 btn-primary text-sm py-2 px-5"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      <DoctorProfileModal
        doctor={activeDoctor}
        isOpen={!!activeDoctor}
        onClose={() => setActiveDoctor(null)}
        onBookAppointment={onBookAppointment}
      />
    </section>
  );
}
