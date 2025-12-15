export default function WhyAfrica() {
  return (
    <section className="bg-[#F4F8FC] py-16">
      <div className="container-md mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-brand">
          Why patients from Africa, the UK & Europe are forced to look abroad
        </h2>

        <p className="mt-4 text-center text-slate-700 max-w-3xl mx-auto">
          For many patients, the struggle is not just illness — it is delay, uncertainty,
          and rising costs. When treatment cannot wait, families are left with no choice
          but to seek options beyond their borders.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="font-semibold text-lg">Long & risky waiting periods</h3>
            <p className="mt-2 text-sm text-slate-600">
              Patients often wait months or even years for surgeries and specialist
              appointments. For serious conditions, this delay can turn manageable
              illnesses into life-threatening emergencies.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="font-semibold text-lg">Overloaded healthcare systems</h3>
            <p className="mt-2 text-sm text-slate-600">
              Public healthcare systems in many regions are under pressure, with
              limited access to specialists, repeated referrals, and postponed procedures.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="font-semibold text-lg">High private treatment costs</h3>
            <p className="mt-2 text-sm text-slate-600">
              When patients turn to private care to avoid delays, the cost becomes
              overwhelming — often unaffordable even with insurance coverage.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="font-semibold text-lg">Emotional & family pressure</h3>
            <p className="mt-2 text-sm text-slate-600">
              Families watch loved ones suffer while searching for answers, approvals,
              and finances — carrying fear, stress, and uncertainty every day.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
