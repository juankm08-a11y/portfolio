"use client";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { cn } from "@/app/utils/cn";

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/experiences", label: "Experiences" },
    { href: "/contact", label: "Contact" },
  ];

  const socials = [
    { Icon: Phone, label: "Phone", href: "tel:+3154391213" },
    {
      Icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/juanc_munoz_01/",
    },
    {
      Icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/juancho.munoz01/",
    },
    {
      Icon: Mail,
      label: "Mail",
      href: "https://mail.google.com/mail/u/1/#inbox",
    },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <main className="flex flex-col items-center min-h-screen p-4 md:p-10 bg-white">
      <section className="border-2 rounded-lg bg-[#90EAE9] w-full max-w-sm md:max-w-4xl p-4 md:p-0 space-y-4 md:space-y-6">
        <header className="text-center space-y-1">
          <h1 className="text-lg md:text-xl font-semibold text-[#CE5D5D]  ">
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
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
          <div className="flex flex-col items-center gap-4 bg-[#40B9B9] rounded-md p-4 w-full max-w-md border-2 text-center">
            <p className="font-semibold">
              For more information, here you will find my contact details.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 justiy-items-center">
            {socials.map(({ Icon, label, href }, idx) => (
              <Link
                key={`${label}-${idx}`}
                href={href}
                className="flex justify-center items-center"
                aria-label={label}
              >
                <Icon className="w-10 h-10 hover:scañe-110 transform trnasition-transform duration-300" />
              </Link>
            ))}
          </div>
        </section>
        <footer className="bg-[#FFDE83] rounded-md p-4 text-center">
          © Juan Carlos Muñoz 22-04-2025 <br />
          Contact:juancarlospabon01@gmail.com
        </footer>
      </section>
    </main>
  );
}
