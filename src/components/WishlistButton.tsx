"use client";

import { useWishlist } from "@/hooks/useWishlist";

export default function WishlistButton({ productId }: { productId: number }) {
  const { isLiked, toggle } = useWishlist();
  const liked = isLiked(productId);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(productId);
      }}
      className="absolute top-3 left-3 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm transition-colors hover:bg-white"
      aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
    >
      <svg
        className={`w-5 h-5 transition-colors ${
          liked ? "text-red-500 fill-red-500" : "text-gray-400"
        }`}
        fill={liked ? "currentColor" : "none"}
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    </button>
  );
}
