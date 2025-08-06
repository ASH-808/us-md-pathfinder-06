import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Users, Award, Globe, Star } from "lucide-react";
import { useState } from "react";
import medicalStudentsBg from "@/assets/medical-students-bg.jpg";

const NEETSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    neetScore: "",
    state: "",
    qualification: "",
    agreeTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("NEET Form submitted:", formData);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${medicalStudentsBg})` }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center text-white mb-16">
          <div className="flex items-center justify-center mb-6">
            <Star className="h-8 w-8 text-yellow-400 mr-3" />
            <span className="text-yellow-400 font-semibold text-lg">NEET Qualified Students</span>
            <Star className="h-8 w-8 text-yellow-400 ml-3" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            The American Dream is Now
            <span className="block text-yellow-400">A Reality for NEET Qualifiers</span>
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
            Convert your NEET qualification into a U.S. medical career. Join thousands of Indian students who are now practicing physicians in America.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Benefits Section */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-yellow-400">Why Choose Medico International for NEET Qualifiers?</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-yellow-400/20 mr-4 flex-shrink-0">
                      <Globe className="h-6 w-6 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Direct U.S. Pathway</h4>
                      <p className="text-white/80 text-sm">Skip the uncertainty. Our pathway leads directly to U.S. medical practice with guaranteed clinical rotations.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-yellow-400/20 mr-4 flex-shrink-0">
                      <Users className="h-6 w-6 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">NEET Score Recognition</h4>
                      <p className="text-white/80 text-sm">Your NEET qualification is valued and recognized in our admission process for Caribbean medical schools.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-yellow-400/20 mr-4 flex-shrink-0">
                      <Award className="h-6 w-6 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">95% Match Rate</h4>
                      <p className="text-white/80 text-sm">Our students achieve exceptional residency match rates in top U.S. hospitals and medical centers.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 rounded-lg bg-yellow-400/10 border border-yellow-400/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">₹25,00,000+</div>
                    <div className="text-sm text-white/80">Average Annual Salary for U.S. Physicians</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Registration Form */}
          <Card className="bg-white border-0 shadow-2xl">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-foreground">
                Register for NEET Qualifier Program
              </CardTitle>
              <p className="text-muted-foreground">
                Get instant eligibility assessment and counseling
              </p>
            </CardHeader>
            
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Full Name</label>
                    <Input 
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="border-border"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email Address</label>
                    <Input 
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="border-border"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Phone Number</label>
                    <Input 
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="border-border"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">NEET Score</label>
                    <Input 
                      placeholder="Enter your NEET score"
                      value={formData.neetScore}
                      onChange={(e) => setFormData({...formData, neetScore: e.target.value})}
                      className="border-border"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">State</label>
                    <Select onValueChange={(value) => setFormData({...formData, state: value})}>
                      <SelectTrigger className="border-border">
                        <SelectValue placeholder="Select your state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="maharashtra">Maharashtra</SelectItem>
                        <SelectItem value="karnataka">Karnataka</SelectItem>
                        <SelectItem value="delhi">Delhi</SelectItem>
                        <SelectItem value="gujarat">Gujarat</SelectItem>
                        <SelectItem value="rajasthan">Rajasthan</SelectItem>
                        <SelectItem value="up">Uttar Pradesh</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Current Qualification</label>
                    <Select onValueChange={(value) => setFormData({...formData, qualification: value})}>
                      <SelectTrigger className="border-border">
                        <SelectValue placeholder="Select qualification" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="12th-completed">12th Completed</SelectItem>
                        <SelectItem value="12th-appearing">12th Appearing</SelectItem>
                        <SelectItem value="gap-year">Gap Year</SelectItem>
                        <SelectItem value="graduate">Graduate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="terms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => setFormData({...formData, agreeTerms: checked as boolean})}
                  />
                  <label htmlFor="terms" className="text-sm text-muted-foreground">
                    I agree to the Terms & Conditions and Privacy Policy
                  </label>
                </div>

                <Button 
                  type="submit" 
                  variant="cta" 
                  size="lg" 
                  className="w-full text-lg font-semibold"
                  disabled={!formData.agreeTerms}
                >
                  Get Free Counseling Session
                  <ArrowRight className="ml-2" />
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  ✓ Free counseling session • ✓ No obligation • ✓ Expert guidance
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NEETSection;