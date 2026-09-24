import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { ProblemSection } from './components/sections/ProblemSection'
import { HowItWorksSection } from './components/sections/HowItWorksSection'
import { WhySection } from './components/sections/WhySection'
import { FinalCta } from './components/sections/FinalCta'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <ProblemSection />
        <HowItWorksSection />
        <WhySection />
        <FinalCta />
      </main>

      <Footer />
    </>
  )
}

export default App
