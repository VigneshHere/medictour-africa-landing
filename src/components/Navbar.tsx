"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // already in your package.json list

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menu = [
    { label: "Home", href: "/" },
    { label: "Treatments", href: "/treatments" },
    { label: "For Africa", href: "/africa" },
    { label: "For Gulf", href: "/gulf" },
    { label: "Process", href: "/process" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-sm bg-white/80 shadow" : "bg-transparent"
      }`}
      role="banner"
    >
      <div className="container-md mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* logo */}
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <div className="relative w-[140px] h-[38px]">
              <Image
                src="/images/logo.png"
                alt="Medictour"
                fill
                sizes="(max-width: 768px) 120px, 180px"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* desktop links */}
          <nav className="hidden md:flex items-center gap-4">
            {menu.map((m) => (
              <Link key={m.href} href={m.href} className="px-3 py-2 text-sm font-medium hover:text-brand">
                {m.label}
              </Link>
            ))}
            <Link href="/contact" className="ml-3">
              <button className="btn-primary">Free Consultation</button>
            </Link>
          </nav>

          {/* mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-slate-800 hover:bg-slate-100"
            onClick={() => setOpen((s) => !s)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* mobile drawer */}
        {open && (
          <div className="md:hidden mt-2 pb-4 bg-white/95 rounded-b-lg shadow-md">
            <div className="flex flex-col">
              {menu.map((m) => (
                <Link
                  key={m.href}
                  href={m.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-sm border-b last:border-b-0"
                >
                  {m.label}
                </Link>
              ))}
              <div className="px-4 pt-3">
                <Link href="/contact">
                  <button className="w-full btn-primary">Free Consultation</button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
