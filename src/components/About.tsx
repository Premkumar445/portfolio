import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap, Users } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Expert in React, Python, MangoDB and modern web technologies"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces with attention to user experience"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Building fast, scalable applications with best practices"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Strong communication and project management skills"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-bold mb-6">
            About Me
          </h2>
          
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Passionate and ambitious Full Stack Developer With a strong foundation in. 
              Front End & Back End development, and a commitment to creating optimized, efficient soluctions. 
              as a recent graduate. Eager to leaverage my skills in a challenging role which i can contribute to innovative, complex projects and future refine my technical expertise.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Known for my adaptability, collabarative spirit, and drive to deliver high quality 
              results, Ready to add value to a dynamic team and continously expand my knowledge in new technologies 
              
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-4">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Python", "java", "JavaScript", "React.js", "Django", "HTML5", "CSS", "C#",  
                
              ].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-card border border-border rounded-full text-sm hover:bg-secondary transition-smooth"
                >
                  {tech}
                </span>
              ))}
            </div>
            <br></br>
            <h3 className="text-2xl font-semibold mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Git & GitHub", "MangoDB", "Figma", "SAP", "Power BI",
              ].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-card border border-border rounded-full text-sm hover:bg-secondary transition-smooth"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-smooth group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full gradient-secondary group-hover:gradient-primary transition-smooth">
                  <skill.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-smooth" />
                </div>
                <h4 className="font-semibold mb-2">{skill.title}</h4>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;