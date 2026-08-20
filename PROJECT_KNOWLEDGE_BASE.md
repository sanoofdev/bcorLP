# BCOR ERP — Complete Project Knowledge Base (A-Z)

> **Document Version:** 1.0.0  
> **Target Project:** BCOR Pharmacy ERP Landing Page & Web Platform  
> **Production Domain:** `https://bcor.in`  
> **Primary Audience:** Retail Chemists, Pharmacy Chains, Medical Store Owners, Hospital Pharmacies in India  

---

## 1. Executive Summary & Brand Overview

### 1.1 Brand Identity
* **Brand Name:** BCOR ERP (also referred to as B-Core)
* **Tagline:** *"Run Your Pharmacy Faster, Serve More. Stress Less."*
* **Core Value Proposition:** Fast, reliable, 100% offline-capable pharmacy management software built exclusively for Indian chemists with built-in GST compliance, Schedule H1 drug register tracking, and a **one-time lifetime license** (zero monthly or yearly subscription fees).
* **Official Contact:**
  * **Primary Sales & Support:** `+91 7994184506` / `+91 9847434096`
  * **Email:** `support@bcor.in`
  * **Location:** India (Specialized presence in Kerala & Malabar Region)

### 1.2 Key Differentiators vs Generic POS
1. **Built Exclusively for Pharmacies:** Unlike generic retail POS software, BCOR natively handles drug schedules, batch numbers, expiry alerts, and doctor/patient prescription records.
2. **True Offline-First Architecture:** Operates 100% locally on Windows desktop with zero latency and no internet dependency; automatically syncs when connectivity is available.
3. **No Subscription Lock-in:** One-time purchase with lifetime ownership. 1 Year free support included with optional annual AMC.
4. **Sub-2-Second Billing Speed:** Optimized for peak pharmacy rush hours.

---

## 2. Product Capabilities & Features (A to Z)

| Feature Area | Description & Technical Capability |
| :--- | :--- |
| **A — Audit & Inspection Readiness** | Auto-generates statutory reports required by the State Drug Control Department on demand. |
| **B — Batch & Expiry Management** | Enforces **FEFO** (First Expiry, First Out) rules automatically during dispensing to eliminate stock loss. |
| **C — Compliance & Schedule H1** | Dedicated registers for Schedule H, H1, and narcotic drugs with doctor name, patient name, and prescription logs. |
| **D — Desktop-First Native Performance** | Built for Windows 10/11 with low resource footprint (runs smoothly on 4GB RAM). |
| **E — Encrypted Local Backups** | Full data ownership. Backups are stored locally on the client machine with automatic encrypted exports. |
| **F — Fast Barcode Billing** | Sub-2-second transaction speed with instant barcode scanning, shortcut keys, and thermal printer integration. |
| **G — GST Invoicing & Tax Filing** | Automatic CGST, SGST, IGST tax breakdown, HSN code lookups, B2B/B2C invoice generation, and GSTR-ready data exports. |
| **H — Hardware Compatibility** | Works seamlessly with standard thermal receipt printers, laser printers, barcode scanners, and cash drawers. |
| **I — Inventory Control & Stock Alerts** | Real-time stock tracking with low-stock warnings, reorder level notifications, and supplier purchase orders. |
| **J — Journal & Financial Accounting** | Built-in ledger management, accounts payable/receivable, supplier payment tracking, and day-end cash registers. |
| **K — Kerala & Regional Compliance** | Tailored to Kerala Drugs Control standards, local distributor invoice formats, and regional tax norms. |
| **L — Lifetime License Model** | Pay-once ownership. No recurring monthly or annual software lockouts. |
| **M — Multi-User Role Access** | Granular permissions (Cashier, Pharmacist, Store Manager, Admin) to prevent unauthorized discounts or stock edits. |
| **N — Network & Offline Sync** | Complete offline billing with automatic background cloud synchronization when connected. |
| **O — One-Click Returns & Credit Notes** | Fast sales return processing, supplier expiry returns, and credit note adjustments. |
| **P — Patient & Doctor Records** | Store prescription history, frequent customer discounts, chronic patient medication reminders. |
| **Q — Quick Search by Salt/Generic Name** | Search medicines by brand name, salt composition, or generic substitute instantly at POS. |
| **R — Reports (50+ Built-in)** | Daily sales summary, fast-moving items, dead stock analysis, margin reports, and tax audits. |
| **S — Support & Remote Assistance** | Phone, WhatsApp, and remote desktop support with an average response time under 5 minutes. |
| **T — Tamper-Resistant Records** | Immutable transaction logs to prevent unauthorized invoice alterations or compliance discrepancies. |
| **U — Unlimited Users & Terminals** | Multi-counter network support within the pharmacy premises. |
| **V — Vendor & Supplier Management** | Track supplier purchase orders, distributor invoices, payment credit terms, and purchase returns. |
| **W — WhatsApp & SMS Invoicing** | Send digital bill copies directly to customer phones to save paper and printing costs. |
| **X — eXpiry Loss Prevention System** | Automated advance alerts 30/60/90 days before medicine expiration for return-to-vendor processing. |
| **Y — Year-End Financial Closing** | Automated financial year transitions with seamless ledger roll-overs and stock valuations. |
| **Z — Zero Lag Architecture** | High-performance local database engine capable of handling 50,000+ medicine SKUs without slowdowns. |

---

## 3. Technology Stack & Architecture

### 3.1 Web & Landing Page Stack
* **Framework:** Next.js 15.5.9 (React 19.2.0, App Router)
* **Styling:** Tailwind CSS v4 + `@tailwindcss/postcss`
* **Animations:** Framer Motion (`framer-motion@12.23.24`)
* **Icons:** Lucide React (`lucide-react@0.554.0`)
* **UI Primitives:** Radix UI (`@radix-ui/react-*`) & CVA (`class-variance-authority`)
* **Language & Types:** TypeScript 5.9.3
* **Bundler & Engine:** Next.js Turbopack

### 3.2 Desktop Application Profile (B-Core ERP Client)
* **Platform:** Native Windows Application (Windows 10, Windows 11)
* **RAM Requirement:** Minimum 4GB RAM
* **Storage Footprint:** ~150 MB disk space
* **Architecture:** Local database engine with cloud sync capability

---

## 4. Complete SEO & Information Architecture

### 4.1 Keyword Targeting Matrix

| Keyword Tier | Target Queries | Search Intent | Target URL |
| :--- | :--- | :--- | :--- |
| **Primary Commercial** | `pharmacy billing software india`, `medical shop billing software` | Commercial / Transactional | `/`, `/pharmacy-billing-software-india` |
| **Compliance & Tax** | `gst pharmacy software`, `schedule h1 register software` | Informational / Commercial | `/gst-pharmacy-software` |
| **Inventory & POS** | `pharmacy inventory management software`, `medical store pos offline` | Commercial | `/pharmacy-inventory-management` |
| **Regional / Local SEO** | `pharmacy software in kerala`, `pharmacy software calicut`, `medical shop billing software kozhikode` | Local Commercial | `/pharmacy-software-kerala`, `/pharmacy-software-calicut` |

### 4.2 Route Directory & Sitemap Structure

```
https://bcor.in/
├── / (Homepage)
├── /pharmacy-billing-software-india (Primary Pillar Page)
├── /gst-pharmacy-software (Feature Cluster: GST Billing)
├── /pharmacy-inventory-management (Feature Cluster: Inventory & FEFO)
├── /medical-shop-billing-software (Audience Cluster: Medical Shops & Chemists)
├── /pharmacy-software-kerala (Geo Cluster: Kerala State)
├── /pharmacy-software-calicut (Geo Cluster: Calicut / Kozhikode City)
├── /sitemap.xml (Auto-generated XML Sitemap)
└── /robots.txt (Crawler Directive File)
```

### 4.3 Structured Data (Schema.org JSON-LD) Blueprint
Every production page should deliver structured data with:
1. **SoftwareApplication Schema:** Specifying software category (`BusinessApplication`), operating systems (`Windows 10, 11`), price (`INR 0` / Free demo with one-time purchase), and features.
2. **Organization / LocalBusiness Schema:** Official logo, contact point, and support lines.
3. **FAQPage Schema:** Addressing offline support, GST filing, licensing terms, and hardware support for Google Search Rich Results.
4. **BreadcrumbList Schema:** On all sub-routes to enhance SERP navigational snippets.

---

## 5. Pricing & Licensing Strategy

```
┌─────────────────────────────────────────────────────────────┐
│                 BCOR ERP LIFETIME LICENSE                   │
│                                                             │
│  ✔ One-Time Software Purchase                               │
│  ✔ Lifetime Usage Rights (No Monthly/Annual Rent)           │
│  ✔ 100% Offline Billing Engine                              │
│  ✔ Unlimited Billing Users & Counters                       │
│  ✔ Complete Inventory, GST & Schedule H1 Modules            │
│  ✔ Free Software Updates                                    │
│  ✔ 1 Year Free Dedicated Support Included                   │
│  ✔ Optional Annual Maintenance Contract (AMC) after Year 1  │
└─────────────────────────────────────────────────────────────┘
```

### Value Propositions for Chemists:
* **No Recurring Burden:** Unlike SaaS platforms that charge ₹1,000–₹3,000 every month, BCOR ensures zero ongoing subscription pressure.
* **No Sudden Access Locks:** The pharmacy never faces shut-down risks due to lapsed credit cards or internet connectivity issues.

---

## 6. Landing Page Component Inventory

* **[`Navbar.tsx`](file:///src/components/landing/Navbar.tsx):** Sticky/floating navigation with branded emblem, desktop navigation anchors, phone CTA (`+91 7994184506`), and mobile hamburger drawer.
* **[`Hero.tsx`](file:///src/components/landing/Hero.tsx):** Trust badge (*"Used by 100+ pharmacies across India"*), main value proposition, primary call-to-action buttons, and high-fidelity desktop ERP dashboard preview.
* **[`Features.tsx`](file:///src/components/landing/Features.tsx):** 6 key pharmacy workflows (Lightning-Fast Billing, Expiry & Batch Tracking, Drug & Schedule H1, Reports, Multi-User, Offline-First).
* **[`Compliance.tsx`](file:///src/components/landing/Compliance.tsx):** Detailed regulatory compliance breakdown (Inspection-ready logs, tamper-resistant registers, local data control).
* **[`Stats.tsx`](file:///src/components/landing/Stats.tsx):** Social proof metrics (100+ Pharmacies, ₹50L+ Daily Volume, 99.9% Uptime, <2s Billing).
* **[`WhyBCore.tsx`](file:///src/components/landing/WhyBCore.tsx):** Detailed technical specifications, Windows desktop compatibility card, and customer support guarantee.
* **[`Pricing.tsx`](file:///src/components/landing/Pricing.tsx):** Transparent lifetime licensing terms, support policies, and AMC details.
* **[`CTA.tsx`](file:///src/components/landing/CTA.tsx):** High-converting closing banner with direct telephone trigger and demo request.
* **[`Footer.tsx`](file:///src/components/landing/Footer.tsx):** Company contact points (Phone, Support Email, India location badge), navigation links, and copyright notices.

---

## 7. Developer & Operations Guide

### 7.1 Local Development Commands
```bash
# Install dependencies
npm install

# Start local development server with Turbopack
npm run dev

# Run production build
npm run build

# Start production server
npm start

# Run ESLint validation
npm run lint
```

### 7.2 Core Web Vitals Guidelines
* **Image Optimization:** Always use `next/image` with explicit `width`, `height`, and responsive `sizes` instead of raw `<img>` tags.
* **Above-the-Fold Priority:** Apply `priority` attribute to the Hero preview image (`/erp.png`) to maximize Largest Contentful Paint (LCP) score.
* **Font Loading:** Use `next/font/google` with `display: 'swap'` and avoid loading excessive unused weights.
* **Mobile Touch Targets:** Ensure all buttons, phone links, and navigation items meet the minimum 44x44px touch target guidelines.
