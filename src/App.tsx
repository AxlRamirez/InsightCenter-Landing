import { Header } from './components/layout/Header'
import { Hero } from './components/sections/Hero'
import { ProblemSection } from './components/sections/ProblemSection'
import { HowItWorksSection } from './components/sections/HowItWorksSection'
import { WhySection } from './components/sections/WhySection'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <ProblemSection />
        <HowItWorksSection />
        <WhySection />
      </main>
    </>
  )
}

export default App
