
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="cyber-card rounded-xl p-6 hover:border-cyber-blue/30 transition-all duration-300 transform hover:-translate-y-1 group">
      <div className="w-12 h-12 mb-6 rounded-lg bg-cyber-gradient flex items-center justify-center group-hover:scale-110 transition-transform">
        <Icon size={24} className="text-white" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};
