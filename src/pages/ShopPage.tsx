import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown } from 'lucide-react';

export default function ShopPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('newest');
  const [loading, setLoading] = useState(true);
  const { t, language } = useLanguage();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsRes, categoriesRes] = await Promise.all([
          supabase.from('products').select('*').eq('is_active', true),
          supabase.from('categories').select('*'),
        ]);
        setProducts(productsRes.data || []);
        setCategories(categoriesRes.data || []);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  let filtered = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category_id === selectedCategory);

  if (sortBy === 'price-low') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  const categoryName = (cat: any) => language === 'hi' ? cat.name_hi : cat.name_en;
  const productName = (product: any) => language === 'hi' ? product.name_hi : product.name_en;
  const productDesc = (product: any) => language === 'hi' ? product.description_hi : product.description_en;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('shop.title')}</h1>
      <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mb-8"></div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-4">{t('shop.category')}</h3>
            <div className="space-y-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`w-full text-left px-4 py-2 rounded transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-amber-600 text-white'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                {t('shop.allCategories')}
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`w-full text-left px-4 py-2 rounded transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-amber-600 text-white'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  {categoryName(cat)}
                </button>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t">
              <h3 className="font-bold text-lg mb-4">{t('shop.sortBy')}</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSortBy('newest')}
                  className={`w-full text-left px-4 py-2 rounded transition-colors ${
                    sortBy === 'newest'
                      ? 'bg-amber-600 text-white'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  {t('shop.newest')}
                </button>
                <button
                  onClick={() => setSortBy('price-low')}
                  className={`w-full text-left px-4 py-2 rounded transition-colors ${
                    sortBy === 'price-low'
                      ? 'bg-amber-600 text-white'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  {t('shop.priceLowToHigh')}
                </button>
                <button
                  onClick={() => setSortBy('price-high')}
                  className={`w-full text-left px-4 py-2 rounded transition-colors ${
                    sortBy === 'price-high'
                      ? 'bg-amber-600 text-white'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  {t('shop.priceHighToLow')}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-full h-48 bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center">
                    {product.image_url ? (
                      <img src={product.image_url} alt={productName(product)} className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-white text-4xl font-bold opacity-30">🛢️</div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">{productName(product)}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-3">{productDesc(product)}</p>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-2xl font-bold text-amber-600">₹{product.price}</span>
                      {product.stock_quantity > 0 && (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          In Stock
                        </span>
                      )}
                    </div>
                    <button className="w-full px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-semibold">
                      {t('products.addToCart')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
