import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { MINISTRIES } from '../data/siteData'

export default function Ministries() {
  const navigate = useNavigate()
  return (
    <main>
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden bg-gmc-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-gmc-dark/80 to-gmc-gold/20 z-10" />
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/7/71/Worship_section_in_a_church_46.jpg)' }} />
        <div className="relative z-20 text-center px-4">
          <span className="inline-block rounded-full border border-gmc-gold/40 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gmc-gold mb-4">Our Ministries</span>
          <h1 className="font-display text-5xl font-black text-white md:text-7xl">Areas of <span className="text-gmc-gold">Service</span></h1>
          <p className="mx-auto mt-4 max-w-2xl text-gmc-muted text-lg">Every tribe, every age, every gift - united in purpose</p>
        </div>
      </section>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {MINISTRIES.map((m, i) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
                onClick={() => navigate(`/ministries/${m.id}`)}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-gmc-border bg-gmc-card transition-all hover:border-gmc-gold/40 hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden">
                  <img src={m.image} alt={m.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-white">{m.name}</h3>
                  <p className="mt-2 text-sm text-gmc-muted line-clamp-3">{m.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
