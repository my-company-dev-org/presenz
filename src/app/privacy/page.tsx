'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// ─── Section data ─────────────────────────────────────────────────────────────
const PRIVACY_SECTIONS = [
  {
    number: '1',
    title: 'Who We Are (Data Controller)',
    content: (
      <div className="space-y-2 text-gray-600 leading-relaxed">
        <p><strong>Intus Lab Inc</strong></p>
        <p>16192 Coastal Highway<br />Lewes, DE 19958, USA</p>
        <p>Email: <a href="mailto:notification@intuslab.io" className="text-presenz-blue hover:underline">notification@intuslab.io</a></p>
      </div>
    ),
  },
  {
    number: '2',
    title: 'Where This Policy Applies',
    content: (
      <p className="text-gray-600 leading-relaxed">
        This Privacy Policy applies worldwide to the PRESENZ mobile application, the PRESENZ website, and any
        related services, tools, forms, communications, or features linked to PRESENZ. Privacy rights may vary
        depending on your region.
      </p>
    ),
  },
  {
    number: '3',
    title: 'Personal Data We Collect',
    content: (
      <div className="text-gray-600 leading-relaxed space-y-2">
        <p>We may collect:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Information you provide: name, email, phone/OTP</li>
          <li>Data collected automatically: device identifiers, IP address, usage logs</li>
          <li>Localization settings: language, region, time zone</li>
          <li>Wallet/crypto-related data: wallet identifiers, transaction references, PSZ activity</li>
          <li>Payment metadata through Stripe: transaction status, masked method type</li>
        </ul>
      </div>
    ),
  },
  {
    number: '4',
    title: 'How We Use Your Data',
    content: (
      <div className="text-gray-600 leading-relaxed space-y-2">
        <p>We use data to:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Operate the Services and manage accounts</li>
          <li>Secure authentication and process payments</li>
          <li>Enable wallet/token utilities</li>
          <li>Personalize experiences</li>
          <li>Send service notices and newsletters (where permitted)</li>
          <li>Prevent fraud and comply with legal obligations</li>
          <li>Improve performance</li>
        </ul>
      </div>
    ),
  },
  {
    number: '5',
    title: 'Legal Bases (EU/EEA + GDPR)',
    content: (
      <p className="text-gray-600 leading-relaxed">
        Where GDPR applies, we process data based on contractual necessity, consent, legitimate interests,
        and legal obligations.
      </p>
    ),
  },
  {
    number: '6',
    title: 'Data Sharing',
    content: (
      <div className="text-gray-600 leading-relaxed space-y-2">
        <p>We may share data with:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Intus Lab Inc group entities</li>
          <li>Service providers (hosting, analytics, support)</li>
          <li>OTP/SMS providers</li>
          <li>Wallet providers (e.g., Privy)</li>
          <li>Payment processors (e.g., Stripe)</li>
          <li>Authorities where required by law</li>
        </ul>
      </div>
    ),
  },
  {
    number: '7',
    title: 'International Transfers',
    content: (
      <p className="text-gray-600 leading-relaxed">
        Data may be processed in the United States, Europe, and other countries. Where required, we use
        safeguards such as Standard Contractual Clauses.
      </p>
    ),
  },
  {
    number: '8',
    title: 'Data Retention',
    content: (
      <p className="text-gray-600 leading-relaxed">
        We retain data only as long as needed for service delivery, compliance, security, and dispute resolution.
      </p>
    ),
  },
  {
    number: '9',
    title: 'Security',
    content: (
      <p className="text-gray-600 leading-relaxed">
        We apply reasonable technical and organizational safeguards, but no system is 100% secure.
      </p>
    ),
  },
  {
    number: '10',
    title: 'Your Rights',
    content: (
      <div className="text-gray-600 leading-relaxed space-y-2">
        <p>
          Depending on your location, you may have rights to access, correct, delete, restrict, object,
          port, or withdraw consent.
        </p>
        <p>
          Contact <a href="mailto:notification@intuslab.io" className="text-presenz-blue hover:underline">notification@intuslab.io</a> to exercise your rights.
        </p>
      </div>
    ),
  },
  {
    number: '11',
    title: 'Children',
    content: (
      <p className="text-gray-600 leading-relaxed">
        PRESENZ is not intended for children under 13 (or the minimum age required by your jurisdiction).
      </p>
    ),
  },
  {
    number: '12',
    title: 'Changes',
    content: (
      <p className="text-gray-600 leading-relaxed">
        We may update this policy and will notify you where required.
      </p>
    ),
  },
  {
    number: '13',
    title: 'Contact',
    content: (
      <div className="space-y-2 text-gray-600 leading-relaxed">
        <p><strong>Intus Lab Inc</strong></p>
        <p>16192 Coastal Highway<br />Lewes, DE 19958, USA</p>
        <p>Email: <a href="mailto:notification@intuslab.io" className="text-presenz-blue hover:underline">notification@intuslab.io</a></p>
      </div>
    ),
  },
]

const EULA_SECTIONS = [
  {
    number: '1',
    title: 'Licensor',
    content: (
      <div className="space-y-2 text-gray-600 leading-relaxed">
        <p><strong>Intus Lab Inc</strong></p>
        <p>16192 Coastal Highway<br />Lewes, DE 19958, USA</p>
        <p>Email: <a href="mailto:notification@intuslab.io" className="text-presenz-blue hover:underline">notification@intuslab.io</a></p>
      </div>
    ),
  },
  {
    number: '2',
    title: 'License Grant',
    content: (
      <p className="text-gray-600 leading-relaxed">
        We grant you a limited, non-exclusive, non-transferable, revocable license to use the PRESENZ App
        for lawful purposes.
      </p>
    ),
  },
  {
    number: '3',
    title: 'Restrictions',
    content: (
      <div className="text-gray-600 leading-relaxed space-y-2">
        <p>You may not:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Copy, modify, or distribute the App</li>
          <li>Reverse engineer (except where permitted by law)</li>
          <li>Bypass security or OTP mechanisms</li>
          <li>Disrupt services or use the App for illegal activities</li>
        </ul>
      </div>
    ),
  },
  {
    number: '4',
    title: 'Ownership',
    content: (
      <p className="text-gray-600 leading-relaxed">
        The App and all intellectual property rights remain owned by Intus Lab Inc or its licensors.
      </p>
    ),
  },
  {
    number: '5',
    title: 'Updates',
    content: (
      <p className="text-gray-600 leading-relaxed">
        We may provide updates at any time; some may be required for continued use.
      </p>
    ),
  },
  {
    number: '6',
    title: 'Third-Party Services',
    content: (
      <p className="text-gray-600 leading-relaxed">
        The App may integrate services such as Privy (wallet) and Stripe (payments) and may be subject
        to their terms.
      </p>
    ),
  },
  {
    number: '7',
    title: 'Wallet, Token (PSZ) & Financial Disclaimer',
    content: (
      <div className="text-gray-600 leading-relaxed space-y-2">
        <p>The App may include PSZ token utilities and crypto wallet features.</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>PSZ may have no monetary value and may fluctuate</li>
          <li>Blockchain transactions may be irreversible</li>
          <li>No financial, investment, tax, or legal advice is provided</li>
        </ul>
      </div>
    ),
  },
  {
    number: '8',
    title: 'Termination',
    content: (
      <p className="text-gray-600 leading-relaxed">
        We may suspend or terminate your access if you violate this EULA, our Terms &amp; Conditions,
        or applicable laws.
      </p>
    ),
  },
  {
    number: '9',
    title: 'Disclaimer of Warranties',
    content: (
      <p className="text-gray-600 leading-relaxed">
        The App is provided &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; to the maximum extent permitted by law.
      </p>
    ),
  },
  {
    number: '10',
    title: 'Limitation of Liability',
    content: (
      <p className="text-gray-600 leading-relaxed">
        To the maximum extent permitted by law, Intus Lab Inc is not liable for indirect or consequential
        damages. Where liability cannot be excluded, it is limited to the greater of $100 USD or amounts
        paid in the last 30 days.
      </p>
    ),
  },
  {
    number: '11',
    title: 'Governing Law',
    content: (
      <p className="text-gray-600 leading-relaxed">
        This EULA is governed by the laws of the State of Delaware, USA.
      </p>
    ),
  },
  {
    number: '12',
    title: 'Contact',
    content: (
      <div className="space-y-2 text-gray-600 leading-relaxed">
        <p><strong>Intus Lab Inc</strong></p>
        <p>16192 Coastal Highway<br />Lewes, DE 19958, USA</p>
        <p>Email: <a href="mailto:notification@intuslab.io" className="text-presenz-blue hover:underline">notification@intuslab.io</a></p>
      </div>
    ),
  },
]

// ─── Accordion item ───────────────────────────────────────────────────────────
function AccordionItem({
  number,
  title,
  content,
  open,
  onToggle,
}: {
  number: string
  title: string
  content: React.ReactNode
  open: boolean
  onToggle: () => void
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
        <svg
          className={`w-5 h-5 transition-transform shrink-0 ${open ? 'rotate-180 text-presenz-blue' : 'text-gray-400'}`}
          fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div className="px-6 pb-6 pt-2 bg-white border-t border-gray-100">
          {content}
        </div>
      )}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function PrivacyPage() {
  const [tab, setTab]           = useState<'privacy' | 'eula'>('privacy')
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const sections = tab === 'privacy' ? PRIVACY_SECTIONS : EULA_SECTIONS

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
            Legal
          </span>
          <h1 className="text-5xl sm:text-6xl font-black text-gray-900 mb-4">
            Privacy &amp; <span className="text-presenz-blue">EULA</span>
          </h1>
          <p className="text-gray-500 text-lg">Last updated: February 2026</p>
        </div>
      </section>

      {/* ── Tab switcher ── */}
      <div className="sticky top-16 z-40 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 flex gap-1 py-3">
          {([
            { key: 'privacy', label: '🔒 Privacy Policy' },
            { key: 'eula',    label: '📄 EULA' },
          ] as const).map(({ key, label }) => (
            <button
              key={key}
              onClick={() => { setTab(key); setOpenIndex(0) }}
              className={`px-5 py-2 rounded-full text-sm font-bold transition ${
                tab === key
                  ? 'bg-presenz-blue text-white shadow-md shadow-blue-200'
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Content ── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-3">
          {sections.map((section, idx) => (
            <AccordionItem
              key={`${tab}-${idx}`}
              number={section.number}
              title={section.title}
              content={section.content}
              open={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>

        {/* Contact CTA */}
        <div className="max-w-3xl mx-auto mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-3xl px-8 py-8 text-center">
            <p className="text-gray-500 mb-1 text-sm font-semibold uppercase tracking-wider">Questions?</p>
            <h3 className="text-2xl font-black text-gray-900 mb-3">Contact Us</h3>
            <a
              href="mailto:notification@intuslab.io"
              className="inline-block bg-presenz-blue hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-full transition shadow-lg shadow-blue-200 text-sm"
            >
              notification@intuslab.io
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
