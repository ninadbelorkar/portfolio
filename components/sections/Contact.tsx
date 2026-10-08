'use client'

import { useState, useRef, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import FadeIn from '@/components/ui/FadeIn'
import { social } from '@/data/social'
import LinkButton from '@/components/ui/LinkButton'
import { GitHubIcon, LinkedInIcon, InstagramIcon } from '@/components/ui/SocialIcons'
import { Mail, FileText, ExternalLink, Download, ChevronDown, X } from 'lucide-react'

export default function Contact() {
  const [resumeOpen, setResumeOpen] = useState(false)
  const popRef = useRef<HTMLDivElement>(null)

  /* Close on outside click */
  useEffect(() => {
    if (!resumeOpen) return
    const handler = (e: MouseEvent) => {
      if (popRef.current && !popRef.current.contains(e.target as Node)) setResumeOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [resumeOpen])

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="s"
      style={{ backgroundColor: 'var(--color-surface)', borderTop: 'var(--border-1)' }}
    >
      <div className="c">
        <FadeIn><span className="eyebrow">Contact</span></FadeIn>

        <div style={{ maxWidth: '560px' }}>
          <FadeIn delay={0.06}>
            <h2 style={{
              fontSize: 'var(--text-h1)',
              fontWeight: 'var(--text-h1-weight)',
              letterSpacing: 'var(--text-h1-tracking)',
              color: 'var(--color-fg)',
              lineHeight: 1.15,
              marginBottom: 'var(--sp-6)',
            }}>
              Have an opportunity<br />or want to connect?
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p style={{ fontSize: 'var(--text-body)', color: 'var(--color-fg-2)', lineHeight: 'var(--text-body-leading)', marginBottom: 'var(--sp-8)' }}>
              I&apos;m always open to conversations about software engineering,
              technology and opportunities.
            </p>
          </FadeIn>

          {/* Social action buttons */}
          <FadeIn delay={0.14}>
            <div className="contact-actions" style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-2)', marginBottom: 'var(--sp-6)' }}>
              <LinkButton href={social.email} variant="primary" id="contact-email">
                <Mail size={13} /> Email Me
              </LinkButton>
              <LinkButton href={social.linkedin} variant="secondary" id="contact-linkedin">
                <LinkedInIcon size={13} /> LinkedIn
              </LinkButton>
              <LinkButton href={social.github} variant="secondary" id="contact-github">
                <GitHubIcon size={13} /> GitHub
              </LinkButton>
              {social.instagram && (
                <LinkButton href={social.instagram} variant="secondary" id="contact-instagram">
                  <InstagramIcon size={13} /> Instagram
                </LinkButton>
              )}
            </div>
          </FadeIn>

          {/* Resume — dropdown with View + Download */}
          <FadeIn delay={0.17}>
            <div style={{ borderTop: 'var(--border-1)', paddingTop: 'var(--sp-5)' }}>
              <div ref={popRef} style={{ position: 'relative', display: 'inline-block' }}>
                <button
                  id="contact-resume"
                  aria-expanded={resumeOpen}
                  aria-haspopup="menu"
                  onClick={() => setResumeOpen(v => !v)}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    padding: '8px 14px',
                    fontSize: 'var(--text-meta)', fontWeight: 500,
                    color: 'var(--color-fg-2)',
                    backgroundColor: 'transparent',
                    border: 'var(--border-1)',
                    borderRadius: 'var(--radius-btn)',
                    cursor: 'pointer',
                    transition: 'background 0.15s, color 0.15s',
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.backgroundColor = 'var(--color-bg-2)'
                    e.currentTarget.style.color = 'var(--color-fg)'
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = 'var(--color-fg-2)'
                  }}
                >
                  <FileText size={13} />
                  Resume
                  <ChevronDown size={12} style={{ transform: resumeOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.15s' }} />
                </button>

                <AnimatePresence>
                  {resumeOpen && (
                    <motion.div
                      key="resume-pop"
                      role="menu"
                      aria-label="Resume options"
                      initial={{ opacity: 0, y: 6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 3, scale: 0.98 }}
                      transition={{ duration: 0.14, ease: [0.25, 0.46, 0.45, 0.94] }}
                      style={{
                        position: 'absolute', bottom: '44px', left: 0,
                        width: '160px',
                        backgroundColor: 'var(--color-surface)',
                        border: 'var(--border-1)',
                        borderRadius: '10px',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.10)',
                        overflow: 'hidden',
                        zIndex: 40,
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px 6px', borderBottom: 'var(--border-1)' }}>
                        <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-fg-3)' }}>Resume</span>
                        <button onClick={() => setResumeOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-fg-3)', padding: 0, display: 'flex' }} aria-label="Close">
                          <X size={11} />
                        </button>
                      </div>
                      <PopOption
                        href="/resume/Ninad_Belorkar_VIT.pdf"
                        icon={<ExternalLink size={13} />}
                        label="View Resume"
                        target="_blank"
                        onClose={() => setResumeOpen(false)}
                      />
                      <PopOption
                        href="/resume/Ninad_Belorkar_VIT.pdf"
                        icon={<Download size={13} />}
                        label="Download"
                        download="Ninad-Belorkar-Resume.pdf"
                        onClose={() => setResumeOpen(false)}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

function PopOption({ href, icon, label, target, download, onClose }: {
  href: string; icon: React.ReactNode; label: string
  target?: string; download?: string; onClose: () => void
}) {
  return (
    <a
      href={href}
      target={target}
      download={download}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      role="menuitem"
      onClick={onClose}
      style={{
        display: 'flex', alignItems: 'center', gap: '8px',
        padding: '9px 12px',
        fontSize: 'var(--text-meta)', color: 'var(--color-fg-2)',
        textDecoration: 'none', transition: 'background 0.12s, color 0.12s',
      }}
      onMouseOver={e => {
        e.currentTarget.style.backgroundColor = 'var(--color-bg-2)'
        e.currentTarget.style.color = 'var(--color-fg)'
      }}
      onMouseOut={e => {
        e.currentTarget.style.backgroundColor = ''
        e.currentTarget.style.color = 'var(--color-fg-2)'
      }}
    >
      {icon}
      <span>{label}</span>
    </a>
  )
}
