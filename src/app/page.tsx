import Highlight from "@/components/ui/highlight";
import Slider from "@/components/ui/slider";
import Services from "@/components/ui/services";
import Contact from "@/components/ui/contact";

const App = () => {
  return (
    <main className="bg-zinc-100">
      <main className="w-screen h-screen">
        <Highlight />

        <Slider className="h-[20%] w-screen bg-white slider-mask" />
      </main>

      <Services />

      <Contact />
    </main>
  )
}

export default App