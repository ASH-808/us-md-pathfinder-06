import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Menu, X, Phone, Mail, MessageCircle } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showQuickContact, setShowQuickContact] = useState(false);
  const [quickContactData, setQuickContactData] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const navItems = [
    { title: "Programs", href: "#programs" },
    { title: "Timeline", href: "#timeline" },
    { title: "Clinical Rotations", href: "#clinicals" },
    { title: "Success Stories", href: "#testimonials" },
    { title: "NEET Program", href: "#neet" },
    { title: "FAQ", href: "#faq" },
    { title: "Contact", href: "#contact" }
  ];

  const handleQuickContact = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quick contact submitted:", quickContactData);
    setShowQuickContact(false);
    // Reset form
    setQuickContactData({ name: "", phone: "", email: "" });
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-background/98 backdrop-blur-lg border-b border-border/50 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            {/* Logo Section - Responsive */}
            <div className="flex-shrink-0 min-w-0">
              <img 
                src="/lovable-uploads/28d52c5e-c9cb-4e7c-82e1-0165693864fe.png" 
                alt="Medico International Consultancy" 
                className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain"
              />
            </div>

            {/* Desktop Navigation - Medium screens and up */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-foreground/90 hover:text-primary transition-smooth font-medium text-xs lg:text-sm relative group py-2 whitespace-nowrap"
                  >
                    {item.title}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop Contact & Actions - Large screens */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              {/* Contact Info - Only on XL screens */}
              <div className="hidden xl:flex items-center space-x-4 text-muted-foreground text-xs border-r border-border/30 pr-4">
                <div className="flex items-center space-x-1 hover:text-primary transition-smooth cursor-pointer">
                  <Phone className="h-3 w-3" />
                  <span className="font-medium">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-1 hover:text-primary transition-smooth cursor-pointer">
                  <Mail className="h-3 w-3" />
                  <span className="font-medium">info@medicointl.com</span>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex items-center space-x-2 lg:space-x-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setShowQuickContact(true)}
                  className="border-primary/20 hover:border-primary hover:bg-primary/5 text-xs lg:text-sm px-3 lg:px-4"
                >
                  <MessageCircle className="h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2" />
                  <span className="hidden lg:inline">Quick Contact</span>
                  <span className="lg:hidden">Contact</span>
                </Button>
                <Button variant="cta" size="sm" className="px-4 lg:px-6 text-xs lg:text-sm">
                  Get Started
                </Button>
              </div>
            </div>

            {/* Mobile/Tablet Actions */}
            <div className="md:hidden flex items-center space-x-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowQuickContact(true)}
                className="p-2 border-primary/20 hover:border-primary hover:bg-primary/5"
              >
                <MessageCircle className="h-4 w-4" />
              </Button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground hover:text-primary transition-smooth p-2 hover:bg-primary/5 rounded-lg"
              >
                {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
              </button>
            </div>

            {/* Tablet Only Actions */}
            <div className="hidden md:flex lg:hidden items-center space-x-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowQuickContact(true)}
                className="border-primary/20 hover:border-primary hover:bg-primary/5 text-xs px-3"
              >
                <MessageCircle className="h-4 w-4 mr-1" />
                Contact
              </Button>
              <Button variant="cta" size="sm" className="px-4 text-xs">
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
              <div className="px-4 py-4 space-y-3">
                {/* Mobile Navigation Links */}
                <div className="space-y-1">
                  {navItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="block px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 transition-smooth font-medium rounded-lg text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
                
                {/* Mobile Contact Info */}
                <div className="border-t border-border/30 pt-4 space-y-2">
                  <div className="flex items-center space-x-2 text-muted-foreground text-sm px-4">
                    <Phone className="h-4 w-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground text-sm px-4">
                    <Mail className="h-4 w-4" />
                    <span>info@medicointl.com</span>
                  </div>
                </div>
                
                {/* Mobile Action Buttons */}
                <div className="border-t border-border/30 pt-4 space-y-3 px-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-primary/20 hover:border-primary hover:bg-primary/5"
                    onClick={() => {
                      setShowQuickContact(true);
                      setIsMenuOpen(false);
                    }}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Quick Contact
                  </Button>
                  <Button variant="cta" size="sm" className="w-full">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Quick Contact Modal */}
      {showQuickContact && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md bg-card border-border shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-card-foreground">Quick Contact</h3>
                <button
                  onClick={() => setShowQuickContact(false)}
                  className="text-muted-foreground hover:text-foreground transition-smooth"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <form onSubmit={handleQuickContact} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                  <Input
                    placeholder="Your full name"
                    value={quickContactData.name}
                    onChange={(e) => setQuickContactData({...quickContactData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                  <Input
                    placeholder="Your phone number"
                    value={quickContactData.phone}
                    onChange={(e) => setQuickContactData({...quickContactData, phone: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={quickContactData.email}
                    onChange={(e) => setQuickContactData({...quickContactData, email: e.target.value})}
                    required
                  />
                </div>
                <Button type="submit" variant="cta" className="w-full">
                  Request Callback
                </Button>
              </form>
              
              <div className="text-center text-sm text-muted-foreground mt-4">
                We'll call you within 24 hours
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default Navigation;