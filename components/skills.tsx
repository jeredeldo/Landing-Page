"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code2, Palette, Layers, Sparkles, Boxes } from "lucide-react"
import { motion } from "framer-motion"

const skills = [
  {
    name: "HTML",
    icon: Code2,
    description: "Estructura semántica y accesible",
  },
  {
    name: "CSS",
    icon: Palette,
    description: "Diseño responsive y animaciones",
  },
  {
    name: "JavaScript",
    icon: Sparkles,
    description: "Interactividad y lógica moderna",
  },
  {
    name: "React",
    icon: Layers,
    description: "Componentes reutilizables",
  },
  {
    name: "UI Design",
    icon: Boxes,
    description: "Interfaces intuitivas y atractivas",
  },
]

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-primary/5 skew-y-3 z-[-1]" />
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">
            Habilidades
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty font-light">
            Tecnologías y herramientas que domino para crear experiencias excepcionales
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <motion.div key={skill.name} variants={cardVariants}>
                <Card
                  className="group relative overflow-hidden h-full glass-card hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="p-8 space-y-5 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(var(--primary),0.3)]">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold tracking-tight text-foreground/90 group-hover:text-primary transition-colors">
                        {skill.name}
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed font-light">
                        {skill.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
