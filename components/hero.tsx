"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center space-y-8 z-10"
      >
        <motion.div variants={itemVariants} className="relative inline-block">
          <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl scale-125 animate-pulse" />
          <Avatar className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto ring-4 ring-primary/40 shadow-2xl shadow-primary/20">
            <AvatarImage src="/jeremias-profile.jpg" alt="Jeremías Del Do" className="object-cover" />
            <AvatarFallback className="text-3xl bg-secondary text-primary-foreground font-bold">JD</AvatarFallback>
          </Avatar>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-balance bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/50">
            Jeremías Del Do
          </h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed font-light">
            Diseñador y desarrollador frontend de Argentina. Desarrollo experiencias digitales que combinan estética y funcionalidad.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="group relative overflow-hidden rounded-full px-8 py-6 text-lg font-medium bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 shadow-[0_0_40px_8px_rgba(var(--primary),0.3)] hover:shadow-[0_0_60px_12px_rgba(var(--primary),0.4)]"
          >
            Hablemos
            <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
