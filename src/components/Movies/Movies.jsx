import React, { useState, useEffect } from 'react';
import { 
  Play, Star, Heart, Bookmark, Share2, Calendar, Clock, 
  Globe, Award, Users, Film, ChevronLeft, ChevronRight,
  ThumbsUp, MessageCircle, Eye, Download, Plus
} from 'lucide-react';

const Movie = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchlisted, setIsWatchlisted] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mock movie data
  const movieData = {
    title: "Oppenheimer",
    year: 2023,
    duration: "3h 0min",
    genres: ["Biography", "Drama", "History"],
    rating: 8.8,
    imdbRating: 8.3,
    rtRating: 93,
    director: "Christopher Nolan",
    writers: ["Christopher Nolan", "Kai Bird", "Martin Sherwin"],
    stars: ["Cillian Murphy", "Emily Blunt", "Matt Damon", "Robert Downey Jr."],
    language: "English",
    country: "USA",
    budget: "$100M",
    boxOffice: "$952.8M",
    releaseDate: "July 21, 2023",
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&h=600&fit=crop",
    plot: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II. Directed by Christopher Nolan, this biographical thriller explores the complex moral and ethical implications of scientific discovery and its consequences for humanity.",
    cast: [
      {
        name: "Cillian Murphy",
        character: "J. Robert Oppenheimer",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      {
        name: "Emily Blunt",
        character: "Katherine Oppenheimer",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b8e5?w=150&h=150&fit=crop&crop=face"
      },
      {
        name: "Matt Damon",
        character: "Leslie Groves",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      {
        name: "Robert Downey Jr.",
        character: "Lewis Strauss",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
      },
      {
        name: "Florence Pugh",
        character: "Jean Tatlock",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      {
        name: "Josh Hartnett",
        character: "Ernest Lawrence",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1489599148388-8e38a11ce1dd?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop"
    ],
    reviews: [
      {
        id: 1,
        user: "MovieCritic2023",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
        rating: 9.5,
        date: "2 days ago",
        text: "Nolan's masterpiece! Cillian Murphy delivers a powerhouse performance that will be remembered for years."
      },
      {
        id: 2,
        user: "CinemaLover",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b8e5?w=40&h=40&fit=crop&crop=face",
        rating: 8.8,
        date: "1 week ago",
        text: "Visually stunning and emotionally gripping. The cinematography and sound design are exceptional."
      }
    ]
  };

  const handleRating = (rating) => {
    setUserRating(rating);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % movieData.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + movieData.gallery.length) % movieData.gallery.length);
  };

  const renderStars = (rating, interactive = false) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 cursor-pointer transition-colors duration-200 ${
          i < (interactive ? (hoverRating || userRating) : Math.floor(rating / 2))
            ? 'text-yellow-400 fill-current'
            : 'text-gray-600'
        }`}
        onMouseEnter={interactive ? () => setHoverRating(i + 1) : undefined}
        onMouseLeave={interactive ? () => setHoverRating(0) : undefined}
        onClick={interactive ? () => handleRating(i + 1) : undefined}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Hero Section with Backdrop */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={movieData.backdrop}
            alt={movieData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-transparent to-gray-900/40" />
        </div>

        <div className={`relative z-10 flex items-center h-full transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Movie Poster */}
            <div className="lg:col-span-4">
              <div className="relative group">
                <img
                  src={movieData.poster}
                  alt={movieData.title}
                  className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full p-6 transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-2xl">
                    <Play className="w-8 h-8 ml-1" fill="currentColor" />
                  </button>
                </div>
              </div>
            </div>

            {/* Movie Details */}
            <div className="lg:col-span-8 text-white">
              <h1 className="text-5xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                {movieData.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 mb-6 text-lg">
                <span className="bg-purple-500/20 px-3 py-1 rounded-full border border-purple-500/30">
                  {movieData.year}
                </span>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  {movieData.duration}
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  {movieData.language}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {movieData.genres.map((genre) => (
                  <span
                    key={genre}
                    className="bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-purple-500/20"
                  >
                    {genre}
                  </span>
                ))}
              </div>

              {/* Ratings */}
              <div className="flex items-center gap-8 mb-6">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Star className="w-6 h-6 text-yellow-400 fill-current mr-2" />
                    <span className="text-3xl font-bold">{movieData.rating}</span>
                    <span className="text-gray-400 ml-1">/10</span>
                  </div>
                  <p className="text-sm text-gray-400">CineVault</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-2">
                    {movieData.imdbRating}
                  </div>
                  <p className="text-sm text-gray-400">IMDb</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400 mb-2">
                    {movieData.rtRating}%
                  </div>
                  <p className="text-sm text-gray-400">Rotten Tomatoes</p>
                </div>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl">
                {movieData.plot}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <Play className="w-6 h-6 mr-2" fill="currentColor" />
                  Watch Trailer
                </button>
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`px-6 py-4 rounded-full font-medium flex items-center transition-all duration-300 ${
                    isFavorite
                      ? 'bg-red-500 hover:bg-red-600 text-white'
                      : 'bg-gray-800/50 hover:bg-gray-700/50 text-white border border-gray-600'
                  }`}
                >
                  <Heart className={`w-5 h-5 mr-2 ${isFavorite ? 'fill-current' : ''}`} />
                  {isFavorite ? 'Favorited' : 'Add to Favorites'}
                </button>
                <button
                  onClick={() => setIsWatchlisted(!isWatchlisted)}
                  className={`px-6 py-4 rounded-full font-medium flex items-center transition-all duration-300 ${
                    isWatchlisted
                      ? 'bg-green-500 hover:bg-green-600 text-white'
                      : 'bg-gray-800/50 hover:bg-gray-700/50 text-white border border-gray-600'
                  }`}
                >
                  <Bookmark className={`w-5 h-5 mr-2 ${isWatchlisted ? 'fill-current' : ''}`} />
                  {isWatchlisted ? 'In Watchlist' : 'Add to Watchlist'}
                </button>
                <button className="bg-gray-800/50 hover:bg-gray-700/50 text-white px-6 py-4 rounded-full font-medium flex items-center border border-gray-600 transition-all duration-300">
                  <Share2 className="w-5 h-5 mr-2" />
                  Share
                </button>
              </div>

              {/* User Rating */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
                <h3 className="text-lg font-semibold mb-3">Rate this movie:</h3>
                <div className="flex items-center gap-2">
                  {renderStars(userRating * 2, true)}
                  <span className="text-gray-400 ml-4">
                    {userRating > 0 ? `${userRating}/5` : 'Click to rate'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-full p-2 border border-purple-500/20">
            {['overview', 'cast', 'gallery', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg transform scale-105'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Film className="w-6 h-6 mr-3 text-purple-400" />
                  Movie Details
                </h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex justify-between">
                    <span className="font-medium">Director:</span>
                    <span>{movieData.director}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Writers:</span>
                    <span>{movieData.writers.join(', ')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Release Date:</span>
                    <span>{movieData.releaseDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Budget:</span>
                    <span>{movieData.budget}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Box Office:</span>
                    <span>{movieData.boxOffice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Country:</span>
                    <span>{movieData.country}</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Award className="w-6 h-6 mr-3 text-purple-400" />
                  Awards & Recognition
                </h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 p-4 rounded-lg border border-yellow-500/30">
                    <h4 className="font-semibold text-yellow-400 mb-2">Academy Awards</h4>
                    <p className="text-gray-300">Winner - Best Actor (Cillian Murphy)</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 p-4 rounded-lg border border-purple-500/30">
                    <h4 className="font-semibold text-purple-400 mb-2">Golden Globe Awards</h4>
                    <p className="text-gray-300">Winner - Best Motion Picture - Drama</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 p-4 rounded-lg border border-green-500/30">
                    <h4 className="font-semibold text-green-400 mb-2">BAFTA Awards</h4>
                    <p className="text-gray-300">Winner - Best Director (Christopher Nolan)</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'cast' && (
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Users className="w-6 h-6 mr-3 text-purple-400" />
                Cast & Crew
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {movieData.cast.map((actor, index) => (
                  <div
                    key={index}
                    className="text-center group cursor-pointer transition-transform duration-300 hover:scale-105"
                  >
                    <div className="relative mb-4">
                      <img
                        src={actor.image}
                        alt={actor.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-purple-500/20 group-hover:border-purple-400/60 transition-colors duration-300"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <h4 className="font-semibold text-white text-sm mb-1">{actor.name}</h4>
                    <p className="text-gray-400 text-xs">{actor.character}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'gallery' && (
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Eye className="w-6 h-6 mr-3 text-purple-400" />
                Photo Gallery
              </h3>
              <div className="relative">
                <div className="relative h-96 rounded-2xl overflow-hidden mb-6">
                  <img
                    src={movieData.gallery[currentImageIndex]}
                    alt={`Gallery ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {movieData.gallery.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative h-24 rounded-lg overflow-hidden transition-all duration-300 ${
                        currentImageIndex === index
                          ? 'ring-2 ring-purple-400 scale-105'
                          : 'hover:scale-105 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <MessageCircle className="w-6 h-6 mr-3 text-purple-400" />
                User Reviews
              </h3>
              <div className="space-y-6">
                {movieData.reviews.map((review) => (
                  <div
                    key={review.id}
                    className="bg-gray-700/30 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <img
                          src={review.avatar}
                          alt={review.user}
                          className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                          <h4 className="font-semibold text-white">{review.user}</h4>
                          <div className="flex items-center">
                            {renderStars(review.rating)}
                            <span className="text-gray-400 ml-2 text-sm">{review.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{review.text}</p>
                    <div className="flex items-center gap-4 mt-4">
                      <button className="flex items-center text-gray-400 hover:text-green-400 transition-colors duration-300">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        <span>12</span>
                      </button>
                      <button className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                        Reply
                      </button>
                    </div>
                  </div>
                ))}
                <div className="text-center">
                  <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
                    Load More Reviews
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Movie;