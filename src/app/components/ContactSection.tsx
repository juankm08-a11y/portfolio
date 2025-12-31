"use client";

import type { LucideIcon } from "lucide-react";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import Link from "next/link";

interface SocialLink {
  Icon: LucideIcon;
  label: string;
  href: string;
}

const socials: SocialLink[] = [
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
    href: "malito:juancarlospabon01@gmail.com",
  },
];

export default function ContactSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
      <div className="flex flex-col items-center gap-4 rounded-md p-4 w-full max-w-md border-2 text-center">
        <p className="font-semibold">
          For more information, here you will find my contact details.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {socials.map(({ Icon, label, href }, idx) => (
          <Link
            key={idx}
            href={href}
            aria-label={label}
            className="flex justify-center items-center"
          >
            <Icon className="w-10 h-10 transition transform duration-300 hover:scale-110" />
          </Link>
        ))}
      </div>
    </section>
  );
}
