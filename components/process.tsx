import React from 'react'


const StepCard = ({ number, title, description }: { number: string; title: string; description: string }) => (
    <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-lg border border-gray-700">
      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
const process = () => {
  return (
    <div>
    <div className="py-32 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Simple steps to transform your career journey
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <StepCard
            number="1"
            title="Create Your Profile"
            description="Input your career goals, experience, and preferences"
          />
          <StepCard
            number="2"
            title="Get AI Analysis"
            description="Receive personalized feedback and recommendations"
          />
          <StepCard
            number="3"
            title="Take Action"
            description="Follow guided steps to achieve your career goals"
          />
        </div>
      </div>
    </div></div>
  )
}

export default process