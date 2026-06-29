'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CALENDLY_URL } from '@/constants'

type Tab = 'story' | 'founder' | 'foundation'

const tabs: { id: Tab; label: string }[] = [
  { id: 'story', label: 'Our Story' },
  { id: 'founder', label: 'Founder' },
  { id: 'foundation', label: 'Foundation' },
]

export function Hero() {
  const [activeTab, setActiveTab] = useState<Tab>('story')

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        background: '#faf8f5',
        paddingTop: 140,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Left column */}
      <div style={{ padding: '5rem 3rem 5rem 5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        className="max-md:!p-12 max-md:!col-span-2">
        <h1 className="font-serif text-teal font-medium leading-[1.15] mb-4"
          style={{ fontSize: 'clamp(2.6rem, 3.5vw, 3.8rem)' }}>
          Where your child<br />
          <em className="not-italic italic text-rose">actually</em> gets better<br />
          and you are part<br />
          of every step.
        </h1>

        <p className="text-[0.95rem] leading-[1.85] text-muted max-w-[460px] mb-10 font-light">
          An environment for all of child development, founded with a great deal of passion and the belief that every child deserves to be truly seen, genuinely supported, and given the space to grow.
        </p>

        <div className="flex gap-4 mb-12">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-teal text-white font-sans text-[0.75rem] tracking-[0.1em] uppercase border-none px-8 py-[0.85rem] cursor-pointer font-medium transition-colors duration-200 hover:bg-teal-dark"
          >
            Book an Assessment
          </button>
          <button
            onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-transparent text-teal font-sans text-[0.75rem] tracking-[0.1em] uppercase border border-teal px-8 py-[0.85rem] cursor-pointer font-medium transition-all duration-200 hover:bg-teal hover:text-white"
          >
            Meet the Team
          </button>
        </div>

        {/* About tabs */}
        <div id="about" style={{ borderTop: '1px solid rgba(155,91,110,0.15)', paddingTop: '2rem' }}>
          <div className="flex gap-0" style={{ borderBottom: '1px solid rgba(30,107,91,0.15)', marginBottom: '2rem' }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`bg-transparent border-none font-sans text-[0.72rem] tracking-[0.1em] uppercase cursor-pointer pr-6 py-3 transition-all duration-200 font-normal border-b-2 -mb-px ${
                  activeTab === tab.id
                    ? 'text-teal border-b-teal'
                    : 'text-muted border-b-transparent'
                }`}
                style={{ borderBottom: activeTab === tab.id ? '2px solid #1E6B5B' : '2px solid transparent' }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === 'story' && (
            <div className="text-[0.88rem] leading-[1.85] text-muted font-light">
              <p>Sheldon Amanna began practicing Behavioral Therapy right after finishing his Master's at the <strong className="text-teal font-medium">University of Nottingham, UK</strong>. His training was rigorous, his clinical work deeply rewarding but his heart never quite left home. Mangalore stayed with him.</p>
              <p className="mt-3">He came back, worked across Bangalore to sharpen his practice further, and somewhere in that time the question became unavoidable: what if he could build something here that simply did not exist? Not a centre that processed children in and out, but a place that genuinely changed things for families.</p>
              <p className="mt-3">He spent a year planning carefully, finding the right space, the right people and the right structure. <strong className="text-teal font-medium">Novara Grace</strong> is the result of that year and those nine years before it.</p>
              <blockquote className="font-serif text-[1.05rem] italic text-teal leading-[1.6] my-4 pl-4 border-l-2 border-rose not-italic">
                "Every family that walks through our door deserves to see their child grow. That is the only standard we hold ourselves to."
              </blockquote>
            </div>
          )}

          {activeTab === 'founder' && (
            <div className="text-[0.88rem] leading-[1.85] text-muted font-light">
              <p><strong className="text-teal font-medium">Sheldon Amanna</strong> is the Founder and Clinical Director of Novara Grace. He holds an MSc in Developmental Disorders from the University of Nottingham, with specialisations in Autism, Early Intervention, Behavioral Disorders and Parent Guidance Counselling.</p>
              <p className="mt-3">He has nine years of hands-on practice across Nottingham, London, Bangalore and Mangalore. His approach is direct, evidence-based and deeply family-centred. He does not believe in therapy that happens in a room and stops at the door.</p>
              <div className="flex flex-wrap gap-3 mt-4">
                {['MSc Nottingham UK', '9 Years Practice', 'Autism Specialist', 'Early Intervention', 'Parent Counselling'].map((chip) => (
                  <span
                    key={chip}
                    className="text-[0.7rem] tracking-[0.07em] uppercase border border-[rgba(30,107,91,0.2)] text-teal px-3 py-1"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'foundation' && (
            <div className="text-[0.88rem] leading-[1.85] text-muted font-light">
              <p>Alongside the centre, we have established the <strong className="text-teal font-medium">Novara Grace Foundation</strong> as a channel to reach children and families who might not otherwise have access to quality developmental support.</p>
              <p className="mt-3">As the centre grows, the Foundation will grow with it. It is our commitment to the broader community and our belief that good therapy should not be a privilege. More details on the Foundation's programmes will follow in the coming months.</p>
            </div>
          )}
        </div>
      </div>

      {/* Right column: photo grid */}
      <div className="relative overflow-hidden max-md:hidden">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', height: '100%', gap: 3 }}>
          {/* Large left cell */}
          <div
            style={{
              gridColumn: 1, gridRow: '1/3',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/images/hero-main.jpg"
              alt="Child development at Novara Grace"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              sizes="33vw"
              priority
            />
            {/* Stat card */}
            <div
              style={{
                position: 'absolute', bottom: '2rem', left: '2rem',
                background: 'rgba(0,0,0,0.35)',
                border: '1px solid rgba(255,255,255,0.2)',
                padding: '1.25rem 1.5rem',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div className="font-serif text-white font-normal leading-none" style={{ fontSize: '2.5rem' }}>11</div>
              <div className="text-[0.68rem] tracking-[0.1em] uppercase text-white/60 mt-1">Active clients before opening</div>
            </div>
          </div>

          {/* Top right */}
          <div style={{ gridColumn: 2, gridRow: 1, position: 'relative', overflow: 'hidden' }}>
            <Image
              src="/images/hero-top.jpg"
              alt="Family support at Novara Grace"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              sizes="17vw"
            />
          </div>

          {/* Bottom right */}
          <div style={{ gridColumn: 2, gridRow: 2, position: 'relative', overflow: 'hidden' }}>
            <Image
              src="/images/hero-bottom.jpg"
              alt="Child activity at Novara Grace"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              sizes="17vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
