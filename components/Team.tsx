'use client'

import { motion, type Variants } from 'framer-motion'
import { TEAM } from '@/constants'
import { FadeIn } from './FadeIn'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Team() {
  return (
    <section id="team" style={{ background: 'white', padding: '6rem 5rem' }} className="max-md:!py-16 max-md:!px-6">
      <FadeIn>
        <div className="flex items-center gap-2.5 mb-4">
          <span className="block w-6 h-px bg-rose-mid flex-shrink-0" />
          <span className="text-[0.7rem] tracking-[0.2em] uppercase text-rose font-medium">Our Team</span>
        </div>
        <h2
          className="font-serif text-teal font-medium leading-[1.2] mb-2"
          style={{ fontSize: 'clamp(1.9rem, 2.8vw, 2.6rem)' }}
        >
          People who chose to be here.
        </h2>
        <p className="text-[0.88rem] text-muted leading-[1.85] font-light max-w-[520px]">
          Every member of this team is here by choice. That matters more than it might sound.
        </p>
      </FadeIn>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5,1fr)',
          gap: '2rem',
          marginTop: '3.5rem',
        }}
        className="max-md:!grid-cols-3"
      >
        {TEAM.map((member) => (
          <motion.div key={member.name} variants={item} className="text-center">
            <div
              className="w-[76px] h-[76px] rounded-full flex items-center justify-center font-serif text-[1.1rem] font-medium text-white mx-auto mb-4"
              style={{ background: member.isConsultant ? '#9B5B6E' : '#1E6B5B' }}
            >
              {member.initials}
            </div>
            <p className="font-serif text-[1rem] font-medium text-teal mb-1">{member.name}</p>
            <p className="text-[0.7rem] text-muted tracking-[0.06em] uppercase mb-2.5 leading-[1.5]">{member.role}</p>
            <span
              className="inline-block text-[0.62rem] tracking-[0.08em] uppercase px-2.5 py-0.5 border"
              style={{
                borderColor: member.isConsultant ? 'rgba(155,91,110,0.25)' : 'rgba(30,107,91,0.2)',
                color: member.isConsultant ? '#9B5B6E' : '#1E6B5B',
              }}
            >
              {member.tag}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
