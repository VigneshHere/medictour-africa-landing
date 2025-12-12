"use client";
import Image from "next/image";

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative">
      <div className="container-md mx-auto py-16 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand leading-tight">Skip the Wait. Heal in India.</h1>
          <p className="mt-4 text-lg text-slate-700">
            Premium healthcare. Faster appointments. Lower cost. Get a free estimate and teleconsult within 48 hours.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button onClick={scrollToContact} className="btn-primary">Get Free Estimate</button>
            <a href="mailto:medictour.global@gmail.com" className="btn-outline">Email Us</a>
          </div>

          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <li className="bg-slate-50 p-3 rounded-md border">No long NHS wait</li>
            <li className="bg-slate-50 p-3 rounded-md border">Up to 70% lower cost</li>
            <li className="bg-slate-50 p-3 rounded-md border">End-to-end travel & medical support</li>
          </ul>
        </div>

        <div className="md:w-1/2 w-full h-80 rounded-2xl overflow-hidden shadow-lg relative">
          <Image src="/images/hero-africa.png" alt="Hero" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003A6C]/60 to-transparent"></div>
        </div>
      </div>

      <div className="w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1440 160" className="w-full h-20" preserveAspectRatio="none">
          <path d="M0,96 C240,160 360,80 720,80 C1080,80 1200,160 1440,96 L1440 160 L0 160 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
