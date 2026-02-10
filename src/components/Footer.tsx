import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Youtube } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNavigate: (page: any) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Facebook, label: t('footer.facebook'), url: 'https://facebook.com' },
    { icon: Twitter, label: t('footer.twitter'), url: 'https://twitter.com' },
    { icon: Instagram, label: t('footer.instagram'), url: 'https://instagram.com' },
    { icon: Youtube, label: t('footer.youtube'), url: 'https://youtube.com' },
    { icon: Linkedin, label: t('footer.linkedin'), url: 'https://linkedin.com' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <p className="font-bold text-lg">SaloniOil</p>
                <p className="text-xs text-gray-400">Premium Quality</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Delivering premium quality oil products since establishment. Your trusted partner for all oil needs.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-amber-400">{t('footer.about')}</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t('header.products')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shop')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t('header.shop')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('videos')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t('header.videos')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faqs')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t('header.faqs')}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-amber-400">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-0.5 text-amber-600" />
                <span className="text-gray-400 text-sm">info@salonimail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-0.5 text-amber-600" />
                <span className="text-gray-400 text-sm">+91 1234 567 890</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 text-amber-600" />
                <span className="text-gray-400 text-sm">123 Oil Street, City, Country</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-amber-400">{t('footer.followUs')}</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 hover:bg-amber-600 rounded-lg transition-colors"
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <button
              onClick={() => onNavigate('terms')}
              className="text-gray-400 hover:text-white transition-colors text-sm text-center md:text-left"
            >
              {t('footer.terms')}
            </button>
            <button
              onClick={() => onNavigate('privacy')}
              className="text-gray-400 hover:text-white transition-colors text-sm text-center md:text-left"
            >
              {t('footer.privacy')}
            </button>
            <div className="text-gray-400 text-sm text-center md:text-right">
              © 2024 SaloniOil. {t('footer.rights')}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
