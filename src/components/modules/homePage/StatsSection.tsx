import { useState, useEffect, useRef } from 'react';
import { Users, CreditCard, Globe, TrendingUp, Zap, Award } from 'lucide-react';

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      icon: Users,
      value: 5000000,
      suffix: '+',
      label: 'Active Users',
      color: 'from-[#EA4FB6] to-[#F472B6]'
    },
    {
      icon: CreditCard,
      value: 50000000,
      suffix: '+',
      label: 'Transactions',
      color: 'from-[#A855F7] to-[#C084FC]'
    },
    {
      icon: Globe,
      value: 150,
      suffix: '+',
      label: 'Countries',
      color: 'from-[#EA4FB6] to-[#A855F7]'
    },
    {
      icon: TrendingUp,
      value: 99.9,
      suffix: '%',
      label: 'Uptime',
      color: 'from-[#F472B6] to-[#EA4FB6]'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Transactions complete in under 3 seconds'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized as Best Digital Wallet 2024'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const AnimatedCounter = ({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);

        setCount(Math.floor(end * percentage));

        if (percentage < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }, [end, duration]);

    return (
      <span>
        {count.toLocaleString()}
        {suffix}
      </span>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#EA4FB6] rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#A855F7] rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-[#EA4FB6] to-[#A855F7] bg-clip-text text-transparent">
              Millions Worldwide
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join the fastest-growing digital wallet community and experience seamless transactions every day.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-transparent relative overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Gradient Border on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#EA4FB6] to-[#A855F7] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="absolute inset-[2px] bg-white dark:bg-gray-800 rounded-2xl" />

              {/* Content */}
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className={`text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Features Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-r from-[#EA4FB6]/10 to-[#A855F7]/10 dark:from-[#EA4FB6]/20 dark:to-[#A855F7]/20 rounded-2xl p-8 border border-[#EA4FB6]/20 dark:border-[#EA4FB6]/30 hover:border-[#EA4FB6] dark:hover:border-[#EA4FB6] transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-[#EA4FB6] to-[#A855F7] flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}