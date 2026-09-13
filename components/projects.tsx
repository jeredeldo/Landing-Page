"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Albion-Web",
    description: "Aplicación web y herramientas para la comunidad de Albion Online.",
    link: "https://github.com/jeredeldo/Albion-Web",
    type: "Web App",
  },
  {
    title: "TiendaNew",
    description: "Plataforma de comercio electrónico moderna y completa.",
    link: "https://github.com/jeredeldo/TiendaNew",
    type: "E-commerce",
  },
]

const profiles = [
  {
    name: "GitHub",
    icon: Github,
    link: "https://github.com/jeredeldo",
    description: "Explora mis proyectos de código abierto",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/jerem%C3%ADas-del-do-92277a38a/",
    description: "Conecta conmigo profesionalmente",
  },
]

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto space-y-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty font-light">
            Algunos de mis trabajos y dónde puedes encontrarme
          </p>
        </motion.div>

        <div className="space-y-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-2xl font-bold mb-8 pl-4 border-l-4 border-primary">Mis Trabajos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <motion.div key={project.title} variants={itemVariants}>
                  <Card className="group glass-card h-full flex flex-col justify-between overflow-hidden relative hover:border-primary/50 transition-all duration-500 hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <CardHeader className="relative z-10">
                      <div className="flex items-start justify-between">
                        <div className="space-y-3">
                          <CardTitle className="text-3xl font-bold tracking-tight group-hover:text-primary transition-colors">
                            {project.title}
                          </CardTitle>
                          <span className="inline-block px-4 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full uppercase tracking-wider shadow-[0_0_10px_rgba(var(--primary),0.2)]">
                            {project.type}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6 relative z-10 mt-auto">
                      <CardDescription className="text-base text-muted-foreground leading-relaxed font-light">
                        {project.description}
                      </CardDescription>
                      <Button
                        asChild
                        className="w-full bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground transition-all duration-300 font-medium py-6"
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          Ver Proyecto
                          <ExternalLink className="ml-2 h-5 w-5" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-2xl font-bold mb-8 pl-4 border-l-4 border-primary">Encuéntrame en</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {profiles.map((profile) => {
                const Icon = profile.icon
                return (
                  <motion.div key={profile.name} variants={itemVariants}>
                    <Card className="group glass-card hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      <CardContent className="p-8 relative z-10">
                        <div className="flex items-center gap-6">
                          <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-[0_0_20px_rgba(var(--primary),0.4)] flex-shrink-0">
                            <Icon className="w-8 h-8 text-secondary-foreground group-hover:text-primary-foreground transition-colors" />
                          </div>
                          <div className="flex-1 space-y-2">
                            <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">{profile.name}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed font-light">{profile.description}</p>
                            <Button asChild variant="link" className="p-0 h-auto text-primary font-semibold hover:text-primary/80">
                              <a href={profile.link} target="_blank" rel="noopener noreferrer">
                                Visitar perfil →
                              </a>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
