import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Globe, 
  GraduationCap, 
  Video, 
  FileImage, 
  Music, 
  Palette,
  User,
  Wrench
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Design",
      description: "Personal, School, and Business websites with modern, responsive designs",
      features: ["Responsive Design", "SEO Optimized", "User-Friendly", "Custom Solutions"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: GraduationCap,
      title: "AI Tools Training",
      description: "Comprehensive training on 30+ AI tools for various applications",
      features: ["30+ AI Tools", "Hands-on Training", "Practical Examples", "Ongoing Support"],
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: Video,
      title: "Video Editing & AI Marketing",
      description: "Professional video editing and AI-powered marketing content creation",
      features: ["AI Enhancement", "Marketing Focus", "Professional Quality", "Quick Delivery"],
      gradient: "from-red-500 to-pink-600"
    },
    {
      icon: FileImage,
      title: "Brochure & Menu Design",
      description: "Eye-catching brochures and menu designs for businesses",
      features: ["Print Ready", "Digital Formats", "Brand Aligned", "Creative Layouts"],
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      icon: Music,
      title: "Song Creation",
      description: "Custom AI-generated songs for schools, occasions, and birthdays",
      features: ["School Anthems", "Birthday Songs", "Custom Lyrics", "Professional Quality"],
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      icon: Palette,
      title: "Flyers, Banners & Logo Design",
      description: "Creative design solutions for marketing materials and brand identity",
      features: ["Brand Identity", "Marketing Materials", "Print & Digital", "Custom Designs"],
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: User,
      title: "Custom Portfolio Development",
      description: "Personalized portfolio websites to showcase your work and skills",
      features: ["Personal Branding", "Responsive Design", "Professional Look", "Easy Updates"],
      gradient: "from-emerald-500 to-green-600"
    },
    {
      icon: Wrench,
      title: "AI Consultation",
      description: "Expert consultation on AI implementation and digital transformation",
      features: ["Strategy Planning", "Tool Selection", "Implementation Guide", "Ongoing Support"],
      gradient: "from-violet-500 to-purple-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Services
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground font-poppins max-w-2xl mx-auto">
            🔧 I offer comprehensive digital solutions combining creativity with cutting-edge AI technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="bg-gradient-card border-border/50 shadow-card hover:shadow-neon transition-all duration-300 transform hover:scale-105 group h-full"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-glow-pulse">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-poppins font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground font-poppins mb-4 leading-relaxed text-center">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-poppins font-semibold text-secondary mb-2">
                      ✅ Key Features:
                    </p>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-muted-foreground font-poppins">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-card border border-border/50 rounded-2xl p-8 max-w-4xl mx-auto shadow-card">
            <h3 className="text-2xl font-poppins font-bold text-foreground mb-4">
              Ready to bring your ideas to life?
            </h3>
            <p className="text-lg text-muted-foreground font-poppins mb-6">
              Let's discuss your project and create something amazing together using the power of AI and creative innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:Reshamsherpa1@gmail.com" 
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-primary text-primary-foreground font-poppins font-semibold rounded-lg hover:shadow-neon transition-all duration-300 transform hover:scale-105"
              >
                📧 Email Me
              </a>
              <a 
                href="tel:+9779847262758" 
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-secondary font-poppins font-semibold rounded-lg hover:shadow-neon-green transition-all duration-300 transform hover:scale-105 text-black"
              >
                📞 Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;