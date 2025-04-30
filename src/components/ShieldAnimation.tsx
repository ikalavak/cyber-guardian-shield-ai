
import React, { useState, useEffect } from 'react';
import { Shield, ShieldAlert, ShieldCheck, Activity } from 'lucide-react';
import { cn } from '@/lib/utils';

export const ShieldAnimation = () => {
  const [isProtected, setIsProtected] = useState(true);
  const [isAttacking, setIsAttacking] = useState(false);
  const [attackPosition, setAttackPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const attackInterval = setInterval(() => {
      // Simulate attack attempt
      setIsAttacking(true);
      setAttackPosition({
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
      });
      
      // Shield responds and blocks
      setTimeout(() => {
        setIsAttacking(false);
      }, 1500);
      
    }, 5000);

    return () => clearInterval(attackInterval);
  }, []);

  return (
    <div className="relative w-64 h-64 sm:w-96 sm:h-96">
      {/* Background glow */}
      <div className="absolute inset-0 rounded-full bg-cyber-blue/5 animate-pulse-glow" />
      
      {/* Outer rotating circle */}
      <div className="absolute inset-0 border-4 border-dashed border-cyber-blue/30 rounded-full animate-rotate-slow" />
      
      {/* Middle shield layer */}
      <div className="absolute inset-8 flex items-center justify-center">
        <div className={cn(
          "w-full h-full rounded-full flex items-center justify-center transition-all duration-500",
          "bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/30",
          isAttacking ? "animate-shield-pulse" : ""
        )}>
          {isProtected ? (
            <ShieldCheck size={100} className="text-cyber-blue animate-float cybershield-glow" />
          ) : (
            <ShieldAlert size={100} className="text-cyber-pink animate-pulse" />
          )}
        </div>
      </div>
      
      {/* Attack particles */}
      {isAttacking && Array.from({ length: 5 }).map((_, i) => (
        <div 
          key={i}
          className="absolute w-3 h-3 bg-cyber-pink rounded-full animate-pulse"
          style={{
            left: `calc(50% + ${attackPosition.x + Math.random() * 40 - 20}px)`,
            top: `calc(50% + ${attackPosition.y + Math.random() * 40 - 20}px)`,
            opacity: 0.7,
            animationDelay: `${i * 0.2}s`
          }}
        />
      ))}
      
      {/* Shield response particles */}
      {isAttacking && Array.from({ length: 8 }).map((_, i) => (
        <div 
          key={i}
          className="absolute w-2 h-2 bg-cyber-blue rounded-full"
          style={{
            left: `calc(50% + ${Math.cos(i * Math.PI / 4) * 120}px)`,
            top: `calc(50% + ${Math.sin(i * Math.PI / 4) * 120}px)`,
            opacity: 0.9,
            animation: `pulse-glow 1s infinite ease-in-out ${i * 0.1}s`
          }}
        />
      ))}
      
      {/* Digital scan effect */}
      <div 
        className="absolute inset-0 overflow-hidden rounded-full opacity-20"
        style={{
          background: 'linear-gradient(transparent, rgba(10, 132, 255, 0.3), transparent)',
          backgroundSize: '100% 20px',
          animation: 'scanMove 3s linear infinite',
        }}
      />

      {/* Activity indicator */}
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-cyber-dark/80 px-3 py-1 rounded-full border border-cyber-indigo/20 flex items-center space-x-2">
        <Activity size={16} className="text-cyber-blue animate-pulse" />
        <span className="text-xs font-mono text-cyber-blue">System Active</span>
      </div>
    </div>
  );
};
