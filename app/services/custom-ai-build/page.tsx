import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom AI Build — AI Applications for Your Business | Moximize",
  description: "We build the AI application your business actually needs — lead scoring, CRM automation, custom AI workflows, or a fully custom AI product. From $7,500 project.",
  alternates: { canonical: "https://moximize.net/services/custom-ai-build" },
};

export default function CustomAIBuildPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#e7e9ea]">
      <div className="max-w-[900px] mx-auto px-6 py-20">
        <Link href="/" className="text-[#29ABE2] text-[14px] font-semibold hover:underline mb-12 block">
          ← Back to Moximize
        </Link>

        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] bg-[#29ABE2]/10 border border-[#29ABE2]/30 text-[#29ABE2] px-3 py-1 rounded-full mb-6">
          Service
        </span>
        <h1 className="font-bold text-[clamp(32px,5vw,56px)] tracking-tight leading-[1.08] mb-4">
          Custom AI Build
        </h1>
        <p className="text-[20px] text-[#72767a] leading-[1.6] mb-4 max-w-[680px]">
          We build the AI application your business actually needs.
        </p>
        <p className="text-[16px] text-[#d9d9d9] leading-[1.7] mb-6 max-w-[680px]">
          Not a template. Not a HubSpot plugin. A custom AI application built for your specific use case — whether that&apos;s automating your sales ops, scoring leads, routing deals, or building an entirely new AI-powered product.
        </p>
        <div className="flex flex-wrap gap-4 mb-16">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#29ABE2] hover:bg-[#1a9fd4] text-black font-bold px-7 py-3.5 rounded-full text-[15px] transition-colors">
            Book a fit call →
          </Link>
          <span className="inline-flex items-center text-[15px] font-semibold text-[#72767a] px-7 py-3.5 rounded-full border border-[#242628]">
            From $7,500 (project)
          </span>
        </div>

        <div className="mb-16 p-8 bg-[#17181c] border border-[#242628] rounded-[24px]">
          <h2 className="font-bold text-[22px] mb-6">What we can build for you</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "AI lead scoring + contact enrichment systems",
              "CRM automation (routing, follow-ups, deal stage logic)",
              "Custom AI chatbots or qualification bots",
              "Internal AI tools for sales, ops, or support teams",
              "AI-powered reporting and forecasting dashboards",
              "n8n / Zapier / Make automation architectures",
              "RAG-based knowledge systems for your team",
              "Any AI application you can clearly describe the output of",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-[15px] text-[#d9d9d9] p-3 bg-[#000000] rounded-[12px] border border-[#242628]">
                <span className="text-[#29ABE2] mt-0.5 shrink-0">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="font-bold text-[clamp(24px,3vw,36px)] mb-8">What you get</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "System Audit + Architecture Plan", body: "Before we write a line of code, we audit your current stack, map your data flows, and deliver a written architecture plan. You see the full design before we build anything." },
              { title: "AI Lead Scoring + Enrichment", body: "We connect your CRM to Clay, Apollo, or custom enrichment sources and build an AI scoring model that predicts which leads are most likely to close — trained on your actual data." },
              { title: "CRM Workflow Automation", body: "Automated routing, follow-up sequencing, deal stage logic, and property management — built inside your CRM so your team doesn't need a new tool." },
              { title: "Custom AI Application", body: "For more complex builds — AI assistants, RAG systems, chatbots, or internal tools — we design, build, test, and deploy the full application with documentation and training." },
              { title: "Team Training + Handoff", body: "Every build includes a training session and full documentation so your team can understand, maintain, and extend what we built. We don't create dependency — we transfer knowledge." },
              { title: "30-Day Post-Launch Support", body: "After we hand off, we stay available for 30 days to fix bugs, answer questions, and iterate based on real usage. No extra charge." },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-[#17181c] border border-[#242628] rounded-[16px]">
                <h3 className="font-bold text-[16px] mb-2">{item.title}</h3>
                <p className="text-[14px] text-[#72767a] leading-[1.6]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="font-bold text-[clamp(24px,3vw,36px)] mb-8">How it works</h2>
          <div className="space-y-6">
            {[
              { step: "01", title: "Discovery + Scoping", body: "We spend one session understanding your goal, your existing stack, and what a successful outcome looks like. We scope the build and give you a fixed price before we start." },
              { step: "02", title: "Architecture Plan", body: "We deliver a written architecture document — what we're building, how it integrates with your existing systems, what data it needs, and how it gets deployed. No surprises." },
              { step: "03", title: "Build + Test", body: "We build in sprints and share progress regularly. Every integration is tested against real data before it goes live — not just in a sandbox." },
              { step: "04", title: "Launch + Train", body: "We deploy, train your team, hand off full documentation, and stay available for 30 days post-launch. The build is yours — not locked to our infrastructure." },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 p-6 bg-[#17181c] border border-[#242628] rounded-[16px]">
                <span className="font-extrabold text-[28px] text-[#29ABE2]/30 leading-none shrink-0 w-10">{item.step}</span>
                <div>
                  <h3 className="font-bold text-[17px] mb-2">{item.title}</h3>
                  <p className="text-[14px] text-[#72767a] leading-[1.6]">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="font-bold text-[clamp(24px,3vw,36px)] mb-3">Pricing</h2>
          <p className="text-[15px] text-[#72767a] mb-8">Fixed-price projects. Scoped and quoted before we start — no hourly surprises.</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                name: "Starter",
                price: "From $7,500",
                description: "Single integration or automation — lead scoring, CRM workflow, or enrichment pipeline",
                features: ["System audit + architecture plan", "1 core AI integration", "CRM workflow setup", "Team training session", "Full documentation", "30-day post-launch support"],
                highlight: false,
              },
              {
                name: "Growth",
                price: "From $12,500",
                description: "Multi-system build — AI scoring + enrichment + CRM automation + reporting",
                features: ["Everything in Starter", "Multi-system integration", "AI scoring model", "Custom reporting dashboard", "Dedicated build sprint", "Extended 60-day support"],
                highlight: true,
              },
              {
                name: "Enterprise",
                price: "From $20,000",
                description: "Full custom AI application — chatbot, RAG system, internal AI tool, or complex automation architecture",
                features: ["Everything in Growth", "Custom AI application build", "RAG / LLM integration", "Multi-team rollout", "Ongoing maintenance retainer option", "Dedicated project manager"],
                highlight: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`p-6 rounded-[20px] border ${plan.highlight ? "border-[#29ABE2] bg-[#0d1a2e]" : "border-[#242628] bg-[#17181c]"}`}
              >
                {plan.highlight && (
                  <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] bg-[#29ABE2] text-black px-3 py-1 rounded-full mb-3">
                    Most Popular
                  </span>
                )}
                <h3 className="font-bold text-[20px] mb-1">{plan.name}</h3>
                <p className="font-extrabold text-[28px] text-[#29ABE2] mb-2">{plan.price}</p>
                <p className="text-[13px] text-[#72767a] mb-5 leading-[1.5]">{plan.description}</p>
                <ul className="space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[13px] text-[#d9d9d9]">
                      <span className="text-[#29ABE2] shrink-0 mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="font-bold text-[clamp(24px,3vw,36px)] mb-8">Frequently asked questions</h2>
          <div className="space-y-5">
            {[
              {
                q: "What CRMs and tools do you build on?",
                a: "We build on HubSpot, GoHighLevel, Pipedrive, Zoho, and Salesforce for CRM work. For automation, we use n8n, Zapier, and Make. For AI, we use OpenAI, Claude (Anthropic), and open-source models depending on the use case.",
              },
              {
                q: "Is this a one-time fee or recurring?",
                a: "The build is a one-time project fee. Once we deliver and hand off, there are no ongoing fees unless you choose to add a maintenance retainer. The system belongs to you.",
              },
              {
                q: "How do you price the project?",
                a: "We scope in discovery and give you a fixed price before we start. The ranges above are starting points — complex builds cost more, simpler builds may cost less. No hourly billing, no scope creep surprises.",
              },
              {
                q: "What if we don't know exactly what we need?",
                a: "That's what the discovery session is for. We'll ask the right questions, map your use case, and recommend the right build. You don't need a spec document to book a call.",
              },
              {
                q: "Can we add ongoing support after the build?",
                a: "Yes. After the 30-day included post-launch window, we offer optional monthly maintenance retainers. Many clients combine a Custom AI Build with our Revenue Operations Partner service for ongoing management.",
              },
            ].map((item) => (
              <div key={item.q} className="p-6 bg-[#17181c] border border-[#242628] rounded-[16px]">
                <h3 className="font-bold text-[16px] mb-2">{item.q}</h3>
                <p className="text-[14px] text-[#72767a] leading-[1.6]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 bg-[#17181c] border border-[#242628] rounded-[24px] text-center">
          <h3 className="font-bold text-[22px] mb-2">Have a build in mind?</h3>
          <p className="text-[14px] text-[#72767a] mb-6">Book a 20-min fit call. We&apos;ll scope your use case and tell you exactly what it would cost to build.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#29ABE2] hover:bg-[#1a9fd4] text-black font-bold px-7 py-3.5 rounded-full text-[15px] transition-colors">
            Book a fit call →
          </Link>
        </div>
      </div>
    </div>
  );
}
