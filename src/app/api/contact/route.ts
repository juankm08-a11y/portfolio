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
    console.error("Error al obtener /api/contact", error);
    return NextResponse.json({ error: "Error del servidor" }, { status: 500 });
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
      subject: `Hola, ${name} ,buen dia`,
      text: `Gracias por contactarme>
      Recibi tu mensaje: ${message}`,
      html: `  <h2>Nuevo mensaje de contacto</h2>
        <p>Gracias por contactarme.Recibi tu mensaje</p>
        <blockquote>${message}</blockquote>
        <p>Te responderé pronto</p>`,
    });

    return NextResponse.json(
      { message: "Mensaje enviado exitosamente" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error al crear /api/contact", error);
    return NextResponse.json({ error: "Error del servidor" }, { status: 500 });
  }
}
