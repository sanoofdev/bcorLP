import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, pharmacyName, phone, email, city, notes } = body;

    // Validate required fields
    if (!name || !pharmacyName || !phone || !email) {
      return NextResponse.json(
        { error: "Name, Pharmacy Name, Phone Number, and Email are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const cleanPhone = phone.replace(/\D/g, "");
    const waPhone = cleanPhone.startsWith("91") ? cleanPhone : `91${cleanPhone}`;
    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
    const smtpSecure = process.env.SMTP_SECURE === "true";
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const adminEmail = process.env.ADMIN_EMAIL || "support@bcor.in";
    const fromEmail = process.env.FROM_EMAIL || `"BCOR ERP" <support@bcor.in>`;

    // Check if SMTP is configured
    if (!smtpUser || !smtpPass) {
      console.log("-----------------------------------------");
      console.log("📌 [NEW DEMO LEAD RECEIVED - DEV MODE]");
      console.log(`Chemist Name: ${name}`);
      console.log(`Pharmacy Name: ${pharmacyName}`);
      console.log(`Phone: ${phone}`);
      console.log(`Email: ${email}`);
      console.log(`City: ${city || "N/A"}`);
      console.log(`Notes: ${notes || "N/A"}`);
      console.log(`Time: ${timestamp}`);
      console.log("-----------------------------------------");

      return NextResponse.json({
        success: true,
        message: "Demo request received successfully (Logged in dev mode).",
      });
    }

    // Configure Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Email 1: Admin Alert
    const adminMailOptions = {
      from: fromEmail,
      to: adminEmail,
      subject: `🚨 New Pharmacy Demo Lead: ${pharmacyName} (${city || "India"})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; padding: 24px; border-radius: 12px; border: 1px solid #e2e8f0;">
          <div style="background-color: #0d9488; padding: 16px; border-radius: 8px; text-align: center; margin-bottom: 20px;">
            <h2 style="color: #ffffff; margin: 0; font-size: 20px;">New Pharmacy Demo Request</h2>
          </div>
          <table style="width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0;">
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 12px 16px; font-weight: bold; color: #475569; width: 35%;">Chemist Name:</td>
              <td style="padding: 12px 16px; color: #0f172a;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9; background-color: #f8fafc;">
              <td style="padding: 12px 16px; font-weight: bold; color: #475569;">Pharmacy Name:</td>
              <td style="padding: 12px 16px; color: #0f172a; font-weight: bold;">${pharmacyName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 12px 16px; font-weight: bold; color: #475569;">Phone / Mobile:</td>
              <td style="padding: 12px 16px;">
                <a href="tel:${phone}" style="color: #0d9488; text-decoration: none; font-weight: bold;">${phone}</a>
                &nbsp;|&nbsp;
                <a href="https://wa.me/${waPhone}" style="color: #16a34a; text-decoration: none; font-weight: bold;">Chat on WhatsApp</a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9; background-color: #f8fafc;">
              <td style="padding: 12px 16px; font-weight: bold; color: #475569;">Email:</td>
              <td style="padding: 12px 16px;">
                <a href="mailto:${email}" style="color: #0d9488; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 12px 16px; font-weight: bold; color: #475569;">City / Region:</td>
              <td style="padding: 12px 16px; color: #0f172a;">${city || "Not provided"}</td>
            </tr>
            ${
              notes
                ? `
            <tr style="border-bottom: 1px solid #f1f5f9; background-color: #f8fafc;">
              <td style="padding: 12px 16px; font-weight: bold; color: #475569;">Notes:</td>
              <td style="padding: 12px 16px; color: #0f172a;">${notes}</td>
            </tr>
            `
                : ""
            }
            <tr>
              <td style="padding: 12px 16px; font-weight: bold; color: #475569;">Submission Time:</td>
              <td style="padding: 12px 16px; color: #64748b; font-size: 13px;">${timestamp}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; text-align: center;">
            <a href="tel:${phone}" style="background-color: #0d9488; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Call Lead Immediately</a>
          </div>
        </div>
      `,
    };

    // Email 2: Customer Confirmation
    const customerMailOptions = {
      from: fromEmail,
      to: email,
      subject: `Thank you for choosing BCOR ERP - Your Demo Request is Confirmed`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #0f172a; padding: 24px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">BCOR <span style="color: #2dd4bf;">ERP</span></h1>
            <p style="color: #94a3b8; margin: 6px 0 0 0; font-size: 13px; letter-spacing: 1px;">PHARMACY BILLING & INVENTORY SOFTWARE</p>
          </div>
          <div style="padding: 32px 24px;">
            <p style="font-size: 16px; color: #0f172a; margin-top: 0;">Dear <strong>${name}</strong>,</p>
            <p style="font-size: 15px; color: #475569; line-height: 1.6;">
              Thank you for requesting a demo of <strong>BCOR ERP</strong> for <strong>${pharmacyName}</strong>. We have received your details and our technical implementation specialist will contact you shortly to schedule your personalized live walkthrough.
            </p>
            
            <div style="background-color: #f0fdfa; border: 1px solid #ccfbf1; border-radius: 8px; padding: 20px; margin: 24px 0;">
              <h3 style="color: #0f766e; margin-top: 0; font-size: 16px; margin-bottom: 12px;">What Makes BCOR Different:</h3>
              <ul style="margin: 0; padding-left: 20px; color: #334155; font-size: 14px; line-height: 1.8;">
                <li><strong>Sub-2s Counter Billing:</strong> Fast keyboard shortcuts for peak rush hours.</li>
                <li><strong>100% Offline Capability:</strong> Runs locally on Windows with zero internet lag.</li>
                <li><strong>FEFO Expiry Management:</strong> Automatic early warnings to eliminate stock losses.</li>
                <li><strong>Drug Compliance Built-in:</strong> Automated Schedule H, H1 & narcotic registers.</li>
                <li><strong>One-Time Lifetime License:</strong> Zero monthly or annual recurring software rental fees.</li>
              </ul>
            </div>

            <p style="font-size: 14px; color: #475569; line-height: 1.6;">
              Need an instant demo or have urgent questions? You can reach our direct sales & support hotline immediately:
            </p>

            <div style="text-align: center; margin: 28px 0 12px 0;">
              <a href="https://wa.me/917994184506" style="background-color: #25D366; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; font-size: 15px; display: inline-block;">
                Chat with Us on WhatsApp (+91 7994184506)
              </a>
            </div>
          </div>
          
          <div style="background-color: #f8fafc; padding: 16px 24px; border-top: 1px solid #e2e8f0; text-align: center;">
            <p style="color: #64748b; font-size: 12px; margin: 0;">
              © ${new Date().getFullYear()} BCOR ERP. Designed for Indian Chemists & Medical Shops.<br/>
              Support: <a href="mailto:support@bcor.in" style="color: #0d9488;">support@bcor.in</a> | Phone: +91 7994184506
            </p>
          </div>
        </div>
      `,
    };

    // Send emails asynchronously
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(customerMailOptions),
    ]);

    return NextResponse.json({
      success: true,
      message: "Your demo request has been submitted successfully.",
    });
  } catch (error: any) {
    console.error("Error processing lead submission:", error);
    return NextResponse.json(
      { error: "Unable to process demo request at this moment. Please call +91 7994184506 directly." },
      { status: 500 }
    );
  }
}
