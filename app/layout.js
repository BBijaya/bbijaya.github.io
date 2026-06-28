// Root layout for the application
import './globals.css'
import ClientLayout from '../components/ClientLayout'
import JsonLd from '../components/JsonLd'

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Bijaya Budhathoki',
  jobTitle: 'Site Reliability Engineer & Security Engineer',
  url: 'https://bijayabudhathoki.com',
  sameAs: [
    'https://github.com/BBijaya',
    'https://linkedin.com/in/budhathokibijaya',
    'https://x.com/monobijaya',
  ],
}

export const metadata = {
  metadataBase: new URL('https://bijayabudhathoki.com'),
  title: {
    default: 'Bijaya Budhathoki | Site Reliability Engineer & Security Engineer',
    template: '%s | Bijaya Budhathoki',
  },
  description: 'Site Reliability Engineer and Security Engineer specializing in cloud security, Kubernetes hardening, and DevSecOps automation.',
  keywords: ['Site Reliability Engineer', 'SRE', 'Security Engineer', 'Cloud Security', 'Kubernetes', 'DevSecOps', 'Bijaya Budhathoki'],
  openGraph: {
    title: 'Bijaya Budhathoki | Site Reliability Engineer & Security Engineer',
    description: 'Building secure, resilient infrastructure. Specializing in cloud security, Kubernetes hardening, and site reliability engineering.',
    type: 'website',
    locale: 'en_US',
    url: 'https://bijayabudhathoki.com',
    siteName: 'Bijaya Budhathoki',
    images: ['/og/default.png'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@monobijaya',
    title: 'Bijaya Budhathoki | Site Reliability Engineer & Security Engineer',
    description: 'Building secure, resilient infrastructure. Specializing in cloud security, Kubernetes hardening, and site reliability engineering.',
    images: ['/og/default.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <JsonLd data={personSchema} />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Bijaya Budhathoki — Blog"
          href="/feed.xml"
        />
      </head>
      <body suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
