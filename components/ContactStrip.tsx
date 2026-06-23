import { CONTACT_INFO } from '@/constants'

const items = [
  { value: CONTACT_INFO.address },
  { label: 'Phone', value: CONTACT_INFO.phone },
  { label: 'Email', value: CONTACT_INFO.email },
  { label: 'Hours', value: CONTACT_INFO.hours },
]

export function ContactStrip() {
  return (
    <div
      className="flex flex-wrap gap-y-3"
      style={{ background: '#144d41', padding: '1rem 5rem', gap: '0 3rem', alignItems: 'center' }}
    >
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-3">
          <span className="w-[5px] h-[5px] rounded-full bg-rose-mid flex-shrink-0" />
          <span className="text-[0.75rem] tracking-[0.06em] uppercase text-white/60">
            {item.label && <>{item.label}: </>}
            <span className="text-white/90">{item.value}</span>
          </span>
        </div>
      ))}
    </div>
  )
}
