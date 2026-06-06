"use client";

import { useHubSpotForm } from "@/hooks/useHubSpotForm";

export default function HubSpotContactForm() {
  useHubSpotForm({ target: "#hs-contact-form", redirectUrl: "/thank-you" });

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-[radial-gradient(ellipse_at_50%_0%,rgba(41,171,226,0.08),transparent_70%)] pointer-events-none rounded-[40px]" />
      <div className="relative bg-[#17181c] border border-[#242628] rounded-[32px] overflow-hidden">
        <div className="h-[3px] bg-gradient-to-r from-[#2B4EA0] via-[#29ABE2] to-[#2B4EA0]" />
        <div className="p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2B4EA0] to-[#29ABE2] flex items-center justify-center text-white font-black text-[20px] shrink-0 shadow-[0_4px_16px_rgba(41,171,226,0.35)]">
              M
            </div>
            <div>
              <h2 className="font-bold text-[18px] text-white leading-tight">Book a 20-min fit call</h2>
              <p className="text-[13px] text-[#72767a] mt-0.5">No pitch. Straight talk.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {["✓ Free 20-min call", "✓ No commitment", "✓ Honest fit assessment"].map((t) => (
              <span key={t} className="text-[12px] font-semibold text-[#29ABE2] bg-[#29ABE2]/[0.07] border border-[#29ABE2]/20 rounded-full px-3 py-1">
                {t}
              </span>
            ))}
          </div>
          <div id="hs-contact-form" />
        </div>
      </div>
    </div>
  );
}
