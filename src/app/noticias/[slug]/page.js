// app/noticias/[slug]/page.js
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { client } from '../../lib/Sanity';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

async function getNewsBySlug(slug) {
  try {
    const query = `*[_type == "news" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      source,
      "imageUrl": image.asset->url,
      externalImage,
      category,
      publishedAt,
      body,
      featured
    }`;
    
    return await client.fetch(query, { slug });
  } catch (error) {
    console.error('Error fetching news:', error);
    return null;
  }
}

// Portable Text components for rendering body
const portableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-4 text-gray-700 text-lg leading-relaxed">{children}</p>,
    h1: ({ children }) => <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>,
    h2: ({ children }) => <h3 className="text-2xl font-bold mt-6 mb-3">{children}</h3>,
    h3: ({ children }) => <h4 className="text-xl font-bold mt-4 mb-2">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#fb5103] pl-4 italic my-4 text-gray-600">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
      <a 
        href={value.href} 
        className="text-[#fb5103] hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
  // Add list support if needed
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-5 mb-4">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-5 mb-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
    number: ({ children }) => <li className="mb-2">{children}</li>,
  },
};

export default async function NewsDetailPage({ params }) {
  const { slug } = await params;
  const news = await getNewsBySlug(slug);
  
  if (!news) {
    notFound();
  }

  const formattedDate = new Date(news.publishedAt).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  // Get image URL with fallback
  const imageUrl = news.imageUrl || news.externalImage;
  const sourceHostname = news.source ? new URL(news.source).hostname.replace('www.', '') : '';

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <Link 
          href="/noticias" 
          className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-8 group"
        >
          <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver a Noticias
        </Link>
        
        {/* News Content */}
        <article className="bg-white rounded-xl p-6 md:p-8">
          {news.featured && (
            <div className="inline-block bg-[#fb5103] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
              Destacado
            </div>
          )}
          
          <div className="mb-6 flex items-center flex-wrap gap-3">
            <span className="text-sm font-medium text-[#fb5103] uppercase">{news.category}</span>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-500">{formattedDate}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            {news.title}
          </h1>
          
          {/* Excerpt */}
          {news.excerpt && (
            <div className="bg-gray-50 p-4 rounded-lg mb-8 border-l-4 border-[#fb5103]">
              <p className="text-gray-700 text-lg italic">
                {news.excerpt}
              </p>
            </div>
          )}
          
          {/* Featured Image */}
          {imageUrl && (
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image
                src={imageUrl}
                alt={news.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                priority
              />
            </div>
          )}
          
          {/* Body Content */}
          <div className="prose prose-lg max-w-none mb-8">
            {news.body ? (
              <PortableText 
                value={news.body} 
                components={portableTextComponents} 
              />
            ) : (
              <p className="text-gray-700 text-lg leading-relaxed">
                {news.excerpt}
              </p>
            )}
          </div>
          
          {/* Source Link */}
          {news.source && (
            <div className="border-t border-gray-200 pt-6">
              <a 
                href={news.source} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-700 hover:text-[#fb5103] font-medium transition-colors group"
              >
                Leer artículo original en {sourceHostname}
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          )}
        </article>
      </div>
    </div>
  );
}