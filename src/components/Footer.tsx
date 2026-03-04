import { ArrowRight, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer>
      <section className="bg-purple-800 text-white py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold leading-tight">
                Let's help you navigate your next
              </h2>
              <button className="flex items-center gap-2 bg-white text-purple-800 px-8 py-4 rounded-sm hover:bg-gray-100 transition font-semibold">
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex gap-6">
              <a href="https://www.linkedin.com/company/daflitech/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="mailto:daflitechtechnologies@gmail.com" className="hover:opacity-70 transition">
                <Mail className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">About Us</a></li>
                <li><a href="#" className="hover:text-gray-900">Leadership</a></li>
                <li><a href="#" className="hover:text-gray-900">Diversity</a></li>
                <li><a href="#" className="hover:text-gray-900">Sustainability</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4">Subsidiaries</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">EdgeVerve</a></li>
                <li><a href="#" className="hover:text-gray-900">Infosys BPM</a></li>
                <li><a href="#" className="hover:text-gray-900">Infosys Consulting</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4">Programs</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Infosys Foundation</a></li>
                <li><a href="#" className="hover:text-gray-900">STEM Education</a></li>
                <li><a href="#" className="hover:text-gray-900">Digital Academy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Terms of Use</a></li>
                <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
                <li><a href="#" className="hover:text-gray-900">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-gray-900">Safe Harbor</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Blogs</a></li>
                <li><a href="#" className="hover:text-gray-900">Events</a></li>
                <li><a href="#" className="hover:text-gray-900">Newsroom</a></li>
                <li><a href="#" className="hover:text-gray-900">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>&copy; 2026 Infosys Limited. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-900">Privacy Statement</a>
              <a href="#" className="hover:text-gray-900">Cookie Policy</a>
              <a href="#" className="hover:text-gray-900">Site Map</a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
