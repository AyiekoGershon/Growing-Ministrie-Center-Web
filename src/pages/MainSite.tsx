import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Play, ChevronDown, Cross, Heart, BookOpen, MapPin, Copy, Check, Phone, Mail } from 'lucide-react'
import MpesaLogo from '../components/MpesaLogo'
import { useLang } from '../context/LangContext'
import AnimatedCounter from '../components/AnimatedCounter'
import { MINISTRIES, SERVICES, GIVING, OBJECTIVES } from '../data/siteData'
import { SERMONS } from '../data/sermons'
import { BLOG_POSTS } from '../data/blog'
import { cn } from '../lib/utils'

export default function Home() {
  const navigate = useNavigate()
  const { t } = useLang()
  const [copied, setCopied] = useState<string | null>(null)

  useEffect(() => { if (copied) { const t = setTimeout(() => setCopied(null), 2000); return () => clearTimeout(t) } }, [copied])

  return (
    <main className="overflow-hidden">
      {/* ========================== HERO ========================== */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Video background */}
        <video autoPlay muted loop playsInline poster={MINISTRIES[0]?.image} className="absolute inset-0 z-0 h-full w-full object-cover">
          <source src="/videos/slide.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-gmc-dark/80 via-gmc-dark/60 to-gmc-gold/15 z-[1]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gmc-dark to-transparent z-[1]" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-gmc-gold/30 bg-white/5 px-5 py-1.5 text-sm font-medium text-gmc-gold backdrop-blur-sm">
            <Cross className="h-3.5 w-3.5" />
            {t.hero.badge}
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="font-display text-6xl font-black leading-[1.1] text-white md:text-8xl lg:text-9xl">
            {t.hero.title1}
            <br />
            <span className="text-gradient">{t.hero.title2}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mx-auto mt-6 max-w-2xl text-lg text-gmc-muted md:text-xl">
            {t.hero.subtitle}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button onClick={() => navigate('/about')} className="group relative inline-flex items-center gap-2 rounded-2xl bg-gold-gradient px-8 py-4 font-bold text-gmc-dark shadow-xl shadow-gmc-gold/30 transition-all hover:shadow-2xl hover:shadow-gmc-gold/40 hover:scale-105">
              {t.hero.cta1} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button onClick={() => navigate('/services')} className="inline-flex items-center gap-2 rounded-2xl border border-gmc-gold/30 px-8 py-4 font-semibold text-gmc-gold backdrop-blur-sm transition-all hover:bg-gmc-gold/10 hover:border-gmc-gold/60">
              <Play className="h-4 w-4" /> {t.hero.cta2}
            </button>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-gmc-gold/60" />
        </div>
      </section>

      {/* ========================== IMPACT STATS ========================== */}
      <section className="relative -mt-20 z-10">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-gmc-border bg-gmc-border md:grid-cols-4">
            {[
              { value: 500, suffix: '+', label: 'Members & Growing' },
              { value: 8, suffix: '', label: 'Branch Churches' },
              { value: 7, suffix: '', label: 'Days of Ministry' },
              { value: 3, suffix: 'R', label: 'Rescue · Recover · Restore' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center bg-gmc-surface p-8 text-center">
                <span className="font-display text-4xl font-bold text-gmc-gold md:text-5xl"><AnimatedCounter end={stat.value} suffix={stat.suffix} /></span>
                <span className="mt-2 text-sm text-gmc-muted">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========================== ABOUT ========================== */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-64 w-64 rounded-full bg-gmc-gold/5 blur-3xl" />
              <span className="inline-block rounded-full border border-gmc-gold/30 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gmc-gold mb-4 bg-white/5 backdrop-blur-sm">{t.about.tag}</span>
              <h2 className="font-display text-4xl font-bold text-white md:text-5xl">{t.about.title}</h2>
              <p className="mt-6 font-quote text-2xl italic leading-relaxed text-gmc-gold/80">"{t.about.vision}"</p>
              <button onClick={() => navigate('/about')} className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-gold-gradient px-6 py-3 font-semibold text-gmc-dark shadow-lg shadow-gmc-gold/20 transition-all hover:shadow-xl hover:scale-105">
                {t.hero.cta1} <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="grid gap-6">
              {[
                { icon: Cross, title: t.about.mission?.split('"')[1] || 'Our Mission', desc: t.about.mission },
                { icon: Heart, title: t.about.heart?.split('"')[1] || 'Our Heart', desc: t.about.heart },
              ].map((card, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group rounded-2xl border border-gmc-border bg-gmc-card/50 backdrop-blur-sm p-6 transition-all hover:border-gmc-gold/30 hover:bg-gmc-card/80">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gmc-gold/10">
                      <card.icon className="h-6 w-6 text-gmc-gold" />
                    </div>
                    <div>
                      <p className="text-sm leading-relaxed text-gmc-muted">{card.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================== OBJECTIVES ========================== */}
      <section className="relative py-32 bg-gmc-surface">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,168,75,0.05),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block rounded-full border border-gmc-gold/30 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gmc-gold mb-4 bg-white/5 backdrop-blur-sm">{t.objectives.tag}</span>
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">{t.objectives.title}</h2>
            <p className="mt-4 text-gmc-muted max-w-2xl mx-auto">{t.objectives.desc}</p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {OBJECTIVES.map((obj, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="group rounded-2xl border border-gmc-border bg-gmc-card/30 backdrop-blur-sm p-5 transition-all hover:border-gmc-gold/30 hover:bg-gmc-card/60 hover:-translate-y-1">
                <span className="mb-2 inline-block font-display text-3xl font-bold text-gmc-gold/20">{(i + 1).toString().padStart(2, '0')}</span>
                <p className="text-sm leading-relaxed text-gmc-muted">{obj}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================== MINISTRIES ========================== */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block rounded-full border border-gmc-gold/30 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gmc-gold mb-4 bg-white/5 backdrop-blur-sm">{t.ministries.tag}</span>
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">{t.ministries.title}</h2>
            <p className="mt-4 text-gmc-muted max-w-2xl mx-auto">{t.ministries.desc}</p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {MINISTRIES.filter(m => m.id !== 'choir').slice(0, 8).map((m, i) => (
              <motion.div key={m.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                onClick={() => navigate(`/ministries/${m.id}`)}
                className="group cursor-pointer overflow-hidden rounded-3xl border border-gmc-border bg-gmc-card transition-all hover:border-gmc-gold/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-gmc-gold/10"
              >
                <div className="relative h-52 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gmc-card via-transparent to-transparent z-10" />
                  <img src={m.image} alt={m.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-5">
                    <h3 className="font-display text-lg font-bold text-white drop-shadow-lg">{m.name}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-gmc-muted line-clamp-2">{m.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button onClick={() => navigate('/ministries')} className="inline-flex items-center gap-2 rounded-2xl border border-gmc-gold/30 px-8 py-3 font-semibold text-gmc-gold backdrop-blur-sm transition-all hover:bg-gmc-gold/10 hover:border-gmc-gold/60">
              View All Ministries <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================== SERMONS ========================== */}
      <section className="py-32 bg-gmc-surface relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,168,75,0.05),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 relative">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block rounded-full border border-gmc-gold/30 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gmc-gold mb-4 bg-white/5 backdrop-blur-sm">{t.sermons.tag}</span>
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">{t.sermons.title}</h2>
            <p className="mt-4 text-gmc-muted max-w-2xl mx-auto">{t.sermons.desc}</p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-2">
            {SERMONS.slice(0, 4).map((sermon, i) => (
              <motion.a key={sermon.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                href={sermon.videoUrl} target="_blank" rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-3xl border border-gmc-border bg-gmc-card transition-all hover:border-gmc-gold/30 hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
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
                  <p className="mt-2 text-sm text-gmc-muted line-clamp-2">{sermon.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ========================== BLOG ========================== */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block rounded-full border border-gmc-gold/30 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gmc-gold mb-4 bg-white/5 backdrop-blur-sm">{t.blog.tag}</span>
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">{t.blog.title}</h2>
            <p className="mt-4 text-gmc-muted max-w-2xl mx-auto">{t.blog.desc}</p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-3">
            {BLOG_POSTS.slice(0, 3).map((post, i) => (
              <motion.div key={post.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => navigate('/blog')}
                className="group cursor-pointer overflow-hidden rounded-3xl border border-gmc-border bg-gmc-card transition-all hover:border-gmc-gold/30 hover:-translate-y-2 hover:shadow-xl hover:shadow-gmc-gold/10"
              >
                <div className="h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="rounded-full bg-gmc-gold/10 px-2.5 py-0.5 text-xs text-gmc-gold">{post.category}</span>
                    <span className="text-xs text-gmc-muted">{post.date}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-gmc-gold transition-colors">{post.title}</h3>
                  <p className="mt-2 text-sm text-gmc-muted line-clamp-2">{post.excerpt}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button onClick={() => navigate('/blog')} className="inline-flex items-center gap-2 rounded-2xl border border-gmc-gold/30 px-8 py-3 font-semibold text-gmc-gold backdrop-blur-sm transition-all hover:bg-gmc-gold/10 hover:border-gmc-gold/60">
              View All News <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================== COMMUNITY ========================== */}
      <section className="py-32 bg-gmc-surface relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,75,0.05),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 relative">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block rounded-full border border-gmc-gold/30 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gmc-gold mb-4 bg-white/5 backdrop-blur-sm">{t.community.tag}</span>
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">{t.community.title}</h2>
            <p className="mt-4 text-gmc-muted max-w-2xl mx-auto">{t.community.desc}</p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: 'Education Support', desc: 'Supporting education for everyone in the society.', img: 'https://res.cloudinary.com/dri60cqs8/image/upload/v1780823380/education_support_wkku3f.jpg' },
              { title: 'Environmental Care', desc: 'Cleaning and planting trees to fulfill God\'s will.', img: 'https://res.cloudinary.com/dri60cqs8/image/upload/v1780823379/Environment_care_b0zffs.jpg' },
              { title: 'Widows & Orphans', desc: 'Providing food, clothes, shelter and family care.', img: 'https://res.cloudinary.com/dri60cqs8/image/upload/v1780823377/widows_and_orphans_vgwklf.jpg' },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group relative overflow-hidden rounded-3xl border border-gmc-border bg-gmc-card min-h-[320px]"
              >
                <div className="absolute inset-0">
                  <img src={item.img} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gmc-card via-gmc-card/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-gmc-muted">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================== SERVICES ========================== */}
      <section className="py-32">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block rounded-full border border-gmc-gold/30 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gmc-gold mb-4 bg-white/5 backdrop-blur-sm">{t.services.tag}</span>
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">{t.services.title}</h2>
            <p className="mt-4 text-gmc-muted max-w-2xl mx-auto">{t.services.desc}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="overflow-hidden rounded-3xl border border-gmc-border bg-gmc-card/30 backdrop-blur-sm">
            {SERVICES.map((svc, i) => (
              <div key={i} className={cn(
                'flex items-center justify-between px-6 py-5 text-sm transition-colors',
                i === 0 ? 'bg-gmc-gold/10 text-gmc-gold font-semibold border-b border-gmc-border' : 'border-b border-gmc-border/30 hover:bg-gmc-gold/5',
                i === SERVICES.length - 1 && 'border-b-0'
              )}>
                <span className="w-24 font-medium text-white">{svc.day}</span>
                <span className="flex-1 text-gmc-muted">{svc.name}</span>
                <span className="text-gmc-gold">{svc.time}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========================== GIVING ========================== */}
      <section className="py-32 bg-gmc-surface relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,75,0.05),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 relative">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block rounded-full border border-gmc-gold/30 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gmc-gold mb-4 bg-white/5 backdrop-blur-sm">{t.giving.tag}</span>
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">{t.giving.title}</h2>
            <p className="mt-4 text-gmc-muted max-w-2xl mx-auto">{t.giving.desc}</p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0 }} className="rounded-3xl border border-gmc-border bg-gmc-card/30 backdrop-blur-sm p-8 text-center">
              <BookOpen className="mx-auto mb-4 h-10 w-10 text-gmc-gold" />
              <h3 className="font-display text-xl font-bold text-white">Luke 6:38</h3>
              <p className="mt-3 text-sm leading-relaxed text-gmc-muted">"Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap."</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="rounded-3xl border border-gmc-border bg-gmc-card/30 backdrop-blur-sm p-8 text-center">
              <Building className="mx-auto mb-4 h-10 w-10 text-gmc-gold" />
              <h3 className="font-display text-xl font-bold text-white">Bank Transfer</h3>
              <div className="mt-4 space-y-3 text-sm">
                <p className="text-gmc-muted">{GIVING.bank.name}</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="font-mono text-lg font-bold text-gmc-gold">{GIVING.bank.account}</span>
                  <button onClick={() => { navigator.clipboard.writeText(GIVING.bank.account); setCopied('bank') }} className="rounded-lg border border-gmc-gold/30 p-1.5 text-gmc-gold hover:bg-gmc-gold/10 transition-colors">
                    {copied === 'bank' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
                <p className="text-gmc-muted">Branch: {GIVING.bank.branch}</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="rounded-3xl border border-gmc-border bg-gmc-card/30 backdrop-blur-sm p-8 text-center">
              <MpesaLogo className="mx-auto mb-4 h-12 w-36" />
              <h3 className="font-display text-xl font-bold text-white">Mobile Money</h3>
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex justify-center gap-6">
                  <div>
                    <p className="text-gmc-muted">Pay Bill</p>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-lg font-bold text-gmc-gold">{GIVING.mpesa.paybill}</span>
                      <button onClick={() => { navigator.clipboard.writeText(GIVING.mpesa.paybill); setCopied('paybill') }} className="rounded-lg border border-gmc-gold/30 p-1.5 text-gmc-gold hover:bg-gmc-gold/10 transition-colors">
                        {copied === 'paybill' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="text-gmc-muted">Account</p>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-lg font-bold text-gmc-gold">{GIVING.mpesa.account}</span>
                      <button onClick={() => { navigator.clipboard.writeText(GIVING.mpesa.account); setCopied('acc') }} className="rounded-lg border border-gmc-gold/30 p-1.5 text-gmc-gold hover:bg-gmc-gold/10 transition-colors">
                        {copied === 'acc' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================== CONTACT ========================== */}
      <section className="py-32">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block rounded-full border border-gmc-gold/30 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gmc-gold mb-4 bg-white/5 backdrop-blur-sm">{t.contact.tag}</span>
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">{t.contact.title}</h2>
            <p className="mt-4 text-gmc-muted max-w-2xl mx-auto">{t.contact.desc}</p>
          </motion.div>
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-4">
              {[
                { icon: MapPin, title: 'Address', value: 'P.O. Box 4-40414, Isebania, Kenya' },
                { icon: Phone, title: 'Phone', value: '+254 727 982 178' },
                { icon: Mail, title: 'Email', value: 'growingmissionaries32@gmail.com' },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center gap-4 rounded-2xl border border-gmc-border bg-gmc-card/30 backdrop-blur-sm p-5 transition-colors hover:border-gmc-gold/30">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gmc-gold/10">
                    <item.icon className="h-6 w-6 text-gmc-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-gmc-muted">{item.title}</p>
                    <p className="text-sm text-white">{item.value}</p>
                  </div>
                </motion.div>
              ))}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.654!2d34.256!3d-1.244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTQnMzguNCJTIDM0wrAxNSczMS4yIkU!5e0!3m2!1sen!2ske!4v1"
                width="100%" height="200" style={{ border: 0, borderRadius: '1rem' }} allowFullScreen loading="lazy" className="mt-4"
              />
            </div>
            <motion.form initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              onSubmit={(e) => { e.preventDefault(); window.location.href = `mailto:${'growingmissionaries32@gmail.com'}?subject=Website Inquiry&body=` }}
              className="space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <input type="text" placeholder="Your Name" required className="w-full rounded-2xl border border-gmc-border bg-gmc-card/50 backdrop-blur-sm px-5 py-4 text-sm text-white placeholder-gmc-muted outline-none transition-colors focus:border-gmc-gold" />
                <input type="email" placeholder="Your Email" required className="w-full rounded-2xl border border-gmc-border bg-gmc-card/50 backdrop-blur-sm px-5 py-4 text-sm text-white placeholder-gmc-muted outline-none transition-colors focus:border-gmc-gold" />
              </div>
              <input type="text" placeholder="Subject" className="w-full rounded-2xl border border-gmc-border bg-gmc-card/50 backdrop-blur-sm px-5 py-4 text-sm text-white placeholder-gmc-muted outline-none transition-colors focus:border-gmc-gold" />
              <textarea rows={5} placeholder="Your Message" required className="w-full rounded-2xl border border-gmc-border bg-gmc-card/50 backdrop-blur-sm px-5 py-4 text-sm text-white placeholder-gmc-muted outline-none transition-colors focus:border-gmc-gold resize-none" />
              <button type="submit" className="group inline-flex items-center gap-2 rounded-2xl bg-gold-gradient px-8 py-4 font-bold text-gmc-dark shadow-xl shadow-gmc-gold/30 transition-all hover:shadow-2xl hover:shadow-gmc-gold/40 hover:scale-105">
                Send Message <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </main>
  )
}

function Building({ className }: { className?: string }) {
  return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
}


