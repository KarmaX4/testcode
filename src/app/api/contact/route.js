import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        const { name, email, company, message } = await request.json();

        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "ecea412fcd6c91",
              pass: "924ba6aa1a9ec9"
            }
          });

        const mailOption = {
            from: 'info@skywaveinfosolutions.com',
            to: 'ravindra@skywaveinfosolutions.com',
            subject: "Send Email Tutorial",
            html: `
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Contact Information</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding: 0;
                        background-color: #f4f4f4;
                    }
                    .container {
                        max-width: 600px;
                        margin: auto;
                        padding: 20px;
                        background-color: #ffffff;
                        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                    }
                    h3 {
                        color: #333333;
                    }
                    ul {
                        list-style: none;
                        padding: 0;
                    }
                    li {
                        margin-bottom: 10px;
                    }
                    li strong {
                        font-weight: bold;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h3>Contact Information</h3>
                    <ul>
                        <li><strong>Name:</strong> ${name}</li>
                        <li><strong>Message:</strong> ${message}</li>
                        <li><strong>Email:</strong> <a href="mailto:${email}">${email}</a></li>
                        <li><strong>Company:</strong> ${company}</li>
                    </ul>
                </div>
            </body>
            </html> 
        `
        }

        await transport.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 })
    }
}