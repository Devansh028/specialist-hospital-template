/**
 * Diagnostics & Imaging Data
 * Reusable diagnostic service definitions.
 */

export const diagnostics = [
  {
    id: "clinical-laboratory",
    name: "Automated Clinical Laboratory",
    category: "Pathology & Biochemistry",
    shortDescription: "Complete hematology, clinical biochemistry, serology, and hormonal assay services.",
    fullDescription:
      "Our clinical pathology laboratory provides routine and specialized diagnostic testing. Samples are processed using automated analyzers under strict quality control standards, with digital reporting available for outpatient and inpatient care teams.",
    icon: "FlaskConical",
    preparationNotes: "Fasting required for select lipid and glucose profiles (8-10 hours).",
    turnaroundTime: "Routine tests available same day",
    commonTests: ["Complete Blood Count (CBC)", "Comprehensive Metabolic Panel", "Lipid Profile", "Thyroid Stimulating Hormone (TSH)", "HbA1c Glycemic Marker"],
  },
  {
    id: "digital-xray",
    name: "Digital Radiography (X-Ray)",
    category: "Radiology",
    shortDescription: "Low-dose digital imaging for chest, orthopedic, and skeletal evaluation.",
    fullDescription:
      "Digital X-ray technology produces instant, high-clarity skeletal and thoracic images while significantly reducing radiation exposure compared to conventional film radiography.",
    icon: "Scan",
    preparationNotes: "Remove jewelry and metallic accessories prior to examination.",
    turnaroundTime: "Images available immediately, report within 2 hours",
    commonTests: ["Chest PA / Lateral", "Spine Cervical / Lumbar Series", "Joint & Extremity Views", "Pelvis & Hip Series"],
  },
  {
    id: "ultrasound",
    name: "High-Resolution Ultrasound & Doppler",
    category: "Ultrasonography",
    shortDescription: "Non-invasive abdominal, pelvic, vascular, and soft-tissue ultrasound scans.",
    fullDescription:
      "Ultrasound utilizes sound waves without radiation to evaluate internal organs, vascular blood flow, thyroid morphology, and obstetric milestones in real time.",
    icon: "Activity",
    preparationNotes: "Full bladder required for pelvic scans; fasting for abdominal scans.",
    turnaroundTime: "Immediate doctor counseling, written report in 3 hours",
    commonTests: ["Whole Abdomen Ultrasound", "Pelvic & Obstetric Sonography", "Carotid Doppler", "Thyroid & Neck Ultrasound"],
  },
  {
    id: "ct-imaging",
    name: "Multi-Slice CT Imaging",
    category: "Advanced Imaging",
    shortDescription: "Detailed cross-sectional imaging for neurological, thoracic, and abdominal assessments.",
    fullDescription:
      "Multi-detector CT scanning provides volumetric, sub-millimeter anatomical cross-sections for rapid acute diagnostic evaluation and surgical planning.",
    icon: "Radio",
    preparationNotes: "Contrast studies may require recent kidney function (serum creatinine) results.",
    turnaroundTime: "Radiology review within 4-6 hours (urgent scans reviewed immediately)",
    commonTests: ["CT Brain / Stroke Protocol", "High-Resolution Chest CT (HRCT)", "Abdominopelvic CT with IV Contrast", "CT Angiography"],
  },
  {
    id: "mri-imaging",
    name: "High-Field MRI Neuro & Musculoskeletal",
    category: "Advanced Imaging",
    shortDescription: "Superior soft-tissue contrast imaging for brain, spine, joints, and soft tissue pathologies.",
    fullDescription:
      "Magnetic Resonance Imaging provides radiation-free multi-planar visualization of soft tissues, neural pathways, ligaments, and cartilage structures.",
    icon: "Cpu",
    preparationNotes: "Safety screening required for pacemakers, metallic implants, or clips.",
    turnaroundTime: "Specialist radiologist reporting within 6-12 hours",
    commonTests: ["Brain MRI with Diffusion", "Lumbar & Cervical Spine MRI", "Knee & Shoulder Joint MRI", "Pelvic Soft Tissue MRI"],
  },
  {
    id: "ecg-cardiac",
    name: "12-Lead Electrocardiography (ECG)",
    category: "Cardiology Diagnostics",
    shortDescription: "Rapid electrical rhythm mapping and conduction assessment for heart health.",
    fullDescription:
      "A fundamental first-line cardiac diagnostic tool, our digital 12-lead ECG machines capture resting rhythm patterns, conduction intervals, and ischemic signs in minutes.",
    icon: "HeartPulse",
    preparationNotes: "No special preparation required.",
    turnaroundTime: "Immediate tracing and on-site clinical review",
    commonTests: ["Resting 12-Lead ECG", "Rhythm Strip Monitoring", "Pre-Operative Clearance ECG"],
  },
  {
    id: "echocardiography",
    name: "2D Transthoracic Echocardiography",
    category: "Cardiology Diagnostics",
    shortDescription: "Live ultrasound evaluation of heart valves, chamber size, and ejection fraction.",
    fullDescription:
      "Color Doppler echocardiography assesses real-time ventricular contraction, valve hemodynamics, and cardiac chamber volumes without discomfort or radiation.",
    icon: "Heart",
    preparationNotes: "No fasting required. Comfortable clothing recommended.",
    turnaroundTime: "Report generated at consultation conclusion",
    commonTests: ["Transthoracic Echo (TTE)", "Color Doppler Flow Study", "Strain Imaging Evaluation"],
  },
  {
    id: "preventive-checkups",
    name: "Integrated Health Checkup Services",
    category: "Preventive Care",
    shortDescription: "Structured diagnostic profiling bundles tailored to age, lifestyle, and clinical indicators.",
    fullDescription:
      "Preventive diagnostic profiles combine blood biochemistry, imaging, and specialist consultations under an organized single-visit flow to support early clinical detection.",
    icon: "ShieldCheck",
    preparationNotes: "Overnight fasting (10-12 hours) typically recommended.",
    turnaroundTime: "Comprehensive physician review same day or next morning",
    commonTests: ["Executive Health Screen", "Senior Wellness Check", "Cardiac Risk Profile"],
  },
];
