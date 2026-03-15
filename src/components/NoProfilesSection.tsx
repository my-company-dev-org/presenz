'use client'

import { useLanguage } from '@/lib/LanguageContext'

export default function NoProfilesSection() {
  const { t } = useLanguage()

  return (
    <section
      className="relative py-20 sm:py-28 md:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage: `url('/bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-3xl mx-auto text-center relative z-10">
        {[t.noProfiles.line1, t.noProfiles.line2, t.noProfiles.line3].map((line) => (
          <h2
            key={line}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-5 leading-tight"
          >
            {line}
          </h2>
        ))}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-presenz-blue mt-4">
          {t.noProfiles.tagline}
        </h2>
      </div>
    </section>
  )
}
