import type { Metadata } from 'next'
import Link from 'next/link'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/sections/Projects'
import Footer from '@/components/sections/Footer'
import FadeIn from '@/components/ui/FadeIn'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Projects — Ninad Belorkar',
  description: 'All projects by Ninad Belorkar — software engineering, cloud infrastructure, AI integration, and testing.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Projects — Ninad Belorkar',
    description: 'All projects by Ninad Belorkar.',
    url: 'https://ninadbelorkar.space/projects',
  },
}

export default function ProjectsPage() {
  const featured = projects.filter(p => p.featured)
  const all      = projects

  return (
    <>
      <main style={{ minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}>

        {/* Page header */}
        <div
          className="c"
          style={{ paddingTop: 'var(--sp-12)', paddingBottom: 'var(--sp-12)' }}
        >
          <FadeIn>
            <Link
              href="/"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                fontSize: 'var(--text-meta)', color: 'var(--color-fg-3)',
                marginBottom: 'var(--sp-8)', transition: 'color 0.15s',
              }}
            >
              <ArrowLeft size={13} /> Back
            </Link>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h1 style={{
              fontSize: 'var(--text-h1)',
              fontWeight: 'var(--text-h1-weight)',
              letterSpacing: 'var(--text-h1-tracking)',
              color: 'var(--color-fg)',
              marginBottom: 'var(--sp-3)',
            }}>
              Projects
            </h1>
            <p style={{ fontSize: 'var(--text-body)', color: 'var(--color-fg-2)', lineHeight: 'var(--text-body-leading)', maxWidth: '480px' }}>
              Things I&apos;ve built — software engineering, cloud infrastructure, AI integration, and testing.
            </p>
          </FadeIn>
        </div>

        {/* Featured — same ProjectCard component */}
        {featured.length > 0 && (
          <div
            className="s"
            style={{ backgroundColor: 'var(--color-surface)', borderTop: 'var(--border-1)', borderBottom: 'var(--border-1)' }}
          >
            <div className="c">
              <FadeIn><span className="eyebrow">Featured</span></FadeIn>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-6)' }}>
                {featured.map((p, i) => (
                  <FadeIn key={p.slug} delay={i * 0.08}>
                    <ProjectCard project={p} />
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* All projects */}
        <div className="s">
          <div className="c">
            <FadeIn><span className="eyebrow">All Projects</span></FadeIn>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 'var(--sp-4)' }}>
              {all.map((p, i) => (
                <FadeIn key={p.slug} delay={i * 0.05}>
                  <ProjectCard project={p} />
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
