/**
 * Specialized Treatments Data
 * Informational descriptions of clinical treatment areas and typical pathways.
 * No outcome guarantees or superiority claims.
 */

export const treatments = [
  {
    id: "cardiac-care",
    title: "Comprehensive Cardiac Care",
    specialty: "Cardiology",
    specialtyId: "cardiology",
    shortDescription: "Structured diagnostic, medical, and interventional cardiology referral pathways.",
    overview:
      "Our cardiac care framework coordinates initial risk assessment, diagnostic imaging, and post-procedure rehabilitation. Treatment pathways are customized based on clinical severity and physician recommendations.",
    typicalPathway: [
      { step: "01", phase: "Clinical Consultation", desc: "Thorough cardiovascular assessment and family history review." },
      { step: "02", phase: "Diagnostic Profiling", desc: "Non-invasive ECG, 2D echo, and stress testing evaluation." },
      { step: "03", phase: "Treatment Planning", desc: "Evidence-based medical management or interventional referral." },
      { step: "04", phase: "Recovery & Follow-Up", desc: "Monitored recovery and guided cardiac lifestyle coaching." },
    ],
    relatedDiagnostics: ["12-Lead ECG", "2D Echocardiogram", "Cardiac Stress Test"],
    suitableFor: "Patients with cardiovascular symptoms, high blood pressure, or established heart disease.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "joint-care",
    title: "Joint Care & Mobility Pathways",
    specialty: "Orthopedics & Joint Care",
    specialtyId: "orthopedics",
    shortDescription: "Multidisciplinary evaluation for degenerative joint conditions, cartilage strain, and mobility preservation.",
    overview:
      "Our joint care pathway prioritizes non-surgical rehabilitation, joint injections, and patient education. When advanced interventions are required, care is closely coordinated with post-procedure physiotherapy.",
    typicalPathway: [
      { step: "01", phase: "Musculoskeletal Assessment", desc: "Detailed joint range-of-motion and pain mapping." },
      { step: "02", phase: "High-Resolution Imaging", desc: "Digital X-rays and MRI studies to evaluate joint architecture." },
      { step: "03", phase: "Coordinated Care Plan", desc: "Therapeutic joint injections or structured physiotherapy." },
      { step: "04", phase: "Functional Rehabilitation", desc: "Personalized muscle strengthening and mobility training." },
    ],
    relatedDiagnostics: ["Digital Musculoskeletal X-Ray", "Joint Ultrasound", "MRI Scan"],
    suitableFor: "Individuals experiencing knee, hip, shoulder pain, or joint stiffness.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "minimally-invasive-surgery",
    title: "Minimally Invasive Surgical Evaluation",
    specialty: "Surgical Specialties",
    specialtyId: "gastroenterology",
    shortDescription: "Consultative pathways evaluating laparoscopic and keyhole surgical approaches for clinical conditions.",
    overview:
      "Minimally invasive techniques are evaluated to minimize tissue disruption, decrease hospital recovery periods, and improve surgical comfort under the care of certified surgical teams.",
    typicalPathway: [
      { step: "01", phase: "Surgical Assessment", desc: "Evaluation of clinical indications and surgical eligibility." },
      { step: "02", phase: "Pre-Operative Clearance", desc: "Cardiovascular, pulmonary, and anesthetic risk workups." },
      { step: "03", phase: "Clinical Procedure", desc: "Execution in modern surgical suites with specialized laparoscopic towers." },
      { step: "04", phase: "Post-Surgical Monitoring", desc: "Graduated mobilization and step-down room recovery." },
    ],
    relatedDiagnostics: ["Abdominal CT / Ultrasound", "Routine Pre-Op Blood Panel", "Anesthesia Clearance Workup"],
    suitableFor: "Patients with indicated gallbladder, hernia, or select abdominal conditions.",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "cancer-care",
    title: "Oncology Support & Multidisciplinary Care",
    specialty: "Oncology Care Support",
    specialtyId: "oncology",
    shortDescription: "Comprehensive clinical consultation, second-opinion tumor boards, and supportive palliative navigation.",
    overview:
      "A structured approach bringing together oncologists, clinical nutritionists, and supportive care counselors. We focus on patient-first clarity, transparent discussions, and coordinated scheduling.",
    typicalPathway: [
      { step: "01", phase: "Multidisciplinary Review", desc: "Collaborative case review and staging evaluation." },
      { step: "02", phase: "Diagnostic Confirmation", desc: "Histopathology, immunohistochemistry, and radiological staging." },
      { step: "03", phase: "Structured Treatment Plan", desc: "Systemic therapy administration and symptom mitigation." },
      { step: "04", phase: "Survivorship & Care Support", desc: "Nutritional support, pain management, and regular surveillance." },
    ],
    relatedDiagnostics: ["PET/CT Coordination", "Histopathology Biopsy", "Tumor Marker Profiles"],
    suitableFor: "Patients needing oncology guidance, secondary opinions, or supportive therapy.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "neurological-care",
    title: "Neurological Disorder Management",
    specialty: "Neurology",
    specialtyId: "neurology",
    shortDescription: "Diagnostic evaluation and chronic care pathways for cognitive, peripheral, and vascular neurological concerns.",
    overview:
      "Our neurological care program combines precise neuro-electrophysiology testing with targeted clinical pharmacology and neuro-rehabilitation therapy to support quality of life.",
    typicalPathway: [
      { step: "01", phase: "Neurological Examination", desc: "Cognitive, cranial nerve, motor, and sensory assessments." },
      { step: "02", phase: "Electrophysiology Studies", desc: "EEG, nerve conduction studies, or high-definition MRI." },
      { step: "03", phase: "Individualized Therapy", desc: "Pharmacological optimization and lifestyle trigger management." },
      { step: "04", phase: "Follow-Up Surveillance", desc: "Periodic review of symptom control and functional progression." },
    ],
    relatedDiagnostics: ["Digital EEG", "Nerve Conduction Studies", "Brain & Spine MRI"],
    suitableFor: "Patients dealing with recurrent migraines, neuropathy, or movement difficulties.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "digestive-procedures",
    title: "Gastrointestinal Diagnostic & Therapeutic Procedures",
    specialty: "Gastroenterology",
    specialtyId: "gastroenterology",
    shortDescription: "Advanced upper endoscopy, colonoscopy coordination, and mucosal evaluation services.",
    overview:
      "Conducted in dedicated endoscopy suites under conscious sedation, our GI evaluation protocols assist in diagnosing digestive tract issues, acid reflux damage, and mucosal irregularities.",
    typicalPathway: [
      { step: "01", phase: "GI Consultation", desc: "Review of digestive symptoms and prior medication history." },
      { step: "02", phase: "Pre-Procedure Prep", desc: "Clear dietary instructions and prep protocol guidance." },
      { step: "03", phase: "Endoscopic Procedure", desc: "Gentle video examination with real-time photographic documentation." },
      { step: "04", phase: "Report Review", desc: "Immediate recovery monitoring and detailed result counseling." },
    ],
    relatedDiagnostics: ["Upper GI Endoscopy", "Diagnostic Colonoscopy", "Abdominal Ultrasound"],
    suitableFor: "Individuals with unexplained dyspepsia, altered bowel habits, or reflux.",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
  },
];
