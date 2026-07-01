import { useState, useRef, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Play, Music } from 'lucide-react'
import { MINISTRIES } from '../data/siteData'

const SUNDAY_SCHOOL_SONGS = [
  { num: 1, title: 'Wazazi Wangu', videoId: 'kSzjYRZm46E' },
  { num: 2, title: 'Ameiso Ge Enokwe', videoId: 'pQQDDMDtmZg' },
  { num: 3, title: 'Maamuzi Yako', videoId: 'H9o35Mp2Gw0' },
  { num: 4, title: 'Tenda Wema', videoId: '9CIsCAu8P1g' },
  { num: 5, title: 'Jina La Yesu', videoId: 'gxmG9v_Tyhw' },
  { num: 6, title: 'Dunia Yazunguka', videoId: 'o5WpWhAhUrA' },
]

export default function MinistryDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const ministry = MINISTRIES.find((m) => m.id === id)
  const isSundaySchool = id === 'sunday-school'
  const isChoir = id === 'choir'
  const [currentVideo, setCurrentVideo] = useState(0)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (isSundaySchool && iframeRef.current) {
      iframeRef.current.src = `https://www.youtube.com/embed/${SUNDAY_SCHOOL_SONGS[currentVideo].videoId}?autoplay=1`
    }
  }, [currentVideo, isSundaySchool])

  if (!ministry) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
        <h2 className="font-display text-3xl font-bold text-white">Ministry not found</h2>
        <button onClick={() => navigate('/ministries')} className="rounded-xl bg-gmc-gold px-6 py-2 font-semibold text-gmc-dark">
          Back to Ministries
        </button>
      </div>
    )
  }

  return (
    <main>
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-gmc-dark">
        {ministry.videoUrl && (
          <video autoPlay muted loop playsInline poster={ministry.image} className="absolute inset-0 z-0 h-full w-full object-cover">
            <source src={ministry.videoUrl} type="video/mp4" />
          </video>
        )}
        <div className={ministry.videoUrl ? 'absolute inset-0 bg-gradient-to-br from-gmc-dark/80 via-gmc-dark/60 to-gmc-gold/15 z-10' : 'absolute inset-0 bg-gradient-to-br from-gmc-dark/70 via-gmc-dark/50 to-gmc-gold/15 z-10'} />
        {!ministry.videoUrl && <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${ministry.image})` }} />}
        <div className="relative z-20 text-center px-4">
          <span className="inline-block rounded-full border border-gmc-gold/40 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gmc-gold mb-4">Ministry Focus</span>
          <h1 className="font-display text-5xl font-black text-white md:text-7xl">
            {ministry.name.split(' ').slice(0, -1).join(' ')} <span className="text-gmc-gold">{ministry.name.split(' ').pop()}</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg italic text-gmc-muted">"{ministry.verse}" - {ministry.ref}</p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <button onClick={() => navigate(-1)} className="mb-8 inline-flex items-center gap-2 text-sm text-gmc-gold hover:text-gmc-gold-light transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back
          </button>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }} className="mb-16 text-center">
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">{ministry.subtitle}</h2>
            <p className="mt-4 text-lg leading-relaxed text-gmc-muted">{ministry.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mb-16 rounded-2xl border border-gmc-border bg-gmc-card p-8"
          >
            <h3 className="mb-4 font-display text-2xl font-bold text-white">Our Vision</h3>
            <p className="leading-relaxed text-gmc-muted">{ministry.vision}</p>
            <div className="mt-6 border-l-4 border-gmc-gold bg-gmc-gold/5 p-4 italic text-white font-quote text-lg">
              "{ministry.verse}"<br />
              <span className="text-gmc-gold mt-1 block text-sm">- {ministry.ref}</span>
            </div>
          </motion.div>

          {/* YouTube Player for Sunday School Choir */}
          {isSundaySchool && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl font-bold text-white">Watch Our Sunday School Choir</h3>
                <p className="mt-2 text-gmc-muted">Click on any song to play</p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-gmc-border bg-gmc-card">
                <div className="aspect-video bg-black">
                  <iframe
                    ref={iframeRef}
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${SUNDAY_SCHOOL_SONGS[currentVideo].videoId}`}
                    title="YouTube player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="border-none"
                  />
                </div>
                <div className="border-t border-gmc-border p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Music className="h-5 w-5 text-gmc-gold" />
                    <span className="text-sm text-gmc-muted">Now Playing:</span>
                    <span className="text-sm font-semibold text-white">{SUNDAY_SCHOOL_SONGS[currentVideo].title}</span>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {SUNDAY_SCHOOL_SONGS.map((song, i) => (
                      <button
                        key={song.videoId}
                        onClick={() => setCurrentVideo(i)}
                        className={`flex items-center gap-3 rounded-xl border p-3 text-left text-sm transition-all ${
                          i === currentVideo
                            ? 'border-gmc-gold bg-gmc-gold/10 text-gmc-gold'
                            : 'border-gmc-border bg-gmc-card/50 text-gmc-muted hover:border-gmc-gold/30 hover:text-gmc-gold'
                        }`}
                      >
                        <Play className={`h-4 w-4 shrink-0 ${i === currentVideo ? 'fill-gmc-gold' : ''}`} />
                        <span className="truncate">{song.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Sayuni Harvesters Choir Gallery */}
          {isChoir && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl font-bold text-white">Photo Gallery</h3>
                <p className="mt-2 text-gmc-muted">Moments from our choir ministry</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  'https://res.cloudinary.com/dri60cqs8/image/upload/v1780822774/IMG_0739_pbmk63.jpg',
                  'https://res.cloudinary.com/dri60cqs8/image/upload/v1780822774/IMG_0746_cuxqr1.jpg',
                  'https://res.cloudinary.com/dri60cqs8/image/upload/v1780822773/IMG_0749_wwui28.jpg',
                ].map((src, i) => (
                  <div key={i} className={`overflow-hidden rounded-2xl border border-gmc-border ${i === 0 ? 'sm:col-span-2 sm:row-span-2' : ''}`}>
                    <img src={src} alt="Sayuni Harvesters Choir" className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" loading="lazy" />
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <a
                  href="https://youtube.com/@sayuniharvestchoir7814"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-red-600 px-8 py-4 font-bold text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
                >
                  <Play className="h-5 w-5" /> Watch on YouTube
                </a>
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h3 className="mb-6 font-display text-2xl font-bold text-white">What We Offer</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {ministry.activities.map((act, i) => (
                <div key={i} className="rounded-xl border border-gmc-border bg-gmc-card p-5 transition-all hover:border-gmc-gold/30 hover:bg-gmc-gold/5">
                  <p className="text-sm leading-relaxed text-gmc-muted">{act}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="mt-16 text-center">
            <button onClick={() => navigate('/contact')} className="rounded-xl bg-gmc-gold px-8 py-3 font-semibold text-gmc-dark transition-transform hover:scale-105">
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
