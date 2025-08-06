import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Eye } from "lucide-react";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const ResumeSection = () => {
  const generatePDF = async () => {
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    let yPosition = 20;

    // Header
    pdf.setFontSize(24);
    pdf.setFont("helvetica", "bold");
    pdf.text("Ngima Sherpa", pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 10;
    
    pdf.setFontSize(12);
    pdf.setFont("helvetica", "normal");
    pdf.text("AI Journalist & Web Developer", pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 5;
    pdf.text("Taplejung, Nepal", pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 10;

    // Contact Information
    pdf.setFontSize(14);
    pdf.setFont("helvetica", "bold");
    pdf.text("Contact Information", 20, yPosition);
    yPosition += 8;
    
    pdf.setFontSize(10);
    pdf.setFont("helvetica", "normal");
    pdf.text("Email: Reshamsherpa1@gmail.com", 20, yPosition);
    yPosition += 5;
    pdf.text("Phone: +977 9847262758", 20, yPosition);
    yPosition += 5;
    pdf.text("Website: ngimasherpa.odoo.com", 20, yPosition);
    yPosition += 5;
    pdf.text("Location: Aathrai Triveni Rural Municipality-4, Taplejung", 20, yPosition);
    yPosition += 15;

    // Professional Summary
    pdf.setFontSize(14);
    pdf.setFont("helvetica", "bold");
    pdf.text("Professional Summary", 20, yPosition);
    yPosition += 8;
    
    pdf.setFontSize(10);
    pdf.setFont("helvetica", "normal");
    const summary = "Innovative AI Journalist and Web Developer with expertise in creating AI-powered solutions, educational content, and modern web applications. Passionate about leveraging technology to solve real-world problems and enhance digital experiences.";
    const summaryLines = pdf.splitTextToSize(summary, pageWidth - 40);
    pdf.text(summaryLines, 20, yPosition);
    yPosition += summaryLines.length * 5 + 10;

    // Skills
    pdf.setFontSize(14);
    pdf.setFont("helvetica", "bold");
    pdf.text("Skills & Expertise", 20, yPosition);
    yPosition += 8;
    
    pdf.setFontSize(10);
    pdf.setFont("helvetica", "normal");
    const skills = [
      "• AI Journalism & Content Creation",
      "• Web Development (React, TypeScript)",
      "• AI Music & Video Production",
      "• eCommerce Solutions",
      "• Educational Technology",
      "• Digital Marketing",
      "• Project Management"
    ];
    
    skills.forEach(skill => {
      pdf.text(skill, 20, yPosition);
      yPosition += 5;
    });
    yPosition += 10;

    // Recent Projects
    pdf.setFontSize(14);
    pdf.setFont("helvetica", "bold");
    pdf.text("Recent Projects", 20, yPosition);
    yPosition += 8;
    
    pdf.setFontSize(12);
    pdf.setFont("helvetica", "bold");
    pdf.text("Tamu Furniture Showroom and Suppliers", 20, yPosition);
    yPosition += 5;
    pdf.setFontSize(10);
    pdf.setFont("helvetica", "normal");
    pdf.text("Complete furniture showroom website with modern design and inventory management", 20, yPosition);
    pdf.text("Technologies: eCommerce, Inventory Management, Responsive Design", 20, yPosition + 5);
    yPosition += 15;
    
    pdf.setFontSize(12);
    pdf.setFont("helvetica", "bold");
    pdf.text("Buddha Basic School Website", 20, yPosition);
    yPosition += 5;
    pdf.setFontSize(10);
    pdf.setFont("helvetica", "normal");
    pdf.text("School management system with modern interface and educational features", 20, yPosition);
    pdf.text("Technologies: School Management, Education, Web Development", 20, yPosition + 5);
    yPosition += 15;

    // Services
    pdf.setFontSize(14);
    pdf.setFont("helvetica", "bold");
    pdf.text("Services Offered", 20, yPosition);
    yPosition += 8;
    
    pdf.setFontSize(10);
    pdf.setFont("helvetica", "normal");
    const services = [
      "• AI-Powered Content Creation",
      "• Custom Website Development",
      "• eCommerce Solutions",
      "• Educational Technology Consulting",
      "• Digital Marketing Strategy",
      "• SEO & Web Optimization"
    ];
    
    services.forEach(service => {
      pdf.text(service, 20, yPosition);
      yPosition += 5;
    });

    // Footer
    pdf.setFontSize(8);
    pdf.setFont("helvetica", "italic");
    pdf.text("Generated from ngimasherpa.odoo.com", pageWidth / 2, pageHeight - 10, { align: 'center' });

    // Save the PDF
    pdf.save('Ngima_Sherpa_Resume.pdf');
  };

  const previewResume = () => {
    // Create a simple preview window with resume content
    const previewWindow = window.open('', '_blank', 'width=800,height=600');
    if (previewWindow) {
      previewWindow.document.write(`
        <html>
          <head>
            <title>Resume Preview - Ngima Sherpa</title>
            <style>
              body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
              h1 { color: #2563eb; text-align: center; }
              h2 { color: #1e40af; border-bottom: 2px solid #3b82f6; padding-bottom: 5px; }
              .contact { text-align: center; margin: 20px 0; }
              .skills, .projects, .services { margin: 20px 0; }
              ul { list-style-type: none; padding: 0; }
              li { margin: 5px 0; }
            </style>
          </head>
          <body>
            <h1>Ngima Sherpa</h1>
            <div class="contact">
              <p><strong>AI Journalist & Web Developer</strong></p>
              <p>Email: Reshamsherpa1@gmail.com | Phone: +977 9847262758</p>
              <p>Website: ngimasherpa.odoo.com</p>
              <p>Location: Aathrai Triveni Rural Municipality-4, Taplejung</p>
            </div>
            
            <h2>Professional Summary</h2>
            <p>Innovative AI Journalist and Web Developer with expertise in creating AI-powered solutions, educational content, and modern web applications. Passionate about leveraging technology to solve real-world problems and enhance digital experiences.</p>
            
            <h2>Skills & Expertise</h2>
            <div class="skills">
              <ul>
                <li>• AI Journalism & Content Creation</li>
                <li>• Web Development (React, TypeScript)</li>
                <li>• AI Music & Video Production</li>
                <li>• eCommerce Solutions</li>
                <li>• Educational Technology</li>
                <li>• Digital Marketing</li>
                <li>• Project Management</li>
              </ul>
            </div>
            
            <h2>Recent Projects</h2>
            <div class="projects">
              <h3>Tamu Furniture Showroom and Suppliers</h3>
              <p>Complete furniture showroom website with modern design and inventory management</p>
              <p><em>Technologies: eCommerce, Inventory Management, Responsive Design</em></p>
              
              <h3>Buddha Basic School Website</h3>
              <p>School management system with modern interface and educational features</p>
              <p><em>Technologies: School Management, Education, Web Development</em></p>
            </div>
            
            <h2>Services Offered</h2>
            <div class="services">
              <ul>
                <li>• AI-Powered Content Creation</li>
                <li>• Custom Website Development</li>
                <li>• eCommerce Solutions</li>
                <li>• Educational Technology Consulting</li>
                <li>• Digital Marketing Strategy</li>
                <li>• SEO & Web Optimization</li>
              </ul>
            </div>
          </body>
        </html>
      `);
      previewWindow.document.close();
    }
  };
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
                    onClick={generatePDF}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download PDF Resume
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="font-poppins font-semibold px-8 py-4 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground hover:shadow-neon-green transition-all duration-300 transform hover:scale-105"
                    onClick={previewResume}
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