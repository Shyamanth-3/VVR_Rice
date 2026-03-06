import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, MapPin, Users, TrendingUp, Award } from 'lucide-react';
import Layout from '../components/Layout';

const Clients = () => {
  // Actual VVR Rice clients 
  const clientLogos = [
    { name: 'TTD', logo: 'https://raw.githubusercontent.com/Shyamanth-3/VVR_Rice_Assets/7c0c4daddb9fe0092432d2b985b26d340c838071/ttd-logo.png', description: 'Tirumala Tirupati Devasthanams ' },
    { name: 'Akshaya Patra', logo: 'https://raw.githubusercontent.com/Shyamanth-3/VVR_Rice_Assets/155fa334390dba2a96f8c184719c9916b9def6aa/AkshayaPatra_Logo.jpg', description: 'Unlimited food for education' },
    { name: 'Apollo Tyres', logo: 'https://raw.githubusercontent.com/Shyamanth-3/VVR_Rice_Assets/155fa334390dba2a96f8c184719c9916b9def6aa/APOLLOTYREs-logo.png', description: 'Premium tire manufacturer' },
    { name: 'Advait', logo: 'https://raw.githubusercontent.com/Shyamanth-3/VVR_Rice_Assets/155fa334390dba2a96f8c184719c9916b9def6aa/Advaith-logo.jpg', description: 'Your Dream Home, Our Priority' },
    { name: 'Basavatarakam Indo-American Cancer Hospital', logo: 'https://raw.githubusercontent.com/Shyamanth-3/VVR_Rice_Assets/155fa334390dba2a96f8c184719c9916b9def6aa/Basavatharakamma-logo.png', description: 'Cancer Hospital & Research Institute' },
    { name: 'ASL-DRDO', logo: 'https://raw.githubusercontent.com/Shyamanth-3/VVR_Rice_Assets/155fa334390dba2a96f8c184719c9916b9def6aa/asl-drdo-logo.jpg', description: 'Defence Research & Development Organisation' },
    { name: 'VIT-AP University', logo: 'https://raw.githubusercontent.com/Shyamanth-3/VVR_Rice_Assets/155fa334390dba2a96f8c184719c9916b9def6aa/vitap-logo.png', description: 'Vellore Institute of Technology - Andhra Pradesh' },
    { name: 'KL University', logo: 'https://raw.githubusercontent.com/Shyamanth-3/VVR_Rice_Assets/7c0c4daddb9fe0092432d2b985b26d340c838071/KL_University_logo.svg.jpg', description: 'Koneru Lakshmaiah Education Foundation' },
    { name: 'Mulpuri Group', logo: 'https://raw.githubusercontent.com/Shyamanth-3/VVR_Rice_Assets/155fa334390dba2a96f8c184719c9916b9def6aa/mulpuri-logo.png', description: 'Business conglomerate' },
    { name: 'BSR Infratech', logo: 'https://raw.githubusercontent.com/Shyamanth-3/VVR_Rice_Assets/7c0c4daddb9fe0092432d2b985b26d340c838071/bsr-logo.png', description: 'Infrastructure development company' },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Procurement Manager',
      company: 'Regional Supermarket Chain',
      rating: 5,
      content: 'VVR Rice has been our trusted supplier for over 5 years. Their consistent quality and reliable delivery schedules have made them an invaluable partner. The Sona Masoori variety is particularly popular among our customers.',
      location: 'Hyderabad',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Store Manager',
      company: 'Premium Grocery Store',
      rating: 5,
      content: 'The quality of VVR Rice products is exceptional. We\'ve received numerous positive feedback from customers, especially for their FRK fortified rice. The packaging is also very professional and appealing.',
      location: 'Vijayawada',
    },
    {
      id: 3,
      name: 'Anil Reddy',
      role: 'Business Owner',
      company: 'Wholesale Rice Distributor',
      rating: 5,
      content: 'Working with VVR Rice has been a pleasure. Their automated processing ensures consistent quality, and their customer service is outstanding. We\'ve built a strong business relationship over the years.',
      location: 'Guntur',
    },
  ];

  const stats = [
    {
      icon: <Users className="w-8 h-8 text-gold-600" />,
      number: '250+',
      label: 'Retail Partners',
      description: 'Trusted by major retail chains and local stores',
    },
    {
      icon: <MapPin className="w-8 h-8 text-gold-600" />,
      number: '50+',
      label: 'Cities Covered',
      description: 'Serving customers across Andhra Pradesh & Telangana',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-gold-600" />,
      number: '95%',
      label: 'Customer Retention',
      description: 'Long-term partnerships built on trust and quality',
    },
    {
      icon: <Award className="w-8 h-8 text-gold-600" />,
      number: '60+',
      label: 'Years of Trust',
      description: 'Six decades of reliable service and quality',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
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
              Our Valued <span className="text-gradient">Partners</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Trusted by families, retailers, and institutions across Andhra Pradesh 
              and Telangana for over six decades.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Client Logos Section */}
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
              Trusted by <span className="text-gradient">Leading Brands</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From national retail chains to local supermarkets, we proudly serve 
              diverse clients who trust our quality and reliability.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"
          >
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center"
              >
                <div className="w-full h-20 flex items-center justify-center mb-3">
                  {client.logo ? (
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  ) : (
                    /* Placeholder for client logos */
                    <div className="w-full h-16 bg-gradient-to-br from-gold-100 to-beige-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gold-300">
                      <span className="text-gold-600 font-medium text-xs">LOGO</span>
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1 leading-tight">
                    {client.name}
                  </h3>
                  {client.description && (
                    <p className="text-xs text-gray-600 leading-tight">
                      {client.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                "Trusted by families, retailers, and institutions across 
                Andhra Pradesh and Telangana."
              </h3>
              <p className="text-gray-600">
                Our commitment to quality and consistency has earned us the trust 
                of major retail chains, local stores, and countless families who 
                choose VVR Rice for their daily needs.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
              What Our <span className="text-gradient">Partners Say</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from our valued partners about their experience working with VVR Rice 
              and why they continue to trust us for their rice supply needs.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                className="card p-8 h-full"
              >
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                    <Quote className="w-6 h-6 text-gold-600" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-gold-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-gray-600 mb-6 leading-relaxed text-center italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="text-center border-t pt-6">
                  <div className="font-semibold text-gray-900 mb-1">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gold-600 mb-1">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    {testimonial.company}
                  </div>
                  <div className="flex items-center justify-center text-xs text-gray-500">
                    <MapPin size={12} className="mr-1" />
                    {testimonial.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partnership Benefits */}
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
              Partner with <span className="text-gradient">VVR Rice</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our network of successful partners and experience the benefits 
              of working with a trusted rice processing company.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  Why Partner with Us?
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Award className="w-4 h-4 text-gold-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Premium Quality Products</h4>
                      <p className="text-gray-600 text-sm">Consistent quality with fully automated processing and rigorous quality control.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <TrendingUp className="w-4 h-4 text-gold-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Reliable Supply Chain</h4>
                      <p className="text-gray-600 text-sm">Timely deliveries and consistent stock availability across all product lines.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="w-4 h-4 text-gold-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Dedicated Support</h4>
                      <p className="text-gray-600 text-sm">Personal account management and responsive customer service team.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="w-4 h-4 text-gold-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Regional Expertise</h4>
                      <p className="text-gray-600 text-sm">Deep understanding of local market preferences and customer needs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-6">
                  Interested in Partnership?
                </h3>
                <p className="text-gray-600 mb-6">
                  Get in touch with our business development team to discuss 
                  partnership opportunities and how we can support your business growth.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                    <span className="text-gray-600">Flexible pricing and payment terms</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                    <span className="text-gray-600">Custom packaging solutions available</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                    <span className="text-gray-600">Marketing and promotional support</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                    <span className="text-gray-600">Regular product training and updates</span>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="/contact"
                    className="btn-primary w-full text-center inline-flex items-center justify-center"
                  >
                    Contact Our Team
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Clients;