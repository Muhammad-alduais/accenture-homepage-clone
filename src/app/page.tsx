import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ContentGrid from '@/components/ContentGrid'
import ValueSection from '@/components/ValueSection'
import CarouselSection from '@/components/CarouselSection'
import Awards from '@/components/Awards'
import CareersSection from '@/components/CareersSection'
import NewsSection from '@/components/NewsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <ContentGrid />
        <ValueSection />
        <CarouselSection />
        <Awards />
        <CareersSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}
