import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Highlight
import { MdOutlineArrowOutward } from "react-icons/md";

import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io";
import { MdOutlineWhatsapp } from "react-icons/md";

const Highlight = () => {
  return (
    <main className="w-full h-[80%] rounded-b-[10rem] bg-zinc-100">
      <header className="w-full h-[11vh] font-light text-zinc-700 flex justify-between items-center px-10 md:px-44">
        <Link href="/">Potocika.</Link>

        <aside className="lg:flex hidden items-center gap-2 text-sm">
          <Link href="instagram.com" className="hover:underline">Instagram</Link>
          /
          <Link href="facebook.com" className="hover:underline">Facebook</Link>
          /
          <Link href="whatsaap.com" className="hover:underline">Whatsaap</Link>
        </aside>

        <aside className="flex lg:hidden items-center gap-2 text-sm">
          <Link href="instagram.com" className="hover:underline bg-white rounded-full p-3 transition-opacity hover:opacity-80">
            <IoLogoInstagram size={30} />
          </Link>
          <Link href="facebook.com" className="hover:underline bg-white rounded-full p-3 transition-opacity hover:opacity-80">
            <IoLogoFacebook size={30} />
          </Link>
          <Link href="whatsaap.com" className="hover:underline bg-white rounded-full p-3 transition-opacity hover:opacity-80">
            <MdOutlineWhatsapp size={30} />
          </Link>
        </aside>
      </header>

      <section className="w-full h-max mt-14 flex flex-col items-center justify-center gap-8">
        {/* Avatar */}
        <Avatar className="w-28 h-28">
          <AvatarImage src="https://cdn.dribbble.com/users/1160700/avatars/small/f88dc259801e1601ff6c677fd5001d46.png?1677303557" />
          <AvatarFallback className="w-28 h-28 bg-zinc-500 animate-pulse rounded-full"></AvatarFallback>
        </Avatar>

        {/* Highlight */}
        <h1 className="font-[400] w-[70%] text-4xl sm:text-5xl sm:leading-[3rem] md:text-6xl lg:w-[60%] xl:w-[50%] 2xl:w-[40%] text-center leading-[2rem] lg:leading-[4rem]  heading">
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
  )
}

export default Highlight
