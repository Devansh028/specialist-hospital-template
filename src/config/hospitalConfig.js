/**
 * Central Hospital Configuration
 * 
 * Reusable client-neutral configuration.
 * A future client or agency can customize branding, contact info,
 * feature flags, and integrations from this single file.
 */

export const hospitalConfig = {
  // Brand Identity
  name: "MEDIVERA SPECIALIST HOSPITAL",
  shortName: "MEDIVERA",
  tagline: "Specialized Care. Advanced Expertise. Better Outcomes.",
  description:
    "A premium specialist hospital website template designed for advanced healthcare services, expert-led clinical teams, and patient-first care pathways.",

  // Contact Information (Configurable Placeholders)
  contact: {
    phone: "YOUR PHONE",
    email: "YOUR EMAIL",
    location: "YOUR HOSPITAL LOCATION",
    emergencyPhone: "YOUR EMERGENCY NUMBER",
    hours: "Emergency & Inpatient: 24/7 | Outpatient Consultations: Mon – Sat, 8:00 AM – 8:00 PM",
  },

  // Emergency Care Strip & Section
  emergency: {
    enabled: true,
    available24x7: true,
    phone: "YOUR EMERGENCY NUMBER",
    badgeText: "24/7 EMERGENCY CARE",
    description: "Rapid-response triage and acute stabilization teams ready around the clock.",
  },

  // Feature Toggles (Control section visibility and related CTAs/links)
  appointments: {
    enabled: true,
    allowDoctorSelection: true,
    allowDateSelection: true,
  },

  diagnostics: {
    enabled: true,
  },

  facilities: {
    enabled: true,
  },

  insurance: {
    enabled: true,
    notice: "Insurance and cashless payment options can vary by provider and service. Please contact our patient billing desk for current approvals.",
  },

  // Set to true to display the International Patient desk section
  internationalPatients: {
    enabled: false,
    deskEmail: "YOUR INTERNATIONAL DESK EMAIL",
  },

  healthPackages: {
    enabled: true,
  },

  news: {
    enabled: true,
  },

  gallery: {
    enabled: true,
  },

  // Floating WhatsApp Support
  whatsapp: {
    enabled: false,
    number: "",
    message: "Hello, I would like to enquire about an appointment.",
  },

  // Interactive Map Section
  map: {
    enabled: false,
    embedUrl: "",
  },

  // Social Channels (Only populated links will appear)
  social: {
    instagram: "",
    facebook: "",
    youtube: "",
    linkedin: "",
    x: "",
  },

  // Qualitative Trust Highlights (No fake metrics)
  highlights: [
    {
      id: "specialist-expertise",
      title: "Specialist Expertise",
      description: "Dedicated consultant teams across key medical and surgical disciplines.",
      icon: "ShieldCheck",
    },
    {
      id: "advanced-diagnostics",
      title: "Advanced Diagnostics",
      description: "Diagnostic imaging and lab services structured to support precise clinical evaluation.",
      icon: "Activity",
    },
    {
      id: "coordinated-care",
      title: "Coordinated Care",
      description: "Unified patient navigation connecting outpatient consultation, imaging, and treatment.",
      icon: "GitBranch",
    },
    {
      id: "patient-support",
      title: "Patient Support",
      description: "Compassionate guidance, transparent counseling, and structured follow-up care.",
      icon: "HeartHandshake",
    },
  ],

  // Disclaimer text
  disclaimer: {
    medical:
      "Information presented on this website is for general informational purposes only and should not be considered medical advice, diagnosis, or treatment. For medical concerns, always consult a qualified healthcare professional.",
    emergency:
      "For urgent or life-threatening medical situations, seek immediate medical attention or contact your local emergency response service immediately.",
    templateNote:
      "This website template contains fictional/demo content designed for web development agencies and healthcare organizations.",
  },
};
