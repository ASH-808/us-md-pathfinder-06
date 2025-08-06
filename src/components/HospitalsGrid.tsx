import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Award, Building } from "lucide-react";
import johnsHopkins from "@/assets/johns-hopkins-hospital.jpg";
import mayoClinic from "@/assets/mayo-clinic.jpg";
import clevelandClinic from "@/assets/cleveland-clinic.jpg";
import massGeneral from "@/assets/mass-general.jpg";
import uclamedical from "@/assets/ucla-medical.jpg";
import nyuLangone from "@/assets/nyu-langone.jpg";
import stanfordMedical from "@/assets/stanford-medical.jpg";
import mountSinai from "@/assets/mount-sinai.jpg";

const HospitalsGrid = () => {
  const hospitals = [
    {
      name: "Johns Hopkins Hospital",
      location: "Baltimore, MD",
      students: "45+ Students",
      specialties: ["Internal Medicine", "Surgery", "Emergency Medicine"],
      image: johnsHopkins,
      tier: "Top Tier"
    },
    {
      name: "Mayo Clinic",
      location: "Rochester, MN",
      students: "38+ Students", 
      specialties: ["Cardiology", "Oncology", "Neurology"],
      image: mayoClinic,
      tier: "Premier"
    },
    {
      name: "Cleveland Clinic",
      location: "Cleveland, OH",
      students: "52+ Students",
      specialties: ["Cardiology", "Orthopedics", "Urology"],
      image: clevelandClinic,
      tier: "Top Tier"
    },
    {
      name: "Mass General Hospital",
      location: "Boston, MA", 
      students: "41+ Students",
      specialties: ["Radiology", "Psychiatry", "Dermatology"],
      image: massGeneral,
      tier: "Premier"
    },
    {
      name: "UCLA Medical Center",
      location: "Los Angeles, CA",
      students: "47+ Students",
      specialties: ["Pediatrics", "Orthopedics", "Neurosurgery"],
      image: uclamedical,
      tier: "Top Tier"
    },
    {
      name: "NYU Langone Health",
      location: "New York, NY",
      students: "39+ Students",
      specialties: ["Family Medicine", "Internal Medicine", "Surgery"],
      image: nyuLangone,
      tier: "Premier"
    },
    {
      name: "Stanford Medical Center",
      location: "Stanford, CA",
      students: "35+ Students",
      specialties: ["Psychiatry", "Radiology", "Emergency Medicine"],
      image: stanfordMedical,
      tier: "Elite"
    },
    {
      name: "Mount Sinai Hospital",
      location: "New York, NY",
      students: "44+ Students",
      specialties: ["Dermatology", "Cardiology", "Oncology"],
      image: mountSinai,
      tier: "Top Tier"
    }
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "Elite": return "text-yellow-600 bg-yellow-50";
      case "Premier": return "text-blue-600 bg-blue-50";
      case "Top Tier": return "text-green-600 bg-green-50";
      default: return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Complete Clinical Rotations in USA
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Train at America's top-ranked hospitals and medical centers. Our partnerships with premier healthcare institutions ensure you receive world-class clinical experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {hospitals.map((hospital, index) => (
            <Card key={index} className="bg-card border-border transition-smooth hover:shadow-lg hover:scale-105 group overflow-hidden">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img 
                  src={hospital.image} 
                  alt={hospital.name}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getTierColor(hospital.tier)}`}>
                    {hospital.tier}
                  </span>
                </div>
                <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 text-white">
                  <h3 className="font-bold text-xs sm:text-sm mb-1 leading-tight">{hospital.name}</h3>
                  <div className="flex items-center text-xs opacity-90">
                    <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
                    <span className="truncate">{hospital.location}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-3 sm:p-4">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <div className="flex items-center text-primary text-xs sm:text-sm font-medium">
                    <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    <span>{hospital.students}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Building className="h-3 w-3 sm:h-4 sm:w-4" />
                  </div>
                </div>
                
                <div className="space-y-1">
                  {hospital.specialties.slice(0, 2).map((specialty, idx) => (
                    <div key={idx} className="text-xs text-muted-foreground">
                      • {specialty}
                    </div>
                  ))}
                  {hospital.specialties.length > 2 && (
                    <div className="text-xs text-primary font-medium">
                      +{hospital.specialties.length - 2} more specialties
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Partner Hospitals</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-xs sm:text-sm text-muted-foreground">U.S. Based Rotations</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">300+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Students Placed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">25+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Medical Specialties</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalsGrid;