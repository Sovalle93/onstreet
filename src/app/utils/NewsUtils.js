// utils/newsUtils.js
import { mainNews, latestNews, relatedPosts } from '../data/news';

export const getFeaturedNews = () => {
  return mainNews.filter(news => news.featured);
};

export const getNewsByCategory = (category) => {
  return mainNews.filter(news => news.category === category);
};

export const getLatestNews = (limit = 5) => {
  return latestNews.slice(0, limit);
};

export const getNewsById = (id) => {
  return mainNews.find(news => news.id === id);
};