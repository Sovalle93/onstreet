'use client';
import { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Pagination from './Pagination';
import { client } from '../../lib/Sanity';

const NewsGrid = ({ initialNews = [], itemsPerPage = 8 }) => {
  const [news, setNews] = useState(initialNews);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Fetch news from Sanity
  useEffect(() => {
    async function fetchNews() {
      setLoading(true);
      try {
        const query = `*[_type == "news"] | order(publishedAt desc) {
          _id,
          title,
          slug,
          excerpt,
          source,
          "imageUrl": image.asset->url,
          externalImage,
          category,
          publishedAt,
          featured
        }`;
        
        const data = await client.fetch(query);
        setNews(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    }
    
    if (initialNews.length === 0) {
      fetchNews();
    }
  }, []);

  // Pagination calculation
  const totalPages = Math.ceil(news.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = news.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#dd7347]"></div>
          <p className="mt-4 text-gray-600">Cargando noticias...</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentItems.map((item) => (
              <NewsItem
                key={item._id}
                id={item._id}
                slug={item.slug}
                title={item.title}
                date={new Date(item.publishedAt).toLocaleDateString('es-ES', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric'
                })}
                description={item.excerpt}
                source={item.source}
                imageUrl={item.imageUrl || item.externalImage}
                category={item.category}
                featured={item.featured}
              />
            ))}
          </div>
          
          {totalPages > 1 && (
            <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </>
      )}
    </>
  );
};

export default NewsGrid;