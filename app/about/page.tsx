import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Built for Operators | Moximize",
  description: "Moximize is founder-led. We build AI-powered lead generation and revenue systems for B2B teams — no account managers, no offshore delivery, no surprises.",
  alternates: { canonical: "https://moximize.net/about" },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#e7e9ea]">
      <div className="max-w-[800px] mx-auto px-6 py-20">
        <Link href="/" className="text-[#29ABE2] text-[14px] font-semibold hover:underline mb-12 block">
          ← Back to Moximize
        </Link>

        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] bg-[#29ABE2]/10 border border-[#29ABE2]/30 text-[#29ABE2] px-3 py-1 rounded-full mb-6">
          About
        </span>

        <h1 className="font-bold text-[clamp(36px,5vw,60px)] tracking-tight leading-[1.06] mb-12">
          Built for operators.<br />Run by one.
        </h1>

        {/* Founder section */}
        <div className="mb-16">
          <h2 className="font-bold text-[22px] text-[#29ABE2] mb-6">Why Moximize exists</h2>
          <div className="space-y-5 text-[16px] leading-[1.8] text-[#d9d9d9]">
            <p>
              Most B2B teams are stuck in the same place: they&apos;ve heard about AI, they know their pipeline is inconsistent, and they&apos;re still running the same manual processes they were running two years ago. Not because they don&apos;t want to change — because they don&apos;t have the time, the skills, or the right partner to build what actually works.
            </p>
            <p>
              We work with one type of company: B2B teams who want qualified pipeline and a revenue system that actually reflects how they sell. We don&apos;t do brand work, social media strategy, or anything that doesn&apos;t connect directly to revenue. Everything we build is designed to generate meetings, close deals, and free your team from manual work.
            </p>
            <p>
              This is founder-led work. You&apos;ll work directly with me — not an account manager, not an offshore team. I built these systems because I needed them, and now I build them for companies that need the same thing but don&apos;t have six months to figure it out themselves.
            </p>
          </div>

          <div className="mt-10 flex items-center gap-5 p-6 bg-[#17181c] border border-[#242628] rounded-[20px]">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2B4EA0] to-[#29ABE2] flex items-center justify-center text-white font-black text-[22px] shrink-0">
              N
            </div>
            <div>
              <p className="font-bold text-[17px]">Nic Guiao</p>
              <p className="text-[14px] text-[#72767a]">Founder, Moximize</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="font-bold text-[clamp(24px,3vw,36px)] mb-8">How we work</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Systems not services",
                body: "We build things that run on their own. The goal is always to reduce your team&apos;s manual workload, not create more dependency on us.",
              },
              {
                title: "CRM-native",
                body: "We build inside your CRM, not around it. Every workflow, every AI integration, every automation lives in the system your team already uses.",
              },
              {
                title: "Operator-built",
                body: "Everything we recommend is something we&apos;ve built and used ourselves. No theoretical frameworks. No recycled playbooks from a different industry.",
              },
              {
                title: "Outcome-priced",
                body: "Our pricing is tied to what we deliver, not how many hours we log. We define the outcome upfront and price accordingly.",
              },
            ].map((v) => (
              <div key={v.title} className="p-6 bg-[#17181c] border border-[#242628] rounded-[16px]">
                <h3 className="font-bold text-[17px] mb-2 text-[#29ABE2]">{v.title}</h3>
                <p className="text-[14px] text-[#72767a] leading-[1.65]">{v.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 bg-[#17181c] border border-[#242628] rounded-[24px] text-center">
          <h3 className="font-bold text-[20px] mb-2">Want to work together?</h3>
          <p className="text-[14px] text-[#72767a] mb-6">Book a 20-minute fit call. No pitch — just a straight conversation about whether we&apos;re the right fit for your team.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#29ABE2] hover:bg-[#1a9fd4] text-black font-bold px-7 py-3.5 rounded-full text-[15px] transition-colors">
            Book a fit call →
          </Link>
        </div>
      </div>
    </div>
  );
}
