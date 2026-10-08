import React from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

type Props = {
  variant?: Variant
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
  id?: string
}

const base =
  'inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-[var(--radius-md)] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-2 cursor-pointer border'

const variants: Record<Variant, string> = {
  primary:
    'bg-[var(--color-foreground)] text-white border-[var(--color-foreground)] hover:bg-[#2a2a2a]',
  secondary:
    'bg-transparent text-[var(--color-foreground)] border-[var(--color-border)] hover:border-[var(--color-muted)] hover:bg-[var(--color-surface-raised)]',
  ghost:
    'bg-transparent text-[var(--color-muted)] border-transparent hover:text-[var(--color-foreground)] hover:bg-[var(--color-surface-raised)]',
}

export default function Button({
  variant = 'primary',
  children,
  onClick,
  type = 'button',
  className = '',
  id,
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      id={id}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
