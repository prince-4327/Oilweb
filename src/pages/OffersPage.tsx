import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useLanguage } from '../context/LanguageContext';
import { Zap, Calendar } from 'lucide-react';

export default function OffersPage() {
  const [offers, setOffers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { t, language } = useLanguage();

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const { data } = await supabase
          .from('offers')
          .select('*')
          .eq('is_active', true)
          .order('created_at', { ascending: false });
        setOffers(data || []);
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, []);

  const offerTitle = (offer: any) => language === 'hi' ? offer.title_hi : offer.title_en;
  const offerDesc = (offer: any) => language === 'hi' ? offer.description_hi : offer.description_en;

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-US');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('offers.title')}</h1>
      <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mb-12"></div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
        </div>
      ) : offers.length === 0 ? (
        <p className="text-center text-gray-600 py-20">{t('offers.noOffers')}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-32 bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Zap className="w-24 h-24 text-white absolute -top-4 -right-4 rotate-45" />
                </div>
                <div className="relative z-10 text-center">
                  {offer.discount_percentage ? (
                    <div className="text-5xl font-bold text-white">{offer.discount_percentage}%</div>
                  ) : offer.discount_amount ? (
                    <div className="text-5xl font-bold text-white">₹{offer.discount_amount}</div>
                  ) : null}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-2">{offerTitle(offer)}</h3>
                <p className="text-gray-600 text-sm mb-4">{offerDesc(offer)}</p>

                <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                  <Calendar className="w-4 h-4 text-amber-600" />
                  <span>{t('offers.validTill')}: {formatDate(offer.end_date)}</span>
                </div>

                <button className="w-full px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Claim Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
