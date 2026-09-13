import { MessageCircle } from "lucide-react";
import { callbackUrl } from "@/lib/sales-contact";

export function CallbackRequest() {
  return (
    <div className="max-w-md mx-auto py-8">
      <a href={callbackUrl} target="_blank" rel="noopener noreferrer" aria-label="Request a BCOR callback on WhatsApp" className="min-h-14 px-6 py-4 flex items-center justify-center gap-3 rounded-lg bg-teal-400 hover:bg-teal-300 text-zinc-950 font-semibold text-base focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
        <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" /> Request a Callback
      </a>
    </div>
  );
}
