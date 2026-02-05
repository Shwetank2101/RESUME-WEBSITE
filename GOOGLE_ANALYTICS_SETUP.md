# Google Analytics 4 Setup Guide

## ✅ What's Been Implemented

Your website now has Google Analytics 4 (GA4) integration ready. It will automatically track:
- Page views
- User sessions
- Traffic sources
- Popular pages
- User behavior

## 🔧 Setup Instructions (5 minutes)

### Step 1: Create Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click **"Start measuring"** or **"Create Account"**
3. Sign in with your Google account (or create one)

### Step 2: Create a Property

1. Click **"Create Property"**
2. Enter property name: `Shwetank Dixit Portfolio` (or any name)
3. Select timezone: `(GMT+05:30) India Standard Time`
4. Select currency: `Indian Rupee (INR)`
5. Click **"Next"**

### Step 3: Business Information (Optional)

1. Select your industry: `Technology` (or relevant)
2. Select business size: `Small` (or relevant)
3. Select how you intend to use GA4: `Measure customer engagement with my website`
4. Click **"Create"**

### Step 4: Set Up Data Stream

1. Select **"Web"** as the platform
2. Enter:
   - Website URL: `https://shwetankdixit.in`
   - Stream name: `shwetankdixit.in` (or any name)
3. Click **"Create stream"**

### Step 5: Get Your Measurement ID

1. After creating the stream, you'll see **"Measurement ID"**
2. It looks like: `G-XXXXXXXXXX` (starts with G-)
3. **Copy this ID** - you'll need it in the next step

### Step 6: Add to Vercel Environment Variables

1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Click **Add New**
4. Add:
   - **Name**: `NEXT_PUBLIC_GA_ID`
   - **Value**: Paste your Measurement ID (e.g., `G-XXXXXXXXXX`)
   - **Environment**: Select all (Production, Preview, Development)
5. Click **Save**

### Step 7: Redeploy

After adding the environment variable:
- Vercel will automatically redeploy, OR
- Go to **Deployments** tab and click **Redeploy** on the latest deployment

## ✅ Verification

### Method 1: Google Analytics Dashboard
1. Go to [Google Analytics](https://analytics.google.com/)
2. Wait 24-48 hours for data to appear
3. Check **Reports** → **Realtime** to see live visitors

### Method 2: Browser DevTools
1. Visit your website: `https://shwetankdixit.in`
2. Open DevTools (F12)
3. Go to **Network** tab
4. Filter by `gtag` or `collect`
5. You should see requests to Google Analytics

### Method 3: Google Tag Assistant
1. Install [Google Tag Assistant](https://tagassistant.google.com/) Chrome extension
2. Visit your website
3. Click the extension icon
4. It should show Google Analytics is working

## 📊 What Gets Tracked

### Automatic Tracking:
- ✅ Page views (all pages)
- ✅ User sessions
- ✅ Traffic sources (direct, search, social, etc.)
- ✅ Device types (mobile, desktop, tablet)
- ✅ Browser and OS
- ✅ Geographic location
- ✅ Time on page
- ✅ Bounce rate

### Custom Events (Can be added later):
- Button clicks
- Form submissions
- PDF downloads
- External link clicks

## 🔒 Privacy & GDPR

Google Analytics is GDPR compliant. However, if you want to:
- Add cookie consent banner (optional)
- Anonymize IP addresses (can be configured in GA4)
- Disable for EU users (requires additional setup)

## 🆓 Free Tier

Google Analytics 4 is **completely free** with:
- ✅ Unlimited properties
- ✅ Unlimited data retention
- ✅ Real-time reporting
- ✅ Custom reports
- ✅ No credit card required

## 🐛 Troubleshooting

### Analytics not working?

1. **Check environment variable:**
   - Verify `NEXT_PUBLIC_GA_ID` is set in Vercel
   - Make sure it starts with `G-`
   - Redeploy after adding

2. **Check browser console:**
   - Open DevTools → Console
   - Look for errors related to `gtag`

3. **Wait 24-48 hours:**
   - Google Analytics can take time to show data
   - Use Realtime reports to verify immediately

4. **Ad blockers:**
   - Some ad blockers block Google Analytics
   - Test in incognito mode or disable ad blocker

## 📈 Next Steps

Once set up, you can:
1. View reports in Google Analytics dashboard
2. Set up custom events (form submissions, button clicks)
3. Create custom reports
4. Set up goals and conversions
5. Export data for analysis

## ✅ You're Done!

Once you add the Measurement ID to Vercel and redeploy, Google Analytics will start tracking your website visitors automatically!

**No code changes needed** - everything is already implemented! 🚀

