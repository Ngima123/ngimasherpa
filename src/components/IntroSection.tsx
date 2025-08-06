import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const IntroSection = () => {
  const scrollToWork = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/5 animate-pulse"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0">
          {/* Large Floating Triangles */}
          <div className="absolute top-1/4 left-1/6 w-32 h-32 border border-primary/20 rotate-45 animate-spin" style={{
          animationDuration: '20s'
        }}></div>
          <div className="absolute bottom-1/3 right-1/5 w-24 h-24 border border-accent/30 rotate-12 animate-spin" style={{
          animationDuration: '15s',
          animationDirection: 'reverse'
        }}></div>
          <div className="absolute top-2/3 left-2/3 w-16 h-16 border border-secondary/25 -rotate-45 animate-spin" style={{
          animationDuration: '25s'
        }}></div>
          
          {/* Hexagon Shapes */}
          <div className="absolute top-1/2 left-1/12 w-20 h-20" style={{
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          background: 'linear-gradient(45deg, hsl(var(--primary)/0.1), hsl(var(--accent)/0.1))',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
          <div className="absolute bottom-1/4 right-1/3 w-14 h-14" style={{
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          background: 'linear-gradient(135deg, hsl(var(--secondary)/0.15), hsl(var(--primary)/0.1))',
          animation: 'float 8s ease-in-out infinite reverse'
        }}></div>
          
          {/* Animated Circles with Glow */}
          <div className="absolute top-1/5 right-1/6 w-8 h-8 rounded-full bg-primary/20 animate-ping" style={{
          animationDuration: '4s'
        }}></div>
          <div className="absolute bottom-1/5 left-1/4 w-6 h-6 rounded-full bg-accent/25 animate-ping" style={{
          animationDuration: '3s',
          animationDelay: '1s'
        }}></div>
          <div className="absolute top-3/4 right-2/3 w-10 h-10 rounded-full bg-secondary/15 animate-ping" style={{
          animationDuration: '5s',
          animationDelay: '2s'
        }}></div>
        </div>

        {/* Enhanced Neural Network with Animation */}
        <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 1200 800" fill="none">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8">
                <animate attributeName="stop-opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.6">
                <animate attributeName="stop-opacity" values="0.2;0.6;0.2" dur="4s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.7">
                <animate attributeName="stop-opacity" values="0.3;0.7;0.3" dur="5s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
            
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge> 
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          {/* Animated Connection Lines */}
          <g stroke="url(#neuralGradient)" strokeWidth="2" filter="url(#glow)" opacity="0.7">
            <line x1="100" y1="150" x2="300" y2="250">
              <animate attributeName="stroke-opacity" values="0.2;1;0.2" dur="2s" repeatCount="indefinite" />
            </line>
            <line x1="300" y1="250" x2="500" y2="180">
              <animate attributeName="stroke-opacity" values="0.2;1;0.2" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
            </line>
            <line x1="500" y1="180" x2="700" y2="320">
              <animate attributeName="stroke-opacity" values="0.2;1;0.2" dur="3s" repeatCount="indefinite" begin="1s" />
            </line>
            <line x1="700" y1="320" x2="900" y2="220">
              <animate attributeName="stroke-opacity" values="0.2;1;0.2" dur="2.2s" repeatCount="indefinite" begin="1.5s" />
            </line>
            <line x1="150" y1="400" x2="350" y2="300">
              <animate attributeName="stroke-opacity" values="0.2;1;0.2" dur="2.8s" repeatCount="indefinite" begin="0.3s" />
            </line>
            <line x1="350" y1="300" x2="550" y2="450">
              <animate attributeName="stroke-opacity" values="0.2;1;0.2" dur="3.2s" repeatCount="indefinite" begin="0.8s" />
            </line>
            <line x1="550" y1="450" x2="750" y2="380">
              <animate attributeName="stroke-opacity" values="0.2;1;0.2" dur="2.6s" repeatCount="indefinite" begin="1.2s" />
            </line>
          </g>
          
          {/* Pulsing Neural Nodes */}
          <g filter="url(#glow)">
            <circle cx="100" cy="150" r="6" fill="hsl(var(--primary))" opacity="0.9">
              <animate attributeName="r" values="4;8;4" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="300" cy="250" r="8" fill="hsl(var(--accent))" opacity="0.8">
              <animate attributeName="r" values="6;10;6" dur="4s" repeatCount="indefinite" begin="1s" />
              <animate attributeName="opacity" values="0.4;0.9;0.4" dur="4s" repeatCount="indefinite" begin="1s" />
            </circle>
            <circle cx="500" cy="180" r="7" fill="hsl(var(--secondary))" opacity="0.7">
              <animate attributeName="r" values="5;9;5" dur="3.5s" repeatCount="indefinite" begin="2s" />
              <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3.5s" repeatCount="indefinite" begin="2s" />
            </circle>
            <circle cx="700" cy="320" r="9" fill="hsl(var(--primary))" opacity="0.9">
              <animate attributeName="r" values="7;11;7" dur="2.8s" repeatCount="indefinite" begin="0.5s" />
              <animate attributeName="opacity" values="0.5;1;0.5" dur="2.8s" repeatCount="indefinite" begin="0.5s" />
            </circle>
            <circle cx="900" cy="220" r="5" fill="hsl(var(--accent))" opacity="0.6">
              <animate attributeName="r" values="3;7;3" dur="4.2s" repeatCount="indefinite" begin="1.5s" />
              <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4.2s" repeatCount="indefinite" begin="1.5s" />
            </circle>
          </g>
        </svg>

        {/* Floating Energy Orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/6 left-1/3 w-4 h-4 rounded-full bg-primary/30 shadow-neon animate-bounce" style={{
          animationDuration: '3s',
          animationDelay: '0s'
        }}></div>
          <div className="absolute top-2/5 right-1/4 w-3 h-3 rounded-full bg-accent/40 shadow-neon-green animate-bounce" style={{
          animationDuration: '4s',
          animationDelay: '1s'
        }}></div>
          <div className="absolute bottom-1/3 left-1/5 w-5 h-5 rounded-full bg-secondary/25 shadow-neon animate-bounce" style={{
          animationDuration: '3.5s',
          animationDelay: '2s'
        }}></div>
          <div className="absolute bottom-1/6 right-1/3 w-2 h-2 rounded-full bg-primary/50 shadow-neon animate-bounce" style={{
          animationDuration: '4.5s',
          animationDelay: '3s'
        }}></div>
          <div className="absolute top-3/5 left-3/4 w-3 h-3 rounded-full bg-accent/35 shadow-neon-green animate-bounce" style={{
          animationDuration: '3.8s',
          animationDelay: '4s'
        }}></div>
        </div>

        {/* Dynamic Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
          backgroundImage: `
              linear-gradient(hsl(var(--primary)/0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)/0.3) 1px, transparent 1px)
            `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 10s linear infinite'
        }}></div>
        </div>

        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-background/20 to-background/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        {/* Main Name */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-poppins font-black mb-8 tracking-tight">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Ngima Sherpa
          </span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-montserrat font-bold text-foreground mb-6 tracking-wide">AI website builder | Building the Future with Intelligence</h2>

        {/* Description */}
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-poppins font-light mb-12 max-w-3xl mx-auto leading-relaxed">
          Crafting smarter systems, tools, and ideas — across industries.
        </p>

        {/* CTA Button */}
        <Button size="lg" className="font-poppins font-semibold px-12 py-6 text-xl bg-gradient-primary hover:shadow-neon transition-all duration-500 transform hover:scale-105 group" onClick={scrollToWork}>
          Explore My Work
          <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          
        </div>
      </div>
    </section>;
};
export default IntroSection;