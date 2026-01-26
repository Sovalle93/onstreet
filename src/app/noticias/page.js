'use client';
import { useState } from 'react';
import NewsGrid from '../components/news/NewsGrid';
import LatestNewsSidebar from '../components/news/LatestNewsSidebar';
import NewsCarousel from '../components/news/NewsCarousel';
import { mainNews, latestNews, relatedPosts } from '../data/news';

export default function NoticiasPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Limit carousel to 3 items
  const limitedRelatedPosts = relatedPosts.slice(0, 3);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Hero Banner */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Noticias y Actualidad
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mantente informado sobre nuestras últimas novedades, proyectos y logros.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content - 3 columns with pagination */}
          <div className="lg:col-span-3">
            <NewsGrid 
              newsItems={mainNews} 
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
            />
          </div>
          
          {/* Sidebar - Latest News (max 5) */}
          <div className="lg:col-span-1">
            <LatestNewsSidebar latestNews={latestNews} />
          </div>
        </div>

        {/* Related Posts Carousel (limited to 3) */}
        <div className="mt-16">
          <NewsCarousel relatedPosts={limitedRelatedPosts} />
        </div>
      </div>
    </div>
  );
}