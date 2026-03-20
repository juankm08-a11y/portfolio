"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-4 z-50 mx-4 md:mx-20">
      <div className="bg-background/80 backdrop-blur-md border border-muted rounded-2xl flex items-center justify-between shadow-lg">
        <span className="text-text-primary font-bold text-lg">
          Inge <span className="text-primary">Juan</span>
        </span>

        <ul className="hidden md:flex gap-8 text-text-secondary text-sm font-medium">
          {["Home", "About", "Proyects", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="hover:text-primary transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/juankm08-a11y"
            target="_blank"
            className="text-text-secondary hover:text-primary transition-colors"
          >
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.73.5.5 5.74.5 12.03c0 5.11 3.29 9.44 7.86 10.97.57.1.78-.25.78-.55v-2.01c-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.56-.3-5.26-1.28-5.26-5.69 0-1.25.45-2.27 1.18-3.07-.12-.3-.51-1.52.11-3.17 0 0 .97-.31 3.18 1.17a11 11 0 0 1 5.79 0c2.2-1.48 3.18-1.17 3.18-1.17.62 1.65.23 2.87.11 3.17.73.8 1.18 1.82 1.18 3.07 0 4.42-2.71 5.39-5.29 5.68.41.35.78 1.05.78 2.12v3.14c0 .3.2.65.79.55A11.53 11.53 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5Z" />
            </svg>
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-text-primary"
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mt-2 bg-surface border border-muted rounded-lg">
          <ul className="flex flex-co gap-4 text-text-secondary text-sm">
            {["Home", "About", "Proyects", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="hover:text-primary transition-colors"
                  onClick={() => setOpen}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
