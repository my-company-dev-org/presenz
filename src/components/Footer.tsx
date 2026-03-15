'use client'

import { APPSTORE_URL } from '@/lib/images'
import { useLanguage } from '@/lib/LanguageContext'

const SOCIAL = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/presenzapp',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: 'https://www.twitter.com/presenzapp',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/presenzapp',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/presenzapp',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
]

// 3D location-pin SVG matching client design (purple/blue glow with rings)
function Pin3D() {
  return (
    <svg width="56" height="66" viewBox="0 0 56 66" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer glow ring */}
      <ellipse cx="28" cy="57" rx="20" ry="6" fill="url(#ring1)" opacity="0.35" />
      <ellipse cx="28" cy="57" rx="13" ry="4" fill="url(#ring2)" opacity="0.45" />
      {/* Pin body */}
      <path
        d="M28 2C18.06 2 10 10.06 10 20c0 13.5 18 42 18 42s18-28.5 18-42C46 10.06 37.94 2 28 2z"
        fill="url(#pinGrad)"
      />
      {/* Inner circle */}
      <circle cx="28" cy="20" r="8" fill="rgba(255,255,255,0.3)" />
      <circle cx="28" cy="20" r="5" fill="rgba(255,255,255,0.6)" />
      {/* Shine highlight */}
      <ellipse cx="23" cy="15" rx="4" ry="3" fill="rgba(255,255,255,0.35)" transform="rotate(-20 23 15)" />
      <defs>
        <radialGradient id="pinGrad" cx="40%" cy="25%" r="70%">
          <stop offset="0%" stopColor="#a060ff" />
          <stop offset="50%" stopColor="#5040d0" />
          <stop offset="100%" stopColor="#1a20a0" />
        </radialGradient>
        <radialGradient id="ring1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6040e0" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="ring2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8060f0" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
    </svg>
  )
}

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="w-full" style={{ background: '#e8eef8' }}>

      {/* ── Top row: 3D pin + nav ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row justify-between items-center gap-6">
        {/* 3D pin logo */}
        <a href="/" className="flex items-center gap-3 shrink-0">
          <Pin3D />
        </a>

        {/* Nav links */}
        <nav className="flex items-center gap-6 sm:gap-8">
          <a href="/" className="text-sm font-semibold transition hover:opacity-70" style={{ color: '#0d1b5e' }}>
            {t.footer.home}
          </a>
          <a href="/about" className="text-sm font-semibold transition hover:opacity-70" style={{ color: '#0d1b5e' }}>
            {t.footer.about}
          </a>
          <a
            href={APPSTORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold transition hover:opacity-70"
            style={{ color: '#0d1b5e' }}
          >
            {t.footer.downloadApp}
          </a>
        </nav>
      </div>

      {/* ── Divider ── */}
      <div style={{ borderTop: '1px solid rgba(13,27,94,0.15)' }} />

      {/* ── Bottom row ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Copyright + legal */}
        <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: '#0d1b5e', opacity: 0.7 }}>
          <span>&copy; {year} {t.footer.rights}</span>
          <a href="/privacy" className="hover:opacity-100 transition" style={{ color: '#0d1b5e' }}>
            {t.footer.privacy}
          </a>
          <a href="/terms" className="hover:opacity-100 transition" style={{ color: '#0d1b5e' }}>
            {t.footer.terms}
          </a>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          {SOCIAL.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="transition hover:opacity-60"
              style={{ color: '#0d1b5e' }}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
