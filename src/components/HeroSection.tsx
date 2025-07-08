import { Button } from "@/components/ui/button";
import { FileText, Phone, Globe, Download } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero"
      style={{
        backgroundImage: `linear-gradient(rgba(36, 40, 70, 0.8), rgba(36, 40, 70, 0.9)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-accent/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-primary bg-clip-text text-transparent animate-neon-glow">
              Ngima Sherpa
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl font-montserrat font-medium text-foreground/90 mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            AI Journalist & Innovator
          </p>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-poppins animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Creative AI solutions for websites, education, music, and media.
            Transforming ideas into digital reality with cutting-edge technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="font-poppins font-semibold px-8 py-4 text-lg bg-gradient-primary hover:shadow-neon transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('resume')}
            >
              <FileText className="mr-2 h-5 w-5" />
              View Resume
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="font-poppins font-semibold px-8 py-4 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-neon transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              <Phone className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
            
            <Button 
              variant="secondary" 
              size="lg" 
              className="font-poppins font-semibold px-8 py-4 text-lg bg-gradient-secondary hover:shadow-neon-green transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('portfolio')}
            >
              <Globe className="mr-2 h-5 w-5" />
              Explore My Work
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;