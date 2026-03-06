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
      <section className="relative py-32 bg-gradient-beige overflow-hidden">
        <div className="absolute inset-0 bg-rice-grain opacity-20"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 mb-6">
              Our Premium <span className="text-gradient">Rice Collection</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              From fortified nutrition to traditional varieties, discover our carefully 
              processed rice products that bring health and taste to your table.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16"
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                id={product.id}
                variants={itemVariants}
                className="card overflow-hidden group cursor-pointer"
                onClick={() => openModal(product)}
              >
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-60 object-cover group-hover:scale-125 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = '/src/assets/placeholder-rice.jpg';
                    }}
                  />
                  {/* Category Badge */}
                  <div className={`absolute top-4 left-4 ${product.color} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                    {product.category}
                  </div>
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                    <Star size={14} className="text-gold-400 fill-current" />
                    <span className="text-xs font-semibold text-gray-700">{product.rating}</span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-gold-600 bg-gold-100 px-2 py-1 rounded">
                      {product.tagline}
                    </span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          className={`${
                            i < Math.floor(product.rating) 
                              ? 'text-gold-400 fill-current' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Quick Features */}
                  <div className="space-y-2 mb-6">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gold-400 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(product);
                    }}
                    className="w-full btn-primary flex items-center justify-center space-x-2"
                  >
                    <Info size={18} />
                    <span>Learn More</span>
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
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Shield className="w-8 h-8 text-gold-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Hygiene Standards</h3>
                <p className="text-gray-600">FSSAI licensed facility with automated processing ensuring maximum hygiene.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Award className="w-8 h-8 text-gold-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Control</h3>
                <p className="text-gray-600">Every batch tested for quality, purity, and nutritional content before packaging.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Leaf className="w-8 h-8 text-gold-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Natural Processing</h3>
                <p className="text-gray-600">No artificial preservatives or chemicals, preserving natural nutrition and aroma.</p>
              </div>
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