import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useCartStore } from '@/store/cartStore';
import Link from 'next/link';

export default function CartIcon() {
  const items = useCartStore((state) => state.items);
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link href="/cart" className="relative">
      <ShoppingBagIcon className="h-6 w-6 text-white hover:text-purple-200 transition-colors" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </Link>
  );
}
