"use client";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PageLayout from "./components/PageLayout";

export default function HomePage() {
  return (
    <PageLayout>
      <Navbar />
      <section className="min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-20 py-16 bg-background">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text text-primary leading-tight">
            Juan Carlos Muñoz
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-primary">
            Software Engineer & Full Stack developer
          </h2>

          <p className="text text-secondary text-base md:text-lg max-w-xl">
            Me encanta programar en Python, construyo soluciones reales, uso
            arquitectura limpia y buenas prácticas de ingeniería de software
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-surface p-6 rounded-2xl shadow-2xl border border-muted w-56 h-56 md:w-72 md:h-17 flex items-center justify-center text-text-secondary">
            Image
          </div>
        </div>
      </section>
      <Footer />
    </PageLayout>
  );
}
