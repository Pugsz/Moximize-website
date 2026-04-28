import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Moximize",
  description: "How Moximize collects, uses, and protects your personal information.",
  alternates: { canonical: "https://moximize.net/privacy" },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#e7e9ea]">
      <div className="max-w-[800px] mx-auto px-6 py-24">
        <Link href="/" className="text-[#29ABE2] text-[14px] font-semibold hover:underline mb-10 block">
          ← Back to Moximize
        </Link>

        <h1 className="font-bold text-[40px] tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-[#72767a] text-[14px] mb-12">Last updated: April 28, 2026</p>

        <div className="space-y-10 text-[15px] leading-[1.8] text-[#d9d9d9]">
          <section>
            <h2 className="font-bold text-[20px] text-white mb-3">1. Information We Collect</h2>
            <p>When you submit a form on our website, we collect information such as your name, email address, company name, and the details of your inquiry. We may also collect usage data through analytics tools to improve our website.</p>
          </section>

          <section>
            <h2 className="font-bold text-[20px] text-white mb-3">2. How We Use Your Information</h2>
            <p>We use the information you provide to respond to your inquiries, schedule discovery calls, and send relevant communications about our services. We do not sell your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="font-bold text-[20px] text-white mb-3">3. HubSpot CRM</h2>
            <p>Moximize uses HubSpot as its CRM platform. Information you submit may be stored in HubSpot for the purpose of managing client relationships. HubSpot's privacy policy governs their handling of this data.</p>
          </section>

          <section>
            <h2 className="font-bold text-[20px] text-white mb-3">4. Cookies</h2>
            <p>Our website may use cookies to improve your browsing experience and for analytics purposes. You can disable cookies through your browser settings at any time.</p>
          </section>

          <section>
            <h2 className="font-bold text-[20px] text-white mb-3">5. Data Retention</h2>
            <p>We retain your personal data for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your data at any time by contacting us.</p>
          </section>

          <section>
            <h2 className="font-bold text-[20px] text-white mb-3">6. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information. To exercise these rights, contact us at <a href="mailto:Stevenguiao@moximize.net" className="text-[#29ABE2] hover:underline">Stevenguiao@moximize.net</a>.</p>
          </section>

          <section>
            <h2 className="font-bold text-[20px] text-white mb-3">7. Contact</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:Stevenguiao@moximize.net" className="text-[#29ABE2] hover:underline">Stevenguiao@moximize.net</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
