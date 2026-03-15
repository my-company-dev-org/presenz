'use client'

import Image from 'next/image'
import { imgHeroBg, imgGooglePlay, imgAppStore, APPSTORE_URL, PLAYSTORE_URL } from '@/lib/images'
import { useLanguage } from '@/lib/LanguageContext'

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section
      className="relative w-full pt-20 pb-8 sm:pt-24 sm:pb-12 md:pt-32 md:pb-16 lg:pt-40 lg:pb-20 min-h-screen md:min-h-[700px]"
      style={{
        backgroundImage: `url('${imgHeroBg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(-69deg, rgba(255,255,255,0) 0%, rgba(212,144,255,0.3) 60%, rgba(255,238,151,0.4) 72%, rgba(255,255,255,0.85) 83%, rgba(255,255,255,0.9) 94%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-presenz-navy">
            {t.hero.heading1}<br />{t.hero.heading2}
          </h1>
          <p className="text-lg sm:text-2xl md:text-4xl font-black text-presenz-blue mb-4">
            {t.hero.tagline}
          </p>
          <p className="text-base sm:text-lg md:text-xl text-presenz-navy mb-8 max-w-md opacity-80">
            {t.hero.description}
          </p>

          <button className="bg-presenz-blue hover:bg-blue-700 text-white font-semibold py-2.5 sm:py-3 px-7 sm:px-9 rounded-full transition mb-10 text-sm sm:text-base shadow-lg shadow-blue-200">
            {t.hero.cta}
          </button>

          {/* App store badges */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href={PLAYSTORE_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-90 transition">
              <Image src={imgGooglePlay} alt="Get it on Google Play" width={160} height={56} className="h-12 sm:h-14 w-auto" />
            </a>
            <a href={APPSTORE_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-90 transition">
              <Image src={imgAppStore} alt="Download on the App Store" width={160} height={56} className="h-12 sm:h-14 w-auto" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
