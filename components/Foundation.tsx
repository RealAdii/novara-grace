import { FadeIn } from './FadeIn'

export function Foundation() {
  return (
    <div
      style={{ background: '#f5eaee', padding: '5rem', display: 'flex', gap: '5rem', alignItems: 'center' }}
      className="max-md:!flex-col max-md:!gap-8 max-md:!p-12 max-md:!px-6"
    >
      <FadeIn className="flex-1">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="block w-6 h-px bg-rose-mid flex-shrink-0" />
          <span className="text-[0.7rem] tracking-[0.18em] uppercase text-rose font-medium">Novara Grace Foundation</span>
        </div>
        <h2 className="font-serif text-teal font-medium leading-[1.2]" style={{ fontSize: '2rem' }}>
          Reaching more children<br />in the coming days.
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} className="flex-[1.2]">
        <p className="text-[0.88rem] leading-[1.85] text-muted font-light">
          Alongside the centre, we have established the Novara Grace Foundation as a dedicated channel to reach children and families who might not otherwise have access to quality developmental support. The Foundation is in its early stages and its full programmes will be shared soon. It is our commitment to this community, and our belief that good care should reach as many children as possible.
        </p>
      </FadeIn>
    </div>
  )
}
