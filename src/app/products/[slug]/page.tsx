import { notFound } from "next/navigation";
import Link from "next/link";
import { products, getProductBySlug, getRelatedProducts } from "@/data/products";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ProductJsonLd } from "@/components/JsonLd";
import ProductGallery from "@/components/ProductGallery";
import RelatedProducts from "@/components/RelatedProducts";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };

  const title = `${product.name} | Buy Online`;
  const description = `${product.description} Available for ₹${product.price}. Order now via WhatsApp.`;

  return {
    title,
    description,
    keywords: [
      product.name.toLowerCase(),
      `${product.category.toLowerCase()} laptop sticker`,
      "laptop sticker India",
      "buy stickers online",
      "vinyl laptop sticker",
    ],
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title: product.name,
      description,
      url: `${siteConfig.url}/products/${product.slug}`,
      siteName: siteConfig.name,
      images: [
        {
          url: product.image,
          width: 800,
          height: 800,
          alt: product.altText,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const related = getRelatedProducts(product, 4);
  const images = product.images && product.images.length > 0 ? product.images : [product.image];

  return (
    <>
      <ProductJsonLd
        name={product.name}
        description={product.description}
        image={product.image}
        price={product.price}
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-8">
          <ol className="flex flex-wrap items-center gap-1">
            <li>
              <Link href="/" className="hover:text-gray-900 transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="mx-2">/</li>
            <li>
              <Link href="/products" className="hover:text-gray-900 transition-colors">
                Shop
              </Link>
            </li>
            <li aria-hidden="true" className="mx-2">/</li>
            <li aria-current="page" className="text-gray-900 font-medium">
              {product.name}
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <ProductGallery images={images} altText={product.altText} />

          <div className="flex flex-col">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-indigo-600 bg-indigo-100 rounded-full px-3 py-1">
                {product.category}
              </span>
              {product.isNew && (
                <span className="text-sm font-medium text-indigo-600 bg-indigo-100 rounded-full px-3 py-1">
                  New
                </span>
              )}
              {product.isBestSeller && (
                <span className="text-sm font-medium text-amber-600 bg-amber-100 rounded-full px-3 py-1">
                  Best Seller
                </span>
              )}
              {product.type === "bundle" && (
                <span className="text-sm font-medium text-purple-600 bg-purple-100 rounded-full px-3 py-1">
                  Bundle
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-4">
              {product.name}
            </h1>

            <p className="text-2xl font-bold text-gray-900 mt-3">
              &#x20B9;{product.price}
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              {product.description}
            </p>

            <dl className="mt-6 space-y-3">
              {product.size && (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <dt className="font-medium text-gray-900">Size:</dt>
                  <dd>{product.size}</dd>
                </div>
              )}
              {product.material && (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <dt className="font-medium text-gray-900">Material:</dt>
                  <dd>{product.material}</dd>
                </div>
              )}
            </dl>

            {product.type === "bundle" && product.bundleItems && product.bundleItems.length > 0 && (
              <div className="mt-6 bg-purple-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-purple-900 mb-2">
                  This bundle includes:
                </h3>
                <ul className="space-y-1">
                  {product.bundleItems.map((item, i) => (
                    <li key={i} className="text-sm text-purple-700 flex items-center gap-2">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-8">
              <WhatsAppButton productName={product.name} />
            </div>

            <p className="text-xs text-gray-400 mt-3 text-center">
              You will be redirected to WhatsApp to complete your order.
            </p>
          </div>
        </div>
      </section>

      {related.length > 0 && <RelatedProducts products={related} />}

      {/* Custom Sticker CTA */}
      <section className="bg-indigo-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Want a Custom Sticker?
          </h2>
          <p className="text-gray-600 mt-3 max-w-lg mx-auto">
            Have your own design or idea? Talk to us about a custom sticker.
            We&apos;ll bring your vision to life.
          </p>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hi, I want to discuss a custom sticker")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-xl transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Request Custom Sticker on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
