# Deployment Guide

## Quick Deploy to Vercel (Recommended - Free)

### Method 1: Deploy via Vercel Dashboard (Easiest)

1. **Push to GitHub** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login (free with GitHub)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js - just click "Deploy"
   - Your site will be live in ~2 minutes!

3. **Get Your URL**:
   - After deployment, Vercel provides a URL like: `your-project.vercel.app`
   - You can also add a custom domain (free)

### Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (from project root)
vercel

# Follow prompts - it's that simple!
```

### Method 3: Deploy via GitHub Actions (Automatic)

Vercel automatically deploys on every push to your main branch when connected via GitHub.

## Customize Your Content

Before deploying, make sure to update:

1. **Resume PDF**: Already in `public/ShwetankDixit.pdf` ✅
2. **Work Showcase**: Edit `app/work/page.tsx` with your actual:
   - Projects
   - Companies you've worked for
   - Tech stack and skill levels
3. **Homepage**: Edit `app/page.tsx` to update:
   - Your name and title
   - Stats (projects count, etc.)

## After Deployment

1. Share your Vercel URL with companies
2. The resume page is at: `your-url.vercel.app/resume`
3. The work showcase is at: `your-url.vercel.app/work`

## Free Tier Limits (Vercel)

- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month
- ✅ Custom domains
- ✅ SSL certificates
- ✅ No credit card required

Perfect for a portfolio site!

