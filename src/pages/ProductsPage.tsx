import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useLanguage } from '../context/LanguageContext';

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { t, language } = useLanguage();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await supabase
          .from('products')
          .select('*')
          .eq('is_active', true)
          .order('created_at', { ascending: false });
        setProducts(data || []);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const productName = (product: any) => language === 'hi' ? product.name_hi : product.name_en;
  const productDesc = (product: any) => language === 'hi' ? product.description_hi : product.description_en;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('products.title')}</h1>
      <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mb-12"></div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
        </div>
      ) : products.length === 0 ? (
        <p className="text-center text-gray-600 py-20">{t('products.noProducts')}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-full h-40 bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center">
                {product.image_url ? (
                  <img src={product.image_url} alt={productName(product)} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-white text-4xl font-bold opacity-30">🛢️</div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">{productName(product)}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{productDesc(product)}</p>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-2xl font-bold text-amber-600">₹{product.price}</span>
                  {product.original_price && (
                    <span className="text-xs text-gray-500 line-through">₹{product.original_price}</span>
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
  );
}
