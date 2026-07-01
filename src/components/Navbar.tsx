import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '../lib/utils'

import { MINISTRIES } from '../data/siteData'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Ministries', to: '/ministries', children: MINISTRIES.slice(0, 8).map(m => ({ label: m.name, to: `/ministries/${m.id}` })) },
  { label: 'Services', to: '/services' },
  { label: 'Branches', to: '/branches' },
  { label: 'Give', to: '/giving' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false); setDropdownOpen(null) }, [location])

  return (
    <header className={cn(
      'sticky top-0 z-50 transition-all duration-300',
      scrolled ? 'bg-gmc-dark/95 backdrop-blur-md shadow-lg' : 'bg-gmc-dark/80'
    )}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gmc-gold text-gmc-dark font-display font-bold text-lg">
            GMC
          </div>
          <div className="hidden sm:block">
            <div className="font-display text-lg font-bold leading-tight text-white">Growing Missionaries</div>
            <div className="text-xs text-gmc-gold">Centre</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.to}
              className="relative"
              onMouseEnter={() => link.children && setDropdownOpen(link.to)}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <Link
                to={link.to}
                className={cn(
                  'flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  location.pathname === link.to || (link.children && location.pathname.startsWith('/ministries') && link.to === '/ministries')
                    ? 'text-gmc-gold bg-gmc-gold/10'
                    : 'text-gmc-muted hover:text-gmc-gold hover:bg-gmc-gold/5'
                )}
              >
                {link.label}
                {link.children && <ChevronDown className={cn('h-3.5 w-3.5 transition-transform', dropdownOpen === link.to && 'rotate-180')} />}
              </Link>
              {link.children && dropdownOpen === link.to && (
                <div className="absolute left-0 top-full mt-1 w-56 rounded-xl border border-gmc-border bg-gmc-surface p-2 shadow-2xl shadow-black/50">
                  {link.children.map((child) => (
                    <Link
                      key={child.to}
                      to={child.to}
                      className={cn(
                        'block rounded-lg px-3 py-2 text-sm transition-colors',
                        location.pathname === child.to ? 'text-gmc-gold bg-gmc-gold/10' : 'text-gmc-muted hover:text-gmc-gold hover:bg-gmc-gold/5'
                      )}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden rounded-lg p-2 text-gmc-muted hover:text-gmc-gold transition-colors"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-gmc-border bg-gmc-dark/95 backdrop-blur-md">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <div key={link.to}>
                <Link
                  to={link.to}
                  className={cn(
                    'block rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                    location.pathname === link.to ? 'text-gmc-gold bg-gmc-gold/10' : 'text-gmc-muted hover:text-gmc-gold'
                  )}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4 space-y-1 pb-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className={cn(
                          'block rounded-lg px-3 py-1.5 text-xs transition-colors',
                          location.pathname === child.to ? 'text-gmc-gold' : 'text-gmc-muted hover:text-gmc-gold'
                        )}
                      >
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
  )
}
