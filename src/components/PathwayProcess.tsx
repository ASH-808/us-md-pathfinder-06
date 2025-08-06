import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, BookOpen, Stethoscope, Award } from "lucide-react";

const PathwayProcess = () => {
  const steps = [
    {
      icon: BookOpen,
      title: "Pre-Med",
      duration: "20 months",
      description: "Foundation courses and MCAT preparation"
    },
    {
      icon: GraduationCap,
      title: "MD Program", 
      duration: "4 years",
      description: "Complete medical degree with Caribbean excellence"
    },
    {
      icon: Stethoscope,
      title: "U.S. Clinical Rotations",
      duration: "1-2 years",
      description: "Hands-on training in U.S. hospitals"
    },
    {
      icon: Award,
      title: "Residency Placement",
      duration: "3-7 years",
      description: "Matched to U.S. residency programs"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Your Journey to U.S. Medical Practice
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            A clear, structured pathway from pre-med to practicing physician
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary to-primary opacity-30 transform -translate-y-1/2"></div>
          
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="relative bg-card border-border transition-smooth hover:shadow-lg hover:scale-105 z-10">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="mb-4 sm:mb-6 flex justify-center">
                    <div className="p-3 sm:p-4 rounded-full hero-gradient shadow-md">
                      <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-primary mb-2">
                    Step {index + 1}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-card-foreground">
                    {step.title}
                  </h3>
                  <div className="text-base sm:text-lg font-semibold text-success mb-3">
                    {step.duration}
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PathwayProcess;