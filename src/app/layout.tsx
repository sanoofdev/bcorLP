import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Pharmacy Billing Software in India | GST Ready | BCOR ERP",
  description:
    "Best pharmacy billing software with GST billing, inventory management, barcode scanning and accounting. Designed for medical shops and pharmacies in India.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<body
          className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} antialiased`}
        >
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
