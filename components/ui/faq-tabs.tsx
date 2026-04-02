'use client'

import React, { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

export const FAQ = ({
  title = 'FAQs',
  subtitle = 'Frequently Asked Questions',
  categories,
  faqData,
  className,
  ...props
}: {
  title?: string
  subtitle?: string
  categories: Record<string, string>
  faqData: Record<string, { question: string; answer: string }[]>
  className?: string
  [key: string]: unknown
}) => {
  const categoryKeys = Object.keys(categories)
  const [selectedCategory, setSelectedCategory] = useState(categoryKeys[0])

  return (
    <section
      className={cn('relative overflow-hidden px-4 py-12', className)}
      style={{ background: 'var(--white)', color: 'var(--black)' }}
      {...props}
    >
      <FAQHeader title={title} subtitle={subtitle} />
      <FAQTabs
        categories={categories}
        selected={selectedCategory}
        setSelected={setSelectedCategory}
      />
      <FAQList faqData={faqData} selected={selectedCategory} />
    </section>
  )
}

const FAQHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="relative z-10 flex flex-col items-center justify-center mb-8">
    <span className="label mb-4">{subtitle}</span>
    <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', fontWeight: 400, letterSpacing: '-0.035em' }}>
      {title}
    </h2>
  </div>
)

const FAQTabs = ({
  categories,
  selected,
  setSelected,
}: {
  categories: Record<string, string>
  selected: string
  setSelected: (key: string) => void
}) => (
  <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 mb-10">
    {Object.entries(categories).map(([key, label]) => (
      <button
        key={key}
        onClick={() => setSelected(key)}
        style={{
          padding: '8px 20px',
          borderRadius: '100px',
          border: `1px solid ${selected === key ? 'var(--black)' : 'var(--gray-200)'}`,
          background: selected === key ? 'var(--black)' : 'transparent',
          color: selected === key ? 'var(--white)' : 'var(--gray-500)',
          fontSize: '0.875rem',
          fontWeight: 500,
          cursor: 'pointer',
          transition: 'all 0.2s',
        }}
      >
        {label}
      </button>
    ))}
  </div>
)

const FAQList = ({
  faqData,
  selected,
}: {
  faqData: Record<string, { question: string; answer: string }[]>
  selected: string
}) => (
  <div className="mx-auto mt-4" style={{ maxWidth: '780px' }}>
    {Object.entries(faqData).map(([category, questions]) => {
      if (selected !== category) return null
      return (
        <div key={category} className="space-y-0">
          {questions.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      )
    })}
  </div>
)

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      style={{
        borderTop: '1px solid var(--gray-200)',
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4"
        style={{
          padding: 'clamp(18px, 2.5vw, 26px) 0',
          textAlign: 'left',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: 'var(--black)',
        }}
      >
        <span style={{ fontSize: 'clamp(1rem, 1.8vw, 1.125rem)', fontWeight: 400 }}>
          {question}
        </span>
        <Plus
          style={{
            flexShrink: 0,
            width: 20,
            height: 20,
            color: 'var(--gray-400)',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s',
          }}
        />
      </button>
      {isOpen && (
        <p
          style={{
            fontSize: '1rem',
            color: 'var(--gray-500)',
            lineHeight: 1.7,
            paddingBottom: 'clamp(18px, 2.5vw, 26px)',
            maxWidth: '660px',
          }}
        >
          {answer}
        </p>
      )}
    </div>
  )
}
