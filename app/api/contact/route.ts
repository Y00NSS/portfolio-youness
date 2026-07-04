import { createTransport } from 'nodemailer';
import { NextRequest, NextResponse } from "next/server";

interface RequestBody {
  name: string;
  email: string;
  message: string;
  interested: string;
}

export async function POST(request: NextRequest) {
  if (!request.body) {
    return NextResponse.json({message: 'Request body is empty'}, {status: 400});
  }

  const body = await request.json();

  const {name, email, message, interested}: RequestBody = body;

  const transport = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: process.env.GMAIL_USERNAME!,
      pass: process.env.GMAIL_PASSWORD!,
    },
  });

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Message</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .container {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            text-align: center;
            max-width: 600px;
            margin: auto;
        }
        h1 {
            color: red;
        }
        p {
            margin-bottom: 20px;
            color: #666;
            text-align: left;
        }
        .info {
            font-size: 18px;
            color: #7b68ee; /* Purple text */
            margin-bottom: 30px;
            text-align: left;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>New Contact Message</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Interested in:</strong> ${interested}</p>
        <div class="info">
            <strong>Message:</strong><br/>
            ${message}
        </div>
    </div>
</body>
</html>`;

  try {
    await transport.sendMail({
      from: process.env.GMAIL_USERNAME,
      to: process.env.GMAIL_FOR_RECEIVING_MESSAGE,
      subject: `${name} is interested in : ${interested}`,
      html,
    });

    return NextResponse.json({message: 'Email successfully sent.'}, {status: 200});
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({message: 'Error sending email'}, {status: 400});
  }

}
