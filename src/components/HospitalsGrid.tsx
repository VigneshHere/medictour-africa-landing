const hospitals = [
  {
    name: "Aster Medcity",
    location: "Kochi, India",
    highlights: [
      "JCI accredited multi-specialty hospital",
      "Cardiac sciences, oncology, neurology",
      "Advanced ICUs & transplant programs"
    ]
  },
  {
    name: "Amrita Institute of Medical Sciences (AIMS)",
    location: "Kochi, India",
    highlights: [
      "One of India’s largest hospitals",
      "Renowned transplant & oncology care",
      "High-volume complex surgeries"
    ]
  },
  {
    name: "VPS Lakeshore Hospital",
    location: "Kochi, India",
    highlights: [
      "Advanced cancer & orthopaedic care",
      "Modern surgical theatres & diagnostics",
      "Strong post-treatment rehabilitation"
    ]
  },
  {
    name: "Rajagiri Hospital",
    location: "Kochi, India",
    highlights: [
      "Neurosciences & trauma excellence",
      "State-of-the-art imaging & ICUs",
      "Experienced multidisciplinary teams"
    ]
  }
];

export default function HospitalsGrid() {
  return (
    <section className="py-16 bg-[#F4F8FC]">
      <div className="container-md mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-brand">
          Trusted partner hospitals in India
        </h2>

        <p className="mt-4 text-center text-slate-700 max-w-3xl mx-auto">
          We work only with reputed, high-volume hospitals known for complex
          procedures, modern infrastructure, and internationally trained specialists.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {hospitals.map((h) => (
            <div
              key={h.name}
              className="bg-white p-6 rounded-xl border shadow-sm"
            >
              <h3 className="text-xl font-semibold">{h.name}</h3>
              <p className="text-sm text-slate-500 mt-1">{h.location}</p>

              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {h.highlights.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 text-brand">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
