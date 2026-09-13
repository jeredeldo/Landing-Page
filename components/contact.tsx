"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-primary/5 -skew-y-3 z-[-1]" />
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">
            Contacto
          </h2>
          <p className="text-lg text-muted-foreground text-pretty font-light">
            ¿Tienes un proyecto en mente? Me encantaría escucharte
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="glass-card relative overflow-hidden group border-primary/20 hover:border-primary/50 transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <CardHeader className="relative z-10 text-center pb-2">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(var(--primary),0.3)]">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-3xl font-bold group-hover:text-primary transition-colors">
                Hablemos
              </CardTitle>
              <CardDescription className="text-lg font-light pt-2">
                Estoy disponible para nuevos proyectos y colaboraciones
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 relative z-10 pt-6">
              <div className="text-center space-y-3">
                <a
                  href="mailto:jeremias.deldo@gmail.com"
                  className="inline-block text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground hover:text-primary transition-all hover:scale-105 active:scale-95 drop-shadow-md"
                >
                  jeremias.deldo@gmail.com
                </a>
              </div>

              <Button 
                asChild 
                size="lg" 
                className="w-full text-lg h-16 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_rgba(var(--primary),0.3)] hover:shadow-[0_0_40px_rgba(var(--primary),0.5)] transition-all duration-300 group-hover:-translate-y-1"
              >
                <a href="mailto:jeremias.deldo@gmail.com">
                  <Mail className="mr-3 h-6 w-6" />
                  Enviar Email
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.footer 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 text-center text-sm font-light text-muted-foreground/60"
        >
          <p>© {new Date().getFullYear()} Jeremías Del Do. Todos los derechos reservados.</p>
        </motion.footer>
      </div>
    </section>
  )
}
