"use client";

import { useState, useMemo } from "react";
import {
  products,
  categories,
  sortOptions,
  getCategoryCounts,
  sortProducts,
  type Category,
  type SortOption,
} from "@/data/products";
import ProductGrid from "@/components/ProductGrid";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [sort, setSort] = useState<SortOption>("featured");

  const categoryCounts = useMemo(() => getCategoryCounts(), []);

  const filtered = useMemo(() => {
    let result = products;

    if (activeCategory !== "All") {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    return sortProducts(result, sort);
  }, [activeCategory, search, sort]);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="text-center mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          All Stickers
        </h1>
        <p className="text-gray-500 mt-2">Browse our full collection</p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto mb-8">
        <label htmlFor="product-search" className="sr-only">
          Search stickers
        </label>
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            id="product-search"
            type="search"
            placeholder="Search stickers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              aria-label="Clear search"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Filters & Sort */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div
          role="group"
          aria-label="Filter by category"
          className="flex flex-wrap gap-2"
        >
          {categories.map((cat) => {
            const count = categoryCounts[cat] || 0;
            if (cat !== "All" && count === 0) return null;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeCategory === cat
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
                <span className="ml-1 text-xs opacity-70">({count})</span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="sort-select" className="text-sm text-gray-500 whitespace-nowrap">
            Sort:
          </label>
          <select
            id="sort-select"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-500 mb-6">
        {filtered.length} {filtered.length === 1 ? "product" : "products"} found
        {search && (
          <span>
            {" "}for &ldquo;<span className="font-medium text-gray-700">{search}</span>&rdquo;
          </span>
        )}
      </p>

      <ProductGrid products={filtered} />
    </section>
  );
}
