
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

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
        <div className="bg-cyber-blue/10 rounded-md px-3 py-1 inline-block mb-2">
          <span className="text-xs font-semibold text-cyber-blue">Step {step}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};
