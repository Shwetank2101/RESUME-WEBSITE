# 🚀 Deployment Guide - Vercel (Free & Best for Next.js)

## Why Vercel?
- ✅ **100% Free** for personal projects
- ✅ **Zero Configuration** - Auto-detects Next.js
- ✅ **Automatic HTTPS** - SSL certificates included
- ✅ **Custom Domain** - Free custom domain support
- ✅ **Global CDN** - Fast worldwide performance
- ✅ **Auto Deployments** - Deploys on every Git push
- ✅ **No Credit Card Required**

## 📋 Pre-Deployment Checklist

### 1. Final Build Test
```bash
npm run build
npm run start  # Test production build locally
```

### 2. Verify All Content
- ✅ Phone number shows: +91 8178311674
- ✅ Email: shwetankdixitt@gmail.com
- ✅ LinkedIn: https://www.linkedin.com/in/shwetankdixit1/
- ✅ All pages load correctly
- ✅ Resume PDF is accessible

---

## 🎯 Method 1: Deploy via Vercel Dashboard (Easiest - Recommended)

### Step 1: Prepare Your Code
```bash
# Make sure you're in the project directory
cd /Users/shwetankdixit/resume-website

# Check git status
git status
```

### Step 2: Push to GitHub (if not already done)

**Option A: If you already have a GitHub repo:**
```bash
git add .
git commit -m "Production ready - Resume website"
git push origin main
```

**Option B: If you need to create a new GitHub repo:**

1. Go to [github.com](https://github.com) and create a new repository
2. Name it: `resume-website` (or any name you prefer)
3. Don't initialize with README
4. Copy the repository URL

Then run:
```bash
git init
git add .
git commit -m "Initial commit - Production ready"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### Step 3: Deploy on Vercel

1. **Go to Vercel**: Visit [vercel.com](https://vercel.com)

2. **Sign Up/Login**:
   - Click "Sign Up"
   - Choose "Continue with GitHub"
   - Authorize Vercel to access your GitHub

3. **Import Project**:
   - Click "Add New Project"
   - Select your `resume-website` repository
   - Click "Import"

4. **Configure Project** (Vercel auto-detects Next.js):
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave as is)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)
   - **Install Command**: `npm install` (auto-filled)

5. **Environment Variables** (if any):
   - Usually not needed for this project
   - Click "Deploy" without adding any

6. **Deploy**:
   - Click the big "Deploy" button
   - Wait 2-3 minutes for deployment
   - ✅ Your site is live!

### Step 4: Get Your URL
- After deployment, Vercel provides a URL like:
  - `resume-website.vercel.app`
  - Or `resume-website-xyz123.vercel.app`

### Step 5: Custom Domain (Optional - Free)
1. Go to your project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `shwetankdixit.com`)
4. Follow DNS configuration instructions
5. Vercel provides free SSL automatically

---

## 🎯 Method 2: Deploy via Vercel CLI (Alternative)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login
```bash
vercel login
```

### Step 3: Deploy
```bash
cd /Users/shwetankdixit/resume-website
vercel
```

### Step 4: Follow Prompts
- Set up and deploy? **Y**
- Which scope? (Select your account)
- Link to existing project? **N** (for first time)
- Project name? `resume-website` (or press Enter)
- Directory? `./` (press Enter)
- Override settings? **N** (press Enter)

### Step 5: Production Deploy
```bash
vercel --prod
```

---

## 🔄 Automatic Deployments

Once connected to GitHub:
- ✅ Every push to `main` branch = Automatic production deployment
- ✅ Every pull request = Preview deployment
- ✅ Zero manual work needed!

---

## 📊 Post-Deployment

### Test Your Live Site
1. Visit your Vercel URL
2. Test all pages:
   - Homepage: `your-url.vercel.app`
   - Resume: `your-url.vercel.app/resume`
   - Work: `your-url.vercel.app/work`

### Share Your Portfolio
- Resume link: `your-url.vercel.app/resume`
- Work showcase: `your-url.vercel.app/work`

---

## 🛠️ Troubleshooting

### Build Fails?
```bash
# Test build locally first
npm run build

# Check for errors
npm run lint
```

### CSS Not Loading?
- Clear browser cache
- Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

### PDF Not Loading?
- Ensure `ShwetankDixit.pdf` is in `/public` folder
- Check file size (should be < 10MB for free tier)

---

## 📈 Vercel Free Tier Limits

- ✅ **100GB bandwidth/month** (plenty for portfolio)
- ✅ **Unlimited deployments**
- ✅ **100 serverless function invocations/day**
- ✅ **Custom domains** (unlimited)
- ✅ **SSL certificates** (automatic)

**Perfect for a portfolio website!**

---

## 🎉 You're Done!

Your resume website is now:
- ✅ Live on the internet
- ✅ Accessible worldwide
- ✅ Fast (CDN-powered)
- ✅ Secure (HTTPS)
- ✅ Free forever!

**Share your URL with companies and start getting noticed! 🚀**

---

## 📝 Quick Reference

**Your URLs:**
- Production: `https://your-project.vercel.app`
- Resume: `https://your-project.vercel.app/resume`
- Work: `https://your-project.vercel.app/work`

**Update Code:**
```bash
git add .
git commit -m "Update content"
git push origin main
# Vercel auto-deploys! ✨
```

