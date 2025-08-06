import { Card, CardContent } from "@/components/ui/card";
import { Route, HeartHandshake, Stethoscope } from "lucide-react";

const KeyFeatures = () => {
  const features = [
    {
      icon: Route,
      title: "Direct U.S. Pathway",
      description: "Seamless transition from Caribbean medical school to U.S. residency programs with our proven pathway."
    },
    {
      icon: HeartHandshake,
      title: "Expert Licensure Support", 
      description: "Comprehensive USMLE preparation and ongoing support throughout your medical licensing journey."
    },
    {
      icon: Stethoscope,
      title: "All U.S. Clinical Rotations",
      description: "Complete your clinical rotations in top U.S. hospitals, gaining invaluable hands-on experience."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-accent-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Why Choose Our MBBS-MD Program?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Your direct pathway to becoming a licensed physician in the United States
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="transition-smooth hover:shadow-lg hover:scale-105 bg-card border-border group">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="mb-4 sm:mb-6 flex justify-center">
                    <div className="p-3 sm:p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                      <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-card-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {feature.description}
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

export default KeyFeatures;