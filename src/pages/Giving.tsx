import { useState, useEffect } from 'react'
import { BookOpen, Building, Copy, Check } from 'lucide-react'
import MpesaLogo from '../components/MpesaLogo'
import { GIVING } from '../data/siteData'
import { useLang } from '../context/LangContext'

export default function Giving() {
  const { t } = useLang()
  const [copied, setCopied] = useState<string | null>(null)
  useEffect(() => { if (copied) { const t = setTimeout(() => setCopied(null), 2000); return () => clearTimeout(t) } }, [copied])

  const copy = (key: string, val: string) => { navigator.clipboard.writeText(val); setCopied(key) }

  return (
    <main>
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden bg-gmc-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,75,0.1),transparent_70%)]" />
        <div className="absolute inset-0 animate-mesh bg-gradient-to-br from-gmc-dark via-[#0d0d20] to-[#1a0f0a]" />
        <div className="relative z-10 text-center px-4">
          <span className="inline-block rounded-full border border-gmc-gold/30 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gmc-gold mb-4 bg-white/5 backdrop-blur-sm">{t.giving.tag}</span>
          <h1 className="font-display text-5xl font-black text-white md:text-7xl">Support the <span className="text-gradient">Ministry</span></h1>
          <p className="mx-auto mt-4 max-w-2xl text-gmc-muted text-lg">Give, and it will be given to you — a good measure, pressed down, shaken together and running over</p>
        </div>
      </section>
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-gmc-border bg-gmc-card/30 backdrop-blur-sm p-8 text-center">
              <BookOpen className="mx-auto mb-4 h-10 w-10 text-gmc-gold" />
              <h3 className="font-display text-xl font-bold text-white">Luke 6:38</h3>
              <p className="mt-3 text-sm leading-relaxed text-gmc-muted">"Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap. For with the measure you use, it will be measured to you."</p>
            </div>
            <div className="rounded-3xl border border-gmc-border bg-gmc-card/30 backdrop-blur-sm p-8 text-center">
              <Building className="mx-auto mb-4 h-10 w-10 text-gmc-gold" />
              <h3 className="font-display text-xl font-bold text-white">Bank Transfer</h3>
              <div className="mt-4 space-y-3 text-sm">
                <p className="text-gmc-muted">{GIVING.bank.name}</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="font-mono text-lg font-bold text-gmc-gold">{GIVING.bank.account}</span>
                  <button onClick={() => copy('bank', GIVING.bank.account)} className="rounded-lg border border-gmc-gold/30 p-1.5 text-gmc-gold hover:bg-gmc-gold/10 transition-colors">
                    {copied === 'bank' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
                <p className="text-gmc-muted">Branch: {GIVING.bank.branch}</p>
              </div>
            </div>
            <div className="rounded-3xl border border-gmc-border bg-gmc-card/30 backdrop-blur-sm p-8 text-center">
              <MpesaLogo className="mx-auto mb-4 h-12 w-36" />
              <h3 className="font-display text-xl font-bold text-white">Mobile Money</h3>
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex justify-center gap-6">
                  <div>
                    <p className="text-gmc-muted">Pay Bill</p>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-lg font-bold text-gmc-gold">{GIVING.mpesa.paybill}</span>
                      <button onClick={() => copy('paybill', GIVING.mpesa.paybill)} className="rounded-lg border border-gmc-gold/30 p-1.5 text-gmc-gold hover:bg-gmc-gold/10 transition-colors">
                        {copied === 'paybill' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="text-gmc-muted">Account</p>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-lg font-bold text-gmc-gold">{GIVING.mpesa.account}</span>
                      <button onClick={() => copy('acc', GIVING.mpesa.account)} className="rounded-lg border border-gmc-gold/30 p-1.5 text-gmc-gold hover:bg-gmc-gold/10 transition-colors">
                        {copied === 'acc' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
