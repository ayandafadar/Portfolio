'use client'

import { Briefcase, GraduationCap, Code } from 'lucide-react'
import Section from './Section'

const experiences = [
  {
    type: 'contribution',
    title: 'Open Source Contributor',
    company: 'GirlScript Summer of Code (GSSoC) 2025',
    period: '2025',
    description:
      'Contributed by resolving frontend issues, improving form validation, UI consistency, and client-side error handling. Collaborated with maintainers through GitHub issues, pull requests, and code reviews using Git.',
  },
  {
    type: 'education',
    title: 'B.Tech Computer Science',
    company: 'Manipal University Jaipur',
    period: '2023 - 2027',
    description:
      'Pursuing B.Tech in Computer Science with strong fundamentals in DSA and System Design. Focused on building scalable full-stack applications and problem solving.',
  },
]

export default function Experience() {
  return (
    <Section id="experience">
      <div className="mb-8 text-center sm:mb-12">
        <h2 className="mb-3 text-2xl font-semibold tracking-tight text-black dark:text-white sm:mb-4 sm:text-3xl md:text-4xl">
          Experience
        </h2>
        <p className="mx-auto max-w-xl text-sm text-neutral-600 dark:text-neutral-400 sm:text-base">
          My professional journey and educational background
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-blue-500/50 via-neutral-300 dark:via-neutral-800 to-neutral-300 dark:to-neutral-800 sm:left-1/2 sm:block sm:-translate-x-px" />

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col sm:flex-row ${
                index % 2 === 0 ? 'sm:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot - hidden on mobile */}
              <div className="absolute left-4 top-6 z-10 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-blue-500 bg-white dark:bg-black sm:left-1/2 sm:block" />

              {/* Content card */}
              <div
                className={`w-full sm:w-1/2 ${
                  index % 2 === 0 ? 'sm:pl-8' : 'sm:pr-8'
                }`}
              >
                <div className="group relative overflow-hidden rounded-xl border border-neutral-300 dark:border-neutral-800/50 bg-white dark:bg-neutral-900 p-4 transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-700/50 sm:p-6">
                  
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      exp.type === 'work'
                        ? 'from-blue-500/5'
                        : exp.type === 'contribution'
                        ? 'from-sky-500/5'
                        : 'from-purple-500/5'
                    } to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  <div className="relative">
                    <div className="mb-3 flex items-start justify-between gap-2 sm:mb-4">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-lg sm:h-10 sm:w-10 ${
                            exp.type === 'work'
                              ? 'bg-blue-500/10 text-blue-500 dark:text-blue-400'
                              : exp.type === 'contribution'
                              ? 'bg-sky-500/10 text-sky-500 dark:text-sky-400'
                              : 'bg-purple-500/10 text-purple-500 dark:text-purple-400'
                          }`}
                        >
                          {exp.type === 'work' ? (
                            <Briefcase className="h-4 w-4 sm:h-5 sm:w-5" />
                          ) : exp.type === 'contribution' ? (
                            <Code className="h-4 w-4 sm:h-5 sm:w-5" />
                          ) : (
                            <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-black dark:text-white sm:text-base">
                            {exp.title}
                          </h3>
                          <p className="text-xs text-neutral-500 sm:text-sm">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <span className="shrink-0 rounded-full bg-neutral-200/50 dark:bg-neutral-800/50 px-2 py-1 text-[10px] text-neutral-600 dark:text-neutral-400 sm:px-3 sm:text-xs">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-sm">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Empty space for alternating layout on desktop */}
              <div className="hidden sm:block sm:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}