'use client'

import Navigation from '@/components/Navigation'
import Link from 'next/link'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    doctor: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log('Form submitted:', formData)
    alert('Tak for din besked! Vi kontakter dig snarest muligt.')
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full blur-xl floating-orb" />
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-blue-300/30 to-blue-500/30 rounded-full blur-lg floating-orb" style={{ animationDelay: '2s' }} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Kontakt os
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
              Vi er her for at hjælpe dig - kontakt os i dag
            </h2>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass-card p-10">
                <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                  Book din tid eller stil spørgsmål
                </h2>
                <p className="text-gray-600 mb-8">
                  Udfyld formularen nedenfor, så kontakter vi dig snarest muligt for at aftale en tid eller besvare dine spørgsmål.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="glass-input w-full px-6 py-4 text-gray-900 placeholder-gray-500 focus:placeholder-gray-400"
                        placeholder="Dit fulde navn"
                      />
                    </div>
                    
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="glass-input w-full px-6 py-4 text-gray-900 placeholder-gray-500 focus:placeholder-gray-400"
                        placeholder="Telefonnummer"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="glass-input w-full px-6 py-4 text-gray-900 placeholder-gray-500 focus:placeholder-gray-400"
                      placeholder="Din e-mail adresse"
                    />
                  </div>

                  <div className="relative">
                    <select
                      name="doctor"
                      value={formData.doctor}
                      onChange={handleInputChange}
                      className="glass-input w-full px-6 py-4 text-gray-900"
                    >
                      <option value="">Vælg læge (valgfrit)</option>
                      <option value="truelsen">Dr. Mette Lykke Truelsen</option>
                      <option value="lykkegaard">Dr. Lotte Amalie Kai Lykkegaard</option>
                      <option value="any">Ingen præference</option>
                    </select>
                  </div>

                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="glass-input w-full px-6 py-4 text-gray-900 placeholder-gray-500 focus:placeholder-gray-400 resize-none"
                      placeholder="Beskriv kort årsagen til dit besøg eller dine spørgsmål (valgfrit)"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-transform duration-200"
                  >
                    Send besked
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    Vi respekterer din privathed og deler aldrig dine oplysninger med tredjeparter.
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Phone */}
              <div className="glass-card p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ring til os</h3>
                <p className="text-gray-600 mb-4">Vi besvarer opkald i åbningstid</p>
                <a href="tel:35266101" className="text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors">
                  35 26 61 01
                </a>
              </div>

              {/* Email */}
              <div className="glass-card p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Send e-mail</h3>
                <p className="text-gray-600 mb-4">Vi svarer inden for 24 timer</p>
                <a href="mailto:info@laegernetruelsenoglykkegaard.dk" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors break-all">
                  Email os
                </a>
              </div>

              {/* Opening Hours */}
              <div className="glass-card p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Åbningstider</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Mandag:</span>
                    <span className="font-medium">08:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tirsdag:</span>
                    <span className="font-medium">08:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Onsdag:</span>
                    <span className="font-medium">08:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Torsdag:</span>
                    <span className="font-medium">08:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fredag:</span>
                    <span className="font-medium">08:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lørdag - Søndag:</span>
                    <span className="font-medium">Lukket</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  *Akut hjælp efter lukketid: Ring 1813
                </p>
              </div>

              {/* Phone Hours */}
              <div className="glass-card p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Telefontider</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Læge telefontid:</p>
                    <p className="text-gray-600">Alle hverdage: 08:00 - 09:00</p>
                    <p className="text-sm text-gray-500 mt-1">Kun for korte medicinske spørgsmål</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Sekretær telefontid:</p>
                    <div className="space-y-1 text-gray-600 text-sm">
                      <div>Man, tirs, tors: 09:00 - 12:00</div>
                      <div>Onsdag: Lukket efter 09:00</div>
                      <div>Fredag: 09:30 - 12:00</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="glass-card p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Find os</h3>
                <p className="text-gray-600 mb-4">
                  Østerbrogade 142, 1. th.<br />
                  2100 København Ø<br />
                  Danmark
                </p>
                <p className="text-sm text-gray-500">
                  1. sal - bred trappe med gelænder på begge sider
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Information */}
      <section className="py-20 bg-gradient-to-b from-red-50/50 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-10 border-l-4 border-red-500">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-700 mb-2">Akut hjælp</h3>
                <p className="text-gray-700 mb-4">
                  I akutte situationer uden for normal åbningstid, kontakt venligst det nærmeste akutmodtagelse 
                  eller ring <strong>112</strong> ved livstruende situationer.
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-sm text-red-700">
                    <strong>Livstruende situationer:</strong> Ring altid 112<br />
                    <strong>Lægevagt:</strong> Ring 1813 for ikke-livstruende akutte problemer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
              Find vej til os
            </h2>
            <p className="text-lg text-gray-600">
              Vi er centralt placeret med gode transportforbindelser og gratis parkering
            </p>
          </div>
          
          <div className="glass-card p-8">
            <div className="bg-gray-100 h-96 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Interaktivt kort</h3>
                <p className="text-gray-600">
                  Kort med vejledning til klinikken ville blive integreret her
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50/50 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
              Ofte stillede spørgsmål
            </h2>
            <p className="text-lg text-gray-600">
              Hurtige svar på de mest almindelige spørgsmål
            </p>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Hvor lang tid tager en konsultation?
              </h3>
              <p className="text-gray-600">
                En standard konsultation tager typisk 15-30 minutter, afhængigt af problemets kompleksitet. 
                Vi tager os den tid, der er nødvendig for at give dig den bedste pleje.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Skal jeg medbringe noget til mit første besøg?
              </h3>
              <p className="text-gray-600">
                Medbring venligst sundhedskort, eventuelle medicinkort, og en liste over nuværende medicin. 
                Det er også nyttigt at have en oversigt over din sygehistorie.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Kan jeg vælge mellem de to læger?
              </h3>
              <p className="text-gray-600">
                Ja, du kan gerne angive en præference når du booker. Begge læger samarbejder tæt, 
                så du får den samme høje kvalitet uanset hvem du ser.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Hvad hvis jeg skal aflyse min tid?
              </h3>
              <p className="text-gray-600">
                Kontakt os venligst mindst 24 timer før din tid, så vi kan tilbyde tiden til andre patienter. 
                Du kan ringe eller sende en e-mail.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/faq" className="btn-secondary px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200">
              Se flere spørgsmål og svar
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-blue-100 bg-gradient-to-t from-blue-50/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-lg font-bold text-gray-900 mb-4">LÆGERNE TRUELSEN OG LYKKEGAARD</h3>
              <p className="text-gray-600 mb-4">
                Professionel lægehjælp med personlig omsorg. To erfarne læger dedikeret til dit velbefindende.
              </p>
              <div className="flex space-x-4">
                <a href="tel:35266101" className="text-blue-600 hover:text-blue-700 font-medium">
                  📞 35 26 61 01
                </a>
                <a href="mailto:info@laegernetruelsenoglykkegaard.dk" className="text-blue-600 hover:text-blue-700 font-medium">
                  ✉️ Email os
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Navigation</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/" className="hover:text-blue-600 transition-colors">Hjem</Link></li>
                <li><Link href="/om-os" className="hover:text-blue-600 transition-colors">Om os</Link></li>
                <li><Link href="/tjenester" className="hover:text-blue-600 transition-colors">Tjenester</Link></li>
                <li><Link href="/vores-laeger" className="hover:text-blue-600 transition-colors">Vores læger</Link></li>
                <li><Link href="/kontakt" className="hover:text-blue-600 transition-colors">Kontakt</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Tjenester</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/tjenester/almenmedicin" className="hover:text-blue-600 transition-colors">Almenmedicin</Link></li>
                <li><Link href="/tjenester/forebyggende-sundhed" className="hover:text-blue-600 transition-colors">Forebyggende sundhed</Link></li>
                <li><Link href="/tjenester/vaccinationer" className="hover:text-blue-600 transition-colors">Vaccinationer</Link></li>
                <li><Link href="/book-tid" className="hover:text-blue-600 transition-colors">Book tid</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-100 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2024 LÆGERNE TRUELSEN OG LYKKEGAARD. Alle rettigheder forbeholdes.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}