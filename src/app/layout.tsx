import "../styles/globals.css";
import React from "react";

export const metadata = {
  title: "Medictour Africa | Skip the Wait, Heal in India",
  description: "Premium medical tourism support for African patients.",
  icons: {
    icon: "/favicon.ico",
  },
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
