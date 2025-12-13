export default function WhyAfrica() {
  return (
    <section className="bg-[#F4F8FC] py-16">
      <div className="container-md mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-brand">
          Why patients from Africa, UK, Europe and beyond seek treatment in India
        </h2>

        <p className="mt-4 text-center text-slate-700 max-w-3xl mx-auto">
          Across Africa, the UK, Europe, and other regions, patients face long waiting lists,
          delayed surgeries, and extremely high treatment costs. When health cannot wait,
          families look for faster, trusted, and affordable alternatives.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="font-semibold text-lg">Long waiting lists abroad</h3>
            <p className="mt-2 text-sm text-slate-600">
              In countries like the UK, Europe, and the US, patients often wait months or years
              for critical surgeries and specialist care.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="font-semibold text-lg">Very high treatment costs</h3>
            <p className="mt-2 text-sm text-slate-600">
              Private healthcare in developed countries can be extremely expensive,
              even for insured patients.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="font-semibold text-lg">Globally trained doctors</h3>
            <p className="mt-2 text-sm text-slate-600">
              India has highly experienced specialists, many of whom have trained or worked
              in the UK, US, and Europe.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="font-semibold text-lg">Advanced hospitals & technology</h3>
            <p className="mt-2 text-sm text-slate-600">
              Indian hospitals are equipped with modern infrastructure, latest machines,
              and advanced technology for complex surgeries.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
