// app/noticias/page.js
import { Suspense } from 'react';
import NewsGrid from '../components/news/NewsGrid';
import LatestNewsSidebar from '../components/news/LatestNewsSidebar';
import { client } from '../lib/Sanity';

// Fetch initial data on server
async function getNewsData() {
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
    
    return await client.fetch(query);
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}

async function getLatestNews() {
  try {
    const query = `*[_type == "news"] | order(publishedAt desc)[0...5] {
      _id,
      title,
      slug,
      publishedAt
    }`;
    
    return await client.fetch(query);
  } catch (error) {
    console.error('Error fetching latest news:', error);
    return [];
  }
}

export default async function NoticiasPage() {
  const [news, latestNews] = await Promise.all([
    getNewsData(),
    getLatestNews()
  ]);

  return (
    <div className="min-h-screen py-12 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Hero Banner */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Noticias y Actualidad
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mantente informado sobre nuestras últimas novedades, proyectos y logros.
          </p>
          {/* Decorative underline */}
          <div className="w-24 h-1 bg-[#fb5103] mx-auto mt-6"></div>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content - Wrapped in Suspense */}
          <div className="lg:col-span-3">
            <Suspense fallback={
              <div className="flex flex-col items-center justify-center py-16">
                <div className="w-12 h-12 border-4 border-[#fb5103] border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-gray-600 text-lg">Cargando noticias...</p>
              </div>
            }>
              <NewsGrid initialNews={news} itemsPerPage={8} />
            </Suspense>
          </div>
          
          {/* Sidebar - Static content, no suspense needed */}
          <div className="lg:col-span-1">
            <LatestNewsSidebar latestNews={latestNews} />
          </div>
        </div>

        {/* Optional: News count indicator */}
        <div className="text-center text-gray-500 text-sm mt-8">
          <p>Mostrando {news.length} noticias en total</p>
        </div>
      </div>
    </div>
  );
}