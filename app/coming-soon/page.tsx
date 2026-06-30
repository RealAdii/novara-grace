import Image from 'next/image'

export default function ComingSoon() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#faf8f5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <Image
        src="/logo.png"
        alt="Novara Grace"
        width={3634}
        height={953}
        unoptimized
        style={{ height: 90, width: 'auto', marginBottom: '2.5rem' }}
        priority
      />
      <div style={{ width: 48, height: 1, background: '#9B5B6E', margin: '0 auto 2.5rem' }} />
      <p
        style={{
          fontFamily: 'var(--font-jost, sans-serif)',
          fontSize: '0.75rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#9B5B6E',
          fontWeight: 500,
        }}
      >
        Coming Soon
      </p>
      <p
        style={{
          fontFamily: 'var(--font-jost, sans-serif)',
          fontSize: '0.88rem',
          color: 'rgba(44,44,42,0.5)',
          marginTop: '1rem',
          letterSpacing: '0.02em',
          lineHeight: 1.8,
        }}
      >
        We're putting the finishing touches on something special.<br />
        Check back soon.
      </p>
    </main>
  )
}
