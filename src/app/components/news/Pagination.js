'use client';
import { useRouter, usePathname } from 'next/navigation';

const Pagination = ({ currentPage, totalPages }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handlePageChange = (page) => {
    const url = page === 1 ? pathname : `${pathname}?page=${page}`;
    router.push(url);
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, start + maxVisible - 1);
    
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }
    
    for (let i = start; i <= end; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 rounded-md ${
            currentPage === i
              ? 'bg-[#dd7347] text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {i}
        </button>
      );
    }
    
    return pages;
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-12">
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-md ${
          currentPage === 1
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        ← Anterior
      </button>
      
      {/* Page Numbers */}
      {renderPageNumbers()}
      
      {/* Next Button */}
      <button
        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-md ${
          currentPage === totalPages
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Siguiente →
      </button>
    </div>
  );
};

export default Pagination;