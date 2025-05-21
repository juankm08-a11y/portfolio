"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { cn } from "@/app/utils/cn";

interface Experience {
  title: string;
  description: string;
  imageUrl: string;
}
export default function ExperiencesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/experiences", label: "Experiences" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const Experiences: Experience[] = [
    {
      title: "school where I studied",
      description: "I graduated from San Felipe Neri School in the year 2025.",
      imageUrl: "/images/experiences/experience.jpeg",
    },
    {
      title: "Visit Empresarial",
      description:
        "Five years ago, I had my company visit. It was an amazing experience where I got to visit software companies and learn more about the software industry, as well as explore the beautiful city of Medellín.",
      imageUrl: "/images/experience2.jpeg",
    },
  ];

  const toggleExperience = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <main className="flex flex-col items-center min-h-screen p-4 md:p-10 bg-white transition-all duration-500 ease-in-out">
      <section className="border-2 rounded-lg bg-[#90EAE9] w-full max-w-sm md:max-w-4xl md:p-10 space-y-6">
        <header className="text-center space-y-1">
          <h1 className="text-lg md:text-xl font-semibold text-[#CE5D5D] transition-colors duration-300 hover:text-red-600">
            PORTFOLIO
          </h1>
          <h2 className="text-sm md:text-lg font-semibold text-[#CE5D5D]">
            Juan Carlos Muñoz Pabon
          </h2>
        </header>
        <nav
          className={cn(
            "relative border-2 bg-[#9CFA8D] p-2 rounded-md transition-shadow",
            isScrolled && "shadow-lg top-0 z-20"
          )}
        >
          <button
            className="sm:hidden absolute top-2 right-2 p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span
              className="block w-6 h-0 5 bg-black mb-1 transition-transform duration-300"
              style={{
                transform: isMenuOpen
                  ? "rotate(45deg) translateY(8px)"
                  : "none",
              }}
            />
            <span
              className="block w-6 h-0 5 bg-black mb-1 opacity-75 transition-transform duration-300"
              style={{
                opacity: isMenuOpen ? "0" : "0.75",
              }}
            />
            <span
              className="block w-6 h-0 5 bg-black transition-transform duration-300"
              style={{
                transform: isMenuOpen
                  ? "rotate(-45deg) translateY(-8px)"
                  : "none",
              }}
            />
          </button>
          <h1>PORTFOLIO</h1>
          <ul
            className={`flex flex-wrap justify-center gap-4 md:gap-12 py-2 ${
              isMenuOpen ? "block" : "hidden"
            }sm:flex transition-all duration-300 ease-in-out`}
          >
            {navLinks.map((link, idx) => (
              <li key={`${link.label}-${idx}`}>
                <Link
                  href={link.href}
                  className="hover:underline transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <section className="grid grid-cols md:grid-cols-2 gap-6">
          {Experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-[#40B9B9] rounded-md p-4 border-2 text-center transition-transform duration-300 hover:scale-105"
              onClick={() => toggleExperience(idx)}
            >
              <p className="font-bold">{exp.title}</p>

              {openIndex === idx && (
                <div className="mt-2 bg-white rounded-md p-4 shadow-md">
                  <Image
                    src={exp.imageUrl}
                    alt={exp.title}
                    width={600}
                    height={600}
                    className="w-full h-auto rounded"
                  />
                  <p className="mt-2 text-sm">{exp.description}</p>
                </div>
              )}
            </div>
          ))}
        </section>
        <footer className="bg-[#FFDE83] rounded-md p-4 text-center transition-opacity duration-500">
          © Juan Carlos Muñoz 22-04-2025 <br />
          Contact:juancarlospabon01@gmail.com
        </footer>
      </section>
    </main>
  );
}
