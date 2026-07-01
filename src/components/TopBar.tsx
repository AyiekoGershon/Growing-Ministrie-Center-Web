import { Phone, Mail } from 'lucide-react'
import { CONTACT, SOCIALS } from '../data/siteData'

const socialIcons = [
  { href: SOCIALS.facebook, label: 'Facebook', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z' },
  { href: SOCIALS.youtube, label: 'YouTube', path: 'M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-2A29 29 0 0023 12a29 29 0 00-.46-5.58z' },
  { href: SOCIALS.instagram, label: 'Instagram', path: 'M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm-4 11a3 3 0 110-6 3 3 0 010 6zm3.5-6.5a1 1 0 110-2 1 1 0 010 2z' },
]

export default function TopBar() {
  return (
    <div className="hidden md:block bg-gmc-surface border-b border-gmc-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 text-gmc-gold" />
            <a href={`tel:${CONTACT.phone[0].replace(/\s/g, '')}`} className="text-gmc-muted hover:text-gmc-gold transition-colors">
              {CONTACT.phone[0]}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-3.5 w-3.5 text-gmc-gold" />
            <a href={`mailto:${CONTACT.email}`} className="text-gmc-muted hover:text-gmc-gold transition-colors">
              {CONTACT.email}
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {socialIcons.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-gmc-muted hover:text-gmc-gold transition-colors"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d={s.path} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
