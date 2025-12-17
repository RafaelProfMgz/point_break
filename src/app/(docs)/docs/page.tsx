import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function DocsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4 border-b border-border pb-8">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
          Documentação Point Break
        </h1>
        <p className="text-xl text-muted-foreground">
          Guia completo sobre a arquitetura, design system e funcionalidades do
          sistema.
        </p>
      </div>

      <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
        <p>
          O <strong>Point Break</strong> é um sistema de controle de ponto SaaS
          construído com as tecnologias mais modernas do ecossistema React. Esta
          documentação visa ajudar novos desenvolvedores a entenderem a
          estrutura e contribuírem com o projeto.
        </p>

        <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
          Stack Tecnológica
        </h3>
        <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
          {[
            "Next.js 15 (App Router)",
            "Tailwind CSS v4",
            "Shadcn/ui (Componentes)",
            "Lucide React (Ícones)",
            "PostHog (Analytics)",
            "TypeScript (Tipagem)",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-border"
            >
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">{item}</span>
            </li>
          ))}
        </ul>

        <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
          Começando
        </h3>
        <p>
          Para rodar o projeto localmente, siga os passos de instalação ou
          navegue pela arquitetura para entender como organizamos as pastas.
        </p>

        <div className="flex gap-4 pt-4">
          <Button asChild className="font-bold shadow-lg shadow-primary/20">
            <Link href="/docs/architecture">
              Ver Arquitetura <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-border">
            <Link href="/home">Ir para o App</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
