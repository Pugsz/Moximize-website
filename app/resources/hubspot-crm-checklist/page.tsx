"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { Check } from "lucide-react";

const inside = [
  "Step-by-step pipeline design framework",
  "Contact & company property configuration",
  "Deal stage definitions with exit criteria",
  "Top 10 automation workflows to build first",
  "Reporting dashboards your leadership will actually use",
  "Team onboarding checklist for 90%+ HubSpot adoption",
];

export default function HubSpotChecklist() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.async = true;
    document.body.appendChild(script);
    script.onload = () => {
      (window as any).hbspt?.forms.create({
        portalId: "46052923",
        formId: "f99987c0-2f99-4532-948e-68d9ec84eab0",
        region: "na1",
        target: "#hs-resource-form",
        redirectUrl: "https://moximize.net/thank-you",
        onFormSubmitted: () => {
          window.location.href = "https://moximize.net/thank-you";
        },
      });
    };
    return () => { if (document.body.contains(script)) document.body.removeChild(script); };
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] text-[#e7e9ea]">
      <div className="max-w-[1100px] mx-auto px-6 py-20">
        <Link href="/#resources" className="text-[#29ABE2] text-[14px] font-semibold hover:underline mb-12 block">
          ← Back to Resources
        </Link>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] bg-[#29ABE2]/10 border border-[#29ABE2]/30 text-[#29ABE2] px-3 py-1 rounded-full mb-6">
              Free Guide
            </span>
            <h1 className="font-bold text-[clamp(28px,4vw,44px)] tracking-tight leading-[1.1] mb-5">
              The Complete HubSpot CRM Setup Checklist for B2B Teams
            </h1>
            <p className="text-[16px] leading-[1.7] text-[#72767a] mb-8">
              Most HubSpot implementations fail not because of the tool — but because of how it's set up. This step-by-step checklist covers everything your team needs to build a CRM that people actually use.
            </p>

            {/* Preview image */}
            <div className="relative w-full aspect-[16/9] rounded-[16px] overflow-hidden mb-8 border border-[#242628]">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="HubSpot CRM dashboard preview"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000]/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <span className="bg-[#29ABE2] text-black text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                  Free Checklist
                </span>
                <span className="text-white text-[12px] font-medium opacity-90">
                  6-step setup guide
                </span>
              </div>
            </div>

            <div className="bg-[#17181c] border border-[#242628] rounded-[20px] p-7 mb-8">
              <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#29ABE2] mb-4">What's inside</p>
              <ul className="space-y-3">
                {inside.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-[#d9d9d9]">
                    <Check className="w-4 h-4 text-[#29ABE2] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-3 text-[13px] text-[#72767a]">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2B4EA0] to-[#29ABE2] flex items-center justify-center text-white font-bold text-[12px]">M</span>
              Written by the Moximize team · HubSpot Certified Partners
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-[#17181c] border border-[#242628] rounded-[32px] overflow-hidden">
            <div className="h-[3px] bg-gradient-to-r from-[#2B4EA0] via-[#29ABE2] to-[#2B4EA0]" />
            <div className="p-10">
              <h2 className="font-bold text-[20px] mb-1">Get Instant Access</h2>
              <p className="text-[13px] text-[#72767a] mb-7">Free — no credit card required.</p>
              <div id="hs-resource-form" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
