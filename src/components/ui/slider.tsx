import { cn } from "@/lib/utils"
import { Classname } from "@/types/types"

const items = ["Banda", "Salobar", "Tulehu", "Batu"]

const Slider = ({ className }: Classname) => {
    return (
        <section className={cn("w-full h-[20%] overflow-hidden", className)}>
            <div className="w-full h-full flex items-center relative">
                {items.map((item, index) => (
                    <div style={{ "animationDelay": `calc(20s / ${items.length} * (${items.length - index + 1} * -1))` }} className="text-6xl absolute left-[100%] slider" key={item}>
                        {item}
                    </div>
                ))}
            </div>
        </section>
    )
}




export default Slider