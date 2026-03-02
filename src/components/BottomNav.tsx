'use client'

import { useState, useEffect } from 'react'
import {
  Home,
  Github,
  Linkedin,
  Mail,
  Sun,
  Moon,
} from 'lucide-react'
import { SiX } from 'react-icons/si'

interface NavItem {
  icon: React.ReactNode
  label: string
  href?: string
  appUrl?: string
  onClick?: () => void
}

export default function BottomNav() {
  const [isDark, setIsDark] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    }
    checkMobile()
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'light') {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    } else if (savedTheme === 'dark' || systemPrefersDark) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    }
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    
    if (newIsDark) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
      localStorage.setItem('theme', 'light')
    }
  }

  const navItems: NavItem[] = [
    {
      icon: <Home className="h-5 w-5" />,
      label: 'Home',
      href: '#hero',
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: 'GitHub',
      href: 'https://github.com/ayandafadar',
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ayandafadar',
      appUrl: 'linkedin://in/ayandafadar',
    },
    {
      icon: <SiX className="h-5 w-5" />,
      label: 'X',
      href: 'https://x.com/ayandafadar01',
      appUrl: 'twitter://user?screen_name=ayandafadar01',
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      href: 'https://mail.google.com/mail/u/0/?view=cm&tf=1&to=technoayan55@gmail.com',
      appUrl: 'mailto:technoayan55@gmail.com',
    },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    if (isMobile && item.appUrl) {
      e.preventDefault()
      // Try opening the app first
      const start = Date.now()
      window.location.href = item.appUrl
      
      // Fallback to web URL if app doesn't open within 1.5 seconds
      setTimeout(() => {
        if (Date.now() - start < 2000 && item.href) {
          window.open(item.href, '_blank')
        }
      }, 1500)
    }
  }

  return (
    <nav
      className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transform"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex items-center gap-1 rounded-full border border-neutral-300 dark:border-neutral-800/50 bg-white/80 dark:bg-black/80 px-2 py-2 backdrop-blur-xl">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            onClick={(e) => handleNavClick(e, item)}
            target={item.href?.startsWith('http') ? '_blank' : undefined}
            rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="group relative flex h-10 w-10 items-center justify-center rounded-full text-neutral-500 transition-all duration-200 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 hover:text-black dark:hover:text-white"
            aria-label={item.label}
          >
            {item.icon}
            {/* Tooltip */}
            <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 transform whitespace-nowrap rounded-md bg-neutral-200 dark:bg-neutral-900 px-2 py-1 text-xs text-neutral-700 dark:text-neutral-300 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              {item.label}
            </span>
          </a>
        ))}

        {/* Divider */}
        <div className="mx-1 h-6 w-px bg-neutral-300 dark:bg-neutral-800" />

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="group relative flex h-10 w-10 items-center justify-center rounded-full text-neutral-500 transition-all duration-200 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 hover:text-black dark:hover:text-white"
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDark ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
          {/* Tooltip */}
          <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 transform whitespace-nowrap rounded-md bg-neutral-200 dark:bg-neutral-900 px-2 py-1 text-xs text-neutral-700 dark:text-neutral-300 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Theme
          </span>
        </button>
      </div>
    </nav>
  )
}
