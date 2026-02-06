const services = [
  {
    title: 'In-Home Blood Draws',
    description:
      'Professional blood draws in the comfort of your own home for adults and children.',
  },
  {
    title: 'SneakPeek Gender Test',
    description:
      "Know your baby's gender as early as 7 weeks with this 99.1% accurate blood test. Results in as little as 24 hours.",
  },
  {
    title: 'Specialty Kit Processing',
    description:
      'We handle all specialty kits and coordinate with partner labs across the U.S.',
  },
  {
    title: 'Urine Testing',
    description:
      'Quick and discreet collection with secure handling to ensure accurate and timely lab results.',
  },
]

function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-900 text-center mb-12">
          Our Services
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border-t-4 border-brand-500"
            >
              <h3 className="text-lg font-bold text-brand-900 mb-3">{service.title}</h3>
              <p className="text-text-body text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
