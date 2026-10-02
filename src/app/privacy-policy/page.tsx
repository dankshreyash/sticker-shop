import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}. Learn how we handle your data when you use our website and services.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "September 2026";

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
        Privacy Policy
      </h1>
      <p className="text-sm text-gray-400 mt-2">Last updated: {lastUpdated}</p>

      <div className="prose prose-gray mt-8 space-y-6 text-gray-600 leading-relaxed">
        <p>
          At {siteConfig.name}, we value your privacy. This policy explains what
          information we collect and how we use it.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 pt-4">
          Information We Collect
        </h2>
        <p>
          Our website does not collect personal information directly. We do not
          have user accounts, login systems, or data collection forms. When you
          contact us via WhatsApp or Instagram, any information you share is
          handled through those third-party platforms, not through our website.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 pt-4">
          Cookies &amp; Analytics
        </h2>
        <p>
          {/* UPDATE: Add analytics details if/when Google Analytics is enabled */}
          Currently, our website does not use cookies or third-party analytics
          services. If we add analytics in the future, this policy will be
          updated accordingly.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 pt-4">
          Third-Party Links
        </h2>
        <p>
          Our website contains links to Instagram and WhatsApp. These platforms
          have their own privacy policies. We are not responsible for the privacy
          practices of third-party websites.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 pt-4">
          Data Security
        </h2>
        <p>
          We take reasonable steps to protect any information transmitted through
          our website. However, no method of electronic transmission is 100%
          secure.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 pt-4">
          Changes to This Policy
        </h2>
        <p>
          We may update this privacy policy from time to time. Any changes will
          be posted on this page with an updated date.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 pt-4">Contact</h2>
        <p>
          If you have questions about this policy, please reach out to us via{" "}
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            WhatsApp
          </a>{" "}
          or{" "}
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            Instagram
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
