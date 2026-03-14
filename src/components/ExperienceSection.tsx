const EVENT_CARDS = [
  {
    tag: 'ART',
    tagColor: 'text-purple-600',
    tagBg: 'bg-red-50',
    title: 'Contemporary Exhibition',
    venue: 'Fondation Beyeler',
    time: 'Now – 6:00 PM',
  },
  {
    tag: 'MUSIC',
    tagColor: 'text-blue-600',
    tagBg: 'bg-blue-50',
    title: 'Jazz Night Sessions',
    venue: 'Blue Note Club',
    time: '8:00 PM – Late',
  },
]

export default function ExperienceSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Heading */}
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent">
              A new way to experience culture.
            </h2>
            <p className="text-lg sm:text-xl text-presenz-navy leading-relaxed">
              Presenz brings together live art, music, fashion, cinema, and city energy into one living
              map visible only while it&apos;s happening.
            </p>
          </div>

          {/* Event cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {EVENT_CARDS.map((card) => (
              <div
                key={card.tag}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition"
              >
                <div className={`${card.tagBg} inline-block px-3 py-1 rounded-full mb-4`}>
                  <span className={`${card.tagColor} font-bold text-xs`}>{card.tag}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-gray-600 font-normal mb-2">{card.venue}</p>
                <p className="text-gray-600 text-sm mb-4">{card.time}</p>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                  <span className="text-green-500 font-bold text-sm">LIVE NOW</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
