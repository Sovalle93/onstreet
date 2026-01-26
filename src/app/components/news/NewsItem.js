import Link from 'next/link';

const NewsItem = ({ id, title, date, description, source, imageUrl, category }) => {
  return (
    <Link href={`/noticias/${id}`} className="block">
      <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer">
        {/* Image */}
        <div className="relative h-48 w-full">
          <img 
            src={imageUrl || '/placeholder-news.jpg'} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="p-6">
          {/* Category & Date */}
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-medium text-[#dd7347] uppercase">
              {category}
            </span>
            <span className="text-sm text-gray-500">
              {date}
            </span>
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 mb-4 line-clamp-3">
            {description}
          </p>
          
          {/* Source Link */}
          <div 
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
            onClick={(e) => e.stopPropagation()} // Prevent link conflict
          >
            Ver fuente original
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsItem;