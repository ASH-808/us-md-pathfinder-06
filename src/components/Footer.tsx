import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { title: "MBBS Program", href: "#" },
    { title: "MD Program", href: "#" },
    { title: "Clinical Rotations", href: "#" },
    { title: "USMLE Prep", href: "#" },
    { title: "Residency Support", href: "#" }
  ];

  const studentResources = [
    { title: "Application Process", href: "#" },
    { title: "Scholarships", href: "#" },
    { title: "Student Life", href: "#" },
    { title: "Career Services", href: "#" },
    { title: "Alumni Network", href: "#" }
  ];

  const legalLinks = [
    { title: "Privacy Policy", href: "#" },
    { title: "Terms of Service", href: "#" },
    { title: "Cookie Policy", href: "#" },
    { title: "Accreditation", href: "#" }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6 text-primary-light">Medico International Consultancy</h3>
            <p className="text-background/80 mb-6 leading-relaxed">
              Your trusted partner in achieving your American medical career dreams. Expert guidance, proven results.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-background/60 hover:text-primary-light cursor-pointer transition-smooth" />
              <Twitter className="h-6 w-6 text-background/60 hover:text-primary-light cursor-pointer transition-smooth" />
              <Instagram className="h-6 w-6 text-background/60 hover:text-primary-light cursor-pointer transition-smooth" />
              <Linkedin className="h-6 w-6 text-background/60 hover:text-primary-light cursor-pointer transition-smooth" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-background">Programs</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-background/80 hover:text-primary-light transition-smooth">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Student Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-background">Student Resources</h4>
            <ul className="space-y-3">
              {studentResources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-background/80 hover:text-primary-light transition-smooth">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-background">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-light mr-3 mt-1 flex-shrink-0" />
                <span className="text-background/80">
                  123 Medical Drive<br />
                  New York, NY 10001
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary-light mr-3" />
                <span className="text-background/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary-light mr-3" />
                <span className="text-background/80">info@medicointl.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-background/20 pt-12 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-background">Ready to Start Your Journey?</h3>
            <p className="text-background/80 mb-6 max-w-2xl mx-auto">
              Join thousands of students who have successfully matched into U.S. residency programs through our pathway.
            </p>
            <Button variant="cta" size="lg" className="bg-primary hover:bg-primary/90">
              Start Your Journey Today
            </Button>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-background/60 text-sm mb-4 md:mb-0">
              © 2024 Medico International Consultancy. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6">
              {legalLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-background/60 hover:text-primary-light text-sm transition-smooth"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;