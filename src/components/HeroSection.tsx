'use client'

import { imgHeroBg, APPSTORE_URL, PLAYSTORE_URL } from '@/lib/images'
import { useLanguage } from '@/lib/LanguageContext'

// ── Custom white-bg store badges matching reference screenshot ────────────────
function GooglePlayBadge() {
  return (
    <a
      href={PLAYSTORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-90 transition flex items-center gap-2.5 rounded-xl"
      style={{
        background: '#fff',
        border: '1.5px solid #d0d0d0',
        padding: '8px 18px',
        minWidth: '155px',
        textDecoration: 'none',
      }}
    >
      {/* Google Play triangle icon */}
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 2.8L18.4 16 4 29.2V2.8z" fill="url(#gp1)"/>
        <path d="M23.2 10.8L6.4 1.6 19.6 14.8l3.6-4z" fill="url(#gp2)"/>
        <path d="M23.2 21.2l-3.6-4L6.4 30.4l16.8-9.2z" fill="url(#gp3)"/>
        <path d="M25.6 12.4L19.6 16l6 3.6c1.6-.96 2.4-2.24 2.4-3.6s-.8-2.64-2.4-3.6z" fill="url(#gp4)"/>
        <defs>
          <linearGradient id="gp1" x1="4" y1="16" x2="18.4" y2="16" gradientUnits="userSpaceOnUse">
            <stop stopColor="#32BBFF"/>
            <stop offset="1" stopColor="#1A6FF4"/>
          </linearGradient>
          <linearGradient id="gp2" x1="6.4" y1="8.2" x2="23.2" y2="8.2" gradientUnits="userSpaceOnUse">
            <stop stopColor="#32BBFF"/>
            <stop offset="1" stopColor="#29CC6A"/>
          </linearGradient>
          <linearGradient id="gp3" x1="6.4" y1="23.8" x2="23.2" y2="23.8" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F03826"/>
            <stop offset="1" stopColor="#F5A623"/>
          </linearGradient>
          <linearGradient id="gp4" x1="19.6" y1="16" x2="28" y2="16" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F5A623"/>
            <stop offset="1" stopColor="#F03826"/>
          </linearGradient>
        </defs>
      </svg>
      <div>
        <div style={{ fontSize: '0.6rem', color: '#111', lineHeight: 1.2 }}>GET IT ON</div>
        <div style={{ fontSize: '1rem', color: '#111', fontWeight: 700, lineHeight: 1.2, whiteSpace: 'nowrap' }}>Google Play</div>
      </div>
    </a>
  )
}

function AppStoreBadge() {
  return (
    <a
      href={APPSTORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-90 transition flex items-center gap-2.5 rounded-xl"
      style={{
        background: '#fff',
        border: '1.5px solid #d0d0d0',
        padding: '8px 18px',
        minWidth: '155px',
        textDecoration: 'none',
      }}
    >
      {/* Apple logo — correct path */}
      <svg width="22" height="26" viewBox="0 0 170 170" fill="#111" xmlns="http://www.w3.org/2000/svg">
        <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.197-2.12-9.973-3.17-14.34-3.17-4.58 0-9.49 1.05-14.732 3.17-5.252 2.13-9.481 3.24-12.702 3.35-4.924.21-9.84-1.96-14.748-6.52-3.13-2.73-7.045-7.41-11.735-14.04-5.032-7.08-9.169-15.29-12.41-24.65-3.471-10.11-5.211-19.9-5.211-29.378 0-10.857 2.346-20.221 7.045-28.068 3.693-6.303 8.606-11.275 14.755-14.925s12.793-5.51 19.948-5.629c3.915 0 9.049 1.211 15.429 3.591 6.362 2.388 10.447 3.599 12.238 3.599 1.339 0 5.877-1.416 13.57-4.239 7.275-2.618 13.415-3.702 18.445-3.275 13.63 1.1 23.87 6.473 30.68 16.153-12.19 7.386-18.22 17.731-18.1 31.002.11 10.337 3.86 18.939 11.23 25.769 3.34 3.17 7.07 5.62 11.22 7.36-.9 2.61-1.85 5.11-2.86 7.51zM119.11 7.24c0 8.102-2.96 15.667-8.86 22.669-7.12 8.324-15.732 13.134-25.071 12.375a25.222 25.222 0 0 1-.188-3.07c0-7.778 3.386-16.102 9.399-22.908 3.002-3.446 6.82-6.311 11.45-8.597 4.62-2.252 8.99-3.497 13.1-3.71.12 1.017.17 2.035.17 3.241z"/>
      </svg>
      <div>
        <div style={{ fontSize: '0.6rem', color: '#111', lineHeight: 1.2 }}>Available on the</div>
        <div style={{ fontSize: '1rem', color: '#111', fontWeight: 700, lineHeight: 1.2, whiteSpace: 'nowrap' }}>App Store</div>
      </div>
    </a>
  )
}

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section
      className="relative w-full"
      style={{
        height: '100vh',
        minHeight: '600px',
        backgroundImage: `url('${imgHeroBg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Warm yellow glow top-left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 48% 60% at -2% -5%, rgba(255,235,100,0.50) 0%, rgba(255,200,60,0.20) 30%, rgba(200,220,255,0.05) 55%, transparent 72%)',
        }}
      />
      {/* Light left-edge fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(255,255,255,0.40) 0%, rgba(255,255,255,0.18) 15%, rgba(255,255,255,0.04) 30%, rgba(255,255,255,0) 45%)',
        }}
      />

      {/* ── Content — pushed hard to left edge ── */}
      <div
        className="relative z-10 w-full"
        style={{ paddingLeft: '32px', paddingTop: '60px' }}
      >
        <h1
          className="font-black leading-tight mb-1"
          style={{
            fontSize: 'clamp(2.0rem, 3.8vw, 3.2rem)',
            color: '#0d1b5e',
            whiteSpace: 'nowrap',
          }}
        >
          {t.hero.heading1} {t.hero.heading2}
        </h1>

        <p
          className="font-black mb-3"
          style={{
            fontSize: 'clamp(1.8rem, 3.4vw, 2.8rem)',
            color: '#1a3fff',
            whiteSpace: 'nowrap',
          }}
        >
          {t.hero.tagline}
        </p>

        <p
          className="mb-5 leading-snug"
          style={{
            fontSize: 'clamp(1.0rem, 1.6vw, 1.25rem)',
            color: '#0d1b5e',
            opacity: 0.92,
          }}
        >
          {t.hero.description}
        </p>

        <div className="mb-6">
          <button
            className="font-semibold rounded-full hover:opacity-90 transition"
            style={{
              background: '#1a3fff',
              color: '#fff',
              padding: '11px 34px',
              fontSize: '1rem',
            }}
          >
            {t.hero.cta}
          </button>
        </div>

        {/* White-bg store badges */}
        <div className="flex flex-row gap-3">
          <GooglePlayBadge />
          <AppStoreBadge />
        </div>
      </div>
    </section>
  )
}
