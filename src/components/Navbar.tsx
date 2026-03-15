'use client'

import { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { imgLogo, APPSTORE_URL } from '@/lib/images'
import { useLanguage, LANGUAGES, LangCode } from '@/lib/LanguageContext'

// ─── Search overlay ────────────────────────────────────────────────────────────
function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState('')
  const { t } = useLanguage()

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-start pt-28 px-4"
      style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
          <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <input
            autoFocus
            type="text"
            placeholder={t.nav.searchPlaceholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 text-base outline-none text-gray-800 placeholder-gray-400"
          />
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
        </div>
        {query.length === 0 && (
          <div className="px-5 py-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">{t.nav.popularLabel}</p>
            {t.nav.popularSearches.map((s) => (
              <button
                key={s}
                className="w-full text-left px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition"
                onClick={() => setQuery(s)}
              >
                {s}
              </button>
            ))}
          </div>
        )}
        {query.length > 0 && (
          <div className="px-5 py-4 text-sm text-gray-500">
            {t.nav.searchingFor} <span className="font-semibold text-gray-800">&ldquo;{query}&rdquo;</span>…
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Language dropdown ────────────────────────────────────────────────────────
function LanguagePicker() {
  const { lang, setLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0]

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className="relative">
      {/* Matches client design: "En ▼" simple text button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-sm font-medium transition"
        style={{ color: '#0d1b5e' }}
        aria-label="Change language"
      >
        <span>{current.short}</span>
        <svg
          className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-44 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden z-50 py-1">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              onClick={() => { setLang(l.code as LangCode); setOpen(false) }}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-sm transition hover:bg-gray-50"
              style={{ color: lang === l.code ? '#1a3fff' : '#374151', fontWeight: lang === l.code ? 700 : 400 }}
            >
              <span className="text-base">{l.flag}</span>
              <span>{l.label}</span>
              {lang === l.code && (
                <svg className="w-3.5 h-3.5 ml-auto" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Mobile language grid ─────────────────────────────────────────────────────
function MobileLangGrid() {
  const { lang, setLang } = useLanguage()
  return (
    <div>
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Language</p>
      <div className="grid grid-cols-5 gap-2">
        {LANGUAGES.map((l) => (
          <button
            key={l.code}
            onClick={() => setLang(l.code as LangCode)}
            className="flex flex-col items-center gap-0.5 p-2 rounded-xl text-xs transition"
            style={{
              background: lang === l.code ? '#eef2ff' : 'transparent',
              color: lang === l.code ? '#1a3fff' : '#6b7280',
              fontWeight: lang === l.code ? 700 : 400,
              outline: lang === l.code ? '1px solid #1a3fff' : 'none',
            }}
          >
            <span className="text-lg">{l.flag}</span>
            <span>{l.short}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

// ─── Navbar ────────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  const NAV_LINKS = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.about, href: '/about' },
  ]

  return (
    <>
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}

      <header
        className="fixed top-0 left-0 right-0 z-50 w-full"
        style={{
          background: 'rgba(255,255,255,0.88)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">

          {/* ── Logo — matches client: pin icon + "Presenz" text ── */}
          <a href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src={imgLogo}
              alt="PresenZ logo"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
            <span
              className="text-base font-bold hidden sm:inline"
              style={{ color: '#0d1b5e', letterSpacing: '0.01em' }}
            >
              Presenz
            </span>
          </a>

          {/* ── Desktop nav — centred ── */}
          <nav className="hidden md:flex gap-10 items-center absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-sm tracking-wide transition"
                style={{
                  color: '#0d1b5e',
                  fontWeight: pathname === href ? 700 : 500,
                }}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* ── Right side ── */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            {/* Search icon */}
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="transition opacity-70 hover:opacity-100"
              style={{ color: '#0d1b5e' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
            </button>
            {/* Language "En ▼" */}
            <LanguagePicker />
            {/* Get App pill — matches client blue button */}
            <a
              href={APPSTORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full text-sm font-bold tracking-wide transition hover:opacity-90"
              style={{ background: '#1a3fff', color: '#fff' }}
            >
              {t.nav.getApp}
            </a>
          </div>

          {/* ── Hamburger (mobile) ── */}
          <div className="md:hidden flex items-center gap-3 ml-auto">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="opacity-70 hover:opacity-100"
              style={{ color: '#0d1b5e' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
            </button>
            <button
              className="flex flex-col justify-center items-center gap-1.5 p-2"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle navigation"
            >
              <span className={`block w-6 h-0.5 transition-transform duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} style={{ background: '#0d1b5e' }} />
              <span className={`block w-6 h-0.5 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} style={{ background: '#0d1b5e' }} />
              <span className={`block w-6 h-0.5 transition-transform duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} style={{ background: '#0d1b5e' }} />
            </button>
          </div>
        </div>

        {/* ── Mobile drawer ── */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-6 flex flex-col gap-4 shadow-lg">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-base transition"
                style={{ color: '#0d1b5e', fontWeight: pathname === href ? 700 : 500 }}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <div className="pt-3 border-t border-gray-100">
              <MobileLangGrid />
            </div>
            <div className="pt-2">
              <a
                href={APPSTORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center text-white text-sm font-bold py-2.5 rounded-full transition hover:opacity-90"
                style={{ background: '#1a3fff' }}
              >
                {t.nav.getApp}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
