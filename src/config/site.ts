function getEnvVariable(key: string, fallback: string, required = false): string {
  const value = process.env[key];
  if (!value || value.trim() === "") {
    if (required && process.env.NODE_ENV === "production") {
      console.warn(`[sticker-shop] Missing env var: ${key}, using fallback`);
    }
    return fallback;
  }
  return value;
}

function validateWhatsAppNumber(number: string): string {
  const digitsOnly = number.replace(/\D/g, "");
  if (digitsOnly.length < 7 || digitsOnly.length > 15) {
    console.warn(
      `[sticker-shop] WhatsApp number "${number}" looks invalid. Expected 7-15 digits with country code.`
    );
  }
  return digitsOnly;
}

const rawNumber = getEnvVariable("NEXT_PUBLIC_WHATSAPP_NUMBER", "919876543210", true);
const whatsappNumber = validateWhatsAppNumber(rawNumber);

export const siteConfig = {
  name: "StickerLab",
  shortName: "StickerLab",
  tagline: "Unique stickers for laptops, bottles, notebooks & more.",
  description:
    "Shop unique laptop stickers online in India. Anime, gaming, aesthetic, and custom vinyl stickers for laptops, bottles, and notebooks. Order directly via WhatsApp.",
  url: getEnvVariable("NEXT_PUBLIC_SITE_URL", "https://stickerlab.example.com", true),
  whatsappNumber,
  instagramUrl: getEnvVariable(
    "NEXT_PUBLIC_INSTAGRAM_URL",
    "https://instagram.com/your_sticker_shop"
  ),
  keywords: [
    "laptop stickers",
    "laptop stickers India",
    "anime stickers",
    "gaming stickers",
    "aesthetic stickers",
    "cute laptop stickers",
    "custom stickers",
    "vinyl stickers",
    "sticker shop online",
    "laptop sticker brand",
  ],
  gaTrackingId: getEnvVariable("NEXT_PUBLIC_GA_ID", ""),
} as const;

export type SiteConfig = typeof siteConfig;
