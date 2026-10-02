import Link from "next/link";
import type { Product } from "@/data/products";
import WishlistButton from "./WishlistButton";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.altText}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          width={400}
          height={400}
        />
        <WishlistButton productId={product.id} />
        <div className="absolute top-3 right-3 flex flex-col gap-1.5 items-end">
          {product.isNew && (
            <span className="bg-indigo-500 text-white text-xs font-medium px-2 py-0.5 rounded-full">
              New
            </span>
          )}
          {product.isBestSeller && (
            <span className="bg-amber-500 text-white text-xs font-medium px-2 py-0.5 rounded-full">
              Best Seller
            </span>
          )}
          {product.type === "bundle" && (
            <span className="bg-purple-500 text-white text-xs font-medium px-2 py-0.5 rounded-full">
              Bundle
            </span>
          )}
          <span className="bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 px-2.5 py-1 rounded-full">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-lg font-bold text-gray-900">
            &#x20B9;{product.price}
          </span>
          <span className="text-sm font-medium text-indigo-600 group-hover:underline">
            View Product
          </span>
        </div>
      </div>
    </Link>
  );
}
