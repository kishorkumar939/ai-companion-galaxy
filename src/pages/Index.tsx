import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ChatDemo from '@/components/ChatDemo';
import FeaturesSection from '@/components/FeaturesSection';
import UseCasesSection from '@/components/UseCasesSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ChatDemo />
      <FeaturesSection />
      <UseCasesSection />
      <PricingSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;