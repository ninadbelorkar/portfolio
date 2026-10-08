'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, Briefcase, FolderOpen, Wrench, User, Mail, FileText, ExternalLink, Download, X } from 'lucide-react'

const NAV = [
  { id: 'home',       label: 'Home',       icon: Home },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects',   label: 'Projects',   icon: FolderOpen },
  { id: 'skills',     label: 'Skills',     icon: Wrench },
  { id: 'about',      label: 'About',      icon: User },
  { id: 'contact',    label: 'Contact',    icon: Mail },
] as const

export default function FloatingDock() {
  const [active,      setActive]      = useState('home')
  const [hovered,     setHovered]     = useState<string | null>(null)
  const [resumeOpen,  setResumeOpen]  = useState(false)
  const popRef = useRef<HTMLDivElement>(null)

  /* Active section via IntersectionObserver — defaults to 'home' */
  useEffect(() => {
    const obs: IntersectionObserver[] = []

    // If at very top of page, always keep 'home' active
    const handleScroll = () => {
      if (window.scrollY < 80) setActive('home')
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    NAV.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const o = new IntersectionObserver(
        ([e]) => {
          // Only update active when section is well within viewport
          // and user has scrolled past the very top
          if (e.isIntersecting && window.scrollY >= 80) setActive(id)
        },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      )
      o.observe(el)
      obs.push(o)
    })

    return () => {
      obs.forEach(o => o.disconnect())
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  /* Close resume popover on outside click */
  useEffect(() => {
    if (!resumeOpen) return
    const handler = (e: MouseEvent) => {
      if (popRef.current && !popRef.current.contains(e.target as Node)) setResumeOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [resumeOpen])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setResumeOpen(false)
  }

  return (
    /* Outer wrapper: fixed, centered horizontally */
    <div style={{ position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)', zIndex: 50, paddingBottom: '20px', pointerEvents: 'none' }}>
      <motion.nav
        aria-label="Site navigation"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0,  opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.35 }}
        style={{ pointerEvents: 'auto' }}
      >
        <div className="dock-inner" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '3px',
          padding: '6px 10px',
          borderRadius: 'var(--radius-dock)',
          background: 'rgba(255,255,255,0.94)',
          border: 'var(--border-1)',
          boxShadow: '0 6px 24px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}>

          {/* Nav items */}
          {NAV.map(({ id, label, icon: Icon }) => {
            const isActive = active === id
            return (
              <div key={id} style={{ position: 'relative' }}>
                <AnimatePresence>
                  {hovered === id && (
                    <motion.span
                      key="tip"
                      role="tooltip"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.1 }}
                      style={{
                        position: 'absolute', bottom: '44px', left: '50%', transform: 'translateX(-50%)',
                        padding: '3px 8px', fontSize: '11px', fontWeight: 500,
                        background: 'var(--color-fg)', color: '#fff',
                        borderRadius: '5px', whiteSpace: 'nowrap', pointerEvents: 'none',
                      }}
                    >
                      {label}
                    </motion.span>
                  )}
                </AnimatePresence>
                <motion.button
                  onClick={() => scrollTo(id)}
                  onHoverStart={() => setHovered(id)}
                  onHoverEnd={() => setHovered(null)}
                  aria-label={label}
                  aria-current={isActive ? 'page' : undefined}
                  animate={{
                    backgroundColor: isActive ? 'var(--color-fg)' : 'rgba(0,0,0,0)',
                    color: isActive ? '#ffffff' : 'var(--color-fg-3)',
                  }}
                  whileHover={isActive ? {} : { backgroundColor: 'var(--color-bg-2)', color: 'var(--color-fg)' }}
                  transition={{ duration: 0.14 }}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: '38px', height: '38px', borderRadius: '50%',
                    border: 'none', cursor: 'pointer', flexShrink: 0,
                  }}
                  className="dock-btn"
                >
                  <Icon size={16} className="dock-icon" />
                </motion.button>
              </div>
            )
          })}

          {/* Separator */}
          <div aria-hidden style={{ width: '1px', height: '18px', backgroundColor: 'var(--color-border)', margin: '0 4px', flexShrink: 0 }} />

          {/* Resume button */}
          <div ref={popRef} style={{ position: 'relative' }}>
            <AnimatePresence>
              {hovered === 'resume' && !resumeOpen && (
                <motion.span
                  key="resume-tip"
                  role="tooltip"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  style={{
                    position: 'absolute', bottom: '44px', left: '50%', transform: 'translateX(-50%)',
                    padding: '3px 8px', fontSize: '11px', fontWeight: 500,
                    background: 'var(--color-fg)', color: '#fff',
                    borderRadius: '5px', whiteSpace: 'nowrap', pointerEvents: 'none',
                  }}
                >
                  Resume
                </motion.span>
              )}
            </AnimatePresence>

            <motion.button
              onClick={() => setResumeOpen(v => !v)}
              onHoverStart={() => setHovered('resume')}
              onHoverEnd={() => setHovered(null)}
              aria-label="Resume"
              aria-expanded={resumeOpen}
              animate={{
                backgroundColor: resumeOpen ? 'var(--color-accent)' : 'rgba(0,0,0,0)',
                color: resumeOpen ? '#fff' : 'var(--color-fg-3)',
              }}
              whileHover={resumeOpen ? {} : { backgroundColor: 'var(--color-bg-2)', color: 'var(--color-fg)' }}
              transition={{ duration: 0.14 }}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '38px', height: '38px', borderRadius: '50%',
                border: 'none', cursor: 'pointer', flexShrink: 0,
              }}
            >
              <FileText size={16} />
            </motion.button>

            {/* Resume popover */}
            <AnimatePresence>
              {resumeOpen && (
                <motion.div
                  key="resume-pop"
                  role="menu"
                  aria-label="Resume options"
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0,  scale: 1 }}
                  exit={{ opacity: 0, y: 4,  scale: 0.97 }}
                  transition={{ duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{
                    position: 'absolute', bottom: '52px', right: 0,
                    width: '172px',
                    background: 'var(--color-surface)',
                    border: 'var(--border-1)',
                    borderRadius: 'var(--radius-card)',
                    boxShadow: 'var(--shadow-card-hover)',
                    overflow: 'hidden',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px 7px', borderBottom: 'var(--border-1)' }}>
                    <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-fg-3)' }}>Resume</span>
                    <button onClick={() => setResumeOpen(false)} aria-label="Close" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-fg-3)', display: 'flex', padding: 0 }}>
                      <X size={11} />
                    </button>
                  </div>
                  <PopOption href="/resume/Ninad_Belorkar_VIT.pdf" icon={<ExternalLink size={13} />} label="View Resume"   target="_blank"                        onClose={() => setResumeOpen(false)} />
                  <PopOption href="/resume/Ninad_Belorkar_VIT.pdf" icon={<Download size={13} />}     label="Download"      download="Ninad-Belorkar-Resume.pdf"    onClose={() => setResumeOpen(false)} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </motion.nav>
    </div>
  )
}

function PopOption({ href, icon, label, target, download, onClose }: {
  href: string; icon: React.ReactNode; label: string;
  target?: string; download?: string; onClose: () => void
}) {
  return (
    <motion.a
      href={href}
      target={target}
      rel={target ? 'noopener noreferrer' : undefined}
      download={download}
      role="menuitem"
      onClick={onClose}
      whileHover={{ backgroundColor: 'var(--color-bg)' }}
      transition={{ duration: 0.1 }}
      style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', fontSize: 'var(--text-meta)', color: 'var(--color-fg)', textDecoration: 'none' }}
    >
      <span style={{ color: 'var(--color-fg-3)' }}>{icon}</span>
      {label}
    </motion.a>
  )
}
