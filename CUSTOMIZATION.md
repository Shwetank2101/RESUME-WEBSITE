# Customization Guide

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run locally**:
   ```bash
   npm run dev
   ```

3. **Open**: http://localhost:3000

## What to Customize

### 1. Resume PDF ✅
- **Location**: `public/ShwetankDixit.pdf`
- **Status**: Already copied from your Downloads folder
- **Action**: Replace with updated resume when needed

### 2. Homepage (`app/page.tsx`)
Update these sections:
- **Line 51**: Your name (currently "Shwetank Dixit")
- **Line 58**: Your title (currently "Software Engineer")
- **Line 65**: Your tagline
- **Lines 100-105**: Stats (projects count, technologies, experience)

### 3. Work Showcase (`app/work/page.tsx`)

#### Projects (Lines 11-60)
Replace the sample projects with your actual projects:
```typescript
{
  id: 1,
  title: 'Your Project Name',
  description: 'Project description',
  tech: ['React', 'Node.js', ...], // Your tech stack
  category: 'web', // or 'mobile', 'ai', 'devops'
  company: 'Company Name',
  year: '2024',
  link: 'https://your-project-link.com', // or GitHub link
}
```

#### Companies (Lines 62-75)
Update with your work experience:
```typescript
{
  name: 'Company Name',
  role: 'Your Role',
  period: '2020 - 2024',
  description: 'What you did there',
}
```

#### Tech Stack (Lines 77-88)
Update with your actual skills and proficiency:
```typescript
{
  name: 'Technology Name',
  level: 95, // 0-100 percentage
  category: 'Frontend', // or 'Backend', 'Language', 'Cloud', 'DevOps'
}
```

### 4. Navigation (`components/Navigation.tsx`)
- Currently has: Home, Resume, Work
- Add more links if needed (About, Contact, etc.)

### 5. Colors & Theme (`tailwind.config.js`)
Customize the color scheme:
- `primary`: Main brand color
- `secondary`: Accent color
- `accent`: Highlight color
- `dark`: Background color

## File Structure

```
resume-website/
├── app/
│   ├── page.tsx          # Homepage
│   ├── resume/
│   │   └── page.tsx      # Resume viewer page
│   ├── work/
│   │   └── page.tsx      # Work showcase page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   └── Navigation.tsx    # Navigation component
├── public/
│   └── ShwetankDixit.pdf # Your resume PDF
└── package.json          # Dependencies
```

## Next Steps

1. Customize the content in `app/work/page.tsx` with your real projects
2. Update homepage stats and info
3. Test locally: `npm run dev`
4. Deploy to Vercel (see DEPLOYMENT.md)

