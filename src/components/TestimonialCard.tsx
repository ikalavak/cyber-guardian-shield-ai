
import React from 'react';
import { Quote } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const TestimonialCard = ({ quote, author, role, company }: TestimonialCardProps) => {
  const { theme } = useTheme();
  
  return (
    <div className={cn(
      "cyber-card rounded-xl p-6 shadow-lg relative",
      theme === 'light' ? "bg-white/80 border-gray-200/50" : ""
    )}>
      <Quote size={40} className={cn(
        "absolute top-4 right-4",
        theme === 'light' ? "text-gray-200" : "text-cyber-indigo/10"
      )} />
      <p className={cn(
        "mb-6 relative z-10",
        theme === 'light' ? "text-gray-700" : "text-gray-300"
      )}>{quote}</p>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-cyber-gradient flex items-center justify-center mr-3">
          <span className="text-white font-bold">{author.charAt(0)}</span>
        </div>
        <div>
          <div className={cn(
            "font-medium",
            theme === 'light' ? "text-gray-900" : "text-white"
          )}>{author}</div>
          <div className={cn(
            "text-sm",
            theme === 'light' ? "text-gray-600" : "text-gray-400"
          )}>{role}, {company}</div>
        </div>
      </div>
    </div>
  );
};
