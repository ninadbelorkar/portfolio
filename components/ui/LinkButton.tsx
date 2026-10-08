'use client'

import { motion } from 'framer-motion'

type Variant = 'primary' | 'secondary'

type Props = {
  href: string
  children: React.ReactNode
  variant?: Variant
  id?: string
  download?: boolean | string
}

export default function LinkButton({ href, children, variant = 'primary', id, download }: Props) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:')

  const base: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '7px 14px',
    fontSize: 'var(--text-meta)',
    fontWeight: 500,
    borderRadius: 'var(--radius-btn)',
    textDecoration: 'none',
    lineHeight: 1,
    whiteSpace: 'nowrap',
    letterSpacing: '-0.008em',
    cursor: 'pointer',
    transition: 'opacity 0.15s',
  }

  const variants: Record<Variant, React.CSSProperties> = {
    primary: {
      backgroundColor: 'var(--color-fg)',
      color: '#ffffff',
      border: '1px solid var(--color-fg)',
    },
    secondary: {
      backgroundColor: 'transparent',
      color: 'var(--color-fg)',
      border: 'var(--border-1)',
    },
  }

  return (
    <motion.a
      href={href}
      id={id}
      target={isExternal && !download ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      download={download}
      whileHover={{ opacity: 0.7 }}
      transition={{ duration: 0.13 }}
      style={{ ...base, ...variants[variant] }}
    >
      {children}
    </motion.a>
  )
}
