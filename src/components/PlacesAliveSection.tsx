'use client'

export default function PlacesAliveSection() {
  return (
    <section
      className="relative w-full py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage: "url('/bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Medium blue-purple tint — matches image12 (city at night look) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'rgba(140, 155, 220, 0.58)' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Thin blue border top — matches image12 */}
        <div className="mb-8" style={{ borderTop: '2px solid rgba(26,63,255,0.5)' }} />

        <h2
          className="font-black mb-8 leading-tight"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#0a0f3d' }}
        >
          Places are alive.
        </h2>

        <p
          className="text-base sm:text-lg font-semibold mb-4"
          style={{ color: '#0d1b5e' }}
        >
          Places carry memory.
        </p>

        <div
          className="text-sm sm:text-base leading-relaxed mb-6 space-y-1"
          style={{ color: '#0d1b5e' }}
        >
          <p>Echoes of music.</p>
          <p>Traces of paint.</p>
          <p>Signs of people gathering, leaving, returning.</p>
        </div>

        <p
          className="text-sm sm:text-base font-semibold leading-relaxed"
          style={{ color: '#0d1b5e' }}
        >
          Presenz allows places to speak<br />
          without being ranked, reviewed, or judged.
        </p>

        {/* Thin border bottom */}
        <div className="mt-8" style={{ borderBottom: '2px solid rgba(26,63,255,0.5)' }} />
      </div>
    </section>
  )
}
