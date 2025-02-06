"use client"
import { 
  Rocket, 
  Users, 
  Brain,
  ArrowRight,
  Star,
  FileText 
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="text-white">
      <div className="py-32 pt-60 px-4 relative overflow-hidden">
        <div className="absolute inset-0 "></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="inline-block mb-4 px-4 py-1 bg-purple-900/30 rounded-full border border-purple-500/20"
          >
            <span className="text-purple-400">AI-Powered Career Growth</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Elevate Your Career with{' '}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
              AI Power <motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 4 }}><Rocket className="inline h-12 w-12" /></motion.span>
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Get personalized resume feedback, practice mock interviews, and stay
            ahead with industry trends—all in one smart career coach.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/dashboard"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              Get Started <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
          
          
        </div>
      </div>
    </div>
  );
}

const StatItem = ({ number, text }: { number: string; text: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.6 }}
    className="text-center"
  >
    <div className="text-3xl font-bold mb-1">{number}</div>
    <div className="text-gray-400 text-sm">{text}</div>
  </motion.div>
);
