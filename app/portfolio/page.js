import Portfolio from '../../components/Portfolio'

export const metadata = {
  title: 'Work | Bijaya Budhathoki',
  description: 'Security and infrastructure projects focused on automation, hardening, and resilience.',
}

export default function PortfolioPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <Portfolio />
    </div>
  )
}
