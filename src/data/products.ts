export interface Product {
  id: number;
  slug: string;
  name: string;
  price: number;
  image: string;
  images?: string[];
  altText: string;
  category: string;
  description: string;
  size?: string;
  material?: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  type?: "single" | "bundle";
  bundleItems?: string[];
  available?: boolean;
}

export const categories = [
  "All",
  "Anime",
  "Gaming",
  "Minimal",
  "Aesthetic",
  "Funny",
  "Custom",
] as const;

export type Category = (typeof categories)[number];

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A-Z" },
] as const;

export type SortOption = (typeof sortOptions)[number]["value"];

export const products: Product[] = [
  {
    id: 1,
    slug: "one-piece-luffy-sticker",
    name: "One Piece Luffy Laptop Sticker",
    price: 99,
    image: "/products/luffy.svg",
    images: ["/products/luffy.svg"],
    altText: "One Piece Luffy anime laptop sticker with straw hat design",
    category: "Anime",
    description:
      "High-quality vinyl sticker of Monkey D. Luffy from One Piece. Perfect for laptops, water bottles, and notebooks. Waterproof and sun-resistant.",
    size: "6 cm x 6 cm",
    material: "Premium Vinyl",
    isBestSeller: true,
  },
  {
    id: 2,
    slug: "naruto-uzumaki-sticker",
    name: "Naruto Uzumaki Laptop Sticker",
    price: 99,
    image: "/products/naruto.svg",
    images: ["/products/naruto.svg"],
    altText: "Naruto Uzumaki anime laptop sticker in action pose",
    category: "Anime",
    description:
      "Vibrant sticker featuring Naruto Uzumaki in action pose. Durable, scratch-resistant, and easy to apply on any smooth surface.",
    size: "6 cm x 6 cm",
    material: "Premium Vinyl",
    isNew: true,
  },
  {
    id: 3,
    slug: "pokemon-pikachu-sticker",
    name: "Pokemon Pikachu Laptop Sticker",
    price: 79,
    image: "/products/pikachu.svg",
    images: ["/products/pikachu.svg"],
    altText: "Cute Pokemon Pikachu laptop sticker with lightning bolt",
    category: "Anime",
    description:
      "Adorable Pikachu sticker that adds a pop of fun to your laptop. Made with high-grade vinyl for long-lasting use.",
    size: "5 cm x 5 cm",
    material: "Premium Vinyl",
    isBestSeller: true,
  },
  {
    id: 4,
    slug: "controller-gamer-sticker",
    name: "Gaming Controller Laptop Sticker",
    price: 89,
    image: "/products/controller.svg",
    images: ["/products/controller.svg"],
    altText: "Retro gaming controller laptop sticker for gamers",
    category: "Gaming",
    description:
      "Classic game controller design for the ultimate gamer aesthetic. Weatherproof and fade-resistant sticker.",
    size: "7 cm x 4 cm",
    material: "Premium Vinyl",
  },
  {
    id: 5,
    slug: "retro-pixel-heart-sticker",
    name: "Retro Pixel Heart Laptop Sticker",
    price: 69,
    image: "/products/pixel-heart.svg",
    images: ["/products/pixel-heart.svg"],
    altText: "8-bit retro pixel heart gaming laptop sticker",
    category: "Gaming",
    description:
      "8-bit pixel heart sticker for retro gaming vibes. Small, cute, and perfect for any gaming setup.",
    size: "4 cm x 4 cm",
    material: "Premium Vinyl",
    isNew: true,
  },
  {
    id: 6,
    slug: "minimal-mountains-sticker",
    name: "Minimal Mountains Laptop Sticker",
    price: 79,
    image: "/products/mountains.svg",
    images: ["/products/mountains.svg"],
    altText: "Minimal line-art mountains laptop sticker for nature lovers",
    category: "Minimal",
    description:
      "Clean line-art mountain design. Subtle and elegant sticker for a minimalist aesthetic.",
    size: "6 cm x 4 cm",
    material: "Premium Vinyl",
  },
  {
    id: 7,
    slug: "aesthetic-clouds-sticker",
    name: "Aesthetic Clouds Laptop Sticker",
    price: 89,
    image: "/products/clouds.svg",
    images: ["/products/clouds.svg"],
    altText: "Dreamy aesthetic pastel clouds laptop sticker",
    category: "Aesthetic",
    description:
      "Dreamy pastel cloud sticker with a soft aesthetic feel. Perfect for adding a calm vibe to your laptop.",
    size: "6 cm x 6 cm",
    material: "Premium Vinyl",
  },
  {
    id: 8,
    slug: "funny-cat-sticker",
    name: "Funny Cat Laptop Sticker",
    price: 79,
    image: "/products/funny-cat.svg",
    images: ["/products/funny-cat.svg"],
    altText: "Hilarious funny cat face laptop sticker",
    category: "Funny",
    description:
      "Hilarious cat sticker that will make everyone laugh. Great conversation starter on your laptop.",
    size: "5 cm x 5 cm",
    material: "Premium Vinyl",
    isBestSeller: true,
  },
  {
    id: 9,
    slug: "custom-name-sticker",
    name: "Custom Name Laptop Sticker",
    price: 149,
    image: "/products/custom.svg",
    images: ["/products/custom.svg"],
    altText: "Personalized custom name laptop sticker in rainbow colors",
    category: "Custom",
    description:
      "Personalized name sticker in your choice of font and color. Contact us on WhatsApp to customize your order.",
    size: "8 cm x 3 cm",
    material: "Premium Vinyl",
  },
  {
    id: 10,
    slug: "deadpool-logo-sticker",
    name: "Deadpool Logo Laptop Sticker",
    price: 99,
    image: "/products/deadpool.svg",
    images: ["/products/deadpool.svg"],
    altText: "Marvel Deadpool logo laptop sticker with cross swords",
    category: "Funny",
    description:
      "Bold Deadpool logo sticker for Marvel fans. High-quality print with vibrant red and black colors.",
    size: "6 cm x 6 cm",
    material: "Premium Vinyl",
  },
  {
    id: 11,
    slug: "space-astronaut-sticker",
    name: "Space Astronaut Laptop Sticker",
    price: 89,
    image: "/products/astronaut.svg",
    images: ["/products/astronaut.svg"],
    altText: "Space astronaut floating in cosmos aesthetic laptop sticker",
    category: "Aesthetic",
    description:
      "Floating astronaut sticker with a cosmic aesthetic. Add a touch of space to your everyday gear.",
    size: "7 cm x 7 cm",
    material: "Premium Vinyl",
    isNew: true,
  },
  {
    id: 12,
    slug: "neon-quotes-sticker",
    name: "Neon Quotes Laptop Sticker",
    price: 99,
    image: "/products/neon-quote.svg",
    images: ["/products/neon-quote.svg"],
    altText: "Glowing neon text quote aesthetic laptop sticker",
    category: "Aesthetic",
    description:
      "Glowing neon-style text sticker with an inspiring quote. Eye-catching design that stands out.",
    size: "8 cm x 3 cm",
    material: "Premium Vinyl",
  },
  {
    id: 13,
    slug: "anime-sticker-pack",
    name: "Anime Sticker Pack",
    price: 299,
    image: "/products/luffy.svg",
    images: ["/products/luffy.svg", "/products/naruto.svg", "/products/pikachu.svg"],
    altText: "Anime sticker pack with Luffy, Naruto, and Pikachu designs",
    category: "Anime",
    description:
      "A curated pack of 3 anime stickers featuring Luffy, Naruto, and Pikachu. Perfect for any anime fan's laptop.",
    size: "Various sizes",
    material: "Premium Vinyl",
    type: "bundle",
    bundleItems: ["One Piece Luffy Laptop Sticker", "Naruto Uzumaki Laptop Sticker", "Pokemon Pikachu Laptop Sticker"],
    isNew: true,
  },
  {
    id: 14,
    slug: "gaming-sticker-pack",
    name: "Gaming Sticker Pack",
    price: 249,
    image: "/products/controller.svg",
    images: ["/products/controller.svg", "/products/pixel-heart.svg"],
    altText: "Gaming sticker pack with controller and pixel heart designs",
    category: "Gaming",
    description:
      "A bundle of 2 gaming stickers featuring a retro controller and pixel heart. Level up your laptop.",
    size: "Various sizes",
    material: "Premium Vinyl",
    type: "bundle",
    bundleItems: ["Gaming Controller Laptop Sticker", "Retro Pixel Heart Laptop Sticker"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, limit);
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.isNew);
}

export function getBestSellers(): Product[] {
  return products.filter((p) => p.isBestSeller);
}

export function getCategoryCounts(): Record<string, number> {
  const counts: Record<string, number> = { All: products.length };
  for (const p of products) {
    counts[p.category] = (counts[p.category] || 0) + 1;
  }
  return counts;
}

export function sortProducts(products: Product[], sort: SortOption): Product[] {
  const sorted = [...products];
  switch (sort) {
    case "newest":
      return sorted.sort((a, b) => {
        if (a.isNew && !b.isNew) return -1;
        if (!a.isNew && b.isNew) return 1;
        return b.id - a.id;
      });
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "name-asc":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case "featured":
    default:
      return sorted.sort((a, b) => {
        if (a.isBestSeller && !b.isBestSeller) return -1;
        if (!a.isBestSeller && b.isBestSeller) return 1;
        if (a.isNew && !b.isNew) return -1;
        if (!a.isNew && b.isNew) return 1;
        return 0;
      });
  }
}
