export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderTop: 'var(--border-1)',
        paddingTop: 'var(--sp-6)',
        paddingBottom: '96px', /* clearance for floating dock */
      }}
    >
      <div
        className="c"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--sp-4)' }}
      >
        {/* Left: name + subtitle */}
        <div>
          <p style={{ fontSize: 'var(--text-meta)', fontWeight: 700, color: 'var(--color-fg)', marginBottom: '2px' }}>
            Ninad Belorkar
          </p>
          <p style={{ fontSize: 'var(--text-meta)', color: 'var(--color-fg-3)' }}>
            Software Intern at ifm
          </p>
        </div>

        {/* Right: tagline */}
        <p style={{ fontSize: 'var(--text-meta)', color: 'var(--color-fg-3)', letterSpacing: '-0.005em' }}>
          Learning technology. Building solutions. Growing as an engineer.
        </p>
      </div>
    </footer>
  )
}
