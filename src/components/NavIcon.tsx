interface NavIconProps {
  children: React.ReactNode
  label: string
  href?: string
  onClick?: () => void
  isExternal?: boolean
}

export default function NavIcon({
  children,
  label,
  href,
  onClick,
  isExternal = false,
}: NavIconProps) {
  const baseClasses =
    'group relative flex h-10 w-10 items-center justify-center rounded-full text-neutral-500 transition-all duration-200 hover:bg-neutral-800/50 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700'

  const content = (
    <>
      {children}
      <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 transform whitespace-nowrap rounded-md bg-neutral-900 px-2 py-1 text-xs text-neutral-300 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        {label}
      </span>
    </>
  )

  if (onClick) {
    return (
      <button onClick={onClick} className={baseClasses} aria-label={label}>
        {content}
      </button>
    )
  }

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={baseClasses}
      aria-label={label}
    >
      {content}
    </a>
  )
}
