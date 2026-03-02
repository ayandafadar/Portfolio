'use client'

import { useEffect, useState } from 'react'
import { Eye } from 'lucide-react'

export default function Footer() {
  const [viewCount, setViewCount] = useState<number | null>(null)

  useEffect(() => {
    fetch('https://ayan.goatcounter.com/counter/TOTAL.json')
      .then((res) => res.json())
      .then((data) => {
        setViewCount(parseInt(data.count))
      })
      .catch(() => {
        setViewCount(0)
      })
  }, [])

  return (
    <footer className="relative z-10 border-t border-neutral-300 dark:border-neutral-800/50 bg-white dark:bg-black px-4 py-6 sm:px-6">
      <div className="mx-auto flex max-w-4xl items-center justify-between">

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-neutral-700 dark:text-neutral-300 sm:text-base">
            A . D
          </h3>
        </div>

        <div className="flex items-center gap-1.5 text-neutral-500">
          <Eye className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          <span className="text-xs tabular-nums sm:text-sm">
            {viewCount !== null ? viewCount.toLocaleString() : '...'}
          </span>
        </div>

      </div>
    </footer>
  )
}