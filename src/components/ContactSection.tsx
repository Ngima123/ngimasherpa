import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  Globe, 
  Youtube, 
  MapPin, 
  Send,
  MessageCircle
} from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Reshamsherpa1@gmail.com",
      link: "mailto:Reshamsherpa1@gmail.com",
      color: "text-blue-400"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+977 9847262758",
      link: "tel:+9779847262758",
      color: "text-green-400"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Aathrai Triveni Rural Municipality-4, Taplejung",
      link: "",
      color: "text-yellow-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Contact
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground font-poppins max-w-2xl mx-auto">
            💬 Let's connect and discuss how we can work together to bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-poppins font-bold text-foreground flex items-center">
                  <MessageCircle className="mr-3 h-6 w-6 text-primary" />
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-poppins mb-6 leading-relaxed">
                  I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your visions. 
                  Feel free to reach out through any of the channels below.
                </p>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-center group">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4 group-hover:animate-glow-pulse">
                          <IconComponent className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-poppins font-semibold text-muted-foreground">
                            {info.label}
                          </p>
                          {info.link ? (
                            <a 
                              href={info.link} 
                              className="text-foreground font-poppins hover:text-primary transition-colors break-all"
                              target={info.link.startsWith('http') ? '_blank' : '_self'}
                              rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-foreground font-poppins">
                              {info.value}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="mailto:Reshamsherpa1@gmail.com"
                className="flex items-center justify-center px-6 py-4 bg-gradient-primary text-primary-foreground font-poppins font-semibold rounded-lg hover:shadow-neon transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </a>
              <a 
                href="tel:+9779847262758"
                className="flex items-center justify-center px-6 py-4 bg-gradient-secondary hover:shadow-neon-green transition-all duration-300 transform hover:scale-105 text-black font-poppins font-semibold rounded-lg"
              >
                <Phone className="mr-2 h-5 w-5 text-black" />
                <span className="text-black">Call Now</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-neon transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-poppins font-bold text-foreground">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-poppins font-semibold text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="bg-muted border-border focus:border-primary focus:ring-primary font-poppins"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-poppins font-semibold text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="bg-muted border-border focus:border-primary focus:ring-primary font-poppins"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-poppins font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or how I can help you..."
                    className="bg-muted border-border focus:border-primary focus:ring-primary font-poppins min-h-32"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full font-poppins font-semibold py-4 bg-gradient-primary hover:shadow-neon transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;