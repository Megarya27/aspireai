'use client'
import { motion } from 'framer-motion'

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-purple-950 text-gray-200">
      <div className="relative text-center px-6">
        
        
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-3xl mx-auto space-y-8"
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-5xl md:text-7xl font-bold"
          >
            Something{' '}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
              Amazing
            </span>{' '}
            is Coming
          </motion.h1>

          <p className="text-xl text-gray-300">
            We’re working hard behind the scenes to bring you something exciting. Stay tuned!
          </p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="flex justify-center">
              <div className="w-24 h-24 border-4 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
          </motion.div>

          <p className="text-lg text-gray-400">Stay updated by following us!</p>
        </motion.div>
      </div>
    </div>
  )
}

export default ComingSoon
