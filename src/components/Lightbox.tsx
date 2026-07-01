import { useEffect, useCallback, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface LightboxProps {
  images: string[]
  index: number
  onClose: () => void
}

export default function Lightbox({ images, index: startIndex, onClose }: LightboxProps) {
  const [current, setCurrent] = useState(startIndex)

  const next = useCallback(() => setCurrent((i) => (i + 1) % images.length), [images.length])
  const prev = useCallback(() => setCurrent((i) => (i - 1 + images.length) % images.length), [images.length])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, next, prev])

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-sm" onClick={onClose}>
      <button onClick={onClose} className="absolute right-6 top-6 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20">
        <X className="h-6 w-6" />
      </button>
      {images.length > 1 && (
        <>
          <button onClick={(e) => { e.stopPropagation(); prev() }} className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); next() }} className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20">
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}
      <img
        src={images[current]}
        alt=""
        className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
      <div className="absolute bottom-6 text-sm text-white/60">{current + 1} / {images.length}</div>
    </div>
  )
}
