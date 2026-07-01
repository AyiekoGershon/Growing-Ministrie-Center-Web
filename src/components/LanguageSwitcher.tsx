import { useLang } from '../context/LangContext'

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang()
  const toggle = () => setLang(lang === 'en' ? 'sw' : 'en')
  return (
    <button
      onClick={toggle}
      className="rounded-lg border border-gmc-gold/30 px-2.5 py-1 text-xs font-medium text-gmc-gold transition-all hover:bg-gmc-gold/10 hover:border-gmc-gold/60"
    >
      {lang === 'en' ? 'SW' : 'EN'}
    </button>
  )
}
