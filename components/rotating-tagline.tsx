"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const taglines = ["Fun", "Playful", "Active"]

export function RotatingTagline() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % taglines.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <h2 className="text-3xl md:text-4xl font-bold">
      Making Ageing{" "}
      <span className="inline-block relative h-[0.95em] w-[5rem] md:w-[7rem]">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 2, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute left-0 font-bold bg-gradient-to-r from-blue-500 via-purple-400 to-orange-500 text-transparent bg-clip-text"
          >
            {taglines[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </span>
    </h2>
  )
}