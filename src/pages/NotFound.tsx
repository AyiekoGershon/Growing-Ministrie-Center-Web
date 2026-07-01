import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4">
      <h1 className="font-display text-6xl font-black text-gmc-gold">404</h1>
      <p className="text-gmc-muted text-lg">Page not found</p>
      <button onClick={() => navigate('/')} className="rounded-xl bg-gmc-gold px-6 py-3 font-semibold text-gmc-dark transition-transform hover:scale-105">
        Back Home
      </button>
    </main>
  )
}
