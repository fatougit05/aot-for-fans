import '@/styles/globals.css'
import {Poppins} from "@next/font/google"
import Footer from './components/Footer'
import Nav from './components/Nav'
import { useSession } from 'next-auth/react'
const poppins = Poppins({
  subsets : ['latin'] ,
  weight: ['400','700','800'],
})
{/**session,  */}

import { SessionProvider } from "next-auth/react"

export default function App({ 
  Component, pageProps: {...pageProps }
 }) {
  
  return (
    
    <main className={poppins.className}>
      <Nav />
      <Component {...pageProps}/>
    <Footer />
    </main>

    )
}
