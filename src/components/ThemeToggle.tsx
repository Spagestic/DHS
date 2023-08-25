// app/components/ThemeToggle.tsx
"use client";
import Image from 'next/image'
import { motion } from "framer-motion";
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div className="rounded">
      <motion.button 
      initial={{ rotate: -100, scale: 0, opacity: 0 }}
      animate={{ rotate: 0, scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? 
          <Image
          src="/sun.svg"
          alt="sun icon"
          className="dark:invert mt-1"
          width={24}
          height={24}
          priority
          />
          : 
          <Image
          src="/moon.svg"
          alt="moon icon"
          className="dark:invert mt-1"
          width={24}
          height={24}
          priority
          />
          }
      </motion.button>
    </div>
  )
};
