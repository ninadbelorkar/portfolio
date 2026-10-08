export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      padding: '2px 9px',
      fontSize: '11.5px', fontWeight: 500,
      color: 'var(--fg-2)',
      backgroundColor: 'var(--bg)',
      border: '1px solid var(--border)',
      borderRadius: '5px',
      lineHeight: 1.6,
      letterSpacing: '0.005em',
    }}>
      {children}
    </span>
  )
}
