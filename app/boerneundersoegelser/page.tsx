import Navigation from '@/components/Navigation'
import Link from 'next/link'

export const metadata = {
  title: 'Børneundersøgelser - LÆGERNE TRUELSEN OG LYKKEGAARD',
  description: 'Regelmæssige børneundersøgelser fra 5 uger til 5 år. Følg dit barns udvikling med vores erfarne læger.',
}

export default function ChildExaminationsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-full blur-xl floating-orb" />
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-yellow-300/30 to-yellow-500/30 rounded-full blur-lg floating-orb" style={{ animationDelay: '2s' }} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent">
                Børneundersøgelser
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
              Følg dit barns udvikling med regelmæssige helbredsundersøgelser
            </h2>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-10">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
              Vigtige undersøgelser i barnets første leveår
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Børneundersøgelser er en vigtig del af dit barns sundhedspleje. Gennem regelmæssige undersøgelser 
                følger vi dit barns vækst, udvikling og generelle sundhed fra de første uger til skolealderen.
              </p>
              <p>
                Undersøgelserne giver os mulighed for at opdage eventuelle problemer tidligt og sikre, at dit barn 
                udvikler sig som forventet både fysisk, mentalt og socialt.
              </p>
              <p>
                Udover de planlagte undersøgelser er du altid velkommen til at kontakte os, hvis du har bekymringer 
                eller spørgsmål om dit barns helbred og udvikling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Examination Schedule */}
      <section className="py-20 bg-gradient-to-b from-yellow-50/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
              Undersøgelsesprogram
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Følg det anbefalede program for børneundersøgelser
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 5 weeks */}
            <div className="glass-card p-8 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white font-bold text-lg">5 uger</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">5-ugers undersøgelse</h3>
              <p className="text-gray-600 mb-4">
                Den første undersøgelse hos egen læge efter fødslen.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Generel helbredsundersøgelse</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Vægt og længde måling</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Reflekser og motorik</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Amning og ernæring</span>
                </li>
              </ul>
            </div>

            {/* 5 months */}
            <div className="glass-card p-8 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white font-bold text-lg">5 mdr</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">5-måneders undersøgelse</h3>
              <p className="text-gray-600 mb-4">
                Opfølgning på barnets udvikling og første vaccinationer.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Motorisk udvikling</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Social udvikling</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Vaccination (DiTeKiPol/Hib)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ernæringsvejledning</span>
                </li>
              </ul>
            </div>

            {/* 1 year */}
            <div className="glass-card p-8 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white font-bold text-lg">1 år</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">1-års undersøgelse</h3>
              <p className="text-gray-600 mb-4">
                Vigtig milepæl med fokus på udvikling og vaccinationer.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Gang og balance</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Sproglig udvikling</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Vaccination (Pneumokok)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Søvn og kostvaner</span>
                </li>
              </ul>
            </div>

            {/* 2 years */}
            <div className="glass-card p-8 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white font-bold text-lg">2 år</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">2-års undersøgelse</h3>
              <p className="text-gray-600 mb-4">
                Fokus på selvstændighed og sprogudvikling.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Sprog og kommunikation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Social adfærd</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Fin- og grovmotorik</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Trivsel i dagpleje/vuggestue</span>
                </li>
              </ul>
            </div>

            {/* 3 years */}
            <div className="glass-card p-8 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white font-bold text-lg">3 år</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">3-års undersøgelse</h3>
              <p className="text-gray-600 mb-4">
                Omfattende undersøgelse før børnehavestart.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Hørelse og syn</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Sprogforståelse</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Koncentration og leg</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Vaccination (DiTeKiPol-revaccination)</span>
                </li>
              </ul>
            </div>

            {/* 4-5 years */}
            <div className="glass-card p-8 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white font-bold text-lg">4-5 år</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">4-5 års undersøgelse</h3>
              <p className="text-gray-600 mb-4">
                Skoleparathedsundersøgelse før skolestart.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Skoleparathed vurdering</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Kognitiv udvikling</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Sociale færdigheder</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Vaccination (MFR-revaccination)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
              Hvad kan I forvente?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vi gør undersøgelserne til en positiv oplevelse for både barn og forældre
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Tid og ro</h3>
                  <p className="text-gray-600">
                    Vi afsætter god tid til hver undersøgelse, så der er plads til spørgsmål og bekymringer. 
                    Undersøgelsen foregår i et roligt tempo tilpasset barnet.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Tryghed og tillid</h3>
                  <p className="text-gray-600">
                    Vi arbejder på at skabe en tryg atmosfære, hvor barnet føler sig godt tilpas. 
                    Legetøj og børnevenligt udstyr hjælper med at gøre oplevelsen positiv.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Dialog og vejledning</h3>
                  <p className="text-gray-600">
                    Vi lægger vægt på dialog med jer som forældre. I får råd og vejledning om barnets 
                    udvikling, ernæring, søvn og andre relevante emner.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Dokumentation</h3>
                  <p className="text-gray-600">
                    Alle undersøgelser dokumenteres grundigt. I får kopi af relevante oplysninger og 
                    kan altid få adgang til barnets journal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips for Parents */}
      <section className="py-20 bg-gradient-to-b from-blue-50/50 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-10">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">
              Tips til forældre
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Forbered barnet</h4>
                  <p className="text-gray-600">Fortæl barnet hvad der skal ske på en rolig og positiv måde tilpasset barnets alder.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Medbring barnets bog</h4>
                  <p className="text-gray-600">Husk at medbringe barnets gule bog til alle undersøgelser.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Skriv spørgsmål ned</h4>
                  <p className="text-gray-600">Lav en liste over eventuelle spørgsmål eller bekymringer, så du husker at få dem drøftet.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Tag yndlingslegetøj med</h4>
                  <p className="text-gray-600">Et kendt legetøj kan give tryghed og afledning under undersøgelsen.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">5</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Vær ærlig</h4>
                  <p className="text-gray-600">Fortæl ærligt om eventuelle bekymringer eller udfordringer derhjemme.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Book tid til børneundersøgelse
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Er det tid til dit barns næste undersøgelse? Book tid online eller kontakt os for at aftale en tid.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://www.aftalebogen.dk" target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-transform duration-200">
                Book tid online
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