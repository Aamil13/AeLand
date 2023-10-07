import "./styles/globals.css"
import Firstheader from '@/components/Headers/Firstheader'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SecondHeader from '@/components/Headers/SecondHeader'
import Navbar from '@/components/Headers/Navbar'
import Footer from '@/components/Footer/Footer'
import LastFooter from '@/components/Footer/LastFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Landing page',
  description: 'Fragrances',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous"/>
      
      </head>
      <body className={inter.className}>
      <Firstheader/>
      <SecondHeader/>
      <Navbar/>
        {children}
      <Footer/>
      <LastFooter/>
        </body>
    </html>
  )
}
