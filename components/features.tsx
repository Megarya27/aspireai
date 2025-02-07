import React from 'react'
import { 
    Users, 
    Brain,
    FileText 
  } from 'lucide-react';
import Link from 'next/link';
const FeatureCard = ({ icon, title, description, link }: { icon: React.ReactNode; title: string; description: string; link: string }) => (
    <Link href={link} className="block group">
      <div className="relative backdrop-blur-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl 
        border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 
        hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1">
        <div className="text-purple-500 mb-6 text-2xl transform group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </Link>
);

const features = () => {
  return (
    
    <div className="py-56 ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Career Tools</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Everything you need to accelerate your career growth, powered by advanced AI technology
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<FileText />}
              title="Resume Optimiser"
              description="Get AI-powered feedback to make your resume stand out from the crowd"
              link="/resume-optimiser"
            />
            <FeatureCard
              icon={<Users />}
              title="Interview Prep"
              description="Practice with realistic AI interviews tailored to your industry"
              link="/interview-prep"
            />
            <FeatureCard
              icon={<FileText />}
              title="Cover Letter Generator"
              description="Create compelling cover letters customized for each application"
              link="/cover-letter-generator"
            />
            <FeatureCard
              icon={<Brain />}
              title="Career Advisor"
              description="Get personalized career guidance and industry insights"
              link="/career-advisor"
            />
          </div>
        </div>
      </div>
  )
}

export default features