interface SectionProps {
  children: React.ReactNode
  id?: string
  className?: string
}

export default function Section({ children, id, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative z-10 bg-white dark:bg-black px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-24 ${className}`}
    >
      <div className="mx-auto max-w-4xl">{children}</div>
    </section>
  )
}
