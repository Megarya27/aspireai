'use client'
import { motion } from 'framer-motion'

const TermsOfService = () => {
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
              Terms of{' '}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                Service
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-8 text-left"
            >
              <p className="text-xl leading-relaxed">
                By using AspireAI, you agree to comply with and be bound by the following Terms of Service. Please read them carefully.
              </p>

              <div className="space-y-6 py-8">
                <h2 className="text-3xl font-semibold text-purple-400">Acceptance of Terms</h2>
                <p className="text-lg">
                  By accessing or using AspireAI, you agree to be bound by these terms and any future updates or amendments.
                </p>
              </div>

              <div className="space-y-6 py-8">
                <h2 className="text-3xl font-semibold text-purple-400">Usage Restrictions</h2>
                <p className="text-lg">
                  You agree not to use the service for any unlawful or prohibited activities, including but not limited to fraud, data mining, or engaging in harmful behavior.
                </p>
              </div>

              <div className="space-y-6 py-8">
                <h2 className="text-3xl font-semibold text-purple-400">Account Responsibility</h2>
                <p className="text-lg">
                  You are responsible for maintaining the confidentiality of your account credentials and ensuring that your account is not used by unauthorized individuals.
                </p>
              </div>

              <div className="space-y-6 py-8">
                <h2 className="text-3xl font-semibold text-purple-400">Limitation of Liability</h2>
                <p className="text-lg">
                  AspireAI is not liable for any damages or losses resulting from the use of or inability to use our service. You agree to use the service at your own risk.
                </p>
              </div>

              <div className="space-y-6 py-8">
                <h2 className="text-3xl font-semibold text-purple-400">Governing Law</h2>
                <p className="text-lg">
                  These Terms of Service shall be governed by the laws of the jurisdiction in which AspireAI is based, without regard to its conflict of law principles.
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

export default TermsOfService
