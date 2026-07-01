import { SERVICES } from '../data/siteData'
import { cn } from '../lib/utils'

export default function Services() {
  return (
    <main>
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden bg-gmc-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-gmc-dark/80 to-gmc-gold/20 z-10" />
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/a/af/Worship_section_in_a_church_05.jpg)' }} />
        <div className="relative z-20 text-center px-4">
          <span className="inline-block rounded-full border border-gmc-gold/40 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gmc-gold mb-4">Join Us</span>
          <h1 className="font-display text-5xl font-black text-white md:text-7xl">Weekly <span className="text-gmc-gold">Services</span></h1>
          <p className="mx-auto mt-4 max-w-2xl text-gmc-muted text-lg">Come and experience the presence and power of God</p>
        </div>
      </section>
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="overflow-hidden rounded-2xl border border-gmc-border">
            {SERVICES.map((svc, i) => (
              <div key={i} className={cn(
                'flex items-center justify-between px-6 py-5 text-sm transition-colors',
                i === 0 ? 'bg-gmc-gold/10 text-gmc-gold font-semibold border-b border-gmc-border' : 'border-b border-gmc-border/50 hover:bg-gmc-gold/5',
                i === SERVICES.length - 1 && 'border-b-0'
              )}>
                <span className="w-24 font-medium text-white">{svc.day}</span>
                <span className="flex-1 text-gmc-muted">{svc.name}</span>
                <span className="text-gmc-gold">{svc.time}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-gmc-border bg-gmc-card p-8 text-center">
            <h3 className="font-display text-2xl font-bold text-white">Visit Us</h3>
            <p className="mt-2 text-gmc-muted">We are located in Isebania, Kenya. All are welcome!</p>
            <a href="https://maps.app.goo.gl/HUYZRL6RkqP261528" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block rounded-xl bg-gmc-gold px-6 py-3 font-semibold text-gmc-dark transition-transform hover:scale-105">
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
