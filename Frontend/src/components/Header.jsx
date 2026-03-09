import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile(); // Initial check
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Clients', href: '/clients' },
    { name: 'Contact Us', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={false}
      animate={{
        top: isScrolled && !isMobile ? 20 : 0,
        left: isMobile ? 0 : '50%',
        x: isMobile ? 0 : '-50%',
        width: isScrolled && !isMobile ? 'max-content' : '100%',
        borderRadius: isScrolled && !isMobile ? 9999 : 0,
        paddingTop: 0,
        paddingBottom: 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 25,
        mass: 0.5,
      }}
      className={`fixed z-50 transition-[background-color,box-shadow,backdrop-filter] duration-700 ease-in-out w-full ${
        isScrolled
          ? 'bg-white/70 backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border-b lg:border border-white/50'
          : 'bg-white/95 backdrop-blur-sm shadow-none border-b border-gray-100'
      }`}
      style={{ position: 'fixed' }}
    >
      <div className={`transition-all duration-700 ease-in-out ${(isScrolled && !isMobile) ? 'px-8' : 'container-custom'}`}>
        <motion.div layout className={`flex items-center w-full justify-between transition-all duration-700 ease-in-out ${
          (isScrolled && !isMobile) ? 'h-14 gap-8' : 'h-16 md:h-20 gap-4'
        }`}>
          {/* Logo — always visible, shrinks to icon in pill */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <motion.img
              animate={{
                height: isScrolled ? 36 : 56,
                width: isScrolled ? 36 : 'auto',
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              src="/logo.png"
              alt="VVR Rice (India)"
              className="object-contain"
            />
            <motion.div
              animate={{
                width: (isScrolled && !isMobile) ? 0 : 'auto',
                opacity: (isScrolled && !isMobile) ? 0 : 1,
                marginLeft: (isScrolled && !isMobile) ? 0 : 8,
              }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden flex flex-col whitespace-nowrap"
            >
              <span className="text-xl font-serif font-bold text-gray-900 leading-tight">
                VVR Rice
              </span>
              <span className="text-xs font-medium text-gold-600">
                (INDIA)
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation — always visible, centered when scrolled */}
          <nav className={`hidden lg:flex items-center transition-all duration-700 ease-in-out ${
            isScrolled ? 'space-x-5' : 'space-x-8'
          }`}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-all duration-300 hover:text-gold-600 whitespace-nowrap ${
                  isScrolled ? 'text-[13px]' : 'text-sm'
                } ${
                  location.pathname === item.href
                    ? 'text-gold-600'
                    : 'text-gray-700'
                }`}
              >
                <span className="relative">
                  {item.name}
                  {location.pathname === item.href && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold-600 rounded-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </span>
              </Link>
            ))}
          </nav>

          {/* CTA Button — only visible when NOT scrolled */}
          <AnimatePresence>
            {!isScrolled && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, width: 0 }}
                animate={{ opacity: 1, scale: 1, width: 'auto' }}
                exit={{ opacity: 0, scale: 0.8, width: 0 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="hidden lg:block overflow-hidden flex-shrink-0"
              >
                <Link
                  to="/contact"
                  className="btn-primary"
                >
                  Get In Touch
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-full text-gray-700 hover:text-gold-600 hover:bg-gray-100/80 transition-colors ${
              (isScrolled && !isMobile) ? 'ml-auto' : ''
            }`}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className={`lg:hidden overflow-hidden ${isScrolled ? 'rounded-2xl mt-2 mb-2' : 'border-t'}`}
            >
              <nav className="py-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 text-sm font-medium transition-colors duration-200 hover:text-gold-600 hover:bg-beige-50/80 rounded-lg mx-2 ${
                      location.pathname === item.href
                        ? 'text-gold-600 bg-beige-50'
                        : 'text-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-4 pt-2">
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="btn-primary w-full text-center block"
                  >
                    Get In Touch
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;