import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_fapxpbl",     // 👉 Replace with your EmailJS service ID
        "template_qsogb3r",    // 👉 Replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "SsyHuFyYInVRD1V9Q"      // 👉 Replace with your EmailJS public key
      )
      .then(() => {
        toast({
          title: "Message Sent!",
          description:
            "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        toast({
          title: "Failed to Send Message",
          description:
            "Please try again later or contact me directly at premkumaropm182@gmail.com.",
          variant: "destructive",
        });
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "premkumaropm182@gmail.com",
      link: "mailto:premkumaropm182@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9344769244",
      link: "tel:+919344769244",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Hosur",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com",
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-3xl font-bold mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear
            from you. Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="transition-smooth focus:shadow-glow"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="transition-smooth focus:shadow-glow"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="transition-smooth focus:shadow-glow"
                  />
                </div>
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:bg-secondary transition-smooth group"
                  >
                    <div className="w-12 h-12 rounded-full gradient-secondary flex items-center justify-center group-hover:gradient-primary transition-smooth">
                      <info.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-smooth" />
                    </div>
                    <div>
                      <div className="font-medium">{info.title}</div>
                      <div className="text-muted-foreground">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full gradient-secondary flex items-center justify-center hover:gradient-primary transition-smooth group"
                  >
                    <social.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-smooth" />
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2">
                Let's Build Something Amazing
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I'm always open to discussing new opportunities, creative
                projects, or potential collaborations. Whether you have a
                specific project in mind or just want to connect, feel free to
                reach out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
