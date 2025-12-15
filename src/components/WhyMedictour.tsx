export default function WhyMedictour() {
  return (
    <section className="bg-[#F9FAFB] py-16">
      <div className="container-md mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-brand">
          Why patients choose Medictour
        </h2>

        <p className="mt-4 text-center text-slate-700 max-w-3xl mx-auto">
          Choosing treatment abroad is not just about hospitals — it’s about trust,
          coordination, and having someone who stands with you at every step.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="font-semibold text-lg">We represent the patient</h3>
            <p className="mt-2 text-sm text-slate-600">
              We work for you — not for hospitals. Our role is to protect your
              interests, ensure clarity, and guide you honestly.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="font-semibold text-lg">Hospital & doctor coordination</h3>
            <p className="mt-2 text-sm text-slate-600">
              From selecting the right specialist to fixing treatment dates,
              we coordinate directly with top hospitals on your behalf.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="font-semibold text-lg">Transparent costs & guidance</h3>
            <p className="mt-2 text-sm text-slate-600">
              You receive clear estimates, treatment options, and guidance —
              with no hidden surprises or pressure decisions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="font-semibold text-lg">End-to-end support</h3>
            <p className="mt-2 text-sm text-slate-600">
              From first contact to treatment, stay, discharge, and follow-up —
              Medictour stays with you throughout the journey.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
