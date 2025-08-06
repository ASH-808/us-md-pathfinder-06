import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const ComparisonTable = () => {
  const comparisons = [
    {
      feature: "Direct U.S. Clinical Rotations",
      miles: true,
      others: false
    },
    {
      feature: "100% U.S. Hospital Placements",
      miles: true,
      others: false
    },
    {
      feature: "Dedicated USMLE Support",
      miles: true,
      others: true
    },
    {
      feature: "Residency Match Assistance",
      miles: true,
      others: false
    },
    {
      feature: "Caribbean Medical Education",
      miles: true,
      others: true
    },
    {
      feature: "Expert Counseling",
      miles: true,
      others: false
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Why Medico International Consultancy Pathway?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            See how our comprehensive approach gives you the competitive edge
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Card className="bg-card border-border shadow-lg overflow-hidden">
            <CardHeader className="bg-primary/5 p-4 sm:p-6">
              <div className="grid grid-cols-3 gap-2 sm:gap-6 text-center">
                <div>
                  <CardTitle className="text-sm sm:text-lg text-muted-foreground">Feature</CardTitle>
                </div>
                <div>
                  <CardTitle className="text-sm sm:text-lg text-primary font-bold">Medico International</CardTitle>
                </div>
                <div>
                  <CardTitle className="text-sm sm:text-lg text-muted-foreground">Other Pathways</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {comparisons.map((item, index) => (
                <div 
                  key={index} 
                  className={`grid grid-cols-3 gap-2 sm:gap-6 p-3 sm:p-4 lg:p-6 border-b border-border last:border-b-0 ${
                    index % 2 === 0 ? 'bg-background' : 'bg-muted/30'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="font-medium text-card-foreground text-xs sm:text-sm lg:text-base leading-tight">
                      {item.feature}
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    {item.miles ? (
                      <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-success/10">
                        <Check className="w-3 h-3 sm:w-5 sm:h-5 text-success" />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-destructive/10">
                        <X className="w-3 h-3 sm:w-5 sm:h-5 text-destructive" />
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-center">
                    {item.others ? (
                      <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-success/10">
                        <Check className="w-3 h-3 sm:w-5 sm:h-5 text-success" />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-destructive/10">
                        <X className="w-3 h-3 sm:w-5 sm:h-5 text-destructive" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;