import { useState } from 'react';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!email) return;
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  const handleKeyPress = (e: { key: string; }) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <section className="py-24 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#EA4FB6]/10 dark:bg-[#EA4FB6]/20 mb-6">
          <Mail className="w-8 h-8 text-[#EA4FB6]" />
        </div>

        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Stay in the loop
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto">
          Subscribe to get updates on new features, exclusive offers, and financial tips.
        </p>

        {/* Form */}
        {!isSubmitted ? (
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter your email"
                className="flex-1 px-5 py-3.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EA4FB6] focus:border-transparent transition-all"
              />
              <button
                onClick={handleSubmit}
                className="px-6 py-3.5 bg-[#EA4FB6] hover:bg-[#d94aa3] text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        ) : (
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-center gap-3 text-green-600 dark:text-green-500">
              <CheckCircle className="w-6 h-6" />
              <p className="text-lg font-medium">
                Thanks for subscribing!
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}