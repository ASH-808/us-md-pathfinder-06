import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimonials = () => {
  // Expanded testimonials data for infinite scroll
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Internal Medicine Resident",
      hospital: "Johns Hopkins Hospital",
      image: "/api/placeholder/80/80",
      quote: "The Medico International pathway gave me everything I needed to succeed in U.S. residency. The clinical rotations were invaluable.",
      rating: 5
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Emergency Medicine Resident", 
      hospital: "Mayo Clinic",
      image: "/api/placeholder/80/80",
      quote: "From USMLE prep to residency match, the support was exceptional. I couldn't have done it without this program.",
      rating: 5
    },
    {
      name: "Dr. Priya Patel",
      specialty: "Pediatrics Resident",
      hospital: "Boston Children's Hospital", 
      image: "/api/placeholder/80/80",
      quote: "The direct U.S. clinical experience set me apart in interviews. Highly recommend this pathway to any aspiring physician.",
      rating: 5
    },
    {
      name: "Dr. James Rodriguez",
      specialty: "Cardiology Fellow",
      hospital: "Cleveland Clinic",
      image: "/api/placeholder/80/80",
      quote: "Medico International provided the perfect foundation for my medical career. Now I'm practicing at one of the top hospitals in the country.",
      rating: 5
    },
    {
      name: "Dr. Emily Wong",
      specialty: "Dermatology Resident",
      hospital: "Mount Sinai Hospital",
      image: "/api/placeholder/80/80",
      quote: "The personalized guidance and clinical exposure through Medico International made all the difference in my residency match success.",
      rating: 5
    },
    {
      name: "Dr. David Kim",
      specialty: "Orthopedic Surgery Resident",
      hospital: "UCLA Medical Center",
      image: "/api/placeholder/80/80",
      quote: "Outstanding program that truly prepares you for U.S. medical practice. The clinical rotations were world-class.",
      rating: 5
    },
    {
      name: "Dr. Maria Garcia",
      specialty: "Psychiatry Resident",
      hospital: "Stanford Medical Center",
      image: "/api/placeholder/80/80",
      quote: "Medico International opened doors I never thought possible. The comprehensive support system is unmatched.",
      rating: 5
    },
    {
      name: "Dr. Robert Singh",
      specialty: "Radiology Resident",
      hospital: "Mass General Hospital",
      image: "/api/placeholder/80/80",
      quote: "The transition from Caribbean medical school to U.S. residency was seamless thanks to Medico International's guidance.",
      rating: 5
    },
    {
      name: "Dr. Lisa Thompson",
      specialty: "Family Medicine Resident",
      hospital: "Northwestern Memorial",
      image: "/api/placeholder/80/80",
      quote: "Excellent preparation for USMLE and residency interviews. The clinical experience was invaluable for my success.",
      rating: 5
    },
    {
      name: "Dr. Ahmed Hassan",
      specialty: "Neurology Resident",
      hospital: "NYU Langone Health",
      image: "/api/placeholder/80/80",
      quote: "Medico International transformed my medical career trajectory. Now I'm training at my dream hospital in New York.",
      rating: 5
    }
  ];

  // Create testimonial card component
  const TestimonialCard = ({ testimonial, index }: { testimonial: any, index: number }) => (
    <Card key={index} className="bg-card border-border shadow-lg flex-shrink-0 w-72 sm:w-80 mx-3 sm:mx-4">
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-center mb-3 sm:mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
          ))}
        </div>
        
        <blockquote className="text-muted-foreground mb-4 sm:mb-6 italic leading-relaxed text-sm">
          "{testimonial.quote}"
        </blockquote>
        
        <div className="flex items-center">
          <Avatar className="h-8 w-8 sm:h-10 sm:w-10 mr-2 sm:mr-3">
            <AvatarImage src={testimonial.image} alt={testimonial.name} />
            <AvatarFallback className="bg-primary/10 text-primary font-semibold text-xs sm:text-sm">
              {testimonial.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold text-card-foreground text-xs sm:text-sm">{testimonial.name}</div>
            <div className="text-xs text-primary font-medium">{testimonial.specialty}</div>
            <div className="text-xs text-muted-foreground">{testimonial.hospital}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Success Stories
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from our graduates who are now practicing physicians in top U.S. hospitals
          </p>
        </div>
        
        {/* First scrolling row - Left to Right */}
        <div className="scroll-container mb-6 sm:mb-8 overflow-hidden">
          <div className="flex scroll-left">
            {/* First set of testimonials */}
            {testimonials.slice(0, 5).map((testimonial, index) => (
              <TestimonialCard key={`first-${index}`} testimonial={testimonial} index={index} />
            ))}
            {/* Duplicate for seamless loop */}
            {testimonials.slice(0, 5).map((testimonial, index) => (
              <TestimonialCard key={`first-dup-${index}`} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>

        {/* Second scrolling row - Right to Left */}
        <div className="scroll-container overflow-hidden">
          <div className="flex scroll-right">
            {/* Second set of testimonials */}
            {testimonials.slice(5, 10).map((testimonial, index) => (
              <TestimonialCard key={`second-${index}`} testimonial={testimonial} index={index} />
            ))}
            {/* Duplicate for seamless loop */}
            {testimonials.slice(5, 10).map((testimonial, index) => (
              <TestimonialCard key={`second-dup-${index}`} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-muted-foreground mb-4 text-sm sm:text-base">
            Join hundreds of successful medical graduates
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-primary">95%</div>
              <div className="text-muted-foreground">Match Rate</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Graduates</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-primary">50+</div>
              <div className="text-muted-foreground">Partner Hospitals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;