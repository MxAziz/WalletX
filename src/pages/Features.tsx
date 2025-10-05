import { useState } from 'react';
import {
  Zap, Shield, Smartphone, Cloud, BarChart3, Lock,
  Palette, Globe, Code, Cpu, Users, MessageSquare,
  TrendingUp, Layers, Box, Workflow, Sparkles, ChevronRight,
  Check, Star, Rocket, Target, Brain, Heart
} from 'lucide-react';

export default function Features() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('all');

  const mainFeatures = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Lightning Fast',
      description: 'Experience blazing-fast performance with our optimized infrastructure and CDN.',
      gradient: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      stats: '10x faster'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Military-Grade Security',
      description: 'Your data is protected with enterprise-level encryption and security protocols.',
      gradient: 'from-blue-400 to-indigo-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      stats: '256-bit SSL'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI-Powered',
      description: 'Leverage artificial intelligence to automate workflows and make smarter decisions.',
      gradient: 'from-purple-400 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      stats: 'ML Models'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Native',
      description: 'Built for the cloud with automatic scaling and 99.99% uptime guarantee.',
      gradient: 'from-cyan-400 to-blue-500',
      bgColor: 'bg-cyan-50 dark:bg-cyan-900/20',
      stats: '99.99% uptime'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile First',
      description: 'Fully responsive design that works seamlessly across all devices and platforms.',
      gradient: 'from-green-400 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      stats: 'iOS & Android'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Advanced Analytics',
      description: 'Get deep insights with real-time analytics and customizable dashboards.',
      gradient: 'from-rose-400 to-red-500',
      bgColor: 'bg-rose-50 dark:bg-rose-900/20',
      stats: 'Real-time data'
    }
  ];

  const detailedFeatures = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Customizable Themes',
      category: 'design',
      description: 'Personalize your experience with multiple theme options'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Multi-Language Support',
      category: 'global',
      description: 'Available in 30+ languages worldwide'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Developer Friendly',
      category: 'technical',
      description: 'Comprehensive APIs and documentation'
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'Smart Automation',
      category: 'technical',
      description: 'Automate repetitive tasks with intelligent workflows'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Team Collaboration',
      category: 'productivity',
      description: 'Work together in real-time with your team'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Integrated Chat',
      category: 'productivity',
      description: 'Built-in messaging and video conferencing'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Growth Tools',
      category: 'business',
      description: 'Scale your business with advanced growth features'
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'Modular Architecture',
      category: 'technical',
      description: 'Add only the features you need'
    },
    {
      icon: <Box className="w-6 h-6" />,
      title: 'Component Library',
      category: 'design',
      description: 'Pre-built components for rapid development'
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: 'Process Automation',
      category: 'productivity',
      description: 'Streamline workflows with drag-and-drop builder'
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Role-Based Access',
      category: 'security',
      description: 'Control permissions with granular access control'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Goal Tracking',
      category: 'business',
      description: 'Set and monitor progress towards your objectives'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Features', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'technical', label: 'Technical', icon: <Code className="w-4 h-4" /> },
    { id: 'design', label: 'Design', icon: <Palette className="w-4 h-4" /> },
    { id: 'productivity', label: 'Productivity', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'business', label: 'Business', icon: <Target className="w-4 h-4" /> },
    { id: 'global', label: 'Global', icon: <Globe className="w-4 h-4" /> },
    { id: 'security', label: 'Security', icon: <Shield className="w-4 h-4" /> }
  ];

  const filteredFeatures = activeTab === 'all'
    ? detailedFeatures
    : detailedFeatures.filter(f => f.category === activeTab);

  const benefits = [
    'Save 10+ hours per week',
    'Increase productivity by 300%',
    'Reduce operational costs',
    'Scale without limits',
    'Enterprise-grade reliability',
    '24/7 premium support'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-800 dark:via-purple-800 dark:to-pink-900"></div>
        <div className="absolute inset-0 bg-grid-white/10"></div>

        {/* Animated Orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 dark:bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
              <Rocket className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white">Powerful Features</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Everything You Need
              <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                To Succeed
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 dark:text-blue-200 mb-8 leading-relaxed">
              Discover powerful features designed to help you work smarter, faster, and more efficiently than ever before.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {benefits.map((benefit, index) => (
                <div key={index} className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 text-white text-sm">
                  <Check className="w-4 h-4" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Features Grid */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {mainFeatures.map((feature, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
              className={`group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border-2 transition-all duration-300 cursor-pointer ${
                hoveredFeature === index
                  ? 'border-transparent scale-105 shadow-2xl'
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              {/* Gradient Overlay on Hover */}
              {hoveredFeature === index && (
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 rounded-2xl`}></div>
              )}

              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-6 transform transition-all duration-300 ${
                  hoveredFeature === index ? 'scale-110 rotate-6' : ''
                }`}>
                  {feature.icon}
                </div>

                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${feature.bgColor} bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                    {feature.stats}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {feature.description}
                </p>

                <div className="flex items-center gap-2 text-sm font-semibold">
                  <span className={`bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                    Learn more
                  </span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${hoveredFeature === index ? 'translate-x-1' : ''}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Filter Section */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800/50 dark:to-slate-800/50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-4 py-2 rounded-full mb-4">
              <Layers className="w-4 h-4" />
              <span className="text-sm font-semibold">Explore More</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              All Features at a Glance
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Filter by category to discover exactly what you need
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {category.icon}
                {category.label}
              </button>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4" />
            <span className="text-sm font-semibold">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            We're Different, Here's Why
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Others */}
          <div className="bg-gray-100 dark:bg-gray-800/50 rounded-2xl p-8 border-2 border-gray-300 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6 text-center">Others</h3>
            <div className="space-y-4">
              {['Limited features', 'Slow support response', 'Basic security', 'No AI capabilities', 'Manual processes', 'Fixed pricing'].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <div className="w-5 h-5 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Our Platform - Highlighted */}
          <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 dark:from-blue-700 dark:via-purple-700 dark:to-pink-700 rounded-2xl p-8 transform scale-110 shadow-2xl">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
              BEST VALUE
            </div>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Platform</h3>
            <div className="space-y-4">
              {['All-in-one solution', '24/7 instant support', 'Military-grade security', 'AI-powered automation', 'Intelligent workflows', 'Flexible pricing'].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-white">
                  <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Legacy Systems */}
          <div className="bg-gray-100 dark:bg-gray-800/50 rounded-2xl p-8 border-2 border-gray-300 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6 text-center">Legacy Systems</h3>
            <div className="space-y-4">
              {['Outdated technology', 'Email-only support', 'Vulnerable systems', 'No automation', 'Complex setup', 'Hidden costs'].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <div className="w-5 h-5 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-700 dark:via-purple-700 dark:to-pink-700 rounded-3xl p-12 md:p-16 overflow-hidden">
          <div className="absolute inset-0 bg-black/10 dark:bg-black/20"></div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 text-center text-white">
            <Heart className="w-16 h-16 mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-blue-100 dark:text-blue-200 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using our platform to transform their business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-blue-50 transform hover:scale-105 transition-all shadow-xl"
              >
                Start Free Trial
                <Rocket className="w-5 h-5" />
              </a>
              <a
                href="/demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/30 transform hover:scale-105 transition-all border border-white/30"
              >
                Watch Demo
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}