"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const ICONS_ROW1 = [
  { src: "https://cdn-icons-png.flaticon.com/512/174/174857.png",  label: "LinkedIn" },
  { src: "https://cdn-icons-png.flaticon.com/512/906/906324.png",  label: "Salesforce" },
  { src: "https://cdn-icons-png.flaticon.com/512/281/281763.png",  label: "Google" },
  { src: "https://cdn-icons-png.flaticon.com/512/5968/5968875.png", label: "Slack" },
  { src: "https://cdn-icons-png.flaticon.com/512/732/732084.png",  label: "Excel" },
  { src: "https://cdn-icons-png.flaticon.com/512/733/733585.png",  label: "YouTube" },
  { src: "https://cdn-icons-png.flaticon.com/512/888/888879.png",  label: "Notion" },
];

const ICONS_ROW2 = [
  { src: "https://cdn-icons-png.flaticon.com/512/5968/5968854.png", label: "Figma" },
  { src: "https://cdn-icons-png.flaticon.com/512/733/733609.png",   label: "Twitter" },
  { src: "https://cdn-icons-png.flaticon.com/512/888/888841.png",   label: "Stripe" },
  { src: "https://cdn-icons-png.flaticon.com/512/906/906361.png",   label: "WhatsApp" },
  { src: "https://cdn-icons-png.flaticon.com/512/732/732190.png",   label: "PowerPoint" },
  { src: "https://cdn-icons-png.flaticon.com/512/888/888847.png",   label: "Dropbox" },
  { src: "https://cdn-icons-png.flaticon.com/512/732/732221.png",   label: "Word" },
];

const repeat = (icons: typeof ICONS_ROW1, times = 4) =>
  Array.from({ length: times }).flatMap(() => icons);

interface IntegrationHeroProps {
  ctaHref?: string;
}

export default function IntegrationHero({ ctaHref = "#contact" }: IntegrationHeroProps) {
  return (
    <section className="relative py-[120px] overflow-hidden bg-[#000000]">
      {/* Dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Blue glow from bottom */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_110%,rgba(41,171,226,0.10),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2B4EA0]/20 to-[#29ABE2]/20 border border-[#29ABE2]/30 rounded-full px-4 py-1.5 mb-6">
          <span className="text-[#29ABE2] text-[13px] font-bold uppercase tracking-[0.1em]">⚡ Integrations</span>
        </div>

        {/* Heading */}
        <h2 className="font-bold text-[clamp(32px,4vw,56px)] tracking-[-0.02em] leading-[1.08] text-white mb-5">
          Your Entire Revenue Stack,{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2B4EA0] via-[#29ABE2] to-white">
            Fully Connected
          </span>
        </h2>

        <p className="text-[17px] leading-[1.7] text-[#72767a] max-w-[540px] mx-auto mb-8">
          We connect HubSpot with 20+ platforms — from AI prospecting tools to analytics,
          outreach, and CRM automations — so your pipeline runs on autopilot.
        </p>

        {/* CTA */}
        <a
          href={ctaHref}
          className="inline-flex items-center gap-2 font-semibold text-[15px] text-white bg-[#29ABE2] hover:bg-[#1A9DD8] px-7 py-3.5 rounded-xl transition-all shadow-[0_8px_24px_rgba(41,171,226,0.30)] hover:-translate-y-0.5 mb-14"
        >
          See How We Build Your Stack <ArrowRight className="w-4 h-4" />
        </a>

        {/* Scrolling icon rows */}
        <div className="relative overflow-hidden pb-2">
          {/* Row 1 — scrolls left */}
          <div className="flex gap-5 whitespace-nowrap animate-scroll-left mb-5">
            {repeat(ICONS_ROW1).map((icon, i) => (
              <div
                key={i}
                className="h-[72px] w-[72px] flex-shrink-0 rounded-2xl bg-[#17181c] border border-[#242628] flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.5)] hover:border-[#29ABE2]/40 transition-colors"
              >
                <img src={icon.src} alt={icon.label} className="h-9 w-9 object-contain" />
              </div>
            ))}
          </div>

          {/* Row 2 — scrolls right */}
          <div className="flex gap-5 whitespace-nowrap animate-scroll-right">
            {repeat(ICONS_ROW2).map((icon, i) => (
              <div
                key={i}
                className="h-[72px] w-[72px] flex-shrink-0 rounded-2xl bg-[#17181c] border border-[#242628] flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.5)] hover:border-[#29ABE2]/40 transition-colors"
              >
                <img src={icon.src} alt={icon.label} className="h-9 w-9 object-contain" />
              </div>
            ))}
          </div>

          {/* Fade edges */}
          <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#000000] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#000000] to-transparent pointer-events-none" />
        </div>

        {/* Stats strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
          {[
            { num: "20+", label: "Native integrations" },
            { num: "100%", label: "HubSpot certified" },
            { num: "1-click", label: "CRM sync" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <span className="font-extrabold text-[22px] text-[#29ABE2]">{s.num}</span>
              <span className="text-[14px] text-[#72767a]">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
