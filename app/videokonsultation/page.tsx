import Navigation from '@/components/Navigation'
import Link from 'next/link'

export const metadata = {
  title: 'Videokonsultation - LÆGERNE TRUELSEN OG LYKKEGAARD',
  description: 'Få lægehjælp hjemmefra med videokonsultation. Nem, sikker og bekvem konsultation når det passer dig.',
}

export default function VideoConsultationPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-indigo-600/20 rounded-full blur-xl floating-orb" />
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-indigo-300/30 to-indigo-500/30 rounded-full blur-lg floating-orb" style={{ animationDelay: '2s' }} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">
                Videokonsultation
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
              Lægehjælp når det passer dig - direkte fra dit hjem
            </h2>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-10">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
              Moderne lægehjælp på dine præmisser
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Videokonsultation giver dig mulighed for at tale med din læge ansigt til ansigt gennem 
                skærmen. Det er en sikker, nem og effektiv måde at få lægehjælp på, når du ikke kan 
                eller behøver at komme fysisk til klinikken.
              </p>
              <p>
                Perfekt til opfølgninger, medicinsamtaler, rådgivning og mange andre situationer hvor 
                en fysisk undersøgelse ikke er nødvendig.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-b from-indigo-50/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
              Fordelene ved videokonsultation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Få professionel lægehjælp på en nem og fleksibel måde
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bekvemmelighed</h3>
              <p className="text-gray-600">
                Konsultation hjemmefra eller hvor du befinder dig - ingen transport eller ventetid
              </p>
            </div>

            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tidsbesparende</h3>
              <p className="text-gray-600">
                Spar tid på transport og venteværelse - få hjælp når det passer i din kalender
              </p>
            </div>

            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sikker og fortrolig</h3>
              <p className="text-gray-600">
                Krypteret forbindelse sikrer, at din samtale med lægen forbliver privat
              </p>
            </div>

            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mindre smitterisiko</h3>
              <p className="text-gray-600">
                Undgå venteværelset og mindsk risikoen for at blive udsat for eller sprede sygdom
              </p>
            </div>

            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Samme kvalitet</h3>
              <p className="text-gray-600">
                Du får samme høje kvalitet og omsorg som ved et fysisk besøg
              </p>
            </div>

            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fleksibilitet</h3>
              <p className="text-gray-600">
                Perfekt hvis du er på rejse, har svært ved at komme til klinikken eller har travlt
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Suitable For */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
              Hvornår er videokonsultation velegnet?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Videokonsultation kan bruges til mange forskellige situationer
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-green-600">✓ Velegnet til:</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Opfølgning på behandling eller prøvesvar</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Medicingennemgang og justering</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Rådgivning om symptomer</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Mentale helbredsproblemer</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Hudproblemer (med god belysning)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Fornyelse af recepter</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Sygemeldinger og attester</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-red-600">✗ Ikke velegnet til:</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Akutte, alvorlige symptomer</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Situationer der kræver fysisk undersøgelse</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Sårbehandling eller injektioner</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Prøvetagning (blod, urin m.m.)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Første undersøgelse af ukendte symptomer</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Akutte smerter eller skader</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-indigo-50/50 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
              Sådan fungerer videokonsultation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nem opsætning og brugervenlig teknologi
            </p>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Book tid</h3>
                  <p className="text-gray-600">
                    Book en videokonsultation online eller ring til os. Vælg et tidspunkt der passer dig.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Modtag link</h3>
                  <p className="text-gray-600">
                    Du får tilsendt et link på SMS eller e-mail. Ingen download eller installation nødvendig.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Test udstyr</h3>
                  <p className="text-gray-600">
                    Log på 5 minutter før for at teste kamera og lyd. Vi hjælper hvis du har problemer.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Start konsultation</h3>
                  <p className="text-gray-600">
                    Lægen ringer op på det aftalte tidspunkt, og I kan tale sammen som ved et almindeligt besøg.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Requirements */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-10">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">
              Tekniske krav
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Du behøver kun grundlæggende udstyr for at deltage i en videokonsultation
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Udstyr:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Computer, tablet eller smartphone</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Kamera (indbygget eller ekstern)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mikrofon og højttalere/hovedtelefoner</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Stabil internetforbindelse</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Tips til god oplevelse:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Find et roligt sted uden forstyrrelser</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Sørg for god belysning foran dig</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Test forbindelsen før konsultationen</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Hav relevante papirer klar</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-b from-green-50/50 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-10 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
              Samme pris som almindelig konsultation
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Videokonsultation er gratis for gruppe 1-sikrede patienter, ligesom almindelige konsultationer.
            </p>
            <p className="text-gray-600">
              Der er ingen ekstra gebyrer for at bruge videokonsultation. 
              Du betaler kun hvis du normalt skal betale for lægebesøg.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
              Ofte stillede spørgsmål
            </h2>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Er videokonsultation lige så god som et fysisk besøg?
              </h3>
              <p className="text-gray-600">
                For mange situationer ja. Lægen kan se og tale med dig, stille spørgsmål og give råd. 
                Dog kan visse undersøgelser kun udføres fysisk.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Hvordan får jeg recept efter videokonsultation?
              </h3>
              <p className="text-gray-600">
                Recepter udstedes elektronisk og sendes direkte til apoteket, præcis som ved et almindeligt besøg.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Hvad hvis jeg har tekniske problemer?
              </h3>
              <p className="text-gray-600">
                Ring til os, så hjælper vi dig. Vi kan også skifte til telefonkonsultation hvis videoen ikke virker.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Kan jeg vise lægen noget på min krop via video?
              </h3>
              <p className="text-gray-600">
                Ja, hvis du har god belysning og kan holde kameraet stabilt. Lægen vil guide dig om, 
                hvordan du bedst viser det, der skal ses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-indigo-50/50 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Prøv videokonsultation i dag
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Book din første videokonsultation og oplev hvor nemt og bekvemt det er at få lægehjælp hjemmefra.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://www.aftalebogen.dk" target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-transform duration-200">
                Book videokonsultation
              </a>
              <a href="tel:35266101" className="btn-secondary px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-transform duration-200 flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Ring: 35 26 61 01</span>
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