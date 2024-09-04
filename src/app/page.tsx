import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Container from "@/components/ui/container";
import Slider from "@/components/ui/slider";

import Link from "next/link"

// Highlight
import { MdOutlineArrowOutward } from "react-icons/md";


// Contact
import { MdOutlineHandshake } from "react-icons/md";
import { MdOutlineAttachEmail } from "react-icons/md";
import { MdOutlineWhatsapp } from "react-icons/md";
import Services from "@/components/ui/services";

const App = () => {
  return (
    <main className="bg-zinc-100">
      <main className="w-screen h-screen">

        {/* Main content */}
        <main className="w-full h-[80%] rounded-b-[10rem] bg-zinc-100">
          <header className="w-full font-light text-zinc-700 h-[11vh] flex justify-between items-center px-44">
            <Link href="/">Potocika.</Link>

            <aside className="flex items-center gap-2 text-sm">
              <Link href="instagram.com" className="hover:underline">Instagram</Link>
              /
              <Link href="facebook.com" className="hover:underline">Facebook</Link>
              /
              <Link href="whatsaap.com" className="hover:underline">Whatsaap</Link>
            </aside>
          </header>

          <section className="w-full h-max mt-14 flex flex-col items-center justify-center gap-8">
            {/* Avatar */}
            <Avatar className="w-28 h-28">
              <AvatarImage src="https://cdn.dribbble.com/users/1160700/avatars/small/f88dc259801e1601ff6c677fd5001d46.png?1677303557" />
              <AvatarFallback className="w-28 h-28 bg-zinc-500 animate-pulse rounded-full"></AvatarFallback>
            </Avatar>

            {/* Highlight */}
            <h1 className="font-[400] w-[30%] text-center leading-[4rem] text-6xl heading">
              Creating professional
              photos, diver, based
              in ambon city.
            </h1>

            <Button className="p-8 px-16 rounded-full flex items-center gap-4">
              Latest diving
              <MdOutlineArrowOutward size={20} />
            </Button>

          </section>
        </main>

        {/* Slider */}
        <Slider className="h-[20%] w-screen bg-white slider-mask" />
      </main>

      {/* Services */}
      <Services />

      {/* Contact me */}
      <Container className="bg-white h-max py-16">
        <main className="w-full flex flex-col items-center justify-center">
          <Button className="bg-zinc-100 rounded-full p-9">
            <MdOutlineHandshake size={60} className="text-zinc-600" />
          </Button>

          <h1 className="font-[400] w-[40%] text-center mt-12 leading-[3rem] text-6xl heading">Tell me more about your next dive</h1>

          <section className="mt-6 flex items-center gap-8">
            <Button className="p-6 rounded-full flex items-center gap-4">
              <MdOutlineAttachEmail size={15} />
              Email me
            </Button>

            <Button className="bg-white text-black border-[2px] border-zinc-200 p-6 rounded-full flex items-center gap-4 hover:bg-zinc-100/90">
              <MdOutlineWhatsapp size={15} />
              Whatsaap
            </Button>
          </section>
        </main>

        <div className="w-full h-[1px] mt-32 bg-zinc-200"></div>

        <section className="w-full mt-8 flex items-center justify-between">
          <p className="text-sm font-light">© {new Date(Date.now()).getFullYear()} All rights reserved.</p>

          <aside className="flex items-center gap-2 text-sm font-light">
            <Link href="instagram.com" className="hover:underline">Instagram</Link>
            /
            <Link href="facebook.com" className="hover:underline">Facebook</Link>
            /
            <Link href="whatsaap.com" className="hover:underline">Whatsaap</Link>
          </aside>
        </section>
      </Container>
    </main>
  )
}

export default App