'use client'

import { motion, type Variants } from 'framer-motion'
import { BELIEFS } from '@/constants'
import { FadeIn } from './FadeIn'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Beliefs() {
  return (
    <section style={{ background: 'white', padding: '6rem 5rem' }} className="max-md:!py-16 max-md:!px-6">
      <FadeIn className="mb-16 max-w-[560px]">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="block w-6 h-px bg-rose-mid flex-shrink-0" />
          <span className="text-[0.7rem] tracking-[0.2em] uppercase text-rose font-medium">What We Believe</span>
        </div>
        <h2
          className="font-serif text-teal font-medium leading-[1.2]"
          style={{ fontSize: 'clamp(1.9rem, 2.8vw, 2.6rem)' }}
        >
          Five things that guide<br />everything we do.
        </h2>
      </FadeIn>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5,1fr)',
          borderTop: '2px solid #1E6B5B',
        }}
        className="max-md:!grid-cols-2"
      >
        {BELIEFS.map((belief) => (
          <motion.div
            key={belief.num}
            variants={item}
            style={{
              padding: '2.5rem 2rem 2rem',
              borderRight: '1px solid rgba(30,107,91,0.1)',
            }}
            className="last:border-r-0"
          >
            <div className="font-serif text-[2.5rem] font-normal leading-none mb-4" style={{ color: 'rgba(30,107,91,0.15)' }}>
              {belief.num}
            </div>
            <p className="font-serif text-[1.05rem] font-medium text-teal mb-3 leading-[1.3]">
              {belief.title}
            </p>
            <p className="text-[0.82rem] text-muted leading-[1.75] font-light">
              {belief.text}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
