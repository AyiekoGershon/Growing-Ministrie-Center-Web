import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react'
import { useLang } from '../context/LangContext'
import LanguageSwitcher from './LanguageSwitcher'
import { MINISTRIES, CONTACT, SOCIALS } from '../data/siteData'
import { cn } from '../lib/utils'

const navLinks = [
  { labelKey: 'home', to: '/' },
  { labelKey: 'about', to: '/about' },
  { labelKey: 'ministries', to: '/ministries', children: MINISTRIES.map(m => ({ label: m.name, to: `/ministries/${m.id}` })) },
  { labelKey: 'sermons', to: '/sermons' },
  { labelKey: 'blog', to: '/blog' },
  { labelKey: 'services', to: '/services' },
  { labelKey: 'branches', to: '/branches' },
  { labelKey: 'giving', to: '/giving' },
  { labelKey: 'contact', to: '/contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [ddOpen, setDdOpen] = useState<string | null>(null)
  const location = useLocation()
  const { t } = useLang()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false); setDdOpen(null) }, [location])

  const linkClass = (to: string) => cn(
    'relative px-3 py-2 text-sm font-medium transition-colors rounded-lg',
    location.pathname === to || (to === '/ministries' && location.pathname.startsWith('/ministries'))
      ? 'text-gmc-gold'
      : 'text-gmc-muted hover:text-gmc-gold'
  )

  return (
    <>
      {/* Top bar */}
      <div className={cn('hidden md:block relative z-50 transition-all', scrolled ? 'h-0 overflow-hidden' : 'bg-gmc-surface/80 border-b border-gmc-border')}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs">
          <div className="flex items-center gap-4">
            <a href={`tel:${CONTACT.phone[0].replace(/\s/g, '')}`} className="flex items-center gap-1.5 text-gmc-muted hover:text-gmc-gold transition-colors">
              <Phone className="h-3 w-3" /> {CONTACT.phone[0]}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-1.5 text-gmc-muted hover:text-gmc-gold transition-colors">
              <Mail className="h-3 w-3" /> {CONTACT.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gmc-muted hover:text-gmc-gold transition-colors">
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" /></svg>
            </a>
            <a href={SOCIALS.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gmc-muted hover:text-gmc-gold transition-colors">
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-2A29 29 0 0023 12a29 29 0 00-.46-5.58z" /></svg>
            </a>
            <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gmc-muted hover:text-gmc-gold transition-colors">
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm-4 11a3 3 0 110-6 3 3 0 010 6zm3.5-6.5a1 1 0 110-2 1 1 0 010 2z" /></svg>
            </a>
          </div>
          <LanguageSwitcher />
        </div>
      </div>

      {/* Navbar */}
      <header className={cn(
        'sticky top-0 z-40 transition-all duration-300',
        scrolled ? 'glass shadow-xl' : 'bg-transparent'
      )}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-3">
            <img src="/images/logo.png" alt="GMC Logo" className="h-10 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.to} className="relative" onMouseEnter={() => link.children && setDdOpen(link.to)} onMouseLeave={() => setDdOpen(null)}>
                <Link to={link.to} className={cn(linkClass(link.to), 'flex items-center gap-1')}>
                  {t.nav[link.labelKey as keyof typeof t.nav]}
                  {link.children && <ChevronDown className={cn('h-3 w-3 transition-transform', ddOpen === link.to && 'rotate-180')} />}
                </Link>
                {link.children && ddOpen === link.to && (
                  <div className="absolute left-0 top-full mt-2 w-56 rounded-2xl border border-gmc-border bg-gmc-surface/95 backdrop-blur-xl p-2 shadow-2xl shadow-black/50">
                    {link.children.map((child) => (
                      <Link key={child.to} to={child.to} className={cn(
                        'block rounded-xl px-3 py-2 text-sm transition-colors',
                        location.pathname === child.to ? 'text-gmc-gold bg-gmc-gold/10' : 'text-gmc-muted hover:text-gmc-gold hover:bg-gmc-gold/5'
                      )}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <button onClick={() => setOpen(!open)} className="rounded-lg p-2 text-gmc-muted hover:text-gmc-gold transition-colors">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-gmc-border bg-gmc-surface/95 backdrop-blur-xl">
            <div className="space-y-1 px-4 py-4">
              {navLinks.map((link) => (
                <div key={link.to}>
                  <Link to={link.to} className={cn('block rounded-lg px-3 py-2 text-sm font-medium transition-colors', linkClass(link.to))}>
                    {t.nav[link.labelKey as keyof typeof t.nav]}
                  </Link>
                  {link.children && (
                    <div className="ml-4 space-y-1 pb-2">
                      {link.children.map((child) => (
                        <Link key={child.to} to={child.to} className={cn(
                          'block rounded-lg px-3 py-1.5 text-xs transition-colors',
                          location.pathname === child.to ? 'text-gmc-gold' : 'text-gmc-muted hover:text-gmc-gold'
                        )}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  )
}
