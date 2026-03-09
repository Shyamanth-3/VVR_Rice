import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Clients', href: '/clients' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const products = [
    { name: 'FRK - Fortified Rice Kernels', href: '/products#frk' },
    { name: 'Sona Masoori White Rice', href: '/products#sona-white' },
    { name: 'Sona Masoori Brown Rice', href: '/products#sona-brown' },
    { name: '1061 Indra Rice', href: '/products#indra' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="VVR Rice (India)"
                className="h-12 w-auto brightness-100 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-lg font-serif font-bold">VVR Rice</span>
                <span className="text-xs text-gold-400 font-medium">(INDIA)</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              VVR Rice – A Tradition of Taste & Trust. Delivering quality rice to 
              families since 1960 with fully automated plant ensuring premium quality 
              and hygiene.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/SatyaPrakashRiceMill"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-gold-600 rounded-lg transition-colors duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/SatyaPrakashRiceMill"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-gold-600 rounded-lg transition-colors duration-300"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gold-400">Quick Links</h3>
            <ul className="space-y-2">
              {navigationLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-gold-400 transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gold-400">Our Products</h3>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product.name}>
                  <Link
                    to={product.href}
                    className="text-gray-300 hover:text-gold-400 transition-colors duration-200 text-sm"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gold-400">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-gold-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Post-Office Road, Gudivada,</p>
                  <p>521301 (A.P), India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-gold-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>+91-94901 96589</p>
                  <p>+91-93477 67788</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-gold-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>vvrriceindia@gmail.com</p>
                  <p>vankineni.tsrao@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Heritage Quote */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center">
            <blockquote className="text-lg italic text-gray-300 font-serif">
              "Every grain in our factory is carefully selected and processed from field to fork."
            </blockquote>
            <p className="mt-2 text-gold-400 font-semibold">— VVR Rice Heritage</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>© {currentYear} VVR Rice (India). All rights reserved.</p>
              <p className="mt-1">Crafted with Tradition, Packed with Care since 1960.</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;