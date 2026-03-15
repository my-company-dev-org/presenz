'use client'

import { useState } from 'react'
import { imgCategory1, imgCategory2, imgCategory3, imgCategory4 } from '@/lib/images'
import { useLanguage } from '@/lib/LanguageContext'

export default function CategorySection() {
  const [active, setActive] = useState(0)
  const { t } = useLanguage()

  const CATEGORIES = [
    { img: imgCategory1, shadow: 'shadow-[0px_8px_40px_0px_#082def]', label: t.category.music, color: 'bg-presenz-blue' },
    { img: imgCategory2, shadow: 'shadow-[0px_8px_40px_0px_#8ab83f]', label: t.category.food,  color: 'bg-green-500' },
    { img: imgCategory3, shadow: 'shadow-[0px_8px_40px_0px_#ff3d8b]', label: t.category.night, color: 'bg-pink-500' },
    { img: imgCategory4, shadow: 'shadow-[0px_8px_40px_0px_#007dd1]', label: t.category.cinema, color: 'bg-blue-500' },
  ]

  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent">
            {t.category.heading}
          </h2>
          <p className="text-lg sm:text-xl text-presenz-navy opacity-70">
            {t.category.subheading}
          </p>
        </div>

        {/* Cards — full height images */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
          {CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`group relative rounded-2xl border-2 overflow-hidden transition-all duration-300
                hover:scale-[1.03] hover:-translate-y-1 focus:outline-none
                ${active === idx
                  ? `border-presenz-blue ${cat.shadow}`
                  : `border-transparent ${cat.shadow} opacity-90 hover:opacity-100`
                }`}
              style={{ aspectRatio: '3/4' }}
              aria-label={`Browse ${cat.label}`}
            >
              <img src={cat.img} alt={cat.label} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="text-white font-bold text-base sm:text-lg tracking-wide drop-shadow">{cat.label}</span>
                <span className={`${cat.color} w-2.5 h-2.5 rounded-full ring-2 ring-white`} />
              </div>
              {active === idx && (
                <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-0.5 text-xs font-bold text-presenz-blue shadow">●</div>
              )}
            </button>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2" role="tablist">
          {CATEGORIES.map((_, idx) => (
            <button
              key={idx}
              role="tab"
              aria-selected={active === idx}
              onClick={() => setActive(idx)}
              className={`transition-all duration-300 rounded-full ${
                active === idx ? 'bg-presenz-blue w-6 h-2' : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
