import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { Gift, TrendingUp } from 'lucide-react';

export default function RewardsPage() {
  const [rewards, setRewards] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();
  const { user } = useAuth();

  useEffect(() => {
    const fetchRewards = async () => {
      if (!user) return;
      try {
        const { data } = await supabase
          .from('user_rewards')
          .select('*')
          .eq('user_id', user.id)
          .maybeSingle();
        setRewards(data || { points: 0, total_spent: 0 });
      } finally {
        setLoading(false);
      }
    };

    fetchRewards();
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('rewards.title')}</h1>
      <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mb-12"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg shadow-lg p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-amber-100 font-semibold mb-2">{t('rewards.points')}</p>
              <p className="text-5xl font-bold">{rewards?.points || 0}</p>
            </div>
            <Gift className="w-20 h-20 opacity-30" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg shadow-lg p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 font-semibold mb-2">{t('rewards.totalSpent')}</p>
              <p className="text-5xl font-bold">₹{rewards?.total_spent || 0}</p>
            </div>
            <TrendingUp className="w-20 h-20 opacity-30" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How Rewards Work</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
              <span className="font-bold text-amber-600">1</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Earn Points</h3>
              <p className="text-gray-600">Earn 1 point for every rupee spent on purchases</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
              <span className="font-bold text-amber-600">2</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Accumulate</h3>
              <p className="text-gray-600">Your points never expire and keep growing with every purchase</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
              <span className="font-bold text-amber-600">3</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Redeem</h3>
              <p className="text-gray-600">Use your points to get discounts on future purchases or special products</p>
            </div>
          </div>
        </div>

        <button className="w-full mt-8 px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-semibold">
          {t('rewards.redeem')}
        </button>
      </div>
    </div>
  );
}
