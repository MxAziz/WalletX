import { useState } from 'react';
import { ChevronDown, Search, HelpCircle, MessageCircle, Mail, Phone } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "How do I get started?",
      answer: "Getting started is easy! Simply sign up for an account, complete your profile, and you'll have access to all our features. Our onboarding guide will walk you through the essential steps.",
      category: "Getting Started"
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our encrypted payment gateway.",
      category: "Billing"
    },
    {
      id: 3,
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time from your account settings. Your access will continue until the end of your current billing period, and you won't be charged again.",
      category: "Billing"
    },
    {
      id: 4,
      question: "Is my data secure?",
      answer: "Absolutely! We use industry-standard encryption (256-bit SSL) to protect your data. Our servers are regularly audited and we comply with all major data protection regulations including GDPR and CCPA.",
      category: "Security"
    },
    {
      id: 5,
      question: "Do you offer customer support?",
      answer: "Yes! We offer 24/7 customer support via email and live chat. Premium users also have access to phone support and a dedicated account manager.",
      category: "Support"
    },
    {
      id: 6,
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades will take effect at the start of your next billing cycle.",
      category: "Billing"
    },
    {
      id: 7,
      question: "What features are included in the free plan?",
      answer: "Our free plan includes basic features, up to 3 projects, 1GB storage, and community support. You can upgrade anytime to unlock advanced features and higher limits.",
      category: "Getting Started"
    },
    {
      id: 8,
      question: "How do I reset my password?",
      answer: "Click on 'Forgot Password' on the login page, enter your email address, and we'll send you a password reset link. The link expires after 24 hours for security reasons.",
      category: "Account"
    },
    {
      id: 9,
      question: "Can I use this on mobile devices?",
      answer: "Yes! Our platform is fully responsive and works seamlessly on all devices. We also have dedicated mobile apps for iOS and Android available in the App Store and Google Play.",
      category: "Technical"
    },
    {
      id: 10,
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee for all new subscriptions. If you're not satisfied, contact our support team within 30 days of purchase for a full refund.",
      category: "Billing"
    }
  ];

  const categories = ['All', ...Array.from(new Set(faqs.map(faq => faq.category)))];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
            <HelpCircle className="w-10 h-10" />
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-indigo-100 dark:text-indigo-200">
            Find answers to common questions about our services
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none transition-colors shadow-sm"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeCategory === category
                  ? 'bg-indigo-600 dark:bg-indigo-700 text-white shadow-md'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map(faq => (
              <div
                key={faq.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-all hover:shadow-md"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex-1 pr-4">
                    <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-1 block">
                      {faq.category}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform flex-shrink-0 ${
                      openId === faq.id ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openId === faq.id && (
                  <div className="px-6 pb-5 text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-700 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">No results found. Try a different search term.</p>
            </div>
          )}
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-800 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4 text-center">Still have questions?</h2>
          <p className="text-center text-indigo-100 dark:text-indigo-200 mb-6">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="/contact"
              className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg px-6 py-3 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold">Live Chat</span>
            </a>
            <a
              href="mailto:support@example.com"
              className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg px-6 py-3 transition-all"
            >
              <Mail className="w-5 h-5" />
              <span className="font-semibold">Email Us</span>
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg px-6 py-3 transition-all"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">Call Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}