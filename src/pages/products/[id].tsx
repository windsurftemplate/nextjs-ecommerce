import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import ProductGallery from '@/components/ProductGallery';
import { useCartStore } from '@/store/cartStore';
import { Product, ProductVariant } from '@/types/product';

interface ProductPageProps {
  product: Product;
}

export default function ProductPage({ product }: ProductPageProps) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    product.variants[0] || null
  );
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    if (selectedVariant) {
      addItem({
        id: selectedVariant.id,
        name: `${product.name} - ${selectedVariant.name}`,
        price: selectedVariant.price,
        quantity,
        variant: selectedVariant.name,
      });
    }
  };

  return (
    <>
      <Head>
        <title>{product.name} | Our Store</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.images[0]} />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProductGallery images={product.images} />

          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-gray-600">{product.description}</p>

            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold">
                ${selectedVariant ? selectedVariant.price : product.price}
              </span>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < product.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-gray-600">({product.reviews} reviews)</span>
              </div>
            </div>

            {product.variants.length > 0 && (
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Variants
                </label>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant)}
                      className={`p-2 text-sm border rounded ${
                        selectedVariant?.id === variant.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-300'
                      }`}
                    >
                      {variant.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Quantity
              </label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="mt-1 block w-20 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <button
              onClick={handleAddToCart}
              disabled={!selectedVariant || selectedVariant.stock < quantity}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // In a real application, fetch product IDs from your API
  const paths = [
    { params: { id: '1' } },
    { params: { id: '2' } },
    // Add more products as needed
  ];

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // In a real application, fetch product data from your API
  const mockProduct: Product = {
    id: params?.id as string,
    name: 'Sample Product',
    description: 'This is a sample product description.',
    price: 99.99,
    images: [
      'https://via.placeholder.com/600',
      'https://via.placeholder.com/600',
      'https://via.placeholder.com/600',
    ],
    variants: [
      {
        id: 'v1',
        name: 'Small',
        price: 99.99,
        sku: 'PROD-S',
        stock: 10,
      },
      {
        id: 'v2',
        name: 'Medium',
        price: 109.99,
        sku: 'PROD-M',
        stock: 15,
      },
      {
        id: 'v3',
        name: 'Large',
        price: 119.99,
        sku: 'PROD-L',
        stock: 5,
      },
    ],
    category: 'Sample Category',
    brand: 'Sample Brand',
    rating: 4.5,
    reviews: 128,
    stock: 30,
  };

  return {
    props: {
      product: mockProduct,
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
};
