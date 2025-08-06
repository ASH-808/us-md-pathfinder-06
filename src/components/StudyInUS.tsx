import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users, BookOpen, ArrowRight } from "lucide-react";
import hospitalCampus from "@/assets/hospital-campus.jpg";
import clinicalTraining from "@/assets/clinical-training.jpg";

const StudyInUS = () => {
  return (
    <section className="py-20 bg-accent-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Study in U.S. & Clinical Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Immerse yourself in American medical education and gain hands-on experience in world-class facilities
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Campus Life */}
          <Card className="bg-card border-border shadow-lg transition-smooth hover:shadow-xl group overflow-hidden">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={hospitalCampus} 
                alt="U.S. Medical Campus" 
                className="w-full h-full object-cover transition-smooth group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center mb-2">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span className="font-semibold">U.S. Medical Campus</span>
                </div>
              </div>
            </div>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Campus Life in America</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-primary mr-3" />
                  <span className="text-muted-foreground">Diverse international student community</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 text-primary mr-3" />
                  <span className="text-muted-foreground">State-of-the-art medical facilities</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-3" />
                  <span className="text-muted-foreground">Strategic U.S. locations</span>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Explore Campus Life
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Clinical Training */}
          <Card className="bg-card border-border shadow-lg transition-smooth hover:shadow-xl group overflow-hidden">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={clinicalTraining} 
                alt="Clinical Training" 
                className="w-full h-full object-cover transition-smooth group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center mb-2">
                  <Users className="h-5 w-5 mr-2" />
                  <span className="font-semibold">Clinical Rotations</span>
                </div>
              </div>
            </div>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Hands-On Clinical Experience</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-primary mr-3" />
                  <span className="text-muted-foreground">Direct patient interaction</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 text-primary mr-3" />
                  <span className="text-muted-foreground">Advanced medical technology</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-3" />
                  <span className="text-muted-foreground">Top-tier U.S. hospitals</span>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                View Clinical Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StudyInUS;