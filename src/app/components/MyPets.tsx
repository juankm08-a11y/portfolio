"use client";

import { useState } from "react";
import { PetGroup } from "../types/Pets";
import Image from "next/image";

interface Props {
  pets: PetGroup[];
}

export default function MyPets({ pets }: Props) {
  const [openPetIndex, setOpenPetIndex] = useState<number | null>(null);

  const togglePet = (index: number) => {
    setOpenPetIndex(openPetIndex === index ? null : index);
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {pets.map((group, idx) => (
        <div
          key={idx}
          className="bg-[#40B9B9] rounded-md p-4 border-2 text-center hover:scale-105 transition"
          onClick={() => togglePet(idx)}
        >
          <p className="font-semibold">{group.title}</p>

          {openPetIndex === idx && (
            <div className="mt-2 big-white rounded-md p-4 shadow-md space-y-2">
              {group.images.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={`${group.title} ${i + 1}`}
                  width={400}
                  height={400}
                  className="rounded"
                />
              ))}
              <p className="text-sm">{group.description}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
