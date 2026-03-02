'use client'

import { useEffect, useState } from 'react'
import { FaJava } from 'react-icons/fa'
import Section from './Section'
import { 
  SiReact,
  SiNextdotjs, 
  SiTypescript, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiPostgresql, 
  SiDocker, 
  SiGit,
  SiPython,
  SiJavascript,
  SiMongodb,
  SiAmazonwebservices,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiFirebase,
  SiVercel,
  SiGithub,
  SiFigma,
  SiLinux
} from 'react-icons/si'

const categories = [
  {
    title: 'Languages',
    items: [
      { name: 'C++', icon: SiCplusplus, color: '#00599C', darkOnly: false },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', darkOnly: false },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', darkOnly: false },
      { name: 'Java', icon: FaJava, color: '#CF4138', darkOnly: false },
      { name: 'Python', icon: SiPython, color: '#3776AB', darkOnly: false },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26', darkOnly: false },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6', darkOnly: false },
    ],
  },
{
  title: 'Frameworks',
  items: [
    { name: 'React', icon: SiReact, color: '#61DAFB', darkOnly: false },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000', darkOnly: true },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933', darkOnly: false },
    { name: 'Express', icon: SiExpress, color: '#000000', darkOnly: true },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', darkOnly: false },
  ],
},
  {
    title: 'Tools & Platforms',
    items: [
      { name: 'Git', icon: SiGit, color: '#F05032', darkOnly: false },
      { name: 'GitHub', icon: SiGithub, color: '#000000', darkOnly: true },
      { name: 'Docker', icon: SiDocker, color: '#2496ED', darkOnly: false },
      { name: 'AWS', icon: SiAmazonwebservices, color: '#FF9900', darkOnly: false },
      { name: 'Vercel', icon: SiVercel, color: '#000000', darkOnly: true },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4F6B91', darkOnly: false },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248', darkOnly: false },
      { name: 'Firebase', icon: SiFirebase, color: '#C24426', darkOnly: false },
      { name: 'Figma', icon: SiFigma, color: '#945FED', darkOnly: false },
      { name: 'Linux', icon: SiLinux, color: 'black', darkOnly: false },
    ],
  },
]

export default function TechStack() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }
    checkTheme()
    
    // Watch for theme changes
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    
    return () => observer.disconnect()
  }, [])

  return (
    <Section id="tech">
      <div className="rounded-2xl bg-white dark:bg-black p-6 sm:p-8">
        <div className="mb-8 text-center sm:mb-10">
          <h2 className="mb-2 text-2xl font-semibold tracking-tight text-black dark:text-white sm:mb-3 sm:text-3xl">
            Tech Stack
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Technologies I work with
          </p>
        </div>

        <div className="space-y-8">
          {categories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-4 text-center text-xs font-medium uppercase tracking-wider text-neutral-500">
                {category.title}
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                {category.items.map((tech) => {
                  const Icon = tech.icon
                  const iconColor = tech.darkOnly ? (isDark ? '#ffffff' : tech.color) : tech.color
                  return (
                    <div
                      key={tech.name}
                      className="group relative flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-300 dark:border-neutral-800/50 bg-white dark:bg-neutral-900 transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-800 sm:h-14 sm:w-14"
                      title={tech.name}
                    >
                      <Icon 
                        className="h-6 w-6 transition-all duration-300 group-hover:scale-110 sm:h-7 sm:w-7" 
                        style={{ color: iconColor }}
                      />
                      {/* Tooltip */}
                      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-neutral-200 dark:bg-neutral-800 px-2 py-1 text-xs text-black dark:text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        {tech.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
