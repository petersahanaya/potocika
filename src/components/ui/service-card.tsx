import { cn } from "@/lib/utils"
import { ChildrenWithClassName } from "@/types/types"

type ServiceCardProps = {
    title: string
    description: string
} & ChildrenWithClassName

const ServiceCard = ({ children, className, title, description }: ServiceCardProps) => {
    return (
        <div className={cn("flex flex-col gap-4 w-[15rem]", className)}>
            <header className="w-full h-[4rem] flex flex-col gap-2">
                {children}
                <h1 className="text-xl text-zinc-700">{title}</h1>
            </header>
            <p className="font-extralight text-pretty text-sm">{description}</p>
        </div>
    )
}

export default ServiceCard