import Hero from '@/components/Hero'
import BottomNav from '@/components/BottomNav'
import ScrollProgress from '@/components/ScrollProgress'
import Resume from '@/components/Resume'
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Particles from '@/components/Particles'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Particles />
      <ScrollProgress />
      <Hero />
      <Resume />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <BottomNav />
    </main>
  )
}
