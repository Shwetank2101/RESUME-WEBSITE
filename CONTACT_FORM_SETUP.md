# Contact Form Setup Guide

## ✅ What's Been Implemented

Your contact form now sends emails **directly to your inbox** using Web3Forms - a completely free email service.

## 🔧 Setup Instructions (2 minutes)

### Step 1: Get Your Free Access Key

1. Go to [https://web3forms.com](https://web3forms.com)
2. Enter your email: `shwetankdixitt@gmail.com`
3. Click "Get Access Key"
4. Check your email and copy the access key (it will look like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

### Step 2: Add Access Key to Vercel

1. Go to your Vercel project dashboard
2. Click on **Settings** → **Environment Variables**
3. Click **Add New**
4. Add:
   - **Name**: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
   - **Value**: Paste your access key from Step 1
   - **Environment**: Select all (Production, Preview, Development)
5. Click **Save**

### Step 3: Redeploy

After adding the environment variable:
- Vercel will automatically redeploy, OR
- Go to **Deployments** tab and click **Redeploy** on the latest deployment

## ✨ How It Works

1. User fills out the contact form on your website
2. Form submits to Web3Forms API
3. **Email is sent directly to your inbox** (`shwetankdixitt@gmail.com`)
4. You receive an email with:
   - Sender's name and email
   - Subject line
   - Full message

## 📧 Email Format

You'll receive emails like this:

```
From: Contact Form <noreply@web3forms.com>
To: shwetankdixitt@gmail.com
Subject: Contact Form: [User's Subject]

Name: [User's Name]
Email: [User's Email]

Message:
[User's Message]
```

## 🆓 Free Tier Limits

- ✅ **250 emails/month** - Perfect for a portfolio site
- ✅ **No credit card required**
- ✅ **No spam** - Built-in spam protection
- ✅ **Instant delivery**

## 🔒 Privacy & Security

- Web3Forms doesn't store your messages
- Emails are sent directly to your inbox
- No data is shared with third parties
- Built-in spam protection

## 🐛 Troubleshooting

### Form not sending emails?

1. **Check access key**: Make sure `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` is set in Vercel
2. **Check email**: Verify the email in your Web3Forms account matches `shwetankdixitt@gmail.com`
3. **Check spam folder**: First emails might go to spam
4. **Check Web3Forms dashboard**: Log in to see submission history

### Need more than 250 emails/month?

- Upgrade to Web3Forms Pro (paid) - OR
- Use alternative free services:
  - Formspree (50 submissions/month free)
  - EmailJS (200 emails/month free)

## ✅ You're Done!

Once you add the access key, your contact form will work perfectly and all messages will be sent directly to your email inbox!

