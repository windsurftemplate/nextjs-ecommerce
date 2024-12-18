import Image from 'next/image';
import { Product } from '@/types/product';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TagIcon, TruckIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

// Mock products data
const products: Product[] = [
  {
    id: 1,
    name: 'Wireless Noise-Cancelling Headphones',
    price: 299.99,
    description: 'Premium wireless headphones with active noise cancellation',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60',
    category: 'Electronics',
    rating: 4.8,
    stock: 15
  },
  {
    id: 2,
    name: 'Smart Fitness Watch',
    price: 199.99,
    description: 'Track your fitness goals with this advanced smartwatch',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop&q=60',
    category: 'Electronics',
    rating: 4.6,
    stock: 8
  },
  {
    id: 3,
    name: 'Premium Leather Wallet',
    price: 79.99,
    description: 'Handcrafted genuine leather wallet with RFID protection',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop&q=60',
    category: 'Accessories',
    rating: 4.7,
    stock: 25
  },
  {
    id: 4,
    name: 'Casual Denim Jacket',
    price: 129.99,
    description: 'Classic denim jacket perfect for any casual outfit',
    image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=800&auto=format&fit=crop&q=60',
    category: 'Clothing',
    rating: 4.5,
    stock: 20
  },
  {
    id: 5,
    name: 'Organic Face Serum',
    price: 49.99,
    description: 'Natural and organic face serum for radiant skin',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=60',
    category: 'Beauty',
    rating: 4.9,
    stock: 30
  },
  {
    id: 6,
    name: 'Wireless Earbuds',
    price: 159.99,
    description: 'True wireless earbuds with premium sound quality',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=60',
    category: 'Electronics',
    rating: 4.7,
    stock: 12
  },
  {
    id: 7,
    name: 'Designer Sunglasses',
    price: 189.99,
    description: 'Premium UV protection designer sunglasses',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&auto=format&fit=crop&q=60',
    category: 'Accessories',
    rating: 4.6,
    stock: 18
  },
  {
    id: 8,
    name: 'Cotton T-Shirt',
    price: 29.99,
    description: 'Comfortable 100% organic cotton t-shirt',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop&q=60',
    category: 'Clothing',
    rating: 4.4,
    stock: 50
  },
  {
    id: 9,
    name: 'Anti-Aging Cream',
    price: 89.99,
    description: 'Advanced anti-aging formula with retinol',
    image: 'https://images.unsplash.com/photo-1556229162-5c63ed9c4efb?w=800&auto=format&fit=crop&q=60',
    category: 'Beauty',
    rating: 4.8,
    stock: 15
  },
  {
    id: 10,
    name: 'Smart Speaker',
    price: 129.99,
    description: 'Voice-controlled smart speaker with premium sound',
    image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=800&auto=format&fit=crop&q=60',
    category: 'Electronics',
    rating: 4.5,
    stock: 22
  },
  {
    id: 11,
    name: 'Leather Crossbody Bag',
    price: 149.99,
    description: 'Stylish leather crossbody bag for everyday use',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=60',
    category: 'Accessories',
    rating: 4.7,
    stock: 10
  },
  {
    id: 12,
    name: 'Winter Jacket',
    price: 199.99,
    description: 'Warm and stylish winter jacket with premium insulation',
    image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=800&auto=format&fit=crop&q=60',
    category: 'Clothing',
    rating: 4.9,
    stock: 8
  }
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&auto=format&fit=crop&q=60"
              alt="Hero background"
              fill
              className="object-cover object-center opacity-10 mix-blend-overlay"
              priority
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
              New Year Sale
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl text-purple-100">
              Get up to 50% off on selected items. Limited time offer!
            </p>
            <button className="bg-gradient-to-r from-white to-purple-200 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:from-purple-200 hover:to-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Shop Now
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-b from-purple-600/5 to-transparent py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center space-x-4 bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <TruckIcon className="h-10 w-10 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Free Shipping</h3>
                  <p className="text-gray-600">On orders over $100</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <TagIcon className="h-10 w-10 text-purple-600" />
                <div>
                  <h3 className="font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Best Prices</h3>
                  <p className="text-gray-600">Price match guarantee</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <ShieldCheckIcon className="h-10 w-10 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Secure Payment</h3>
                  <p className="text-gray-600">100% secure checkout</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-purple-100"
              >
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                      ${product.price}
                    </span>
                    {product.stock < 10 ? (
                      <span className="text-red-600 text-sm font-semibold">
                        Only {product.stock} left!
                      </span>
                    ) : null}
                  </div>
                  <div className="mt-2 flex items-center">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400'
                              : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 15.585l-6.327 3.323 1.209-7.037L.172 7.207l7.046-1.024L10 0l2.782 6.183 7.046 1.024-4.71 4.664 1.209 7.037L10 15.585z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      {product.rating} / 5
                    </span>
                  </div>
                  <button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
