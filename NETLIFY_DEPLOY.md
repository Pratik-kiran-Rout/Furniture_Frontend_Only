# Deploy to Netlify - Step by Step Guide

## ✅ Pre-Deployment Checklist

All configurations are ready:
- ✅ `netlify.toml` - Build settings
- ✅ `.npmrc` - Dependency handling
- ✅ `public/_redirects` - SPA routing
- ✅ All features tested locally
- ✅ Contact info updated
- ✅ Brand name updated

## 🚀 Deployment Methods

### Method 1: Netlify CLI (Recommended)

```bash
# 1. Install Netlify CLI globally
npm install -g netlify-cli

# 2. Navigate to project folder
cd d:\CORDING\Furniture_Premium\Furniture_Frontend_Only

# 3. Build the project
npm run build

# 4. Login to Netlify
netlify login

# 5. Deploy
netlify deploy --prod
```

### Method 2: Drag & Drop (Easiest)

```bash
# 1. Build the project
npm run build

# 2. Go to https://app.netlify.com/drop
# 3. Drag the 'build' folder to the upload area
# 4. Done!
```

### Method 3: Git Integration (Best for Updates)

```bash
# 1. Create a GitHub repository
# 2. Push your code to GitHub
# 3. Go to https://app.netlify.com
# 4. Click "New site from Git"
# 5. Connect your GitHub repo
# 6. Build settings (auto-detected from netlify.toml):
#    - Build command: npm run build
#    - Publish directory: build
# 7. Click "Deploy site"
```

## 📋 Build Settings (If Manual Setup Needed)

If Netlify doesn't auto-detect settings:

**Build command:**
```
npm run build
```

**Publish directory:**
```
build
```

**Environment variables:**
```
NODE_VERSION=16
```

## ✅ Post-Deployment Verification

After deployment, test these features:

### 1. Navigation
- [ ] All pages load correctly
- [ ] No 404 errors on page refresh
- [ ] All internal links work

### 2. Product Features
- [ ] Browse products on homepage
- [ ] Filter products (collection, room, style, price)
- [ ] View product details
- [ ] Image gallery works

### 3. Wishlist
- [ ] Add products to wishlist
- [ ] View wishlist page
- [ ] Remove from wishlist
- [ ] Data persists on page reload

### 4. Forms
- [ ] Quote request form submits
- [ ] Consultation form submits
- [ ] Contact form submits
- [ ] Form validation works
- [ ] Success messages appear

### 5. Reviews
- [ ] Submit product review
- [ ] View reviews on product page
- [ ] Rating display works

### 6. Comparison
- [ ] Add products to compare
- [ ] View comparison page
- [ ] Remove from comparison

### 7. Store Locator
- [ ] Google Maps loads
- [ ] Contact info displays
- [ ] Phone/email links work

### 8. Mobile Responsive
- [ ] Test on mobile device
- [ ] Menu works on mobile
- [ ] All features work on mobile

## 🔍 Check localStorage

Open browser console (F12) and verify:

```javascript
// Check if data is being saved
localStorage.getItem('wishlist')
localStorage.getItem('quote_requests')
localStorage.getItem('reviews')
```

## 🐛 Troubleshooting

### Issue: Build fails on Netlify

**Solution:**
1. Check build logs in Netlify dashboard
2. Ensure `.npmrc` file exists with `legacy-peer-deps=true`
3. Try building locally first: `npm run build`

### Issue: 404 on page refresh

**Solution:**
- Verify `netlify.toml` exists
- Verify `public/_redirects` exists
- Both files should handle SPA routing

### Issue: Features not working

**Solution:**
1. Open browser console (F12)
2. Check for JavaScript errors
3. Verify localStorage is enabled
4. Try incognito mode

### Issue: Images not loading

**Solution:**
- Images are from Unsplash CDN
- Check internet connection
- Verify image URLs in `src/data/mockData.js`

## 🎯 Custom Domain (Optional)

After deployment:

1. Go to Netlify dashboard
2. Click "Domain settings"
3. Click "Add custom domain"
4. Follow DNS configuration steps

## 📊 Performance Tips

### Enable Netlify Features:

1. **Asset Optimization**
   - Go to Site settings > Build & deploy > Post processing
   - Enable "Bundle CSS" and "Minify JS"

2. **HTTPS**
   - Automatically enabled by Netlify
   - Force HTTPS in domain settings

3. **Headers**
   - Add security headers in `netlify.toml` if needed

## 🔒 Security

Netlify automatically provides:
- ✅ HTTPS/SSL certificate
- ✅ DDoS protection
- ✅ CDN distribution
- ✅ Automatic backups

## 📈 Monitoring

After deployment:

1. **Analytics**
   - Enable Netlify Analytics (paid)
   - Or add Google Analytics

2. **Forms**
   - Netlify can capture form submissions
   - Go to Site settings > Forms

3. **Functions** (Future)
   - Can add serverless functions if needed

## 🎉 Success!

Your website is now live! Share your Netlify URL:
```
https://your-site-name.netlify.app
```

## 📞 Support

If issues persist:
1. Check Netlify build logs
2. Test locally first
3. Review browser console errors
4. Check Netlify community forums

---

**Status:** Ready to Deploy ✅  
**Estimated Deploy Time:** 2-3 minutes  
**Cost:** Free (Netlify free tier)
