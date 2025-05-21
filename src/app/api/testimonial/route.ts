import { NextResponse } from "next/server";
import { connectToDB } from "@/app/lib/mongodb";
import { Testimonial } from "@/models/Testimonial";

export async function GET() {
  try {
    await connectToDB();
    const testimonials = await Testimonial.find();
    return NextResponse.json(testimonials, { status: 200 });
  } catch (error) {
    console.error("Error to get /api/testimonial", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const { fullname, description, experience } = await req.json();
    await connectToDB();

    await new Testimonial({ fullname, description, experience }).save();

    return NextResponse.json(
      { message: "Testimonial send succesfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error to create /api/testimonial", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
