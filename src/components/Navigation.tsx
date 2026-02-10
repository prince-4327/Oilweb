import { useState } from 'react';
import { Menu, X, ShoppingCart, LogOut, LayoutDashboard, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';

interface NavigationProps {
  onNavigate: (page: any) => void;
  currentPage: string;
}

export default function Navigation({ onNavigate, currentPage }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { user, isAdmin, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    onNavigate('home');
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-lg text-amber-900">SaloniOil</p>
              <p className="text-xs text-amber-700">Premium Quality</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => onNavigate('home')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'home' ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'
              }`}
            >
              {t('header.home')}
            </button>
            <button
              onClick={() => onNavigate('products')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'products' ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'
              }`}
            >
              {t('header.products')}
            </button>
            <button
              onClick={() => onNavigate('shop')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'shop' ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'
              }`}
            >
              {t('header.shop')}
            </button>
            <button
              onClick={() => onNavigate('videos')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'videos' ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'
              }`}
            >
              {t('header.videos')}
            </button>
            <button
              onClick={() => onNavigate('faqs')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'faqs' ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'
              }`}
            >
              {t('header.faqs')}
            </button>
            <button
              onClick={() => onNavigate('offers')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'offers' ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'
              }`}
            >
              {t('header.offers')}
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded transition-colors text-sm font-medium ${
                  language === 'en'
                    ? 'bg-white text-amber-600 shadow'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('hi')}
                className={`px-3 py-1 rounded transition-colors text-sm font-medium ${
                  language === 'hi'
                    ? 'bg-white text-amber-600 shadow'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                HI
              </button>
            </div>

            <button
              onClick={() => onNavigate('cart')}
              className="relative p-2 hover:bg-amber-50 rounded-lg transition-colors hidden sm:block"
            >
              <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-amber-600" />
            </button>

            {user ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onNavigate('profile')}
                  className="p-2 hover:bg-amber-50 rounded-lg transition-colors hidden sm:block"
                >
                  <User className="w-6 h-6 text-gray-700 hover:text-amber-600" />
                </button>
                {isAdmin && (
                  <button
                    onClick={() => onNavigate('admin')}
                    className="p-2 hover:bg-amber-50 rounded-lg transition-colors hidden sm:block"
                  >
                    <LayoutDashboard className="w-6 h-6 text-gray-700 hover:text-amber-600" />
                  </button>
                )}
                <button
                  onClick={handleSignOut}
                  className="p-2 hover:bg-red-50 rounded-lg transition-colors hidden sm:block"
                >
                  <LogOut className="w-6 h-6 text-gray-700 hover:text-red-600" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => onNavigate('auth')}
                className="hidden sm:block px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors text-sm font-medium"
              >
                {t('header.login')}
              </button>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-2 pt-4">
              <button
                onClick={() => {
                  onNavigate('home');
                  setIsOpen(false);
                }}
                className="text-left px-4 py-2 text-gray-700 hover:bg-amber-50 rounded-lg transition-colors"
              >
                {t('header.home')}
              </button>
              <button
                onClick={() => {
                  onNavigate('products');
                  setIsOpen(false);
                }}
                className="text-left px-4 py-2 text-gray-700 hover:bg-amber-50 rounded-lg transition-colors"
              >
                {t('header.products')}
              </button>
              <button
                onClick={() => {
                  onNavigate('shop');
                  setIsOpen(false);
                }}
                className="text-left px-4 py-2 text-gray-700 hover:bg-amber-50 rounded-lg transition-colors"
              >
                {t('header.shop')}
              </button>
              <button
                onClick={() => {
                  onNavigate('videos');
                  setIsOpen(false);
                }}
                className="text-left px-4 py-2 text-gray-700 hover:bg-amber-50 rounded-lg transition-colors"
              >
                {t('header.videos')}
              </button>
              <button
                onClick={() => {
                  onNavigate('faqs');
                  setIsOpen(false);
                }}
                className="text-left px-4 py-2 text-gray-700 hover:bg-amber-50 rounded-lg transition-colors"
              >
                {t('header.faqs')}
              </button>
              <button
                onClick={() => {
                  onNavigate('cart');
                  setIsOpen(false);
                }}
                className="text-left px-4 py-2 text-gray-700 hover:bg-amber-50 rounded-lg transition-colors"
              >
                {t('header.cart')}
              </button>
              {user ? (
                <>
                  <button
                    onClick={() => {
                      onNavigate('profile');
                      setIsOpen(false);
                    }}
                    className="text-left px-4 py-2 text-gray-700 hover:bg-amber-50 rounded-lg transition-colors"
                  >
                    {t('header.profile')}
                  </button>
                  {isAdmin && (
                    <button
                      onClick={() => {
                        onNavigate('admin');
                        setIsOpen(false);
                      }}
                      className="text-left px-4 py-2 text-gray-700 hover:bg-amber-50 rounded-lg transition-colors"
                    >
                      {t('header.dashboard')}
                    </button>
                  )}
                  <button
                    onClick={handleSignOut}
                    className="text-left px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    {t('header.logout')}
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    onNavigate('auth');
                    setIsOpen(false);
                  }}
                  className="text-left px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
                >
                  {t('header.login')}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
