import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import VideosPage from './pages/VideosPage';
import FAQsPage from './pages/FAQsPage';
import OffersPage from './pages/OffersPage';
import RewardsPage from './pages/RewardsPage';
import AuthPage from './pages/AuthPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import AdminDashboard from './pages/AdminDashboard';
import ProfilePage from './pages/ProfilePage';
import { useAuth } from './context/AuthContext';

type PageType = 'home' | 'products' | 'shop' | 'cart' | 'videos' | 'faqs' | 'offers' | 'rewards' | 'auth' | 'terms' | 'privacy' | 'admin' | 'profile';

export default function Router() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const { user, isAdmin } = useAuth();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'products':
        return <ProductsPage />;
      case 'shop':
        return <ShopPage />;
      case 'cart':
        return <CartPage />;
      case 'videos':
        return <VideosPage />;
      case 'faqs':
        return <FAQsPage />;
      case 'offers':
        return <OffersPage />;
      case 'rewards':
        return user ? <RewardsPage /> : <AuthPage onNavigate={setCurrentPage} />;
      case 'auth':
        return <AuthPage onNavigate={setCurrentPage} />;
      case 'terms':
        return <TermsPage />;
      case 'privacy':
        return <PrivacyPage />;
      case 'admin':
        return isAdmin ? <AdminDashboard onNavigate={setCurrentPage} /> : <HomePage onNavigate={setCurrentPage} />;
      case 'profile':
        return user ? <ProfilePage onNavigate={setCurrentPage} /> : <AuthPage onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
