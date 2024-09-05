
import { motion } from "framer-motion"
import { fadeIn, slideUp } from "@/lib/animations"
import { useEffect, useState } from "react";

const words = [
  "Hello",
  "Bonjour",
  "Ciao",
  "Olà",
  "やあ",
  "Hallå",
  "Guten tag",
  "Halo",
];

const Preloader = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 100,
    );
  }, [index]);

  return (
    <motion.main variants={slideUp} initial="initial" exit="exit" className="w-screen h-screen fixed top-0 left-0 z-20 bg-zinc-200 flex justify-center items-center text-7xl text-zinc-800">
      <motion.p variants={fadeIn}>{words[index]}</motion.p>
    </motion.main>

  )
}

export default Preloader
