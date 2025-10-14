"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <Avatar className="w-32 h-32 md:w-40 md:h-40 lg:w-56 lg:h-56 mx-auto ring-4 ring-primary/20">
          <AvatarImage src="/jeremias-profile.jpg" alt="Jeremías Del Do" />
          <AvatarFallback className="text-3xl bg-primary text-primary-foreground">JD</AvatarFallback>
        </Avatar>

        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">Jeremías Del Do</h1>
        </div>

        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto text-pretty leading-relaxed">
          Diseñador y desarrollador frontend de Argentina. Creo experiencias digitales que combinan estética
          y funcionalidad.
        </p>

        <Button onClick={scrollToContact} size="lg" className="group">
          Hablemos
          <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>
    </section>
  )
}
