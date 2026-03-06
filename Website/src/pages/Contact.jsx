import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Instagram, Facebook, CheckCircle } from 'lucide-react';
import Layout from '../components/Layout';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Submit form data to backend server
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
        
        console.log('Form submitted successfully:', result.submissionId);
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        console.error('Form submission failed:', result.error);
        alert('Failed to submit form: ' + result.error);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please make sure the server is running and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone Numbers',
      details: ['+91-94901 96589', '+91-93477 67788'],
      description: 'Available Monday to Saturday, 9 AM to 6 PM'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Addresses',
      details: ['vvrriceindia@gmail.com', 'vankineni.tsrao@gmail.com'],
      description: 'We respond within 24 hours'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Our Location',
      details: ['Post-Office Road, Gudivada', '521301 (A.P), India'],
      description: 'Visit our fully automated processing facility'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      details: ['Monday - Saturday: 9 AM - 6 PM', 'Sunday: Closed'],
      description: 'Emergency contact available 24/7'
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
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Ready to partner with us or have questions about our rice products? 
              We'd love to hear from you and discuss how we can serve your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-beige p-8 rounded-2xl">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you as soon as possible. 
                  Whether you're interested in bulk orders, partnerships, or have general inquiries, 
                  we're here to help.
                </p>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6 flex items-center"
                  >
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span>Thank you! Your message has been sent successfully.</span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="bulk-order">Bulk Order Inquiry</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="product-info">Product Information</option>
                      <option value="quality-concern">Quality Concern</option>
                      <option value="general">General Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Please provide details about your inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-8">
                  Reach out to us through any of the following channels. Our team is ready 
                  to assist you with all your rice needs and answer any questions you may have.
                </p>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="space-y-6"
              >
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-4 p-6 bg-beige-50 rounded-xl hover:bg-beige-100 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center text-gold-600 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                      <div className="space-y-1 mb-2">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-700 font-medium">{detail}</p>
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Social Media */}
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/SatyaPrakashRiceMill"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://facebook.com/SatyaPrakashRiceMill"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="section-padding gradient-beige">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
              Visit Our <span className="text-gradient">Facility</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Located in the heart of Gudivada, our fully automated rice processing facility 
              is equipped with modern technology to ensure the highest quality standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-10">
                  {/* Google Maps Embed - Replace with actual coordinates */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121917.04836889262!2d80.82682744335937!3d16.431089300000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a358b3b4b4b4b4b%3A0x1234567890abcdef!2sGudivada%2C%20Andhra%20Pradesh%20521301!5e0!3m2!1sen!2sin!4v1234567890123"
                    className="w-full h-96"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="VVR Rice Location"
                  ></iframe>
                </div>
              </div>
            </motion.div>

            {/* Location Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-6">
                  Facility Information
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Full Address</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      VVR Rice (India)<br />
                      Post-Office Road<br />
                      Gudivada, Krishna District<br />
                      Andhra Pradesh 521301<br />
                      India
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Landmarks</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Near Gudivada Post Office</li>
                      <li>• 2 km from Gudivada Bus Stand</li>
                      <li>• 15 km from Machilipatnam</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Facility Features</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Fully automated processing plant</li>
                      <li>• FSSAI certified facility</li>
                      <li>• Quality testing laboratory</li>
                      <li>• Modern packaging equipment</li>
                      <li>• Visitor parking available</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 italic">
                      Facility visits are welcome during business hours. 
                      Please call ahead to schedule a tour.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Ready to Experience VVR Rice Quality?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Whether you're a retailer looking for reliable supply, or a family wanting 
              premium rice for your home, we're here to serve you with the finest quality 
              rice processed with care and tradition.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="tel:+919490196589"
                className="btn-primary px-8 py-4 inline-flex items-center space-x-2"
              >
                <Phone size={20} />
                <span>Call Us Now</span>
              </a>
              <a
                href="mailto:vvrriceindia@gmail.com"
                className="btn-secondary px-8 py-4 inline-flex items-center space-x-2"
              >
                <Mail size={20} />
                <span>Send Email</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;