import { NextResponse } from "next/server";
import { connectToDB } from "@/app/lib/mongodb";
import { Contact } from "@/models/Contact";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function GET() {
  try {
    await connectToDB();
    const contacts = await Contact.find();
    return NextResponse.json(contacts, { status: 200 });
  } catch (error) {
    console.error("Error to get /api/contact", error);
    return NextResponse.json(
      { error: "Internal error servidor" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const { name, surname, email, message } = await req.json();
    await connectToDB();

    await new Contact({ name, surname, email, message }).save();
    await transporter.sendMail({
      from: `"Portfolio "<${process.env.SMTP_USER}>`,
      to: email,
      subject: `Hello, ${name} ,good morning`,
      text: `Thank you for contact me>
      Send your mensaje: ${message}`,
      html: `  <h2>New contact message</h2>
        <p>Thank you for contact me.I receive your message.</p>
        <blockquote>${message}</blockquote>
        <p>I send message soon</p>`,
    });

    return NextResponse.json(
      { message: "Message send sucessfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error to crear /api/contact", error);
    return NextResponse.json(
      { error: "Internal Server error" },
      { status: 500 }
    );
  }
}
