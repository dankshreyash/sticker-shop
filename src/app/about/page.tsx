import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name} - a small sticker business making high-quality vinyl laptop stickers for anime fans, gamers, and aesthetic lovers.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
        About {siteConfig.name}
      </h1>

      <div className="prose prose-gray mt-8 space-y-6 text-gray-600 leading-relaxed">
        <p>
          {siteConfig.name} is a small sticker business born out of a love for
          anime, gaming, and aesthetic designs. We make high-quality vinyl
          stickers that you can stick on your laptop, water bottle, notebook, or
          any smooth surface.
        </p>

        <p>
          Every sticker is made with premium waterproof vinyl that is designed to
          last. Whether you&apos;re into anime, gaming, minimal designs, or
          something totally custom &mdash; we&apos;ve got something for you.
        </p>

        <p>
          We started this brand because we believe your laptop should reflect your
          personality. A sticker is a small thing, but it says a lot about who you
          are.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 pt-4">
          How to Order
        </h2>
        <p>
          Ordering is simple. Browse our collection, pick the stickers you like,
          and message us directly on WhatsApp with the product name. We&apos;ll
          confirm your order and get it delivered to you.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 pt-4">
          Get in Touch
        </h2>
        <p>
          Have a question, custom request, or just want to say hi? Reach out to us
          on{" "}
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            Instagram
          </a>{" "}
          or{" "}
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            WhatsApp
          </a>
          . We&apos;d love to hear from you.
        </p>
      </div>

      <div className="mt-10">
        <Link
          href="/products"
          className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-xl transition-colors duration-200"
        >
          Browse Stickers
        </Link>
      </div>
    </section>
  );
}
