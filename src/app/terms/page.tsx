import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for using ${siteConfig.name} website and placing sticker orders.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  const lastUpdated = "September 2026";

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
        Terms &amp; Conditions
      </h1>
      <p className="text-sm text-gray-400 mt-2">Last updated: {lastUpdated}</p>

      <div className="prose prose-gray mt-8 space-y-6 text-gray-600 leading-relaxed">
        <p>
          By using the {siteConfig.name} website, you agree to the following
          terms. Please read them carefully before placing an order.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 pt-4">
          Products &amp; Orders
        </h2>
        <p>
          All orders are placed via WhatsApp. Sending a WhatsApp message with a
          product name does not guarantee availability. We will confirm your
          order and payment details before processing.
        </p>
        <p>
          {/* UPDATE: Update pricing and currency when confirmed */}
          All prices are listed in Indian Rupees (INR) and include applicable
          taxes unless stated otherwise.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 pt-4">Payments</h2>
        <p>
          {/* UPDATE: Specify accepted payment methods */}
          Payment methods will be shared via WhatsApp when you place your order.
          We currently do not support online payments through the website.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 pt-4">
          Product Quality
        </h2>
        <p>
          We strive to represent our stickers accurately on the website. However,
          colors may vary slightly due to screen differences. All stickers are
          made from premium vinyl and are designed to be waterproof and
          sun-resistant.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 pt-4">
          Intellectual Property
        </h2>
        <p>
          All designs, content, and branding on this website belong to{" "}
          {siteConfig.name}. You may not reproduce, distribute, or create
          derivative works without our permission.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 pt-4">
          Limitation of Liability
        </h2>
        <p>
          {siteConfig.name} is not liable for any indirect, incidental, or
          consequential damages arising from the use of our website or products.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 pt-4">
          Changes to Terms
        </h2>
        <p>
          We reserve the right to update these terms at any time. Changes will be
          effective immediately upon posting on this page.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 pt-4">Contact</h2>
        <p>
          For questions about these terms, contact us via{" "}
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            WhatsApp
          </a>
          .
        </p>
      </div>

      <div className="mt-10">
        <Link href="/" className="text-sm text-indigo-600 hover:underline">
          &larr; Back to Home
        </Link>
      </div>
    </section>
  );
}
