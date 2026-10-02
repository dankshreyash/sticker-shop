import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import { products, getNewArrivals, getBestSellers } from "@/data/products";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const featured = products.filter((p) => p.type !== "bundle").slice(0, 8);
const newArrivals = getNewArrivals();
const bestSellers = getBestSellers();

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Featured Products */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Featured Laptop Stickers
          </h2>
          <p className="text-gray-500 mt-2">
            Our most popular designs loved by customers across India
          </p>
        </div>
        <ProductGrid products={featured} />
        <div className="text-center mt-10">
          <Link
            href="/products"
            className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-xl transition-colors duration-200"
          >
            View All Stickers
          </Link>
        </div>
      </section>

      {/* New Arrivals */}
      {newArrivals.length > 0 && (
        <section className="bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <div className="text-center mb-10">
              <span className="inline-block text-sm font-medium text-indigo-600 bg-indigo-100 rounded-full px-4 py-1.5 mb-3">
                Just Dropped
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                New Arrivals
              </h2>
              <p className="text-gray-500 mt-2">
                Fresh designs just added to the collection
              </p>
            </div>
            <ProductGrid products={newArrivals} />
          </div>
        </section>
      )}

      {/* Best Sellers */}
      {bestSellers.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-10">
            <span className="inline-block text-sm font-medium text-amber-600 bg-amber-100 rounded-full px-4 py-1.5 mb-3">
              Customer Favorites
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Best Sellers
            </h2>
            <p className="text-gray-500 mt-2">
              The stickers everyone loves
            </p>
          </div>
          <ProductGrid products={bestSellers} />
        </section>
      )}

      {/* How It Works */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              How to Order
            </h2>
            <p className="text-gray-500 mt-2">
              Simple as 1-2-3
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 font-bold text-lg">1</span>
              </div>
              <h3 className="font-semibold text-gray-900">Choose Your Sticker</h3>
              <p className="text-sm text-gray-500 mt-1">
                Browse the collection and select your favorite design.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-lg">2</span>
              </div>
              <h3 className="font-semibold text-gray-900">Contact Us</h3>
              <p className="text-sm text-gray-500 mt-1">
                Click the WhatsApp button on the product page.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-pink-600 font-bold text-lg">3</span>
              </div>
              <h3 className="font-semibold text-gray-900">Confirm Your Order</h3>
              <p className="text-sm text-gray-500 mt-1">
                Discuss the order and delivery details directly with the seller.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Made for Your Everyday */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Made for Your Everyday
          </h2>
          <p className="text-gray-500 mt-2">
            Stickers that look great on any surface
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Laptops", icon: "💻" },
            { label: "Notebooks", icon: "📓" },
            { label: "Water Bottles", icon: "🫗" },
            { label: "Tablets", icon: "📱" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-gray-50 rounded-2xl p-6 text-center"
            >
              <span className="text-3xl" aria-hidden="true">
                {item.icon}
              </span>
              <p className="text-sm font-medium text-gray-900 mt-3">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram Showcase */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <svg
            className="w-8 h-8 text-pink-500 mx-auto mb-4"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.088 4.088 0 011.47.957c.453.453.728.913.957 1.47.163.46.35 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.088 4.088 0 01-.957 1.47 4.088 4.088 0 01-1.47.957c-.46.163-1.26.35-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.088 4.088 0 01-1.47-.957 4.088 4.088 0 01-.957-1.47c-.163-.46-.35-1.26-.403-2.43C2.175 15.747 2.163 15.367 2.163 12.163s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43A4.088 4.088 0 013.593 3.413a4.088 4.088 0 011.47-.957c.46-.163 1.26-.35 2.43-.403C8.76 2.175 9.14 2.163 12 2.163zM12 0C8.741 0 8.333.014 7.053.072 5.775.13 4.902.333 4.14.63a5.872 5.872 0 00-2.126 1.384A5.872 5.872 0 00.63 4.14C.333 4.902.13 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.058 1.278.261 2.15.558 2.913a5.872 5.872 0 001.384 2.126 5.872 5.872 0 002.126 1.384c.763.297 1.635.5 2.913.558C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.278-.058 2.15-.261 2.913-.558a5.872 5.872 0 002.126-1.384 5.872 5.872 0 001.384-2.126c.297-.763.5-1.635.558-2.913.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.278-.261-2.15-.558-2.913a5.872 5.872 0 00-1.384-2.126A5.872 5.872 0 0019.86.63c-.763-.297-1.635-.5-2.913-.558C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Follow Us on Instagram
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto">
            See our stickers in the wild. Tag us in your photos for a chance to
            be featured!
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 max-w-2xl mx-auto">
            {/* Placeholder images - replace with actual Instagram photos */}
            {products.slice(0, 4).map((p) => (
              <div
                key={p.id}
                className="aspect-square bg-gray-200 rounded-xl overflow-hidden"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.altText}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 text-pink-600 hover:text-pink-700 font-semibold transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.088 4.088 0 011.47.957c.453.453.728.913.957 1.47.163.46.35 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.088 4.088 0 01-.957 1.47 4.088 4.088 0 01-1.47.957c-.46.163-1.26.35-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.088 4.088 0 01-1.47-.957 4.088 4.088 0 01-.957-1.47c-.163-.46-.35-1.26-.403-2.43C2.175 15.747 2.163 15.367 2.163 12.163s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43A4.088 4.088 0 013.593 3.413a4.088 4.088 0 011.47-.957c.46-.163 1.26-.35 2.43-.403C8.76 2.175 9.14 2.163 12 2.163zM12 0C8.741 0 8.333.014 7.053.072 5.775.13 4.902.333 4.14.63a5.872 5.872 0 00-2.126 1.384A5.872 5.872 0 00.63 4.14C.333 4.902.13 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.058 1.278.261 2.15.558 2.913a5.872 5.872 0 001.384 2.126 5.872 5.872 0 002.126 1.384c.763.297 1.635.5 2.913.558C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.278-.058 2.15-.261 2.913-.558a5.872 5.872 0 002.126-1.384 5.872 5.872 0 001.384-2.126c.297-.763.5-1.635.558-2.913.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.278-.261-2.15-.558-2.913a5.872 5.872 0 00-1.384-2.126A5.872 5.872 0 0019.86.63c-.763-.297-1.635-.5-2.913-.558C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            @stickerlab on Instagram
          </a>
        </div>
      </section>

      {/* Custom Sticker CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Want a Custom Sticker?
          </h2>
          <p className="text-indigo-100 mt-3 max-w-lg mx-auto">
            Have your own design or idea? Talk to us about a custom sticker.
            We&apos;ll bring your vision to life.
          </p>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hi, I want to discuss a custom sticker")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 mt-6 bg-white text-indigo-600 font-semibold py-3 px-8 rounded-xl hover:bg-indigo-50 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Request Custom Sticker on WhatsApp
          </a>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Why Choose StickerLab?
            </h2>
            <p className="text-gray-500 mt-4 text-lg">
              We make high-quality vinyl stickers that last. Every sticker is
              designed to stick around.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Premium Quality</h3>
              <p className="text-sm text-gray-500 mt-1">
                High-grade vinyl that lasts on any smooth surface.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Easy Ordering</h3>
              <p className="text-sm text-gray-500 mt-1">
                Browse, pick, and order directly through WhatsApp.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Made with Love</h3>
              <p className="text-sm text-gray-500 mt-1">
                Every sticker is designed and packed with care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Shop by Category
          </h2>
          <p className="text-gray-500 mt-2">
            Find stickers that match your vibe
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {["Anime", "Gaming", "Minimal", "Aesthetic", "Funny", "Custom"].map(
            (cat) => (
              <Link
                key={cat}
                href="/products"
                className="bg-gray-50 rounded-xl p-4 text-center hover:shadow-md transition-shadow"
              >
                <span className="font-medium text-gray-900">{cat}</span>
              </Link>
            )
          )}
        </div>
      </section>
    </>
  );
}
