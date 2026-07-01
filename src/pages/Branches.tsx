import { cn } from '../lib/utils'
import { BRANCHES } from '../data/siteData'

export default function Branches() {
  return (
    <main>
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden bg-gmc-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-gmc-dark/80 to-gmc-gold/20 z-10" />
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/a/af/Worship_section_in_a_church_05.jpg)' }} />
        <div className="relative z-20 text-center px-4">
          <span className="inline-block rounded-full border border-gmc-gold/40 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gmc-gold mb-4">Church Branches</span>
          <h1 className="font-display text-5xl font-black text-white md:text-7xl">GMC Ministry <span className="text-gmc-gold">Network</span></h1>
          <p className="mx-auto mt-4 max-w-2xl text-gmc-muted text-lg">Explore the growing fellowship of branch churches serving communities across the region.</p>
        </div>
      </section>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {BRANCHES.map((branch) => (
              <div key={branch.name} className="group overflow-hidden rounded-2xl border border-gmc-border bg-gmc-card">
                <div className="grid grid-cols-2 gap-1 p-1">
                  {branch.images.slice(0, 4).map((src, i) => (
                    <div key={i} className={cn('overflow-hidden rounded-lg', i === 0 && 'col-span-2 row-span-2')}>
                      <img
                        src={src}
                        alt={`${branch.name} branch`}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://placehold.co/400x300/151520/d4a84b?text=${encodeURIComponent(branch.name)}`
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="p-4">
                  <h3 className="font-display text-lg font-bold text-white">{branch.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
