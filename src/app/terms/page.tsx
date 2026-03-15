'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useLanguage } from '@/lib/LanguageContext'

const TERMS_SECTIONS = [
  {
    number: '1',
    title: 'Definitions',
    content: (
      <div className="text-gray-600 leading-relaxed space-y-2">
        <p>For the purposes of these Terms:</p>
        <ul className="list-disc list-inside space-y-1.5 pl-2">
          <li><strong>App</strong> — the PRESENZ mobile application</li>
          <li><strong>Website</strong> — the PRESENZ website and any related domains or web-based services</li>
          <li><strong>Services</strong> — the App, Website, and all associated tools, features, and content</li>
          <li><strong>User</strong> — any person who accesses or uses the Services</li>
          <li><strong>Account</strong> — your registered PRESENZ user account</li>
          <li><strong>PSZ Token</strong> — the digital token used in PRESENZ under the identifier PSZ</li>
          <li><strong>Wallet</strong> — crypto wallet functionality accessible through the Services</li>
          <li><strong>Third-Party Services</strong> — external services integrated into PRESENZ including Privy, Stripe, Apple, Google, analytics providers, or infrastructure services</li>
        </ul>
      </div>
    ),
  },
  {
    number: '2',
    title: 'Scope and Worldwide Availability',
    content: (
      <div className="text-gray-600 leading-relaxed space-y-2">
        <p>PRESENZ is made available worldwide, except where prohibited by applicable law. Certain features may vary depending on:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Your location and local laws and regulations</li>
          <li>Platform restrictions and network availability</li>
          <li>Third-party service availability</li>
        </ul>
        <p>Intus Lab Inc may limit access to certain features or jurisdictions where required.</p>
      </div>
    ),
  },
  {
    number: '3',
    title: 'Eligibility',
    content: (
      <div className="text-gray-600 leading-relaxed space-y-2">
        <p>To use PRESENZ, you must:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Be at least 13 years old, or the minimum legal age in your country</li>
          <li>Have the legal capacity to accept these Terms</li>
        </ul>
        <p>If you use PRESENZ on behalf of a company or organization, you confirm you have authority to bind that entity.</p>
      </div>
    ),
  },
  {
    number: '4',
    title: 'Acceptance of Terms',
    content: (
      <div className="text-gray-600 leading-relaxed space-y-2">
        <p>By using PRESENZ, you agree:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>To comply with these Terms and applicable laws</li>
          <li>That Intus Lab Inc may update these Terms periodically</li>
        </ul>
      </div>
    ),
  },
  {
    number: '5',
    title: 'Account Registration',
    content: (
      <div className="text-gray-600 leading-relaxed space-y-2">
        <p>You may need to create an account to use certain Services. You agree to:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Provide accurate and complete information</li>
          <li>Maintain the confidentiality of login credentials</li>
          <li>Be responsible for activity under your account</li>
          <li>Notify us of unauthorized access</li>
        </ul>
        <p>We may suspend or terminate accounts where necessary for security, compliance, or fraud prevention.</p>
      </div>
    ),
  },
  {
    number: '6',
    title: 'OTP Verification and Security',
    content: (
      <div className="text-gray-600 leading-relaxed space-y-2">
        <p>PRESENZ may require OTP (One-Time Password) authentication for login or sensitive actions. You agree not to:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Bypass authentication mechanisms</li>
          <li>Misuse OTP verification systems</li>
        </ul>
        <p>Repeated failed attempts may result in temporary account restrictions.</p>
      </div>
    ),
  },
  {
    number: '7',
    title: 'Localization and Service Availability',
    content: (
      <div className="text-gray-600 leading-relaxed space-y-2">
        <p>PRESENZ may provide localized services including language preferences, regional content, time zone settings, and feature availability. Some services may not be available in all regions.</p>
      </div>
    ),
  },
  {
    number: '8',
    title: 'Wallet, Payments, Token (PSZ) and Crypto Services',
    content: (
      <div className="text-gray-600 leading-relaxed space-y-3">
        <div>
          <p className="font-semibold text-gray-700 mb-1">PSZ Token</p>
          <p>PRESENZ may include a digital token identified as PSZ. You acknowledge PSZ may not be redeemable for fiat currency, its value may fluctuate, and Intus Lab Inc does not guarantee liquidity or exchange availability.</p>
        </div>
        <div>
          <p className="font-semibold text-gray-700 mb-1">No Financial Advice</p>
          <p>Nothing on PRESENZ constitutes financial, investment, legal, tax, or brokerage advice. You are responsible for your financial decisions.</p>
        </div>
        <div>
          <p className="font-semibold text-gray-700 mb-1">Wallet Services (Privy)</p>
          <p>Blockchain transactions may be irreversible and network or gas fees may apply. Intus Lab Inc may not recover lost or incorrect transactions.</p>
        </div>
        <div>
          <p className="font-semibold text-gray-700 mb-1">Payments and Stripe</p>
          <p>Payments may be processed through Stripe or other authorized payment providers. Intus Lab Inc does not store full card details unless stated.</p>
        </div>
        <div>
          <p className="font-semibold text-gray-700 mb-1">Restricted Activities</p>
          <p>You may not use PRESENZ for fraud, money laundering, terrorist financing, sanctions evasion, or unlawful activities.</p>
        </div>
      </div>
    ),
  },
  {
    number: '9',
    title: 'Newsletters and Communications',
    content: (
      <div className="text-gray-600 leading-relaxed space-y-2">
        <p>You may receive security notifications, account updates, transactional emails, and newsletters or marketing communications. You may unsubscribe from marketing communications at any time.</p>
      </div>
    ),
  },
  {
    number: '10',
    title: 'User Conduct',
    content: (
      <div className="text-gray-600 leading-relaxed space-y-2">
        <p>You agree not to:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Violate laws or regulations</li>
          <li>Harass or harm others or impersonate others</li>
          <li>Upload malicious software</li>
          <li>Attempt unauthorized system access</li>
          <li>Disrupt platform operations or engage in scams</li>
        </ul>
        <p>We may remove content or suspend accounts when necessary.</p>
      </div>
    ),
  },
  {
    number: '11',
    title: 'User Content',
    content: (
      <p className="text-gray-600 leading-relaxed">
        If you upload content to PRESENZ, you retain ownership. However, you grant Intus Lab Inc a worldwide
        license to host, display, and process the content solely for operating and improving the Services.
        You confirm your content does not violate laws or third-party rights.
      </p>
    ),
  },
  {
    number: '12',
    title: 'Moderation',
    content: (
      <div className="text-gray-600 leading-relaxed space-y-2">
        <p>Intus Lab Inc may remove content, suspend accounts, restrict features, or report illegal activity to authorities.</p>
      </div>
    ),
  },
  {
    number: '13',
    title: 'Intellectual Property',
    content: (
      <p className="text-gray-600 leading-relaxed">
        All PRESENZ intellectual property including software, design, logos, branding, and content belongs to
        Intus Lab Inc or its licensors. You may not reproduce or exploit these materials without permission.
      </p>
    ),
  },
  {
    number: '14',
    title: 'Third-Party Services',
    content: (
      <p className="text-gray-600 leading-relaxed">
        PRESENZ may integrate third-party services including Privy, Stripe, Apple, Google, analytics providers,
        and infrastructure providers. We are not responsible for third-party services or policies.
      </p>
    ),
  },
  {
    number: '15',
    title: 'Privacy',
    content: (
      <p className="text-gray-600 leading-relaxed">
        Your personal data is processed according to the{' '}
        <a href="/privacy" className="text-presenz-blue hover:underline font-semibold">PRESENZ Privacy Policy</a>.
        Data may be processed in the United States, Europe, and other jurisdictions where Intus Lab Inc
        operates or uses service providers.
      </p>
    ),
  },
  {
    number: '16',
    title: 'Disclaimers',
    content: (
      <div className="text-gray-600 leading-relaxed space-y-2">
        <p>The Services are provided &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE.&rdquo; To the maximum extent permitted by law, Intus Lab Inc disclaims warranties including merchantability, fitness for a particular purpose, uninterrupted availability, and accuracy of information.</p>
      </div>
    ),
  },
  {
    number: '17',
    title: 'Limitation of Liability',
    content: (
      <div className="text-gray-600 leading-relaxed space-y-2">
        <p>To the fullest extent permitted by law, Intus Lab Inc is not liable for indirect or consequential damages, loss of profits or revenue, crypto/token losses, unauthorized access, or service interruptions.</p>
        <p>Total liability is limited to the greater of the amount paid in the last 30 days or $100 USD.</p>
      </div>
    ),
  },
  {
    number: '18',
    title: 'Indemnification',
    content: (
      <p className="text-gray-600 leading-relaxed">
        You agree to indemnify and hold harmless Intus Lab Inc from claims arising from your use of the Services,
        violation of these Terms, or violation of laws or third-party rights.
      </p>
    ),
  },
  {
    number: '19',
    title: 'Termination',
    content: (
      <div className="text-gray-600 leading-relaxed space-y-2">
        <p>You may stop using PRESENZ at any time. We may suspend or terminate access if Terms are violated, fraud or illegal activity is suspected, or required by law. Termination may result in loss of account access.</p>
      </div>
    ),
  },
  {
    number: '20',
    title: 'Changes to Terms',
    content: (
      <p className="text-gray-600 leading-relaxed">
        Intus Lab Inc may update these Terms at any time. If required, we will notify users via the app,
        website, or email. Continued use after updates constitutes acceptance.
      </p>
    ),
  },
  {
    number: '21',
    title: 'Governing Law',
    content: (
      <p className="text-gray-600 leading-relaxed">
        These Terms are governed by the laws of the State of Delaware, USA. Disputes shall be subject to
        the jurisdiction of the courts located in Delaware unless otherwise required by consumer protection laws.
      </p>
    ),
  },
  {
    number: '22',
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
  number, title, content, open, onToggle,
}: {
  number: string; title: string; content: React.ReactNode; open: boolean; onToggle: () => void
}) {
  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-200 ${open ? 'border-presenz-blue shadow-md shadow-blue-50' : 'border-gray-200'}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 px-6 py-5 text-left bg-white hover:bg-gray-50 transition"
      >
        <span className={`text-xs font-black tracking-widest w-7 shrink-0 ${open ? 'text-presenz-blue' : 'text-gray-300'}`}>
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
export default function TermsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { t } = useLanguage()

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
            {t.legal.termsTitle.split('&')[0]}&amp; <span className="text-presenz-blue">{t.legal.termsTitle.split('&')[1]?.trim() || 'Conditions'}</span>
          </h1>
          <p className="text-gray-500 text-lg">{t.legal.lastUpdated}</p>
          <p className="text-gray-400 text-sm mt-3 max-w-lg mx-auto">
            {t.legal.termsIntro}
          </p>
        </div>
      </section>

      {/* ── Quick-nav pills ── */}
      <div className="sticky top-16 z-40 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider shrink-0">{t.legal.jumpTo}</span>
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {['Eligibility','Wallet & PSZ','User Conduct','Liability','Contact'].map((label) => {
              const indexMap: Record<string, number> = { 'Eligibility': 2, 'Wallet & PSZ': 7, 'User Conduct': 9, 'Liability': 16, 'Contact': 21 }
              return (
                <button
                  key={label}
                  onClick={() => setOpenIndex(indexMap[label])}
                  className="shrink-0 px-3 py-1.5 rounded-full text-xs font-bold text-gray-600 hover:bg-presenz-blue hover:text-white transition bg-gray-100"
                >
                  {label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-3">
          {TERMS_SECTIONS.map((section, idx) => (
            <AccordionItem
              key={idx}
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
            <p className="text-gray-500 mb-1 text-sm font-semibold uppercase tracking-wider">{t.legal.questionsTitle}</p>
            <h3 className="text-2xl font-black text-gray-900 mb-3">{t.legal.contactUs}</h3>
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
