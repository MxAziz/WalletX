import { useState } from 'react';
import { Zap, Shield, Smartphone, TrendingUp, ArrowRight, Check, Moon, Sun } from 'lucide-react';

const WalletXHome = () => {
  const [isDark, setIsDark] = useState(true);

  const bgClass = isDark ? 'bg-gray-900' : 'bg-gray-50';
  const textClass = isDark ? 'text-white' : 'text-gray-900';
  const subtextClass = isDark ? 'text-gray-400' : 'text-gray-600';
  const cardBgClass = isDark ? 'bg-gray-800' : 'bg-white';
  const borderClass = isDark ? 'border-gray-700' : 'border-gray-200';
  const accentClass = isDark ? 'bg-[#86EFAC]' : 'bg-[#86EFAC]';

  return (
    <div className={`min-h-screen ${bgClass} ${textClass} transition-colors duration-300`}>
      {/* Theme Toggle Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsDark(!isDark)}
          className={`p-3 rounded-full ${cardBgClass} border ${borderClass} shadow-lg hover:scale-110 transition-transform`}
        >
          {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-20">
        {/* Component 1: Features Grid */}
        <section className="pt-8">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 ${textClass}`}>Why Choose WalletX?</h2>
            <p className={`text-lg ${subtextClass}`}>Experience the future of digital payments</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: 'Lightning Fast', desc: 'Instant transactions in seconds' },
              { icon: Shield, title: 'Bank-Level Security', desc: 'Your money is always protected' },
              { icon: Smartphone, title: 'Easy to Use', desc: 'Intuitive interface for everyone' },
              { icon: TrendingUp, title: 'Smart Analytics', desc: 'Track your spending habits' }
            ].map((feature, idx) => (
              <div key={idx} className={`${cardBgClass} border ${borderClass} rounded-2xl p-6 hover:scale-105 transition-all duration-300 shadow-lg`}>
                <div className={`${accentClass} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className="w-7 h-7 text-black" />
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${textClass}`}>{feature.title}</h3>
                <p className={subtextClass}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Component 2: Stats Section */}
        <section className={`${cardBgClass} border ${borderClass} rounded-3xl p-12 shadow-xl`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { value: '10M+', label: 'Active Users' },
              { value: '$50B+', label: 'Transactions' },
              { value: '150+', label: 'Countries' }
            ].map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div className={`text-5xl font-bold ${accentClass} bg-clip-text text-transparent`} style={{backgroundImage: 'linear-gradient(to right, #3b82f6, #8b5cf6)'}}>
                  {stat.value}
                </div>
                <div className={`text-lg ${subtextClass}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Component 3: Services Showcase */}
        <section>
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 ${textClass}`}>All Your Payments in One Place</h2>
            <p className={`text-lg ${subtextClass}`}>Send, receive, and manage money effortlessly</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Send Money',
                desc: 'Transfer funds to anyone, anywhere instantly',
                features: ['Zero fees', 'Instant transfer', '24/7 support']
              },
              {
                title: 'Pay Bills',
                desc: 'Never miss a payment with auto-pay',
                features: ['All billers', 'Reminders', 'Cashback rewards']
              },
              {
                title: 'Mobile Recharge',
                desc: 'Recharge your phone in just one tap',
                features: ['All operators', 'Best offers', 'Instant recharge']
              },
              {
                title: 'Investment',
                desc: 'Grow your wealth with smart investments',
                features: ['Low risk', 'High returns', 'Expert advice']
              }
            ].map((service, idx) => (
              <div key={idx} className={`${cardBgClass} border ${borderClass} rounded-2xl p-8 hover:shadow-2xl transition-all duration-300`}>
                <h3 className={`text-2xl font-bold mb-3 ${textClass}`}>{service.title}</h3>
                <p className={`${subtextClass} mb-6`}>{service.desc}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className={`w-5 h-5 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                      <span className={subtextClass}>{feat}</span>
                    </li>
                  ))}
                </ul>
                <button className={`${accentClass} text-black px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center gap-2`}>
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Component 4: CTA Section */}
        <section className={`${accentClass} rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">Join millions of users managing their finances with WalletX</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#86EFAC] text-black px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg">
                Download App
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#86EFAC] hover:text-black hover:border-[#86EFAC] transition-all">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Component 5: Testimonials */}
        <section>
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 ${textClass}`}>What Our Users Say</h2>
            <p className={`text-lg ${subtextClass}`}>Trusted by millions worldwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Small Business Owner',
                text: 'WalletX has transformed how I manage my business payments. Super easy and reliable!'
              },
              {
                name: 'Michael Chen',
                role: 'Freelancer',
                text: 'Getting paid internationally has never been easier. Love the low fees and fast transfers.'
              },
              {
                name: 'Priya Sharma',
                role: 'Student',
                text: 'Perfect for splitting bills with roommates and tracking my expenses. Highly recommend!'
              }
            ].map((testimonial, idx) => (
              <div key={idx} className={`${cardBgClass} border ${borderClass} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow`}>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className={`${subtextClass} mb-6 italic`}>"{testimonial.text}"</p>
                <div>
                  <p className={`font-semibold ${textClass}`}>{testimonial.name}</p>
                  <p className={`text-sm ${subtextClass}`}>{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default WalletXHome;