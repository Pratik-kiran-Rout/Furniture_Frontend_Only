# Premium Furniture - Frontend Only Setup Guide

## Overview

This is a **pure frontend version** of the Premium Furniture website with **NO backend dependencies**. All data is stored in the browser's localStorage.

## Features

✅ **All Original Features Working:**
- Product catalog with filtering (collection, room, style, price)
- Product detail pages with image galleries
- Wishlist functionality (localStorage)
- Product comparison (up to 3 products)
- Quote request forms (saved to localStorage)
- Design consultation booking (saved to localStorage)
- Contact forms (saved to localStorage)
- Customer reviews & ratings (saved to localStorage)
- Store locator with Google Maps
- Responsive design (mobile-first)

## Installation

### Prerequisites
- Node.js v16+ ([Download](https://nodejs.org/))

### Steps

```bash
# 1. Navigate to project folder
cd Furniture_Frontend_Only

# 2. Install dependencies (FIRST TIME ONLY)
npm install --legacy-peer-deps

# 3. Start the development server
npm start
```

The app will open at: **http://localhost:3000**

## Important Commands

### ✅ SAFE Commands
```bash
npm install --legacy-peer-deps    # Install dependencies
npm start                          # Start dev server
npm run build                      # Production build
```

### ❌ NEVER RUN
```bash
npm audit fix --force    # BREAKS installation!
npm update               # Causes version conflicts
```

**Why?** The project uses React 19 with packages expecting React 18. The `--legacy-peer-deps` flag handles this safely.

## Data Storage

All data is stored in **browser localStorage**:

| Key | Description |
|-----|-------------|
| `wishlist` | User's wishlist items |
| `quote_requests` | Quote form submissions |
| `consultation_requests` | Consultation bookings |
| `contact_messages` | Contact form messages |
| `reviews` | Product reviews |
| `session_id` | Unique session identifier |

### View Stored Data

Open browser console (F12) and run:
```javascript
// View all wishlist items
console.log(JSON.parse(localStorage.getItem('wishlist')));

// View all quote requests
console.log(JSON.parse(localStorage.getItem('quote_requests')));

// View all reviews
console.log(JSON.parse(localStorage.getItem('reviews')));

// Clear all data
localStorage.clear();
```

## Project Structure

```
Furniture_Frontend_Only/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ui/              # Radix UI components (46 files)
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Footer.jsx       # Site footer
│   │   └── ProductReviews.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ProductListingPage.jsx
│   │   ├── ProductDetailPage.jsx
│   │   ├── WishlistPage.jsx
│   │   ├── ComparePage.jsx
│   │   ├── DesignServicesPage.jsx
│   │   ├── StoreLocatorPage.jsx
│   │   ├── AboutPage.jsx
│   │   └── LookbookPage.jsx
│   ├── data/
│   │   └── mockData.js      # All products & static data
│   ├── services/
│   │   └── api.js           # Frontend API (localStorage)
│   ├── hooks/
│   │   └── use-toast.js
│   ├── lib/
│   │   └── utils.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── craco.config.js
├── tailwind.config.js
└── README.md
```

## Available Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, collections, featured products |
| `/collections` | Product Listing | Browse & filter 12 products |
| `/product/:id` | Product Detail | Full product info, reviews, quote form |
| `/wishlist` | Wishlist | Saved products |
| `/compare` | Compare | Compare up to 3 products |
| `/design-services` | Design Services | Consultation booking |
| `/store-locator` | Store Locator | Map & contact info |
| `/about` | About | Brand story |
| `/lookbook` | Lookbook | Styled room scenes |

## Testing the Website

### 1. Browse Products
- Visit homepage
- Click "Explore Collections"
- Use filters (collection, room, style, price)
- Click any product to view details

### 2. Add to Wishlist
- Click heart icon on any product
- Visit `/wishlist` to see saved items
- Remove items by clicking heart again

### 3. Request Quote
- Go to any product detail page
- Click "Request a Quote"
- Fill form and submit
- Check localStorage: `localStorage.getItem('quote_requests')`

### 4. Submit Review
- Go to any product detail page
- Scroll to reviews section
- Click "Write a Review"
- Submit review
- Check localStorage: `localStorage.getItem('reviews')`

### 5. Compare Products
- Click "Add to Compare" on products
- Visit `/compare` page
- Compare up to 3 products side-by-side

## Deployment

### Option 1: Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Build and deploy
npm run build
vercel deploy
```

### Option 2: Netlify
```bash
# Build
npm run build

# Drag & drop the 'build' folder to Netlify
```

### Option 3: GitHub Pages
```bash
# Build
npm run build

# Deploy the 'build' folder to gh-pages branch
```

## Customization

### Update Contact Information
Edit `src/data/mockData.js`:
```javascript
export const storeLocation = {
  address: 'Your Address',
  phone: 'Your Phone',
  email: 'your@email.com',
  // ...
};
```

### Add/Edit Products
Edit `src/data/mockData.js`:
```javascript
export const products = [
  {
    id: 'p13',
    name: 'New Product',
    price: 50000,
    // ... add all fields
  }
];
```

### Change Colors/Styling
Edit `src/index.css` for global styles
Edit `tailwind.config.js` for Tailwind customization

## Troubleshooting

### Issue: npm install fails
**Solution:**
```bash
del package-lock.json
rmdir /s /q node_modules
npm install --legacy-peer-deps
```

### Issue: Port 3000 already in use
**Windows:**
```bash
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**Mac/Linux:**
```bash
lsof -ti:3000 | xargs kill -9
```

### Issue: Data not persisting
- Check if localStorage is enabled in browser
- Check browser console for errors
- Try clearing cache and reloading

### Issue: Images not loading
- Check internet connection (images are from Unsplash)
- Replace with local images if needed

## Browser Compatibility

✅ Chrome (latest)  
✅ Firefox (latest)  
✅ Safari (latest)  
✅ Edge (latest)  
⚠️ IE11 (not supported)

## Performance

- **Fast Load Times** - No API calls, instant data
- **Offline Capable** - Works without internet (after first load)
- **Lightweight** - ~2MB total bundle size
- **Mobile Optimized** - Responsive design

## Limitations

⚠️ **Data Persistence:**
- Data stored in localStorage (cleared when browser cache is cleared)
- No data synchronization across devices
- No admin panel to view submissions

⚠️ **No Email Notifications:**
- Form submissions are only saved locally
- No automatic emails sent

## Advantages

✅ **No Backend Required** - Deploy anywhere  
✅ **No Database** - No setup needed  
✅ **Fast** - Instant data loading  
✅ **Free Hosting** - Deploy to Vercel/Netlify for free  
✅ **Easy Maintenance** - Just edit JSON data  

## Future Enhancements

If you need backend features later:
1. Add Firebase for real database
2. Add Netlify Functions for serverless backend
3. Add email service (EmailJS, SendGrid)
4. Add authentication (Firebase Auth, Auth0)

## Support

For issues or questions:
- Check browser console for errors
- Clear localStorage and try again
- Reinstall dependencies with `--legacy-peer-deps`

## License

Proprietary and confidential.

---

**Status:** ✅ Production Ready  
**Version:** 1.0.0  
**Last Updated:** January 2025
