import { useState } from 'react';
import { Target, Users, Award, TrendingUp, Zap, Heart, Shield, Globe, CheckCircle, Star, ArrowRight, Sparkles } from 'lucide-react';

export default function About() {
  const [activeValue, setActiveValue] = useState(0);

  const stats = [
    { number: '10K+', label: 'Happy Customers' },
    { number: '50+', label: 'Team Members' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ];

  const values = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We push boundaries and embrace cutting-edge technologies to deliver exceptional solutions.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Customer Centric',
      description: 'Your success is our success. We build lasting relationships based on trust and mutual growth.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security & Privacy',
      description: 'We prioritize the protection of your data with industry-leading security measures.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Impact',
      description: 'Making a positive difference in communities worldwide through our products and services.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const team = [
    { name: 'Sarah Johnson', role: 'CEO & Founder', image: '👩‍💼' },
    { name: 'Michael Chen', role: 'CTO', image: '👨‍💻' },
    { name: 'Emily Rodriguez', role: 'Head of Design', image: '👩‍🎨' },
    { name: 'David Kim', role: 'Lead Engineer', image: '👨‍🔧' }
  ];

  const milestones = [
    { year: '2020', title: 'Company Founded', description: 'Started with a vision to transform the industry' },
    { year: '2021', title: 'First Product Launch', description: 'Released our flagship product to market' },
    { year: '2022', title: 'Series A Funding', description: 'Raised $10M to accelerate growth' },
    { year: '2023', title: '10K Customers', description: 'Reached a major milestone in user adoption' },
    { year: '2024', title: 'Global Expansion', description: 'Opened offices in 5 new countries' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-800 dark:via-indigo-800 dark:to-purple-900 text-white">
        <div className="absolute inset-0 bg-black/10 dark:bg-black/30"></div>
        <div className="absolute inset-0 bg-grid-white/10"></div>

        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 dark:bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">About Our Company</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Building the Future,
              <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                One Innovation at a Time
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 dark:text-blue-200 mb-8 leading-relaxed">
              We're on a mission to empower businesses with technology that transforms ideas into reality.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/contact" className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transform hover:scale-105 transition-all shadow-lg">
                Get in Touch
              </a>
              <a href="#story" className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/30 transform hover:scale-105 transition-all border border-white/30">
                Our Story
              </a>
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-300/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Stats Section */}
      <div className="relative -mt-16 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 text-center transform hover:scale-105 transition-all">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Story Section */}
      <div id="story" className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full mb-4">
              <Target className="w-4 h-4" />
              <span className="text-sm font-semibold">Our Story</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Driven by Passion, Fueled by Innovation
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Founded in 2020, we started with a simple yet powerful vision: to create technology that makes a real difference in people's lives. What began as a small team of passionate innovators has grown into a global company serving thousands of customers worldwide.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Every day, we're inspired by the challenges our customers face and the opportunities we have to solve them. Our journey is just beginning, and we're excited about what the future holds.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400" />
                <span>Award-winning products</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400" />
                <span>Global presence</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400" />
                <span>Customer first</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 dark:from-blue-600 dark:via-purple-600 dark:to-pink-600 rounded-3xl transform rotate-3 hover:rotate-6 transition-transform"></div>
            <div className="absolute inset-4 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl flex items-center justify-center text-8xl">
              🚀
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800/50 dark:to-slate-800/50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-4 py-2 rounded-full mb-4">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">Our Values</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              What We Stand For
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our core values guide everything we do and shape the culture we've built.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveValue(index)}
                className={`bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 transition-all cursor-pointer ${
                  activeValue === index
                    ? 'border-transparent shadow-2xl scale-105'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 shadow-lg'
                }`}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center text-white mb-4 transform ${activeValue === index ? 'scale-110 rotate-6' : ''} transition-all`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-4 py-2 rounded-full mb-4">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-semibold">Our Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Milestones & Achievements
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 dark:from-blue-600 dark:via-purple-600 dark:to-pink-600 hidden md:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="flex-1 text-right md:text-left">
                  {index % 2 === 0 && (
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{milestone.description}</p>
                    </div>
                  )}
                </div>

                <div className="hidden md:block relative z-10">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 border-4 border-white dark:border-gray-900 shadow-lg"></div>
                </div>

                <div className="flex-1">
                  {index % 2 !== 0 && (
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{milestone.description}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800/50 dark:to-indigo-900/30 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-full mb-4">
              <Users className="w-4 h-4" />
              <span className="text-sm font-semibold">Meet The Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              The People Behind Our Success
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A diverse group of talented individuals working together to create something amazing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all transform hover:-translate-y-2">
                  <div className="text-7xl mb-4 text-center transform group-hover:scale-110 transition-transform">
                    {member.image}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 text-center font-medium mb-3">
                    {member.role}
                  </p>
                  <div className="flex justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-700 dark:via-purple-700 dark:to-pink-700 rounded-3xl p-12 md:p-16 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 dark:bg-black/20"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-blue-100 dark:text-blue-200 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us to bring their ideas to life.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transform hover:scale-105 transition-all shadow-xl"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-300/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-300/20 rounded-full blur-2xl"></div>
        </div>
      </div>
    </div>
  );
}