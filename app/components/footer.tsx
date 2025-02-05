"use client"; // Only include this if you need client-side functionality (e.g., useState, useEffect)

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-sm text-gray-300">
              We do be tryna save animals.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-300 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>Email: info@example.com</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: 123 Main St, City, Country</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} MyApp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;