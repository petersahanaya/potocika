import { Button } from "@/components/ui/button"
import Container from "@/components/ui/container";
import Link from "next/link";

import { MdOutlineHandshake } from "react-icons/md";
import { MdOutlineAttachEmail } from "react-icons/md";
import { MdOutlineWhatsapp } from "react-icons/md";

const Contact = () => {
    return (
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
    )
}

export default Contact