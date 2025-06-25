'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-blue-600 leading-tight">
                LÆGERNE TRUELSEN
                <br />
                <span className="text-blue-500">OG LYKKEGAARD</span>
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Hjem
            </Link>
            
            <div className="relative group">
              <button className="nav-link text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center">
                Tjenester
                <svg className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-64 glass-card p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="space-y-2">
                  <Link href="/tjenester/almenmedicin" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    Almenmedicin
                  </Link>
                  <Link href="/tjenester/forebyggende-sundhed" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    Forebyggende sundhed
                  </Link>
                  <Link href="/kroniske-sygdomme" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    Kroniske sygdomme
                  </Link>
                  <Link href="/vaccinationer" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    Vaccinationer
                  </Link>
                  <Link href="/boerneundersoegelser" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    Børneundersøgelser
                  </Link>
                  <Link href="/videokonsultation" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    Videokonsultation
                  </Link>
                  <Link href="/tjenester" className="block px-3 py-2 text-sm text-blue-600 font-medium hover:bg-blue-50 rounded-lg transition-colors">
                    Se alle tjenester →
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="nav-link text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center">
                Vores læger
                <svg className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-56 glass-card p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="space-y-2">
                  <Link href="/vores-laeger/dr-truelsen" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    Dr. Mette Lykke Truelsen
                  </Link>
                  <Link href="/vores-laeger/dr-lykkegaard" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    Dr. Lotte Amalie Kai Lykkegaard
                  </Link>
                  <Link href="/vores-laeger" className="block px-3 py-2 text-sm text-blue-600 font-medium hover:bg-blue-50 rounded-lg transition-colors">
                    Lær os at kende →
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/om-os" className="nav-link text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Om os
            </Link>
            
            <div className="relative group">
              <button className="nav-link text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center">
                Praktisk info
                <svg className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-56 glass-card p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="space-y-2">
                  <Link href="/praktisk-info" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    Praktisk information
                  </Link>
                  <Link href="/find-vej" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    Find vej
                  </Link>
                  <Link href="/priser" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    Priser
                  </Link>
                  <Link href="/selvbetjening" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    Selvbetjening
                  </Link>
                </div>
              </div>
            </div>
            
            <Link href="/kontakt" className="nav-link text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Kontakt
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:35266101" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-2 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>35 26 61 01</span>
            </a>
            
            <a href="https://www.aftalebogen.dk" target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform duration-200">
              Book tid
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg glass-card hover:bg-blue-50 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full glass-card mt-2 mx-4" style={{ width: 'calc(100% - 2rem)' }}>
            <div className="p-6 space-y-4">
              <Link href="/" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
                Hjem
              </Link>
              <div className="border-l-2 border-blue-100 pl-4 space-y-2">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Tjenester</p>
                <Link href="/tjenester" className="block text-gray-700 hover:text-blue-600 py-1">
                  Alle tjenester
                </Link>
                <Link href="/kroniske-sygdomme" className="block text-gray-700 hover:text-blue-600 py-1">
                  Kroniske sygdomme
                </Link>
                <Link href="/vaccinationer" className="block text-gray-700 hover:text-blue-600 py-1">
                  Vaccinationer
                </Link>
                <Link href="/boerneundersoegelser" className="block text-gray-700 hover:text-blue-600 py-1">
                  Børneundersøgelser
                </Link>
                <Link href="/videokonsultation" className="block text-gray-700 hover:text-blue-600 py-1">
                  Videokonsultation
                </Link>
              </div>
              <Link href="/vores-laeger" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
                Vores læger
              </Link>
              <Link href="/om-os" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
                Om os
              </Link>
              <div className="border-l-2 border-blue-100 pl-4 space-y-2">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Praktisk</p>
                <Link href="/praktisk-info" className="block text-gray-700 hover:text-blue-600 py-1">
                  Praktisk information
                </Link>
                <Link href="/find-vej" className="block text-gray-700 hover:text-blue-600 py-1">
                  Find vej
                </Link>
                <Link href="/priser" className="block text-gray-700 hover:text-blue-600 py-1">
                  Priser
                </Link>
                <Link href="/selvbetjening" className="block text-gray-700 hover:text-blue-600 py-1">
                  Selvbetjening
                </Link>
              </div>
              <Link href="/kontakt" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
                Kontakt
              </Link>
              
              <div className="pt-4 border-t border-blue-100 space-y-3">
                <a href="tel:35266101" className="flex items-center space-x-2 text-blue-600 font-semibold">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>35 26 61 01</span>
                </a>
                
                <a href="https://www.aftalebogen.dk" target="_blank" rel="noopener noreferrer" className="block w-full btn-primary text-center py-3 rounded-lg font-semibold">
                  Book din tid
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}