import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Eye } from "lucide-react";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 bg-gradient-card relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground font-poppins max-w-2xl mx-auto">
            📄 Download my latest resume to learn more about my experience and qualifications
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-card border-border/50 shadow-card hover:shadow-neon transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 animate-glow-pulse">
                <FileText className="h-12 w-12 text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl font-poppins font-bold text-foreground mb-4">
                Professional Resume
              </h3>
              
              <p className="text-lg text-muted-foreground font-poppins mb-8 leading-relaxed">
                Get a comprehensive overview of my educational background, skills, experience, 
                and achievements in AI journalism, web development, and creative technology solutions.
              </p>

              <div className="space-y-4">
                <div className="bg-muted rounded-lg p-6">
                  <h4 className="text-lg font-poppins font-semibold text-foreground mb-3">
                    What's included in my resume:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-poppins text-muted-foreground">
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      Educational Background
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      AI & Technical Skills
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      Project Portfolio
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      Service Offerings
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      Contact Information
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      Achievements & Certifications
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button 
                    size="lg" 
                    className="font-poppins font-semibold px-8 py-4 bg-gradient-primary hover:shadow-neon transition-all duration-300 transform hover:scale-105"
                    onClick={() => {
                      // Note: This would need to be connected to an actual resume PDF
                      console.log('Download resume functionality to be implemented');
                    }}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download PDF Resume
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="font-poppins font-semibold px-8 py-4 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground hover:shadow-neon-green transition-all duration-300 transform hover:scale-105"
                    onClick={() => {
                      // Note: This would open a preview of the resume
                      console.log('Preview resume functionality to be implemented');
                    }}
                  >
                    <Eye className="mr-2 h-5 w-5" />
                    Preview Resume
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground font-poppins italic pt-4">
                  Last updated: January 2025 | PDF Format | Professional Layout
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;