import { Shield, Lock, Eye, Fingerprint } from 'lucide-react';

export default function SecuritySection() {
  const features = [
    {
      icon: Shield,
      title: "Bank-Level Encryption",
      description: "Your data is protected with 256-bit encryption, the same standard used by leading financial institutions worldwide."
    },
    {
      icon: Lock,
      title: "Two-Factor Authentication",
      description: "Add an extra layer of security with 2FA. Your account stays protected even if your password is compromised."
    },
    {
      icon: Fingerprint,
      title: "Biometric Security",
      description: "Use fingerprint or face recognition for quick and secure access to your wallet on supported devices."
    },
    {
      icon: Eye,
      title: "Real-Time Monitoring",
      description: "24/7 fraud detection monitors your account for suspicious activity and alerts you instantly."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-pink-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#EA4FB6] to-[#A855F7] mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#EA4FB6] to-[#A855F7] bg-clip-text text-transparent">
            Your Security, Our Priority
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We implement industry-leading security measures to ensure your money and personal information are always protected.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-[#EA4FB6] dark:hover:border-[#EA4FB6] overflow-hidden"
            >
              {/* Gradient Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#EA4FB6]/5 to-[#A855F7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#EA4FB6] to-[#A855F7] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-[#EA4FB6] dark:group-hover:text-[#EA4FB6] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#EA4FB6]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#EA4FB6]/10 to-[#A855F7]/10 dark:from-[#EA4FB6]/20 dark:to-[#A855F7]/20 px-6 py-3 rounded-full">
            <Lock className="w-5 h-5 text-[#EA4FB6]" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Trusted by over 1 million users worldwide
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}