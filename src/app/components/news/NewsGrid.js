import NewsItem from './NewsItem';
import Pagination from './Pagination';

const NewsGrid = ({ newsItems, currentPage = 1, itemsPerPage = 8 }) => {
  // Calculate pagination
  const totalItems = newsItems.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  // Get current page items
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = newsItems.slice(startIndex, endIndex);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentItems.map((item) => (
          <NewsItem key={item.id} {...item} />
        ))}
      </div>
      
      {/* Pagination - Only show if multiple pages */}
      {totalPages > 1 && (
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      )}
    </>
  );
};

export default NewsGrid;