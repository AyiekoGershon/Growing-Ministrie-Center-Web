import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Calendar, Cross } from 'lucide-react'
import Header from '../components/Header'
import { useLang } from '../context/LangContext'

export default function Home() {
  const navigate = useNavigate()
  const { t } = useLang()

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gmc-dark">
      <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
        <source src="https://res.cloudinary.com/dri60cqs8/video/upload/v1782900266/slide_ngo6lr.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-br from-gmc-dark/80 via-gmc-dark/60 to-gmc-gold/15 z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gmc-dark to-transparent z-10" />

      <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-gmc-gold/5 blur-3xl animate-float z-0" />
      <div className="absolute bottom-32 right-20 h-96 w-96 rounded-full bg-gmc-gold/8 blur-3xl animate-float-delayed z-0" />

      {/* Header on top of hero */}
      <div className="relative z-30">
        <Header />
      </div>

      <div className="relative z-20 flex flex-1 flex-col items-center justify-center px-4 text-center" style={{ height: 'calc(100vh - 80px)' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-gmc-gold/30 bg-white/5 px-5 py-1.5 text-sm font-medium text-gmc-gold backdrop-blur-sm"
        >
          <Cross className="h-3.5 w-3.5" />
          {t.hero.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl font-black leading-[1.1] text-white md:text-7xl lg:text-8xl"
        >
          {t.hero.title1}
          <br />
          <span className="text-gradient">{t.hero.title2}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-4 max-w-xl text-base text-gmc-muted md:text-lg"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button onClick={() => navigate('/about')} className="group inline-flex items-center gap-2 rounded-2xl bg-gold-gradient px-8 py-4 font-bold text-gmc-dark shadow-xl shadow-gmc-gold/30 transition-all hover:shadow-2xl hover:shadow-gmc-gold/40 hover:scale-105">
            {t.hero.cta1} <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
          <button onClick={() => navigate('/services')} className="inline-flex items-center gap-2 rounded-2xl border border-gmc-gold/30 px-8 py-4 font-semibold text-gmc-gold backdrop-blur-sm transition-all hover:bg-gmc-gold/10 hover:border-gmc-gold/60">
            <Calendar className="h-5 w-5" /> {t.hero.cta2}
          </button>
        </motion.div>
      </div>
    </div>
  )
}
