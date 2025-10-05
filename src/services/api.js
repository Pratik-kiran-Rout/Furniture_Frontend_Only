// Frontend-only API service using localStorage
import { products, collections, rooms, journalPosts, testimonials, storeLocation } from '../data/mockData';

// Helper to get session ID
const getSessionId = () => {
  let sessionId = localStorage.getItem('session_id');
  if (!sessionId) {
    sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('session_id', sessionId);
  }
  return sessionId;
};

// Products
export const getProducts = async (filters = {}) => {
  let filtered = [...products];
  if (filters.collection) filtered = filtered.filter(p => p.collection === filters.collection);
  if (filters.room) filtered = filtered.filter(p => p.room === filters.room);
  if (filters.style) filtered = filtered.filter(p => p.style === filters.style);
  if (filters.featured !== undefined) filtered = filtered.filter(p => p.featured === filters.featured);
  return filtered;
};

export const getProduct = async (id) => {
  const product = products.find(p => p.id === id);
  if (!product) throw new Error('Product not found');
  return product;
};

// Collections
export const getCollections = async () => {
  return collections;
};

export const getCollection = async (id) => {
  const collection = collections.find(c => c.id === id);
  if (!collection) throw new Error('Collection not found');
  return collection;
};

// Static Content
export const getRooms = async () => {
  return rooms;
};

export const getJournal = async () => {
  return journalPosts;
};

export const getTestimonials = async () => {
  return testimonials;
};

export const getStoreLocation = async () => {
  return storeLocation;
};

// Forms - Save to localStorage
export const submitQuoteRequest = async (data) => {
  const quotes = JSON.parse(localStorage.getItem('quote_requests') || '[]');
  const newQuote = { ...data, id: Date.now(), created_at: new Date().toISOString() };
  quotes.push(newQuote);
  localStorage.setItem('quote_requests', JSON.stringify(quotes));
  return { message: 'Quote request submitted successfully! We will contact you soon.' };
};

export const submitConsultationRequest = async (data) => {
  const consultations = JSON.parse(localStorage.getItem('consultation_requests') || '[]');
  const newConsultation = { ...data, id: Date.now(), created_at: new Date().toISOString() };
  consultations.push(newConsultation);
  localStorage.setItem('consultation_requests', JSON.stringify(consultations));
  return { message: 'Consultation request submitted successfully! We will contact you soon.' };
};

export const submitContactMessage = async (data) => {
  const messages = JSON.parse(localStorage.getItem('contact_messages') || '[]');
  const newMessage = { ...data, id: Date.now(), created_at: new Date().toISOString() };
  messages.push(newMessage);
  localStorage.setItem('contact_messages', JSON.stringify(messages));
  return { message: 'Message sent successfully! We will get back to you soon.' };
};

// Wishlist - localStorage
export const addToWishlist = async (productId) => {
  const sessionId = getSessionId();
  const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
  if (wishlist.includes(productId)) {
    throw { response: { status: 400 } };
  }
  wishlist.push(productId);
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  return { message: 'Added to wishlist' };
};

export const getWishlist = async () => {
  return JSON.parse(localStorage.getItem('wishlist') || '[]');
};

export const removeFromWishlist = async (productId) => {
  const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
  const filtered = wishlist.filter(id => id !== productId);
  localStorage.setItem('wishlist', JSON.stringify(filtered));
  return { message: 'Removed from wishlist' };
};

// Reviews - localStorage
export const submitReview = async (data) => {
  const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
  const newReview = { 
    ...data, 
    id: Date.now(), 
    created_at: new Date().toISOString() 
  };
  reviews.push(newReview);
  localStorage.setItem('reviews', JSON.stringify(reviews));
  return { id: newReview.id, message: 'Review submitted successfully' };
};

export const getProductReviews = async (productId) => {
  const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
  return reviews.filter(r => r.product_id === productId).sort((a, b) => 
    new Date(b.created_at) - new Date(a.created_at)
  );
};

export const getReviewStats = async (productId) => {
  const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
  const productReviews = reviews.filter(r => r.product_id === productId);
  const total = productReviews.length;
  const avg = total > 0 ? productReviews.reduce((sum, r) => sum + r.rating, 0) / total : 0;
  return {
    total_reviews: total,
    average_rating: Math.round(avg * 10) / 10
  };
};

export default {
  getProducts,
  getProduct,
  getCollections,
  getCollection,
  getRooms,
  getJournal,
  getTestimonials,
  getStoreLocation,
  submitQuoteRequest,
  submitConsultationRequest,
  submitContactMessage,
  addToWishlist,
  getWishlist,
  removeFromWishlist,
  submitReview,
  getProductReviews,
  getReviewStats
};
