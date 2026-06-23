'use client'

import { motion, type Variants } from 'framer-motion'
import { SERVICES } from '@/constants'
import { FadeIn } from './FadeIn'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export function Services() {
  return (
    <section id="services" style={{ background: '#faf8f5', padding: '6rem 5rem' }} className="max-md:!py-16 max-md:!px-6">
      <FadeIn>
        <div
          className="flex justify-between items-end mb-16 max-md:flex-col max-md:items-start max-md:gap-4"
        >
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="block w-6 h-px bg-rose-mid flex-shrink-0" />
              <span className="text-[0.7rem] tracking-[0.2em] uppercase text-rose font-medium">Our Services</span>
            </div>
            <h2
              className="font-serif text-teal font-medium leading-[1.2]"
              style={{ fontSize: 'clamp(1.9rem, 2.8vw, 2.6rem)' }}
            >
              Comprehensive care across<br />every area of development.
            </h2>
          </div>
          <p className="text-[0.88rem] text-muted leading-[1.85] font-light max-w-[320px]">
            Each programme is personalised to the child and reviewed regularly with the family.
          </p>
        </div>
      </FadeIn>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
          gap: 3,
          background: 'rgba(155,91,110,0.08)',
        }}
        className="max-md:!grid-cols-2"
      >
        {SERVICES.map((svc) => (
          <motion.div
            key={svc.num}
            variants={item}
            style={{ background: 'white', padding: '2.5rem 2rem' }}
            className="transition-colors duration-300 hover:bg-cream cursor-default"
          >
            <p className="text-[0.68rem] tracking-[0.1em] uppercase text-rose mb-4 font-medium">{svc.num}</p>
            <p className="font-serif text-[1.2rem] font-medium text-teal mb-3">{svc.name}</p>
            <p className="text-[0.83rem] text-muted leading-[1.75] font-light">{svc.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
