import { motion } from 'framer-motion'
import { Cross, Eye, Heart } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import { MINISTRIES, OBJECTIVES } from '../data/siteData'

export default function About() {
  return (
    <main>
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-gmc-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-gmc-dark/80 to-gmc-gold/20 z-10" />
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/d/dd/FAME_Church_Worship_Service_%2824616670159%29.jpg)' }} />
        <div className="relative z-20 text-center px-4">
          <span className="inline-block rounded-full border border-gmc-gold/40 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gmc-gold mb-4">About Us</span>
          <h1 className="font-display text-5xl font-black text-white md:text-7xl">Our Divine <span className="text-gmc-gold">Purpose</span></h1>
          <p className="mx-auto mt-4 max-w-2xl text-gmc-muted text-lg">With one hand toward God and the other toward people, we commit ourselves to be used by God to Rescue, Recover & Restore lives.</p>
        </div>
      </section>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Cross, title: 'Our Mission', desc: '"To love God and love people. We reach them with love, bring them with grace, teach them the truth and send them out on mission."' },
              { icon: Eye, title: 'Our Vision', desc: '"With one hand toward God and the other toward people, we commit ourselves to be used by God to Rescue, Recover, & Restore people who have never experienced the Presence and Power of God."' },
              { icon: Heart, title: 'Our Heart', desc: '"Love the Lord your God with all your heart and with all your soul and with all your mind... Love your neighbor as yourself." - Matthew 22:37-39' },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
                className="rounded-2xl border border-gmc-border bg-gmc-card p-8 text-center transition-all hover:border-gmc-gold/40 hover:-translate-y-1"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gmc-gold/10">
                  <card.icon className="h-7 w-7 text-gmc-gold" />
                </div>
                <h3 className="mb-3 font-display text-xl font-bold text-white">{card.title}</h3>
                <p className="text-sm leading-relaxed text-gmc-muted">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-gmc-surface">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader tag="Our Commitment" title="Objectives" description="Raising an altar to build missionaries to impact the nations of the world" light />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {OBJECTIVES.map((obj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: 'easeOut' }}
                className="group rounded-xl border border-gmc-border bg-gmc-card p-5 transition-all hover:border-gmc-gold/30 hover:bg-gmc-gold/5"
              >
                <span className="mb-2 inline-block font-display text-3xl font-bold text-gmc-gold/30">{(i + 1).toString().padStart(2, '0')}</span>
                <p className="text-sm leading-relaxed text-gmc-muted">{obj}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader tag="Our Ministries" title="Areas of Service" description="Every tribe, every age, every gift - united in purpose" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {MINISTRIES.filter(m => m.id !== 'choir').slice(0, 8).map((m, i) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
                className="group rounded-2xl border border-gmc-border bg-gmc-card p-6 text-center transition-all hover:border-gmc-gold/40 hover:-translate-y-1"
              >
                <h3 className="font-display text-lg font-bold text-white">{m.name}</h3>
                <p className="mt-2 text-sm text-gmc-muted line-clamp-2">{m.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
