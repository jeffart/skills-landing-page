export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f1117] border-b border-white/5 px-8 py-4 flex items-center justify-between">
      <span className="text-blue-500 font-bold text-lg tracking-tight">AutomateAI</span>
      <ul className="flex gap-8 text-sm text-gray-300">
        <li>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
        </li>
        <li>
          <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </li>
      </ul>
    </nav>
  )
}
