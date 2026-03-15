'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

type ConsentState = 'undecided' | 'accepted' | 'declined'

export default function CookieBanner() {
  const [state, setState] = useState<ConsentState>('undecided')
  const [visible, setVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    let t: ReturnType<typeof setTimeout> | undefined
    try {
      const saved = localStorage.getItem('presenz-cookie-consent') as ConsentState | null
      if (saved === 'accepted' || saved === 'declined') {
        setState(saved)
      } else {
        // Delay banner so page can load first
        t = setTimeout(() => setVisible(true), 1200)
      }
    } catch {
      t = setTimeout(() => setVisible(true), 1200)
    }
    return () => { if (t) clearTimeout(t) }
  }, [])

  const save = (choice: 'accepted' | 'declined') => {
    setState(choice)
    setVisible(false)
    try { localStorage.setItem('presenz-cookie-consent', choice) } catch {}
  }

  if (!visible || state !== 'undecided') return null

  return (
    <>
      {/* Backdrop blur on mobile */}
      <div className="fixed inset-0 z-[200] pointer-events-none bg-black/10 md:bg-transparent" />

      <div
        className="fixed bottom-0 left-0 right-0 z-[201] px-4 pb-4 sm:px-6 sm:pb-6
          flex justify-center items-end sm:items-center"
      >
        <div
          className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-100
            overflow-hidden"
          style={{ boxShadow: '0 8px 60px rgba(0,0,0,0.18)' }}
        >
          {/* Top accent */}
          <div className="h-1 w-full bg-gradient-to-r from-presenz-blue via-violet-500 to-presenz-blue" />

          <div className="px-6 py-5">
            {/* Header row */}
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">🍪</span>
                <h3 className="text-base font-black text-gray-900 tracking-tight">Cookie Preferences</h3>
              </div>
              <button
                onClick={() => save('declined')}
                className="text-gray-300 hover:text-gray-500 transition shrink-0 mt-0.5"
                aria-label="Dismiss"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Main text */}
            <p className="text-sm text-gray-500 leading-relaxed mb-3">
              PRESENZ uses cookies and similar technologies to operate the website, remember your preferences,
              improve performance, analyze usage, and support security. By clicking{' '}
              <strong className="text-gray-700">Accept All</strong>, you expressly consent to the collection,
              processing, and sharing of relevant data by{' '}
              <strong className="text-gray-700">Intus Lab Inc</strong> with trusted service providers and partners
              for functional, analytics, security, and, where applicable, marketing purposes, as described in our{' '}
              <Link href="/privacy" className="text-presenz-blue hover:underline font-semibold">Cookie Policy</Link>
              {' '}and{' '}
              <Link href="/privacy" className="text-presenz-blue hover:underline font-semibold">Privacy Policy</Link>.
            </p>

            {/* Details toggle */}
            {showDetails && (
              <div className="mb-4 space-y-2 bg-gray-50 rounded-xl p-4 text-xs text-gray-500 leading-relaxed border border-gray-100">
                <p><strong className="text-gray-700">Strictly Necessary</strong> — Always active. Required for the website to function correctly.</p>
                <p><strong className="text-gray-700">Analytics</strong> — Help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
                <p><strong className="text-gray-700">Functional</strong> — Enable enhanced functionality and personalisation, such as language preferences.</p>
                <p><strong className="text-gray-700">Marketing</strong> — Used to track visitors across websites to display relevant advertisements.</p>
              </div>
            )}

            {/* Action row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <button
                onClick={() => save('accepted')}
                className="flex-1 sm:flex-none bg-presenz-blue hover:bg-blue-700 text-white font-bold
                  px-6 py-2.5 rounded-full text-sm transition shadow-md shadow-blue-200 order-1"
              >
                Accept All
              </button>
              <button
                onClick={() => save('declined')}
                className="flex-1 sm:flex-none border border-gray-200 hover:border-gray-300 text-gray-600
                  font-semibold px-6 py-2.5 rounded-full text-sm transition hover:bg-gray-50 order-2"
              >
                Decline
              </button>
              <button
                onClick={() => setShowDetails((v) => !v)}
                className="text-xs text-gray-400 hover:text-presenz-blue underline transition sm:ml-auto order-3"
              >
                {showDetails ? 'Hide details' : 'Cookie details'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
