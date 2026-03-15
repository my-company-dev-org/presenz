'use client'

import Image from 'next/image'
import { APPSTORE_URL } from '@/lib/images'
import { useLanguage } from '@/lib/LanguageContext'

export default function IPhoneSection() {
  const { t } = useLanguage()

  return (
    <section
      className="w-full py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        /* Exact gradient sampled from ip.jpg:
           TopLeft #93A0FF → TopRight #4764FD → BotLeft #F1F4FD → BotRight #B9C3FE */
        background: 'linear-gradient(135deg, #aab8ff 0%, #7088fe 25%, #4764fd 55%, #b9c3fe 80%, #f1f4fd 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* ── iPhone — LEFT ── */}
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            {/*
              border-radius clips the blue rectangular corners of the JPEG
              so only the phone frame shape is visible against the light bg.
              border-radius value matches iPhone frame corner radius (~40px for this image size).
              overflow:hidden does the actual clipping.
              drop-shadow gives the 3D floating effect seen in ip.jpg.
            */}
            <div
              className="w-56 sm:w-64 md:w-72"
              style={{
                borderRadius: '42px',
                overflow: 'hidden',
                filter: 'drop-shadow(0px 20px 48px rgba(30, 50, 180, 0.45)) drop-shadow(0px 4px 12px rgba(20, 40, 160, 0.30))',
              }}
            >
              <Image
                src="/iphone.jpeg"
                alt="Presenz live map on iPhone — Paris"
                width={320}
                height={640}
                className="w-full h-auto block"
                priority
              />
            </div>
          </div>

          {/* ── Copy — RIGHT ── */}
          <div className="order-1 md:order-2">
            <h2
              className="font-black leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#0d1b5e' }}
            >
              {t.iphone.heading1}<br />
              {t.iphone.heading2}
            </h2>

            <p
              className="text-base sm:text-lg leading-relaxed mb-10"
              style={{ color: '#0d1b5e', opacity: 0.85, maxWidth: '480px' }}
            >
              {t.iphone.description}
            </p>

            <a
              href={APPSTORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-bold py-3.5 px-10 rounded-full transition text-sm sm:text-base"
              style={{
                background: '#1a3fff',
                color: '#fff',
                boxShadow: '0 4px 20px rgba(26,63,255,0.4)',
              }}
            >
              {t.iphone.cta}
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
