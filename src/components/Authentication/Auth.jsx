import React, { useState, useEffect } from 'react';
import { Film, User, Mail, Lock, Eye, EyeOff, Star, Sparkles, ChevronLeft, CheckCircle, AlertCircle } from 'lucide-react';

export const SignupPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert('Account created successfully! Welcome to CineVault!');
    }, 2000);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const benefits = [
    { icon: <Star className="w-5 h-5" />, text: "Rate and review unlimited movies" },
    { icon: <Sparkles className="w-5 h-5" />, text: "Get personalized recommendations" },
    { icon: <Film className="w-5 h-5" />, text: "Create custom watchlists" },
    { icon: <User className="w-5 h-5" />, text: "Follow other movie enthusiasts" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className={`relative z-10 px-6 py-4 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Film className="w-8 h-8 text-purple-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              CineVault
            </span>
          </div>
          <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
            <ChevronLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
        </div>
      </nav>

      <div className="relative z-10 px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Benefits */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="mb-8">
                <Sparkles className="w-12 h-12 text-yellow-400 mb-4 animate-bounce" />
                <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
                  Join the
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Cinema Community
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Connect with millions of movie lovers and unlock exclusive features to enhance your cinematic journey.
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className={`flex items-center space-x-3 transition-all duration-500 delay-${500 + index * 100} ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-5 opacity-0'}`}
                  >
                    <div className="text-purple-400">
                      {benefit.icon}
                    </div>
                    <span className="text-gray-300">{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">5M+</div>
                  <div className="text-xs text-gray-400">Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">100K+</div>
                  <div className="text-xs text-gray-400">Movies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">50M+</div>
                  <div className="text-xs text-gray-400">Reviews</div>
                </div>
              </div>
            </div>

            {/* Right Side - Signup Form */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                
                {/* Form Container */}
                <div className="relative bg-black/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                      Create Your Account
                    </h2>
                    <p className="text-gray-400">Start your cinematic adventure today</p>
                  </div>

                  <div className="space-y-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                          className={`w-full bg-white/10 border ${errors.fullName ? 'border-red-500' : 'border-white/20'} rounded-xl px-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors backdrop-blur-sm`}
                          placeholder="Enter your full name"
                        />
                        {errors.fullName && (
                          <div className="flex items-center mt-1 text-red-400 text-sm">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.fullName}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className={`w-full bg-white/10 border ${errors.email ? 'border-red-500' : 'border-white/20'} rounded-xl px-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors backdrop-blur-sm`}
                          placeholder="Enter your email"
                        />
                        {errors.email && (
                          <div className="flex items-center mt-1 text-red-400 text-sm">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.email}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Password */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type={showPassword ? "text" : "password"}
                          value={formData.password}
                          onChange={(e) => handleInputChange('password', e.target.value)}
                          className={`w-full bg-white/10 border ${errors.password ? 'border-red-500' : 'border-white/20'} rounded-xl px-12 py-3 pr-12 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors backdrop-blur-sm`}
                          placeholder="Create a password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                        {errors.password && (
                          <div className="flex items-center mt-1 text-red-400 text-sm">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.password}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Confirm Password */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Confirm Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          value={formData.confirmPassword}
                          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                          className={`w-full bg-white/10 border ${errors.confirmPassword ? 'border-red-500' : 'border-white/20'} rounded-xl px-12 py-3 pr-12 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors backdrop-blur-sm`}
                          placeholder="Confirm your password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                        >
                          {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                        {errors.confirmPassword && (
                          <div className="flex items-center mt-1 text-red-400 text-sm">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.confirmPassword}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Terms */}
                    <div className="flex items-center space-x-3">
                      <input type="checkbox" id="terms" className="w-4 h-4 text-purple-500 bg-transparent border-white/20 rounded focus:ring-purple-500" />
                      <label htmlFor="terms" className="text-sm text-gray-300">
                        I agree to the <span className="text-purple-400 hover:underline cursor-pointer">Terms of Service</span> and <span className="text-purple-400 hover:underline cursor-pointer">Privacy Policy</span>
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Creating Account...
                        </div>
                      ) : (
                        <>
                          Create Account
                          <Sparkles className="w-5 h-5 inline ml-2" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Divider */}
                  <div className="flex items-center my-6">
                    <div className="flex-1 h-px bg-white/20"></div>
                    <span className="px-4 text-gray-400 text-sm">or</span>
                    <div className="flex-1 h-px bg-white/20"></div>
                  </div>

                  {/* Social Login */}
                  <div className="space-y-3">
                    <button className="w-full bg-white/10 border border-white/20 py-3 rounded-xl hover:bg-white/20 transition-colors backdrop-blur-sm">
                      Continue with Google
                    </button>
                    <button className="w-full bg-white/10 border border-white/20 py-3 rounded-xl hover:bg-white/20 transition-colors backdrop-blur-sm">
                      Continue with Apple
                    </button>
                  </div>

                  {/* Login Link */}
                  <div className="text-center mt-6">
                    <p className="text-gray-400">
                      Already have an account? 
                      <span className="text-purple-400 hover:underline cursor-pointer ml-1">Sign in</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};