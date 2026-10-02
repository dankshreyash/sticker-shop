import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Shipping & Delivery",
  description: `Shipping and delivery information for ${siteConfig.name} sticker orders. Learn about delivery times and areas.`,
  alternates: { canonical: "/shipping" },
};

export default function ShippingPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
        Shipping &amp; Delivery
      </h1>

      <div className="prose prose-gray mt-8 space-y-6 text-gray-600 leading-relaxed">
        <p>
          We currently ship sticker orders across India. Below you&apos;ll find
          the details about how shipping works.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 pt-4">
          How It Works
        </h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Browse stickers and pick the ones you like.</li>
          <li>Message us on WhatsApp with the product name.</li>
          <li>We&apos;ll confirm availability and share payment details.</li>
          <li>After payment, we&apos;ll ship your order.</li>
        </ol>

        <h2 className="text-xl font-semibold text-gray-900 pt-4">
          Delivery Time
        </h2>
        <p>
          {/* UPDATE: Update these placeholders with actual delivery estimates */}
          <strong>[To be confirmed]</strong> &mdash; Delivery times depend on
          your location. Once we have confirmed shipping partners, we&apos;ll
          share estimated delivery times via WhatsApp.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 pt-4">
          Shipping Charges
        </h2>
        <p>
          {/* UPDATE: Update with actual shipping charges */}
          <strong>[To be confirmed]</strong> &mdash; Shipping charges will be
          communicated via WhatsApp before you confirm your order. We aim to keep
          shipping affordable.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 pt-4">
          Shipping Areas
        </h2>
        <p>
          {/* UPDATE: Update with actual shipping areas */}
          We currently ship within India. International shipping is not available
          at this time, but we&apos;re working on it.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 pt-4">
          Order Tracking
        </h2>
        <p>
          Once your order is shipped, we&apos;ll share tracking details via
          WhatsApp so you can follow your package.
        </p>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-6">
          <p className="text-sm text-yellow-800">
            <strong>Note:</strong> The shipping information above contains
            placeholders that need to be updated with your actual business
            details before going live.
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
