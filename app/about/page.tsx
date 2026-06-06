import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Moximize",
  description: "Moximize builds AI-powered sales and marketing systems on HubSpot for US B2B teams. Founded by Steven Nichol Guiao.",
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
          About Moximize
        </span>

        <h1 className="font-bold text-[clamp(32px,5vw,52px)] tracking-tight leading-[1.1] mb-6">
          We build the infrastructure.<br />You do the selling.
        </h1>
        <p className="text-[18px] text-[#72767a] leading-[1.7] mb-16">
          Moximize builds AI-powered sales and marketing systems on top of HubSpot so US B2B teams can generate, qualify, and close more pipeline — without hiring more people.
        </p>

        {/* Founder note */}
        <div className="flex flex-col sm:flex-row gap-8 items-start mb-16 p-8 bg-[#17181c] border border-[#242628] rounded-[24px]">
          <div className="shrink-0">
            <div className="w-20 h-20 rounded-full bg-[#000000] border-2 border-[#242628] overflow-hidden">
              <img src="/logo.png" alt="Steven Nichol Guiao" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="space-y-4 text-[15px] text-[#d9d9d9] leading-[1.85]">
            <p>I started Moximize because I kept seeing the same problem: B2B companies investing heavily in HubSpot and AI tools, but getting almost nothing out of them. The tools weren't the issue. The lack of a coherent system was.</p>
            <p>Most agencies sell strategy decks and then disappear. Most tool vendors sell features and assume you'll figure out the workflow. What I found was that the real work — the architecture, the integrations, the data cleanup, the ongoing iteration — wasn't being done by anyone. It fell into the gap between "we bought HubSpot" and "we need pipeline."</p>
            <p>Moximize closes that gap. We design the system, build it inside HubSpot, connect the AI to your real data, and operate it with you. Every system we ship is yours to own — no ongoing dependency on us, no proprietary black box. Just infrastructure that works.</p>
            <p>If that's you, I'd like to talk.</p>
            <div className="pt-2">
              <div className="font-bold text-white">Steven Nichol Guiao</div>
              <div className="text-[13px] text-[#72767a]">Founder, Moximize</div>
            </div>
          </div>
        </div>

        {/* Standards */}
        <div className="mb-16">
          <h2 className="font-bold text-[22px] text-white mb-6">The standard we hold</h2>
          <div className="space-y-3">
            {[
              { title: "We only take work we can do well.", body: "We don't pitch industries we don't understand or timelines we can't hit. If a project isn't a fit, we say so — directly, on the first call." },
              { title: "We build systems, not deliverables.", body: "A strategy deck that sits unread is not a deliverable — it's a waste of your budget. Everything we ship is operational: it runs, it produces output, and you can measure it." },
              { title: "You own everything we build.", body: "No proprietary platforms, no data trapped in our systems, no ongoing access fees. If you stop working with us tomorrow, you keep the infrastructure. Full stop." },
              { title: "We report on outcomes, not activities.", body: "Our monthly reviews are built around pipeline data, not hour counts or feature lists. If it's not moving the number, it's not working — and we'll say that." },
            ].map((s, i) => (
              <div key={i} className="bg-[#17181c] border border-[#242628] rounded-[16px] p-6">
                <h3 className="font-bold text-white mb-2">{s.title}</h3>
                <p className="text-[14px] text-[#72767a] leading-[1.7]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Who we work with */}
        <div className="mb-16">
          <h2 className="font-bold text-[22px] text-white mb-4">Who we work with</h2>
          <p className="text-[15px] text-[#72767a] mb-6">We focus exclusively on US B2B companies. The industries we serve most often:</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "B2B SaaS — Series A through Series C",
              "Professional services firms",
              "Healthcare technology",
              "Financial technology and fintech",
              "Industrial and manufacturing tech",
              "Consulting and advisory firms",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-[14px] text-[#d9d9d9] bg-[#17181c] border border-[#242628] px-4 py-3 rounded-[12px]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#29ABE2] shrink-0" />
                {item}
              </div>
            ))}
          </div>
          <p className="text-[13px] text-[#4a4c50] mt-4">We don't work with e-commerce, B2C, consumer brands, or companies not on HubSpot.</p>
        </div>

        {/* CTA */}
        <div className="p-8 bg-[#17181c] border border-[#242628] rounded-[24px] text-center">
          <h3 className="font-bold text-[22px] mb-2">Want to see if we're a fit?</h3>
          <p className="text-[14px] text-[#72767a] mb-6">Book a 20-minute call. We'll look at your current setup and tell you exactly what we'd build.</p>
          <Link href="/get-started" className="inline-flex items-center gap-2 bg-[#29ABE2] hover:bg-[#1a9fd4] text-black font-bold px-7 py-3.5 rounded-full text-[15px] transition-colors">
            Book a 20-min fit call →
          </Link>
        </div>
      </div>
    </div>
  );
}
