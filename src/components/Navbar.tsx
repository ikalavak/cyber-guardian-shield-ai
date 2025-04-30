
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Benefits", href: "#benefits" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-cyber-dark/80 backdrop-blur-md border-b border-cyber-indigo/10">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center">
          <a href="#" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-cyber-gradient flex items-center justify-center">
              <div className="w-5 h-5 bg-cyber-dark rounded-full" />
            </div>
            <span className="text-xl font-bold text-gradient">SAS.AI</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
          <Button className="bg-cyber-gradient hover:opacity-90">Request Demo</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="text-gray-300 hover:text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 top-16 bg-cyber-dark/95 backdrop-blur-md transition-all duration-300 ease-in-out z-40 md:hidden",
        mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <div className="container mx-auto px-4 py-6 space-y-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 text-lg font-medium text-gray-300 hover:text-white border-b border-cyber-gray-dark"
            >
              {item.name}
            </a>
          ))}
          <Button className="w-full mt-6 bg-cyber-gradient hover:opacity-90">Request Demo</Button>
        </div>
      </div>
    </header>
  );
};
