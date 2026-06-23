import { TESTIMONIALS } from '@/constants'
import { FadeIn } from './FadeIn'

export function Testimonials() {
  return (
    <section id="testimonials" style={{ background: '#1E6B5B', padding: '6rem 5rem' }} className="max-md:!py-16 max-md:!px-6">
      <FadeIn>
        <div className="flex items-center gap-2.5 mb-4">
          <span className="block w-7 h-px flex-shrink-0" style={{ background: '#c48a9a' }} />
          <span className="text-[0.7rem] tracking-[0.2em] uppercase font-medium" style={{ color: '#c48a9a' }}>Family Stories</span>
        </div>
        <h2
          className="font-serif font-medium text-white leading-[1.2] mb-4"
          style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.5rem)' }}
        >
          Milestones that happened<br />faster than anyone expected.
        </h2>
        <p className="text-[0.88rem] leading-[1.8] font-light mb-16 max-w-[500px]" style={{ color: 'rgba(255,255,255,0.55)' }}>
          We wanted to share some of the journeys of children who found real milestones within days of joining our programme. These are their families speaking.
        </p>
      </FadeIn>

      <div
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2rem' }}
        className="max-md:!grid-cols-1"
      >
        {TESTIMONIALS.map((t, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div
              style={{
                border: '1px solid rgba(255,255,255,0.12)',
                padding: '2.5rem',
                background: 'rgba(255,255,255,0.05)',
              }}
            >
              <span
                className="inline-block text-[0.65rem] tracking-[0.1em] uppercase px-3 py-1 mb-6"
                style={{ background: 'rgba(155,91,110,0.3)', color: '#c48a9a' }}
              >
                {t.milestone}
              </span>
              <p className="font-serif text-[1.1rem] italic text-white leading-[1.65] mb-6">
                "{t.quote}"
              </p>
              <div className="w-8 h-px mb-4" style={{ background: 'rgba(255,255,255,0.2)' }} />
              <p className="text-[0.75rem] tracking-[0.08em] uppercase" style={{ color: 'rgba(255,255,255,0.45)' }}>
                {t.parent}
              </p>
              <p className="text-[0.75rem] mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>
                {t.child}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
