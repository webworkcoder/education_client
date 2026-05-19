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
  background: #eef2f7;
  padding: 48px 20px;
  min-height: 100vh;
">
  <div style="
    max-width: 640px;
    margin: auto;
    background: #ffffff;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid #dde3ed;
  ">

    <!-- HEADER -->
    <div style="
      background: #0f172a;
      padding: 36px 40px;
    ">
      <div style="display: flex; align-items: center; gap: 16px;">
        <div>
          <h1 style="margin:0; color:#ffffff; font-size:20px; font-weight:700; letter-spacing:0.3px;">
            Topson Education
          </h1>
          <p style="margin:4px 0 0; color:#94a3b8; font-size:13px;">
            New Contact Form Submission
          </p>
        </div>
      </div>
    </div>

    <!-- BANNER STRIP -->
    <div style="
      background: #3b82f6;
      padding: 10px 40px;
      font-size: 12px;
      font-weight: 600;
      color: #ffffff;
      letter-spacing: 1.5px;
      text-transform: uppercase;
    ">
      Action Required — New Enquiry
    </div>

    <!-- BODY -->
    <div style="padding: 40px;">

      <p style="
        margin: 0 0 28px;
        font-size: 15px;
        color: #475569;
        line-height: 1.7;
      ">
        A prospective student has submitted an enquiry through the Topson Education website.
        Please reach out to them at the earliest convenience.
      </p>

      <!-- INFO CARDS -->
      <table style="width: 100%; border-collapse: separate; border-spacing: 0 12px; margin-bottom: 20px;">
        <tr>
          <td style="
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 16px 20px;
          ">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="width: 52px; vertical-align: middle;">
                  <div style="
                    width: 36px; height: 36px;
                    border-radius: 8px;
                    background: #eff6ff;
                    text-align: center;
                    line-height: 36px;
                    font-size: 18px;
                  ">👤</div>
                </td>
                <td style="vertical-align: middle;">
                  <p style="margin:0; font-size:11px; color:#94a3b8; letter-spacing:0.8px; text-transform:uppercase; font-weight:600;">Full Name</p>
                  <p style="margin:4px 0 0; font-size:15px; color:#0f172a; font-weight:600;">${name}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td style="
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 16px 20px;
          ">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="width: 52px; vertical-align: middle;">
                  <div style="
                    width: 36px; height: 36px;
                    border-radius: 8px;
                    background: #f0fdf4;
                    text-align: center;
                    line-height: 36px;
                    font-size: 18px;
                  ">📞</div>
                </td>
                <td style="vertical-align: middle;">
                  <p style="margin:0; font-size:11px; color:#94a3b8; letter-spacing:0.8px; text-transform:uppercase; font-weight:600;">Phone Number</p>
                  <p style="margin:4px 0 0; font-size:15px; color:#0f172a; font-weight:600;">${phone}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td style="
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 16px 20px;
          ">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="width: 52px; vertical-align: middle;">
                  <div style="
                    width: 36px; height: 36px;
                    border-radius: 8px;
                    background: #fef3c7;
                    text-align: center;
                    line-height: 36px;
                    font-size: 18px;
                  ">✉️</div>
                </td>
                <td style="vertical-align: middle;">
                  <p style="margin:0; font-size:11px; color:#94a3b8; letter-spacing:0.8px; text-transform:uppercase; font-weight:600;">Email Address</p>
                  <p style="margin:4px 0 0; font-size:15px; color:#0f172a; font-weight:600;">${email}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      <!-- CTA BUTTON -->
      <a href="mailto:${email}" style="
        display: block;
        text-align: center;
        background: #0f172a;
        color: #ffffff;
        text-decoration: none;
        padding: 14px 28px;
        border-radius: 10px;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0.4px;
        margin-bottom: 8px;
      ">
        Reply to ${name} &rarr;
      </a>

    </div>

    <!-- FOOTER -->
    <div style="
      background: #f1f5f9;
      border-top: 1px solid #e2e8f0;
      padding: 20px 40px;
    ">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="font-size:12px; color:#94a3b8;">© 2026 Topson Education</td>
          <td style="font-size:12px; color:#94a3b8; text-align:right;">Automated notification — do not reply</td>
        </tr>
      </table>
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
