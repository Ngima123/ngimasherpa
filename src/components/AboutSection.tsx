import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Brain, Lightbulb, Music, Dumbbell, BookOpen } from "lucide-react";

const AboutSection = () => {
  const strengths = [
    {
      icon: Brain,
      title: "Creative Thinking",
      description: "Innovative problem-solving approaches"
    },
    {
      icon: Lightbulb,
      title: "Unique Ideas",
      description: "Out-of-the-box solutions and concepts"
    },
    {
      icon: Dumbbell,
      title: "AI in Fitness",
      description: "Integrating AI with health and wellness"
    },
    {
      icon: GraduationCap,
      title: "AI in Education",
      description: "Transforming learning experiences"
    },
    {
      icon: Music,
      title: "AI in Music",
      description: "Creating and composing with AI"
    }
  ];

  const education = [
    {
      degree: "Bachelor's in Business Studies",
      institution: "Pathivara Multiple Campus",
      status: "3rd Year (Ongoing)",
      year: "Current"
    },
    {
      degree: "+2 Completed",
      institution: "Kanchanjungha Secondary Boarding School",
      status: "Completed",
      year: "2079"
    },
    {
      degree: "SEE Completed",
      institution: "Maiwakhola Higher Secondary School",
      status: "Completed",
      year: "2076"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <Card className="bg-gradient-card border-border/50 shadow-card mb-12 hover:shadow-neon transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-center">
                <p className="text-lg md:text-xl text-foreground leading-relaxed font-poppins mb-6">
                  Hi, I'm <span className="text-primary font-semibold">Ngima Sherpa</span>, a 19-year-old AI journalist from 
                  <span className="text-secondary font-semibold"> Aathrai Triveni Rural Municipality-4, Taplejung</span>.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed font-poppins mb-6">
                  Currently pursuing my Bachelor's in Business Studies (3rd Year) at Pathivara Multiple Campus.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed font-poppins">
                  I've been learning and experimenting with AI tools for the last 3 years through online workshops, 
                  YouTube, books, and articles, constantly pushing the boundaries of what's possible with AI technology.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Strengths */}
          <div className="mb-16">
            <h3 className="text-3xl font-poppins font-bold text-center mb-8">
              💡 <span className="bg-gradient-secondary bg-clip-text text-transparent">My Strengths</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {strengths.map((strength, index) => {
                const IconComponent = strength.icon;
                return (
                  <Card 
                    key={index} 
                    className="bg-gradient-card border-border/50 shadow-card hover:shadow-neon transition-all duration-300 transform hover:scale-105 group"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-glow-pulse">
                        <IconComponent className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <h4 className="text-xl font-poppins font-semibold text-foreground mb-2">
                        {strength.title}
                      </h4>
                      <p className="text-muted-foreground font-poppins">
                        {strength.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-3xl font-poppins font-bold text-center mb-8">
              🎓 <span className="bg-gradient-primary bg-clip-text text-transparent">Education</span>
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card 
                  key={index} 
                  className="bg-gradient-card border-border/50 shadow-card hover:shadow-neon transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex-1">
                        <h4 className="text-xl font-poppins font-semibold text-foreground mb-2">
                          {edu.degree}
                        </h4>
                        <p className="text-lg text-muted-foreground font-poppins mb-1">
                          {edu.institution}
                        </p>
                        <p className="text-secondary font-poppins font-medium">
                          {edu.status}
                        </p>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <span className="inline-block bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-poppins font-medium">
                          {edu.year}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;