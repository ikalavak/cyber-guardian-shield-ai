
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Benefits", href: "#benefits" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={cn(
      "fixed w-full top-0 z-50 backdrop-blur-md border-b transition-colors duration-300",
      theme === 'dark' 
        ? "bg-cyber-dark/90 border-cyber-indigo/10" 
        : "bg-white/90 border-gray-200/50"
    )}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center">
          <a href="#" className="flex items-center space-x-1">
            <img 
              src="/lovable-uploads/843acba6-cf27-4c4b-bb9d-4beb375115e7.png" 
              alt="SAS Logo" 
              className={cn(
                "w-8 h-8 transition-all duration-300",
                theme === 'dark' ? "brightness-0 invert" : "brightness-100"
              )}
            />
            <span className={cn(
              "text-xl font-bold font-sans transition-colors duration-300",
              theme === 'dark' ? "text-white" : "text-gray-900"
            )}>SAS</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors duration-300",
                theme === 'dark' 
                  ? "text-gray-300 hover:text-white" 
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              {item.name}
            </a>
          ))}
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={cn(
              "p-2 rounded-md transition-colors duration-300",
              theme === 'dark'
                ? "text-gray-300 hover:text-white hover:bg-cyber-gray-dark/30"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            )}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <Button className="bg-cyber-gradient hover:opacity-90">Request Demo</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={cn(
              "p-2 rounded-md transition-colors duration-300",
              theme === 'dark'
                ? "text-gray-300 hover:text-white"
                : "text-gray-600 hover:text-gray-900"
            )}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className={cn(
              "p-2 rounded-md transition-colors duration-300",
              theme === 'dark'
                ? "text-gray-300 hover:text-white"
                : "text-gray-600 hover:text-gray-900"
            )}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 top-16 backdrop-blur-sm transition-all duration-300 ease-in-out z-40 md:hidden",
        theme === 'dark' ? "bg-cyber-dark" : "bg-white",
        mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <div className={cn(
          "border-t min-h-screen transition-colors duration-300",
          theme === 'dark' 
            ? "bg-cyber-dark border-cyber-indigo/20" 
            : "bg-white border-gray-200/50"
        )}>
          <div className="container mx-auto px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block py-4 px-4 text-lg font-medium rounded-lg border-b transition-colors duration-300",
                  theme === 'dark'
                    ? "text-gray-300 hover:text-white hover:bg-cyber-gray-dark/30 border-cyber-gray-dark/20"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-gray-200/30"
                )}
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
