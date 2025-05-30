"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import FormContactPage from "./form-contact/page";
import Image from "next/image";
import { cn } from "./utils/cn";

interface PersonalImages {
  title: string;
  imageUrl: string;
}

export default function Home() {
  const router = useRouter();
  const [showContact, setShowContact] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const formRef = useRef<HTMLElement>(null);

  const mypersonalImages: PersonalImages[] = [
    {
      title: "PresentationPersonal",
      imageUrl: "/images/personalImages/personal-image.jpeg",
    },
    {
      title: "PresentationPersonal2",
      imageUrl: "/images/personalImages/personal-image2.jpeg",
    },
    {
      title: "PrsentationPersonal3",
      imageUrl: "/images/personalImages/personal-image3.jpeg",
    },
    {
      title: "PresentationPersonal4",
      imageUrl: "/images/personalImages/personal-image4.jpeg",
    },
  ];

  const toogleMyPersonalImages = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (showContact) {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [showContact]);

  const handleAbout = () => router.push("/about");

  const handleProyect = () => router.push("/proyects");

  const handleContactMe = () => setShowContact(true);

  const handleCV = () => {
    const link = document.createElement("a");
    link.href = "/My_CV.pdf";
    link.download = "MY_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const buttons = [
    { onClick: handleAbout, label: "About me" },
    { onClick: handleProyect, label: "View Proyects" },
    { onClick: handleCV, label: "Download CV" },
    { onClick: handleContactMe, label: "Contact Me" },
  ];

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/experiences", label: "Experiences" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <main className="flex flex-col items-center min-h-screen p-2 sm:p-4 md:p-10 bg-white transition-all duration-500 ease-in-out">
      <section className="border-2 rounded-lg bg-[#90EAE9] w-full max-w-sm md:max-w-4xl p-4 md:p-0 space-y-4 md:space-y-6">
        <header className="text-center space-y-1">
          <h1 className="text-lg md:text-xl font-semibold  text-[#CE5D5D]  transition-colors duration-300 hover:text-red-600">
            JCFOLIO
          </h1>
          <h2 className="text-sm md:text-lg font-semibold text-[#CE5D5D]">
            Juan Carlos Muñoz Pabon
          </h2>
          <p className="text-center font-semibold md:text-lg text-[#CE5D5D]">
            Welcome to my portfolio named JCFolio. Here, you can learn more
            about me and my projects.
          </p>
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
            className={`flex flex-wrap justify-center gap-4 md:gap-12 py-2  ${
              isMenuOpen ? "block" : "hidden"
            }sm:flex`}
          >
            {navLinks.map((link, idx) => (
              <li key={`${link.label}-${idx}`} className="flex-shrink-0">
                <Link
                  href={link.href}
                  className="hover:underline transition-colors duration-200 cursor-pointer px-2 text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <section className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-4">
            <div className="bg-[#40B9B9] rounded-md p-4 max-w-md border-2 transition-transform duration-300 hover:scale-105 text-accent">
              <h1>Hero Section</h1>
              <p>
                Im a frontend and backend developer (full-stack) and a software
                engineer
              </p>
            </div>
            <div className="bg-[#DFB06E] rounded-md p-4 max-w-md border-2 transition-opacity duration-500">
              <h3 className="font-medium text-[#482A9B]">Welcome</h3>
              <p className="text-[#482A9B]">
                Welcome Im Juan Muñoz Youll discover how I turn problems into
                experiences, in this space of creativity and code
              </p>
            </div>
          </div>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mypersonalImages.map((personalimg, idx) => (
              <div
                key={idx}
                className="bg-[#40B9B9] rounded-md p-4 border-2 text-center transition-transform duration-300 hover:scale-105"
                onClick={() => toogleMyPersonalImages(idx)}
              >
                <p className="font-semibold break-words text-center text-accent">
                  {personalimg.title}
                </p>
                {openIndex === idx && (
                  <div className="mt-2 bg-white rounded-md p-4 shadow-md">
                    <Image
                      src={personalimg.imageUrl}
                      alt={personalimg.title}
                      width={600}
                      height={600}
                      className="w-full h-auto rounded"
                    />
                  </div>
                )}
              </div>
            ))}
          </section>
        </section>

        <section className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          {buttons.map((btn, idx) => (
            <button
              key={`${btn.label}-${idx}`}
              onClick={btn.onClick}
              className="bg-[#51FE99] px-4 py-2 rounded border-2 w-full sm:w-auto transform hover:scale-105 transition-transform duration-300 text-accent"
            >
              {btn.label}
            </button>
          ))}
        </section>
        <footer className="bg-[#FFDE83] rounded-md p-4 text-center break-words text-sm transition-opacity duration-500">
          © Juan Carlos Muñoz 22-04-2025 <br />
          Contact:juancarlospabon01@gmail.com
        </footer>
        {showContact && (
          <section
            ref={formRef}
            className="w-full max-w-xl mt-8 animate-fadeIn"
          >
            <FormContactPage />
          </section>
        )}
      </section>
    </main>
  );
}
