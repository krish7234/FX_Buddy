import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ForexTicker } from "@/components/forex-ticker"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ForexTicker />
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
