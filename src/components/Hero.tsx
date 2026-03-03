'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const rotatingWords = ['idea', 'prototype', 'concept', 'design', 'vision']
const rotatingSymbols = ['/','λ', '#', '^C', '""', '&', '..', '??']

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [symbolIndex, setSymbolIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isSymbolAnimating, setIsSymbolAnimating] = useState(false)

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % rotatingWords.length)
        setIsAnimating(false)
      }, 600)
    }, 4500)

    const symbolInterval = setInterval(() => {
      setIsSymbolAnimating(true)
      setTimeout(() => {
        setSymbolIndex((prev) => (prev + 1) % rotatingSymbols.length)
        setIsSymbolAnimating(false)
      }, 450)
    }, 2000)

    return () => {
      clearInterval(wordInterval)
      clearInterval(symbolInterval)
    }
  }, [])

  return (
    <section id="hero" 
      className="relative z-10 flex min-h-screen flex-col items-center justify-start px-4 pt-16 pb-20 sm:justify-center sm:pt-16 sm:px-6">
      <div className="max-w-2xl text-center">
        {/* Profile Picture */}
        <div className="mb-8 flex justify-center">
          <div className="relative h-32 w-32 sm:h-44 sm:w-44 rounded-full">
          {/* Gradient ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-600" />

          {/* Image */}
          <div className="absolute inset-[3px] rounded-full overflow-hidden bg-white dark:bg-neutral-900">
            <Image
              src="/profile.jpg"
              alt="A"
              fill
              className="object-cover scale-110"
              priority
            />
          </div>
        </div>
        </div>

        {/* Status badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-1.5 text-xs text-neutral-600 dark:text-neutral-400 sm:mb-8 sm:px-4 sm:py-2 sm:text-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          Available for work
        </div>

        {/* Main headline with code icon */}
        <h1 className="mb-4 flex items-center justify-center gap-3 text-3xl font-semibold tracking-tight text-black dark:text-white sm:mb-6 sm:text-5xl md:text-6xl">
          <span>Hi, I'm Ayan</span>
          <span className="text-blue-500 font-mono text-2xl sm:text-4xl md:text-5xl inline-flex items-center justify-center w-[2.5em]">
            <span className={`transition-all duration-300 ${isSymbolAnimating ? 'translate-x-[0.4em]' : 'translate-x-0'}`}>&lt;</span>
            <span className={`inline-block transition-all duration-300 overflow-hidden ${isSymbolAnimating ? 'w-0 opacity-0' : 'w-[1.2em] opacity-100'}`}>{rotatingSymbols[symbolIndex]}</span>
            <span className={`transition-all duration-300 ${isSymbolAnimating ? '-translate-x-[0.4em]' : 'translate-x-0'}`}>&gt;</span>
          </span>
        </h1>

        {/* Rotating tagline */}
        <p className="mx-auto max-w-lg text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg md:text-xl">
          From{' '}
          <span 
            className={`inline-block font-semibold text-blue-500 transition-all duration-200 ${
              isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
            }`}
          >
            {rotatingWords[wordIndex]}
          </span>{' '}
          to production.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
          <a
            href="#work"
            className="group inline-flex w-full items-center justify-center rounded-full bg-black dark:bg-white px-6 py-3 text-sm font-medium text-white dark:text-black transition-all duration-200 hover:bg-neutral-800 dark:hover:bg-neutral-200 sm:w-auto"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-800 bg-transparent px-6 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300 transition-all duration-200 hover:border-neutral-400 dark:hover:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-black dark:hover:text-white sm:w-auto"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
