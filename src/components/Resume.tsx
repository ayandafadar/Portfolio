'use client'

import { FileText, Download, GraduationCap } from 'lucide-react'
import { SiLeetcode, SiCodeforces } from 'react-icons/si'
import Section from './Section'

export default function Resume() {
  return (
    <Section id="resume">
      <div className="overflow-hidden rounded-2xl border border-neutral-300 dark:border-neutral-800/50 bg-white dark:bg-neutral-900">
        <div className="flex flex-col items-center gap-6 p-6 text-center sm:flex-row sm:justify-between sm:p-8 sm:text-left">
          {/* Left side - Info */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 sm:h-14 sm:w-14">
              <FileText className="h-6 w-6 sm:h-7 sm:w-7" />
            </div>
            <div>
              <h2 className="mb-1 text-lg font-semibold text-black dark:text-white sm:text-xl">
                My Resume
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Get a detailed overview of my skills, experience, and education
              </p>
            </div>
          </div>

          {/* Right side - Button */}
          <a
              href="https://drive.google.com/file/d/1EQb09Sx44z6U4mZGkj3mLuP3YaKfLIsL/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-black dark:bg-white px-5 py-2.5 text-sm font-medium text-white dark:text-black transition-all duration-200 hover:bg-neutral-800 dark:hover:bg-neutral-200 sm:px-6 sm:py-3"
            >
            <Download className="h-4 w-4" />
            <span>Download</span>
          </a>
        </div>

        {/* Links Row */}
        <div className="grid grid-cols-3 border-t border-neutral-300 dark:border-neutral-800/50">
          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/ayandafadar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-0.5 border-r border-neutral-300 dark:border-neutral-800/50 p-4 transition-colors duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 sm:p-6"
          >
            <SiLeetcode className="h-5 w-5 text-[#FFA116] sm:h-6 sm:w-6" />
            <span className="text-xs text-neutral-600 dark:text-neutral-400 sm:text-sm">LeetCode</span>
          </a>

          {/* Codeforces */}
          <a
            href="https://codeforces.com/profile/ayandafadar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-0.5 border-r border-neutral-300 dark:border-neutral-800/50 p-4 transition-colors duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 sm:p-6"
          >
            <SiCodeforces className="h-5 w-5 text-[#1F8ACB] sm:h-6 sm:w-6" />
            <span className="text-xs text-neutral-600 dark:text-neutral-400 sm:text-sm">Codeforces</span>
          </a>

          {/* Manipal / CGPA */}
          <div className="flex flex-col items-center gap-0.5 p-4 sm:p-6">
            <GraduationCap className="h-5 w-5 text-[#E4405F] sm:h-6 sm:w-6" />
            <div className="text-center">
            <span className="text-xs text-neutral-600 dark:text-neutral-400 sm:text-sm">8.62 CGPA</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
