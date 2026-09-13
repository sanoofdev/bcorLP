import { Mail, Phone } from "lucide-react";
import { CallbackRequest } from "./CallbackRequest";

export function CTA() {
  return (
    <section id="demo" className="scroll-mt-20 bg-zinc-950 text-white py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <p className="text-sm font-semibold text-teal-300 mb-3">One click is enough</p>
        <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">Let BCOR call you back</h2>
        <p className="mt-4 text-zinc-300">Send one WhatsApp message. Our team will follow up.</p>
        <CallbackRequest />
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-zinc-300">
          <a href="tel:+919847434096" className="inline-flex items-center gap-2 hover:text-white"><Phone className="w-4 h-4" aria-hidden="true" />9847434096</a>
          <a href="mailto:bcor.sales@gmail.com" className="inline-flex items-center gap-2 hover:text-white"><Mail className="w-4 h-4" aria-hidden="true" />bcor.sales@gmail.com</a>
        </div>
      </div>
    </section>
  );
}
