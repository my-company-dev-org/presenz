'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useLanguage } from '@/lib/LanguageContext'
import { legalTranslations } from '@/lib/legal-translations'

// ─── Accordion item ───────────────────────────────────────────────────────────
function AccordionItem({
  number, title, children, open, onToggle,
}: {
  number: string; title: string; children: React.ReactNode; open: boolean; onToggle: () => void
}) {
  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-200 ${open ? 'border-presenz-blue shadow-md shadow-blue-50' : 'border-gray-200'}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 px-6 py-5 text-left bg-white hover:bg-gray-50 transition"
      >
        <span className={`text-xs font-black tracking-widest w-6 shrink-0 ${open ? 'text-presenz-blue' : 'text-gray-300'}`}>
          {number.padStart(2, '0')}
        </span>
        <span className={`flex-1 text-base font-bold ${open ? 'text-presenz-blue' : 'text-gray-800'}`}>{title}</span>
        <svg className={`w-5 h-5 transition-transform shrink-0 ${open ? 'rotate-180 text-presenz-blue' : 'text-gray-400'}`}
          fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div className="px-6 pb-6 pt-2 bg-white border-t border-gray-100">
          {children}
        </div>
      )}
    </div>
  )
}

// ─── Section content renderer ─────────────────────────────────────────────────
function SectionContent({ intro, items, outro }: { intro?: string; items?: string[]; outro?: string }) {
  return (
    <div className="text-gray-600 leading-relaxed space-y-3">
      {intro && <p>{intro}</p>}
      {items && items.length > 0 && (
        <ul className="list-disc list-inside space-y-1 pl-2">
          {items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      )}
      {outro && <p>{outro}</p>}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function PrivacyPage() {
  const [tab, setTab] = useState<'privacy' | 'eula'>('privacy')
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { t, lang } = useLanguage()

  const legal = legalTranslations[lang]
  const sections = tab === 'privacy' ? legal.privacySections : legal.eulaSections

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden text-center">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-presenz-blue to-transparent" />
        <div className="absolute top-20 -left-24 w-96 h-96 rounded-full opacity-[0.05] bg-presenz-blue blur-3xl pointer-events-none" />
        <div className="absolute top-10 -right-24 w-80 h-80 rounded-full opacity-[0.05] bg-violet-500 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-presenz-blue text-xs font-bold tracking-[0.2em] uppercase px-5 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-presenz-blue" />
            {t.legal.legalLabel}
          </span>
          <h1 className="text-5xl sm:text-6xl font-black text-gray-900 mb-4">
            {t.legal.privacyTitle.replace('& EULA', '').replace('& EUL', '').replace('&amp; EULA', '').trim()}&nbsp;&amp;&nbsp;<span className="text-presenz-blue">{t.legal.eulaTab}</span>
          </h1>
          <p className="text-gray-500 text-lg">{t.legal.lastUpdated}</p>
        </div>
      </section>

      {/* ── Tab switcher ── */}
      <div className="sticky top-16 z-40 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 flex gap-1 py-3">
          {([
            { key: 'privacy', label: `🔒 ${t.legal.privacyTab}` },
            { key: 'eula',    label: `📄 ${t.legal.eulaTab}` },
          ] as const).map(({ key, label }) => (
            <button key={key} onClick={() => { setTab(key); setOpenIndex(0) }}
              className={`px-5 py-2 rounded-full text-sm font-bold transition ${tab === key ? 'bg-presenz-blue text-white shadow-md shadow-blue-200' : 'text-gray-500 hover:bg-gray-100'}`}>
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Content ── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-3">
          {sections.map((section, idx) => (
            <AccordionItem key={`${tab}-${idx}`} number={String(idx + 1)} title={section.title}
              open={openIndex === idx} onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}>
              <SectionContent intro={section.intro} items={section.items} outro={section.outro} />
            </AccordionItem>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="max-w-3xl mx-auto mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-3xl px-8 py-8 text-center">
            <p className="text-gray-500 mb-1 text-sm font-semibold uppercase tracking-wider">{t.legal.questionsTitle}</p>
            <h3 className="text-2xl font-black text-gray-900 mb-3">{t.legal.contactUs}</h3>
            <a href="mailto:notification@intuslab.io"
              className="inline-block bg-presenz-blue hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-full transition shadow-lg shadow-blue-200 text-sm">
              notification@intuslab.io
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
