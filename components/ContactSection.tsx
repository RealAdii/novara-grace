'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, type ContactFormData } from '@/lib/contactSchema'
import { CONTACT_INFO } from '@/constants'
import { FadeIn } from './FadeIn'

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  const inputClass = `w-full px-4 py-3 border text-[0.88rem] text-brand-text outline-none transition-colors duration-200 bg-white font-sans focus:border-teal`
  const errorClass = `text-[0.72rem] text-rose mt-1`

  return (
    <section id="contact" style={{ background: '#faf8f5', padding: '6rem 5rem' }} className="max-md:!py-16 max-md:!px-6">
      <FadeIn>
        <div className="flex items-center gap-2.5 mb-4">
          <span className="block w-6 h-px bg-rose-mid flex-shrink-0" />
          <span className="text-[0.7rem] tracking-[0.2em] uppercase text-rose font-medium">Get in Touch</span>
        </div>
        <h2
          className="font-serif text-teal font-medium leading-[1.2] mb-3"
          style={{ fontSize: 'clamp(1.9rem, 2.8vw, 2.6rem)' }}
        >
          Start with a conversation.
        </h2>
        <p className="text-[0.88rem] text-muted leading-[1.85] font-light max-w-[520px]">
          A Psychological Assessment is the right first step for every family. It gives us a clear picture of your child and gives you a personalised plan going forward.
        </p>
      </FadeIn>

      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '6rem', marginTop: '4rem' }}
        className="max-md:!grid-cols-1 max-md:!gap-12"
      >
        {/* Contact details */}
        <FadeIn>
          <ContactDetail label="Address" value={<>{CONTACT_INFO.addressLine1}<br />{CONTACT_INFO.addressLine2}</>} />
          <ContactDetail label="Phone" value={CONTACT_INFO.phone} />
          <ContactDetail label="Email" value={CONTACT_INFO.email} />
          <ContactDetail label="Hours" value={<>{CONTACT_INFO.hours}<br />{CONTACT_INFO.hoursDetail}</>} />
          <ContactDetail label="Online Sessions" value={CONTACT_INFO.online} />
        </FadeIn>

        {/* Form */}
        <FadeIn delay={0.1}>
          {status === 'success' ? (
            <div className="border border-[rgba(30,107,91,0.2)] p-8 bg-teal-light">
              <p className="font-serif text-[1.2rem] text-teal font-medium mb-2">Message sent.</p>
              <p className="text-[0.88rem] text-muted leading-[1.8] font-light">
                Thank you for reaching out. We will be in touch with you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
                <div>
                  <label className="block text-[0.68rem] tracking-[0.1em] uppercase text-muted mb-1.5">Your Name</label>
                  <input
                    {...register('name')}
                    type="text"
                    placeholder="Full name"
                    className={`${inputClass} ${errors.name ? 'border-rose' : 'border-[rgba(30,107,91,0.18)]'}`}
                  />
                  {errors.name && <p className={errorClass}>{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-[0.68rem] tracking-[0.1em] uppercase text-muted mb-1.5">Phone Number</label>
                  <input
                    {...register('phone')}
                    type="text"
                    placeholder="+91"
                    className={`${inputClass} ${errors.phone ? 'border-rose' : 'border-[rgba(30,107,91,0.18)]'}`}
                  />
                  {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
                <div>
                  <label className="block text-[0.68rem] tracking-[0.1em] uppercase text-muted mb-1.5">Child's Age</label>
                  <input
                    {...register('childAge')}
                    type="text"
                    placeholder="e.g. 5 years"
                    className={`${inputClass} ${errors.childAge ? 'border-rose' : 'border-[rgba(30,107,91,0.18)]'}`}
                  />
                  {errors.childAge && <p className={errorClass}>{errors.childAge.message}</p>}
                </div>
                <div>
                  <label className="block text-[0.68rem] tracking-[0.1em] uppercase text-muted mb-1.5">Area of Concern</label>
                  <input
                    {...register('concern')}
                    type="text"
                    placeholder="e.g. Speech, Behavior, ASD"
                    className={`${inputClass} ${errors.concern ? 'border-rose' : 'border-[rgba(30,107,91,0.18)]'}`}
                  />
                  {errors.concern && <p className={errorClass}>{errors.concern.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-[0.68rem] tracking-[0.1em] uppercase text-muted mb-1.5">Your Message</label>
                <textarea
                  {...register('message')}
                  placeholder="Tell us a little about your child and what you are looking for..."
                  rows={4}
                  className={`${inputClass} resize-y min-h-[100px] border-[rgba(30,107,91,0.18)]`}
                />
              </div>

              {status === 'error' && (
                <p className="text-[0.82rem] text-rose">Something went wrong. Please try again or email us directly.</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="self-start bg-teal text-white font-sans text-[0.75rem] tracking-[0.1em] uppercase border-none px-10 py-[0.9rem] cursor-pointer font-medium transition-colors duration-200 hover:bg-teal-dark disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  )
}

function ContactDetail({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="mb-8">
      <p className="text-[0.68rem] tracking-[0.14em] uppercase text-rose mb-2 font-medium">{label}</p>
      <p className="text-[0.92rem] text-brand-text leading-[1.75]">{value}</p>
    </div>
  )
}
