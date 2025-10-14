import { Card, CardContent } from "@/components/ui/card"
import { Code2, Palette, Layers, Sparkles, Boxes } from "lucide-react"

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
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Habilidades</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Tecnologías y herramientas que domino para crear experiencias excepcionales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <Card
                key={skill.name}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
