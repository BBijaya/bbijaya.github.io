import About from '../../components/About'

export const metadata = {
  title: 'About | Bijaya Budhathoki',
  description: 'Security-focused engineer with expertise in building and securing cloud-native infrastructure across AWS, GCP, and Azure.',
}

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <About />
    </div>
  )
}
