export default function Home() {
  return (
    <main className="min-h-screen pb-16 sm:pb-0">
      <Navbar />
      <Hero />
      <Features />
      <Compliance />
      <Stats />
      <WhyBCore />
      <Pricing />
      <CTA />

      {/* 🔥 SEO Internal Links Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Pharmacy Software Solutions
        </h2>

        <ul className="grid md:grid-cols-2 gap-4 text-lg">
          <li>
            <a href="/pharmacy-billing-software-india" className="text-blue-600 hover:underline">
              Pharmacy Billing Software in India
            </a>
          </li>

          <li>
            <a href="/gst-pharmacy-software" className="text-blue-600 hover:underline">
              GST Pharmacy Software
            </a>
          </li>

          <li>
            <a href="/pharmacy-inventory-management" className="text-blue-600 hover:underline">
              Pharmacy Inventory Management Software
            </a>
          </li>

          <li>
            <a href="/medical-shop-billing-software" className="text-blue-600 hover:underline">
              Medical Shop Billing Software
            </a>
          </li>

          <li>
            <a href="/pharmacy-software-kerala" className="text-blue-600 hover:underline">
              Pharmacy Software in Kerala
            </a>
          </li>
        </ul>
      </section>

      <Footer />
    </main>
  );
}
