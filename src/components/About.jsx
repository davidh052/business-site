function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-900 text-center mb-12">
          About Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Who We Are */}
          <div className="bg-brand-50 rounded-xl p-8 border-l-4 border-brand-500">
            <h3 className="text-xl font-bold text-brand-900 mb-4">Who We Are</h3>
            <p className="text-text-body leading-relaxed">
              Arina Makarov founded M.E.D. Lab Services in March 2020 with a passion for
              exceptional patient care. Over five years, we've become a trusted provider of
              reliable and compassionate phlebotomy services, offering personalized care in-home
              or at our Lafayette office. With excellent reviews from patients and healthcare
              partners, we pride ourselves on professionalism, accuracy, and a commitment to
              your safety and comfort.
            </p>
          </div>

          {/* What We Do */}
          <div className="bg-brand-50 rounded-xl p-8 border-l-4 border-brand-500">
            <h3 className="text-xl font-bold text-brand-900 mb-4">What We Do</h3>
            <p className="text-text-body leading-relaxed">
              M.E.D. Lab Services offers reliable, in-home and in-office blood draw services for
              both adults and children in Lafayette, CA. Our trained staff uses modern equipment
              to ensure safe, fast, and accurate specimen collection. We handle blood and urine
              samples, including full processing and shipping. We accept all lab orders and
              specialty kits, and work with partner laboratories across the U.S. and Europe.
              Most major insurance plans are accepted.
            </p>
          </div>

          {/* Why Us */}
          <div className="bg-brand-50 rounded-xl p-8 border-l-4 border-brand-500">
            <h3 className="text-xl font-bold text-brand-900 mb-4">Why Us</h3>
            <p className="text-text-body leading-relaxed">
              With over a decade of experience, M.E.D. Lab Services delivers expert,
              compassionate phlebotomy care. Our excellent reviews reflect our commitment to
              patient comfort and professionalism. We work confidently with all patient
              types—from children to seniors and those with special needs—ensuring every visit
              is safe and stress-free. Choosing us means choosing reliability, professionalism,
              and a dedication to your well-being.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
