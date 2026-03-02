'use client'

import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'
import Section from './Section'

const projects = [
  {
    title: 'QuillHub',
    description: 'QuillHub is a real-time collaborative document editor that lets multiple users log in, edit, and share documents seamlessly.',
    tags: ['React','Next.js', 'Node.js', 'Convex', 'Clerk', 'Tailwind CSS'],
    image: '/images/quillhub.png',
    liveUrl: 'https://quillhub-next.vercel.app/',
    githubUrl: 'https://github.com/ayandafadar/quillhub',
  },
  {
    title: 'Cardialink',
    description: 'Collaborative project management tool with real-time updates, drag-and-drop, and team workspaces.',
    tags: ['React', 'Python', 'Flask', 'Tailwind CSS',],
    image: '/images/cardialink.png',
    githubUrl: 'https://github.com/ayandafadar/CardiaLink',
  },
]

export default function Projects() {
  return (
    <Section id="work">
      <div className="mb-8 text-center sm:mb-12">
        <h2 className="mb-3 text-2xl font-semibold tracking-tight text-black dark:text-white sm:mb-4 sm:text-3xl md:text-4xl">
          Featured Projects
        </h2>
        <p className="mx-auto max-w-xl text-sm text-neutral-600 dark:text-neutral-400 sm:text-base">
          A selection of projects I&apos;ve worked on recently
        </p>
      </div>

      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="group relative overflow-hidden rounded-2xl border border-neutral-300 dark:border-neutral-800/50 bg-white dark:bg-neutral-900 transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-600"
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 dark:from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Image placeholder */}
            <div className="relative h-36 sm:h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover overlay with links */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 bg-white/60 dark:bg-black/60 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                <a
                  href={project.liveUrl}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black transition-transform hover:scale-110"
                  aria-label="View live site"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href={project.githubUrl}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 dark:border-white/20 bg-black/10 dark:bg-white/10 text-black dark:text-white transition-transform hover:scale-110"
                  aria-label="View source code"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="relative p-4 sm:p-6">
              <h3 className="mb-1.5 text-base font-semibold text-black dark:text-white transition-colors sm:mb-2 sm:text-lg">
                {project.title}
              </h3>
              <p className="mb-3 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400 sm:mb-4 sm:text-sm">
                {project.description}
              </p>
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-neutral-200/50 dark:bg-neutral-800/50 px-2 py-0.5 text-[10px] text-neutral-600 dark:text-neutral-400 sm:px-3 sm:py-1 sm:text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
