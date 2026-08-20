import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { WhatsAppButton } from "@/components/landing";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bcor.in"),
  title: {
    default: "Pharmacy Billing Software in India | GST Ready | BCOR ERP",
    template: "%s | BCOR ERP",
  },
  description:
    "Fast GST pharmacy billing software for medical shops in India. Features expiry tracking, Schedule H1 compliance, offline billing, and lifetime license.",
  keywords: [
    "pharmacy billing software india",
    "medical shop billing software",
    "gst pharmacy software",
    "pharmacy inventory management",
    "chemist software offline",
    "schedule h1 register software",
  ],
  authors: [{ name: "BCOR ERP" }],
  creator: "BCOR ERP",
  publisher: "BCOR ERP",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://bcor.in",
    siteName: "BCOR ERP",
    title: "Pharmacy Billing Software in India | GST Ready | BCOR ERP",
    description:
      "Modern pharmacy billing & inventory software with GST compliance, expiry management, and 100% offline support.",
    images: [
      {
        url: "/erp.png",
        width: 1200,
        height: 630,
        alt: "BCOR Pharmacy ERP Dashboard Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pharmacy Billing Software in India | BCOR ERP",
    description:
      "GST billing, expiry tracking, and Schedule H1 compliance software for medical stores in India.",
    images: ["/erp.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://bcor.in/#software",
      "name": "BCOR ERP - Pharmacy Billing Software",
      "operatingSystem": "Windows 10, Windows 11",
      "applicationCategory": "BusinessApplication",
      "description": "GST-compliant pharmacy billing and inventory management software for medical stores in India.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "description": "One-time purchase lifetime license"
      },
      "featureList": [
        "GST Invoicing & Filing Reports",
        "Schedule H1 & Drug Compliance Tracking",
        "Batch & Expiry Date Management (FEFO)",
        "100% Offline Billing Support",
        "Barcode Scanning & Inventory Management"
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://bcor.in/#organization",
      "name": "BCOR ERP",
      "url": "https://bcor.in",
      "logo": "https://bcor.in/icon.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-7994184506",
        "contactType": "sales",
        "areaServed": "IN",
        "availableLanguage": ["en", "hi", "ml"]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://bcor.in/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does BCOR pharmacy software work without internet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, BCOR is an offline-first desktop application for Windows. Billing and stock management work completely offline and automatically sync when connected."
          }
        },
        {
          "@type": "Question",
          "name": "Is BCOR compliant with Indian GST and Schedule H1 regulations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, BCOR generates GST-compliant tax invoices, tax reports, and auto-maintains Schedule H1 and narcotic drug registers for inspection audits."
          }
        },
        {
          "@type": "Question",
          "name": "Is BCOR a subscription or a one-time purchase?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BCOR provides a one-time software purchase with a lifetime license, meaning no monthly or annual recurring software rental fees."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
