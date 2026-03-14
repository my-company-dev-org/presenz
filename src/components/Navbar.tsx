'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { imgLogo, APPSTORE_URL } from '@/lib/images'

const NAV_LINKS = [
  { label: 'Home',  href: '/' },
  { label: 'About', href: '/about' },
]

// ─── Search overlay ───────────────────────────────────────────────────────────
function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState('')
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
            placeholder="Search events, artists, places…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 text-base outline-none text-gray-800 placeholder-gray-400"
          />
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
        </div>
        {query.length === 0 && (
          <div className="px-5 py-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Popular</p>
            {['Live Music', 'Art Exhibitions', 'Fashion Shows', 'Cultural Events'].map((s) => (
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
            Searching for <span className="font-semibold text-gray-800">"{query}"</span>…
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [menuOpen,   setMenuOpen]   = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}

      <header
        className="fixed top-0 left-0 right-0 z-50 w-full"
        style={{
          background: 'rgba(255,255,255,0.75)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">

          {/* ── Logo ── */}
          <a href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src={imgLogo}
              alt="PresenZ logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <span
              className="text-xl font-black tracking-[0.18em] uppercase text-gray-900 hidden sm:inline"
              style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', letterSpacing: '0.18em' }}
            >
              PRESENZ
            </span>
          </a>

          {/* ── Desktop nav — centred ── */}
          <nav className="hidden md:flex gap-10 items-center absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={`text-sm font-semibold tracking-wide transition ${
                  pathname === href ? 'text-presenz-blue' : 'text-gray-800 hover:text-presenz-blue'
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* ── Right side ── */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            {/* Search */}
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="text-gray-600 hover:text-presenz-blue transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
            </button>
            {/* Language */}
            <button className="text-gray-600 text-sm font-medium hover:opacity-70 transition">En</button>
            {/* Get App */}
            <a
              href={APPSTORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-presenz-blue hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-bold tracking-wide transition"
            >
              Get App
            </a>
          </div>

          {/* ── Hamburger (mobile) ── */}
          <div className="md:hidden flex items-center gap-3 ml-auto">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="text-gray-600 hover:text-presenz-blue transition"
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
              <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </button>
          </div>
        </div>

        {/* ── Mobile drawer ── */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-6 flex flex-col gap-4 shadow-lg">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={`text-base font-semibold transition ${
                  pathname === href ? 'text-presenz-blue' : 'text-gray-800 hover:text-presenz-blue'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-100">
              <a
                href={APPSTORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-presenz-blue hover:bg-blue-700 text-white px-4 py-2.5 rounded-full text-sm font-bold tracking-wide transition"
              >
                Get App
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
