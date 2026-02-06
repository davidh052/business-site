const steps = [
  {
    num: 1,
    title: 'Book Your Appointment',
    description:
      'Schedule online or by phone for an in-home visit or a time at our Lafayette office.',
  },
  {
    num: 2,
    title: 'Professional Collection',
    description:
      'Our trained phlebotomist collects your blood or urine sample safely and gently.',
  },
  {
    num: 3,
    title: 'Fast Results',
    description:
      'Samples are processed and shipped to partner labs; results go to you or your provider ASAP.',
  },
]

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-900 text-center mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="text-center">
              <div className="mx-auto w-14 h-14 rounded-full bg-brand-900 text-white flex items-center justify-center text-xl font-bold mb-4">
                {step.num}
              </div>
              <h3 className="text-lg font-bold text-brand-900 mb-2">{step.title}</h3>
              <p className="text-text-body leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
