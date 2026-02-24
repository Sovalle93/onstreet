import Link from 'next/link';
import Image from 'next/image';

const NewsItem = ({ 
  id, // Keep for backward compatibility
  slug, // Add this new prop
  title, 
  date, 
  description, 
  source, 
  imageUrl, 
  category,
  featured // Optional: for featured badge
}) => {
  
  // Use slug for navigation if available, otherwise fallback to id
  const newsSlug = slug?.current || slug || id;
  
  return (
    <Link href={`/noticias/${newsSlug}`} className="block">
      <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer h-full relative">
        
        {/* Featured badge */}
        {featured && (
          <div className="absolute top-3 left-3 z-10 bg-[#fb5103] text-white text-xs font-bold px-3 py-1 rounded-full">
            Destacado
          </div>
        )}
        
        {/* Image with fallback */}
        <div className="relative h-48 w-full bg-gray-100">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              📰
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-6 flex-1">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-medium text-[#fb5103] uppercase">
              {category}
            </span>
            <span className="text-sm text-gray-500">
              {date}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
            {title}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-3">
            {description}
          </p>
          
          <div className="text-sm text-gray-500 hover:text-gray-700 mt-auto flex items-center">
            Leer más 
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsItem;