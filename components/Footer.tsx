export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Company */}
        <div>
          <h3 className="text-xl font-bold text-blue-500 mb-4">
            Noventra Technologies
          </h3>
          <p className="text-gray-400 text-sm">
            Delivering innovative IT consultancy, system development,
            networking, and enterprise solutions across Kenya and beyond.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
         <ul className="space-y-2 text-gray-400">
  <li>
    <a href="#home" className="hover:text-brandBlue transition">
      Home
    </a>
  </li>
  <li>
    <a href="#why" className="hover:text-brandBlue transition">
      About
    </a>
  </li>
  <li>
    <a href="#services" className="hover:text-brandBlue transition">
      Services
    </a>
  </li>
  <li>
    <a href="#contact" className="hover:text-brandBlue transition">
      Contact
    </a>
  </li>
</ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <p className="text-gray-400 text-sm">Nairobi, Kenya</p>
          <p className="text-gray-400 text-sm">info@noventratech.com</p>
          <p className="text-gray-400 text-sm">+254 700 000 000</p>
        </div>

      </div>

      <div className="text-center text-gray-500 text-xs mt-10 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} Noventra Technologies. All rights reserved.
      </div>
    </footer>
  );
}