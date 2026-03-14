import Image from 'next/image'
import { imgIphone, APPSTORE_URL } from '@/lib/images'

export default function IPhoneSection() {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* ── iPhone mockup ── */}
          <div className="flex justify-center order-2 md:order-1 relative">
            {/* Glow behind phone */}
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-30 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #2b4dff 0%, #a78bfa 60%, transparent 80%)' }}
            />
            <Image
              src={imgIphone}
              alt="Presenz live map on iPhone"
              width={340}
              height={680}
              className="relative z-10 w-64 sm:w-72 md:w-80 h-auto drop-shadow-2xl"
              priority
            />
          </div>

          {/* ── Copy ── */}
          <div className="order-1 md:order-2">
            {/* Live badge */}
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-700 text-xs font-bold tracking-wider uppercase">Live Now</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-blue-600 to-slate-900 bg-clip-text text-transparent">
              See what&apos;s happening.<br />Where it&apos;s happening.
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-presenz-navy opacity-75 mb-10 leading-relaxed">
              Every pulse appears live on the map, exactly where the moment exists — and disappears
              automatically after 48 hours.
            </p>

            {/* Stats row */}
            <div className="flex gap-8 mb-10">
              {[
                { value: '10K+', label: 'Live Events' },
                { value: '50+', label: 'Cities' },
                { value: '48h', label: 'Event Window' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-extrabold text-presenz-blue">{value}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{label}</p>
                </div>
              ))}
            </div>

            <a
              href={APPSTORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-presenz-blue hover:bg-blue-700 text-white font-bold py-3.5 px-10 rounded-full transition shadow-lg shadow-blue-200 text-sm sm:text-base"
            >
              Open Live Pulse
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
