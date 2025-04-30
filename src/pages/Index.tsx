
import React from "react";
import { ShieldAnimation } from "@/components/ShieldAnimation";
import { Navbar } from "@/components/Navbar";
import { FeatureCard } from "@/components/FeatureCard";
import { HowItWorksStep } from "@/components/HowItWorksStep";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Shield, 
  Bell, 
  Zap, 
  Lock, 
  Search, 
  ShieldCheck, 
  Code, 
  AlertCircle,
  Github,
  Twitter,
  Linkedin
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Self-Healing Shield",
      description: "AI-powered protection that automatically heals vulnerabilities before they can be exploited."
    },
    {
      icon: Bell,
      title: "Real-time Alerts",
      description: "Instant notifications to management when suspicious activities are detected."
    },
    {
      icon: Zap,
      title: "Proactive Defense",
      description: "Identifies potential attacks before they happen using predictive AI algorithms."
    },
    {
      icon: Lock,
      title: "Enterprise-Grade Security",
      description: "Specifically designed to protect organizations and their valuable digital assets."
    }
  ];

  const howItWorks = [
    {
      icon: Search,
      title: "Continuous Monitoring",
      description: "Our AI constantly monitors your systems for any suspicious activities or unusual patterns that might indicate a potential threat.",
      step: 1
    },
    {
      icon: AlertCircle,
      title: "Threat Detection",
      description: "When a potential attack is identified, the system immediately analyzes the threat vector and determines its severity and potential impact.",
      step: 2
    },
    {
      icon: Shield,
      title: "Shield Generation",
      description: "The AI automatically generates and deploys a protective shield specifically designed to counter the detected threat.",
      step: 3
    },
    {
      icon: ShieldCheck,
      title: "Vulnerability Patching",
      description: "Beyond blocking the immediate threat, the system patches the underlying vulnerability to prevent similar attacks in the future.",
      step: 4
    },
    {
      icon: Bell,
      title: "Management Alert",
      description: "A comprehensive alert is sent to the security team with details about the threat, actions taken, and recommendations.",
      step: 5,
      isLast: true
    }
  ];

  const testimonials = [
    {
      quote: "SAS.AI detected and neutralized an attack that our previous security system completely missed. It's like having an elite security team working 24/7.",
      author: "Sarah Johnson",
      role: "CISO",
      company: "Global Enterprise"
    },
    {
      quote: "The self-healing capabilities have reduced our incident response time by 80%. Our team can now focus on strategic improvements instead of fighting fires.",
      author: "Michael Chen",
      role: "Head of IT Security",
      company: "Secure Trust Solutions"
    },
    {
      quote: "Implementation was seamless and the ROI was immediately apparent. Our customers feel safer knowing we use cutting-edge AI to protect their data.",
      author: "Elena Rodriguez",
      role: "CEO",
      company: "Digital Solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 cybergrid opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-gradient">AI-Powered</span> Security Shield
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Proactively protect your systems from cyber threats with our advanced AI that detects, shields, and heals vulnerabilities before hackers can exploit them.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-cyber-gradient hover:opacity-90">
                  Request Demo
                </Button>
                <Button size="lg" variant="outline" className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <ShieldAnimation />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 bg-cyber-dark relative">
        <div className="absolute inset-0 bg-cyber-radial"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Advanced Protection <span className="text-gradient">Features</span></h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our cutting-edge AI security system offers comprehensive protection designed for all types of digital infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 bg-cyber-gray-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How <span className="text-gradient">SAS.AI</span> Works</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI security system operates through a sophisticated process to ensure maximum protection for your digital infrastructure.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {howItWorks.map((step, index) => (
              <HowItWorksStep
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
                step={step.step}
                isLast={step.isLast}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-cyber-dark relative">
        <div className="absolute inset-0 bg-cyber-radial"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose <span className="text-gradient">SAS.AI</span></h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Organizations around the world trust our AI security system to protect their most valuable digital assets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
              />
            ))}
          </div>
          
          <div className="mt-20 bg-cyber-gradient p-0.5 rounded-xl">
            <div className="bg-cyber-gray-dark rounded-xl p-8 sm:p-12 flex flex-col items-center text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to secure your digital infrastructure?</h3>
              <p className="text-gray-300 mb-8 max-w-2xl">
                Join leading organizations that have already strengthened their security posture with SAS.AI Shield.
              </p>
              <Button size="lg" className="bg-white text-cyber-blue hover:bg-gray-100">
                Schedule a Free Security Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-cyber-gray-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact <span className="text-gradient">Us</span></h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Have questions about how SAS.AI can protect your digital infrastructure? Get in touch with our security experts.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto cyber-card p-8 rounded-xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                  <Input 
                    id="name" 
                    placeholder="Enter your name" 
                    className="bg-cyber-dark border-cyber-indigo/30 text-white placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-cyber-dark border-cyber-indigo/30 text-white placeholder:text-gray-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                <Input 
                  id="company" 
                  placeholder="Enter your company name" 
                  className="bg-cyber-dark border-cyber-indigo/30 text-white placeholder:text-gray-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  placeholder="How can we help you?" 
                  className="w-full rounded-md bg-cyber-dark border border-cyber-indigo/30 text-white placeholder:text-gray-500 p-3 focus:outline-none focus:ring-2 focus:ring-cyber-blue"
                ></textarea>
              </div>
              <Button className="w-full bg-cyber-gradient hover:opacity-90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-cyber-dark border-t border-cyber-indigo/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-cyber-gradient flex items-center justify-center">
                  <div className="w-5 h-5 bg-cyber-dark rounded-full" />
                </div>
                <span className="text-xl font-bold text-gradient">SAS.AI</span>
              </div>
              <p className="text-gray-400 mb-4">
                Next-generation AI security for digital infrastructure.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partners</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-cyber-indigo/10 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 sm:mb-0">
              &copy; {new Date().getFullYear()} SAS.AI Security Shield. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
