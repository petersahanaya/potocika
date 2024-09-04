import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Slider from "@/components/ui/slider";
import Link from "next/link"
import { MdOutlineArrowOutward } from "react-icons/md";

const App = () => {
  return (
    <main className="w-screen h-screen ">

      {/* Main content */}
      <main className="w-full h-[80%] rounded-b-[10rem] bg-zinc-100">
        <header className="w-full font-light text-zinc-700 h-[11vh] flex justify-between items-center px-44">
          <h1>Potocika.</h1>

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

          {/* Title */}
          <h1 className="font-[400] w-[30%] text-center leading-[4rem] text-6xl heading">
            Creating professional
            photos, diver, and
            experience.
          </h1>

          <Button className="p-8 px-16 rounded-full flex items-center gap-4">
            Latest diving
            <MdOutlineArrowOutward size={20} />
          </Button>

        </section>
      </main>

      {/* Slider */}
      <Slider className="h-[20%] w-screen" />
    </main>
  )
}

export default App