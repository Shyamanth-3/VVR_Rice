import React, { useRef, useState } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';
import { Star, Quote, MapPin, Users, TrendingUp, Award } from 'lucide-react';
import Layout from '../components/Layout';
import Counter from '../components/Counter';
import backgroundImage from '../assets/background.png';

const Clients = () => {
  const marqueeRef = useRef(null);
  const x = useRef(0);
  const [isMarqueeHovered, setIsMarqueeHovered] = useState(false);

  // Smoothly scroll and slow down exactly as requested
  useAnimationFrame((time, delta) => {
    if (!marqueeRef.current) return;
    const speed = isMarqueeHovered ? 0.2 : 1.2;
    const moveBy = -1 * speed * (delta / 16);
    x.current += moveBy;
    
    // Exact width of one set of logos (10 logos * (256px width + 24px gap) = 2800px)
    if (x.current <= -2800) {
      x.current += 2800;
    }
    
    marqueeRef.current.style.transform = `translateX(${x.current}px)`;
  });

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
      <section className="relative py-32 bg-gray-900 overflow-hidden flex items-center justify-center min-h-[50vh]">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <motion.img
            initial={{ opacity: 0.3, filter: 'blur(8px)' }}
            animate={{ opacity: 0.75, filter: 'blur(0px)' }}
            transition={{ duration: 2.5, ease: "easeOut", delay: 0.2 }}
            src={backgroundImage}
            alt="Partnership Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/30"></div>
        </motion.div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto text-white"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
              Our Valued <span className="text-gold-400">Partners</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
              Trusted by families, retailers, and institutions across Andhra Pradesh 
              and Telangana for over six decades.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Floating Innovative Layout */}
      <section className="relative z-20 -mt-16 sm:-mt-20 pb-12 px-4">
        <div className="container-custom max-w-5xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 lg:flex lg:flex-row bg-white/80 backdrop-blur-xl shadow-2xl rounded-[1.5rem] lg:rounded-[2rem] border border-white/60 overflow-hidden"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative w-full lg:flex-1 p-4 sm:p-5 lg:p-6 flex flex-col items-center justify-start group cursor-default transition-colors duration-500 hover:bg-white/95
                  ${index === 0 ? 'border-b border-r border-gray-200/60 lg:border-b-0' : ''}
                  ${index === 1 ? 'border-b border-gray-200/60 lg:border-b-0 lg:border-r' : ''}
                  ${index === 2 ? 'border-r border-gray-200/60' : ''}
                `}
              >
                {/* Subtle Hover Glow Background */}
                <div className="absolute inset-0 bg-gold-400/0 group-hover:bg-gold-400/5 transition-colors duration-500 pointer-events-none"></div>
                
                <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-beige-100 to-white flex items-center justify-center mb-2 sm:mb-3 lg:mb-4 shadow-sm border border-gold-100/50 group-hover:scale-110 group-hover:shadow-md transition-all duration-500 z-10">
                  {React.cloneElement(stat.icon, { className: "w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gold-600" })}
                </div>
                
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 font-serif mb-1 tracking-tight z-10">
                  <Counter from={0} to={parseInt(stat.number)} suffix={stat.number.replace(/[0-9]/g, '')} duration={2} />
                </div>
                
                <div className="text-[10px] sm:text-xs lg:text-sm font-bold text-gold-600 uppercase tracking-[0.1em] sm:tracking-[0.15em] text-center mb-0 group-hover:mb-2 transition-all duration-500 z-10 leading-tight">
                  {stat.label}
                </div>
                
                {/* Expandable Innovator Description */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 z-10 w-full">
                  <div className="overflow-hidden">
                    <p className="text-gray-500 text-[10px] sm:text-xs lg:text-sm text-center pt-2 px-1 sm:px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-snug">
                      {stat.description}
                    </p>
                  </div>
                </div>
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

          {/* Infinite Scroll Logo Marquee */}
          <div className="relative overflow-hidden w-full py-10 mt-4 -mx-4 px-4 sm:mx-0 sm:px-0">
            <style>{`
              .text-scroller {
                display: inline-block;
                white-space: nowrap;
              }
              .group\\/card:hover .text-scroller {
                animation: scrollText 4s ease-in-out infinite alternate;
              }
              @keyframes scrollText {
                0%, 15% { transform: translateX(0); }
                85%, 100% { transform: translateX(calc(224px - 100%)); }
              }
            `}</style>
            <div 
              ref={marqueeRef}
              className="flex items-center gap-6 w-max"
            >
              {/* Duplicate the array to create a seamless infinite loop */}
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setIsMarqueeHovered(true)}
                  onMouseLeave={() => setIsMarqueeHovered(false)}
                  className="relative w-64 h-40 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-gold-300 hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center flex-shrink-0 cursor-pointer overflow-hidden group/card"
                >
                  <div className="w-full h-24 flex items-center justify-center mb-0 group-hover/card:-translate-y-3 transition-transform duration-500">
                    {client.logo ? (
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-w-full max-h-full object-contain grayscale opacity-60 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-500"
                      />
                    ) : (
                      <div className="w-full h-16 bg-gradient-to-br from-gold-100 to-beige-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gold-300 grayscale opacity-60 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-500">
                        <span className="text-gold-600 font-medium text-xs">LOGO</span>
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-x-0 bottom-4 px-4 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none overflow-hidden">
                    {client.name.length > 22 ? (
                      <div className="w-full text-left">
                        <span className="text-sm font-bold text-gold-700 text-scroller">
                          {client.name}
                        </span>
                      </div>
                    ) : (
                      <h3 className="text-sm font-bold text-gold-700 text-center">
                        {client.name}
                      </h3>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Message - Elegant Typographic Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative mt-8 py-6"
          >
            {/* Decorative golden divider line */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400/60"></div>
              <div className="w-2 h-2 rounded-full bg-gold-400/80"></div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400/60"></div>
            </div>
            
            {/* Oversized decorative quote mark */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 text-[10rem] leading-none font-serif text-gold-300/15 pointer-events-none select-none" aria-hidden="true">
              &ldquo;
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
              <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-800 leading-snug mb-8 italic">
                Trusted by families, retailers, and institutions across{' '}
                <span className="text-gold-600 font-bold not-italic">Andhra Pradesh</span>{' '}
                and{' '}
                <span className="text-gold-600 font-bold not-italic">Telangana</span>.
              </p>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Our commitment to quality and consistency has earned us the trust 
                of major retail chains, local stores, and countless families who 
                choose VVR Rice for their daily needs.
              </p>
            </div>

            {/* Bottom decorative divider */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400/60"></div>
              <div className="w-2 h-2 rounded-full bg-gold-400/80"></div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400/60"></div>
            </div>
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