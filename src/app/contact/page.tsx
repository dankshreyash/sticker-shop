import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.name} on Instagram or WhatsApp. We're happy to help with orders, custom stickers, and any questions.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
        Contact Us
      </h1>
      <p className="text-gray-600 mt-4 text-lg">
        Have a question about an order, want a custom sticker, or just want to
        say hello? We&apos;re here to help.
      </p>

      <div className="mt-10 space-y-6">
        <div className="bg-gray-50 rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </h2>
          <p className="text-gray-600 mt-2">
            The fastest way to reach us. Message us anytime and we&apos;ll get
            back to you as soon as possible.
          </p>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 px-6 rounded-xl transition-colors duration-200 text-sm"
          >
            Chat on WhatsApp
          </a>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.088 4.088 0 011.47.957c.453.453.728.913.957 1.47.163.46.35 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.088 4.088 0 01-.957 1.47 4.088 4.088 0 01-1.47.957c-.46.163-1.26.35-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.088 4.088 0 01-1.47-.957 4.088 4.088 0 01-.957-1.47c-.163-.46-.35-1.26-.403-2.43C2.175 15.747 2.163 15.367 2.163 12.163s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43A4.088 4.088 0 013.593 3.413a4.088 4.088 0 011.47-.957c.46-.163 1.26-.35 2.43-.403C8.76 2.175 9.14 2.163 12 2.163zM12 0C8.741 0 8.333.014 7.053.072 5.775.13 4.902.333 4.14.63a5.872 5.872 0 00-2.126 1.384A5.872 5.872 0 00.63 4.14C.333 4.902.13 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.058 1.278.261 2.15.558 2.913a5.872 5.872 0 001.384 2.126 5.872 5.872 0 002.126 1.384c.763.297 1.635.5 2.913.558C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.278-.058 2.15-.261 2.913-.558a5.872 5.872 0 002.126-1.384 5.872 5.872 0 001.384-2.126c.297-.763.5-1.635.558-2.913.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.278-.261-2.15-.558-2.913a5.872 5.872 0 00-1.384-2.126A5.872 5.872 0 0019.86.63c-.763-.297-1.635-.5-2.913-.558C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Instagram
          </h2>
          <p className="text-gray-600 mt-2">
            Follow us for new designs, drops, and behind-the-scenes content.
            DMs are open!
          </p>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2.5 px-6 rounded-xl transition-colors duration-200 text-sm"
          >
            Follow on Instagram
          </a>
        </div>
      </div>

      <div className="mt-10">
        <Link
          href="/products"
          className="text-sm text-indigo-600 hover:underline"
        >
          &larr; Back to Shop
        </Link>
      </div>
    </section>
  );
}
