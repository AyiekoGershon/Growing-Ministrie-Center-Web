import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Cross } from 'lucide-react'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gmc-dark">
      {/* Video background */}
      <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
        <source src="/videos/slide.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gmc-dark/80 via-gmc-dark/60 to-gmc-gold/15 z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gmc-dark to-transparent z-10" />

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-gmc-gold/5 blur-3xl animate-float z-0" />
      <div className="absolute bottom-32 right-20 h-96 w-96 rounded-full bg-gmc-gold/8 blur-3xl animate-float-delayed z-0" />

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-gmc-gold/30 bg-white/5 px-5 py-1.5 text-sm font-medium text-gmc-gold backdrop-blur-sm"
        >
          <Cross className="h-3.5 w-3.5" />
          Welcome to GMC
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl font-black leading-[1.1] text-white md:text-7xl lg:text-8xl"
        >
          Growing Missionaries
          <br />
          <span className="text-gradient">Centre</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-4 max-w-xl text-base text-gmc-muted md:text-lg"
        >
          Open your heart and experience the presence and the power of God
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8"
        >
          <button
            onClick={() => navigate('/home')}
            className="group inline-flex items-center gap-2 rounded-2xl bg-gold-gradient px-8 py-4 font-bold text-gmc-dark shadow-xl shadow-gmc-gold/30 transition-all hover:shadow-2xl hover:shadow-gmc-gold/40 hover:scale-105"
          >
            Enter Site <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </div>
  )
}
