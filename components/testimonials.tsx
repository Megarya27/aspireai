import React from "react";
import { Star } from "lucide-react";

const TestimonialCard = ({
  quote,
  author,
  role,
  company,
}: {
  quote: string;
  author: string;
  role: string;
  company: string;
}) => (
  <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
    <div className="flex items-center gap-1 mb-4 text-yellow-500">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-5 w-5 fill-current" />
      ))}
    </div>
    <p className="text-gray-300 mb-4">{`"${quote}"`}</p>
    <div>
      <div className="font-semibold">{author}</div>
      <div className="text-sm text-gray-400">
        {role} at {company}
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <div className="py-32 pb-60">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See how AspireAI has helped professionals achieve their career goals
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <TestimonialCard
            quote={"The AI interview practice helped me land my dream job at a top tech company."}
            author="Sarah Chen"
            role="Software Engineer"
            company="Tech Giant Inc"
          />
          <TestimonialCard
            quote={"Resume optimization feature helped me get 3x more interview calls."}
            author="James Wilson"
            role="Product Manager"
            company="StartupX"
          />
          <TestimonialCard
            quote={"Career guidance was spot on. Got promoted within 6 months!"}
            author="Michael Rodriguez"
            role="Marketing Director"
            company="Growth Co"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
