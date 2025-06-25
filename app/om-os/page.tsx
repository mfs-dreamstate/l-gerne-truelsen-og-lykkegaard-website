import Navigation from '@/components/Navigation'
import Link from 'next/link'

export const metadata = {
  title: 'Om os - LÆGERNE TRUELSEN OG LYKKEGAARD',
  description: 'Lær mere om vores historie, mission og værdier. To erfarne læger dedikeret til at levere førsteklasses patientpleje i Danmark.',
}

export default function AboutPage() {
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
                Vores historie
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
              To læger, én mission: Dit velbefindende
            </h2>
          </div>
        </div>
      </section>

      {/* Practice Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12">
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-8 text-center">
              To læger, én mission
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-xl leading-relaxed">
                LÆGERNE TRUELSEN OG LYKKEGAARD blev grundlagt med en klar vision: at levere førsteklasses 
                lægehjælp i et miljø, hvor hver patient føler sig hørt, forstået og værdsat.
              </p>
              
              <p className="leading-relaxed">
                Dr. Mette Lykke Truelsen og Dr. Lotte Amalie Kai Lykkegaard bragte hver deres unikke ekspertise og erfaring sammen for 
                at skabe en praksis, der kombinerer det bedste fra moderne medicin med den personlige 
                omsorg, der er kernen i god lægebehandling.
              </p>
              
              <p className="leading-relaxed">
                Vores tilgang er baseret på partnerskab - ikke kun mellem os som læger, men også med dig 
                som patient. Vi tror på, at de bedste sundhedsresultater opnås, når du er en aktiv deltager 
                i din egen pleje.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gradient-to-b from-blue-50/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="glass-card p-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">
                Vores mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                At levere omfattende, medfølende lægehjælp, der sætter dig i centrum. Vi forpligter os til 
                at være dine partnere i sundhed, ikke bare dine læger.
              </p>
            </div>

            {/* Values */}
            <div className="glass-card p-10">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">
                Vores kerneværdier
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                Patientcentreret pleje, kontinuerlig læring, ærlighed og transparens, samt respekt og 
                værdighed for hver patient vi behandler.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values in Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vores værdier i praksis
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Disse værdier guider alt, hvad vi gør, og former måden, vi tager os af vores patienter på
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Patientcentreret pleje</h3>
              <p className="text-gray-600 leading-relaxed">
                Alt, hvad vi gør, er designet omkring dine behov og din komfort. Vi lytter til dine bekymringer 
                og tilpasser vores behandling efter din individuelle situation.
              </p>
            </div>

            <div className="glass-card p-8 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Kontinuerlig læring</h3>
              <p className="text-gray-600 leading-relaxed">
                Vi holder os opdateret med de nyeste medicinske fremskridt og behandlingsmetoder for at give 
                dig den bedste og mest moderne pleje.
              </p>
            </div>

            <div className="glass-card p-8 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ærlighed og transparens</h3>
              <p className="text-gray-600 leading-relaxed">
                Vi kommunikerer klart om din tilstand, behandlingsmuligheder og forventninger. Du vil altid 
                vide, hvad der sker med din behandling.
              </p>
            </div>

            <div className="glass-card p-8 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Respekt og værdighed</h3>
              <p className="text-gray-600 leading-relaxed">
                Hver patient behandles med den respekt og omsorg, de fortjener. Vi værdsætter din tid og 
                skaber et trygt, venligt miljø for alle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Credentials */}
      <section className="py-20 bg-gradient-to-b from-blue-50/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Erfaring og kvalifikationer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vores samarbejde bygger på års erfaring og dedikation til medicinsk excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Års erfaring</div>
              <p className="text-gray-600">Samlet erfaring i almen praksis og patientpleje</p>
            </div>

            <div className="glass-card p-8 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">1000+</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Tilfredse patienter</div>
              <p className="text-gray-600">Patienter der stoler på vores pleje og ekspertise</p>
            </div>

            <div className="glass-card p-8 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Fast læge</div>
              <p className="text-gray-600">Vi kender din sygehistorie og følger din sundhed løbende</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Klar til at blive en del af vores patientfamilie?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Vi ser frem til at lære dig at kende og tage os af dit helbred. Book din første konsultation i dag.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://www.aftalebogen.dk" target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-transform duration-200">
                Book din første tid online
              </a>
              <Link href="/vores-laeger" className="btn-secondary px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-transform duration-200">
                Mød vores læger
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