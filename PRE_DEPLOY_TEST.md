# Pre-Deployment Testing Checklist

## 🧪 Test Locally Before Deploying

Run these tests to ensure everything works:

### 1. Start Development Server

```bash
cd d:\CORDING\Furniture_Premium\Furniture_Frontend_Only
npm start
```

Visit: http://localhost:3000

---

## ✅ Feature Testing

### Homepage (/)
- [ ] Page loads without errors
- [ ] Hero section displays
- [ ] Featured collections show (3 items)
- [ ] Shop by room section (5 rooms)
- [ ] Featured products (3 items)
- [ ] Brand story section
- [ ] Journal posts (3 items)
- [ ] Testimonials (3 items)
- [ ] All images load
- [ ] All links work

### Product Listing (/collections)
- [ ] All 12 products display
- [ ] Filter by collection works
- [ ] Filter by room works
- [ ] Filter by style works
- [ ] Price range slider works
- [ ] Multiple filters work together
- [ ] Clear filters works
- [ ] Product cards show correct info
- [ ] Add to wishlist works
- [ ] Add to compare works

### Product Detail (/product/p1)
- [ ] Product details load
- [ ] Image gallery works (3+ images)
- [ ] Next/Previous image buttons work
- [ ] Product specifications display
- [ ] Customization options show
- [ ] Add to wishlist works
- [ ] Quote request form works
- [ ] Form validation works
- [ ] Success message appears
- [ ] Related products show
- [ ] Reviews section displays

### Wishlist (/wishlist)
- [ ] Empty state shows when no items
- [ ] Added products appear
- [ ] Product details display correctly
- [ ] Remove button works
- [ ] Data persists on page reload
- [ ] View product details link works

### Compare (/compare)
- [ ] Empty state shows when no items
- [ ] Added products appear (max 3)
- [ ] Comparison table displays
- [ ] All product info shows
- [ ] Remove button works
- [ ] View details link works

### Design Services (/design-services)
- [ ] Page content loads
- [ ] Service descriptions display
- [ ] Consultation form works
- [ ] Form validation works
- [ ] Success message appears
- [ ] Data saves to localStorage

### Store Locator (/store-locator)
- [ ] Google Maps loads
- [ ] Store marker appears
- [ ] Contact info displays:
  - Phone: +91 88478 32480
  - Email: debiprasadpanda73@gmail.com
- [ ] Phone link works (tel:)
- [ ] Email link works (mailto:)
- [ ] Get directions link works
- [ ] Opening hours display

### About (/about)
- [ ] Brand story displays
- [ ] Company values show
- [ ] Images load
- [ ] Content is readable

### Lookbook (/lookbook)
- [ ] Room scenes display
- [ ] Product hotspots work
- [ ] Scene descriptions show

---

## 🔍 localStorage Testing

Open browser console (F12) and test:

### Test Wishlist
```javascript
// Add product to wishlist (click heart icon on any product)
// Then check:
console.log(JSON.parse(localStorage.getItem('wishlist')));
// Should show: ["p1"] or similar
```

### Test Quote Request
```javascript
// Submit a quote request form
// Then check:
console.log(JSON.parse(localStorage.getItem('quote_requests')));
// Should show array with your submission
```

### Test Reviews
```javascript
// Submit a product review
// Then check:
console.log(JSON.parse(localStorage.getItem('reviews')));
// Should show array with your review
```

### Clear All Data
```javascript
// To reset and test again:
localStorage.clear();
location.reload();
```

---

## 📱 Mobile Testing

### Test on Mobile Device or Browser DevTools

1. Open DevTools (F12)
2. Click device toolbar icon
3. Select mobile device (iPhone, Android)
4. Test all features:
   - [ ] Navigation menu works
   - [ ] All pages load
   - [ ] Forms work
   - [ ] Buttons are clickable
   - [ ] Images display correctly
   - [ ] Text is readable

---

## 🌐 Browser Testing

Test in multiple browsers:

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (if available)
- [ ] Edge (latest)

---

## 🔧 Console Errors Check

1. Open browser console (F12)
2. Navigate through all pages
3. Check for:
   - [ ] No red errors
   - [ ] No 404 errors
   - [ ] No JavaScript errors
   - [ ] No missing images

---

## 📊 Build Test

Before deploying, test the production build:

```bash
# Build the project
npm run build

# Serve the build locally (install serve if needed)
npx serve -s build

# Visit: http://localhost:3000
# Test all features again
```

---

## ✅ Final Checks

### Contact Information
- [ ] Phone: +91 88478 32480
- [ ] Email: debiprasadpanda73@gmail.com
- [ ] Address displays correctly

### Brand Name
- [ ] Header shows "Premium Furniture"
- [ ] Footer shows "Premium Furniture"
- [ ] Page title shows "Premium Furniture"
- [ ] All references updated

### Data
- [ ] 12 products available
- [ ] 4 collections available
- [ ] 5 rooms available
- [ ] All product images load
- [ ] All prices display correctly

---

## 🚀 Ready to Deploy?

If all tests pass:

✅ **YES** - Proceed to deployment
❌ **NO** - Fix issues and retest

---

## 📝 Test Results

Date: _______________

Tester: _______________

**Overall Status:**
- [ ] All tests passed
- [ ] Ready for deployment

**Issues Found:**
1. _______________
2. _______________
3. _______________

**Notes:**
_______________________________________________
_______________________________________________
_______________________________________________

---

## 🎯 Next Steps

After all tests pass:

1. Read `NETLIFY_DEPLOY.md`
2. Choose deployment method
3. Deploy to Netlify
4. Test live site
5. Share URL!

---

**Good luck with your deployment!** 🚀
