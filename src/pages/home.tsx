import Hero from '../sections/Hero'
import About from '../sections/About'
import TechStack from '../sections/TechStack'
import FeaturedProjects from '../sections/FeaturedProjects'
import Experience from '../sections/Experience'
import Stats from '../sections/Stats'
import CTA from '../sections/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <FeaturedProjects />
      <Experience />
      <Stats />
      <CTA />
    </>
  )
}
