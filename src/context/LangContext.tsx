import { createContext, useContext, useState, type ReactNode } from 'react'
import { translations, type Lang } from '../data/translations'

interface LangContextType {
  lang: Lang
  setLang: (l: Lang) => void
  t: typeof translations.en
}

const LangContext = createContext<LangContextType>({ lang: 'en', setLang: () => {}, t: translations.en })

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  const t = translations[lang]
  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}
