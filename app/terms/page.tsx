import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Moximize",
  description: "Terms and conditions for using Moximize's services.",
  alternates: { canonical: "https://moximize.net/terms" },
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#e7e9ea]">
      <div className="max-w-[800px] mx-auto px-6 py-24">
        <Link href="/" className="text-[#29ABE2] text-[14px] font-semibold hover:underline mb-10 block">
          ← Back to Moximize
        </Link>

        <h1 className="font-bold text-[40px] tracking-tight mb-2">Terms of Service</h1>
        <p className="text-[#72767a] text-[14px] mb-12">Last updated: April 28, 2026</p>

        <div className="space-y-10 text-[15px] leading-[1.8] text-[#d9d9d9]">
          <section>
            <h2 className="font-bold text-[20px] text-white mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using Moximize's website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
          </section>

          <section>
            <h2 className="font-bold text-[20px] text-white mb-3">2. Services</h2>
            <p>Moximize provides B2B marketing services including HubSpot CRM implementation, outbound marketing, inbound marketing, and revenue operations consulting. The specific scope of services is outlined in individual client agreements.</p>
          </section>

          <section>
            <h2 className="font-bold text-[20px] text-white mb-3">3. Payment Terms</h2>
            <p>Service fees are billed monthly or annually as agreed upon in the client agreement. Payments are due within 15 days of invoice. Late payments may incur a 1.5% monthly fee.</p>
          </section>

          <section>
            <h2 className="font-bold text-[20px] text-white mb-3">4. Cancellation</h2>
            <p>Clients may cancel services after the initial 90-day commitment period with 30 days written notice. All fees paid are non-refundable unless otherwise stated in the client agreement.</p>
          </section>

          <section>
            <h2 className="font-bold text-[20px] text-white mb-3">5. Intellectual Property</h2>
            <p>All deliverables created by Moximize become the property of the client upon full payment. Moximize retains the right to display work in its portfolio unless explicitly agreed otherwise.</p>
          </section>

          <section>
            <h2 className="font-bold text-[20px] text-white mb-3">6. Limitation of Liability</h2>
            <p>Moximize shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid in the preceding 3 months.</p>
          </section>

          <section>
            <h2 className="font-bold text-[20px] text-white mb-3">7. Governing Law</h2>
            <p>These terms are governed by the laws of the Philippines. Any disputes shall be resolved through binding arbitration.</p>
          </section>

          <section>
            <h2 className="font-bold text-[20px] text-white mb-3">8. Contact</h2>
            <p>Questions about these Terms? Contact us at <a href="mailto:Stevenguiao@moximize.net" className="text-[#29ABE2] hover:underline">Stevenguiao@moximize.net</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
