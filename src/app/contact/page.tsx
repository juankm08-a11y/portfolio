"use client";

import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageLayout from "../components/PageLayout";

export default function ContactPage() {
  return (
    <PageLayout>
      <Navbar />
      <ContactSection />
      <Footer />
    </PageLayout>
  );
}
