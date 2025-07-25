import React, { useState, useEffect } from 'react';
import { Search, Star, Play, TrendingUp, ChevronRight, Film, Sparkles } from 'lucide-react';

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const featuredMovies = [
    { title: "Dune: Part Two", rating: 8.9, genre: "Sci-Fi", year: "2024" },
    { title: "Oppenheimer", rating: 8.7, genre: "Drama", year: "2023" },
    { title: "Spider-Verse", rating: 9.1, genre: "Animation", year: "2023" },
    { title: "The Batman", rating: 8.2, genre: "Action", year: "2022" }
  ];

  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Smart Search",
      description: "Find any movie instantly with our AI-powered search engine"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Rate & Review",
      description: "Share your thoughts and discover what others think"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Trending Now",
      description: "Stay updated with the hottest movies and trends"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <div className={`relative z-10 px-6 py-20 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-4 animate-bounce" />
            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
              Discover
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Cinema Magic
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The ultimate destination for movie lovers. Search, rate, and discover your next favorite film with our community of cinema enthusiasts.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-black/50 backdrop-blur-sm rounded-full p-2 flex items-center">
              <Search className="w-6 h-6 text-gray-400 ml-4" />
              <input
                type="text"
                placeholder="Search for any movie..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 bg-transparent px-4 py-3 text-white placeholder-gray-400 focus:outline-none"
              />
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-3 rounded-full hover:scale-105 transition-transform">
                Search
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25">
              Start Exploring
              <ChevronRight className="w-5 h-5 inline ml-2" />
            </button>
            <button className="border-2 border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              <Play className="w-5 h-5 inline mr-2" />
              Watch Trailer
            </button>
          </div>
        </div>
      </div>

      {/* Featured Movies */}
      <div className={`relative z-10 px-6 py-16 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Trending Now
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredMovies.map((movie, index) => (
              <div
                key={index}
                className="group relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 hover:bg-black/60 transition-all duration-300 hover:scale-105 border border-white/10"
              >
                <div className="absolute top-4 right-4 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                  ★ {movie.rating}
                </div>
                <div className="h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl mb-4 flex items-center justify-center">
                  <Film className="w-16 h-16 text-white/50" />
                </div>
                <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
                <p className="text-gray-400 text-sm">{movie.genre} • {movie.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className={`relative z-10 px-6 py-16 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Why Choose CineVault?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`relative group p-8 rounded-2xl transition-all duration-500 hover:scale-105 ${
                  activeFeature === index
                    ? 'bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-2 border-purple-500/50'
                    : 'bg-black/30 border border-white/10 hover:bg-black/50'
                }`}
              >
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className={`relative z-10 px-6 py-16 transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group hover:scale-105 transition-transform">
              <div className="text-5xl font-black bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                100K+
              </div>
              <p className="text-gray-300 text-lg">Movies in Database</p>
            </div>
            <div className="group hover:scale-105 transition-transform">
              <div className="text-5xl font-black bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                50M+
              </div>
              <p className="text-gray-300 text-lg">User Reviews</p>
            </div>
            <div className="group hover:scale-105 transition-transform">
              <div className="text-5xl font-black bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                5M+
              </div>
              <p className="text-gray-300 text-lg">Active Users</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className={`relative z-10 px-6 py-20 transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Ready to Dive In?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join millions of movie enthusiasts and start your cinematic journey today.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-12 py-4 rounded-full text-xl font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25">
            Get Started Free
            <Sparkles className="w-6 h-6 inline ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;