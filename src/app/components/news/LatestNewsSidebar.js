// components/news/LatestNewsSidebar.js
import Link from 'next/link';

const LatestNewsSidebar = ({ latestNews }) => {
  // Sort by date and limit to 5
  const sortedNews = [...latestNews]
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, 5);

  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b border-gray-200">
        Últimas Noticias
      </h3>

      <div className="space-y-6">
        {sortedNews.map((news) => {
          // Get slug - either from slug object or use _id as fallback
          const newsSlug = news.slug?.current || news._id;
          
          return (
            <div 
              key={news._id}
              className="pb-4 border-b border-gray-100 last:border-0"
            >
              <span className="text-sm text-gray-500 block mb-1">
                {new Date(news.publishedAt).toLocaleDateString('es-ES', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric'
                })}
              </span>
              <Link href={`/noticias/${newsSlug}`}>
                <h4 className="font-medium text-gray-800 hover:text-[#fb5103] cursor-pointer line-clamp-2">
                  {news.title}
                </h4>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LatestNewsSidebar;