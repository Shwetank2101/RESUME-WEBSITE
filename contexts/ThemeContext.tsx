'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Theme = {
  name: string
  displayName: string
  colors: {
    primary: string
    'primary-dark': string
    secondary: string
    accent: string
    dark: string
    'dark-light': string
    light: string
    'text-light': string
  }
  gradient: string
}

export const themes: Theme[] = [
  {
    name: 'default',
    displayName: 'Indigo',
    colors: {
      primary: '#6366f1',
      'primary-dark': '#4f46e5',
      secondary: '#ec4899',
      accent: '#f59e0b',
      dark: '#0f172a',
      'dark-light': '#1e293b',
      light: '#f8fafc',
      'text-light': '#64748b',
    },
    gradient: 'from-indigo-500 via-pink-500 to-amber-500',
  },
  {
    name: 'ocean',
    displayName: 'Ocean',
    colors: {
      primary: '#06b6d4',
      'primary-dark': '#0891b2',
      secondary: '#3b82f6',
      accent: '#8b5cf6',
      dark: '#0c1222',
      'dark-light': '#1a2332',
      light: '#f0f9ff',
      'text-light': '#64748b',
    },
    gradient: 'from-cyan-500 via-blue-500 to-purple-500',
  },
  {
    name: 'emerald',
    displayName: 'Emerald',
    colors: {
      primary: '#10b981',
      'primary-dark': '#059669',
      secondary: '#34d399',
      accent: '#fbbf24',
      dark: '#0a1f17',
      'dark-light': '#1a2e25',
      light: '#f0fdf4',
      'text-light': '#6b7280',
    },
    gradient: 'from-emerald-500 via-green-400 to-yellow-400',
  },
  {
    name: 'sunset',
    displayName: 'Sunset',
    colors: {
      primary: '#f97316',
      'primary-dark': '#ea580c',
      secondary: '#f59e0b',
      accent: '#ef4444',
      dark: '#1a0f0a',
      'dark-light': '#2a1f1a',
      light: '#fff7ed',
      'text-light': '#78716c',
    },
    gradient: 'from-orange-500 via-amber-500 to-red-500',
  },
  {
    name: 'rose',
    displayName: 'Rose',
    colors: {
      primary: '#f43f5e',
      'primary-dark': '#e11d48',
      secondary: '#ec4899',
      accent: '#a855f7',
      dark: '#1a0a0f',
      'dark-light': '#2a1a1f',
      light: '#fff1f2',
      'text-light': '#78716c',
    },
    gradient: 'from-rose-500 via-pink-500 to-purple-500',
  },
  {
    name: 'teal',
    displayName: 'Teal',
    colors: {
      primary: '#14b8a6',
      'primary-dark': '#0d9488',
      secondary: '#06b6d4',
      accent: '#06b6d4',
      dark: '#0a1a18',
      'dark-light': '#1a2a28',
      light: '#f0fdfa',
      'text-light': '#64748b',
    },
    gradient: 'from-teal-500 via-cyan-500 to-blue-500',
  },
  {
    name: 'purple',
    displayName: 'Purple',
    colors: {
      primary: '#a855f7',
      'primary-dark': '#9333ea',
      secondary: '#ec4899',
      accent: '#f59e0b',
      dark: '#0f0a1a',
      'dark-light': '#1f1a2a',
      light: '#faf5ff',
      'text-light': '#78716c',
    },
    gradient: 'from-purple-500 via-pink-500 to-amber-500',
  },
  {
    name: 'crimson',
    displayName: 'Crimson',
    colors: {
      primary: '#dc2626',
      'primary-dark': '#b91c1c',
      secondary: '#f43f5e',
      accent: '#f97316',
      dark: '#1a0a0a',
      'dark-light': '#2a1a1a',
      light: '#fef2f2',
      'text-light': '#78716c',
    },
    gradient: 'from-red-600 via-rose-500 to-orange-500',
  },
]

type ThemeContextType = {
  currentTheme: Theme
  setTheme: (themeName: string) => void
  themes: Theme[]
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      const theme = themes.find((t) => t.name === savedTheme)
      if (theme) {
        setCurrentTheme(theme)
      }
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      // Apply theme colors to CSS variables
      const root = document.documentElement
      Object.entries(currentTheme.colors).forEach(([key, value]) => {
        root.style.setProperty(`--color-${key}`, value)
      })
      localStorage.setItem('theme', currentTheme.name)
    }
  }, [currentTheme, mounted])

  const setTheme = (themeName: string) => {
    const theme = themes.find((t) => t.name === themeName)
    if (theme) {
      setCurrentTheme(theme)
    }
  }

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

