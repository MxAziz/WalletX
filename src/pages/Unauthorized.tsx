import { Shield, Lock, AlertTriangle } from 'lucide-react';

export default function Unauthorized() {
  const handleLogin = () => {
    window.location.href = '/login';
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-slate-900 to-orange-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated Icon */}
        <div className="relative mb-8 flex justify-center">
          <div className="relative">
            <Shield className="w-32 h-32 text-red-500 animate-pulse" strokeWidth={1.5} />
            <Lock className="w-16 h-16 text-orange-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div className="absolute inset-0 blur-3xl opacity-20 bg-gradient-to-r from-red-500 to-orange-500"></div>
        </div>

        {/* Error Code */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-sm font-semibold backdrop-blur-sm">
            <AlertTriangle className="w-4 h-4" />
            ERROR 401
          </span>
        </div>

        {/* Message */}
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Access Denied
          </h1>
          <p className="text-lg text-gray-300 max-w-md mx-auto">
            You don't have permission to access this resource. Please authenticate or contact an administrator.
          </p>
        </div>

        {/* Decorative warning bars */}
        <div className="flex justify-center gap-2 mb-12">
          <div className="w-16 h-1 bg-red-500 rounded-full animate-pulse"></div>
          <div className="w-16 h-1 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-16 h-1 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleLogin}
            className="px-8 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-red-500/50"
          >
            Login
          </button>
          <button
            onClick={handleGoHome}
            className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-200 border border-white/20"
          >
            Go Home
          </button>
          <button
            onClick={handleGoBack}
            className="px-8 py-3 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-200 border border-white/10"
          >
            Go Back
          </button>
        </div>

        {/* Help section */}
        <div className="mt-12 p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
          <h3 className="text-white font-semibold mb-2">Need Help?</h3>
          <p className="text-sm text-gray-400">
            If you believe you should have access to this page, please contact your system administrator or try logging in with appropriate credentials.
          </p>
        </div>
      </div>
    </div>
  );
}