import { cn } from "@/lib/utils"
import { ChildrenWithClassName } from "@/types/types"

const Container = ({ className, children }: ChildrenWithClassName) => {
    return (
        <main className={cn("w-screen h-screen flex flex-col justify-center items-center px-44", className)}>
            {children}
        </main>
    )
}

export default Container