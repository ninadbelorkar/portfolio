'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { experience } from '@/data/experience'
import FadeIn from '@/components/ui/FadeIn'

export default function Experience() {
  const [expanded, setExpanded] = useState(false)
  const featured  = experience.filter(e => e.featured)
  const secondary = experience.filter(e => !e.featured)

  return (
    <section
      id="experience"
      aria-label="Work experience"
      className="s"
      style={{ backgroundColor: 'var(--color-surface)', borderTop: 'var(--border-1)' }}
    >
      <div className="c">
        <FadeIn><span className="eyebrow">Experience</span></FadeIn>

        {featured.map((exp, i) => (
          <FadeIn key={exp.company} delay={i * 0.06}>
            <ExpItem exp={exp} showDivider />
          </FadeIn>
        ))}

        <AnimatePresence>
          {expanded && (
            <motion.div
              key="extra"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ overflow: 'hidden' }}
            >
              {secondary.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.08 + 0.1 }}
                >
                  <ExpItem exp={exp} showDivider={i < secondary.length - 1} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {secondary.length > 0 && (
          <FadeIn delay={0.08}>
            <button
              onClick={() => setExpanded(v => !v)}
              aria-expanded={expanded}
              style={{
                marginTop: 'var(--sp-6)',
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                fontSize: 'var(--text-meta)', fontWeight: 500,
                color: 'var(--color-fg-3)',
                background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                transition: 'color 0.15s',
              }}
              onMouseOver={e => (e.currentTarget.style.color = 'var(--color-fg)')}
              onMouseOut={e => (e.currentTarget.style.color = 'var(--color-fg-3)')}
            >
              <span style={{ fontSize: '15px', lineHeight: 1 }}>{expanded ? '−' : '+'}</span>
              {expanded ? 'Show Less' : 'More Experience'}
            </button>
          </FadeIn>
        )}
      </div>
    </section>
  )
}

function ExpItem({ exp, showDivider }: { exp: (typeof experience)[0]; showDivider: boolean }) {
  return (
    <article
      aria-label={`${exp.role} at ${exp.company}`}
      style={{
        paddingBottom: 'var(--sp-8)',
        marginBottom: 'var(--sp-8)',
        borderBottom: showDivider ? 'var(--border-1)' : 'none',
      }}
    >
      {/* Header row: role — company / logo / period */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 'var(--sp-4)',
          flexWrap: 'wrap',
          marginBottom: 'var(--sp-3)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)', flexWrap: 'wrap' }}>
          {/* Optional company logo — only rendered when logo path is set */}
          {exp.logo && (
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '6px',
                overflow: 'hidden',
                border: 'var(--border-1)',
                flexShrink: 0,
                backgroundColor: 'var(--color-bg)',
              }}
            >
              <Image
                src={exp.logo}
                alt={`${exp.company} logo`}
                width={28}
                height={28}
                style={{ objectFit: 'contain', width: '100%', height: '100%' }}
              />
            </div>
          )}

          <h3
            style={{
              fontSize: 'var(--text-title)',
              fontWeight: 'var(--text-title-weight)',
              letterSpacing: 'var(--text-title-tracking)',
              color: 'var(--color-fg)',
              lineHeight: 1.2,
            }}
          >
            {exp.role}
            <span style={{ fontWeight: 400, color: 'var(--color-fg-2)' }}> — {exp.company}</span>
          </h3>
        </div>

        <time
          style={{
            fontSize: 'var(--text-meta)',
            color: 'var(--color-fg-3)',
            flexShrink: 0,
            paddingTop: '2px',
          }}
        >
          {exp.period}
        </time>
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: 'var(--text-body)',
          color: 'var(--color-fg-2)',
          lineHeight: 'var(--text-body-leading)',
          maxWidth: '640px',
          marginBottom: exp.technologies?.length ? 'var(--sp-3)' : 0,
        }}
      >
        {exp.description}
      </p>

      {/* Technology metadata */}
      {exp.technologies && exp.technologies.length > 0 && (
        <p style={{ fontSize: 'var(--text-meta)', color: 'var(--color-fg-3)' }}>
          {exp.technologies.join(' · ')}
        </p>
      )}
    </article>
  )
}
