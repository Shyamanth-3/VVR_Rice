import React from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Factory, Award, Users, Target, Heart, Leaf, CheckCircle } from 'lucide-react';
import Layout from '../components/Layout';
import Counter from '../components/Counter';
import heritageImage from '../assets/svd-0354-about.jpg';

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
      <section className="relative py-20 md:py-32 bg-gray-900 overflow-hidden flex items-center justify-center min-h-[40vh] md:min-h-[60vh]">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1574323347407-e02ceda47de6?auto=format&fit=crop&q=80&w=2070"
            alt="Paddy Field"
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
        </motion.div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto text-white"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
              Our <span className="text-gold-400">Heritage</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
              Six decades of tradition, innovation, and unwavering commitment to 
              delivering the finest quality rice to families across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-12 md:py-24 relative bg-gray-50 overflow-hidden">
        {/* Elegant Background Accents */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-gold-50/80 to-transparent rounded-bl-[200px] pointer-events-none"></div>
        <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-gold-100/50 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-16 lg:gap-y-0 lg:items-center">
            
            {/* --- Heading Area (Mobile: Top, Desktop: Right Top) --- */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-7 lg:col-start-6 lg:mb-8"
            >
              <div className="inline-flex items-center space-x-2 text-gold-600 font-bold tracking-widest text-sm uppercase mb-3 md:mb-4 py-1">
                <Award size={18} />
                <span>Since 1960</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight">
                A Legacy Built <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 to-gold-400">on Trust</span>
              </h2>
            </motion.div>

            {/* --- Image Composition (Mobile: Middle Cinematic, Desktop: Left Vertical) --- */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:row-span-3 relative z-10 my-2 lg:my-0"
            >
              {/* Refined decorative elements - Hidden on mobile, visible on lg */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold-400/20 rounded-2xl -z-10 rotate-6 hidden lg:block"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold-300/40 rounded-full -z-10 hidden lg:block"></div>
              
              <motion.div 
                className="relative aspect-[16/9] sm:aspect-[21/9] lg:aspect-[4/5] overflow-hidden rounded-2xl lg:rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] lg:shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  src={heritageImage}
                  alt="VVR Rice Heritage"
                  className="w-full h-full object-cover"
                />
                {/* Subtle rich overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-gold-900/20 to-transparent mix-blend-multiply pointer-events-none"></div>
              </motion.div>
            </motion.div>

            {/* --- Text & Stats Area (Mobile: Bottom, Desktop: Right Bottom) --- */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-7 lg:col-start-6"
            >
              <div className="space-y-4 md:space-y-6 text-gray-600 leading-relaxed font-light text-base md:text-lg lg:pr-12">
                <p>
                  VVR Rice (India) began its journey in 1960 with a simple yet profound mission: 
                  to provide families with the finest quality rice while preserving the natural 
                  nutrition and aroma that makes rice a staple in Indian households.
                </p>
                <p>
                  What started as a small community rice mill in Gudivada has grown into a 
                  trusted name across Andhra Pradesh and Telangana. Our commitment to quality 
                  has remained unchanged through generations.
                </p>
                <p>
                  Today, our fully automated plant combines traditional wisdom with cutting-edge 
                  technology to ensure that every grain meets the highest standards of quality, 
                  nutrition, and taste.
                </p>
                <div className="pt-6 mt-4 md:pt-8 md:mt-6 border-t border-gray-100">
                  <div className="relative">
                    {/* Decorative huge quote mark */}
                    <div className="absolute -top-6 -left-2 text-8xl text-gold-500/10 font-serif leading-none pointer-events-none select-none">"</div>
                    <div className="relative z-10 pl-6 md:pl-8">
                      <p className="text-lg md:text-2xl font-serif text-gray-800 italic leading-relaxed mb-4 md:mb-6">
                        We remain committed to the ethical values and traditions laid down since inception.
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-4">
                        <div className="hidden sm:block w-12 h-[2px] bg-gold-500"></div>
                        <div>
                          <div className="text-xl md:text-3xl font-bold text-gray-900 tracking-tight font-serif mb-1 md:mb-1">
                            Mr. V.T.Subrahmanyeswara Rao
                          </div>
                          <div className="text-[10px] md:text-sm font-bold text-gold-600 uppercase tracking-[0.15em]">
                            Representing the 4th Generation
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clean Stats Section */}
              <div className="flex flex-wrap gap-6 md:gap-16 pt-8 mt-8 md:pt-12 md:mt-12 border-t border-gray-200">
                <div className="group cursor-default">
                  <div className="text-3xl md:text-5xl font-black font-serif text-gray-900 group-hover:text-gold-600 transition-colors duration-300">
                    <Counter from={0} to={60} suffix="+" />
                  </div>
                  <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mt-2 md:mt-3 group-hover:text-gold-500 transition-colors duration-300">Years</div>
                </div>
                
                <div className="group cursor-default">
                  <div className="text-3xl md:text-5xl font-black font-serif text-gray-900 group-hover:text-gold-600 transition-colors duration-300">
                    <Counter from={0} to={10} suffix="K+" />
                  </div>
                  <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mt-2 md:mt-3 group-hover:text-gold-500 transition-colors duration-300">Families</div>
                </div>
                
                <div className="group cursor-default">
                  <div className="text-3xl md:text-5xl font-black font-serif text-gray-900 group-hover:text-gold-600 transition-colors duration-300">
                    <Counter from={0} to={100} suffix="%" />
                  </div>
                  <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mt-2 md:mt-3 group-hover:text-gold-500 transition-colors duration-300">Quality</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding relative overflow-hidden bg-gray-900">
        {/* Background glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gold-600/10 rounded-full blur-[180px] pointer-events-none"></div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-24"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Journey</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              From humble beginnings to modern automation — discover the defining milestones 
              that established our legacy of trust since 1960.
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Elegant glowing center line */}
            <div className="absolute left-[24px] md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-gold-500/50 to-transparent shadow-[0_0_15px_rgba(234,179,8,0.3)]"></div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-8 md:space-y-24"
            >
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row items-center justify-between ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  } group cursor-default`}
                >
                  {/* Empty space for alignment in desktop */}
                  <div className="hidden md:block w-[45%]"></div>

                  {/* The Timeline Node / Dot */}
                  <div className="absolute left-[24px] md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 z-20">
                    <div className="w-5 h-5 rounded-full bg-gray-900 border-2 border-gold-400 relative shadow-[0_0_20px_rgba(234,179,8,0.7)] group-hover:scale-150 group-hover:bg-gold-600 group-hover:border-white transition-all duration-500">
                      <div className="absolute inset-0 rounded-full bg-gold-400 animate-ping opacity-40 group-hover:opacity-60"></div>
                      <div className="absolute inset-[3px] rounded-full bg-gold-400 group-hover:bg-white transition-colors duration-500"></div>
                    </div>
                  </div>

                  {/* The actual card */}
                  <div className="w-full pl-[70px] md:pl-0 md:w-[45%] relative z-10">
                    <motion.div 
                      whileHover={{ scale: 1.03, y: -5 }}
                      className="p-6 md:p-10 rounded-2xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 hover:border-gold-500/60 transition-all duration-500 relative overflow-hidden shadow-2xl hover:shadow-[0_20px_40px_rgba(234,179,8,0.15)]"
                    >
                      {/* Interactive glow on hover inside the card */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      
                      {/* Decorative large year watermark */}
                      <div className="absolute -bottom-6 -right-6 text-9xl font-serif font-black text-white/5 pointer-events-none group-hover:scale-110 group-hover:-translate-y-4 group-hover:-translate-x-4 transition-transform duration-700">
                        {event.year}
                      </div>

                      <div className="relative z-10 flex flex-col">
                        <span className="text-4xl md:text-6xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-b from-gold-300 to-gold-600 mb-2 md:mb-4 drop-shadow-[0_2px_10px_rgba(234,179,8,0.3)] group-hover:tracking-wider transition-all duration-500">
                          {event.year}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-wide group-hover:text-gold-200 transition-colors duration-500">
                          {event.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed font-light text-base md:text-lg group-hover:text-gray-200 transition-colors duration-500">
                          {event.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
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
            
            <blockquote className="text-xl md:text-3xl italic text-gray-700 font-serif mb-6 md:mb-8 leading-relaxed">
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



      {/* Achievements */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6 md:mb-8">
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
              <motion.div 
                className="aspect-w-16 aspect-h-12 overflow-hidden rounded-2xl shadow-2xl relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <motion.img
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  src="/src/assets/about-achievements.jpg"
                  alt="VVR Rice Achievements"
                  className="w-full h-96 object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000';
                  }}
                />
                <div className="absolute inset-0 bg-gold-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
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
            <blockquote className="text-2xl md:text-4xl italic font-serif mb-6 md:mb-8 leading-relaxed">
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