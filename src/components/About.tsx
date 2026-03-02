'use client'

import { Briefcase, GraduationCap, Rocket, Heart } from 'lucide-react'
import Section from './Section'

export default function About() {
  return (
    <Section id="about">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Left column - Text */}
        <div>
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-black dark:text-white sm:mb-6 sm:text-3xl md:text-4xl">
            About Me
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-base">
            <p>
              Hi there! I&apos;m Ayan Dafadar, a Computer Science undergraduate with experience in software engineering 
              and a minor specialization in Cloud Computing and DevOps. I focus on building scalable, efficient, 
              and well-architected systems using modern development practices and cloud technologies.
            </p>   
            <p>
              My journey in tech began with a deep curiosity about how systems work, which gradually evolved into a passion 
              for full-stack development, cloud-native architectures, and performance-driven engineering.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing 
              to open source, or enjoying watching tech videos.
            </p>
          </div>

          {/* Quick facts */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4">
            <div className="flex items-center gap-3 rounded-xl border border-neutral-300 dark:border-neutral-800/50 bg-white dark:bg-neutral-900 p-3 sm:p-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500 dark:text-blue-400 sm:h-10 sm:w-10">
                <Briefcase className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-black dark:text-white sm:text-base">1+ Years</p>
                <p className="text-xs text-neutral-500 sm:text-sm">Professional Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-neutral-300 dark:border-neutral-800/50 bg-white dark:bg-neutral-900 p-3 sm:p-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10 text-purple-500 dark:text-purple-400 sm:h-10 sm:w-10">
                <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-black dark:text-white sm:text-base">B.Tech</p>
                <p className="text-xs text-neutral-500 sm:text-sm">Computer Science</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-neutral-300 dark:border-neutral-800/50 bg-white dark:bg-neutral-900 p-3 sm:p-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500 dark:text-orange-400 sm:h-10 sm:w-10">
                <Rocket className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-black dark:text-white sm:text-base">3+</p>
                <p className="text-xs text-neutral-500 sm:text-sm">Projects Shipped</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-neutral-300 dark:border-neutral-800/50 bg-white dark:bg-neutral-900 p-3 sm:p-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-pink-500/10 text-pink-500 dark:text-pink-400 sm:h-10 sm:w-10">
                <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-black dark:text-white sm:text-base">5+</p>
                <p className="text-xs text-neutral-500 sm:text-sm">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - Image/Card */}
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-sm">
            <div className="overflow-hidden rounded-2xl border border-neutral-300 dark:border-neutral-800/50 bg-white dark:bg-neutral-900 p-6 sm:p-8">
              {/* Code snippet mockup */}
              <div className="mb-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/50"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500/50"></div>
                <div className="h-3 w-3 rounded-full bg-green-500/50"></div>
              </div>
              <pre className="text-xs text-neutral-600 dark:text-neutral-400 sm:text-sm">
                <code>
{`const developer = {
  name: "Ayan Dafadar",
  role: "Full-Stack Dev",
  skills: [
    "C++",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js"
    "AWS"
  ],
  passion: "Building awesome
    web experiences"
};`}
                </code>


              </pre>
            </div>
            {/* Decorative elements */}
            <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-blue-500/10 blur-2xl sm:h-24 sm:w-24"></div>
            <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-purple-500/10 blur-2xl sm:h-24 sm:w-24"></div>
          </div>
        </div>
      </div>
    </Section>
  )
}
