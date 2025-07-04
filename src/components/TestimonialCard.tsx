
import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const TestimonialCard = ({ quote, author, role, company }: TestimonialCardProps) => {
  return (
    <div className="cyber-card rounded-xl p-6 shadow-lg relative">
      <Quote size={40} className="absolute top-4 right-4 text-cyber-indigo/10" />
      <p className="text-gray-300 mb-6 relative z-10">{quote}</p>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-cyber-gradient flex items-center justify-center mr-3">
          <span className="text-white font-bold">{author.charAt(0)}</span>
        </div>
        <div>
          <div className="font-medium">{author}</div>
          <div className="text-sm text-gray-400">{role}, {company}</div>
        </div>
      </div>
    </div>
  );
};
