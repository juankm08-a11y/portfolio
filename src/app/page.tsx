"use client";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PageLayout from "./components/PageLayout";

export default function HomePage() {
  return (
    <PageLayout>
      <Navbar />
      <section className="flex flex-col md:flex-row gap-6 items-center">
        <div className="space-y-4">
          <h2 className="text-xl font-bold">{`Hello, I'm Juan`}</h2>
          <p className="text-cyan-700 font-semibold">
            Software Engineer & Full Stack developer
          </p>
          <p>I love programming in Python in building real solutions</p>
        </div>
        <div className="bg-white p-4 rounded-md border w-40 h-40 flex items-center justify-center">
          Image
        </div>
      </section>
      <Footer />
    </PageLayout>
  );
}
