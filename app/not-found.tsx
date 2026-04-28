import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found — Moximize",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#e7e9ea] flex items-center justify-center px-6">
      <div className="text-center max-w-[500px]">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-[20px] bg-gradient-to-br from-[#2B4EA0] to-[#29ABE2] mb-8 text-[40px] font-black text-white">
          M
        </div>

        <p className="text-[#29ABE2] text-[13px] font-bold uppercase tracking-[0.12em] mb-3">
          404 — Page Not Found
        </p>

        <h1 className="font-bold text-[48px] leading-[1.08] tracking-tight mb-4">
          Nothing here.
        </h1>

        <p className="text-[#72767a] text-[16px] leading-[1.7] mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="font-semibold text-[15px] text-white bg-[#29ABE2] hover:bg-[#1A9DD8] px-6 py-3 rounded-xl transition-all flex items-center gap-2 shadow-[0_8px_24px_rgba(41,171,226,0.3)]"
          >
            Back to Home <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/#contact"
            className="font-semibold text-[15px] text-[#72767a] hover:text-[#e7e9ea] px-6 py-3 rounded-xl border border-[#242628] hover:border-[#29ABE2]/50 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
