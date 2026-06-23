'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { CALENDLY_URL } from '@/constants'
import { NovaragraceLogo } from './NovaragraceLogo'

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#team', label: 'Team' },
  { href: '#testimonials', label: 'Stories' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleBooking = () => {
    window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/97 shadow-[0_1px_0_rgba(155,91,110,0.12)]' : 'bg-white/97 border-b border-[rgba(155,91,110,0.12)]'
        }`}
        style={{ height: 72, display: 'flex', alignItems: 'center', padding: '0 4rem', justifyContent: 'space-between' }}
      >
        <a href="#home" className="flex items-center gap-3.5 no-underline">
          <NovaragraceLogo />
        </a>

        <ul className="hidden md:flex gap-10 list-none m-0 p-0">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[0.75rem] tracking-[0.12em] uppercase text-muted no-underline font-normal transition-colors duration-200 hover:text-teal"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={handleBooking}
            className="hidden md:block bg-teal text-white font-sans text-[0.72rem] tracking-[0.1em] uppercase border-none px-[1.4rem] py-[0.6rem] cursor-pointer transition-colors duration-200 hover:bg-teal-dark font-medium"
          >
            Book Assessment
          </button>
          <button
            className="md:hidden text-muted hover:text-teal transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-[72px] flex flex-col" onClick={() => setMobileOpen(false)}>
          <div className="flex flex-col px-6 py-8 gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.85rem] tracking-[0.14em] uppercase text-muted no-underline font-normal border-b border-[rgba(30,107,91,0.08)] pb-4"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false)
                handleBooking()
              }}
              className="bg-teal text-white font-sans text-[0.75rem] tracking-[0.1em] uppercase border-none px-6 py-3 cursor-pointer font-medium mt-2 self-start"
            >
              Book Assessment
            </button>
          </div>
        </div>
      )}
    </>
  )
}
