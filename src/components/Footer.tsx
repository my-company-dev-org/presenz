import Image from 'next/image'
import { imgLogo, APPSTORE_URL } from '@/lib/images'

const SOCIAL = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/presenzapp',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: 'https://www.twitter.com/presenzapp',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/presenzapp',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/presenzapp',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full bg-white">

      {/* ── Top row: logo + nav links ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row justify-between items-center gap-6">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <Image src={imgLogo} alt="PresenZ" width={44} height={44} className="w-11 h-11 object-contain" />
        </a>

        {/* Nav links */}
        <nav className="flex items-center gap-6">
          <a href="/"           className="text-sm font-semibold text-gray-700 hover:text-presenz-blue transition">Home</a>
          <a href="/about"      className="text-sm font-semibold text-gray-700 hover:text-presenz-blue transition">About</a>
          <a href={APPSTORE_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-gray-700 hover:text-presenz-blue transition">Download app</a>
        </nav>
      </div>

      {/* ── Divider ── */}
      <div className="border-t border-gray-200" />

      {/* ── Bottom row: copyright + privacy + social ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">

        {/* Copyright + legal */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
          <span>&copy; {year} Presenz-IntusLab Inc. All rights reserved.</span>
          <a href="/privacy"  className="hover:text-gray-600 transition">Privacy Policy</a>
          <a href="/terms"    className="hover:text-gray-600 transition">Terms of Service</a>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          {SOCIAL.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-400 hover:text-presenz-blue transition"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

    </footer>
  )
}
