'use client'

import { useState } from 'react'

function FaqAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-brand-50/50 transition-colors"
          >
            <span className="text-lg font-semibold text-brand-900 pr-4">{faq.question}</span>
            <span className={`text-brand-500 text-2xl font-light shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-45' : ''}`}>
              +
            </span>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-5">
              <p className="text-text-body leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default FaqAccordion
