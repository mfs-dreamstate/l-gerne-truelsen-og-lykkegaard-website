import Navigation from '@/components/Navigation'
import Link from 'next/link'

export const metadata = {
  title: 'COVID-19 og Influenza vaccinationer - LÆGERNE TRUELSEN OG LYKKEGAARD',
  description: 'Tilbud om COVID-19 og influenza vaccinationer. Beskyt dig selv og dine nærmeste mod alvorlig sygdom.',
}

export default function VaccinationsPage() {
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
                COVID-19 og Influenza
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
              Vaccinationer der beskytter dig og dine kære
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Aktuel vaccinestatus</h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>COVID-19 vacciner:</strong> Tilbydes nu primært til risikogrupper og personer over 65 år. 
                    Vaccination anbefales årligt i efteråret sammen med influenzavaccinen.
                  </p>
                  <p>
                    <strong>Influenzavacciner:</strong> Årlig vaccination anbefales fra oktober til december for 
                    risikogrupper og alle over 65 år.
                  </p>
                  <p className="text-sm text-gray-600">
                    Opdateret information om vaccineprogrammer følger Sundhedsstyrelsens anbefalinger.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COVID-19 Vaccination */}
      <section className="py-20 bg-gradient-to-b from-blue-50/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
              COVID-19 vaccination
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Beskyttelse mod alvorlig sygdom med COVID-19
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hvem bør vaccineres?</h3>
              <p className="text-gray-600 mb-4">
                COVID-19 vaccination anbefales særligt til:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Alle personer på 65 år og derover</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Personer med kroniske sygdomme (hjerte-kar, lunger, diabetes m.fl.)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Personer med svært nedsat immunforsvar</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Gravide i 2. og 3. trimester</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Personale i sundheds- og plejesektoren</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Praktisk information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Hvornår vaccineres?</h4>
                  <p className="text-gray-600">
                    Vaccination tilbydes typisk fra oktober til december. Boostervaccination anbefales 
                    årligt for risikogrupper.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Pris</h4>
                  <p className="text-gray-600">
                    Gratis for personer i risikogrupper. Andre kan få vaccinen mod egenbetaling (250 kr.).
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Bivirkninger</h4>
                  <p className="text-gray-600">
                    Milde bivirkninger som ømhed ved indstiksstedet, træthed eller let feber er normale 
                    og forsvinder efter 1-2 dage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Influenza Vaccination */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
              Influenza vaccination
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Årlig beskyttelse mod sæsoninfluenza
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hvem bør vaccineres?</h3>
              <p className="text-gray-600 mb-4">
                Influenzavaccination anbefales til:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Alle personer på 65 år og derover</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Personer med kronisk sygdom</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Gravide (alle trimestre)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Børn med kroniske sygdomme</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Husstandskontakter til personer i særlig risiko</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hvorfor vaccinere?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Beskyttelse mod alvorlig sygdom</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Influenza kan føre til alvorlige komplikationer som lungebetændelse
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Beskyt andre</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Du hjælper med at beskytte sårbare personer i dit netværk
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Årlig opdatering</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Vaccinen opdateres årligt for at matche de cirkulerende virusstammer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Combined Vaccination */}
      <section className="py-20 bg-gradient-to-b from-green-50/50 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Få begge vacciner samtidig
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Det er sikkert og praktisk at få COVID-19 og influenzavaccine på samme tid
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">1</div>
                <h3 className="font-semibold text-gray-900 mb-1">Besøg</h3>
                <p className="text-gray-600 text-sm">Spar tid med kun ét besøg på klinikken</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">2</div>
                <h3 className="font-semibold text-gray-900 mb-1">Vacciner</h3>
                <p className="text-gray-600 text-sm">Fuld beskyttelse mod begge sygdomme</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                <h3 className="font-semibold text-gray-900 mb-1">Sikker</h3>
                <p className="text-gray-600 text-sm">Ingen øget risiko for bivirkninger</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
              Sådan får du din vaccine
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nem og hurtig proces - vi guider dig hele vejen
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
                    Book tid online eller ring til os. Husk at oplyse, hvilke vacciner du ønsker.
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Kort samtale</h3>
                  <p className="text-gray-600">
                    Vi gennemgår din helbredstilstand og sikrer, at vaccination er passende for dig.
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Vaccination</h3>
                  <p className="text-gray-600">
                    Vaccinen gives som en injektion i overarmen. Det tager kun få sekunder.
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Observation</h3>
                  <p className="text-gray-600">
                    Vi beder dig vente 15 minutter efter vaccination for at sikre, du har det godt.
                  </p>
                </div>
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
          </div>

          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Kan jeg få vaccinen, hvis jeg er forkølet?
              </h3>
              <p className="text-gray-600">
                Let forkølelse uden feber er normalt ikke en hindring. Ved feber eller hvis du føler dig 
                syg, bør vaccination udsættes til du er rask.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Hvor længe varer beskyttelsen?
              </h3>
              <p className="text-gray-600">
                Både COVID-19 og influenzavacciner giver beskyttelse i cirka 6-12 måneder. Derfor anbefales 
                årlig vaccination for fortsat beskyttelse.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Er der nogen, der ikke bør vaccineres?
              </h3>
              <p className="text-gray-600">
                Personer med svær allergi over for vaccinens indhold bør ikke vaccineres. Gravide og ammende 
                kan sikkert vaccineres. Tal med os hvis du er i tvivl.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Hvad koster vaccinerne?
              </h3>
              <p className="text-gray-600">
                Gratis for personer i risikogrupper. Andre betaler 250 kr. for COVID-19 vaccine og 200 kr. 
                for influenzavaccine. Priserne kan variere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Beskyt dig selv og andre
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Book tid til vaccination i dag. Vi har ledige tider og kort ventetid.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://www.aftalebogen.dk" target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-transform duration-200">
                Book vaccination online
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