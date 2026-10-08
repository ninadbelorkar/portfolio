import { skills } from '@/data/skills'
import FadeIn from '@/components/ui/FadeIn'

export default function Skills() {
  return (
    <section
      id="skills"
      aria-label="Skills and technologies"
      className="s"
      style={{ backgroundColor: 'var(--color-surface)', borderTop: 'var(--border-1)' }}
    >
      <div className="c">
        <FadeIn><span className="eyebrow">Skills</span></FadeIn>

        <div>
          {skills.map((cat, i) => {
            const isLast = i === skills.length - 1
            return (
              <FadeIn key={cat.name} delay={i * 0.06}>
                <div
                  className="skills-row"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '200px 1fr',
                    gap: 'var(--sp-10)',
                    paddingBottom: isLast ? 0 : 'var(--sp-5)',
                    marginBottom: isLast ? 0 : 'var(--sp-5)',
                    borderBottom: isLast ? 'none' : 'var(--border-1)',
                    alignItems: 'baseline',
                  }}
                >
                  {/* Category heading */}
                  <h3
                    style={{
                      fontSize: '13.5px',
                      fontWeight: 600,
                      color: 'var(--color-fg)',
                      letterSpacing: '-0.01em',
                      lineHeight: 1.3,
                    }}
                  >
                    {cat.name}
                  </h3>

                  {/* Technologies — inline dot-separated */}
                  <p
                    style={{
                      fontSize: 'var(--text-body)',
                      color: 'var(--color-fg-2)',
                      lineHeight: 1.8,
                    }}
                  >
                    {cat.technologies.join(' · ')}
                  </p>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
