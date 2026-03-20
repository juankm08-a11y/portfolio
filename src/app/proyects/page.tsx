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
      imageUrl: "/images/proyects/reservations_restaurants.png",
      url: "https://github.com/juankm08-a11y/ReservasyRestaurantes.git",
    },
  ];

  return (
    <main className="min-h-screen bg-background px-6 md:px-20 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
          My Proyects
        </h1>
        <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
          A selection of proyects where I applied software engineering
          principles to build real and functional solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {proyects.map((proyect, index) => (
          <div
            key={index}
            className="bg-surface border border-muted rounded-2xl overflow-hidden"
          ></div>
        ))}
      </div>
    </main>
  );
}
