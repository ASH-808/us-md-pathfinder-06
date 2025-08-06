import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import KeyFeatures from "@/components/KeyFeatures";
import PathwayProcess from "@/components/PathwayProcess";
import DetailedTimeline from "@/components/DetailedTimeline";
import ComparisonTable from "@/components/ComparisonTable";
import StudyInUS from "@/components/StudyInUS";
import HospitalsGrid from "@/components/HospitalsGrid";
import Testimonials from "@/components/Testimonials";
import NEETSection from "@/components/NEETSection";
import CTABanner from "@/components/CTABanner";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <KeyFeatures />
      <PathwayProcess />
      <DetailedTimeline />
      <ComparisonTable />
      <StudyInUS />
      <HospitalsGrid />
      <Testimonials />
      <NEETSection />
      <CTABanner />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
