export default function WhyIndia() {
  return (
    <section className="bg-white py-16">
      <div className="container-md mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-brand">
          Why India is trusted by patients worldwide
        </h2>

        <p className="mt-4 text-center text-slate-700 max-w-3xl mx-auto">
          India has become one of the world’s most trusted destinations for advanced
          medical treatment — combining highly experienced doctors, modern hospitals,
          and fast access to care.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-slate-50 p-6 rounded-xl border">
            <h3 className="font-semibold text-lg">Globally trained doctors</h3>
            <p className="mt-2 text-sm text-slate-600">
              Many Indian specialists have trained or worked in the UK, US, and Europe,
              bringing international protocols and expertise back home.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-xl border">
            <h3 className="font-semibold text-lg">World-class hospitals</h3>
            <p className="mt-2 text-sm text-slate-600">
              Multi-specialty hospitals with international accreditations, strict safety
              standards, and high success rates across major treatments.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-xl border">
            <h3 className="font-semibold text-lg">Advanced technology & equipment</h3>
            <p className="mt-2 text-sm text-slate-600">
              Access to the latest surgical machines, robotic systems, advanced imaging,
              and modern ICUs for complex procedures.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-xl border">
            <h3 className="font-semibold text-lg">Fast treatment & lower cost</h3>
            <p className="mt-2 text-sm text-slate-600">
              No long waiting lists. Treatment can begin quickly — often at 50–70% lower
              cost compared to Western countries, without compromising quality.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
