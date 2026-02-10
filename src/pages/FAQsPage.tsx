import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown } from 'lucide-react';

export default function FAQsPage() {
  const [faqs, setFaqs] = useState<any[]>([]);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const { t, language } = useLanguage();

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const { data } = await supabase
          .from('faqs')
          .select('*')
          .eq('is_active', true)
          .order('display_order', { ascending: true });
        setFaqs(data || []);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  const faqQuestion = (faq: any) => language === 'hi' ? faq.question_hi : faq.question_en;
  const faqAnswer = (faq: any) => language === 'hi' ? faq.answer_hi : faq.answer_en;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('faqs.title')}</h1>
      <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mb-12"></div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
        </div>
      ) : faqs.length === 0 ? (
        <p className="text-center text-gray-600 py-20">{t('faqs.noFaqs')}</p>
      ) : (
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => setExpanded(expanded === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-semibold text-lg text-gray-900 text-left">
                  {faqQuestion(faq)}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-amber-600 transition-transform duration-300 flex-shrink-0 ml-4 ${
                    expanded === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expanded === faq.id && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faqAnswer(faq)}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
