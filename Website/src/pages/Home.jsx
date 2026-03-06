import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Factory, Shield, Globe, ArrowRight, Star, Users, Clock } from 'lucide-react';
import Layout from '../components/Layout';

const Home = () => {
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
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-beige">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-rice-grain opacity-30"></div>
        
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Hero Image */}
        <div className="absolute inset-0">
          <img
            src="/src/assets/hero-rice-mill.jpg"
            alt="VVR Rice Mill"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-custom text-center text-white">
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
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <Link
                to="/products"
                className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
              >
                <span>Explore Our Products</span>
                <ArrowRight size={20} />
              </Link>
              
              <Link
                to="/about"
                className="btn-secondary text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-gray-900"
              >
                Our Heritage
              </Link>
            </motion.div>
          </motion.div>
        </div>

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
                className="card p-8 text-center hover:bg-beige-50 transition-colors duration-300"
              >
                <div className="mb-6 flex justify-center">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
                className="card overflow-hidden group"
              >
                <div className="aspect-w-16 aspect-h-12 bg-beige-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-100 object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = '/src/assets/placeholder-rice.jpg';
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-gold-600 bg-gold-100 px-2 py-1 rounded">
                      {product.tagline}
                    </span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="text-gold-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {product.description}
                  </p>
                  <Link
                    to={`/products#${product.id}`}
                    className="inline-flex items-center text-gold-600 hover:text-gold-700 font-medium text-sm"
                  >
                    Learn More
                    <ArrowRight size={16} className="ml-1" />
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
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-gold-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">10,000+</h3>
                  <p className="text-gray-600">Satisfied Families</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Factory className="w-8 h-8 text-gold-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">100%</h3>
                  <p className="text-gray-600">Quality Assured</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-gold-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">60+</h3>
                  <p className="text-gray-600">Years of Legacy</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;