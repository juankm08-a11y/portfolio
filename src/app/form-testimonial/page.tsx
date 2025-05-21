"use client";

import { useState } from "react";

export default function FormTestimonialPage() {
  const [formData, setFormData] = useState({
    fullname: "",
    description: "",
    experience: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/testimonial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Testimonial enviado correctamente");
        setFormData({ fullname: "", description: "", experience: "" });
      } else {
        setStatus("Error al enviar el mensaje");
      }
    } catch (error) {
      console.error("Error al enviar:", error);
      setStatus("Error de red");
    }
  };

  return (
    <main className="flex flex-col justify-center items-center min-h-screen  p-4 md:p-10 bg-[#BEFC9C]">
      <section className=" w-full bg-white border-2">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Write your Testimonial
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fullname" className="block text-gray-700">
              FullName
            </label>
            <input
              type="text"
              id="fullname"
              value={formData.fullname}
              onChange={handleChange}
              name="fullname"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700">
              Description
            </label>
            <input
              type="text"
              id="description"
              value={formData.description}
              onChange={handleChange}
              name="description"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="experience" className="block text-gray-700">
              Experience
            </label>
            <input
              type="text"
              id="experience"
              value={formData.experience}
              onChange={handleChange}
              name="experience"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#65C281] text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Send Testimonial
          </button>
          {status && (
            <p className="mt-4 text-center text-sm text-gray-700">{status}</p>
          )}
        </form>
      </section>
    </main>
  );
}
