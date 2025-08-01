
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
    <header className="fixed w-full top-0 z-50 bg-cyber-dark/90 backdrop-blur-md border-b border-cyber-indigo/10">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center">
          <a href="#" className="flex items-center space-x-1">
            <img 
              src="/lovable-uploads/843acba6-cf27-4c4b-bb9d-4beb375115e7.png" 
              alt="SAS Logo" 
              className="w-8 h-8 brightness-0 invert" 
            />
            <span className="text-xl font-bold text-white font-sans">SAS</span>
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
            className="text-gray-300 hover:text-white p-2 rounded-md"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 top-16 bg-cyber-dark backdrop-blur-sm transition-all duration-300 ease-in-out z-40 md:hidden",
        mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <div className="bg-cyber-dark border-t border-cyber-indigo/20 min-h-screen">
          <div className="container mx-auto px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-4 px-4 text-lg font-medium text-gray-300 hover:text-white hover:bg-cyber-gray-dark/30 rounded-lg border-b border-cyber-gray-dark/20 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4">
              <Button 
                className="w-full bg-cyber-gradient hover:opacity-90 py-3 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </header>
  );
};
