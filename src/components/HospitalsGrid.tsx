import React from "react";

const hospitals = [
  { name: "Aster Medcity — Kochi", desc: "Cardiac, Neurosciences, Oncology, Nephrology" },
  { name: "Amrita Institute (AIMS) — Kochi", desc: "Transplant, ICU, Oncology" },
  { name: "VPS Lakeshore — Kochi", desc: "Oncology, Orthopaedics, Cardiology" },
  { name: "Rajagiri Hospital — Kochi", desc: "Neurosurgery, GI, Trauma" },
];

export default function HospitalsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {hospitals.map((h) => (
        <div key={h.name} className="p-6 border rounded-lg shadow-sm">
          <h4 className="font-semibold">{h.name}</h4>
          <p className="text-sm text-slate-600 mt-2">{h.desc}</p>
        </div>
      ))}
    </div>
  );
}
