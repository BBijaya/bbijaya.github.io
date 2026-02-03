'use client'

import dynamic from 'next/dynamic'
import Footer from './Footer'

const Navigation = dynamic(() => import('./Navigation'), {
  ssr: false,
})

const ParticleBackground = dynamic(() => import('./ParticleBackground'), {
  ssr: false,
})

export default function ClientLayout({ children }) {
  return (
    <div className="app">
      <ParticleBackground />
      <Navigation />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  )
}
