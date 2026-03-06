import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Award, Users, Target, Heart, Leaf, CheckCircle } from 'lucide-react';
import Layout from '../components/Layout';

const About = () => {
  const timelineEvents = [
    {
      year: '1960',
      title: 'Foundation',
      description: 'VVR Rice was founded with a vision to provide quality rice to local communities in Gudivada.',
    },
    {
      year: '1985',
      title: 'Expansion',
      description: 'Expanded operations to serve retailers across Andhra Pradesh with improved processing methods.',
    },
    {
      year: '2005',
      title: 'Modernization',
      description: 'Introduced semi-automated processing equipment to enhance quality and efficiency.',
    },
    {
      year: '2024',
      title: 'Full Automation',
      description: 'Complete renovation with fully automated plant, ensuring highest standards of quality and hygiene.',
    },
  ];

  const values = [
    {
      icon: <Heart className="w-12 h-12 text-gold-600" />,
      title: 'Tradition',
      description: 'Preserving age-old rice processing wisdom passed down through generations.',
    },
    {
      icon: <Factory className="w-12 h-12 text-gold-600" />,
      title: 'Quality',
      description: 'Uncompromising commitment to delivering the finest quality rice products.',
    },
    {
      icon: <Leaf className="w-12 h-12 text-gold-600" />,
      title: 'Sustainability',
      description: 'Environment-friendly processes with minimal waste and responsible sourcing.',
    },
    {
      icon: <Users className="w-12 h-12 text-gold-600" />,
      title: 'Community',
      description: 'Supporting local farmers and contributing to community development.',
    },
  ];

  const achievements = [
    'ISO 22000:2018 Food Safety Management certification',
    'FSSAI licensed facility with highest hygiene standards',
    'Serving 10,000+ families across Andhra Pradesh & Telangana',
    'Zero-waste production with eco-friendly practices',
    'Partnerships with leading retailers and distributors',
    'Consistent quality recognition from customers',
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
              Our <span className="text-gradient">Heritage</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Six decades of tradition, innovation, and unwavering commitment to 
              delivering the finest quality rice to families across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src="/src/assets/about-heritage.jpg"
                  alt="VVR Rice Heritage"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  onError={(e) => {
                    e.target.src = '/src/assets/placeholder-heritage.jpg';
                  }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center space-x-2 text-gold-600 font-semibold">
                <Award size={20} />
                <span>Since 1960</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900">
                A Legacy Built on Trust
              </h2>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  VVR Rice (India) began its journey in 1960 with a simple yet profound mission: 
                  to provide families with the finest quality rice while preserving the natural 
                  nutrition and aroma that makes rice a staple in Indian households.
                </p>
                
                <p>
                  What started as a small community rice mill in Gudivada has grown into a 
                  trusted name across Andhra Pradesh and Telangana. Our commitment to quality 
                  has remained unchanged through generations, even as we've embraced modern 
                  technology to enhance our processes.
                </p>
                
                <p>
                  Today, our fully automated plant combines traditional wisdom with cutting-edge 
                  technology to ensure that every grain meets the highest standards of quality, 
                  nutrition, and taste.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center space-x-8 pt-6"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-600">60+</div>
                  <div className="text-sm text-gray-600">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-600">10K+</div>
                  <div className="text-sm text-gray-600">Families</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-600">100%</div>
                  <div className="text-sm text-gray-600">Quality</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to modern automation - discover the milestones 
              that shaped VVR Rice into the trusted name it is today.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gold-300 h-full hidden md:block"></div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-16"
            >
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} text-center mb-8 md:mb-0`}>
                    <div className="card p-8 max-w-md mx-auto md:mx-0">
                      <div className="text-2xl font-bold text-gold-600 mb-2">{event.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="hidden md:flex w-16 h-16 bg-gold-600 rounded-full items-center justify-center relative z-10 shadow-lg">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-gold-600 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-8">
              <Target className="w-16 h-16 text-gold-600" />
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-8">
              Our Mission
            </h2>
            
            <blockquote className="text-2xl md:text-3xl italic text-gray-700 font-serif mb-8 leading-relaxed">
              "Safeguarding the Nutrition and Natural Aroma of Rice through 
              generations of expertise and modern processing techniques."
            </blockquote>
            
            <div className="w-24 h-1 bg-gold-600 mx-auto mb-8"></div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              We are committed to preserving the traditional essence of rice while 
              leveraging modern technology to ensure every grain that leaves our facility 
              meets the highest standards of quality, nutrition, and taste.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
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
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every grain we process.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card p-8 text-center hover:bg-white transition-colors duration-300"
              >
                <div className="mb-6 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-8">
                Our <span className="text-gradient">Achievements</span>
              </h2>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="space-y-4"
              >
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-gold-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 leading-relaxed">{achievement}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src="/src/assets/about-achievements.jpg"
                  alt="VVR Rice Achievements"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  onError={(e) => {
                    e.target.src = '/src/assets/placeholder-achievements.jpg';
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <blockquote className="text-3xl md:text-4xl italic font-serif mb-8 leading-relaxed">
              "Every grain in our factory is carefully selected and processed from field to fork."
            </blockquote>
            <div className="w-24 h-1 bg-gold-400 mx-auto mb-6"></div>
            <p className="text-xl text-gold-400 font-semibold">— VVR Rice Heritage Promise</p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;