import type { VercelRequest, VercelResponse } from "@vercel/node"
import nodemailer from "nodemailer"
import rateLimit from "express-rate-limit"

// Rate limiter: 5 requests per 15 minutes per IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  validate: false,
  message: { error: "Too many requests, please try again later." },
})

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "2mb", // limit to 2MB
    },
  },
}

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  // Apply rate limiter
  await new Promise<void>((resolve) => {
    limiter(req, res as any, () => resolve())
  })

  const { name, email, message } = req.body || {}

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Please enter a valid email address" })
  }

  if (name.trim().length < 2) {
    return res.status(400).json({ error: "Name must be at least 2 characters" })
  }

  // Check for SMTP configuration
  const smtpHost = process.env.SMTP_HOST
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS

  if (smtpHost && smtpUser && smtpPass) {
    // Configure nodemailer with provided SMTP credentials
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    const mailOptions = {
      from: `"Ali Hassan Portfolio" <${smtpUser}>`,
      to: smtpUser,
      replyTo: email,
      subject: `New contact form message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    }

    try {
      await transporter.sendMail(mailOptions)
      return res.status(200).json({ success: "Message sent successfully!" })
    } catch (error) {
      console.error("Email send error:", error)
      return res.status(500).json({ error: "Failed to send email" })
    }
  }

  console.error("Contact form email delivery is not configured")
  return res.status(503).json({ error: "Contact form email delivery is not configured yet" })
}