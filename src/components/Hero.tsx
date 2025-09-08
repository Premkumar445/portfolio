import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1
        }}
      />
      <br />
      <div className="gradient-hero absolute inset-0 z-0" />
      
      <div className="container mx-auto px-6 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 transition-smooth">
            <p className="text-xl md:text-5xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Hi, I'm Premkumar
            </p>
          </h1>
          
          <p className="text-xl md:text-1xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Computer Science And Engineering Student <br /> 
            A Final Year undergraduate engineering student at <br />
            Adhiyamaan College Of Engineering, Hosur.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="hero"
              size="xl"
              onClick={() => scrollToSection('projects')}
              className="group"
            >
              View My Work
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <Button 
              variant="professional" 
              size="xl"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </Button>

            {/* ✅ DOWNLOAD CV BUTTON WITH LINK */}
            <a 
              href="/Premkumar_Resume.pdf" 
              download 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                size="xl"
                className="border-primary/30 hover:border-primary/60"
              >
                <Download className="w-5 h-5" />
                Download CV
              </Button>
            </a>
          </div>
          
          <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">3+</div>
              <div>Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">10+</div>
              <div>Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div>Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
