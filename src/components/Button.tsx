interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  href?: string
  onClick?: () => void
  className?: string
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700'

  const variants = {
    primary:
      'bg-white text-black hover:bg-neutral-200',
    secondary:
      'border border-neutral-800 bg-transparent text-neutral-300 hover:border-neutral-700 hover:bg-neutral-900 hover:text-white',
  }

  const classes = `${baseClasses} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
