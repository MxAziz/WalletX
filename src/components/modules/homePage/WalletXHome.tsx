import { Zap, Shield, Smartphone, TrendingUp, ArrowRight, Check } from 'lucide-react';

const WalletXHome = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-20">
        {/* Component 1: Features Grid */}
        <section className="pt-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose WalletX?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Experience the future of digital payments</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: 'Lightning Fast', desc: 'Instant transactions in seconds', color: 'from-yellow-400 to-orange-500' },
              { icon: Shield, title: 'Bank-Level Security', desc: 'Your money is always protected', color: 'from-green-400 to-emerald-500' },
              { icon: Smartphone, title: 'Easy to Use', desc: 'Intuitive interface for everyone', color: 'from-blue-400 to-cyan-500' },
              { icon: TrendingUp, title: 'Smart Analytics', desc: 'Track your spending habits', color: 'from-purple-400 to-pink-500' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition-all duration-300 group">
                <div className={`bg-gradient-to-br ${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Component 2: Stats Section with Gradient */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            {[
              { value: '10M+', label: 'Active Users' },
              { value: '$50B+', label: 'Transactions' },
              { value: '150+', label: 'Countries' }
            ].map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-5xl font-bold">{stat.value}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Component 3: Services Showcase */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">All Your Payments in One Place</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Send, receive, and manage money effortlessly</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Send Money',
                desc: 'Transfer funds to anyone, anywhere instantly',
                features: ['Zero fees', 'Instant transfer', '24/7 support'],
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Pay Bills',
                desc: 'Never miss a payment with auto-pay',
                features: ['All billers', 'Reminders', 'Cashback rewards'],
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Mobile Recharge',
                desc: 'Recharge your phone in just one tap',
                features: ['All operators', 'Best offers', 'Instant recharge'],
                gradient: 'from-green-500 to-emerald-500'
              },
              {
                title: 'Investment',
                desc: 'Grow your wealth with smart investments',
                features: ['Low risk', 'High returns', 'Expert advice'],
                gradient: 'from-orange-500 to-red-500'
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group">
                <div className={`inline-block bg-gradient-to-r ${service.gradient} px-3 py-1 rounded-full text-white text-sm font-semibold mb-4`}>
                  Popular
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{service.desc}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                      <span className="text-gray-600 dark:text-gray-400">{feat}</span>
                    </li>
                  ))}
                </ul>
                <button className={`bg-gradient-to-r ${service.gradient} text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 group-hover:gap-3`}>
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Component 4: CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjQwIiBjeT0iNDAiIHI9IjMiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">Join millions of users managing their finances with WalletX</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg">
                Download App
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Component 5: Testimonials */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Trusted by millions worldwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Small Business Owner',
                text: 'WalletX has transformed how I manage my business payments. Super easy and reliable!',
                avatar: 'SJ'
              },
              {
                name: 'Michael Chen',
                role: 'Freelancer',
                text: 'Getting paid internationally has never been easier. Love the low fees and fast transfers.',
                avatar: 'MC'
              },
              {
                name: 'Priya Sharma',
                role: 'Student',
                text: 'Perfect for splitting bills with roommates and tracking my expenses. Highly recommend!',
                avatar: 'PS'
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  </div>
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

// import { useState } from 'react';
// import { Zap, Shield, Smartphone, TrendingUp, ArrowRight, Check, Menu, X, Sparkles, Globe } from 'lucide-react';

// const WalletXHome = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
//       {/* Navbar */}
//       <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
//         <div className="max-w-7xl mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-2">
//               <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
//                 <Sparkles className="w-6 h-6 text-white" />
//               </div>
//               <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">WalletX</span>
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden md:flex items-center gap-8">
//               <a href="#features" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Features</a>
//               <a href="#services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Services</a>
//               <a href="#testimonials" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Testimonials</a>
//               <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl font-semibold hover:opacity-90 transition-opacity">
//                 Get Started
//               </button>
//             </div>

//             {/* Mobile Menu Button */}
//             <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
//               {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           {menuOpen && (
//             <div className="md:hidden mt-4 pb-4 space-y-4">
//               <a href="#features" className="block hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Features</a>
//               <a href="#services" className="block hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Services</a>
//               <a href="#testimonials" className="block hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Testimonials</a>
//               <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl font-semibold">
//                 Get Started
//               </button>
//             </div>
//           )}
//         </div>
//       </nav>

//       <div className="max-w-7xl mx-auto px-4 py-12 space-y-20">
//         {/* Hero Section with Animation */}
//         <section className="text-center pt-20 pb-12 relative">
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 dark:from-blue-500/5 dark:to-purple-600/5 blur-3xl"></div>
//           <div className="relative z-10">
//             <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-6">
//               <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
//               <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Trusted by 10M+ users worldwide</span>
//             </div>
//             <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
//               Your Money,<br />Simplified
//             </h1>
//             <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
//               Experience the future of digital payments with instant transfers, smart analytics, and bank-level security
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg">
//                 Download Now
//               </button>
//               <button className="border-2 border-gray-300 dark:border-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
//                 Watch Demo
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* Component 1: Features Grid */}
//         <section id="features" className="pt-8">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold mb-4">Why Choose WalletX?</h2>
//             <p className="text-lg text-gray-600 dark:text-gray-400">Experience the future of digital payments</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               { icon: Zap, title: 'Lightning Fast', desc: 'Instant transactions in seconds', color: 'from-yellow-400 to-orange-500' },
//               { icon: Shield, title: 'Bank-Level Security', desc: 'Your money is always protected', color: 'from-green-400 to-emerald-500' },
//               { icon: Smartphone, title: 'Easy to Use', desc: 'Intuitive interface for everyone', color: 'from-blue-400 to-cyan-500' },
//               { icon: TrendingUp, title: 'Smart Analytics', desc: 'Track your spending habits', color: 'from-purple-400 to-pink-500' }
//             ].map((feature, idx) => (
//               <div key={idx} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition-all duration-300 group">
//                 <div className={`bg-gradient-to-br ${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform`}>
//                   <feature.icon className="w-7 h-7 text-white" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//                 <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Component 2: Stats Section with Gradient */}
//         <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 shadow-xl relative overflow-hidden">
//           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
//           <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
//             {[
//               { value: '10M+', label: 'Active Users' },
//               { value: '$50B+', label: 'Transactions' },
//               { value: '150+', label: 'Countries' }
//             ].map((stat, idx) => (
//               <div key={idx} className="space-y-2">
//                 <div className="text-5xl font-bold">{stat.value}</div>
//                 <div className="text-lg opacity-90">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Component 3: Services Showcase */}
//         <section id="services">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold mb-4">All Your Payments in One Place</h2>
//             <p className="text-lg text-gray-600 dark:text-gray-400">Send, receive, and manage money effortlessly</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {[
//               {
//                 title: 'Send Money',
//                 desc: 'Transfer funds to anyone, anywhere instantly',
//                 features: ['Zero fees', 'Instant transfer', '24/7 support'],
//                 gradient: 'from-blue-500 to-cyan-500'
//               },
//               {
//                 title: 'Pay Bills',
//                 desc: 'Never miss a payment with auto-pay',
//                 features: ['All billers', 'Reminders', 'Cashback rewards'],
//                 gradient: 'from-purple-500 to-pink-500'
//               },
//               {
//                 title: 'Mobile Recharge',
//                 desc: 'Recharge your phone in just one tap',
//                 features: ['All operators', 'Best offers', 'Instant recharge'],
//                 gradient: 'from-green-500 to-emerald-500'
//               },
//               {
//                 title: 'Investment',
//                 desc: 'Grow your wealth with smart investments',
//                 features: ['Low risk', 'High returns', 'Expert advice'],
//                 gradient: 'from-orange-500 to-red-500'
//               }
//             ].map((service, idx) => (
//               <div key={idx} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group">
//                 <div className={`inline-block bg-gradient-to-r ${service.gradient} px-3 py-1 rounded-full text-white text-sm font-semibold mb-4`}>
//                   Popular
//                 </div>
//                 <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
//                 <p className="text-gray-600 dark:text-gray-400 mb-6">{service.desc}</p>
//                 <ul className="space-y-3 mb-6">
//                   {service.features.map((feat, i) => (
//                     <li key={i} className="flex items-center gap-2">
//                       <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
//                       <span className="text-gray-600 dark:text-gray-400">{feat}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <button className={`bg-gradient-to-r ${service.gradient} text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 group-hover:gap-3`}>
//                   Learn More <ArrowRight className="w-4 h-4" />
//                 </button>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Component 4: CTA Section */}
//         <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
//           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjQwIiBjeT0iNDAiIHI9IjMiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
//           <div className="relative z-10">
//             <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
//             <p className="text-xl mb-8 opacity-90">Join millions of users managing their finances with WalletX</p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg">
//                 Download App
//               </button>
//               <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all">
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* Component 5: Testimonials */}
//         <section id="testimonials">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
//             <p className="text-lg text-gray-600 dark:text-gray-400">Trusted by millions worldwide</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[
//               {
//                 name: 'Sarah Johnson',
//                 role: 'Small Business Owner',
//                 text: 'WalletX has transformed how I manage my business payments. Super easy and reliable!',
//                 avatar: 'SJ'
//               },
//               {
//                 name: 'Michael Chen',
//                 role: 'Freelancer',
//                 text: 'Getting paid internationally has never been easier. Love the low fees and fast transfers.',
//                 avatar: 'MC'
//               },
//               {
//                 name: 'Priya Sharma',
//                 role: 'Student',
//                 text: 'Perfect for splitting bills with roommates and tracking my expenses. Highly recommend!',
//                 avatar: 'PS'
//               }
//             ].map((testimonial, idx) => (
//               <div key={idx} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
//                 <div className="flex items-center gap-1 mb-4">
//                   {[...Array(5)].map((_, i) => (
//                     <span key={i} className="text-yellow-400 text-xl">★</span>
//                   ))}
//                 </div>
//                 <p className="text-gray-600 dark:text-gray-400 mb-6 italic">"{testimonial.text}"</p>
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
//                     {testimonial.avatar}
//                   </div>
//                   <div>
//                     <p className="font-semibold">{testimonial.name}</p>
//                     <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="border-t border-gray-200 dark:border-gray-700 pt-12 pb-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
//             <div>
//               <div className="flex items-center gap-2 mb-4">
//                 <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
//                   <Sparkles className="w-5 h-5 text-white" />
//                 </div>
//                 <span className="text-xl font-bold">WalletX</span>
//               </div>
//               <p className="text-gray-600 dark:text-gray-400 text-sm">
//                 Making digital payments simple, secure, and accessible for everyone.
//               </p>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-4">Product</h4>
//               <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
//                 <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Features</a></li>
//                 <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Pricing</a></li>
//                 <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Security</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-4">Company</h4>
//               <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
//                 <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">About Us</a></li>
//                 <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Careers</a></li>
//                 <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-4">Legal</h4>
//               <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
//                 <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</a></li>
//                 <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Terms of Service</a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="text-center text-sm text-gray-600 dark:text-gray-400 pt-8 border-t border-gray-200 dark:border-gray-700">
//             © 2025 WalletX. All rights reserved.
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default WalletXHome;