'use client'
import { motion } from 'framer-motion'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-purple-950 text-gray-200">
      <div className="container mx-auto px-6">
        <div className="relative pt-40 pb-20">
          
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-purple-900/30" />
          
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
              Privacy{' '}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                Policy
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-8 text-left"
            >
              <p className="text-xl leading-relaxed">
                Your privacy is important to us. This Privacy Policy explains how AspireAI collects, uses, and safeguards your personal information.
              </p>

              <div className="space-y-6 py-8">
                <h2 className="text-3xl font-semibold text-purple-400">Information We Collect</h2>
                <p className="text-lg">
                  We collect data such as your name, email address, and usage behavior to improve your experience and provide personalized services.
                </p>
              </div>

              <div className="space-y-6 py-8">
                <h2 className="text-3xl font-semibold text-purple-400">How We Use Your Information</h2>
                <p className="text-lg">
                  AspireAI uses your information to deliver tailored career insights, improve our services, and ensure a secure user experience.
                </p>
              </div>

              <div className="space-y-6 py-8">
                <h2 className="text-3xl font-semibold text-purple-400">Your Rights</h2>
                <p className="text-lg">
                  You have the right to access, modify, or delete your personal data. Contact us if you need assistance regarding your information.
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

export default PrivacyPolicy
