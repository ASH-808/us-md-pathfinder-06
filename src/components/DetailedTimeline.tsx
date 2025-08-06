import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, BookOpen, GraduationCap, Stethoscope, Award } from "lucide-react";

const DetailedTimeline = () => {
  const timelineSteps = [
    {
      phase: "Pre-Medical Phase",
      duration: "20 Months",
      icon: BookOpen,
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      details: [
        "Complete prerequisite courses (Biology, Chemistry, Physics, Math)",
        "English proficiency development", 
        "MCAT preparation and examination",
        "Medical school application process",
        "Interview preparation and admissions"
      ]
    },
    {
      phase: "Basic Sciences (MD Years 1-2)",
      duration: "2 Years",
      icon: GraduationCap,
      color: "bg-green-500",
      lightColor: "bg-green-50",
      details: [
        "Anatomy, Physiology, Biochemistry foundations",
        "Pathology, Pharmacology, Microbiology",
        "Integrated case-based learning",
        "USMLE Step 1 preparation",
        "Clinical skills introduction"
      ]
    },
    {
      phase: "Clinical Sciences (MD Years 3-4)",
      duration: "2 Years",
      icon: Stethoscope,
      color: "bg-purple-500", 
      lightColor: "bg-purple-50",
      details: [
        "Core clinical rotations in U.S. hospitals",
        "Internal Medicine, Surgery, Pediatrics rotations",
        "Psychiatry, Obstetrics, Family Medicine",
        "USMLE Step 2 CK and CS preparation",
        "Elective rotations in chosen specialties"
      ]
    },
    {
      phase: "Residency Match & Training",
      duration: "3-7 Years",
      icon: Award,
      color: "bg-yellow-500",
      lightColor: "bg-yellow-50", 
      details: [
        "Residency application and Match process",
        "Specialty training in chosen field",
        "Progressive clinical responsibilities",
        "Board certification preparation",
        "Fellowship opportunities (optional)"
      ]
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-accent-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Medico International MBBS-MD U.S. Pathway Timeline
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            A detailed roadmap showing every step of your journey from pre-med to practicing physician in the United States
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Central timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary to-primary-dark transform -translate-x-1/2 hidden lg:block"></div>
            
            {timelineSteps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`relative mb-12 sm:mb-16 lg:mb-24 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                  {/* Timeline node */}
                  <div className="absolute left-1/2 top-8 w-12 h-12 sm:w-16 sm:h-16 transform -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center rounded-full bg-background border-4 border-primary shadow-lg z-10">
                    <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </div>

                  {/* Content card */}
                  <div className={`lg:w-5/12 ${isEven ? 'lg:ml-auto lg:pr-16' : 'lg:pl-16'}`}>
                    <Card className="bg-card border-border shadow-lg transition-smooth hover:shadow-xl">
                      <CardContent className="p-4 sm:p-6 lg:p-8">
                        {/* Mobile icon */}
                        <div className="flex items-center mb-4 sm:mb-6 lg:hidden">
                          <div className={`p-2 sm:p-3 rounded-full ${step.lightColor} mr-3 sm:mr-4`}>
                            <IconComponent className={`h-5 w-5 sm:h-6 sm:w-6 ${step.color.replace('bg-', 'text-')}`} />
                          </div>
                          <div>
                            <div className="text-xs sm:text-sm font-semibold text-primary">Phase {index + 1}</div>
                            <div className="text-lg sm:text-2xl font-bold text-card-foreground">{step.phase}</div>
                          </div>
                        </div>

                        {/* Desktop header */}
                        <div className="hidden lg:block mb-6">
                          <div className="text-sm font-semibold text-primary mb-2">Phase {index + 1}</div>
                          <h3 className="text-2xl font-bold text-card-foreground mb-2">{step.phase}</h3>
                        </div>

                        {/* Duration badge */}
                        <div className="inline-flex items-center mb-4 sm:mb-6">
                          <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-primary mr-2" />
                          <span className="font-semibold text-primary text-sm sm:text-base">{step.duration}</span>
                        </div>

                        {/* Details list */}
                        <ul className="space-y-2 sm:space-y-3">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                              <span className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Summary stats */}
          <div className="mt-12 sm:mt-16 lg:mt-20">
            <Card className="bg-primary text-white shadow-xl">
              <CardContent className="p-6 sm:p-8">
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">Complete Your Journey</h3>
                  <p className="opacity-90 text-sm sm:text-base">From NEET qualifier to U.S. licensed physician</p>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">7-8</div>
                    <div className="text-sm opacity-90">Total Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">100%</div>
                    <div className="text-sm opacity-90">U.S. Clinicals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">95%</div>
                    <div className="text-sm opacity-90">Match Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">$300K+</div>
                    <div className="text-sm opacity-90">Average Salary</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedTimeline;