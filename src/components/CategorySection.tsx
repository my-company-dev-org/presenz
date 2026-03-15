'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

const CATEGORIES = [
  {
    img: '/music.png',
    label: 'Music',
    event: 'ABC Music Fest',
    border: '#1a3fff',
    pill: { bg: '#1a3fff', text: '#fff' },
    play: '#1a3fff',
    progress: '#1a3fff',
  },
  {
    img: '/night.png',
    label: 'Night',
    event: 'Party',
    border: '#e0006a',
    pill: { bg: '#e0006a', text: '#fff' },
    play: '#e0006a',
    progress: '#e0006a',
  },
  {
    img: '/food.png',
    label: 'Food',
    event: 'Food Fest',
    border: '#84cc16',
    pill: { bg: '#84cc16', text: '#fff' },
    play: '#84cc16',
    progress: '#84cc16',
  },
  {
    img: '/cinema.png',
    label: 'Cinema',
    event: 'Movie Theatre',
    border: '#06b6d4',
    pill: { bg: '#06b6d4', text: '#fff' },
    play: '#06b6d4',
    progress: '#06b6d4',
  },
]

export default function CategorySection() {
  const [active, setActive] = useState(0)
  const { t } = useLanguage()

  return (
    <section
      className="w-full py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: 'linear-gradient(to right, #1a3fff 0%, #4060ff 15%, #8090e8 40%, #c8d4ff 65%, #eef2ff 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className="font-black mb-3"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#0d1b5e' }}
          >
            {t.category.heading}
          </h2>
          <p className="text-base sm:text-lg" style={{ color: '#0d1b5e', opacity: 0.75 }}>
            {t.category.subheading}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
          {CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className="group relative rounded-2xl overflow-hidden focus:outline-none transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
              style={{
                aspectRatio: '3/4',
                border: `3px solid ${cat.border}`,
                boxShadow: active === idx ? `0 0 0 3px ${cat.border}55, 0 12px 40px ${cat.border}44` : `0 8px 30px ${cat.border}33`,
              }}
            >
              {/* Photo */}
              <img
                src={cat.img}
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Darken overlay */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 100%)' }}
              />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                  style={{ background: `${cat.play}cc`, backdropFilter: 'blur(4px)' }}
                >
                  <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 px-3 pb-3">
                {/* Progress bar */}
                <div className="flex items-center gap-2 mb-2.5">
                  <div className="flex-1 h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.3)' }}>
                    <div
                      className="h-1 rounded-full"
                      style={{ width: '40%', background: cat.progress }}
                    />
                  </div>
                  <span className="text-white text-xs opacity-80">0:10</span>
                </div>

                {/* Category pill */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: cat.pill.bg, color: cat.pill.text }}
                  >
                    {cat.label}
                  </span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1 mt-1.5">
                  <svg className="w-3 h-3 text-white opacity-80 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span className="text-white text-xs font-semibold opacity-90">{cat.event}</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2">
          {CATEGORIES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className="rounded-full transition-all duration-300"
              style={{
                width: active === idx ? '24px' : '8px',
                height: '8px',
                background: active === idx ? '#fff' : 'rgba(255,255,255,0.5)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
