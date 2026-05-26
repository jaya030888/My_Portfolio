import { Resend } from "resend";

const recipient = "jayamyname19@gmail.com";

type ContactForm = {
  Name?: string;
  Email?: string;
  Budget?: string;
  Description?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactForm;
    const name = body.Name?.trim();
    const email = body.Email?.trim();
    const budget = body.Budget?.trim();
    const description = body.Description?.trim();

    if (!name || !email || !budget || !description) {
      return Response.json(
        { message: "Please fill every field." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured.");
      return Response.json(
        { message: "Unable to send inquiry right now." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Portfolio Inquiry <onboarding@resend.dev>",
      to: recipient,
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Budget: ${budget}`,
        "",
        "Project Description:",
        description,
      ].join("\n"),
    });

    return Response.json({ message: "Inquiry sent." });
  } catch (error) {
    console.error("Contact form email failed:", error);
    return Response.json(
      { message: "Unable to send inquiry right now." },
      { status: 500 }
    );
  }
}
