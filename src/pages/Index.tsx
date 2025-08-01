import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import IntroSection from "@/components/IntroSection";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background font-poppins">
      <Navigation />
      
      <main>
        <IntroSection />
        
        <div id="home">
          <HeroSection />
        </div>
        
        <div id="about">
          <AboutSection />
        </div>
        
        <div id="portfolio">
          <PortfolioSection />
        </div>
        
        <div id="services">
          <ServicesSection />
        </div>
        
        <div id="resume">
          <ResumeSection />
        </div>
        
        <div id="contact">
          <ContactSection />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground font-poppins">
            © 2025 Ngima Sherpa. All rights reserved. Built with AI and creativity.
          </p>
          <p className="text-sm text-muted-foreground font-poppins mt-2">
            AI Journalist & Innovator | Taplejung, Nepal
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
