import logo from '../assets/logo.jpg'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="M.E.D Lab Services" className="h-10 w-10 rounded-full object-cover" />
          <span className="text-white text-lg font-bold tracking-wide">M.E.D Lab Services</span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-white/80 hover:text-white text-sm font-medium transition-colors">About</a>
          <a href="#services" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Services</a>
          <a href="#reviews" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Reviews</a>
          <a href="#contact" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Contact</a>
        </div>

        {/* CTA Button */}
        <a
          href="https://koalendar.com/u/icmRODqsBlMNL1NCYwqMmbDkRdV2"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
        >
          Book Appointment
        </a>
      </div>
    </nav>
  )
}

export default Navbar
