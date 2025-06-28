import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import ValueSection from '@/components/ValueSection'
import ServicesSection from '@/components/ServicesSection'
import IndustriesSection from '@/components/IndustriesSection'
import ImplementationSection from '@/components/ImplementationSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="value">
          <ValueSection />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <section id="industries">
          <IndustriesSection />
        </section>
        <section id="implementation">
          <ImplementationSection />
        </section>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}