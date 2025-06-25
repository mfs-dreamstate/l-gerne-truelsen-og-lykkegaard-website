import Navigation from '@/components/Navigation'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Clinic Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Clinic Reception Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cms86355.sfstatic.io/upload_dir/pics/2015/06/_thumbs/foto-klinik-reception-start-e1612480267609.w1160.h440.fill.png"
            alt="Lægerne Truelsen og Lykkegaard reception"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/70 to-white/90" />
        </div>

        {/* Background Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full blur-xl floating-orb" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-blue-300/30 to-blue-500/30 rounded-full blur-lg floating-orb" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-500/15 to-blue-400/15 rounded-full blur-md floating-orb" style={{ animationDelay: '4s' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="glass-card p-12 max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                LÆGERNE TRUELSEN
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                OG LYKKEGAARD
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-700 mb-6 font-medium">
              Professionel lægehjælp med personlig omsorg på Østerbro
            </h2>
            
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              To erfarne læger, der arbejder sammen om at give dig den bedste behandling og pleje. 
              Vi kombinerer moderne medicin med den tid og opmærksomhed, du fortjener.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://www.aftalebogen.dk" target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-transform duration-200">
                Book din tid online
              </a>
              <Link href="/om-os" className="btn-secondary px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-transform duration-200">
                Lær os at kende
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hvorfor vælge os som dine læger?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vi tilbyder ikke bare lægehjælp - vi tilbyder et partnerskab for dit velbefindende
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card p-8 text-center trust-glow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">To læger, dobbelt ekspertise</h3>
              <p className="text-gray-600">
                Dr. Mette Lykke Truelsen og Dr. Lotte Amalie Kai Lykkegaard samarbejder om din behandling og sikrer omfattende pleje
              </p>
            </div>

            <div className="glass-card p-8 text-center trust-glow" style={{ animationDelay: '1s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Personlig opmærksomhed</h3>
              <p className="text-gray-600">
                Vi tager os tid til at lytte, forstå og behandle dig som det hele menneske, du er
              </p>
            </div>

            <div className="glass-card p-8 text-center trust-glow" style={{ animationDelay: '2s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Moderne faciliteter</h3>
              <p className="text-gray-600">
                Vores klinik er udstyret med det nyeste udstyr for præcis diagnose og behandling
              </p>
            </div>

            <div className="glass-card p-8 text-center trust-glow" style={{ animationDelay: '3s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Erfaring du kan stole på</h3>
              <p className="text-gray-600">
                Samlet har vi mange års erfaring med at hjælpe patienter med en bred vifte af helbredsproblemer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vores lægetjenester
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vi tilbyder et bredt spektrum af lægetjenester med fokus på forebyggelse, diagnose og behandling. 
              Uanset om du har brug for rutinetjek, behandling af akutte problemer eller langvarig sygdomsbehandling, er du i gode hænder.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/tjenester/almenmedicin" className="glass-card p-8 hover:scale-105 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                Almenmedicin
              </h3>
              <p className="text-gray-600">
                Grundlæggende lægehjælp, sundhedstjek og behandling af almindelige sygdomme og skader
              </p>
            </Link>

            <Link href="/tjenester/forebyggende-sundhed" className="glass-card p-8 hover:scale-105 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                Forebyggende sundhedstjek
              </h3>
              <p className="text-gray-600">
                Regelmæssige undersøgelser og screening for at forebygge sygdom og bevare din sundhed
              </p>
            </Link>

            <Link href="/tjenester/kronisk-sygdomsbehandling" className="glass-card p-8 hover:scale-105 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                Kronisk sygdomsbehandling
              </h3>
              <p className="text-gray-600">
                Løbende pleje og behandling af kroniske tilstande som diabetes, højt blodtryk og mere
              </p>
            </Link>

            <Link href="/tjenester/vaccinationer" className="glass-card p-8 hover:scale-105 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                Vaccinationer
              </h3>
              <p className="text-gray-600">
                Rutine- og rejsevaccinationer for at beskytte dig og dine kære mod sygdomme
              </p>
            </Link>

            <Link href="/tjenester/mindre-kirurgi" className="glass-card p-8 hover:scale-105 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                Mindre kirurgiske indgreb
              </h3>
              <p className="text-gray-600">
                Små operative procedurer udført sikkert og professionelt på vores klinik
              </p>
            </Link>

            <Link href="/tjenester/sundhedsraadgivning" className="glass-card p-8 hover:scale-105 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                Sundhedsrådgivning
              </h3>
              <p className="text-gray-600">
                Personlig vejledning om livsstil, kost, motion og forebyggelse af sygdomme
              </p>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link href="/tjenester" className="btn-primary px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-200">
              Se alle vores tjenester
            </Link>
          </div>
        </div>
      </section>

      {/* Clinic Image Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vores moderne klinik
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              En indbydende og professionel klinik på Østerbro - velkommen indenfor
            </p>
          </div>
          
          <div className="glass-card p-4 max-w-5xl mx-auto">
            <img 
              src="https://cms86355.sfstatic.io/upload_dir/pics/2015/06/_thumbs/foto-klinik-reception-start-e1612480267609.w1160.h440.fill.png"
              alt="Reception hos Lægerne Truelsen og Lykkegaard"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Vores reception - hvor du altid mødes med et smil og professionel service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Your Doctors */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mød dine læger
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              To erfarne læger med et fælles mål: at give dig den bedste pleje og behandling
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="glass-card p-8 text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Mette Lykke Truelsen</h3>
              <p className="text-blue-600 font-medium mb-4">Erfaren almen praktiserende læge</p>
              <p className="text-gray-600 mb-6">
                Specialiseret i patientcentreret pleje med fokus på en grundig og omsorgsfuld tilgang til behandling
              </p>
              <Link href="/vores-laeger/dr-truelsen" className="btn-secondary px-6 py-2 rounded-lg font-medium hover:scale-105 transition-transform duration-200">
                Læs mere om Dr. Truelsen
              </Link>
            </div>

            <div className="glass-card p-8 text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Lotte Amalie Kai Lykkegaard</h3>
              <p className="text-blue-600 font-medium mb-4">Ekspert i forebyggende medicin</p>
              <p className="text-gray-600 mb-6">
                Passioneret omkring forebyggende sundhedspleje med særlig interesse for moderne behandlingsmetoder
              </p>
              <Link href="/vores-laeger/dr-lykkegaard" className="btn-secondary px-6 py-2 rounded-lg font-medium hover:scale-105 transition-transform duration-200">
                Læs mere om Dr. Lykkegaard
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Klar til at tage det næste skridt?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Book din tid i dag og oplev forskellen ved personlig, professionel lægehjælp. 
              Vi ser frem til at tage os af dit helbred.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://www.aftalebogen.dk" target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-transform duration-200">
                Book din tid online
              </a>
              <a href="tel:27831444" className="btn-secondary px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-transform duration-200 flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Ring nu: 35 26 61 01</span>
              </a>
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