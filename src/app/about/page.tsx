'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PlacesAliveSection from '@/components/PlacesAliveSection'
import { APPSTORE_URL, PLAYSTORE_URL, imgGooglePlay, imgAppStore } from '@/lib/images'
import Image from 'next/image'
import { useLanguage } from '@/lib/LanguageContext'

// ─── 1. Hero ─────────────────────────────────────────────────────────────────
function AboutHero() {
  const { t } = useLanguage()
  return (
    <section className="w-full bg-white text-center px-4 sm:px-6 lg:px-8"
      style={{ paddingTop: '9rem', paddingBottom: '3rem' }}>
      <h1
        className="font-black tracking-tight"
        style={{ fontSize: 'clamp(3rem, 9vw, 6.5rem)', color: '#1a3fff', lineHeight: 1.05 }}
      >
        {t.about.heading} Presenz.
      </h1>
    </section>
  )
}

// ─── 2. Not Social Media ─────────────────────────────────────────────────────
// Matches image8: landing.png city aerial bg, warm-peach overlay, centered text
function NotSocialMedia() {
  const { t } = useLanguage()
  return (
    <section
      className="relative w-full py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage: "url('/landing.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center 35%',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,235,220,0.60) 0%, rgba(210,200,255,0.55) 100%)',
        }}
      />
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2
          className="font-black mb-7 leading-tight"
          style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#0a0f3d' }}
        >
          {t.about.missionHeading1} {t.about.missionHeading2}
        </h2>
        <p className="text-base sm:text-lg leading-relaxed mb-5" style={{ color: '#1a3fff' }}>
          {t.about.missionDesc}
        </p>
        <div className="space-y-1 mb-5 text-base sm:text-lg" style={{ color: '#1a3fff' }}>
          <p>{t.about.noPerformanceTitle}.</p>
          <p>{t.about.noAttentionTitle}.</p>
          <p>{t.about.noContentTitle}.</p>
        </div>
        <p className="font-semibold text-base sm:text-lg italic" style={{ color: '#1a3fff' }}>
          {t.about.missionQuote}
        </p>
      </div>
    </section>
  )
}

// ─── 3. Our Belief — CSS gradient background (no image) ─────────────────────
// Background: Linear Gradient #2B4DFF → #FFFFFF 80%
// Drop shadow: X0 Y4 Blur60 Spread0 #2B4DFF 20%
function OurBeliefCity() {
  const { t } = useLanguage()
  return (
    <section
      className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
      style={{
        background: 'linear-gradient(135deg, #2B4DFF 0%, rgba(255,255,255,0.80) 60%, rgba(255,255,255,0.80) 100%)',
        boxShadow: '0px 4px 60px 0px rgba(43,77,255,0.20)',
      }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className="font-black mb-6"
          style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#0a0f3d' }}
        >
          {t.about.ourBelief}
        </h2>
        <p className="text-base sm:text-lg font-semibold mb-5" style={{ color: '#0d1b5e' }}>
          {t.about.beliefQuote1}
        </p>
        <div className="space-y-1 mb-5 text-sm sm:text-base" style={{ color: '#0d1b5e' }}>
          <p>{t.about.beliefLine1}</p>
          <p>{t.about.beliefLine2}</p>
        </div>
        <p className="text-sm sm:text-base font-semibold" style={{ color: '#0d1b5e' }}>
          {t.about.beliefTagline}
        </p>
      </div>
    </section>
  )
}

// ─── 5. Values Cards ─────────────────────────────────────────────────────────
// Matches image11: blue-to-white gradient bg, 3 plain light-blue cards, no emojis, dark navy text
function ValuesCards() {
  const { t } = useLanguage()
  const CARDS = [
    t.about.card1Lines,
    t.about.card2Lines,
    t.about.card3Lines,
  ]
  return (
    <section
      className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
      style={{ background: 'linear-gradient(to right, #dce8ff 0%, #eef3ff 50%, #ffffff 100%)' }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
        {CARDS.map((lines, i) => (
          <div
            key={i}
            className="rounded-2xl px-7 py-7"
            style={{ background: 'rgba(210, 220, 255, 0.65)' }}
          >
            {lines.map((line) => (
              <p
                key={line}
                className="font-bold text-base sm:text-lg mb-2 last:mb-0"
                style={{ color: '#0d1b5e' }}
              >
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── 7. CTA Section ──────────────────────────────────────────────────────────
// Matches image13: solid blue gradient, centered text pairs, "Get App" button
function CtaSection() {
  const { t } = useLanguage()
  const lines = [
    [t.about.ctaLine1a, t.about.ctaLine1b],
    [t.about.ctaLine2a, t.about.ctaLine2b],
    [t.about.ctaLine3a, t.about.ctaLine3b],
  ]
  return (
    <section
      className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center"
      style={{ background: 'linear-gradient(to bottom, #b8c8ff 0%, #7890e8 100%)' }}
    >
      <div className="max-w-xl mx-auto">
        <div className="space-y-6 mb-12">
          {lines.map(([a, b], i) => (
            <div key={i}>
              <p className="text-lg sm:text-xl font-semibold" style={{ color: '#0d1b5e', opacity: 0.7 }}>
                {a}
              </p>
              <p className="text-xl sm:text-2xl font-black" style={{ color: '#0d1b5e' }}>
                {b}
              </p>
            </div>
          ))}
        </div>
        <a
          href={APPSTORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-black text-lg px-16 py-4 rounded-full transition shadow-xl hover:opacity-90"
          style={{ background: '#1a3fff', color: '#fff' }}
        >
          {t.about.getApp}
        </a>
      </div>
    </section>
  )
}

// ─── 8. App store badges ──────────────────────────────────────────────────────
// Matches image13 bottom: white bg, centered store badges
function AppStoreBadges() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a href={PLAYSTORE_URL} target="_blank" rel="noopener noreferrer"
          className="hover:opacity-90 hover:scale-105 transition-all">
          <Image src={imgGooglePlay} alt="Get it on Google Play" width={180} height={60} className="h-14 w-auto" />
        </a>
        <a href={APPSTORE_URL} target="_blank" rel="noopener noreferrer"
          className="hover:opacity-90 hover:scale-105 transition-all">
          <Image src={imgAppStore} alt="Download on the App Store" width={180} height={60} className="h-14 w-auto" />
        </a>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
// Section order matches image14 (complete reference):
// Hero → NotSocialMedia → OurBeliefGradient → OurBeliefCity → ValuesCards → PlacesAlive → CTA → Badges → Footer
export default function AboutPage() {
  return (
    <div className="w-full bg-white">
      <Navbar />
      <AboutHero />
      <NotSocialMedia />
      <OurBeliefCity />
      <ValuesCards />
      <PlacesAliveSection />
      <CtaSection />
      <AppStoreBadges />
      <Footer />
    </div>
  )
}
