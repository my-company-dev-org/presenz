'use client'

import { useLanguage } from '@/lib/LanguageContext'

export default function NoProfilesSection() {
  const { t } = useLanguage()

  return (
    <section
      className="relative w-full py-24 sm:py-32 md:py-48 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage: "url('/bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Light blue tint — matches image5 exactly (~45% opacity) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'rgba(168, 185, 240, 0.48)' }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {[t.noProfiles.line1, t.noProfiles.line2, t.noProfiles.line3].map((line) => (
          <h2
            key={line}
            className="font-black mb-6 sm:mb-8 leading-tight"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)', color: '#0d1b5e' }}
          >
            {line}
          </h2>
        ))}
        <h2
          className="font-black mt-6"
          style={{ fontSize: 'clamp(2.6rem, 7vw, 4.5rem)', color: '#1a3fff' }}
        >
          {t.noProfiles.tagline}
        </h2>
      </div>
    </section>
  )
}
