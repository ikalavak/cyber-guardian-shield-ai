
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  const { theme } = useTheme();
  
  return (
    <div className={cn(
      "cyber-card rounded-xl p-6 hover:border-cyber-blue/30 transition-all duration-300 transform hover:-translate-y-1 group",
      theme === 'light' ? "bg-white/80 border-gray-200/50" : ""
    )}>
      <div className="w-12 h-12 mb-6 rounded-lg bg-cyber-gradient flex items-center justify-center group-hover:scale-110 transition-transform">
        <Icon size={24} className="text-white" />
      </div>
      <h3 className={cn(
        "text-xl font-bold mb-3",
        theme === 'light' ? "text-gray-900" : "text-white"
      )}>{title}</h3>
      <p className={cn(
        theme === 'light' ? "text-gray-600" : "text-gray-400"
      )}>{description}</p>
    </div>
  );
};
