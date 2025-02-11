import { Resend } from "resend";

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export default async function handler(
  req = NextApiRequest,
  res = NextApiResponse
) {
  if (req.method === "POST") {
    const { email, subject, message } = req.body;
    console.log("Email:", email, "Subject:", subject, "Message:", message);
    try {
      const data = await resend.emails.send({
        from: fromEmail,
        to: [fromEmail, email],
        subject: subject,
        html: `
          <h1>${subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>${message}</p>
        `,
      });

      return res.status(200).json({ message: "Email sent successfully", data });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" }); // If not POST
  }
}
