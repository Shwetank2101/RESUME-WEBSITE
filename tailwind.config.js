/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        'primary-dark': '#4f46e5',
        secondary: '#ec4899',
        accent: '#f59e0b',
        dark: '#0f172a',
        'dark-light': '#1e293b',
        light: '#f8fafc',
        text: '#334155',
        'text-light': '#64748b',
      },
    },
  },
  plugins: [],
}

