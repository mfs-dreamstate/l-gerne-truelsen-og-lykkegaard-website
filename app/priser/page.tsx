import Navigation from '@/components/Navigation'
import Link from 'next/link'

export const metadata = {
  title: 'Priser - LÆGERNE TRUELSEN OG LYKKEGAARD',
  description: 'Se priser for lægeydelser. De fleste ydelser er gratis med sygesikringskort. Se priser for attester og andre ikke-dækkede ydelser.',
}

export default function PricesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-full blur-xl floating-orb" />
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-green-300/30 to-green-500/30 rounded-full blur-lg floating-orb" style={{ animationDelay: '2s' }} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                Priser og takster
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
              Gennemsigtighed omkring priser for lægeydelser
            </h2>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-10 border-l-4 border-green-500">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">De fleste ydelser er gratis</h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>Med gult sundhedskort (gruppe 1-sikrede):</strong> Næsten alle almindelige lægeydelser er gratis, 
                    herunder konsultationer, undersøgelser, blodprøver og de fleste behandlinger.
                  </p>
                  <p>
                    <strong>Uden sundhedskort:</strong> Hvis du ikke har et dansk sundhedskort, skal du betale for alle ydelser. 
                    EU-borgere kan bruge deres EU-sygesikringskort.
                  </p>
                  <p>
                    Der er dog enkelte ydelser, som ikke dækkes af sygesikringen, og som alle patienter skal betale for.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Services */}
      <section className="py-20 bg-gradient-to-b from-green-50/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
              Gratis ydelser med sundhedskort
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Følgende ydelser er gratis for gruppe 1-sikrede patienter
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card p-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Konsultationer</h3>
              </div>
              <p className="text-gray-600">Alle almindelige lægebesøg, både planlagte og akutte</p>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Undersøgelser</h3>
              </div>
              <p className="text-gray-600">Helbredsundersøgelser, børneundersøgelser og forebyggende tjek</p>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Blodprøver</h3>
              </div>
              <p className="text-gray-600">Blodprøvetagning og standard laboratorieanalyser</p>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Vaccinationer</h3>
              </div>
              <p className="text-gray-600">Børnevaccinationsprogram og influenzavaccine til risikogrupper</p>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Behandlinger</h3>
              </div>
              <p className="text-gray-600">Sårbehandling, fjernelse af vorter, mindre kirurgi m.m.</p>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Telefon/e-mail</h3>
              </div>
              <p className="text-gray-600">Telefonkonsultationer og e-mail konsultationer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Paid Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
              Ydelser med egenbetaling
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Følgende ydelser er ikke dækket af sygesikringen
            </p>
          </div>

          <div className="glass-card p-10 max-w-4xl mx-auto">
            <div className="space-y-6">
              {/* Certificates */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  Attester og erklæringer
                </h3>
                <div className="space-y-3 ml-11">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">Kørekortsattest</span>
                    <span className="font-semibold text-gray-900">Fra 450 kr.</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">Forsikringsattest</span>
                    <span className="font-semibold text-gray-900">Fra 350 kr.</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">Speciallægeerklæring</span>
                    <span className="font-semibold text-gray-900">Fra 500 kr.</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">Adoptionsattest</span>
                    <span className="font-semibold text-gray-900">Fra 600 kr.</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">Invaliditetserklæring</span>
                    <span className="font-semibold text-gray-900">Fra 400 kr.</span>
                  </div>
                </div>
              </div>

              {/* Vaccinations */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  Vaccinationer (ikke i program)
                </h3>
                <div className="space-y-3 ml-11">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">Rejsevaccinationer</span>
                    <span className="font-semibold text-gray-900">Efter type</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">COVID-19 vaccine (uden indikation)</span>
                    <span className="font-semibold text-gray-900">250 kr.</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">Influenzavaccine (uden indikation)</span>
                    <span className="font-semibold text-gray-900">200 kr.</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">HPV-vaccine (voksne)</span>
                    <span className="font-semibold text-gray-900">Fra 1.200 kr./dosis</span>
                  </div>
                </div>
              </div>

              {/* Other Services */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  Andre ydelser
                </h3>
                <div className="space-y-3 ml-11">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">Kosmetisk behandling</span>
                    <span className="font-semibold text-gray-900">Efter aftale</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">Udeblivelse uden afbud</span>
                    <span className="font-semibold text-gray-900">250 kr.</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">Kopi af journal</span>
                    <span className="font-semibold text-gray-900">50 kr.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-orange-50 rounded-lg">
              <p className="text-sm text-orange-700">
                <strong>Bemærk:</strong> Priserne er vejledende og kan variere afhængigt af ydelsens omfang. 
                Kontakt os for præcis pris på din specifikke ydelse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-gradient-to-b from-blue-50/50 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-10">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">
              Betalingsmuligheder
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Betalingskort</h3>
                <p className="text-gray-600">Vi modtager alle gængse betalingskort</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">MobilePay</h3>
                <p className="text-gray-600">Betal nemt og hurtigt med MobilePay</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Kontant</h3>
                <p className="text-gray-600">Vi modtager også kontant betaling</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Betaling foregår ved afslutning af konsultationen. 
                Du får altid kvittering for din betaling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
              Ofte stillede spørgsmål om priser
            </h2>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Hvorfor koster nogle ydelser penge?
              </h3>
              <p className="text-gray-600">
                Sygesikringen dækker kun ydelser, der er medicinsk nødvendige. Attester, kosmetiske behandlinger 
                og visse vaccinationer betragtes ikke som medicinsk nødvendige og er derfor ikke dækket.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Kan jeg få tilskud fra min sundhedsforsikring?
              </h3>
              <p className="text-gray-600">
                Mange sundhedsforsikringer dækker helt eller delvist udgifter til lægeattester og visse vaccinationer. 
                Kontakt dit forsikringsselskab for at høre om dine muligheder.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Hvad hvis jeg ikke har et sundhedskort?
              </h3>
              <p className="text-gray-600">
                Hvis du ikke har et dansk sundhedskort, skal du betale for alle ydelser. EU-borgere kan bruge 
                deres EU-sygesikringskort til at få samme vilkår som danske borgere. Priser oplyses ved henvendelse.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Hvordan betaler jeg for en attest?
              </h3>
              <p className="text-gray-600">
                Betaling for attester og andre ikke-dækkede ydelser sker ved afslutning af konsultationen. 
                Vi udsteder ikke attester før betaling er modtaget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-green-50/50 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Har du spørgsmål om priser?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Kontakt os hvis du er i tvivl om prisen på en ydelse eller har spørgsmål om betaling.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:35266101" className="btn-primary px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-transform duration-200 flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Ring: 35 26 61 01</span>
              </a>
              <Link href="/kontakt" className="btn-secondary px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-transform duration-200">
                Send os en besked
              </Link>
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
                <li><Link href="/priser" className="hover:text-blue-600 transition-colors">Priser</Link></li>
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