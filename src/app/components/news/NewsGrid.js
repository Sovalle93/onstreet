'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import NewsItem from './NewsItem';
import Pagination from './Pagination';
import { client } from '../../lib/Sanity';

const NewsGrid = ({ initialNews = [], itemsPerPage = 8 }) => {
  const [news, setNews] = useState(initialNews);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  
  // Get current page from URL, default to 1
  const currentPage = parseInt(searchParams.get('page')) || 1;
  
  // Debug: Log the current page
  console.log('Current page from URL:', currentPage);
  console.log('Search params:', searchParams.toString());

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
        console.log('Total news fetched:', data.length);
        setNews(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    }
    
    if (initialNews.length === 0) {
      fetchNews();
    } else {
      console.log('Using initial news:', initialNews.length);
    }
  }, []);

  // Pagination calculation
  const totalPages = Math.ceil(news.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = news.slice(startIndex, startIndex + itemsPerPage);
  
  // Debug pagination
  console.log('Pagination:', {
    totalNews: news.length,
    itemsPerPage,
    totalPages,
    currentPage,
    startIndex,
    currentItemsCount: currentItems.length
  });

  return (
    <div className="w-full">
      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#fb5103]"></div>
          <p className="mt-4 text-gray-600">Cargando noticias...</p>
        </div>
      ) : (
        <>
          {currentItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No hay noticias disponibles</p>
            </div>
          ) : (
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
          )}
          
          {totalPages > 1 && (
            <div className="flex justify-center w-full mt-12">
              <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default NewsGrid;