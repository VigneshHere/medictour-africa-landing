import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import React from "react";

export const metadata = {
  title: "Medictour Africa – Skip Waiting, Get Treated in India",
  description: "Medictour helps African patients access accredited hospitals in India with fast scheduling and full travel support.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen bg-white text-slate-900 pt-16">{children}</main>
      </body>
    </html>
  );
}
