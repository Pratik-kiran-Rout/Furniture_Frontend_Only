# Complete Commands Reference

## 📋 All Commands for Premium Furniture Website

### 🚀 Initial Setup (First Time Only)

```bash
# Navigate to project folder
cd d:\CORDING\Furniture_Premium\Furniture_Frontend_Only

# Install dependencies
npm install --legacy-peer-deps
```

**Wait 2-3 minutes for installation to complete.**

---

### 💻 Development Commands

```bash
# Start development server
npm start
```
Opens at: http://localhost:3000

```bash
# Stop development server
Ctrl + C
```

---

### 🏗️ Build Commands

```bash
# Build for production
npm run build
```
Creates `build` folder with optimized files.

```bash
# Test production build locally
npx serve -s build
```
Opens at: http://localhost:3000

---

### 🌐 Netlify Deployment Commands

#### Method 1: Netlify CLI

```bash
# Install Netlify CLI (one time)
npm install -g netlify-cli

# Login to Netlify
netlify login

# Build the project
npm run build

# Deploy to production
netlify deploy --prod
```

#### Method 2: Drag & Drop (No Commands)

```bash
# 1. Build
npm run build

# 2. Go to: https://app.netlify.com/drop
# 3. Drag 'build' folder to upload
```

---

### 🧹 Cleanup Commands

```bash
# Clear node_modules and reinstall
rmdir /s /q node_modules
del package-lock.json
npm install --legacy-peer-deps
```

```bash
# Clear build folder
rmdir /s /q build
```

---

### 🔍 Testing Commands

```bash
# Check for errors (no actual tests configured)
npm test
```

```bash
# View localStorage data (in browser console F12)
localStorage.getItem('wishlist')
localStorage.getItem('quote_requests')
localStorage.getItem('reviews')

# Clear all localStorage
localStorage.clear()
```

---

### 📊 Port Management (If Port 3000 Busy)

**Windows:**
```bash
# Find process using port 3000
netstat -ano | findstr :3000

# Kill process (replace PID with actual number)
taskkill /PID <PID> /F
```

**Mac/Linux:**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

---

### 🔧 Troubleshooting Commands

```bash
# If npm install fails
del package-lock.json
rmdir /s /q node_modules
npm cache clean --force
npm install --legacy-peer-deps
```

```bash
# If build fails
npm run build -- --verbose
```

```bash
# Check npm version
npm --version

# Check node version
node --version
```

**Required versions:**
- Node: v16+ 
- npm: v7+

---

### 📁 File Operations

```bash
# List files in current directory
dir

# Navigate to project
cd d:\CORDING\Furniture_Premium\Furniture_Frontend_Only

# Go back one folder
cd ..

# Open folder in VS Code
code .
```

---

### 🎯 Complete Workflow

**Development:**
```bash
cd d:\CORDING\Furniture_Premium\Furniture_Frontend_Only
npm start
# Make changes, test at http://localhost:3000
# Press Ctrl+C to stop
```

**Deployment:**
```bash
cd d:\CORDING\Furniture_Premium\Furniture_Frontend_Only
npm run build
netlify deploy --prod
# OR drag 'build' folder to https://app.netlify.com/drop
```

---

### ⚠️ Important Notes

**ALWAYS use `--legacy-peer-deps` flag:**
```bash
npm install --legacy-peer-deps
```

**NEVER run these commands:**
```bash
npm audit fix --force    # ❌ BREAKS installation
npm update               # ❌ Causes conflicts
```

---

### 🆘 Quick Fixes

**Problem: "Module not found"**
```bash
npm install --legacy-peer-deps
```

**Problem: "Port already in use"**
```bash
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**Problem: "Build fails"**
```bash
rmdir /s /q node_modules
del package-lock.json
npm install --legacy-peer-deps
npm run build
```

**Problem: "Cannot find package"**
```bash
npm install <package-name> --legacy-peer-deps
```

---

### 📦 Package Management

```bash
# Add new package
npm install <package-name> --legacy-peer-deps

# Remove package
npm uninstall <package-name>

# Update specific package
npm install <package-name>@latest --legacy-peer-deps

# List installed packages
npm list --depth=0
```

---

### 🎨 Development Tips

**Open in browser:**
```bash
start http://localhost:3000
```

**Open in VS Code:**
```bash
code .
```

**View build size:**
```bash
npm run build
# Check build folder size
```

---

## ✅ Summary

**Most Used Commands:**

1. **First time setup:**
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Start development:**
   ```bash
   npm start
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Deploy to Netlify:**
   ```bash
   netlify deploy --prod
   ```

---

**That's it!** These are all the commands you need. 🚀
