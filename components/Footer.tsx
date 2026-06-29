import Image from 'next/image'

export function Footer() {
  return (
    <footer
      style={{ background: '#144d41', padding: '3rem 5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      className="max-md:!flex-col max-md:!gap-6 max-md:!text-center max-md:!p-8 max-md:!px-6"
    >
      <div style={{ background: 'white', padding: '0.6rem 1.2rem', display: 'inline-block' }}>
        <Image
          src="/logo.png"
          alt="Novara Grace"
          width={3634}
          height={953}
          unoptimized
          style={{ height: 72, width: 'auto', display: 'block' }}
        />
      </div>
      <div className="max-md:text-center" style={{ textAlign: 'right' }}>
        <p className="text-[0.78rem] leading-[1.8]" style={{ color: 'rgba(255,255,255,0.45)' }}>
          Palms Springs, Ferrer Colony, 2nd Cross<br />
          Souterpet Main Road, Valencia<br />
          Mangalore 575002<br />
          Novara Grace Foundation · Amanna and Co.
        </p>
      </div>
    </footer>
  )
}
