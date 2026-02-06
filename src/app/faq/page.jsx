import FaqAccordion from '@/components/FaqAccordion'
import Link from 'next/link'

export const metadata = {
  title: 'FAQ — M.E.D Lab Services',
  description:
    'Frequently asked questions about phlebotomy services, blood draws, and lab testing at M.E.D Lab Services in Lafayette, CA.',
}

const faqs = [
  {
    question: 'Does a blood draw hurt?',
    answer:
      'Most patients feel a brief pinch when the needle is inserted, but the discomfort is minimal and lasts only a few seconds. Our phlebotomist is experienced with patients of all ages — including those with difficult veins — and uses gentle technique to make the process as comfortable as possible.',
  },
  {
    question: 'How should I prepare for a blood draw?',
    answer:
      'Preparation depends on the type of test being performed. Some tests require fasting (no food or drink other than water) for 8–12 hours beforehand. Your doctor will let you know if fasting is necessary. In general, we recommend drinking plenty of water before your appointment, as being well-hydrated makes it easier to find a vein.',
  },
  {
    question: 'Do you offer in-home blood draws?',
    answer:
      'Yes. We offer mobile phlebotomy services and can come to your home, office, or other location in the Lafayette and greater East Bay area. In-home draws are especially convenient for patients with mobility challenges, busy schedules, or children who are more comfortable in a familiar environment.',
  },
  {
    question: 'What insurance plans do you accept?',
    answer:
      'We accept most major insurance plans. We recommend contacting us with your insurance details before your appointment so we can verify coverage and let you know about any out-of-pocket costs. We also accept self-pay patients.',
  },
  {
    question: 'How long does it take to get results?',
    answer:
      'Turnaround time varies depending on the type of test. Routine blood work typically takes 1–3 business days. Some specialty tests may take longer. Results are sent directly to your ordering physician, who will share them with you. For SneakPeek gender tests, results are available in as little as 24 hours.',
  },
  {
    question: 'Can you draw blood from children?',
    answer:
      'Absolutely. Our phlebotomist has extensive experience working with pediatric patients and uses a gentle, patient approach to help children feel at ease. In-home visits are especially popular for families with young children, as the familiar environment helps reduce anxiety.',
  },
  {
    question: 'Do I need a doctor\'s order for a blood draw?',
    answer:
      'For most lab tests, yes — you will need a lab order from your healthcare provider. We accept orders from any physician or provider. If you have a specialty kit that was mailed to you (such as a SneakPeek test), we can process that without an additional doctor\'s order.',
  },
]

export default function FaqPage() {
  return (
    <section className="pt-28 pb-20 px-4 bg-surface min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-900 text-center mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-text-body text-center mb-12 text-lg">
          Have a question? Find answers to the most common questions about our phlebotomy services below.
        </p>

        <FaqAccordion faqs={faqs} />

        <div className="mt-12 text-center">
          <p className="text-text-body mb-4">
            Don&apos;t see your question? Reach out to us directly.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
