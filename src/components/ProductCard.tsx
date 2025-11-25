import { ShoppingCart, CheckCircle } from 'lucide-react';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.in_stock ? (
          <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1">
            <CheckCircle className="w-4 h-4" />
            <span>In Stock</span>
          </div>
        ) : (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
            Out of Stock
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="mb-2">
          <span className="inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">${product.price.toFixed(2)}</span>
          <button
            onClick={() => onAddToCart(product)}
            disabled={!product.in_stock}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all ${
              product.in_stock
                ? 'bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
