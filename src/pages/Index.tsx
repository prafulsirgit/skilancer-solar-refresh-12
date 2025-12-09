import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { StatsSection } from '@/components/StatsSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { RobotsSection } from '@/components/RobotsSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ClientsSection } from '@/components/ClientsSection';
import { RecognitionsSection } from '@/components/RecognitionsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <AboutSection />
      <ProjectsSection />
      <RobotsSection />
      <ServicesSection />
      <ClientsSection />
      <RecognitionsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
