'use client'

import { ChildrenWithClassName } from "@/types/types"
import { AnimatePresence } from "framer-motion"

const AnimationPresence = ({ children }: ChildrenWithClassName) => {
  return (
    <AnimatePresence mode="wait">{children}</AnimatePresence>
  )
}

export default AnimationPresence
