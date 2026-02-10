import { useEffect, useState } from 'react';
import { ChevronRight, Zap, Shield, Truck } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useLanguage } from '../context/LanguageContext';

interface HomePageProps {
  onNavigate: (page: any) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [featuredProducts, setFeaturedProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { t, language } = useLanguage();

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const { data } = await supabase
          .from('products')
          .select('*')
          .eq('is_active', true)
          .limit(6);
        setFeaturedProducts(data || []);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  const productName = (product: any) => language === 'hi' ? product.name_hi : product.name_en;
  const productDesc = (product: any) => language === 'hi' ? product.description_hi : product.description_en;

  return (
    <div className="w-full">
      <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 min-h-screen flex items-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl animation-float"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl animation-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t('home.title')}
              </h1>
              <p className="text-xl text-gray-700">{t('home.subtitle')}</p>
              <p className="text-gray-600">
                Discover our premium range of oils crafted for quality and excellence. From culinary to industrial applications, we have the perfect solution for your needs.
              </p>
              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => onNavigate('shop')}
                  className="px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold flex items-center gap-2"
                >
                  {t('home.exploreShop')}
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onNavigate('faqs')}
                  className="px-8 py-3 border-2 border-amber-600 text-amber-600 rounded-lg hover:bg-amber-50 transition-all duration-300 font-semibold"
                >
                  {t('header.faqs')}
                </button>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="w-full h-96 bg-gradient-to-br from-amber-200 to-orange-300 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-48 h-48 bg-white rounded-full opacity-20"></div>
                  <p className="text-white text-2xl font-bold mt-4">Premium Oil Products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">Our products are sourced and processed with the highest standards of quality control.</p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Certified & Safe</h3>
              <p className="text-gray-600">All our products are certified and tested for safety and purity standards.</p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick and reliable delivery across all regions with real-time tracking.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 md:py-24 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('home.featured')}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto"></div>
          </div>

          {loading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="w-full h-48 bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center relative overflow-hidden">
                    {product.image_url ? (
                      <img src={product.image_url} alt={productName(product)} className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-white text-4xl font-bold opacity-30">🛢️</div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">{productName(product)}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{productDesc(product)}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-amber-600">₹{product.price}</span>
                      {product.original_price && (
                        <span className="text-sm text-gray-500 line-through">₹{product.original_price}</span>
                      )}
                    </div>
                    <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold group-hover:bg-gradient-to-r group-hover:from-amber-700 group-hover:to-orange-700">
                      {t('products.addToCart')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('shop')}
              className="px-8 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-semibold"
            >
              {t('shop.title')}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(20px);
          }
        }
        .animation-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
