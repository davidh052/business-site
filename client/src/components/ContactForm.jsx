import { useState } from 'react'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState(null) // 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error('Failed to send')

      setStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Form */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-text-body mb-8">
            Have a question or want to schedule a visit? Send us a message and we'll get back to you within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brand-900 mb-1">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brand-900 mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-brand-900 mb-1">
                Phone (optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-brand-900 mb-1">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-colors resize-vertical"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-brand-500 hover:bg-brand-600 disabled:bg-brand-500/50 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-green-600 font-medium text-center">
                Message sent! We'll be in touch soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-600 font-medium text-center">
                Something went wrong. Please try again or call us directly.
              </p>
            )}
          </form>
        </div>

        {/* Contact Info + Map */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-6">
            Contact Info
          </h2>

          <div className="space-y-4 mb-8">
            <p className="text-text-body">
              <span className="font-semibold text-brand-900">Phone:</span> 925-476-5082
            </p>
            <p className="text-text-body">
              <span className="font-semibold text-brand-900">Fax:</span> 925-871-4113
            </p>
            <p className="text-text-body">
              <span className="font-semibold text-brand-900">Email:</span> info@medlabservices1.com
            </p>
            <p className="text-text-body">
              <span className="font-semibold text-brand-900">Address:</span> 3190 Old Tunnel Rd St B, Lafayette, CA 94549
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-sm h-80">
            <iframe
              title="M.E.D Lab Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.4723032029196!2d-122.09651072411079!3d37.89602177195504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085631a597bfd1d%3A0x5cdb7a14f300f8b5!2sMED%20LAB%20Services!5e0!3m2!1sen!2sus!4v1754281620446!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
