'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { projects, type Project } from '@/data/projects'
import LinkButton from '@/components/ui/LinkButton'
import FadeIn from '@/components/ui/FadeIn'
import { GitHubIcon } from '@/components/ui/SocialIcons'
import { ExternalLink } from 'lucide-react'

export default function Projects() {
  const featured = projects.filter(p => p.featured)

  return (
    <section
      id="projects"
      aria-label="Featured projects"
      className="s"
      style={{ backgroundColor: 'var(--color-bg-2)', borderTop: 'var(--border-1)' }}
    >
      <div className="c">
        <FadeIn>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--sp-10)' }}>
            <span className="eyebrow" style={{ marginBottom: 0 }}>Projects</span>
            <Link
              href="/projects"
              style={{ fontSize: 'var(--text-meta)', color: 'var(--color-fg-3)', transition: 'color 0.15s' }}
              onMouseOver={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-fg)')}
              onMouseOut={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-fg-3)')}
            >
              All projects →
            </Link>
          </div>
        </FadeIn>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-6)' }}>
          {featured.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.1}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      aria-label={project.title}
      style={{
        backgroundColor: 'var(--color-surface)',
        border: 'var(--border-1)',
        borderRadius: 'var(--radius-card)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-card)',
      }}
      whileHover={{ y: -3, boxShadow: 'var(--shadow-card-hover)' }}
      transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Poster — shown when poster path set; neutral placeholder otherwise */}
      {project.poster ? (
        <div style={{ width: '100%', height: '280px', position: 'relative', backgroundColor: 'var(--color-bg-2)', overflow: 'hidden' }}>
          <motion.div
            style={{ position: 'absolute', inset: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.22 }}
          >
            <Image
              src={project.poster}
              alt={`${project.title} poster`}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </motion.div>
        </div>
      ) : (
        <div style={{ width: '100%', height: '280px', backgroundColor: 'var(--color-bg-2)', borderBottom: 'var(--border-1)' }} />
      )}

      <div className="card-body" style={{ padding: 'var(--sp-8) var(--sp-10)' }}>
        {/* Title */}
        <h3 style={{
          fontSize: 'var(--text-title)',
          fontWeight: 'var(--text-title-weight)',
          letterSpacing: 'var(--text-title-tracking)',
          color: 'var(--color-fg)',
          lineHeight: 1.2,
          marginBottom: 'var(--sp-3)',
        }}>
          {project.title}
        </h3>

        {/* Description */}
        <p style={{ fontSize: 'var(--text-body)', color: 'var(--color-fg-2)', lineHeight: 'var(--text-body-leading)', marginBottom: 'var(--sp-6)', maxWidth: '720px' }}>
          {project.description}
        </p>

        {/* Engineering details */}
        {(project.problem || project.whatIBuilt || project.engineering) && (
          <div style={{ borderTop: 'var(--border-1)', paddingTop: 'var(--sp-5)', marginBottom: 'var(--sp-6)', display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
            {project.problem && (
              <DetailRow label="Problem" text={project.problem} />
            )}
            {project.whatIBuilt && (
              <DetailRow label="Built" text={project.whatIBuilt} />
            )}
            {project.engineering && (
              <DetailRow label="Engineering" text={project.engineering} />
            )}
          </div>
        )}

        {/* Footer: technology + buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--sp-4)' }}>
          <p style={{ fontSize: 'var(--text-meta)', color: 'var(--color-fg-3)' }}>
            {project.technologies.join(' · ')}
          </p>
          <div style={{ display: 'flex', gap: 'var(--sp-2)', flexWrap: 'wrap' }}>
            {project.github && (
              <LinkButton href={project.github} variant="primary" id={`gh-${project.slug}`}>
                <GitHubIcon size={13} />
                GitHub Repository
              </LinkButton>
            )}
            {project.liveDemo && (
              <LinkButton href={project.liveDemo} variant="secondary" id={`demo-${project.slug}`}>
                <ExternalLink size={13} />
                Live Demo
              </LinkButton>
            )}
            {project.additionalLinks?.map(l => (
              <LinkButton key={l.label} href={l.url} variant="secondary">
                {l.label}
              </LinkButton>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

function DetailRow({ label, text }: { label: string; text: string }) {
  return (
    <div style={{ display: 'flex', gap: 'var(--sp-4)', alignItems: 'baseline' }}>
      <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'var(--color-fg-3)', flexShrink: 0, minWidth: '76px' }}>
        {label}
      </span>
      <p style={{ fontSize: 'var(--text-small)', color: 'var(--color-fg-2)', lineHeight: 'var(--text-small-leading)' }}>
        {text}
      </p>
    </div>
  )
}
