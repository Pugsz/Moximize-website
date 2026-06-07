"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CheckCircle, Calendar, ArrowRight } from "lucide-react";

export default function ThankYou() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] text-[#e7e9ea] flex items-center justify-center px-6">
      <div
        className="max-w-[560px] w-full text-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-[#29ABE2]/10 border border-[#29ABE2]/30 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-[#29ABE2]" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="font-bold text-[clamp(30px,5vw,48px)] tracking-tight leading-[1.1] mb-4">
          You're all set!
        </h1>
        <p className="text-[16px] leading-[1.7] text-[#72767a] mb-10">
          Your resource is on its way to your inbox. While you wait — book a free
          20-min fit call and let's talk about how we can help you grow faster.
        </p>

        {/* CTA card */}
        <div className="bg-[#17181c] border border-[#242628] rounded-[24px] overflow-hidden mb-8">
          <div className="h-[3px] bg-gradient-to-r from-[#2B4EA0] via-[#29ABE2] to-[#2B4EA0]" />
          <div className="p-8">
            <div className="flex justify-center mb-4">
              <span className="w-12 h-12 rounded-full bg-[#29ABE2]/10 border border-[#29ABE2]/30 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-[#29ABE2]" />
              </span>
            </div>
            <h2 className="font-bold text-[20px] mb-2">Book a Free 20-Min Fit Call</h2>
            <p className="text-[14px] text-[#72767a] mb-6 leading-[1.6]">
              20 minutes. No pitch. Just a clear plan for your pipeline, outbound,
              or HubSpot setup — whatever you need most right now.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#29ABE2] hover:bg-[#1a9fd4] text-black font-bold px-7 py-3.5 rounded-full text-[15px] transition-colors"
            >
              Book a fit call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <Link
          href="/"
          className="text-[13px] text-[#72767a] hover:text-[#29ABE2] transition-colors"
        >
          ← Back to Moximize.net
        </Link>
      </div>
    </div>
  );
}
