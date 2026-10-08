'use client'

import { social } from '@/data/social'
import { GitHubIcon, LinkedInIcon, InstagramIcon } from '@/components/ui/SocialIcons'
import { Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderTop: 'var(--border-1)',
        paddingTop: 'var(--sp-6)',
        paddingBottom: '96px', /* clearance for dock */
      }}
    >
      <div
        className="c"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--sp-3)' }}
      >
        <span style={{ fontSize: 'var(--text-meta)', fontWeight: 600, color: 'var(--color-fg)' }}>
          Ninad Belorkar
        </span>
        <nav aria-label="Social links" style={{ display: 'flex', alignItems: 'center' }}>
          <FL href={social.github}   label="GitHub"    text="GitHub"    icon={<GitHubIcon size={13} />} />
          <Sep />
          <FL href={social.linkedin} label="LinkedIn"  text="LinkedIn"  icon={<LinkedInIcon size={13} />} />
          {social.instagram && (
            <><Sep /><FL href={social.instagram} label="Instagram" text="Instagram" icon={<InstagramIcon size={13} />} /></>
          )}
          <Sep />
          <FL href={social.email}    label="Email"     text="Email"     icon={<Mail size={13} />} />
        </nav>
      </div>
    </footer>
  )
}

function FL({ href, label, text, icon }: { href: string; label: string; text: string; icon: React.ReactNode }) {
  const isExt = href.startsWith('http')
  return (
    <a
      href={href}
      aria-label={label}
      target={isExt ? '_blank' : undefined}
      rel={isExt ? 'noopener noreferrer' : undefined}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '5px',
        padding: '4px 8px',
        fontSize: 'var(--text-meta)',
        color: 'var(--color-fg-3)',
        borderRadius: '4px',
        transition: 'color 0.15s',
      }}
      onMouseOver={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-fg)')}
      onMouseOut={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-fg-3)')}
    >
      {icon}
      <span>{text}</span>
    </a>
  )
}

function Sep() {
  return (
    <span aria-hidden style={{ color: 'var(--color-border)', fontSize: '14px', padding: '0 1px', userSelect: 'none' }}>·</span>
  )
}
