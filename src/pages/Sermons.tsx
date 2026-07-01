import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { useLang } from '../context/LangContext'
import { SERMONS } from '../data/sermons'

export default function Sermons() {
  const { t } = useLang()
  return (
    <main>
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden bg-gmc-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,75,0.1),transparent_70%)]" />
        <div className="absolute inset-0 animate-mesh bg-gradient-to-br from-gmc-dark via-[#0d0d20] to-[#1a0f0a]" />
        <div className="relative z-10 text-center px-4">
          <span className="inline-block rounded-full border border-gmc-gold/30 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gmc-gold mb-4 bg-white/5 backdrop-blur-sm">{t.sermons.tag}</span>
          <h1 className="font-display text-5xl font-black text-white md:text-7xl">{t.sermons.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gmc-muted text-lg">{t.sermons.desc}</p>
        </div>
      </section>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {SERMONS.map((sermon, i) => (
              <motion.a key={sermon.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                href={sermon.videoUrl} target="_blank" rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-3xl border border-gmc-border bg-gmc-card transition-all hover:border-gmc-gold/30 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={sermon.thumbnail} alt={sermon.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity group-hover:bg-black/40">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gmc-gold/90 text-gmc-dark shadow-xl transition-transform group-hover:scale-110">
                      <Play className="h-7 w-7 ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="rounded-full bg-gmc-gold/20 backdrop-blur-sm px-3 py-1 text-xs text-gmc-gold">{sermon.speaker}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gmc-muted mb-1">{sermon.date}</p>
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-gmc-gold transition-colors">{sermon.title}</h3>
                  <p className="mt-2 text-sm text-gmc-muted">{sermon.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
