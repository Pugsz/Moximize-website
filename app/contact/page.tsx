import Link from "next/link";
import type { Metadata } from "next";
import HubSpotContactForm from "./HubSpotContactForm";

export const metadata: Metadata = {
  title: "Book a 20-Min Fit Call | Moximize",
  description: "Book a free 20-minute fit call with Nic. We'll tell you honestly whether we're the right fit.",
  alternates: { canonical: "https://moximize.net/contact" },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#e7e9ea]">
      <div className="max-w-[900px] mx-auto px-6 py-20">
        <Link href="/" className="text-[#29ABE2] text-[14px] font-semibold hover:underline mb-12 block">
          ← Back to Moximize
        </Link>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left column */}
          <div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] bg-[#29ABE2]/10 border border-[#29ABE2]/30 text-[#29ABE2] px-3 py-1 rounded-full mb-6">
              Book a Call
            </span>
            <h1 className="font-bold text-[clamp(32px,4vw,48px)] tracking-tight leading-[1.08] mb-5">
              Book a 20-min fit call
            </h1>
            <p className="text-[16px] text-[#d9d9d9] leading-[1.7] mb-10">
              We&apos;ll look at your HubSpot setup, understand your goals, and tell you honestly whether Moximize is the right fit. No pitch — just a straight conversation. If we&apos;re not the right fit, we&apos;ll tell you that too and point you toward who is.
            </p>

            {/* What happens on the call */}
            <div className="rounded-[16px] border border-[#242628] bg-[#17181c] p-6 mb-8">
              <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#29ABE2] mb-4">What happens on the call</p>
              <ul className="space-y-3">
                {[
                  "We'll look at your current HubSpot setup and pipeline",
                  "Tell you honestly whether Moximize is a fit for your stage",
                  "If we're not the right fit, we'll point you toward who is",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] text-[#d9d9d9]">
                    <span className="w-5 h-5 rounded-full bg-[#29ABE2]/10 border border-[#29ABE2]/20 text-[#29ABE2] text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 text-[14px] text-[#72767a]">
              <a href="mailto:nic@moximize.net" className="hover:text-[#29ABE2] transition-colors">
                nic@moximize.net
              </a>
              <a href="https://linkedin.com/company/moximize" target="_blank" rel="noopener noreferrer" className="hover:text-[#29ABE2] transition-colors">
                linkedin.com/company/moximize
              </a>
            </div>
          </div>

          {/* Right column — HubSpot form */}
          <HubSpotContactForm />

        </div>
      </div>
    </div>
  );
}
