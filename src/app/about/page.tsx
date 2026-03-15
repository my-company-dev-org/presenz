'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { APPSTORE_URL, PLAYSTORE_URL, imgGooglePlay, imgAppStore } from '@/lib/images'
import Image from 'next/image'
import { useLanguage } from '@/lib/LanguageContext'

// ─── Section 1: Hero ──────────────────────────────────────────────────────────
function AboutHero() {
  const { t } = useLanguage()
  return (
    <section className="relative pt-36 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden text-center bg-white">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-presenz-blue to-transparent" />
      <div className="absolute top-20 -left-24 w-96 h-96 rounded-full opacity-[0.06] bg-presenz-blue blur-3xl pointer-events-none" />
      <div className="absolute top-10 -right-24 w-80 h-80 rounded-full opacity-[0.05] bg-violet-500 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-presenz-blue text-xs font-bold tracking-[0.2em] uppercase px-5 py-2 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-presenz-blue" />
          {t.about.whoWeAre}
        </span>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 tracking-tight leading-[1.05] mb-6">
          {t.about.heading}{' '}
          <span className="text-presenz-blue">Presenz.</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-500 max-w-xl mx-auto leading-relaxed">
          {t.about.subheading}
        </p>
      </div>
    </section>
  )
}

// ─── Section 2: Not Social Media — full-width aerial bg (matches screenshot) ──
function NotSocialMedia() {
  const { t } = useLanguage()

  return (
    <section
      className="relative w-full py-24 sm:py-32 md:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage: "url('/landing.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
      }}
    >
      {/* Soft white overlay so text is legible over the city photo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.72) 50%, rgba(255,255,255,0.82) 100%)',
        }}
      />

      {/* Content — centred, matching screenshot layout */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
          {t.about.missionHeading1}{' '}
          <span className="relative inline-block">
            {t.about.missionHeading2}
            <span className="absolute -bottom-1 left-0 right-0 h-1 bg-presenz-blue rounded-full" />
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
          {t.about.missionDesc}
        </p>

        <div className="space-y-2 mb-10 text-base sm:text-lg text-gray-700 font-medium">
          <p>{t.about.noPerformanceTitle}.</p>
          <p>{t.about.noAttentionTitle}.</p>
          <p>{t.about.noContentTitle}.</p>
        </div>

        <p className="text-lg sm:text-xl text-gray-800 font-bold italic leading-relaxed">
          {t.about.missionQuote}
        </p>
      </div>
    </section>
  )
}

// ─── Section 3: Our belief ────────────────────────────────────────────────────
function OurBelief() {
  const { t } = useLanguage()
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-presenz-blue mb-3">{t.about.philosophy}</p>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900">{t.about.ourBelief}</h2>
        </div>

        <div className="relative max-w-3xl mx-auto mb-16">
          <div className="absolute -top-6 -left-4 text-8xl text-blue-100 font-serif leading-none select-none">&ldquo;</div>
          <div className="relative z-10 text-center space-y-3">
            <p className="text-xl sm:text-2xl font-bold text-gray-800">{t.about.beliefQuote1}</p>
            <div className="text-base sm:text-lg text-gray-500 leading-relaxed space-y-1">
              <p>{t.about.beliefLine1}</p>
              <p>{t.about.beliefLine2}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50
            border border-blue-100 rounded-2xl px-8 py-5 shadow-sm">
            <span className="text-2xl">✦</span>
            <p className="text-lg font-black text-gray-900 tracking-wide">
              {t.about.beliefTagline.replace('PRESENZ', '')}{' '}
              <span className="text-presenz-blue">PRESENZ.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Section 4: Three cards ───────────────────────────────────────────────────
function BeliefCards() {
  const { t } = useLanguage()

  const CARDS = [
    { emoji: '🧘', title: t.about.card1Title, lines: t.about.card1Lines, gradient: 'from-blue-50 to-indigo-50',    accent: 'bg-blue-500',   hover: 'hover:shadow-blue-100' },
    { emoji: '🚫', title: t.about.card2Title, lines: t.about.card2Lines, gradient: 'from-violet-50 to-purple-50', accent: 'bg-violet-500', hover: 'hover:shadow-violet-100' },
    { emoji: '🏆', title: t.about.card3Title, lines: t.about.card3Lines, gradient: 'from-indigo-50 to-blue-50',   accent: 'bg-indigo-500', hover: 'hover:shadow-indigo-100' },
  ]

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-presenz-blue mb-3">{t.about.values}</p>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900">{t.about.whatWeStandFor}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {CARDS.map((card) => (
            <div key={card.title}
              className={`group relative bg-gradient-to-br ${card.gradient} rounded-3xl px-8 py-10
                border border-white shadow-md hover:shadow-2xl ${card.hover}
                hover:-translate-y-2 transition-all duration-300 cursor-default overflow-hidden`}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 ${card.accent} rounded-t-3xl`} />
              <span className="text-4xl mb-6 block">{card.emoji}</span>
              {card.lines.map((line) => (
                <p key={line} className="text-gray-800 font-bold text-lg leading-snug mb-2 last:mb-0">{line}</p>
              ))}
              <div className={`absolute -bottom-8 -right-8 w-28 h-28 rounded-full ${card.accent} opacity-0
                group-hover:opacity-10 transition-opacity duration-300 blur-xl`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Section 5: CTA ───────────────────────────────────────────────────────────
function CtaSection() {
  const { t } = useLanguage()
  const ctas = [
    [t.about.ctaLine1a, t.about.ctaLine1b],
    [t.about.ctaLine2a, t.about.ctaLine2b],
    [t.about.ctaLine3a, t.about.ctaLine3b],
  ]

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #eef2ff 0%, #e0e7ff 40%, #ede9fe 100%)' }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-blue-200/40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-indigo-200/50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-violet-200/60 pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto text-center">
        <div className="space-y-8 mb-14">
          {ctas.map(([a, b], i) => (
            <div key={i} className="space-y-1">
              <p className="text-xl sm:text-2xl font-semibold text-gray-400">{a}</p>
              <p className="text-2xl sm:text-3xl font-black text-gray-900">{b}</p>
            </div>
          ))}
        </div>

        <a
          href={APPSTORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-presenz-blue hover:bg-blue-700 text-white font-black text-lg
            px-16 py-4 rounded-2xl transition-all shadow-xl shadow-blue-200
            hover:shadow-2xl hover:shadow-blue-300 hover:scale-105 active:scale-95"
        >
          {t.about.getApp}
        </a>
      </div>
    </section>
  )
}

// ─── Section 6: App store badges ─────────────────────────────────────────────
function AppStoreBadges() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a href={PLAYSTORE_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-90 hover:scale-105 transition-all">
          <Image src={imgGooglePlay} alt="Get it on Google Play" width={180} height={60} className="h-14 w-auto" />
        </a>
        <a href={APPSTORE_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-90 hover:scale-105 transition-all">
          <Image src={imgAppStore} alt="Download on the App Store" width={180} height={60} className="h-14 w-auto" />
        </a>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <div className="bg-white w-full">
      <Navbar />
      <AboutHero />
      <NotSocialMedia />
      <OurBelief />
      <BeliefCards />
      <CtaSection />
      <AppStoreBadges />
      <Footer />
    </div>
  )
}
