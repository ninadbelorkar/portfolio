type Props = {
  children: React.ReactNode
  className?: string
}

export default function SectionHeading({ children, className = '' }: Props) {
  return (
    <h2
      className={`text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-muted)] mb-8 ${className}`}
    >
      {children}
    </h2>
  )
}
