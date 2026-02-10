import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    'header.home': 'Home',
    'header.products': 'Products',
    'header.shop': 'Shop',
    'header.videos': 'Videos',
    'header.faqs': 'FAQs',
    'header.rewards': 'Rewards',
    'header.offers': 'Offers',
    'header.login': 'Login',
    'header.register': 'Register',
    'header.logout': 'Logout',
    'header.dashboard': 'Dashboard',
    'header.profile': 'Profile',
    'header.cart': 'Cart',

    'home.title': 'Premium Oil Products',
    'home.subtitle': 'Quality Oil for Every Need',
    'home.featured': 'Featured Products',
    'home.exploreShop': 'Explore Our Shop',

    'products.title': 'Our Products',
    'products.noProducts': 'No products found',
    'products.addToCart': 'Add to Cart',
    'products.viewDetails': 'View Details',
    'products.price': 'Price',

    'shop.title': 'Shop',
    'shop.category': 'Category',
    'shop.allCategories': 'All Categories',
    'shop.sortBy': 'Sort By',
    'shop.priceLowToHigh': 'Price: Low to High',
    'shop.priceHighToLow': 'Price: High to Low',
    'shop.newest': 'Newest',

    'cart.title': 'Shopping Cart',
    'cart.empty': 'Your cart is empty',
    'cart.total': 'Total',
    'cart.checkout': 'Proceed to Checkout',
    'cart.continueShopping': 'Continue Shopping',
    'cart.remove': 'Remove',
    'cart.quantity': 'Quantity',

    'videos.title': 'Videos',
    'videos.live': 'Live Videos',
    'videos.uploaded': 'Uploaded Videos',
    'videos.noVideos': 'No videos available',

    'faqs.title': 'Frequently Asked Questions',
    'faqs.noFaqs': 'No FAQs available',

    'offers.title': 'Special Offers',
    'offers.noOffers': 'No offers available',
    'offers.discount': 'Discount',
    'offers.validTill': 'Valid Till',

    'rewards.title': 'Rewards Program',
    'rewards.points': 'Points',
    'rewards.totalSpent': 'Total Spent',
    'rewards.redeem': 'Redeem',

    'auth.login': 'Login',
    'auth.register': 'Register',
    'auth.email': 'Email',
    'auth.password': 'Password',
    'auth.confirmPassword': 'Confirm Password',
    'auth.forgotPassword': 'Forgot Password?',
    'auth.doNotHaveAccount': "Don't have an account?",
    'auth.alreadyHaveAccount': 'Already have an account?',
    'auth.loginHere': 'Login here',
    'auth.registerHere': 'Register here',
    'auth.loginSuccess': 'Login successful!',
    'auth.registerSuccess': 'Registration successful! Please login.',
    'auth.logoutSuccess': 'Logged out successfully',
    'auth.error': 'Error occurred',

    'footer.about': 'About Us',
    'footer.contact': 'Contact',
    'footer.terms': 'Terms & Conditions',
    'footer.privacy': 'Privacy Policy',
    'footer.followUs': 'Follow Us',
    'footer.rights': 'All rights reserved',
    'footer.facebook': 'Facebook',
    'footer.twitter': 'Twitter',
    'footer.instagram': 'Instagram',
    'footer.youtube': 'YouTube',
    'footer.linkedin': 'LinkedIn',

    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.submit': 'Submit',
    'common.cancel': 'Cancel',
    'common.delete': 'Delete',
    'common.edit': 'Edit',
    'common.search': 'Search',
  },
  hi: {
    'header.home': 'होम',
    'header.products': 'उत्पाद',
    'header.shop': 'दुकान',
    'header.videos': 'वीडियो',
    'header.faqs': 'सामान्य प्रश्न',
    'header.rewards': 'पुरस्कार',
    'header.offers': 'ऑफर',
    'header.login': 'लॉगिन',
    'header.register': 'रजिस्टर',
    'header.logout': 'लॉगआउट',
    'header.dashboard': 'डैशबोर्ड',
    'header.profile': 'प्रोफाइल',
    'header.cart': 'कार्ट',

    'home.title': 'प्रीमियम तेल उत्पाद',
    'home.subtitle': 'हर जरूरत के लिए गुणवत्ता का तेल',
    'home.featured': 'विशेष उत्पाद',
    'home.exploreShop': 'हमारी दुकान देखें',

    'products.title': 'हमारे उत्पाद',
    'products.noProducts': 'कोई उत्पाद नहीं मिला',
    'products.addToCart': 'कार्ट में जोड़ें',
    'products.viewDetails': 'विवरण देखें',
    'products.price': 'कीमत',

    'shop.title': 'दुकान',
    'shop.category': 'श्रेणी',
    'shop.allCategories': 'सभी श्रेणियां',
    'shop.sortBy': 'क्रमबद्ध करें',
    'shop.priceLowToHigh': 'कीमत: कम से अधिक',
    'shop.priceHighToLow': 'कीमत: अधिक से कम',
    'shop.newest': 'नवीनतम',

    'cart.title': 'शॉपिंग कार्ट',
    'cart.empty': 'आपका कार्ट खाली है',
    'cart.total': 'कुल',
    'cart.checkout': 'चेकआउट के लिए आगे बढ़ें',
    'cart.continueShopping': 'खरीदारी जारी रखें',
    'cart.remove': 'हटाएं',
    'cart.quantity': 'मात्रा',

    'videos.title': 'वीडियो',
    'videos.live': 'लाइव वीडियो',
    'videos.uploaded': 'अपलोड की गई वीडियो',
    'videos.noVideos': 'कोई वीडियो उपलब्ध नहीं',

    'faqs.title': 'अक्सर पूछे जाने वाले प्रश्न',
    'faqs.noFaqs': 'कोई सामान्य प्रश्न उपलब्ध नहीं',

    'offers.title': 'विशेष ऑफर',
    'offers.noOffers': 'कोई ऑफर उपलब्ध नहीं',
    'offers.discount': 'छूट',
    'offers.validTill': 'वैध है',

    'rewards.title': 'पुरस्कार कार्यक्रम',
    'rewards.points': 'अंक',
    'rewards.totalSpent': 'कुल खर्च',
    'rewards.redeem': 'रिडीम करें',

    'auth.login': 'लॉगिन',
    'auth.register': 'रजिस्टर',
    'auth.email': 'ईमेल',
    'auth.password': 'पासवर्ड',
    'auth.confirmPassword': 'पासवर्ड की पुष्टि करें',
    'auth.forgotPassword': 'पासवर्ड भूल गए?',
    'auth.doNotHaveAccount': 'खाता नहीं है?',
    'auth.alreadyHaveAccount': 'पहले से खाता है?',
    'auth.loginHere': 'यहां लॉगिन करें',
    'auth.registerHere': 'यहां रजिस्टर करें',
    'auth.loginSuccess': 'लॉगिन सफल!',
    'auth.registerSuccess': 'पंजीकरण सफल! कृपया लॉगिन करें।',
    'auth.logoutSuccess': 'सफलतापूर्वक लॉग आउट',
    'auth.error': 'त्रुटि हुई',

    'footer.about': 'हमारे बारे में',
    'footer.contact': 'संपर्क करें',
    'footer.terms': 'नियम और शर्तें',
    'footer.privacy': 'गोपनीयता नीति',
    'footer.followUs': 'हमारा अनुसरण करें',
    'footer.rights': 'सभी अधिकार सुरक्षित',
    'footer.facebook': 'फेसबुक',
    'footer.twitter': 'ट्विटर',
    'footer.instagram': 'इंस्टाग्राम',
    'footer.youtube': 'यूट्यूब',
    'footer.linkedin': 'लिंक्डइन',

    'common.loading': 'लोड हो रहा है...',
    'common.error': 'त्रुटि',
    'common.success': 'सफल',
    'common.submit': 'जमा करें',
    'common.cancel': 'रद्द करें',
    'common.delete': 'हटाएं',
    'common.edit': 'संपादित करें',
    'common.search': 'खोजें',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
