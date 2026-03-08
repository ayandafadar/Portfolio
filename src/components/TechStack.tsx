'use client'

import { useEffect, useState } from 'react'
import Section from './Section'
import { FaJava } from 'react-icons/fa'

import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,

  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiNextdotjs,
  SiTensorflow,
  SiNumpy,
  SiPandas,

  SiMongodb,
  SiPostgresql,
  SiRedis,

  SiLinux,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiDocker,
  SiAmazonwebservices,
  SiFigma
} from 'react-icons/si'

const categories = [
{
  title: 'Languages',
  items: [
    { name: 'C++', icon: SiCplusplus, color: '#00599C' },
    { name: 'Java', icon: FaJava, color: '#B54C3F' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6' }
  ]
},
{
  title: 'Frameworks & Libraries',
  items: [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, darkAware: true },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Express', icon: SiExpress, darkAware: true },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
    { name: 'NumPy', icon: SiNumpy, color: '#79ACCD' },
    { name: 'Pandas', icon: SiPandas, color: '#160B50' }
  ]
},
{
  title: 'Databases',
  items: [
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Redis', icon: SiRedis, color: '#DC382D' }
  ]
},
{
  title: 'Cloud & DevOps',
  items: [
    { name: 'Linux', icon: SiLinux, color: '#FCC624' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'GitHub', icon: SiGithub, darkAware: true },
    { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'AWS', icon: SiAmazonwebservices, color: '#FF9900' }
  ]
}
]

export default function TechStack() {

  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }

    checkTheme()

    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    return () => observer.disconnect()
  }, [])

  return (
    <Section id="tech">
      <div className="max-w-5xl mx-auto">

        {categories.map((category) => (
          <div key={category.title} className="mb-12">

            <h3 className="text-center text-xl font-semibold text-black dark:text-white mb-6">
              {category.title}
            </h3>

            <div className="flex flex-wrap justify-center gap-4">

              {category.items.map((tech) => {

                const Icon = tech.icon

                const iconColor = tech.darkAware
                  ? (isDark ? '#ffffff' : '#000000')
                  : tech.color

                return (
                  <div
                    key={tech.name}
                    className="flex h-14 w-14 items-center justify-center rounded-xl
                    bg-neutral-100 dark:bg-[#1c2230]
                    hover:bg-neutral-200 dark:hover:bg-[#262c3d]
                    transition"
                    title={tech.name}
                  >
                    <Icon
                      className="h-7 w-7"
                      style={{ color: iconColor }}
                    />
                  </div>
                )

              })}

            </div>

          </div>
        ))}

      </div>
    </Section>
  )
}