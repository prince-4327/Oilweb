import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { User, Mail, LogOut } from 'lucide-react';

interface ProfilePageProps {
  onNavigate: (page: any) => void;
}

export default function ProfilePage({ onNavigate }: ProfilePageProps) {
  const { user, signOut } = useAuth();
  const { t } = useLanguage();

  const handleLogout = async () => {
    await signOut();
    onNavigate('home');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('header.profile')}</h1>
      <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mb-8"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">{user?.email?.split('@')[0] || 'User'}</h2>
            <p className="text-gray-600 text-sm mb-6">{user?.email}</p>
            <button
              onClick={handleLogout}
              className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold flex items-center justify-center gap-2"
            >
              <LogOut className="w-5 h-5" />
              {t('header.logout')}
            </button>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Account Information</h3>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <div className="flex items-center px-4 py-2 bg-gray-50 rounded-lg border border-gray-200">
                  <Mail className="w-5 h-5 text-amber-600 mr-2" />
                  <span className="text-gray-700">{user?.email}</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Account Status</label>
                <div className="px-4 py-2 bg-green-50 rounded-lg border border-green-200">
                  <span className="text-green-700 font-semibold">Active</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Member Since</label>
                <div className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-200">
                  <span className="text-gray-700">
                    {user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'Recently'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mt-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Links</h3>
            <div className="space-y-3">
              <button
                onClick={() => onNavigate('rewards')}
                className="w-full text-left px-4 py-3 hover:bg-amber-50 rounded-lg transition-colors border border-gray-200"
              >
                <p className="font-semibold text-gray-900">{t('header.rewards')}</p>
                <p className="text-sm text-gray-600">View your reward points and benefits</p>
              </button>
              <button
                onClick={() => onNavigate('cart')}
                className="w-full text-left px-4 py-3 hover:bg-amber-50 rounded-lg transition-colors border border-gray-200"
              >
                <p className="font-semibold text-gray-900">Order History</p>
                <p className="text-sm text-gray-600">View your past purchases and orders</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
