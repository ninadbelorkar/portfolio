import Image from 'next/image'
import FadeIn from '@/components/ui/FadeIn'

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      style={{
        backgroundColor: 'var(--color-bg)',
        paddingTop: 'var(--sp-22)',
        paddingBottom: 'var(--sp-14)',
      }}
    >
      <div className="c">

        {/* Name + Photo row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 'var(--sp-8)',
            marginBottom: '75px', // exactly ~20% larger than var(--sp-6) which is 24px
          }}
        >
          {/* Left: Name + Identity */}
          <div>
            <FadeIn delay={0.04}>
              <h1
                style={{
                  fontSize: 'var(--text-display)',
                  fontWeight: 'var(--text-display-weight)',
                  letterSpacing: 'var(--text-display-tracking)',
                  lineHeight: 'var(--text-display-leading)',
                  color: 'var(--color-fg)',
                  marginBottom: 'var(--sp-6)',
                }}
              >
                Ninad<br />Belorkar
              </h1>
            </FadeIn>

            <FadeIn delay={0.14}>
              <p style={{ fontSize: '18px', fontWeight: 500, color: 'var(--color-fg)', letterSpacing: '-0.01em', marginBottom: '3px' }}>
                Software Intern
              </p>
              <p style={{ fontSize: '16px', color: 'var(--color-fg-2)', letterSpacing: '-0.01em' }}>
                Computer Science Engineer
              </p>
            </FadeIn>
          </div>

          {/* Right: Photo — small, secondary */}
          <FadeIn delay={0.22} style={{ flexShrink: 0 }}>
            <div
              style={{
                width: '192px',
                height: '192px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: 'var(--border-1)',
                backgroundColor: 'var(--color-bg-2)',
                marginTop: '4px',
              }}
            >
              <Image
                src="/images/profile/profile.png"
                alt="Ninad Belorkar"
                width={192}
                height={192}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                priority
              />
            </div>
          </FadeIn>
        </div>

        {/* Tagline — centered, ~40% closer to identity block than before */}
        <FadeIn delay={0.26}>
          <div
            style={{
              borderTop: 'var(--border-1)',
              paddingTop: 'var(--sp-5)',
              textAlign: 'center',
            }}
          >
            <p
              className="hero-tagline"
              style={{
                fontSize: '15.5px',
                color: 'var(--color-fg-2)',
                letterSpacing: '-0.01em',
                whiteSpace: 'nowrap',
              }}
            >
              Learning technology. Building solutions. Growing as an engineer.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
