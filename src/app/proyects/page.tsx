"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { cn } from "@/app/utils/cn";

interface Proyect {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

export default function ProyectsPage() {
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

  const proyects: Proyect[] = [
    {
      title: "Scientific Calculator 2.0",
      description: "This my scientific Calculator version 2.0",
      imageUrl: "/images/proyects/scientific_calculator2.0.png",
      url: "https://github.com/juankm08-a11y/Scientific-Calculator-2.0",
    },
    {
      title: "Login Card",
      description: "This is Login Card",
      imageUrl: "/images/proyects/login_card.png",
      url: "https://github.com/juankm08-a11y/Login-Card.git",
    },
    {
      title: "Boarding Pass Card",
      description: "This is my boarding pass card",
      imageUrl: "/images/proyects/boardingpass_card.png",
      url: "https://github.com/juankm08-a11y/my-music-player",
    },
    {
      title: "Music Player",
      description: "This is music player in develop ",
      imageUrl: "/images/proyects/mymusic_player.png",
      url: "https://github.com/juankm08-a11y/my-music-player",
    },
    {
      title: "Dynamic survey",
      description: "This is a dynamic survey",
      imageUrl: "/images/proyects/dinamicsurvey.png",
      url: "https://mybucketencuestasdinamicas.s3.us-east-1.amazonaws.com/front/index.html",
    },
    {
      title: "restaurants&reservations",
      description: "This is software reservations&restaurants",
      imageUrl: "/images/proyects/restaurants_reservations.png",
      url: "https://github.com/juankm08-a11y/ReservasyRestaurantes.git",
    },
    {
      title: "plataformagestionInventario",
      description: "Plataforma Gestion Inventario",
      imageUrl: "/images/proyects/restaurants_reservations.png",
      url: "https://agreeable-mud-038ce0d10.6.azurestaticapps.net",
    },
  ];

  const toggleProyect = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <main className="flex flex-col items-center min-h-screen p-4 md:p-10 bg-white transition-all duration-500 ease-in-out">
      <section className="border-2 rounded-lg bg-[#90EAE9] w-full max-w-sm md:max-w-4xl md:p-10 space-y-6">
        <header className="text-center space-y-1">
          <h1 className="text-lg md:text-xl font-semibold text-[#CE5D5D] transition-colors duration-300 hover:text-red-600">
            JCFOLIO
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
          <h1 className="text-accent">JCFOLIO</h1>
          <ul
            className={`flex flex-wrap justify-center gap-4 md:gap-12 py-2 ${
              isMenuOpen ? "block" : "hidden"
            }sm:flex transition-all duration-300 ease-in-out`}
          >
            {navLinks.map((link, idx) => (
              <li key={`${link.label}-${idx}`}>
                <Link
                  href={link.href}
                  className="hover:underline transition-colors duration-200 cursor-pointer text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <section className="grid grid-cols md:grid-cols-2 gap-6">
          {proyects.map((proy, idx) => (
            <div
              key={idx}
              className="bg-[#40B9B9] rounded-md p-4 border-2 text-center transition-transform duration-300 hover:scale-105"
              onClick={() => toggleProyect(idx)}
            >
              <p className="font-bold">{proy.title}</p>

              {openIndex === idx && (
                <div className="mt-2 bg-white rounded-md p-4 shadow-md">
                  <Image
                    src={proy.imageUrl}
                    alt={proy.title}
                    width={600}
                    height={600}
                    className="w-full h-auto rounded"
                  />
                  <p className="mt-2 text-sm">{proy.description}</p>
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
