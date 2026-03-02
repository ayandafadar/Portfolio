interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'status'
  className?: string
}

export default function Badge({
  children,
  variant = 'default',
  className = '',
}: BadgeProps) {
  const baseClasses =
    'inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-2 text-sm text-neutral-400'

  if (variant === 'status') {
    return (
      <div className={`${baseClasses} ${className}`}>
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neutral-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-neutral-500"></span>
        </span>
        {children}
      </div>
    )
  }

  return <div className={`${baseClasses} ${className}`}>{children}</div>
}
