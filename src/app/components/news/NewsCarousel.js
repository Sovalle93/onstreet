'use client';
import { useState } from 'react';

const NewsCarousel = ({ relatedPosts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % relatedPosts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + relatedPosts.length) % relatedPosts.length);
  };

  return (
    <div className="relative">
      <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
        Noticias Relacionadas
      </h3>
      
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {relatedPosts.map((post, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="bg-white border border-gray-200 rounded-lg p-6 mx-4">
                <h4 className="text-lg font-bold text-gray-800 mb-2">{post.title}</h4>
                <p className="text-gray-600">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation buttons */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
        >
          ‹
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default NewsCarousel;