import Hero from '@/components/sections/Hero'
import Marquee from '@/components/sections/Marquee'
import About from '@/components/sections/About'
import LineageTree from '@/components/sections/LineageTree'
import Technology from '@/components/sections/Technology'
import Capabilities from '@/components/sections/Capabilities'
import Impact from '@/components/sections/Impact'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <LineageTree />
      <Technology />
      <Capabilities />
      <Impact />
      <FinalCTA />
    </>
  )
}
