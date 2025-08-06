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
    <section className="py-20 bg-accent-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Choose Our MBBS-MD Program?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your direct pathway to becoming a licensed physician in the United States
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="transition-smooth hover:shadow-lg hover:scale-105 bg-card border-border">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 rounded-full bg-primary/10">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
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