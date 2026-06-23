import { NovaragraceLogo } from './NovaragraceLogo'

export function Footer() {
  return (
    <footer
      style={{ background: '#144d41', padding: '3rem 5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      className="max-md:!flex-col max-md:!gap-6 max-md:!text-center max-md:!p-8 max-md:!px-6"
    >
      <div>
        <NovaragraceLogo footer />
      </div>
      <div className="max-md:text-center" style={{ textAlign: 'right' }}>
        <p className="text-[0.78rem] leading-[1.8]" style={{ color: 'rgba(255,255,255,0.45)' }}>
          Valencia, Souterpet Main Road, Mangalore 575002<br />
          Novara Grace Foundation · Amanna and Co.
        </p>
        <p className="text-[0.68rem] tracking-[0.08em] uppercase mt-2" style={{ color: '#c48a9a' }}>
          Sheldon Amanna, Founder and Clinical Director
        </p>
      </div>
    </footer>
  )
}
