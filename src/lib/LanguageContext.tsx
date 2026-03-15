'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { LangCode, translations, Translations, LANGUAGES } from './translations'

interface LanguageContextType {
  lang: LangCode
  setLang: (lang: LangCode) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: translations.en,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>('en')

  useEffect(() => {
    // 1. Check saved preference
    const saved = localStorage.getItem('presenz-lang') as LangCode | null
    if (saved && translations[saved]) {
      setLangState(saved)
      return
    }
    // 2. Auto-detect from browser
    const browserLang = (navigator.language || '').split('-')[0] as LangCode
    if (browserLang && translations[browserLang]) {
      setLangState(browserLang)
    }
  }, [])

  const setLang = (code: LangCode) => {
    setLangState(code)
    try { localStorage.setItem('presenz-lang', code) } catch {}
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
export { LANGUAGES }
export type { LangCode }
