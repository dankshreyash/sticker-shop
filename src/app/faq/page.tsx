import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: `Frequently asked questions about ${siteConfig.name} sticker orders, shipping, materials, and custom sticker requests.`,
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    question: "How do I order a sticker?",
    answer:
      "Browse our collection, pick the sticker(s) you like, and send us a message on WhatsApp with the product name. We'll confirm availability and share payment details.",
  },
  {
    question: "How do I contact you?",
    answer:
      "You can reach us on WhatsApp or Instagram. WhatsApp is the fastest way to get a response. Links are available in the navigation and on our Contact page.",
  },
  {
    question: "Where do you ship?",
    answer:
      "We currently ship within India. International shipping is not available at this time.",
  },
  {
    question: "What material are the stickers made of?",
    answer:
      "All our stickers are made from premium vinyl material. They are waterproof, sun-resistant, and designed to last for years on laptops, bottles, notebooks, and other smooth surfaces.",
  },
  {
    question: "Are the stickers waterproof?",
    answer:
      "Yes! All our stickers are made from high-quality waterproof vinyl. They can handle daily use on laptops and water bottles without fading or peeling.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery times depend on your location. We'll share the estimated delivery date via WhatsApp when you confirm your order.",
  },
  {
    question: "Can I request a custom sticker?",
    answer:
      "Yes! We offer custom name stickers and can work with you on personalized designs. Message us on WhatsApp with your idea and we'll let you know what's possible.",
  },
  {
    question: "What if my sticker arrives damaged?",
    answer:
      "If your sticker arrives damaged or defective, contact us within 7 days via WhatsApp with a photo. We'll arrange a replacement for you.",
  },
  {
    question: "How do I pay?",
    answer:
      "Payment details are shared via WhatsApp after you confirm your order. We'll guide you through the process.",
  },
  {
    question: "Can I return a sticker?",
    answer:
      "Due to the nature of our products, we generally don't accept returns for change of mind. However, if there's a quality issue, we're happy to help. Check our Refund Policy for details.",
  },
];

export default function FAQPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
        Frequently Asked Questions
      </h1>
      <p className="text-gray-600 mt-3">
        Got questions? We&apos;ve got answers.
      </p>

      <div className="mt-10 space-y-6">
        {faqs.map((faq, i) => (
          <details
            key={i}
            className="group bg-gray-50 rounded-xl overflow-hidden"
          >
            <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-left font-medium text-gray-900 hover:bg-gray-100 transition-colors">
              {faq.question}
              <svg
                className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform duration-200 flex-shrink-0 ml-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <div className="px-6 pb-4 text-gray-600 leading-relaxed">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-gray-500">
          Still have questions?{" "}
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline font-medium"
          >
            Message us on WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
