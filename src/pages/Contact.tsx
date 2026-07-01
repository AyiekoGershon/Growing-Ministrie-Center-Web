import { Phone, Mail, MapPin } from 'lucide-react'
import { CONTACT } from '../data/siteData'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(form.subject || 'Message from GMC Website')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
  }

  return (
    <main>
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden bg-gmc-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-gmc-dark/80 to-gmc-gold/20 z-10" />
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/a/af/Worship_section_in_a_church_05.jpg)' }} />
        <div className="relative z-20 text-center px-4">
          <span className="inline-block rounded-full border border-gmc-gold/40 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gmc-gold mb-4">Get In Touch</span>
          <h1 className="font-display text-5xl font-black text-white md:text-7xl">Contact <span className="text-gmc-gold">Us</span></h1>
          <p className="mx-auto mt-4 max-w-2xl text-gmc-muted text-lg">We'd love to hear from you. Reach out to us anytime.</p>
        </div>
      </section>
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              {[
                { icon: Phone, label: 'Phone', value: CONTACT.phone.join(', '), href: `tel:${CONTACT.phone[0].replace(/\s/g, '')}` },
                { icon: Mail, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
                { icon: MapPin, label: 'Address', value: CONTACT.address, href: CONTACT.maps },
              ].map((item, i) => (
                <a key={i} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="flex items-start gap-4 rounded-xl border border-gmc-border bg-gmc-card p-5 transition-colors hover:border-gmc-gold/30">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gmc-gold/10">
                    <item.icon className="h-5 w-5 text-gmc-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-gmc-muted">{item.label}</p>
                    <p className="text-sm text-white">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input type="text" placeholder="Your Name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full rounded-xl border border-gmc-border bg-gmc-card px-4 py-3 text-sm text-white placeholder-gmc-muted outline-none transition-colors focus:border-gmc-gold" />
                <input type="email" placeholder="Your Email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full rounded-xl border border-gmc-border bg-gmc-card px-4 py-3 text-sm text-white placeholder-gmc-muted outline-none transition-colors focus:border-gmc-gold" />
              </div>
              <input type="text" placeholder="Subject" value={form.subject} onChange={e => setForm(p => ({ ...p, subject: e.target.value }))} className="w-full rounded-xl border border-gmc-border bg-gmc-card px-4 py-3 text-sm text-white placeholder-gmc-muted outline-none transition-colors focus:border-gmc-gold" />
              <textarea rows={5} placeholder="Your Message" required value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full rounded-xl border border-gmc-border bg-gmc-card px-4 py-3 text-sm text-white placeholder-gmc-muted outline-none transition-colors focus:border-gmc-gold resize-none" />
              <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-gmc-gold px-6 py-3 font-semibold text-gmc-dark transition-transform hover:scale-105">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
