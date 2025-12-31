"use client";

import React from "react";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex justify-center min-h-screen bg-white p-4">
      <section className="w-full max-w-4xl bg-[#90EAE9] border-2 rounded-lg p-4 space-y-4">
        <header className="text-center space-y-1">
          <h1 className="text-xl font-bold text-[#CE5D5D]"></h1>
          <p className="text-[#CE5D5D] font-semibold">
            Juan Carlos Muñoz Pabon
          </p>
        </header>
        {children}
      </section>
    </main>
  );
}
