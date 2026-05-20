export default function Footer() {
  return (
    <footer id="contact" className="bg-[#090b10] border-t border-white/5 py-16 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <p className="text-blue-500 font-bold text-lg mb-3">AutomateAI</p>
          <p className="text-gray-500 text-sm leading-relaxed">
            AI-powered automation for modern businesses. Save time, cut costs, scale faster.
          </p>
        </div>

        {/* Links */}
        <div>
          <p className="text-white font-semibold mb-4">Product</p>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-white font-semibold mb-4">Contact</p>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>hello@automateai.io</li>
            <li>+1 (555) 000-0000</li>
            <li>San Francisco, CA</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/5 text-center text-gray-600 text-xs">
        © {new Date().getFullYear()} AutomateAI. All rights reserved.
      </div>
    </footer>
  )
}
