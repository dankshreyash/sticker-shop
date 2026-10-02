"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error(error);
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <p className="text-6xl font-bold text-gray-200">!</p>
      <h1 className="text-2xl font-bold text-gray-900 mt-4">
        Something went wrong
      </h1>
      <p className="text-gray-500 mt-2">
        An unexpected error occurred. Please try again.
      </p>
      <div className="flex items-center justify-center gap-3 mt-8">
        <button
          onClick={() => reset()}
          className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-xl transition-colors duration-200"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="bg-white hover:bg-gray-50 text-gray-900 font-semibold py-3 px-8 rounded-xl border border-gray-200 transition-colors duration-200"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
