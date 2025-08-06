import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users, BookOpen, ArrowRight } from "lucide-react";
import hospitalCampus from "@/assets/hospital-campus.jpg";
import clinicalTraining from "@/assets/clinical-training.jpg";

const StudyInUS = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-accent-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Study in U.S. & Clinical Experience
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Immerse yourself in American medical education and gain hands-on experience in world-class facilities
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Campus Life */}
          <Card className="bg-card border-border shadow-lg transition-smooth hover:shadow-xl group overflow-hidden">
            <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
              <img 
                src={hospitalCampus} 
                alt="U.S. Medical Campus" 
                className="w-full h-full object-cover transition-smooth group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  <span className="font-semibold text-sm sm:text-base">U.S. Medical Campus</span>
                </div>
              </div>
            </div>
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-card-foreground">Campus Life in America</h3>
              <div className="space-y-3 sm:space-y-4 mb-6">
                <div className="flex items-center">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">Diverse international student community</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">State-of-the-art medical facilities</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">Strategic U.S. locations</span>
                </div>
              </div>
              <Button variant="outline" className="w-full text-sm sm:text-base">
                Explore Campus Life
                <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Clinical Training */}
          <Card className="bg-card border-border shadow-lg transition-smooth hover:shadow-xl group overflow-hidden">
            <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
              <img 
                src={clinicalTraining} 
                alt="Clinical Training" 
                className="w-full h-full object-cover transition-smooth group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                <div className="flex items-center mb-2">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  <span className="font-semibold text-sm sm:text-base">Clinical Rotations</span>
                </div>
              </div>
            </div>
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-card-foreground">Hands-On Clinical Experience</h3>
              <div className="space-y-3 sm:space-y-4 mb-6">
                <div className="flex items-center">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">Direct patient interaction</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">Advanced medical technology</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">Top-tier U.S. hospitals</span>
                </div>
              </div>
              <Button variant="outline" className="w-full text-sm sm:text-base">
                View Clinical Programs
                <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StudyInUS;