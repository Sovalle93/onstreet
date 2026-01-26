// app/noticias/[id]/page.js
import { notFound } from 'next/navigation';
import { getNewsById } from '../../utils/NewsUtils';
import Link from 'next/link';

export default async function NewsDetailPage({ params }) {
  // Use await to unwrap the Promise
  const { id } = await params;
  const news = getNewsById(parseInt(id));
  
  if (!news) {
    notFound();
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <Link 
          href="/noticias" 
          className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-8"
        >
          ← Volver a Noticias
        </Link>
        
        {/* News Content */}
        <article className="bg-white rounded-xl p-8">
          <img 
            src={news.imageUrl} 
            alt={news.title}
            className="w-full h-96 object-cover rounded-lg mb-8"
          />
          
          <div className="mb-6">
            <span className="text-sm font-medium text-[#dd7347] uppercase">{news.category}</span>
            <span className="text-sm text-gray-500 mx-4">•</span>
            <span className="text-sm text-gray-500">{news.date}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            {news.title}
          </h1>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {news.description}
            </p>
            
            {/* Full Article Content - Add when available */}
            <div className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-8">
              "Aquí iría el contenido completo del artículo cuando el cliente lo proporcione. 
              Por ahora mostramos solo el resumen."
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6 flex justify-between items-center">
            <span className="text-gray-600">
              Fuente original:
            </span>
            <a 
              href={news.source} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium"
            >
              {news.source.replace('https://', '').split('/')[0]}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}