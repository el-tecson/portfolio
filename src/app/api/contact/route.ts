import { NextResponse } from "next/server"
import { Resend } from "resend"
import constants from "@/data/constants.json"
import { z } from "zod"
import escape from "escape-html"
import arcjet, { shield, detectBot, tokenBucket } from "@arcjet/next"

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.email().max(254),
  subject: z.string().min(7).max(15),
  message: z.string().min(10).max(5000),
  turnstileToken: z.string().min(1),
})

const aj = arcjet({
  key: process.env.ARCJET_KEY!,

  rules: [
    shield({
      mode: "LIVE",
    }),

    detectBot({
      mode: "LIVE",
      allow: ["CATEGORY:SEARCH_ENGINE"],
    }),

    tokenBucket({
      mode: "LIVE",
      refillRate: 5,
      interval: 60,
      capacity: 10,
    }),
  ],
})

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const decision = await aj.protect(req, {
      requested: 1,
    })

    if (decision.isDenied()) {
      return NextResponse.json(
        { success: false },
        { status: 429 }
      )
    }

    const body = await req.json()

    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { success: false },
        { status: 400 }
      )
    }

    const { subject, name, email, message, turnstileToken } = parsed.data

    const verifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: turnstileToken,
        }),
      }
    )

    const verifyData = await verifyRes.json()

    if (!verifyData.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Turnstile verification failed",
        },
        {
          status: 400,
        }
      )
    }
    const safeName = escape(name)
    const safeEmail = escape(email)
    const safeSubject = escape(subject)
    const safeMessage = escape(message)

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",

      to: constants.email,

      subject: `[${subject}] Message from ${name}`,

      replyTo: email,

      html: `
                <div>
                    <h2>New Contact Form Message</h2>

                    <p>
                        <strong>Name:</strong>
                        ${safeName}
                    </p>

                    <p>
                        <strong>Email:</strong>
                        ${safeEmail}
                    </p>

                    <p>
                        <strong>Subject:</strong>
                        ${safeSubject}
                    </p>

                    <hr />

                    <p>${safeMessage}</p>
                </div>
            `,
    })

    return NextResponse.json({
      success: true,
    })
  } catch (err) {
    console.error(err)

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    )
  }
}
