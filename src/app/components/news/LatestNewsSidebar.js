import Link from 'next/link';

const LatestNewsSidebar = ({ latestNews }) => {
  // Sort by date and limit to 5
  const sortedNews = [...latestNews]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b border-gray-200">
        Últimas Noticias
      </h3>
      
      <div className="space-y-6">
        {sortedNews.map((news) => (
          <div key={news.id} className="pb-4 border-b border-gray-100 last:border-0">
            <span className="text-sm text-gray-500 block mb-1">{news.date}</span>
            <Link href={`/noticias/${news.id}`}>
              <h4 className="font-medium text-gray-800 hover:text-[#dd7347] cursor-pointer line-clamp-2">
                {news.title}
              </h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNewsSidebar;