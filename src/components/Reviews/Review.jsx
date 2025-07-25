import React, { useState, useEffect } from 'react';
import { Star, ThumbsUp, ThumbsDown, MessageCircle, Filter, Search, User, Calendar, Award, Verified } from 'lucide-react';

const Reviews = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [likedReviews, setLikedReviews] = useState(new Set());
  const [dislikedReviews, setDislikedReviews] = useState(new Set());
  const [showWriteReview, setShowWriteReview] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mock reviews data
  const reviewsData = [
    {
      id: 1,
      movieTitle: "Oppenheimer",
      moviePoster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=150&h=225&fit=crop",
      userName: "CinemaLover92",
      userAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      rating: 9.5,
      date: "2 days ago",
      isVerified: true,
      reviewText: "Christopher Nolan has outdone himself with this biographical masterpiece. The cinematography is breathtaking, and Cillian Murphy delivers a career-defining performance. The way Nolan handles the complex narrative of Oppenheimer's life and the moral implications of the atomic bomb is both haunting and brilliant.",
      likes: 147,
      dislikes: 8,
      replies: 23,
      category: "blockbuster"
    },
    {
      id: 2,
      movieTitle: "Spider-Man: Across the Spider-Verse",
      moviePoster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=150&h=225&fit=crop",
      userName: "AnimationFan",
      userAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b8e5?w=40&h=40&fit=crop&crop=face",
      rating: 10.0,
      date: "5 days ago",
      isVerified: false,
      reviewText: "This is not just an animated movie; it's a work of art. Every frame is a masterpiece, and the multiverse concept is executed flawlessly. The emotional depth, stunning visuals, and innovative animation techniques make this a groundbreaking achievement in cinema.",
      likes: 203,
      dislikes: 5,
      replies: 45,
      category: "animation"
    },
    {
      id: 3,
      movieTitle: "John Wick: Chapter 4",
      moviePoster: "https://images.unsplash.com/photo-1509347528160-9329d33b2588?w=150&h=225&fit=crop",
      userName: "ActionHero",
      userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      rating: 8.7,
      date: "1 week ago",
      isVerified: true,
      reviewText: "Keanu Reeves proves once again why John Wick is the ultimate action franchise. The choreography is impeccable, and the world-building continues to expand in fascinating ways. While it's longer than previous entries, every minute is worth it.",
      likes: 89,
      dislikes: 12,
      replies: 18,
      category: "action"
    },
    {
      id: 4,
      movieTitle: "The Super Mario Bros. Movie",
      moviePoster: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=150&h=225&fit=crop",
      userName: "FamilyMovieTime",
      userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      rating: 7.2,
      date: "2 weeks ago",
      isVerified: false,
      reviewText: "A delightful family film that captures the spirit of the beloved video game franchise. While the plot is predictable, the animation is colorful and vibrant, and kids will absolutely love it. Chris Pratt's Mario voice takes some getting used to, but overall it's a fun adventure.",
      likes: 156,
      dislikes: 34,
      replies: 67,
      category: "family"
    },
    {
      id: 5,
      movieTitle: "Guardians of the Galaxy Vol. 3",
      moviePoster: "https://images.unsplash.com/photo-1489599148388-8e38a11ce1dd?w=150&h=225&fit=crop",
      userName: "MarvelFanatic",
      userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
      rating: 8.9,
      date: "3 weeks ago",
      isVerified: true,
      reviewText: "James Gunn delivers an emotional and satisfying conclusion to the Guardians trilogy. The character development, especially for Rocket, is phenomenal. It's both heartbreaking and uplifting, with the perfect blend of humor and drama that made us fall in love with these characters.",
      likes: 234,
      dislikes: 15,
      replies: 89,
      category: "superhero"
    }
  ];

  const handleLike = (reviewId) => {
    const newLiked = new Set(likedReviews);
    const newDisliked = new Set(dislikedReviews);
    
    if (newLiked.has(reviewId)) {
      newLiked.delete(reviewId);
    } else {
      newLiked.add(reviewId);
      newDisliked.delete(reviewId);
    }
    
    setLikedReviews(newLiked);
    setDislikedReviews(newDisliked);
  };

  const handleDislike = (reviewId) => {
    const newLiked = new Set(likedReviews);
    const newDisliked = new Set(dislikedReviews);
    
    if (newDisliked.has(reviewId)) {
      newDisliked.delete(reviewId);
    } else {
      newDisliked.add(reviewId);
      newLiked.delete(reviewId);
    }
    
    setLikedReviews(newLiked);
    setDislikedReviews(newDisliked);
  };

  const filteredReviews = reviewsData.filter(review => {
    const matchesFilter = activeFilter === 'all' || review.category === activeFilter;
    const matchesSearch = review.movieTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.reviewText.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />);
    }
    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 text-yellow-400 fill-current opacity-50" />);
    }
    for (let i = stars.length; i < 5; i++) {
      stars.push(<Star key={i} className="w-4 h-4 text-gray-600" />);
    }

    return stars;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Hero Section */}
      <div className={`relative pt-20 pb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <MessageCircle className="w-12 h-12 text-purple-400 mr-3" />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Movie Reviews
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Read authentic reviews from movie enthusiasts and share your own thoughts
            </p>
            
            {/* Write Review Button */}
            <button
              onClick={() => setShowWriteReview(!showWriteReview)}
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Write a Review
            </button>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search reviews, movies, or users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors duration-300"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400 mr-2" />
              {['all', 'blockbuster', 'action', 'animation', 'superhero', 'family'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                      : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                  }`}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Write Review Modal */}
      {showWriteReview && (
        <div className="max-w-4xl mx-auto px-6 mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-6">Write Your Review</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Movie Title"
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
              />
              <div className="flex items-center space-x-2">
                <span className="text-gray-300">Rating:</span>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-6 h-6 text-gray-600 hover:text-yellow-400 cursor-pointer transition-colors" />
                  ))}
                </div>
              </div>
            </div>
            <textarea
              placeholder="Write your review here..."
              rows="6"
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none mb-6"
            ></textarea>
            <div className="flex space-x-4">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                Publish Review
              </button>
              <button
                onClick={() => setShowWriteReview(false)}
                className="bg-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-600 transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reviews List */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="space-y-8">
          {filteredReviews.map((review, index) => (
            <div
              key={review.id}
              className={`bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Movie Poster */}
                  <div className="flex-shrink-0">
                    <img
                      src={review.moviePoster}
                      alt={review.movieTitle}
                      className="w-24 h-36 object-cover rounded-lg shadow-lg"
                    />
                  </div>

                  {/* Review Content */}
                  <div className="flex-1">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{review.movieTitle}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center">
                            <img
                              src={review.userAvatar}
                              alt={review.userName}
                              className="w-8 h-8 rounded-full mr-2"
                            />
                            <span className="text-white font-medium">{review.userName}</span>
                            {review.isVerified && (
                              <Verified className="w-4 h-4 text-blue-400 ml-1" />
                            )}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {review.date}
                          </div>
                        </div>
                      </div>
                      
                      {/* Rating */}
                      <div className="text-right">
                        <div className="flex items-center justify-end mb-1">
                          <Award className="w-5 h-5 text-yellow-400 mr-1" />
                          <span className="text-2xl font-bold text-white">{review.rating}</span>
                          <span className="text-gray-400 ml-1">/10</span>
                        </div>
                        <div className="flex justify-end">
                          {renderStars(review.rating / 2)}
                        </div>
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {review.reviewText}
                    </p>

                    {/* Actions */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <button
                          onClick={() => handleLike(review.id)}
                          className={`flex items-center space-x-2 transition-colors duration-300 ${
                            likedReviews.has(review.id) ? 'text-green-400' : 'text-gray-400 hover:text-green-400'
                          }`}
                        >
                          <ThumbsUp className="w-5 h-5" />
                          <span>{review.likes + (likedReviews.has(review.id) ? 1 : 0)}</span>
                        </button>
                        
                        <button
                          onClick={() => handleDislike(review.id)}
                          className={`flex items-center space-x-2 transition-colors duration-300 ${
                            dislikedReviews.has(review.id) ? 'text-red-400' : 'text-gray-400 hover:text-red-400'
                          }`}
                        >
                          <ThumbsDown className="w-5 h-5" />
                          <span>{review.dislikes + (dislikedReviews.has(review.id) ? 1 : 0)}</span>
                        </button>
                        
                        <button className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors duration-300">
                          <MessageCircle className="w-5 h-5" />
                          <span>{review.replies} replies</span>
                        </button>
                      </div>

                      <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                        Read Full Review
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
            Load More Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;