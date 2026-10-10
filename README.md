# MEDIVERA SPECIALIST HOSPITAL — Reusable Website Template

> **"Specialized Care. Advanced Expertise. Better Outcomes."**

A complete, modern, accessible, and conversion-focused **Specialist Hospital Website Template** built with **React.js**, **JavaScript**, **Vite**, **Tailwind CSS**, and **Lucide React**.

Designed specifically as a **reusable template for professional web development agencies** building websites for:
* Multispecialty & super-specialty hospitals
* Private hospitals & surgical centers
* Advanced care healthcare networks
* Specialty hospitals (Cardiology, Orthopedics, Oncology, Women's & Children's, Neurology)

---

## 🚀 Key Features

* **100% Client-Neutral:** All branding, contact info, doctors, specialties, treatments, facilities, FAQs, and testimonials are driven by central configuration and data files. Zero hardcoded real addresses or phone numbers.
* **Light / Dark Mode:** Complete healthcare-tailored light and dark themes with system preference detection, `localStorage` persistence, and anti-flicker protection.
* **5-Step Appointment Booking Wizard:** Interactive modal allowing patients to choose Specialty → Doctor → Date → Time → Enter Information with immediate demo validation and confirmation.
* **Specialist Directory & Search:** Real-time doctor search with filters for Department/Specialty, Experience level, and Consultation Mode (In-Person vs. Teleconsultation).
* **12 Clinical Specialties with Category Filter:** Complete with dedicated Specialty Detail Modals showing common services, conditions evaluated, and diagnostic links.
* **Care Pathways & Treatments:** Step-by-step clinical pathways (Consultation → Diagnostics → Treatment → Recovery) without false medical outcome guarantees.
* **24/7 Emergency Care:** Highly visible emergency bar and Emergency Guidance Modal with triage information and configurable phone placeholders.
* **Interactive Campus Gallery:** Filterable categories with fullscreen keyboard-accessible Lightbox (Esc, arrow keys).
* **Diagnostics & Imaging Showcase:** Automated clinical laboratory, digital X-ray, ultrasound, CT, MRI, ECG, and echocardiography details with test preparation guidelines.
* **Patient Care & Insurance Support:** Financial guidance, cashless authorization support, and hospital services.
* **Health Checkup Packages:** Preventive profiling cards with test parameters and scheduling CTAs.
* **Accessible & SEO Ready:** Semantic HTML5, ARIA labels, focus traps in modals, keyboard navigation, Open Graph tags, sitemap, and robots.txt.

---

## 📂 Project Architecture

```text
src/
├── config/
│   └── hospitalConfig.js          # Central configuration & feature toggles
├── data/
│   ├── specialties.js             # 12 medical specialties & filter categories
│   ├── doctors.js                 # Fictional doctor directory & clinical profiles
│   ├── treatments.js              # Specialized treatment care pathways
│   ├── diagnostics.js             # Diagnostics, imaging & lab services
│   ├── facilities.js              # Hospital infrastructure & amenities
│   ├── patientServices.js         # Patient care services & insurance support
│   ├── healthPackages.js          # Preventive health checkup packages
│   ├── healthResources.js         # Educational patient guides & articles
│   ├── testimonials.js            # Fictional demo patient feedback
│   ├── faqs.js                    # Frequently asked questions
│   ├── gallery.js                 # Hospital photography & categories
│   └── news.js                    # Bulletins & clinical updates
├── hooks/
│   └── useTheme.js                # Theme hook (light/dark with persistence)
├── utils/
│   └── cn.js                      # Class concatenation helper
├── components/
│   ├── common/                    # SectionHeading, Modal (accessible with focus trap)
│   ├── layout/                    # Navbar, EmergencyBar, Footer, ThemeToggle, WhatsAppButton, EmergencyModal
│   ├── specialty/                 # SpecialtyCard, SpecialtyFilter, SpecialtyModal
│   ├── treatment/                 # TreatmentCard, TreatmentModal
│   ├── doctor/                    # DoctorCard, DoctorFilters, DoctorProfileModal
│   ├── appointment/               # 5-step AppointmentModal wizard
│   ├── diagnostics/               # DiagnosticCard, DiagnosticModal
│   ├── gallery/                   # Lightbox
│   └── resources/                 # HealthResourceCard, ResourceModal
├── sections/
│   ├── Hero.jsx                   # Premium hero section with qualitative trust row
│   ├── QuickActions.jsx           # 6-item quick navigation cards
│   ├── TrustHighlights.jsx        # Qualitative clinical highlights (no fake numbers)
│   ├── AboutSection.jsx           # Mission, vision, and 4 clinical pillars
│   ├── SpecialtiesSection.jsx     # Filterable specialties grid & detail modals
│   ├── TreatmentsSection.jsx      # Care pathways & treatment modals
│   ├── DoctorsSection.jsx         # Consultant directory & live search
│   ├── PatientJourney.jsx         # 5-step visual clinical journey
│   ├── DiagnosticsSection.jsx     # Imaging & diagnostic services
│   ├── FacilitiesSection.jsx      # Purpose-built facilities
│   ├── PatientServicesSection.jsx # Patient support & insurance desk
│   ├── HealthPackagesSection.jsx  # Preventive packages
│   ├── InternationalPatientsSection.jsx # Optional global desk
│   ├── GallerySection.jsx         # Filterable gallery & lightbox
│   ├── TechnologySection.jsx      # Medical equipment & monitoring
│   ├── EmergencySection.jsx       # Urgent care banner
│   ├── HealthResourcesSection.jsx # Patient guides
│   ├── TestimonialsSection.jsx    # Demo patient feedback
│   ├── FAQSection.jsx             # Accessible accordion
│   ├── NewsSection.jsx            # Clinical bulletins
│   ├── CtaBanner.jsx              # Conversion strip
│   └── ContactSection.jsx         # Contact cards & inquiry form
├── App.jsx                        # Root application component
├── main.jsx                       # Entry file
└── index.css                      # Tailwind base & custom components
```

---

## 🛠️ How to Customize for a Client

### 1. Brand & Contact Information
Open [`src/config/hospitalConfig.js`](file:///c:/Users/Devansh/Desktop/Specialist%20Hospital/src/config/hospitalConfig.js) and update:
* Hospital name, short name, and tagline.
* Contact phone, email, emergency phone, and location address.
* Social media links.

### 2. Feature Toggles
In `hospitalConfig.js`, you can enable or disable entire sections with zero leftover whitespace:
```js
emergency: { enabled: true },
appointments: { enabled: true },
diagnostics: { enabled: true },
insurance: { enabled: true },
internationalPatients: { enabled: false }, // Set to true to show global desk
healthPackages: { enabled: true },
news: { enabled: true },
gallery: { enabled: true },
whatsapp: { enabled: false, number: "+1234567890" }, // Set to true to show floating WhatsApp button
map: { enabled: false, embedUrl: "YOUR_IFRAME_URL" }  // Set to true to show embedded map
```

### 3. Medical Specialties, Doctors, & Treatments
Update the respective files in [`src/data/`](file:///c:/Users/Devansh/Desktop/Specialist%20Hospital/src/data/):
* `specialties.js`: Add or modify departments and diagnostic links.
* `doctors.js`: Add consultant names, roles, schedules, and photos.
* `treatments.js`: Update treatment pathways and indications.

---

## 💻 Available Scripts

* `npm run dev`: Starts the local Vite development server at `http://localhost:3000/`.
* `npm run build`: Generates the production bundle in `dist/`.
* `npm run preview`: Previews the production build locally.
