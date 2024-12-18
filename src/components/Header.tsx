import Link from 'next/link';
import { ShoppingCartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-white hover:text-purple-200 transition-colors">
              StyleStore
            </span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <MagnifyingGlassIcon className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70" />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/new-arrivals" className="text-white/90 hover:text-white transition-colors">
              New Arrivals
            </Link>
            <Link href="/featured" className="text-white/90 hover:text-white transition-colors">
              Featured
            </Link>
            <Link href="/sale" className="text-white/90 hover:text-white transition-colors">
              Sale
            </Link>
          </nav>

          {/* Cart */}
          <div className="flex items-center ml-8">
            <Link 
              href="/cart"
              className="relative group p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <ShoppingCartIcon className="h-6 w-6 text-white" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                3
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
