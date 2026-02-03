import Resume from '../../components/Resume'

export const metadata = {
  title: 'Resume | Bijaya Budhathoki',
  description: 'Professional resume - Security Engineer & SRE with expertise in Kubernetes, cloud security, and DevSecOps.',
}

export default function ResumePage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <Resume />
    </div>
  )
}
