import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import { useLang } from '../context/LangContext'
import LanguageSwitcher from './LanguageSwitcher'
import { CHURCH_NAME, CHURCH_TAGLINE, CONTACT, MINISTRIES, SOCIALS } from '../data/siteData'

export default function Footer() {
  const { t } = useLang()
  const quickLinks = [
    { label: t.nav.home, to: '/' },
    { label: t.nav.about, to: '/about' },
    { label: t.nav.ministries, to: '/ministries' },
    { label: t.nav.services, to: '/services' },
    { label: t.nav.branches, to: '/branches' },
    { label: t.nav.giving, to: '/giving' },
  ]

  return (
    <footer className="bg-gmc-surface border-t border-gmc-border">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4">
              <h3 className="font-display text-2xl font-bold text-white">{CHURCH_NAME}</h3>
              <p className="mt-1 text-sm text-gmc-gold">{CHURCH_TAGLINE}</p>
            </div>
            <p className="text-sm leading-relaxed text-gmc-muted">{CONTACT.address}</p>
            <a href={CONTACT.maps} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sm text-gmc-gold hover:text-gmc-gold-light transition-colors">
              <MapPin className="h-4 w-4" /> Visit on Google Maps
            </a>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">{t.nav.home === 'Home' ? 'Quick Links' : 'Viungo'}</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.to}><Link to={l.to} className="text-sm text-gmc-muted hover:text-gmc-gold transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">{t.nav.ministries}</h4>
            <ul className="space-y-2">
              {MINISTRIES.slice(0, 6).map((m) => (
                <li key={m.id}><Link to={`/ministries/${m.id}`} className="text-sm text-gmc-muted hover:text-gmc-gold transition-colors">{m.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">{t.services.title}</h4>
            <div className="space-y-2 text-sm">
              <p><span className="text-gmc-gold">Sunday:</span> <span className="text-gmc-muted">9:00 AM</span></p>
              <p><span className="text-gmc-gold">Wednesday:</span> <span className="text-gmc-muted">7:00 PM</span></p>
              <p><span className="text-gmc-gold">Saturday:</span> <span className="text-gmc-muted">5:00 PM</span></p>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <LanguageSwitcher />
            </div>
            <div className="mt-4 flex gap-3">
              <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gmc-muted hover:text-gmc-gold transition-colors">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" /></svg>
              </a>
              <a href={SOCIALS.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gmc-muted hover:text-gmc-gold transition-colors">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-2A29 29 0 0023 12a29 29 0 00-.46-5.58z" /></svg>
              </a>
              <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gmc-muted hover:text-gmc-gold transition-colors">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm-4 11a3 3 0 110-6 3 3 0 010 6zm3.5-6.5a1 1 0 110-2 1 1 0 010 2z" /></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gmc-border pt-6 text-center text-xs text-gmc-muted">
          <p>&copy; {new Date().getFullYear()} {CHURCH_NAME}. {t.footer.rights}</p>
          <p className="mt-1">{t.footer.credits} <Link to="/credits" className="underline hover:text-gmc-gold">View credits</Link></p>
        </div>
      </div>
    </footer>
  )
}
