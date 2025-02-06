import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Features from "@/components/features"
import Process from "@/components/process"
import Testimonials from "@/components/testimonials"
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-tl from-purple-900/20 to-purple-950/5 relative overflow-hidden">
   
      <div className="h-full w-full absolute inset-0 z-0">
        
      </div>

      <div className="relative z-10">
        <Hero />
        <Features/>
        <Process/>
        <Testimonials/>
      </div>
    </main>
  )
}

