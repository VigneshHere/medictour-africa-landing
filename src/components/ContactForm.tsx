"use client";
import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    // For now: log and fake success. Later connect to Zapier/API.
    console.log(Object.fromEntries(form.entries()));
    setSent(true);
  };

  return (
    <section id="contact" className="py-14 bg-[#002C5F] text-white">
      <div className="container-md mx-auto">
        <div className="max-w-3xl bg-white/5 p-6 rounded-lg">
          <h3 className="text-2xl font-bold">Get a Free Treatment Estimate</h3>
          <p className="mt-2 text-sm">Confidential. We reply within 48 hours.</p>

          {!sent ? (
            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
              <input name="name" required placeholder="Full name" className="p-3 rounded text-black" />
              <input name="phone" required placeholder="Phone / WhatsApp" className="p-3 rounded text-black" />
              <input name="country" placeholder="City, Country" className="p-3 rounded text-black" />
              <input name="email" placeholder="Email (optional)" className="p-3 rounded text-black" />
              <textarea name="notes" placeholder="Short description of your issue" className="p-3 rounded md:col-span-2 text-black" />
              <div className="md:col-span-2 flex gap-3 items-center">
                <button type="submit" className="btn-primary">Send My Details Securely</button>
                <a className="btn-outline" href="https://wa.me/918606332222?text=Hi%20Medictour%20I%20need%20a%20free%20estimate">Contact on WhatsApp</a>
              </div>
            </form>
          ) : (
            <div className="mt-6 p-4 bg-green-50 text-black rounded">Thank you — we will contact you within 48 hours.</div>
          )}
        </div>
      </div>
    </section>
  );
}

