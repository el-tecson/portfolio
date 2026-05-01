import { NextResponse } from "next/server";
import { Resend } from "resend";
import constants from "@/data/constants.json";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const {
            subject,
            name,
            email,
            message
        } = body;

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
                        ${name}
                    </p>

                    <p>
                        <strong>Email:</strong>
                        ${email}
                    </p>

                    <p>
                        <strong>Subject:</strong>
                        ${subject}
                    </p>

                    <hr />

                    <p>${message}</p>
                </div>
            `,
        });

        return NextResponse.json({
            success: true,
        });

    } catch (err) {
        console.error(err);

        return NextResponse.json(
            {
                success: false,
            },
            {
                status: 500,
            }
        );
    }
}