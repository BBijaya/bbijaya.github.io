import Link from 'next/link'

export const metadata = {
  title: 'Page Not Found',
}

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '1.5rem',
      textAlign: 'center',
      padding: '80px 2rem 2rem',
    }}>
      <h1 style={{ fontSize: '6rem', fontWeight: 700, color: 'var(--accent-primary)', lineHeight: 1, margin: 0 }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', margin: 0 }}>Page Not Found</h2>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '400px', margin: 0 }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        style={{
          display: 'inline-block',
          padding: '0.75rem 1.5rem',
          background: 'var(--accent-primary)',
          color: '#fff',
          borderRadius: 'var(--radius-md)',
          fontWeight: 500,
        }}
      >
        Back to Home
      </Link>
    </div>
  )
}
