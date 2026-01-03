# Update Your Contact Information

## Quick Update Guide

To update your contact information, edit these files:

### 1. Resume Page - Contact Links
**File:** `app/resume/page.tsx`

Update these lines (around line 86-110):

```typescript
// Update your email
href="mailto:shwetank.dixit@example.com"

// Update your LinkedIn URL
href="https://www.linkedin.com/in/shwetank-dixit"

// Update your GitHub URL
href="https://github.com/shwetankdixit"
```

### 2. Contact Form Email
**File:** `components/ContactForm.tsx`

Update line 30:
```typescript
const mailtoLink = `mailto:shwetank.dixit@example.com?subject=...`
```

Replace `shwetank.dixit@example.com` with your actual email address.

## What's Been Added

✅ **Quick Contact Section** - Clickable email, LinkedIn, and GitHub links
✅ **Contact Form** - Professional contact form that opens your email client
✅ **Enhanced Work Experience** - Detailed company information with achievements
✅ **Comprehensive Tech Stack** - 12 technologies with proficiency levels and years of experience
✅ **Detailed Projects** - 6 professional projects with achievements and tech stacks

## Next Steps

1. Replace placeholder email addresses with your real email
2. Update LinkedIn URL with your actual profile
3. Update GitHub URL with your actual profile
4. Customize work experience, tech stack, and projects with your actual data
5. Update project links to point to your actual projects or GitHub repos

All the structure is in place - just replace the placeholder data with your real information!

