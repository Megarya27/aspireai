'use client'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-purple-950 text-gray-200">
      <div className="container mx-auto px-6">
        <div className="relative pt-40 pb-20">
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-purple-900/30" />
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-3xl mx-auto text-center space-y-12"
          >
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-5xl md:text-7xl font-bold mb-8"
            >
              About{' '}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                AspireAI
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <p className="text-xl leading-relaxed">
                AspireAI is your ultimate AI-powered career companion, designed to help you navigate the evolving job market with intelligent insights, resume optimization, and personalized career guidance.
              </p>

              <div className="space-y-6 py-8">
                <h2 className="text-3xl font-semibold text-purple-400">Our Mission</h2>
                <p className="text-lg">
                  We aim to empower individuals by providing cutting-edge AI tools that enhance job search strategies, interview preparation, and career development.
                </p>
              </div>

              <div className="space-y-6 py-8">
                <h2 className="text-3xl font-semibold text-purple-400">Why Choose Us?</h2>
                <p className="text-lg">
                  With AspireAI, you get data-driven recommendations, AI-driven resume improvements, and mock interview simulations, all tailored to your unique career path.
                </p>
              </div>
            </motion.div>

            <div className="pt-12 border-t border-gray-700/50">
              <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} AspireAI. All rights reserved.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
