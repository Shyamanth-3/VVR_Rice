import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, className = '' }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className={`flex-grow pt-20 ${className}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;