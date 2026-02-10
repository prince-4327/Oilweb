import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, AlertCircle } from 'lucide-react';

interface AuthPageProps {
  onNavigate: (page: any) => void;
}

export default function AuthPage({ onNavigate }: AuthPageProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();
  const { signIn, signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        await signIn(email, password);
      } else {
        if (password !== confirmPassword) {
          throw new Error('Passwords do not match');
        }
        await signUp(email, password);
      }
      onNavigate('home');
    } catch (err: any) {
      setError(err.message || t('auth.error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-lg shadow-2xl overflow-hidden max-w-md w-full">
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 px-6 py-8">
          <h1 className="text-3xl font-bold text-white text-center mb-2">
            {isLogin ? t('auth.login') : t('auth.register')}
          </h1>
          <p className="text-amber-100 text-center text-sm">
            {isLogin ? 'Welcome back to SaloniOil' : 'Join SaloniOil today'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="px-6 py-8">
          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">{t('auth.email')}</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 transition-colors"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">{t('auth.password')}</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 transition-colors"
                placeholder="••••••••"
              />
            </div>
          </div>

          {!isLogin && (
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">{t('auth.confirmPassword')}</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 transition-colors"
                  placeholder="••••••••"
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? t('common.loading') : isLogin ? t('auth.login') : t('auth.register')}
          </button>

          {isLogin && (
            <button
              type="button"
              className="w-full mt-3 py-2 text-amber-600 hover:text-amber-700 text-sm font-semibold transition-colors"
            >
              {t('auth.forgotPassword')}
            </button>
          )}

          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm mb-2">
              {isLogin ? t('auth.doNotHaveAccount') : t('auth.alreadyHaveAccount')}
            </p>
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setError('');
              }}
              className="text-amber-600 hover:text-amber-700 font-semibold text-sm transition-colors"
            >
              {isLogin ? t('auth.registerHere') : t('auth.loginHere')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
