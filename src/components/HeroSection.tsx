import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Award, Globe } from "lucide-react";
import heroImage from "@/assets/hero-medical-students.jpg";
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Responsive Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Your U.S. Medical Journey 
            <span className="block text-primary-light mt-2">Starts Here</span>
          </h1>
          
          {/* Responsive Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-90 font-medium max-w-3xl mx-auto">
            Free expert counseling. Real student success.
          </p>
          
          {/* CTA Button */}
          <div className="mb-8 sm:mb-12">
            <Button variant="hero" size="lg" className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
              Register Now
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
          
          {/* Responsive Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 lg:mt-16">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white p-4 sm:p-6 transition-smooth hover:bg-white/15">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <Award className="h-6 w-6 sm:h-8 sm:w-8 text-primary-light" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">100%</div>
              <div className="text-xs sm:text-sm opacity-90">U.S. Clinicals</div>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white p-4 sm:p-6 transition-smooth hover:bg-white/15">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-primary-light" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">4</div>
              <div className="text-xs sm:text-sm opacity-90">Steps to Residency</div>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white p-4 sm:p-6 transition-smooth hover:bg-white/15 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-primary-light" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Direct</div>
              <div className="text-xs sm:text-sm opacity-90">U.S. Pathway</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;