# Premium Furniture - Frontend Only Version

A pure frontend furniture e-commerce website with no backend dependencies. All data is stored locally using localStorage and mock data.

## Features

- ✅ Product catalog with filtering
- ✅ Product detail pages
- ✅ Wishlist (localStorage)
- ✅ Product comparison
- ✅ Quote requests (localStorage)
- ✅ Design consultation booking (localStorage)
- ✅ Contact forms (localStorage)
- ✅ Customer reviews (localStorage)
- ✅ Store locator
- ✅ Fully responsive design

## Tech Stack

- React 19.0.0
- React Router DOM 7.5.1
- Tailwind CSS 3.4.17
- Radix UI Components
- React Hook Form + Zod
- Lucide React Icons

## Quick Start

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm start
```

The app will run at: http://localhost:3000

## Project Structure

```
src/
├── components/       # UI components
│   ├── ui/          # Radix UI components
│   ├── Header.jsx
│   └── Footer.jsx
├── pages/           # Route pages
├── data/            # Mock data (products, collections, etc.)
├── services/        # Frontend services (localStorage)
└── App.js           # Main app
```

## Data Storage

All data is stored in **localStorage**:
- `wishlist` - User wishlist items
- `quote_requests` - Quote submissions
- `consultation_requests` - Consultation bookings
- `contact_messages` - Contact form submissions
- `reviews` - Product reviews

## Important Notes

- **No Backend Required** - Everything runs in the browser
- **Data Persistence** - Data saved in localStorage (cleared on browser cache clear)
- **Production Ready** - Can be deployed to any static hosting (Vercel, Netlify, GitHub Pages)

## Deployment

### Vercel (Recommended)
```bash
npm run build
vercel deploy
```

### Netlify
```bash
npm run build
# Drag & drop the 'build' folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy the 'build' folder
```

## Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Proprietary and confidential.

## Contact

**Developer:** debiprasadpanda73@gmail.com  
**Business:** Premium Furniture
