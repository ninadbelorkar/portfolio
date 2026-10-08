'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

type Props = {
  children: React.ReactNode
  delay?: number
  className?: string
  style?: React.CSSProperties
}

/**
 * Wraps children in a fade-in + 18px upward reveal triggered by IntersectionObserver.
 * Respects prefers-reduced-motion — when set, renders without motion wrapper.
 */
export default function FadeIn({ children, delay = 0, className, style }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const prefersReduced = useReducedMotion()

  if (prefersReduced) {
    return (
      <div ref={ref} className={className} style={style}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}
