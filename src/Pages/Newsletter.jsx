import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaCheckCircle, FaLeaf, FaNewspaper, FaUsers, FaTimes } from "react-icons/fa";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !name) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      setShowSuccess(true);
      setEmail("");
      setName("");
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 1500);
  };

  const features = [
    {
      icon: <FaLeaf className="text-3xl text-green-500" />,
      title: "Plant Care Tips",
      description: "Weekly expert advice on caring for your air-purifying plants"
    },
    {
      icon: <FaNewspaper className="text-3xl text-green-500" />,
      title: "Latest Research",
      description: "Stay updated with the newest air quality research and findings"
    },
    {
      icon: <FaUsers className="text-3xl text-green-500" />,
      title: "Community Stories",
      description: "Read success stories from our Clean Breath community members"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Success Notification */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3"
        >
          <FaCheckCircle />
          <span>Successfully subscribed to our newsletter!</span>
          <button
            onClick={() => setShowSuccess(false)}
            className="ml-2 hover:bg-green-600 rounded-full p-1"
          >
            <FaTimes className="text-sm" />
          </button>
        </motion.div>
      )}

      <motion.div
        className="max-w-6xl mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.header className="text-center mb-16" variants={itemVariants}>
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full">
              <FaEnvelope className="text-4xl text-green-600 dark:text-green-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 dark:text-green-400 mb-4 poppins-bold">
            Clean Breath Newsletter
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto poppins-regular">
            Join thousands of plant enthusiasts and air quality advocates. Get weekly insights, 
            expert tips, and the latest research delivered straight to your inbox.
          </p>
        </motion.header>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Newsletter Features */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-semibold text-green-700 dark:text-green-400 mb-8 poppins-bold">
              What You'll Receive
            </h2>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-200 dark:border-green-700 hover:border-green-400 dark:hover:border-green-500"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Section */}
            <motion.div 
              className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900 dark:to-blue-900 rounded-xl"
              variants={itemVariants}
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-700 dark:text-green-400">15K+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Subscribers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-700 dark:text-green-400">98%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-700 dark:text-green-400">Weekly</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Delivery</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Subscription Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-green-700 dark:text-green-400 mb-6 text-center poppins-bold">
                Subscribe Now
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-200"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-200"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 ${
                    isLoading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 hover:scale-105"
                  }`}
                  whileHover={!isLoading ? { scale: 1.05 } : {}}
                  whileTap={!isLoading ? { scale: 0.95 } : {}}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Subscribing...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <FaEnvelope />
                      Subscribe to Newsletter
                    </div>
                  )}
                </motion.button>
              </form>

              <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>

            {/* Testimonial */}
            <motion.div 
              className="mt-8 p-6 bg-green-50 dark:bg-green-900 rounded-xl border-l-4 border-green-400"
              variants={itemVariants}
            >
              <p className="text-gray-700 dark:text-gray-300 italic mb-3">
                "The Clean Breath newsletter has transformed how I care for my plants. 
                The weekly tips are incredibly valuable!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div>
                  <div className="font-semibold text-gray-800 dark:text-gray-200">Sarah Johnson</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Plant Enthusiast</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.section className="mt-16" variants={itemVariants}>
          <h2 className="text-2xl font-semibold text-green-700 dark:text-green-400 text-center mb-8 poppins-bold">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "How often will I receive newsletters?",
                answer: "We send out newsletters weekly, every Wednesday morning."
              },
              {
                question: "Can I unsubscribe anytime?",
                answer: "Yes, you can unsubscribe at any time with one click from any newsletter."
              },
              {
                question: "Is my email address safe?",
                answer: "Absolutely. We never share your email with third parties and follow strict privacy policies."
              },
              {
                question: "What type of content do you share?",
                answer: "Plant care tips, air quality research, community stories, and seasonal gardening advice."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Newsletter;
