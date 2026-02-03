import './globals.css'
import ClientLayout from '../components/ClientLayout'

export const metadata = {
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
      </head>
      <body suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
