import { Header } from './components/layout/Header'
import { Hero } from './components/sections/Hero'
import { ProblemSection } from './components/sections/ProblemSection'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <ProblemSection />
      </main>
    </>
  )
}

export default App
