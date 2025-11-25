import { Box, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Box className="w-8 h-8 text-blue-500" />
              <h3 className="text-2xl font-bold">Noctra</h3>
            </div>
            <p className="text-gray-400">
              Bringing your imagination to life with precision 3D printing technology.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-blue-500 transition-colors">Products</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-blue-500 transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-blue-500" />
                <span className="text-gray-400">info@noctra.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-blue-500" />
                <span className="text-gray-400">(+254) 712 015 793</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span className="text-gray-400">Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
