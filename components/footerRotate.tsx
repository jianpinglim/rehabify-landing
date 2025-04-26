"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const taglines = ["Fun", "Playful", "Active"]

export function FooterRotate() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % taglines.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <h2 className="text-3xl md:text-4xl font-bold text-center">
      Its Time To Make Ageing{" "}
      {/* Adjusted height and width slightly */}
      <span className="inline-block relative h-[1.1em] w-[5.5rem] md:w-[7.5rem] align-bottom"> 
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }} // Changed y to 0 for better alignment
            exit={{ y: -10, opacity: 0 }} // Adjusted exit y
            transition={{ duration: 0.5 }}
            // Removed text-transparent and bg-clip-text, kept text-[#0015ff]
            className="absolute left-0 font-bold text-[#0015ff]" 
          >
            {taglines[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </span>
    </h2>
  )
}