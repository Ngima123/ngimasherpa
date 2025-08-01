import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const IntroSection = () => {
  const scrollToWork = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-30">
        {/* Static Neural Network Pattern */}
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Neural Network Lines */}
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
              <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          
          {/* Connection Lines */}
          <g stroke="url(#neuralGradient)" strokeWidth="1" opacity="0.5">
            <line x1="100" y1="150" x2="300" y2="250" />
            <line x1="300" y1="250" x2="500" y2="180" />
            <line x1="500" y1="180" x2="700" y2="320" />
            <line x1="700" y1="320" x2="900" y2="220" />
            <line x1="150" y1="400" x2="350" y2="300" />
            <line x1="350" y1="300" x2="550" y2="450" />
            <line x1="550" y1="450" x2="750" y2="380" />
            <line x1="200" y1="600" x2="400" y2="500" />
            <line x1="400" y1="500" x2="600" y2="600" />
            <line x1="600" y1="600" x2="800" y2="520" />
            <line x1="300" y1="250" x2="150" y2="400" />
            <line x1="500" y1="180" x2="350" y2="300" />
            <line x1="700" y1="320" x2="550" y2="450" />
          </g>
          
          {/* Neural Nodes */}
          <g fill="hsl(var(--primary))">
            <circle cx="100" cy="150" r="4" opacity="0.8" />
            <circle cx="300" cy="250" r="6" opacity="0.9" />
            <circle cx="500" cy="180" r="5" opacity="0.7" />
            <circle cx="700" cy="320" r="7" opacity="0.8" />
            <circle cx="900" cy="220" r="4" opacity="0.6" />
          </g>
          <g fill="hsl(var(--accent))">
            <circle cx="150" cy="400" r="5" opacity="0.7" />
            <circle cx="350" cy="300" r="6" opacity="0.8" />
            <circle cx="550" cy="450" r="4" opacity="0.6" />
            <circle cx="750" cy="380" r="5" opacity="0.7" />
          </g>
          <g fill="hsl(var(--secondary))">
            <circle cx="200" cy="600" r="4" opacity="0.8" />
            <circle cx="400" cy="500" r="6" opacity="0.9" />
            <circle cx="600" cy="600" r="5" opacity="0.7" />
            <circle cx="800" cy="520" r="4" opacity="0.6" />
          </g>
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-primary rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-accent rounded-full opacity-80 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-secondary rounded-full opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-primary rounded-full opacity-70 animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-2/3 left-3/4 w-2 h-2 bg-accent rounded-full opacity-50 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/80"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        {/* Main Name */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-poppins font-black mb-8 tracking-tight">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Ngima Sherpa
          </span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-montserrat font-bold text-foreground mb-6 tracking-wide">
          AI Generalist | Building the Future with Intelligence
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-poppins font-light mb-12 max-w-3xl mx-auto leading-relaxed">
          Crafting smarter systems, tools, and ideas — across industries.
        </p>

        {/* CTA Button */}
        <Button 
          size="lg"
          className="font-poppins font-semibold px-12 py-6 text-xl bg-gradient-primary hover:shadow-neon transition-all duration-500 transform hover:scale-105 group"
          onClick={scrollToWork}
        >
          Explore My Work
          <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-primary/60 rounded-full flex justify-center">
            <div className="w-1.5 h-4 bg-primary rounded-full mt-3 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;