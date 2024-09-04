import { ReactNode } from "react"

export type ChildrenWithClassName = {
    children: ReactNode
} & Classname

export type Classname = {
    className?: string
}