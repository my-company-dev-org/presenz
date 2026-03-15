'use client'

import { useLanguage } from '@/lib/LanguageContext'

// 3 event cards matching image2 exactly
const CARDS = [
  {
    tag: 'ART',
    tagStyle: { background: '#ffe0ec', color: '#d4006a' },
    accentColor: '#d4006a',
    title: 'Contemporary Exhibition',
    venue: 'Fondation Beyeler',
    time: 'Now – 6:00 PM',
    live: false,
    zIndex: 1,
    top: '0px', left: '0px',
  },
  {
    tag: 'MUSIC',
    tagStyle: { background: '#e0e8ff', color: '#1a3fff' },
    accentColor: '#1a3fff',
    title: 'Jazz Night Sessions',
    venue: 'Blue Note Club',
    time: '8:00 PM – Late',
    live: false,
    zIndex: 2,
    top: '70px', left: '60px',
  },
  {
    tag: 'NIGHTLIFE',
    tagStyle: { background: '#ffe0ec', color: '#d4006a' },
    accentColor: '#d4006a',
    title: 'Warehouse Opening',
    venue: 'District 5',
    time: '10:00 PM – 4:00 AM',
    live: true,
    zIndex: 3,
    top: '185px', left: '110px',
  },
]

export default function ExperienceSection() {
  const { t } = useLanguage()

  return (
    <section
      className="w-full py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #ccd8ff 0%, #9aa8f0 30%, #4455cc 70%, #3344bb 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* ── Left: heading + body ── */}
          <div>
            <h2
              className="font-black leading-tight mb-6"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', color: '#0d1b5e' }}
            >
              A new way to<br />
              experience{' '}
              <span style={{ color: '#1a3fff' }}>culture.</span>
            </h2>
            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{ color: '#0d1b5e', maxWidth: '460px', opacity: 0.85 }}
            >
              {t.experience.description}
            </p>
          </div>

          {/* ── Right: stacked overlapping cards — desktop ── */}
          <div className="hidden lg:block relative" style={{ height: '420px' }}>
            {CARDS.map((card) => (
              <div
                key={card.tag}
                className="absolute bg-white rounded-2xl shadow-2xl p-5"
                style={{
                  width: '260px',
                  top: card.top,
                  left: card.left,
                  zIndex: card.zIndex,
                  borderBottom: `3px solid ${card.accentColor}`,
                }}
              >
                <span
                  className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3"
                  style={card.tagStyle}
                >
                  {card.tag}
                </span>
                <h3 className="font-bold text-lg mb-3" style={{ color: '#0d1b5e' }}>{card.title}</h3>
                <p className="text-sm text-gray-400 mb-1">{card.venue}</p>
                <p className="text-sm text-gray-400 mb-3">{card.time}</p>
                {card.live && (
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#22c55e' }} />
                    <span className="text-xs font-bold" style={{ color: '#22c55e' }}>
                      {t.experience.liveNow}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* ── Right: flat stacked cards — mobile/tablet ── */}
          <div className="lg:hidden flex flex-col gap-4">
            {CARDS.map((card) => (
              <div
                key={card.tag}
                className="bg-white rounded-2xl shadow-xl p-5"
                style={{ borderBottom: `3px solid ${card.accentColor}` }}
              >
                <span
                  className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3"
                  style={card.tagStyle}
                >
                  {card.tag}
                </span>
                <h3 className="font-bold text-lg mb-2" style={{ color: '#0d1b5e' }}>{card.title}</h3>
                <p className="text-sm text-gray-400 mb-1">{card.venue}</p>
                <p className="text-sm text-gray-400 mb-2">{card.time}</p>
                {card.live && (
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#22c55e' }} />
                    <span className="text-xs font-bold" style={{ color: '#22c55e' }}>
                      {t.experience.liveNow}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
