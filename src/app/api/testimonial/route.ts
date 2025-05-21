import { NextResponse } from "next/server";
import { connectToDB } from "@/app/lib/mongodb";
import { Testimonial } from "@/models/Testimonial";

export async function GET() {
  try {
    await connectToDB();
    const testimonials = await Testimonial.find();
    return NextResponse.json(testimonials, { status: 200 });
  } catch (error) {
    console.error("Error al obtener /api/testimonial", error);
    return NextResponse.json({ error: "Error del servidor" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { fullname, description, experience } = await req.json();
    await connectToDB();

    await new Testimonial({ fullname, description, experience }).save();
  } catch (error) {
    console.error("Error al crear /api/testimonial", error);
    return NextResponse.json({ error: "Error del servidor" }, { status: 500 });
  }
}
