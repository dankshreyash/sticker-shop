import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-sm font-medium text-indigo-600 bg-indigo-100 rounded-full px-4 py-1.5 mb-6">
            Fresh drops every week
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
            Make Your Laptop{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Yours.
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto">
            Unique stickers for laptops, bottles, notebooks &amp; more. Express yourself with every peel.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/products"
              className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3.5 px-8 rounded-xl transition-colors duration-200 text-base"
            >
              Shop Stickers
            </Link>
            <Link
              href="/#about"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-900 font-semibold py-3.5 px-8 rounded-xl border border-gray-200 transition-colors duration-200 text-base"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
    </section>
  );
}
