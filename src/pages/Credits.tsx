import { IMAGE_CREDITS } from '../data/siteData'

export default function Credits() {
  return (
    <main>
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="font-display text-4xl font-bold text-white mb-8">Image Credits</h1>
          <p className="text-gmc-muted mb-6">We use images under Creative Commons licenses. Attribution details below.</p>
          <div className="space-y-4">
            {IMAGE_CREDITS.map((c, i) => (
              <div key={i} className="rounded-xl border border-gmc-border bg-gmc-card p-4 text-sm">
                <p className="text-white font-medium">{c.file}</p>
                <p className="text-gmc-muted mt-1">Author: {c.author}</p>
                <p className="text-gmc-muted">License: {c.license}</p>
                <a href={c.source} target="_blank" rel="noopener noreferrer" className="text-gmc-gold hover:underline mt-1 inline-block">View original</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
