"use client";

import Footer from "../components/Footer";
import MyHabits from "../components/Myhabits";
import MyPets from "../components/MyPets";
import Navbar from "../components/Navbar";
import PageLayout from "../components/PageLayout";

export default function AboutPage() {
  const pets = [
    {
      title: "Kloe",
      description: "Hello, I'm kloe, the little one in the house.",
      images: [
        "/images/pets/pet_kloe1.jpeg",
        "/images/pets/pet_kloe2.jpeg",
        "/images/pets/pet_kloe3.jpeg",
      ],
    },
    {
      title: "Yue",
      description: "Hello, I'm Yue, the white and very beautiful too.",
      images: [
        "/images/pets/pet_yue1.jpeg",
        "/images/pets/pet_yue2.jpeg",
        "/images/pets/pet_yue3.jpeg",
      ],
    },
  ];

  const habits = [
    {
      title: "Coding",
      description: "I enjoy building real-world solutions with code.",
      imageUrl: "/images/habits/myHabit1.jpeg",
    },
  ];
  return (
    <PageLayout>
      <Navbar />

      <section className="space-y-8">
        <MyPets pets={pets} />
        <MyHabits habits={habits} />
      </section>

      <Footer />
    </PageLayout>
  );
}
