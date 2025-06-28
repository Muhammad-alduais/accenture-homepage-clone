import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import ValueSection from '@/components/ValueSection'
import Awards from '@/components/Awards'
import ServicesSection from '@/components/ServicesSection'
import SolutionsSection from '@/components/SolutionsSection'
import IndustriesSection from '@/components/IndustriesSection'
import ImplementationSection from '@/components/ImplementationSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactSection from '@/components/ContactSection'
import ContentGrid from '@/components/ContentGrid'
import CarouselSection from '@/components/CarouselSection'
import CareersSection from '@/components/CareersSection'
import NewsSection from '@/components/NewsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ValueSection />
        <Awards />
        <ServicesSection />
        <SolutionsSection />
        <IndustriesSection />
        <ImplementationSection />
        <TestimonialsSection />
        <ContentGrid />
        <CarouselSection />
        <CareersSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}