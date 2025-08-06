import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { useState } from "react";

const CTABanner = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email submitted:", email);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center text-foreground mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Make Your U.S. MBBS Dream Reality
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Take the first step towards your American medical career. Get instant eligibility check and expert guidance.
          </p>
          
          <div className="mb-12">
            <Button variant="cta" size="lg" className="px-8 py-4 text-lg font-semibold shadow-xl">
              Apply Now
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
        
        {/* Quick Inquiry Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-card border-border shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Get Instant Eligibility Check
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Full Name" 
                    className="border-border"
                  />
                  <Input 
                    type="email"
                    placeholder="Email Address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-border"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Phone Number" 
                    className="border-border"
                  />
                  <Input 
                    placeholder="Current Education Level" 
                    className="border-border"
                  />
                </div>
                <Button 
                  type="submit" 
                  variant="success" 
                  size="lg" 
                  className="w-full text-lg font-semibold"
                >
                  Check My Eligibility
                  <ArrowRight className="ml-2" />
                </Button>
              </form>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8 pt-8 border-t border-border">
                <div className="flex items-center text-foreground">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-foreground">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>admissions@medicointl.com</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;