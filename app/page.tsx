import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Features from "@/components/features"
import Process from "@/components/process"
import Testimonials from "@/components/testimonials"
export default function Home() {
  return (
    <main className="min-h-screen  relative overflow-hidden">
   
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

