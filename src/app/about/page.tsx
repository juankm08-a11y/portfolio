"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface Pets {
  title: string;
  description: string;
  imageUrl: string;
}

interface Habits {
  title: string;
  description: string;
  imageUrl: string;
}

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/testimonies", label: "Testimonies" },
    { href: "/experiences", label: "Experiences" },
    { href: "/contact", label: "Contact" },
  ];

  const mypets: Pets[] = [
    {
      title: "Kloe",
      description: "Hello, I’m Kloe, the little one in the house.",
      imageUrl: "/images/pets/pet_kloe1.jpeg",
    },
    {
      title: "Yue",
      description: "Hello, I’m Yue, I’m white and very beautiful too",
      imageUrl: "/images/pets/pet_yue1.jpeg",
    },
  ];

  const myhabits: Habits[] = [
    {
      title: "Kloe",
      description: "Hello, I’m Kloe, the little one in the house.",
      imageUrl: "/images/pets/pet_kloe1.png",
    },
  ];

  const tooglePets = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toogleHabits = (index: number) => {
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
        <nav className="relative border-2 bg-[#9CFA8D] p-2 rounded-md">
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
        <section className="grid grid-cols-3 md:grid-cols-2 gap-6">
          {mypets.map((pet, idx) => (
            <div
              key={idx}
              className="bg-[#40B9B9] rounded-md p-4 border-2 text-center transition-transform duration-300 hover:scale-105"
              onClick={() => tooglePets(idx)}
            >
              <p className="font-semibold">{pet.title}</p>
              {openIndex === idx && (
                <div className="mt-2 bg-white rounded-md p-4 shadow-md">
                  <Image
                    src={pet.imageUrl}
                    alt={pet.title}
                    width={600}
                    height={600}
                    className="w-full h-auto rounded"
                  />
                  <p className="mt-2 text-sm">{pet.description}</p>
                </div>
              )}
            </div>
          ))}
          {myhabits.map((hab, idx) => (
            <div
              key={idx}
              className="bg-[#40B9B9] rounded-md p-4 border-2 text-center transition-transform duration-300 hover:scale-105"
              onClick={() => toogleHabits(idx)}
            >
              <p className="font-semibold">{hab.title}</p>
              {openIndex === idx && (
                <div className="mt-2 bg-white rounded-md p-4 shadow-md">
                  <Image
                    src={hab.imageUrl}
                    alt={hab.title}
                    width={600}
                    height={600}
                    className="w-full h-auto rounded"
                  />
                  <p className="mt-2 text-sm">{hab.description}</p>
                </div>
              )}
            </div>
          ))}
        </section>
        <footer className="bg-[#FFDE83] rounded-md p-4 text-center">
          © Juan Carlos Muñoz 22-04-2025 <br />
          Contact:juancarlospabon01@gmail.com
        </footer>
      </section>
    </main>
  );
}
