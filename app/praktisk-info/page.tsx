import Navigation from '@/components/Navigation'
import Link from 'next/link'

export const metadata = {
  title: 'Praktisk information - LÆGERNE TRUELSEN OG LYKKEGAARD',
  description: 'Find praktisk information om dit besøg hos Lægerne Truelsen og Lykkegaard, inkl. åbningstider, telefontider, booking og mere.',
}

export default function PracticalInfoPage() {
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
                Praktisk information
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
              Alt du behøver at vide før dit besøg
            </h2>
          </div>
        </div>
      </section>

      {/* Opening Hours & Phone Hours */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Opening Hours */}
            <div className="glass-card p-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">
                Åbningstider
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700 font-medium">Mandag</span>
                  <span className="text-gray-900 font-semibold">08:00 - 16:00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700 font-medium">Tirsdag</span>
                  <span className="text-gray-900 font-semibold">08:00 - 16:00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700 font-medium">Onsdag</span>
                  <span className="text-gray-900 font-semibold">08:00 - 17:00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700 font-medium">Torsdag</span>
                  <span className="text-gray-900 font-semibold">08:00 - 16:00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700 font-medium">Fredag</span>
                  <span className="text-gray-900 font-semibold">08:00 - 14:00</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700 font-medium">Lørdag - Søndag</span>
                  <span className="text-red-600 font-semibold">Lukket</span>
                </div>
              </div>
            </div>

            {/* Phone Hours */}
            <div className="glass-card p-10">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">
                Telefontider
              </h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Læge telefontid</h3>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-700 font-medium">Alle hverdage: 08:00 - 09:00</p>
                  <p className="text-sm text-gray-600 mt-1">Kun for korte medicinske spørgsmål</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Sekretær telefontid</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">Mandag, tirsdag, torsdag</span>
                    <span className="text-gray-900 font-medium">09:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">Onsdag</span>
                    <span className="text-gray-900 font-medium">Lukket efter 09:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-700">Fredag</span>
                    <span className="text-gray-900 font-medium">09:30 - 12:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Information */}
      <section className="py-20 bg-gradient-to-b from-blue-50/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
              Sådan booker du tid
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vi tilbyder flere nemme måder at booke tid på
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Online booking</h3>
              <p className="text-gray-600 mb-6">
                Book nemt og hurtigt tid døgnet rundt via vores online bookingsystem
              </p>
              <a href="https://www.aftalebogen.dk" target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200">
                Book online
              </a>
            </div>

            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Telefonisk booking</h3>
              <p className="text-gray-600 mb-6">
                Ring til os i sekretærens telefontid for personlig betjening
              </p>
              <a href="tel:35266101" className="btn-secondary px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200">
                35 26 61 01
              </a>
            </div>

            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Akutte tider</h3>
              <p className="text-gray-600 mb-6">
                Ved akut behov - ring tidligt om morgenen for samme dags tid
              </p>
              <p className="text-sm text-gray-500">
                Ring mellem 08:00-09:00
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
              Vigtig information
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Her finder du vigtig information om dit besøg hos os
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Location Info */}
            <div className="glass-card p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Placering og adgang</h3>
                  <p className="text-gray-600 mb-2">
                    <strong>Adresse:</strong> Østerbrogade 142, 1. th., 2100 København Ø
                  </p>
                  <p className="text-gray-600 mb-2">
                    Vi ligger på 1. sal i en stor, smuk lejlighed.
                  </p>
                  <p className="text-orange-600 font-medium">
                    NB: Ingen elevator, men bred trappe med gelænder på begge sider
                  </p>
                </div>
              </div>
            </div>

            {/* What to Bring */}
            <div className="glass-card p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Medbring til konsultation</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Sundhedskort</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Liste over nuværende medicin</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Eventuelle prøveresultater</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cancellation Policy */}
            <div className="glass-card p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Aflysning af tid</h3>
                  <p className="text-gray-600 mb-2">
                    Aflys venligst din tid senest 24 timer før, så andre patienter kan få gavn af tiden.
                  </p>
                  <p className="text-red-600 font-medium">
                    Gentagne udeblivelser kan medføre gebyr
                  </p>
                </div>
              </div>
            </div>

            {/* Our Team */}
            <div className="glass-card p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Vores team</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li><strong>Læger:</strong> Dr. Mette Lykke Truelsen & Dr. Lotte Amalie Kai Lykkegaard</li>
                    <li><strong>Social- og sundhedsassistenter:</strong> Lisbeth & Tina</li>
                    <li><strong>Jordemoder:</strong> Helle</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Self Service */}
      <section className="py-20 bg-gradient-to-b from-blue-50/50 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Selvbetjening
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Spar tid - brug vores selvbetjeningsløsninger
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <a href="https://www.aftalebogen.dk" target="_blank" rel="noopener noreferrer" className="glass-card p-6 hover:scale-105 transition-all duration-300 block">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Online booking</h3>
                <p className="text-gray-600">Book, aflys eller flyt din tid online</p>
              </a>

              <Link href="/selvbetjening" className="glass-card p-6 hover:scale-105 transition-all duration-300 block">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Receptfornyelse</h3>
                <p className="text-gray-600">Forny din recept online</p>
              </Link>

              <Link href="/selvbetjening" className="glass-card p-6 hover:scale-105 transition-all duration-300 block">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Prøvesvar</h3>
                <p className="text-gray-600">Se dine prøvesvar online</p>
              </Link>

              <Link href="/kontakt" className="glass-card p-6 hover:scale-105 transition-all duration-300 block">
                <h3 className="text-lg font-bold text-gray-900 mb-2">E-mail konsultation</h3>
                <p className="text-gray-600">Stil korte spørgsmål til lægen</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Info */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-10 border-l-4 border-red-500">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-.834-1.732-.834-2.464 0L4.34 16c-.77.834.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-red-700 mb-4">Ved akut sygdom uden for åbningstid</h3>
                <div className="space-y-3">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="text-red-900 font-semibold mb-1">Livstruende situationer</p>
                    <p className="text-red-700">Ring 112 - Ambulance</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-orange-900 font-semibold mb-1">Akut lægehjælp (ikke livstruende)</p>
                    <p className="text-orange-700">Ring 1813 - Lægevagten</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-900 font-semibold mb-1">Akut tandlægehjælp</p>
                    <p className="text-blue-700">Ring 1813 - Tandlægevagten</p>
                  </div>
                </div>
              </div>
            </div>
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
              <h4 className="font-semibold text-gray-900 mb-4">Praktisk info</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/praktisk-info" className="hover:text-blue-600 transition-colors">Praktisk information</Link></li>
                <li><Link href="/find-vej" className="hover:text-blue-600 transition-colors">Find vej</Link></li>
                <li><a href="https://www.aftalebogen.dk" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Book tid</a></li>
                <li><Link href="/selvbetjening" className="hover:text-blue-600 transition-colors">Selvbetjening</Link></li>
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