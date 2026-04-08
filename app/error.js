'use client'

export default function Error({ error, reset }) {
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
      <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', margin: 0 }}>Something went wrong</h2>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '400px', margin: 0 }}>
        {error?.message || 'An unexpected error occurred.'}
      </p>
      <button
        onClick={reset}
        style={{
          padding: '0.75rem 1.5rem',
          background: 'var(--accent-primary)',
          color: '#fff',
          border: 'none',
          borderRadius: 'var(--radius-md)',
          fontWeight: 500,
          cursor: 'pointer',
        }}
      >
        Try again
      </button>
    </div>
  )
}
