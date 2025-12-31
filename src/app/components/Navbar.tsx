"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black rounded-md px-4 py-3 flex justify-between items-center">
      <span className="text-white font-semibold">IngeJuan</span>

      <ul className="flex gap-6 text-white text-sm">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/proyects">Proyects</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <Link href="https://github.com/juankm08-a11y" target="_blank">
        <svg width="26" height="26" fill="white" viewBox="0 0 24 24">
          <path d="M12 .5C5.73.5.5 5.74.5 12.03c0 5.11 3.29 9.44 7.86 10.97.57.1.78-.25.78-.55v-2.01c-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.56-.3-5.26-1.28-5.26-5.69 0-1.25.45-2.27 1.18-3.07-.12-.3-.51-1.52.11-3.17 0 0 .97-.31 3.18 1.17a11 11 0 0 1 5.79 0c2.2-1.48 3.18-1.17 3.18-1.17.62 1.65.23 2.87.11 3.17.73.8 1.18 1.82 1.18 3.07 0 4.42-2.71 5.39-5.29 5.68.41.35.78 1.05.78 2.12v3.14c0 .3.2.65.79.55A11.53 11.53 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5Z" />
        </svg>
      </Link>
    </nav>
  );
}
