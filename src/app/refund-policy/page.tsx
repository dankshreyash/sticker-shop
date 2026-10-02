import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Refund & Return Policy",
  description: `Refund and return policy for ${siteConfig.name} sticker orders. Learn about our return process.`,
  alternates: { canonical: "/refund-policy" },
};

export default function RefundPolicyPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
        Refund &amp; Return Policy
      </h1>

      <div className="prose prose-gray mt-8 space-y-6 text-gray-600 leading-relaxed">
        <p>
          We want you to love your stickers. If something isn&apos;t right,
          here&apos;s how we handle returns and refunds.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 pt-4">
          Damaged or Defective Products
        </h2>
        <p>
          If your sticker arrives damaged or is defective, please contact us
          within 7 days of receiving your order via{" "}
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            WhatsApp
          </a>{" "}
          with a photo of the issue. We&apos;ll arrange a replacement.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 pt-4">
          Wrong Product
        </h2>
        <p>
          If you received the wrong sticker, let us know within 7 days and
          we&apos;ll send the correct one at no extra cost.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 pt-4">
          General Returns
        </h2>
        <p>
          {/* UPDATE: Update return policy based on actual business policy */}
          Due to the nature of our products, we generally do not accept returns
          for change of mind. However, we want you to be happy &mdash; so
          please reach out if there&apos;s an issue and we&apos;ll do our best
          to help.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 pt-4">Refunds</h2>
        <p>
          {/* UPDATE: Update refund process */}
          Refunds, when applicable, will be processed within 5-7 business days
          to the original payment method. You&apos;ll be notified via WhatsApp
          once a refund is initiated.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 pt-4">
          How to Request a Return
        </h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Message us on WhatsApp with your order details.</li>
          <li>Describe the issue and share a photo if applicable.</li>
          <li>We&apos;ll review and respond with next steps.</li>
        </ol>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-6">
          <p className="text-sm text-yellow-800">
            <strong>Note:</strong> This refund policy contains placeholders. Update
            the return window, refund process, and conditions based on your
            actual business policies before going live.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <Link href="/" className="text-sm text-indigo-600 hover:underline">
          &larr; Back to Home
        </Link>
      </div>
    </section>
  );
}
