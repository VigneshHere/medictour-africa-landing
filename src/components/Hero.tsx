"use client";
import Image from "next/image";

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-[#F7FAFC]">
      <div className="container-md mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand leading-tight">
            When treatment can’t wait, we help African patients heal in India
          </h1>

          <p className="mt-5 text-lg text-slate-700 max-w-xl">
            Get access to world-class hospitals, experienced specialists, and complete care support —
            from medical review to safe return home.
          </p>

          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <li className="bg-white p-3 rounded-md border shadow-sm">
              Faster treatment timelines
            </li>
            <li className="bg-white p-3 rounded-md border shadow-sm">
              Up to 70% lower cost
            </li>
            <li className="bg-white p-3 rounded-md border shadow-sm">
              End-to-end support
            </li>
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button onClick={scrollToContact} className="btn-primary">
              Get Free Medical Estimate
            </button>

            <a
              href="https://wa.me/918606332222?text=Hello%20Medictour%2C%20I%20need%20a%20medical%20estimate"
              className="btn-outline"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[360px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/hero-africa.png"
            alt="African patients receiving trusted medical care in India"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003A6C]/60 to-transparent"></div>
        </div>
      </div>

      {/* CURVED DIVIDER */}
      <div className="w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1440 160" className="w-full h-24" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            d="M0,96 C240,160 360,80 720,80 C1080,80 1200,160 1440,96 L1440 160 L0 160 Z"
          />
        </svg>
      </div>
    </section>
  );
}
