import type { Metadata } from "next";
import { Navbar, CTA, Footer } from "@/components/landing";
import { CheckCircle2, HelpCircle, MapPin, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Brand Clarity | bcor.in - Understanding Our Name Variations",
  description:
    "Learn about the different ways our brand is referenced and why bcor.in is the official domain for our pharmacy billing software in Kerala and India.",
  alternates: {
    canonical: "/brand-clarity",
  },
};

export default function BrandClarityPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative bg-slate-50 pt-32 pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-teal-50 border border-teal-200 rounded-full text-teal-700 text-xs font-semibold mb-6">
              <HelpCircle className="w-3.5 h-3.5" /> Brand Clarity & Official Domain
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Understanding Our Brand Name & Official Website
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
              Confused about the different ways our brand is written? This page clarifies our official name, domain, and common variations to ensure you always reach the genuine bcor.in pharmacy billing software.
            </p>
          </div>
        </div>
      </header>

      {/* Brand Clarity Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Our Official Brand & Domain
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mb-4">
                The official name of our company and product is <strong className="text-teal-600">bcor.in</strong>. This is our registered domain and the primary way we are known in the market.
              </p>
              <p className="text-sm sm:text-base text-slate-600">
                When searching for our pharmacy billing software, always use <code className="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">bcor.in</code> to ensure you find our genuine product and avoid counterfeit or unofficial sources.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Common Variations & What They Mean
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">bcor.in (Official)</h3>
                    <p className="text-sm text-slate-600">
                      This is our official domain and brand name. Use this for all searches, visits, and communications.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-slate-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">bcore</h3>
                    <p className="text-sm text-slate-600">
                      A common variation where the dot is omitted and the 'in' is sometimes dropped. This refers to the same brand but is not our official domain.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-slate-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">b-core</h3>
                    <p className="text-sm text-slate-600">
                      Another variation with a hyphen. Often used in informal writing or when the dot is harder to type.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-slate-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">b.cor</h3>
                    <p className="text-sm text-slate-600">
                      Sometimes seen with the dot placed after the 'b'. This is less common but still refers to our brand.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-slate-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">b/core</h3>
                    <p className="text-sm text-slate-600">
                      Seen with a forward slash, often in URLs or file paths. This is not our official domain but a variation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-slate-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">cbore</h3>
                    <p className="text-sm text-slate-600">
                      A common misspelling or typo. Always double-check to ensure you're using the correct spelling.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Why the Confusion Matters
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mb-4">
                Using the correct domain ensures you:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-sm sm:text-base text-slate-600">
                <li>Access the genuine, secure bcor.in pharmacy billing software.</li>
                <li>Receive official updates, support, and warranty coverage.</li>
                <li>Avoid phishing sites or counterfeit software that could compromise your pharmacy data.</li>
                <li>Get accurate information about pricing, features, and availability.</li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                How to Verify You're on the Official Site
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mb-4">
                Always check the address bar for:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base text-slate-600">
                <li>The protocol: <code className="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">https://</code></li>
                <li>The domain: <strong className="text-teal-600">bcor.in</strong></li>
                <li>A valid SSL certificate (look for the padlock icon).</li>
              </ul>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                If you see any other domain (like bcore.com, bcor.org, or variations with different TLDs), you are not on our official site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}