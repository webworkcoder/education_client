import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, phone, email } = body;

    if (!name || !phone || !email) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: "Topson Education <onboarding@resend.dev>",
      to: ["webwork106@gmail.com"],
      subject: `New Contact Request - ${name}`,

      html: `
      <div style="
        font-family: Arial, sans-serif;
        background:#f4f7fb;
        padding:40px;
      ">
        <div style="
          max-width:700px;
          margin:auto;
          background:#ffffff;
          border-radius:18px;
          overflow:hidden;
          border:1px solid #e5e7eb;
          box-shadow:0 10px 30px rgba(0,0,0,0.08);
        ">

          <!-- HEADER -->
          <div style="
            background:linear-gradient(135deg,#3b4578,#6a7fb0);
            padding:30px;
            text-align:center;
          ">
            <h1 style="
              margin:0;
              color:white;
              font-size:28px;
              font-weight:700;
              letter-spacing:0.5px;
            ">
              Topson Education
            </h1>

            <p style="
              margin-top:10px;
              color:rgba(255,255,255,0.85);
              font-size:14px;
            ">
              New Contact Form Submission
            </p>
          </div>

          <!-- BODY -->
          <div style="padding:35px;">
            <h2 style="
              margin-top:0;
              color:#1f2937;
              font-size:22px;
              margin-bottom:25px;
            ">
              Contact Details
            </h2>

            <table style="
              width:100%;
              border-collapse:collapse;
              overflow:hidden;
              border-radius:12px;
            ">
              <tbody>
                <tr>
                  <td style="
                    padding:16px;
                    background:#f8fafc;
                    border:1px solid #e5e7eb;
                    font-weight:600;
                    width:180px;
                    color:#374151;
                  ">
                    Full Name
                  </td>

                  <td style="
                    padding:16px;
                    border:1px solid #e5e7eb;
                    color:#111827;
                  ">
                    ${name}
                  </td>
                </tr>

                <tr>
                  <td style="
                    padding:16px;
                    background:#f8fafc;
                    border:1px solid #e5e7eb;
                    font-weight:600;
                    color:#374151;
                  ">
                    Phone Number
                  </td>

                  <td style="
                    padding:16px;
                    border:1px solid #e5e7eb;
                    color:#111827;
                  ">
                    ${phone}
                  </td>
                </tr>

                <tr>
                  <td style="
                    padding:16px;
                    background:#f8fafc;
                    border:1px solid #e5e7eb;
                    font-weight:600;
                    color:#374151;
                  ">
                    Email Address
                  </td>

                  <td style="
                    padding:16px;
                    border:1px solid #e5e7eb;
                    color:#111827;
                  ">
                    ${email}
                  </td>
                </tr>
              </tbody>
            </table>

            <div style="
              margin-top:30px;
              padding:20px;
              background:#f8fafc;
              border-radius:12px;
              border-left:4px solid #3b4578;
            ">
              <p style="
                margin:0;
                color:#4b5563;
                font-size:14px;
                line-height:1.7;
              ">
                A new user has submitted the contact form from the Topson Education website.
                Please connect with them as soon as possible.
              </p>
            </div>
          </div>

          <!-- FOOTER -->
          <div style="
            background:#111827;
            padding:20px;
            text-align:center;
          ">
            <p style="
              margin:0;
              color:#9ca3af;
              font-size:13px;
            ">
              © 2026 Topson Education. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 },
    );
  }
}
