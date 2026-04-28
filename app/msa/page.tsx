import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Master Services Agreement — Moximize",
  description: "Moximize Master Services Agreement governing all client engagements.",
  alternates: { canonical: "https://moximize.net/msa" },
};

export default function MSA() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#e7e9ea]">
      <div className="max-w-[800px] mx-auto px-6 py-24">
        <Link href="/" className="text-[#29ABE2] text-[14px] font-semibold hover:underline mb-10 block">
          ← Back to Moximize
        </Link>

        <h1 className="font-bold text-[40px] tracking-tight mb-2">Master Services Agreement</h1>
        <p className="text-[#72767a] text-[14px] mb-12">Last updated: April 28, 2026</p>

        <div className="space-y-10 text-[15px] leading-[1.8] text-[#d9d9d9]">
          <section>
            <h2 className="font-bold text-[20px] text-white mb-3">1. Parties</h2>
            <p>This Master Services Agreement ("MSA") is entered into between Moximize ("Agency") and the client entity ("Client") as identified in the applicable Statement of Work (SOW).</p>
          </section>

          <section>
            <h2 className="font-bold text-[20px] text-white mb-3">2. Scope of Services</h2>
            <p>The Agency agrees to provide services as outlined in individual Statements of Work. Each SOW is incorporated into and governed by this MSA. Services may include but are not limited to: HubSpot CRM setup, outbound marketing, inbound marketing, AI-powered lead generation, and revenue operations consulting.</p>
          </section>

          <section>
            <h2 className="font-bold text-[20px] text-white mb-3">3. Fees and Payment</h2>
            <p>Fees are specified in each SOW. Invoices are issued monthly in advance. The Client shall pay invoices within 15 days of receipt. Undisputed overdue balances accrue interest at 1.5% per month.</p>
          </section>

          <section>
            <h2 className="font-bold text-[20px] text-white mb-3">4. Term and Termination</h2>
            <p>This MSA commences on the date of the first SOW and continues until terminated. Either party may terminate with 30 days written notice after the initial 90-day commitment period. The Agency may terminate immediately upon Client's material breach or non-payment.</p>
          </section>

          <section>
            <h2 className="font-bold text-[20px] text-white mb-3">5. Confidentiality</h2>
            <p>Both parties agree to keep confidential all proprietary information shared during the engagement. This obligation survives termination for 2 years.</p>
          </section>

          <section>
            <h2 className="font-bold text-[20px] text-white mb-3">6. Ownership of Deliverables</h2>
            <p>Upon full payment, the Client owns all deliverables produced under this agreement. The Agency retains ownership of its pre-existing intellectual property, tools, and methodologies.</p>
          </section>

          <section>
            <h2 className="font-bold text-[20px] text-white mb-3">7. Warranties and Indemnification</h2>
            <p>Each party represents that it has full authority to enter into this agreement. The Client indemnifies the Agency against claims arising from Client-provided content or materials.</p>
          </section>

          <section>
            <h2 className="font-bold text-[20px] text-white mb-3">8. Limitation of Liability</h2>
            <p>Neither party shall be liable for indirect or consequential damages. The Agency's total liability under this MSA shall not exceed the fees paid in the 3 months prior to the claim.</p>
          </section>

          <section>
            <h2 className="font-bold text-[20px] text-white mb-3">9. Governing Law</h2>
            <p>This MSA is governed by the laws of the Philippines. Disputes shall be resolved by binding arbitration in accordance with local arbitration rules.</p>
          </section>

          <section>
            <h2 className="font-bold text-[20px] text-white mb-3">10. Contact</h2>
            <p>For questions regarding this agreement, contact <a href="mailto:Stevenguiao@moximize.net" className="text-[#29ABE2] hover:underline">Stevenguiao@moximize.net</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
