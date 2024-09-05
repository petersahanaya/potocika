'use client'

import { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"
import Preloader from "./preloader"

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
      document.body.style.cursor = "default"
      window.scrollTo(0, 0)
    }, 2000)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
    </>
  )
}

export default Loader
