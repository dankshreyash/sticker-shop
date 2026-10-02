import Link from "next/link";

export default function NotFound() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <p className="text-6xl font-bold text-gray-200">404</p>
      <h1 className="text-2xl font-bold text-gray-900 mt-4">Page not found</h1>
      <p className="text-gray-500 mt-2">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Link
        href="/"
        className="inline-block mt-8 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-xl transition-colors duration-200"
      >
        Back to Home
      </Link>
    </section>
  );
}
