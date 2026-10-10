import React, { useState } from 'react';
import { EmergencyBar } from './components/layout/EmergencyBar';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './sections/Hero';
import { QuickActions } from './sections/QuickActions';
import { TrustHighlights } from './sections/TrustHighlights';
import { AboutSection } from './sections/AboutSection';
import { SpecialtiesSection } from './sections/SpecialtiesSection';
import { TreatmentsSection } from './sections/TreatmentsSection';
import { DoctorsSection } from './sections/DoctorsSection';
import { PatientJourney } from './sections/PatientJourney';
import { DiagnosticsSection } from './sections/DiagnosticsSection';
import { FacilitiesSection } from './sections/FacilitiesSection';
import { PatientServicesSection } from './sections/PatientServicesSection';
import { HealthPackagesSection } from './sections/HealthPackagesSection';
import { InternationalPatientsSection } from './sections/InternationalPatientsSection';
import { GallerySection } from './sections/GallerySection';
import { TechnologySection } from './sections/TechnologySection';
import { EmergencySection } from './sections/EmergencySection';
import { HealthResourcesSection } from './sections/HealthResourcesSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { FAQSection } from './sections/FAQSection';
import { NewsSection } from './sections/NewsSection';
import { CtaBanner } from './sections/CtaBanner';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { AppointmentModal } from './components/appointment/AppointmentModal';
import { EmergencyModal } from './components/layout/EmergencyModal';
import { WhatsAppButton } from './components/layout/WhatsAppButton';

export function App() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [appointmentSpecialtyId, setAppointmentSpecialtyId] = useState('');
  const [appointmentDoctorId, setAppointmentDoctorId] = useState('');
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);

  const handleBookAppointment = (specialtyId = '', doctorId = '') => {
    setAppointmentSpecialtyId(specialtyId);
    setAppointmentDoctorId(doctorId);
    setIsAppointmentOpen(true);
  };

  const handleEmergencyClick = () => {
    setIsEmergencyOpen(true);
  };

  const handleScrollTo = (elementId) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-navy-950 text-slate-800 dark:text-slate-100 transition-colors duration-200">
      {/* 1. Emergency Care Strip */}
      <EmergencyBar onEmergencyClick={handleEmergencyClick} />

      {/* 2. Sticky Hospital Navbar */}
      <Navbar
        onBookAppointment={() => handleBookAppointment()}
        onEmergencyClick={handleEmergencyClick}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 3. Hero Section */}
        <Hero
          onBookAppointment={() => handleBookAppointment()}
          onExploreSpecialties={() => handleScrollTo('specialties')}
          onFindDoctor={() => handleScrollTo('doctors')}
        />

        {/* 4. Quick Action Grid */}
        <QuickActions
          onBookAppointment={() => handleBookAppointment()}
          onFindDoctor={() => handleScrollTo('doctors')}
          onExploreSpecialties={() => handleScrollTo('specialties')}
          onEmergencyClick={handleEmergencyClick}
          onExploreDiagnostics={() => handleScrollTo('diagnostics')}
          onContactClick={() => handleScrollTo('contact')}
        />

        {/* 5. Qualitative Trust Highlights */}
        <TrustHighlights />

        {/* 6. Editorial About Section */}
        <AboutSection
          onExploreSpecialties={() => handleScrollTo('specialties')}
          onBookAppointment={() => handleBookAppointment()}
        />

        {/* 7. Clinical Specialties & Filter */}
        <SpecialtiesSection onBookAppointment={handleBookAppointment} />

        {/* 8. Specialized Treatments & Pathways */}
        <TreatmentsSection onBookAppointment={handleBookAppointment} />

        {/* 9. Consultant Directory & Doctor Search */}
        <DoctorsSection onBookAppointment={handleBookAppointment} />

        {/* 10. The Patient Care Journey */}
        <PatientJourney onBookAppointment={() => handleBookAppointment()} />

        {/* 11. Diagnostics & Imaging */}
        <DiagnosticsSection onBookAppointment={() => handleBookAppointment()} />

        {/* 12. Facilities & Infrastructure */}
        <FacilitiesSection />

        {/* 13. Patient Support & Insurance Desk */}
        <PatientServicesSection
          onBookAppointment={() => handleBookAppointment()}
          onContactClick={() => handleScrollTo('contact')}
        />

        {/* 14. Optional Preventive Health Packages */}
        <HealthPackagesSection onBookAppointment={() => handleBookAppointment()} />

        {/* 15. Optional International Patients Desk */}
        <InternationalPatientsSection onBookAppointment={() => handleBookAppointment()} />

        {/* 16. Hospital Environment Gallery & Lightbox */}
        <GallerySection />

        {/* 17. Advanced Medical Technology */}
        <TechnologySection />

        {/* 18. Urgent Care & Emergency Section */}
        <EmergencySection onEmergencyClick={handleEmergencyClick} />

        {/* 19. Patient Health Educational Resources */}
        <HealthResourcesSection />

        {/* 20. Fictional Patient Experience Quotes */}
        <TestimonialsSection />

        {/* 21. Accessible FAQ Accordion */}
        <FAQSection />

        {/* 22. Hospital News & Bulletins */}
        <NewsSection />

        {/* 23. Conversion CTA Strip */}
        <CtaBanner
          onBookAppointment={() => handleBookAppointment()}
          onFindDoctor={() => handleScrollTo('doctors')}
        />

        {/* 24. Hospital Directory & Inquiries */}
        <ContactSection />
      </main>

      {/* 25. Comprehensive Footer */}
      <Footer
        onBookAppointment={() => handleBookAppointment()}
        onFindDoctor={() => handleScrollTo('doctors')}
        onEmergencyClick={handleEmergencyClick}
      />

      {/* Global Modals & Floating Tools */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        initialSpecialtyId={appointmentSpecialtyId}
        initialDoctorId={appointmentDoctorId}
      />

      <EmergencyModal
        isOpen={isEmergencyOpen}
        onClose={() => setIsEmergencyOpen(false)}
      />

      <WhatsAppButton />
    </div>
  );
}
