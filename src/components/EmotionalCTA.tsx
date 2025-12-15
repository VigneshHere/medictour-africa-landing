export default function EmotionalCTA() {
  return (
    <section className="bg-brand py-20 text-white">
      <div className="container-md mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          You don’t have to wait in pain anymore
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-white/90">
          If you or your loved one is facing long waiting lists, uncertainty,
          or unaffordable treatment costs, help is available.
          <br className="hidden md:block" />
          Medictour will guide you clearly, safely, and honestly.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-white text-brand font-semibold px-8 py-4 rounded-lg shadow hover:opacity-95 transition"
          >
            Get a free medical estimate
          </a>

          <a
            href="https://wa.me/918606332222?text=Hi%20Medictour%20I%20need%20guidance%20for%20treatment%20in%20India"
            className="inline-flex items-center justify-center border border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brand transition"
          >
            Talk to us on WhatsApp
          </a>
        </div>

        <p className="mt-6 text-sm text-white/80">
          No obligation • Confidential • Response within 48 hours
        </p>
      </div>
    </section>
  );
}
