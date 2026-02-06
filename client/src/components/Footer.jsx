function Footer() {
  return (
    <footer className="bg-brand-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/70 text-sm">
          &copy; {new Date().getFullYear()} M.E.D Lab Services. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm">
          <a href="#about" className="text-white/70 hover:text-white transition-colors">About</a>
          <a href="#services" className="text-white/70 hover:text-white transition-colors">Services</a>
          <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
