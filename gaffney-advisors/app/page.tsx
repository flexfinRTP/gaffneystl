import Hero from './components/hero'
import TrustIndicators from './components/trust-indicators'
import ServicesSection from './components/ServicesSection'
import NewsletterSignup from './components/newsletter-signup'
import QuestionnaireHero from './components/QuestionnaireHero'
import HappyRetirement from './components/HappyRetirement'

export default function Home() {
  return (
    <>
      <Hero />
   
      {/* <TrustIndicators /> */}
      <ServicesSection />
      <QuestionnaireHero />
      <NewsletterSignup />
      <HappyRetirement />
    </>
  )
} 