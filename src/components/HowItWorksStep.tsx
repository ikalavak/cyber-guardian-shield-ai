
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/ThemeContext';

interface HowItWorksStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  step: number;
  isLast?: boolean;
}

export const HowItWorksStep = ({ 
  icon: Icon, 
  title, 
  description, 
  step,
  isLast = false 
}: HowItWorksStepProps) => {
  const { theme } = useTheme();
  
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-6">
        <div className="w-12 h-12 rounded-full bg-cyber-gradient flex items-center justify-center z-10">
          <Icon size={20} className="text-white" />
        </div>
        {!isLast && (
          <div className="w-0.5 grow bg-gradient-to-b from-cyber-blue to-cyber-purple/30 mt-3" />
        )}
      </div>
      <div className={cn("pb-12", isLast && "pb-0")}>
        <div className={cn(
          "rounded-md px-3 py-1 inline-block mb-2",
          theme === 'light' ? "bg-blue-100" : "bg-cyber-blue/10"
        )}>
          <span className={cn(
            "text-xs font-semibold",
            theme === 'light' ? "text-blue-700" : "text-cyber-blue"
          )}>Step {step}</span>
        </div>
        <h3 className={cn(
          "text-xl font-bold mb-2",
          theme === 'light' ? "text-gray-900" : "text-white"
        )}>{title}</h3>
        <p className={cn(
          theme === 'light' ? "text-gray-600" : "text-gray-400"
        )}>{description}</p>
      </div>
    </div>
  );
};
