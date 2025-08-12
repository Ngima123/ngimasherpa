import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Globe, Music, Video, FileText } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Tamu Furniture Showroom and Suppliers",
      category: "eCommerce Website",
      description: "Complete furniture showroom website with modern design and inventory management",
      icon: Globe,
      link: "https://tamufurnituretpj.odoo.com",
      tech: ["Furniture Display", "eCommerce", "Inventory Management"],
      status: "Live"
    },
    {
      title: "Buddha Basic School",
      category: "Educational Website",
      description: "School management system with modern interface",
      icon: Globe,
      link: "https://www.buddhabasic-school.edu.np",
      tech: ["School Management", "Education", "Web Development"],
      status: "Live"
    },
    {
      title: "Marketing Video",
      category: "AI Video Production",
      description: "Engaging promotional video showcasing eCommerce platform features",
      icon: Video,
      link: "#",
      tech: ["AI Video", "Marketing", "Visual Effects"],
      status: "Completed"
    },
    {
      title: "Ngima Sherpa Personal Website",
      category: "Portfolio Website",
      description: "My personal website with projects, resume, and contact details.",
      icon: Globe,
      link: "https://www.ngima-sherpa.com.np",
      tech: ["Portfolio", "Branding", "Web Design"],
      status: "Live"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-gradient-secondary text-secondary-foreground";
      case "Completed":
        return "bg-gradient-primary text-primary-foreground";
      case "On Demand":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-card relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Portfolio / My Works
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground font-poppins max-w-2xl mx-auto">
            🎯 Explore my diverse projects showcasing AI integration, web development, and creative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
               <Card
                 key={index}
                 className="bg-card/80 backdrop-blur border border-border/50 shadow-card hover:shadow-neon transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group ring-1 ring-transparent hover:ring-primary/40 animate-fade-in"
                 style={{ animationDelay: `${index * 100}ms` }}
               >
                 <CardHeader>
                   <div className="flex items-center justify-between mb-4">
                     <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:animate-glow-pulse">
                       <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-poppins font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-poppins font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <p className="text-secondary font-poppins font-medium text-sm">
                    {project.category}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground font-poppins mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-poppins"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link !== "#" && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full font-poppins border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      onClick={() => window.open(project.link, '_blank')}
                      aria-label={`View project: ${project.title}`}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground font-poppins mb-6">
            Want to see more projects or collaborate on something amazing?
          </p>
          <Button 
            size="lg" 
            className="font-poppins font-semibold px-8 py-4 bg-gradient-secondary hover:shadow-neon-green transition-all duration-300 transform hover:scale-105"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;