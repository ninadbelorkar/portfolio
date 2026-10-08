import FadeIn from '@/components/ui/FadeIn'

export default function About() {
  return (
    <section
      id="about"
      aria-label="About Ninad"
      className="s"
      style={{ backgroundColor: 'var(--color-bg)', borderTop: 'var(--border-1)' }}
    >
      <div className="c">
        <FadeIn><span className="eyebrow">About</span></FadeIn>

        <div style={{ maxWidth: '640px' }}>
          {/* Opening statement — visual anchor of this section */}
          <FadeIn delay={0.06}>
            <p className="about-statement" style={{
              fontSize: 'var(--text-h1)',
              fontWeight: 'var(--text-h1-weight)',
              letterSpacing: 'var(--text-h1-tracking)',
              color: 'var(--color-fg)',
              lineHeight: 1.35,
              marginBottom: 'var(--sp-6)',
            }}>
              I build things, understand the engineering behind them, and I&apos;m growing into a strong software engineer.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p style={{ fontSize: 'var(--text-body)', color: 'var(--color-fg-2)', lineHeight: 'var(--text-body-leading)', marginBottom: 'var(--sp-4)' }}>
              My background spans backend systems, cloud infrastructure, AI integration, and software
              testing, areas I&apos;ve explored through internships and personal projects.
            </p>
          </FadeIn>

          <FadeIn delay={0.13}>
            <p style={{ fontSize: 'var(--text-body)', color: 'var(--color-fg-2)', lineHeight: 'var(--text-body-leading)', marginBottom: 'var(--sp-10)' }}>
              I care about understanding the engineering behind what I build, not just getting
              something to work. I&apos;m early in my career, actively learning, and looking for
              opportunities to contribute to meaningful work.
            </p>
          </FadeIn>

          {/* Currently — the ONLY place this appears on the site */}
          <FadeIn delay={0.17}>
            <div style={{ display: 'flex', gap: 'var(--sp-6)', paddingTop: 'var(--sp-6)', borderTop: 'var(--border-1)', alignItems: 'baseline' }}>
              <span className="eyebrow" style={{ marginBottom: 0, flexShrink: 0 }}>Currently</span>
              <div>
                <p style={{ fontSize: 'var(--text-body)', fontWeight: 600, color: 'var(--color-fg)', marginBottom: '2px' }}>
                  Software Intern at ifm
                </p>
                <p style={{ fontSize: 'var(--text-small)', color: 'var(--color-fg-3)' }}>
                  Exploring software engineering, testing, cloud technologies &amp; AI.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
