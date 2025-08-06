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
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Medico International Consultancy Pathway?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how our comprehensive approach gives you the competitive edge
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-border shadow-lg">
            <CardHeader className="bg-primary/5">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <CardTitle className="text-lg text-muted-foreground">Feature</CardTitle>
                </div>
                <div>
                  <CardTitle className="text-lg text-primary font-bold">Medico International</CardTitle>
                </div>
                <div>
                  <CardTitle className="text-lg text-muted-foreground">Other Pathways</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {comparisons.map((item, index) => (
                <div 
                  key={index} 
                  className={`grid grid-cols-3 gap-6 p-6 border-b border-border last:border-b-0 ${
                    index % 2 === 0 ? 'bg-background' : 'bg-muted/30'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="font-medium text-card-foreground">{item.feature}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    {item.miles ? (
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-success/10">
                        <Check className="w-5 h-5 text-success" />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-destructive/10">
                        <X className="w-5 h-5 text-destructive" />
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-center">
                    {item.others ? (
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-success/10">
                        <Check className="w-5 h-5 text-success" />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-destructive/10">
                        <X className="w-5 h-5 text-destructive" />
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