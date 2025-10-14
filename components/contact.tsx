"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Contacto</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            ¿Tienes un proyecto en mente? Me encantaría escucharte
          </p>
        </div>

        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Mail className="w-6 h-6 text-primary" />
              Hablemos
            </CardTitle>
            <CardDescription className="text-base">
              Estoy disponible para nuevos proyectos y colaboraciones
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <p className="text-lg text-muted-foreground">Puedes contactarme directamente por email:</p>
              <a
                href="mailto:jeremias.deldo@gmail.com"
                className="inline-block text-2xl md:text-3xl font-semibold text-primary hover:underline transition-all"
              >
                jeremias.deldo@gmail.com
              </a>
            </div>

            <Button asChild size="lg" className="w-full">
              <a href="mailto:jeremias.deldo@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Enviar Email
              </a>
            </Button>
          </CardContent>
        </Card>

        <footer className="mt-16 text-center text-sm text-muted-foreground">
          <p>© 2025 Jeremías Del Do.</p>
        </footer>
      </div>
    </section>
  )
}
