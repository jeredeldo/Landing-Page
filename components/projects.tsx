import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Linkedin } from "lucide-react"

const projects = [
  {
    title: "Banana Over It",
    description: "Juego móvil disponible en Play Store. Una experiencia divertida y desafiante.",
    link: "https://play.google.com/store/apps/details?id=com.BetoCorp.BananaOverIt&hl=es",
    type: "Juego",
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
    link: "https://www.linkedin.com/in/jeremias-del-do-92277a38a/",
    description: "Conecta conmigo profesionalmente",
  },
]

export function Projects() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Proyectos & Perfiles</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Algunos de mis trabajos y dónde puedes encontrarme
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Proyectos Destacados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <Card key={project.title} className="group hover:shadow-lg transition-all duration-300 border-2">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-2xl">{project.title}</CardTitle>
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/20 text-accent-foreground rounded-full">
                          {project.type}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        Ver Proyecto
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Encuéntrame en</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {profiles.map((profile) => {
                const Icon = profile.icon
                return (
                  <Card key={profile.name} className="group hover:shadow-lg transition-all duration-300 border-2">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex-shrink-0">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1 space-y-3">
                          <h4 className="text-xl font-semibold">{profile.name}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{profile.description}</p>
                          <Button asChild variant="link" className="p-0 h-auto text-primary">
                            <a href={profile.link} target="_blank" rel="noopener noreferrer">
                              Visitar perfil →
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
