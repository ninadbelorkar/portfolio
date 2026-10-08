import FadeIn from '@/components/ui/FadeIn'
import { social } from '@/data/social'
import LinkButton from '@/components/ui/LinkButton'
import { GitHubIcon, LinkedInIcon } from '@/components/ui/SocialIcons'
import { Mail, Download } from 'lucide-react'

export default function Contact() {
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

          <FadeIn delay={0.14}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-2)', marginBottom: 'var(--sp-6)' }}>
              <LinkButton href={social.email} variant="primary" id="contact-email">
                <Mail size={13} /> Email Me
              </LinkButton>
              <LinkButton href={social.linkedin} variant="secondary" id="contact-linkedin">
                <LinkedInIcon size={13} /> LinkedIn
              </LinkButton>
              <LinkButton href={social.github} variant="secondary" id="contact-github">
                <GitHubIcon size={13} /> GitHub
              </LinkButton>
            </div>
          </FadeIn>

          <FadeIn delay={0.17}>
            <div style={{ borderTop: 'var(--border-1)', paddingTop: 'var(--sp-5)' }}>
              <LinkButton
                href="/resume/Ninad_Belorkar_VIT.pdf"
                variant="secondary"
                download="Ninad-Belorkar-Resume.pdf"
                id="contact-resume"
              >
                <Download size={13} /> Download Resume
              </LinkButton>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
