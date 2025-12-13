import React from "react";
import Hero from "../../components/Hero";
import HospitalsGrid from "../../components/HospitalsGrid";
import ContactForm from "../../components/ContactForm";
import WhyAfrica from "../../components/WhyAfrica";


export const metadata = {
  title: "Medictour Africa – Skip the Wait. Heal in India.",
  description: "Medictour connects African patients to accredited hospitals in India for fast, affordable care. Free estimates within 48 hours."
};

export default function AfricaPage() {
  return (
    <div className="bg-white">
      <Hero />
      <WhyAfrica />
      <div className="container-md mx-auto py-12">
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg shadow-sm">
              <h3 className="text-3xl font-bold">48 hrs</h3>
              <p className="text-sm text-slate-600 mt-2">Free case review & estimate</p>
            </div>
            <div className="p-6 rounded-lg shadow-sm">
              <h3 className="text-3xl font-bold">Up to 70%</h3>
              <p className="text-sm text-slate-600 mt-2">Lower cost vs Europe / UAE</p>
            </div>
            <div className="p-6 rounded-lg shadow-sm">
              <h3 className="text-3xl font-bold">Multi-specialty</h3>
              <p className="text-sm text-slate-600 mt-2">Cardiac, Neuro, Oncology, Transplants</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Trusted Partner Hospitals</h2>
          <HospitalsGrid />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Sample cost comparison (indicative)</h2>
          <div className="overflow-auto">
            <table className="w-full text-sm border">
              <thead className="bg-white">
                <tr>
                  <th className="p-3 text-left">Procedure</th>
                  <th className="p-3 text-left">Local Avg</th>
                  <th className="p-3 text-left">India (Medictour)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Knee replacement</td>
                  <td className="p-3">$8k–12k</td>
                  <td className="p-3">$3k–6k</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Cardiac bypass</td>
                  <td className="p-3">$20k+</td>
                  <td className="p-3">$6k–12k</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Cataract</td>
                  <td className="p-3">$1k–2k</td>
                  <td className="p-3">$300–800</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">How it works</h2>
          <ol className="list-decimal pl-6 space-y-3">
            <li>Share medical reports</li>
            <li>Clinical review & cost estimate</li>
            <li>Plan travel & schedule surgery</li>
            <li>Arrive, treatment, discharge & follow-up</li>
          </ol>
        </section>
      </div>

      <ContactForm />

      <footer className="site-footer mt-12">
        <div className="container-md mx-auto text-center">
          <div className="text-sm">Medictour — Affordable World-Class Treatment in India for African Patients</div>
          <div className="text-sm mt-2">Email: medictour.global@gmail.com | WhatsApp: +91 86063 32222</div>
        </div>
      </footer>
    </div>
  );
}
