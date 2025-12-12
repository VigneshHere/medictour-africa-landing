import "../styles/globals.css";
import React from "react";

export const metadata = {
  title: "Medictour Africa – Skip the Wait, Get Treated in India",
  description: "Medictour helps African patients access accredited hospitals in India with fast scheduling and full travel support."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-white text-slate-900">{children}</main>
      </body>
    </html>
  );
}
