import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Award, Globe } from "lucide-react";
import heroImage from "@/assets/hero-medical-students.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your U.S. Medical Journey 
            <span className="block text-primary-light">Starts Here</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 font-medium">
            Free expert counseling. Real student success.
          </p>
          
          <div className="mb-12">
            <Button variant="hero" size="lg" className="px-8 py-4 text-lg">
              Register Now
              <ArrowRight className="ml-2" />
            </Button>
          </div>
          
          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white p-6">
              <div className="flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-primary-light" />
              </div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-sm opacity-90">U.S. Clinicals</div>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white p-6">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-primary-light" />
              </div>
              <div className="text-3xl font-bold mb-2">4</div>
              <div className="text-sm opacity-90">Steps to Residency</div>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white p-6">
              <div className="flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-primary-light" />
              </div>
              <div className="text-3xl font-bold mb-2">Direct</div>
              <div className="text-sm opacity-90">U.S. Pathway</div>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;