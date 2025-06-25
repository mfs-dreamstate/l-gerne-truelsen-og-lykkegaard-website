import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'LÆGERNE TRUELSEN OG LYKKEGAARD - Professionel lægehjælp i Danmark',
  description: 'Professionel lægehjælp med personlig omsorg. To erfarne læger, Dr. Truelsen og Dr. Lykkegaard, tilbyder moderne medicinsk behandling i Danmark.',
  keywords: 'læge, almenmedicin, sundhed, lægehjælp, Danmark, Dr. Truelsen, Dr. Lykkegaard, medicinsk behandling',
  openGraph: {
    title: 'LÆGERNE TRUELSEN OG LYKKEGAARD',
    description: 'Professionel lægehjælp med personlig omsorg i Danmark',
    type: 'website',
    locale: 'da_DK',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="da" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen`}>
        <div className="relative">
          {/* Background gradient mesh */}
          <div className="fixed inset-0 bg-gradient-to-br from-blue-100/20 via-transparent to-blue-200/20 pointer-events-none" />
          <div className="fixed top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="fixed bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-300/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          
          {/* Main content */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}