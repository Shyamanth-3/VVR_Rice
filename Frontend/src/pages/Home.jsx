import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, animate, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Award, Factory, Shield, Globe, ArrowRight, Star, Users, Clock, ChevronDown } from 'lucide-react';
import Layout from '../components/Layout';

import Counter from '../components/Counter';
import { TubesBackground } from '../components/TubesBackground';

const Home = () => {
  // Mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const bgX = useTransform(smoothMouseX, [-1, 1], ["-3%", "3%"]);
  const bgY = useTransform(smoothMouseY, [-1, 1], ["-3%", "3%"]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 2;
    const y = (clientY / window.innerHeight - 0.5) * 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const highlights = [
    {
      icon: <Clock className="w-12 h-12 text-gold-600" />,
      title: '60+ Years of Legacy',
      description: 'Delivering quality rice with traditional values since 1960',
    },
    {
      icon: <Factory className="w-12 h-12 text-gold-600" />,
      title: 'Fully Automated Plant',
      description: 'State-of-the-art machinery ensuring consistent quality',
    },
    {
      icon: <Shield className="w-12 h-12 text-gold-600" />,
      title: 'Quality & Hygiene Assured',
      description: 'Rigorous quality checks and hygienic processing standards',
    },
    {
      icon: <Globe className="w-12 h-12 text-gold-600" />,
      title: 'Pan-India Network',
      description: 'Trusted by retailers and families across Andhra Pradesh & Telangana',
    },
  ];

  const featuredProducts = [
    {
      id: 'frk',
      name: 'FRK - Fortified Rice Kernels',
      description: 'Enriched with Iron, Vitamin B12, and Folic Acid',
      tagline: 'Nutrition Enhanced',
      image: 'https://raw.githubusercontent.com/Shyamanth-3/VVR_Rice_Assets/7c0c4daddb9fe0092432d2b985b26d340c838071/RiceBag2.jpeg',
    },
    {
      id: 'sona-white',
      name: 'Sona Masoori White Rice',
      description: 'Naturally aged 1 year, perfect for daily meals',
      tagline: 'Daily Essential',
      image: 'https://raw.githubusercontent.com/Shyamanth-3/VVR_Rice_Assets/7c0c4daddb9fe0092432d2b985b26d340c838071/RiceBag4.jpeg',
    },
    {
      id: 'sona-brown',
      name: 'Sona Masoori Brown Rice',
      description: 'Fiber-rich, wholesome, and aromatic',
      tagline: 'Health Conscious',
      image: 'https://raw.githubusercontent.com/Shyamanth-3/VVR_Rice_Assets/7c0c4daddb9fe0092432d2b985b26d340c838071/RiceBag5.jpeg',
    },
    {
      id: 'indra',
      name: '1061 Indra Rice',
      description: 'Bold, fluffy, perfect for idli and rice flour',
      tagline: 'Traditional Choice',
      image: 'https://raw.githubusercontent.com/Shyamanth-3/VVR_Rice_Assets/7c0c4daddb9fe0092432d2b985b26d340c838071/RiceBag.jpeg',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-gray-900"
      >
        <TubesBackground>
          <div className="flex flex-col items-center justify-center w-full h-full text-white pt-20">
        
          {/* Hero Content */}
          <div className="relative z-10 container-custom text-center px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
              Crafted with <span className="text-gold-400">Tradition</span>,<br />
              Packed with <span className="text-gold-400">Care</span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Delivering quality rice to families since 1960 with our fully automated plant 
              ensuring premium quality and hygiene standards.
            </motion.p>
            
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-12 mt-4"
              >
                <Link
                  to="/products"
                  className="group relative inline-flex items-center text-lg font-serif italic text-white"
                >
                  <span className="relative z-10 mb-1">Explore Our Products</span>
                  <motion.span 
                    className="ml-3 relative z-10 text-gold-400 group-hover:translate-x-2 transition-transform duration-300"
                  >
                    <ArrowRight size={24} />
                  </motion.span>
                  {/* Fluid underline effect */}
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gold-400/30 group-hover:h-full group-hover:bg-gold-500/20 transition-all duration-300 rounded-lg -z-0 -inset-x-4 -inset-y-2"></span>
                </Link>
                
                <Link
                  to="/about"
                  className="group relative inline-flex items-center text-lg font-serif italic text-white/80 hover:text-white transition-colors"
                >
                  <span className="relative z-10 mb-1">Discover Our Heritage</span>
                  {/* Subtle glowing dot indicator */}
                  <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-gold-400 group-hover:shadow-[0_0_10px_rgba(247,197,86,0.8)] transition-all duration-300"></span>
                  {/* Sleek bottom border fade */}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-white to-transparent group-hover:w-full transition-all duration-500"></span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
          </div>
        </TubesBackground>
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      {/* Company Highlights */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4"
            >
              Why Choose <span className="text-gradient">VVR Rice</span>?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Six decades of expertise in rice processing, combining traditional values 
              with modern technology to deliver the finest quality rice.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="card p-8 text-center hover:bg-white hover:shadow-2xl hover:shadow-gold-100/50 transition-all duration-300 border border-transparent hover:border-gold-100 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-gold-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="mb-6 flex justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 relative z-10">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 relative z-10 group-hover:text-gold-700 transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed relative z-10">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding gradient-beige">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
              Our Premium <span className="text-gradient">Rice Varieties</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From fortified kernels to traditional varieties, discover our carefully 
              processed rice products that bring nutrition and taste to your table.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover={{ y: -15 }}
                className="card overflow-hidden group bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-12 bg-beige-100 overflow-hidden relative">
                  <motion.img
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                <div className="p-6 relative">
                  {/* Decorative line */}
                  <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-gold-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  
                  <div className="flex items-center justify-between mb-3 mt-1">
                    <span className="text-xs font-bold text-gold-700 bg-gold-50 border border-gold-200 px-2.5 py-1 rounded-full uppercase tracking-wide">
                      {product.tagline}
                    </span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="text-gold-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gold-700 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                    {product.description}
                  </p>
                  <Link
                    to={`/products#${product.id}`}
                    className="inline-flex items-center text-gold-600 hover:text-gold-800 font-bold text-sm tracking-wide group/link"
                  >
                    DISCOVER MORE
                    <motion.div
                      className="ml-2"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                    >
                      <ArrowRight size={16} />
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/products"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
              <span>View All Products</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-8">
                <Award className="w-16 h-16 text-gold-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                VVR Rice – A Tradition of Taste & Trust
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Safeguarding the Nutrition and Natural Aroma of Rice through 
                generations of expertise and modern processing techniques.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 rounded-2xl bg-beige-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gold-100"
                >
                  <div className="w-20 h-20 bg-gold-100/50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform">
                    <Users className="w-10 h-10 text-gold-600" />
                  </div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-2 font-serif">
                    <Counter from={0} to={10000} suffix="+" />
                  </h3>
                  <p className="text-gray-600 font-medium tracking-wide uppercase text-sm">Satisfied Families</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 rounded-2xl bg-beige-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gold-100"
                >
                  <div className="w-20 h-20 bg-gold-100/50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform">
                    <Factory className="w-10 h-10 text-gold-600" />
                  </div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-2 font-serif">
                    <Counter from={0} to={100} suffix="%" />
                  </h3>
                  <p className="text-gray-600 font-medium tracking-wide uppercase text-sm">Quality Assured</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 rounded-2xl bg-beige-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gold-100"
                >
                  <div className="w-20 h-20 bg-gold-100/50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform">
                    <Clock className="w-10 h-10 text-gold-600" />
                  </div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-2 font-serif">
                    <Counter from={0} to={60} suffix="+" />
                  </h3>
                  <p className="text-gray-600 font-medium tracking-wide uppercase text-sm">Years of Legacy</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;