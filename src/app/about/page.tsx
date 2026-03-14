import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { APPSTORE_URL, PLAYSTORE_URL, imgGooglePlay, imgAppStore } from '@/lib/images'
import Image from 'next/image'

// ─── Section 1: Hero ──────────────────────────────────────────────────────────
function AboutHero() {
  return (
    <section className="relative pt-36 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden text-center bg-white">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-presenz-blue to-transparent" />

      {/* Soft background shapes */}
      <div className="absolute top-20 -left-24 w-96 h-96 rounded-full opacity-[0.06] bg-presenz-blue blur-3xl pointer-events-none" />
      <div className="absolute top-10 -right-24 w-80 h-80 rounded-full opacity-[0.05] bg-violet-500 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-presenz-blue text-xs font-bold tracking-[0.2em] uppercase px-5 py-2 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-presenz-blue" />
          Who We Are
        </span>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 tracking-tight leading-[1.05] mb-6">
          About{' '}
          <span className="text-presenz-blue">Presenz.</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-500 max-w-xl mx-auto leading-relaxed">
          A new kind of platform — built for presence, not performance.
        </p>
      </div>
    </section>
  )
}

// ─── Section 2: Not social media ─────────────────────────────────────────────
function NotSocialMedia() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left: Big statement */}
        <div>
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-presenz-blue mb-4">Our Mission</p>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-6">
            Presenz is not<br />
            <span className="relative inline-block">
              social media.
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-presenz-blue rounded-full" />
            </span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-6">
            Presenz is a system for noticing culture as it happens in places, moments, and atmospheres.
          </p>
          <p className="text-gray-400 text-base leading-relaxed italic">
            &ldquo;It exists to sense what is real, while it is still real.&rdquo;
          </p>
        </div>

        {/* Right: 3 hover cards */}
        <div className="flex flex-col gap-4">
          {[
            { icon: '🚫', title: 'No performance', desc: 'It does not ask people to perform or curate their moments.' },
            { icon: '🔕', title: 'No attention reward', desc: 'It does not reward attention, likes, or engagement loops.' },
            { icon: '🌀', title: 'No content machine', desc: 'It does not turn your presence into shareable content.' },
          ].map(({ icon, title, desc }) => (
            <div key={title}
              className="group flex items-start gap-5 bg-white rounded-2xl px-6 py-5 border border-gray-100
                shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-blue-100 transition-all duration-300 cursor-default"
            >
              <span className="text-2xl mt-0.5 shrink-0">{icon}</span>
              <div>
                <p className="font-bold text-gray-800 mb-1 group-hover:text-presenz-blue transition-colors">{title}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

// ─── Section 3: Our belief ────────────────────────────────────────────────────
function OurBelief() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-presenz-blue mb-3">Philosophy</p>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900">Our belief</h2>
        </div>

        {/* Quote block */}
        <div className="relative max-w-3xl mx-auto mb-16">
          <div className="absolute -top-6 -left-4 text-8xl text-blue-100 font-serif leading-none select-none">&ldquo;</div>
          <div className="relative z-10 text-center space-y-3">
            <p className="text-xl sm:text-2xl font-bold text-gray-800">Culture doesn&apos;t need permission.</p>
            <div className="text-base sm:text-lg text-gray-500 leading-relaxed space-y-1">
              <p>It happens in streets. In sound. In walls.</p>
              <p>In moments that pass before anyone names them.</p>
            </div>
          </div>
        </div>

        {/* Highlight pill */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50
            border border-blue-100 rounded-2xl px-8 py-5 shadow-sm">
            <span className="text-2xl">✦</span>
            <p className="text-lg font-black text-gray-900 tracking-wide">
              Culture is not content. It is{' '}
              <span className="text-presenz-blue">PRESENZ.</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

// ─── Section 4: Three cards ───────────────────────────────────────────────────
const CARDS = [
  {
    emoji: '🧘',
    title: 'No pressure',
    lines: ['No performance.', 'No followers.', 'No pressure.'],
    gradient: 'from-blue-50 to-indigo-50',
    accent: 'bg-blue-500',
    hover: 'hover:shadow-blue-100',
  },
  {
    emoji: '🚫',
    title: 'No feeds',
    lines: ['No feeds.', 'No rankings.', 'No validation loops.'],
    gradient: 'from-violet-50 to-purple-50',
    accent: 'bg-violet-500',
    hover: 'hover:shadow-violet-100',
  },
  {
    emoji: '🏆',
    title: 'Nothing to win',
    lines: ['Nothing to win.', 'Nothing to compare.'],
    gradient: 'from-indigo-50 to-blue-50',
    accent: 'bg-indigo-500',
    hover: 'hover:shadow-indigo-100',
  },
]

function BeliefCards() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-presenz-blue mb-3">Values</p>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900">What we stand for</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {CARDS.map((card) => (
            <div key={card.title}
              className={`group relative bg-gradient-to-br ${card.gradient} rounded-3xl px-8 py-10
                border border-white shadow-md hover:shadow-2xl ${card.hover}
                hover:-translate-y-2 transition-all duration-300 cursor-default overflow-hidden`}
            >
              {/* Top accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${card.accent} rounded-t-3xl`} />

              <span className="text-4xl mb-6 block">{card.emoji}</span>
              {card.lines.map((line) => (
                <p key={line} className="text-gray-800 font-bold text-lg leading-snug mb-2 last:mb-0">
                  {line}
                </p>
              ))}

              {/* Hover glow circle */}
              <div className={`absolute -bottom-8 -right-8 w-28 h-28 rounded-full ${card.accent} opacity-0
                group-hover:opacity-10 transition-opacity duration-300 blur-xl`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Section 5: CTA ───────────────────────────────────────────────────────────
function CtaSection() {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #eef2ff 0%, #e0e7ff 40%, #ede9fe 100%)' }}
    >
      {/* Decorative rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]
        rounded-full border border-blue-200/40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]
        rounded-full border border-indigo-200/50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px]
        rounded-full border border-violet-200/60 pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto text-center">
        <div className="space-y-8 mb-14">
          {[
            ["You don't post.", "You notice."],
            ["You don't scroll.", "You sense."],
            ["You don't perform.", "You are present."],
          ].map(([a, b], i) => (
            <div key={i} className="space-y-1">
              <p className="text-xl sm:text-2xl font-semibold text-gray-400">{a}</p>
              <p className="text-2xl sm:text-3xl font-black text-gray-900">{b}</p>
            </div>
          ))}
        </div>

        <a
          href={APPSTORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-presenz-blue hover:bg-blue-700 text-white font-black text-lg
            px-16 py-4 rounded-2xl transition-all shadow-xl shadow-blue-200
            hover:shadow-2xl hover:shadow-blue-300 hover:scale-105 active:scale-95"
        >
          Get App
        </a>
      </div>
    </section>
  )
}

// ─── Section 6: App store badges ─────────────────────────────────────────────
function AppStoreBadges() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a href={PLAYSTORE_URL} target="_blank" rel="noopener noreferrer"
          className="hover:opacity-90 hover:scale-105 transition-all">
          <Image src={imgGooglePlay} alt="Get it on Google Play" width={180} height={60} className="h-14 w-auto" />
        </a>
        <a href={APPSTORE_URL} target="_blank" rel="noopener noreferrer"
          className="hover:opacity-90 hover:scale-105 transition-all">
          <Image src={imgAppStore} alt="Download on the App Store" width={180} height={60} className="h-14 w-auto" />
        </a>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <div className="bg-white w-full">
      <Navbar />
      <AboutHero />
      <NotSocialMedia />
      <OurBelief />
      <BeliefCards />
      <CtaSection />
      <AppStoreBadges />
      <Footer />
    </div>
  )
}
