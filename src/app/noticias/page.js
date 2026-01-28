import NewsGrid from '../components/news/NewsGrid';
import LatestNewsSidebar from '../components/news/LatestNewsSidebar';
import NewsCarousel from '../components/news/NewsCarousel';
import { client } from '../lib/Sanity';

// Fetch initial data on server
async function getNewsData() {
  try {
    const query = `*[_type == "news"] | order(publishedAt desc)[0...12] {
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
          {/* Main Content */}
          <div className="lg:col-span-3">
            <NewsGrid initialNews={news} />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <LatestNewsSidebar latestNews={latestNews} />
          </div>
        </div>
      </div>
    </div>
  );
}