/**
 * Frequently Asked Questions
 * Informative, client-neutral questions aligned with hospital template architecture.
 */

export const faqs = [
  {
    id: "faq-booking",
    question: "How do I book an appointment?",
    answer:
      "You can request an appointment online using our interactive 5-step booking flow above. Simply select your desired medical specialty, choose an available specialist, pick your preferred date and time slot, and submit your contact details. Our patient coordination desk will contact you to confirm.",
    category: "Appointments",
  },
  {
    id: "faq-doctor-choice",
    question: "Can I choose a specific doctor?",
    answer:
      "Yes. Our doctor directory allows you to browse specialists by clinical department, experience, and consultation type (in-person or teleconsultation). You can directly select your preferred specialist when booking.",
    category: "Doctors",
  },
  {
    id: "faq-find-specialty",
    question: "How do I find the right specialty for my symptoms?",
    answer:
      "You can explore our Specialties section to review common conditions and diagnostic services evaluated by each department. If you are unsure which specialty is appropriate, our general patient helpline can assist with guidance.",
    category: "Specialties",
  },
  {
    id: "faq-referral",
    question: "Do I need a physician referral before booking?",
    answer:
      "Referral requirements vary depending on your specific healthcare insurance plan and the medical specialty you wish to consult. While direct outpatient appointments are accepted for most specialties, checking with your insurance provider is recommended.",
    category: "General",
  },
  {
    id: "faq-what-to-bring",
    question: "What should I bring to my specialist consultation?",
    answer:
      "We recommend bringing government-issued identification, current health insurance information, a complete list of current medications with dosages, and any prior diagnostic imaging disks, blood work reports, or clinical discharge summaries.",
    category: "Appointments",
  },
  {
    id: "faq-diagnostics",
    question: "Do you offer on-site diagnostic and imaging services?",
    answer:
      "Yes. Diagnostic availability is coordinated directly on-site, including digital radiography, high-resolution ultrasound, 12-lead ECG, 2D echocardiography, and automated clinical laboratory testing to streamline patient visits.",
    category: "Diagnostics",
    requiresFeature: "diagnostics",
  },
  {
    id: "faq-insurance",
    question: "Do you accept health insurance and cashless payments?",
    answer:
      "Insurance coverage and cashless hospitalization policies vary based on individual policies and clinical services. Our dedicated insurance desk assists with policy verification, pre-authorization forms, and itemized billing documentation.",
    category: "Billing & Insurance",
    requiresFeature: "insurance",
  },
  {
    id: "faq-emergency",
    question: "Is emergency care available around the clock?",
    answer:
      "When emergency services are configured for this hospital facility, the triage and acute stabilization teams operate 24 hours a day, 7 days a week. For immediate life-threatening situations, contact your local municipal emergency number without delay.",
    category: "Emergency",
    requiresFeature: "emergency",
  },
  {
    id: "faq-international",
    question: "Can international or outstation patients seek coordinated care?",
    answer:
      "When the international patient desk is active, our dedicated liaison team assists with remote case review, specialized appointment scheduling, travel guidance, and lodging suggestions for visiting families.",
    category: "International",
    requiresFeature: "internationalPatients",
  },
];
