import { useLanguage } from '../context/LanguageContext';
import { Trash2 } from 'lucide-react';

export default function CartPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('cart.title')}</h1>
      <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mb-8"></div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col items-center justify-center py-12">
            <div className="text-6xl mb-4">🛒</div>
            <p className="text-xl text-gray-600">{t('cart.empty')}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 h-fit">
          <h2 className="text-xl font-bold mb-4">{t('cart.total')}</h2>
          <div className="space-y-3 mb-6 pb-6 border-b">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>₹0</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>₹0</span>
            </div>
            <div className="flex justify-between text-2xl font-bold text-amber-600">
              <span>Total</span>
              <span>₹0</span>
            </div>
          </div>
          <button className="w-full px-4 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-semibold mb-2">
            {t('cart.checkout')}
          </button>
          <button className="w-full px-4 py-2 border-2 border-amber-600 text-amber-600 rounded-lg hover:bg-amber-50 transition-colors font-semibold">
            {t('cart.continueShopping')}
          </button>
        </div>
      </div>
    </div>
  );
}
