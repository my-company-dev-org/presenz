'use client'

import Image from 'next/image'
import { imgExperience } from '@/lib/images'
import { useLanguage } from '@/lib/LanguageContext'

export default function TheExperienceSection() {
  const { t } = useLanguage()

  return (
    <section
      className="w-full overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #dce6ff 40%, #6070d0 100%)',
      }}
    >
      {/* Translated title sits above the image */}
      <div className="text-center pt-12 pb-2 px-4">
        <h2
          className="font-black mb-2"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#0d1b5e' }}
        >
          {t.theExperience.title}
        </h2>
        <p
          className="font-bold text-base sm:text-lg"
          style={{ color: '#1a3fff' }}
        >
          {t.theExperience.subtitle}
        </p>
      </div>

      {/* Image — crop the top portion that has the baked-in title using overflow+negative margin */}
      <div className="overflow-hidden" style={{ marginTop: '-2px' }}>
        <Image
          src={imgExperience}
          alt="Presenz app — 5 screens"
          width={1440}
          height={860}
          className="w-full h-auto"
          style={{
            /* Push image up to hide its baked-in title row (~17% of height) */
            marginTop: '-17%',
          }}
          priority
        />
      </div>
    </section>
  )
}
