import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Shield, Leaf, X, Info } from 'lucide-react';
import Layout from '../components/Layout';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 'frk',
      name: 'FRK - Fortified Rice Kernels',
      shortName: 'FRK Rice',
      description: 'Enriched with Iron, Vitamin B12, and Folic Acid',
      longDescription: 'Our Fortified Rice Kernels (FRK) are specially processed to provide enhanced nutrition without compromising on taste. Each grain is carefully fortified with essential vitamins and minerals including Iron, Vitamin B12, and Folic Acid. The FRK looks, cooks, and tastes exactly like regular rice, making it the perfect choice for families seeking better nutrition.',
      features: [
        'Enriched with Iron for better hemoglobin levels',
        'Contains Vitamin B12 for nervous system health',
        'Fortified with Folic Acid for cellular function',
        'Identical appearance and taste to regular rice',
        'Government approved nutritional enhancement',
        'No artificial colors or preservatives'
      ],
      nutritionalBenefits: [
        'Prevents iron deficiency anemia',
        'Supports healthy nerve function',
        'Essential for DNA synthesis',
        'Improves overall nutritional status'
      ],
      cookingInstructions: 'Cook like regular rice. 1:2 ratio (rice:water). Boil for 15-20 minutes until tender.',
      tagline: 'Nutrition Enhanced',
      category: 'Fortified',
      image: 'https://raw.githubusercontent.com/Shyamanth-3/VVR_Rice_Assets/7c0c4daddb9fe0092432d2b985b26d340c838071/RiceBag2.jpeg',
      rating: 4.8,
      color: 'bg-green-500'
    },
    {
      id: 'sona-white',
      name: 'Sona Masoori White Rice',
      shortName: 'Sona Masoori (White)',
      description: 'Naturally aged 1 year, perfect for daily meals',
      longDescription: 'Our premium Sona Masoori white rice is naturally aged for one full year to develop its distinctive aroma and flavor. This medium-grain rice is perfect for daily consumption and is known for its excellent cooking quality, fluffy texture, and aromatic fragrance. Sourced directly from local farmers in Andhra Pradesh.',
      features: [
        'Naturally aged for 1 year minimum',
        'Medium grain with excellent cooking quality',
        'Distinctive aroma and flavor',
        'Low glycemic index',
        'Easy to digest',
        'Perfect for daily meals'
      ],
      nutritionalBenefits: [
        'Good source of carbohydrates',
        'Contains essential amino acids',
        'Easy on the digestive system',
        'Provides sustained energy'
      ],
      cookingInstructions: 'Wash thoroughly. Cook with 1.5:1 water ratio. Simmer for 12-15 minutes until fluffy.',
      tagline: 'Daily Essential',
      category: 'Traditional',
      image: 'https://raw.githubusercontent.com/Shyamanth-3/VVR_Rice_Assets/7c0c4daddb9fe0092432d2b985b26d340c838071/RiceBag4.jpeg',
      rating: 4.9,
      color: 'bg-blue-500'
    },
    {
      id: 'sona-brown',
      name: 'Sona Masoori Brown Rice',
      shortName: 'Sona Masoori (Brown)',
      description: 'Fiber-rich, wholesome, and aromatic',
      longDescription: 'Our brown Sona Masoori rice retains the nutritious bran layer, making it a wholesome choice for health-conscious families. Rich in fiber, vitamins, and minerals, this variety offers superior nutritional value while maintaining the signature aroma and taste of Sona Masoori rice.',
      features: [
        'Retains natural bran layer',
        'High in dietary fiber',
        'Rich in vitamins and minerals',
        'Lower glycemic index than white rice',
        'Natural antioxidants',
        'Nutty flavor profile'
      ],
      nutritionalBenefits: [
        'Promotes digestive health',
        'Helps manage blood sugar levels',
        'Rich in B vitamins',
        'Contains magnesium and phosphorus'
      ],
      cookingInstructions: 'Soak for 30 minutes. Cook with 2:1 water ratio. Simmer for 25-30 minutes until tender.',
      tagline: 'Health Conscious',
      category: 'Healthy',
      image: 'https://raw.githubusercontent.com/Shyamanth-3/VVR_Rice_Assets/7c0c4daddb9fe0092432d2b985b26d340c838071/RiceBag5.jpeg',
      rating: 4.7,
      color: 'bg-amber-500'
    },
    {
      id: 'indra',
      name: '1061 Indra Rice (MTU 1061)',
      shortName: '1061 Indra Rice',
      description: 'Bold, fluffy, perfect for idli and rice flour',
      longDescription: 'MTU 1061, commonly known as Indra rice, is a premium variety known for its bold grains and excellent cooking properties. This rice is particularly favored for making idli, dosa batter, and rice flour due to its superior texture and absorption qualities. The grains remain separate and fluffy when cooked.',
      features: [
        'Bold, long grain variety',
        'Excellent for South Indian cuisine',
        'Perfect for idli and dosa batter',
        'Ideal for making rice flour',
        'Superior texture and fluffiness',
        'Traditional MTU 1061 variety'
      ],
      nutritionalBenefits: [
        'High protein content',
        'Good source of energy',
        'Contains essential minerals',
        'Easy to digest'
      ],
      cookingInstructions: 'Best for fermented preparations. For cooking: Use 1:2.5 water ratio, cook for 18-20 minutes.',
      tagline: 'Traditional Choice',
      category: 'Specialty',
      image: 'https://raw.githubusercontent.com/Shyamanth-3/VVR_Rice_Assets/7c0c4daddb9fe0092432d2b985b26d340c838071/RiceBag.jpeg',
      rating: 4.8,
      color: 'bg-purple-500'
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

  const openModal = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 bg-gray-900 overflow-hidden flex items-center justify-center min-h-[50vh]">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1586201375761-83865001e8ac?auto=format&fit=crop&q=80&w=2070"
            alt="Rice processing"
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        </motion.div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto text-white"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
              Our Premium <span className="text-gold-400">Collection</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
              From fortified nutrition to traditional varieties, discover our carefully 
              processed rice products that bring health and taste to your table.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Zigzag Layout */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-32"
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                id={product.id}
                variants={itemVariants}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
              >
                {/* Product Image Side */}
                <div className="w-full lg:w-1/2 relative group cursor-pointer" onClick={() => openModal(product)}>
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      src={product.image}
                      alt={product.name}
                      className="w-full h-[500px] object-cover"
                      onError={(e) => {
                        e.target.src = '/src/assets/placeholder-rice.jpg';
                      }}
                    />
                    <div className={`absolute top-6 left-6 ${product.color} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                      {product.category}
                    </div>
                    {/* Learn More Overlay */}
                    <div className="absolute inset-0 bg-gray-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold flex items-center space-x-2 transform translate-y-8 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                        <Info size={20} />
                        <span>Quick View</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Info Side */}
                <div className="w-full lg:w-1/2 space-y-8">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-bold text-gold-600 bg-gold-50 border border-gold-200 px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                      {product.tagline}
                    </span>
                    <div className="flex items-center space-x-1 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-full shadow-sm">
                      <Star size={16} className="text-gold-400 fill-current" />
                      <span className="text-sm font-bold text-gray-700">{product.rating} Rating</span>
                    </div>
                  </div>
                  
                  <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight">
                    {product.name}
                  </h2>
                  
                  <p className="text-xl text-gray-600 leading-relaxed font-light">
                    {product.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 py-6 border-y border-gray-100">
                    {product.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start text-gray-700">
                        <div className="w-2 h-2 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mr-3 mt-2.5 flex-shrink-0 shadow-sm"></div>
                        <span className="font-medium text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => openModal(product)}
                    className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-3 hover:scale-105 transition-transform duration-300 shadow-xl w-full sm:w-auto"
                  >
                    <span>Explore Details</span>
                    <Info size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="section-padding gradient-beige">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-8">
              Quality <span className="text-gradient">Assurance</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <motion.div 
                whileHover={{ y: -10, scale: 1.05 }}
                className="text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-gold-200 group"
              >
                <div className="w-20 h-20 bg-gold-50 group-hover:bg-gold-100 transition-colors rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-gold-600 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gold-700 transition-colors">Hygiene Standards</h3>
                <p className="text-gray-600 font-medium">FSSAI licensed facility with automated processing ensuring maximum hygiene.</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10, scale: 1.05 }}
                className="text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-gold-200 group"
              >
                <div className="w-20 h-20 bg-gold-50 group-hover:bg-gold-100 transition-colors rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-gold-600 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gold-700 transition-colors">Quality Control</h3>
                <p className="text-gray-600 font-medium">Every batch tested for quality, purity, and nutritional content before packaging.</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10, scale: 1.05 }}
                className="text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-gold-200 group"
              >
                <div className="w-20 h-20 bg-gold-50 group-hover:bg-gold-100 transition-colors rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="w-10 h-10 text-gold-600 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gold-700 transition-colors">Natural Processing</h3>
                <p className="text-gray-600 font-medium">No artificial preservatives or chemicals, preserving natural nutrition and aroma.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900">{selectedProduct.name}</h2>
                <p className="text-gold-600 font-medium">{selectedProduct.tagline}</p>
              </div>
              <button 
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Product Image */}
                <div className="relative">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-85 object-cover rounded-xl"
                    onError={(e) => {
                      e.target.src = '/src/assets/placeholder-rice.jpg';
                    }}
                  />
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={`${
                            i < Math.floor(selectedProduct.rating) 
                              ? 'text-gold-400 fill-current' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">({selectedProduct.rating})</span>
                    </div>
                    <span className={`${selectedProduct.color} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                      {selectedProduct.category}
                    </span>
                  </div>
                </div>

                {/* Product Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                    <p className="text-gray-600 leading-relaxed">{selectedProduct.longDescription}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                    <div className="space-y-2">
                      {selectedProduct.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start text-sm text-gray-600">
                          <div className="w-2 h-2 bg-gold-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Nutritional Benefits</h3>
                  <div className="space-y-2">
                    {selectedProduct.nutritionalBenefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Cooking Instructions</h3>
                  <div className="bg-beige-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {selectedProduct.cookingInstructions}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </Layout>
  );
};

export default Products;