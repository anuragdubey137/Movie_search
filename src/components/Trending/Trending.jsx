import React, { useState, useEffect } from 'react';
import { TrendingUp, Star, Calendar, Eye, Heart, Play } from 'lucide-react';

const Trending = () => {
  const [activeTab, setActiveTab] = useState('today');
  const [favorites, setFavorites] = useState(new Set());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mock trending data - in a real app, this would come from an API
  const trendingMovies = {
    today: [
      {
        id: 1,
        title: "Guardians of the Galaxy Vol. 3",
        year: 2023,
        rating: 8.2,
        views: "2.1M",
        poster: "https://images.unsplash.com/photo-1489599148388-8e38a11ce1dd?w=300&h=450&fit=crop",
        genre: "Action, Adventure",
        trending: "+15%"
      },
      {
        id: 2,
        title: "Oppenheimer",
        year: 2023,
        rating: 8.8,
        views: "1.8M",
        poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop",
        genre: "Drama, History",
        trending: "+22%"
      },
      {
        id: 3,
        title: "Spider-Man: Across the Spider-Verse",
        year: 2023,
        rating: 9.1,
        views: "3.2M",
        poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=450&fit=crop",
        genre: "Animation, Action",
        trending: "+8%"
      },
      {
        id: 4,
        title: "John Wick: Chapter 4",
        year: 2023,
        rating: 7.9,
        views: "1.5M",
        poster: "https://images.unsplash.com/photo-1509347528160-9329d33b2588?w=300&h=450&fit=crop",
        genre: "Action, Thriller",
        trending: "+12%"
      },
      {
        id: 5,
        title: "The Super Mario Bros. Movie",
        year: 2023,
        rating: 7.0,
        views: "2.8M",
        poster: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=300&h=450&fit=crop",
        genre: "Animation, Adventure",
        trending: "+18%"
      },
      {
        id: 6,
        title: "Fast X",
        year: 2023,
        rating: 5.8,
        views: "1.9M",
        poster: "https://images.unsplash.com/photo-1563207153-f403bf289096?w=300&h=450&fit=crop",
        genre: "Action, Adventure",
        trending: "+5%"
      }
    ],
    week: [
      {
        id: 7,
        title: "The Flash",
        year: 2023,
        rating: 6.9,
        views: "4.1M",
        poster: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop",
        genre: "Action, Adventure",
        trending: "+45%"
      },
      {
        id: 8,
        title: "Indiana Jones and the Dial of Destiny",
        year: 2023,
        rating: 6.7,
        views: "2.3M",
        poster: "https://images.unsplash.com/photo-1489599148388-8e38a11ce1dd?w=300&h=450&fit=crop",
        genre: "Action, Adventure",
        trending: "+28%"
      },
      {
        id: 9,
        title: "Transformers: Rise of the Beasts",
        year: 2023,
        rating: 6.0,
        views: "1.7M",
        poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop",
        genre: "Action, Sci-Fi",
        trending: "+33%"
      }
    ]
  };

  const toggleFavorite = (movieId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(movieId)) {
      newFavorites.delete(movieId);
    } else {
      newFavorites.add(movieId);
    }
    setFavorites(newFavorites);
  };

  const currentMovies = trendingMovies[activeTab] || trendingMovies.today;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Hero Section */}
      <div className={`relative pt-20 pb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="w-12 h-12 text-purple-400 mr-3" />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Trending Now
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover what's hot in cinema right now. From blockbusters to hidden gems.
            </p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex justify-center">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-full p-2 border border-purple-500/20">
            {['today', 'week'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg transform scale-105'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab === 'today' ? 'Today' : 'This Week'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Movies Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentMovies.map((movie, index) => (
            <div
              key={movie.id}
              className={`group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Trending Badge */}
              <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                {movie.trending}
              </div>

              {/* Favorite Button */}
              <button
                onClick={() => toggleFavorite(movie.id)}
                className="absolute top-4 right-4 z-10 bg-black/50 backdrop-blur-sm rounded-full p-2 transition-all duration-300 hover:bg-black/70"
              >
                <Heart
                  className={`w-5 h-5 transition-colors duration-300 ${
                    favorites.has(movie.id) ? 'text-red-500 fill-red-500' : 'text-white'
                  }`}
                />
              </button>

              {/* Movie Poster */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full p-4 transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
                    <Play className="w-6 h-6 ml-1" fill="currentColor" />
                  </button>
                </div>
              </div>

              {/* Movie Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                  {movie.title}
                </h3>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {movie.year}
                  </div>
                  <span className="text-purple-400">{movie.genre}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" />
                    <span className="text-white font-medium">{movie.rating}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Eye className="w-4 h-4 mr-1" />
                    <span>{movie.views}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-4 flex space-x-2">
                  <button className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                    Watch Now
                  </button>
                  <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Load More Button */}
      <div className="text-center pb-20">
        <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          Load More Movies
        </button>
      </div>
    </div>
  );
};

export default Trending;