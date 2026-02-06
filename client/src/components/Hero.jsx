import bgImage from '../assets/bg1.jpeg'

function Hero() {
  return (
    <section
      className="relative flex items-center justify-center min-h-[70vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-brand-900/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Professional Phlebotomy Services
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/90">
          Trusted in-home and in-office blood draw services in Lafayette, CA
        </p>
        <a
          href="https://koalendar.com/u/icmRODqsBlMNL1NCYwqMmbDkRdV2"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-3 rounded-lg text-lg transition-colors"
        >
          Book an Appointment
        </a>
      </div>
    </section>
  )
}

export default Hero
