import { motion } from 'framer-motion'
import { useLang } from '../context/LangContext'
import { BLOG_POSTS } from '../data/blog'

export default function Blog() {
  const { t } = useLang()
  return (
    <main>
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden bg-gmc-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,75,0.1),transparent_70%)]" />
        <div className="absolute inset-0 animate-mesh bg-gradient-to-br from-gmc-dark via-[#0d0d20] to-[#1a0f0a]" />
        <div className="relative z-10 text-center px-4">
          <span className="inline-block rounded-full border border-gmc-gold/30 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gmc-gold mb-4 bg-white/5 backdrop-blur-sm">{t.blog.tag}</span>
          <h1 className="font-display text-5xl font-black text-white md:text-7xl">{t.blog.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gmc-muted text-lg">{t.blog.desc}</p>
        </div>
      </section>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post, i) => (
              <motion.div key={post.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group overflow-hidden rounded-3xl border border-gmc-border bg-gmc-card transition-all hover:border-gmc-gold/30 hover:-translate-y-2 hover:shadow-xl hover:shadow-gmc-gold/10"
              >
                <div className="h-52 overflow-hidden">
                  <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="rounded-full bg-gmc-gold/10 px-2.5 py-0.5 text-xs text-gmc-gold">{post.category}</span>
                    <span className="text-xs text-gmc-muted">{post.date}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-gmc-gold transition-colors">{post.title}</h3>
                  <p className="mt-2 text-sm text-gmc-muted">{post.excerpt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
