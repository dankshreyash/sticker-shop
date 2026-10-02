"use client";

import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
  altText: string;
}

export default function ProductGallery({ images, altText }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultiple = images.length > 1;

  return (
    <div>
      <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[activeIndex]}
          alt={altText}
          className="w-full h-full object-cover"
          width={800}
          height={800}
        />
      </div>

      {hasMultiple && (
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                i === activeIndex
                  ? "border-indigo-500"
                  : "border-transparent hover:border-gray-300"
              }`}
              aria-label={`View image ${i + 1}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img}
                alt={`${altText} - Image ${i + 1}`}
                className="w-full h-full object-cover"
                width={64}
                height={64}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
