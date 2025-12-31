"use client";

import { useState } from "react";
import Image from "next/image";
import { Habit } from "../types/Habits";

interface Props {
  habits: Habit[];
}

export default function MyHabits({ habits }: Props) {
  const [openHabitIndex, setOpenHabitIndex] = useState<number | null>(null);

  const toggleHabit = (index: number) => {
    setOpenHabitIndex(openHabitIndex === index ? null : index);
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {habits.map((habit, idx) => (
        <div
          key={idx}
          className="bg-[#40B9B9] rounded-md p-4 border-2 text-center hover:scale-105 transition"
          onClick={() => toggleHabit(idx)}
        >
          <p className="font-semibold">{habit.title}</p>

          {openHabitIndex === idx && (
            <div className="mt-2 big-white rounded-md p-4 shadow-md">
              <Image
                src={habit.imageUrl}
                alt={habit.title}
                width={400}
                height={400}
                className="rounded"
              />
              <p className="mt-2 text-sm">{habit.description}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
