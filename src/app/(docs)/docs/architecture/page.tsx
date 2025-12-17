import { Card } from "@/components/ui/card";

export default function ArchitecturePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4 border-b border-border pb-8">
        <h1 className="text-3xl font-bold text-foreground">
          Arquitetura de Pastas
        </h1>
        <p className="text-lg text-muted-foreground">
          Entenda como o Next.js App Router e os Route Groups organizam nosso
          projeto.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-foreground">Route Groups</h2>
        <p className="text-muted-foreground">
          Utilizamos grupos de rotas (pastas com parênteses) para separar
          layouts sem afetar a URL final.
        </p>

        <div className="grid gap-4">
          <ArchitectureCard
            title="(public)"
            path="/"
            desc="Contém a Landing Page. Usa um layout com Navbar transparente e Footer."
          />
          <ArchitectureCard
            title="(auth)"
            path="/login, /register"
            desc="Layout limpo e centralizado para formulários de autenticação. Sem sidebar."
          />
          <ArchitectureCard
            title="(dashboard)"
            path="/home, /team, /profile"
            desc="O coração do app. Layout com Sidebar fixa, Header autenticado e proteção de rota."
          />
          <ArchitectureCard
            title="(docs)"
            path="/docs"
            desc="Este layout que você está vendo. Sidebar de leitura e tipografia focada em texto."
          />
        </div>
      </section>

      <section className="space-y-6 pt-6">
        <h2 className="text-xl font-semibold text-foreground">
          Exemplo de Estrutura
        </h2>
        <div className="bg-[#0A0A0B] border border-border rounded-xl p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-blue-300">
            src/app
            <br />
            ├── <span className="text-yellow-400">(auth)</span>
            <br />
            │ ├── login/page.tsx
            <br />
            │ └── layout.tsx
            <br />
            ├── <span className="text-yellow-400">(dashboard)</span>
            <br />
            │ ├── home/page.tsx
            <br />
            │ └── layout.tsx
            <br />
            ├── <span className="text-yellow-400">(docs)</span>
            <br />
            │ └── docs/page.tsx
            <br />
            └── <span className="text-yellow-400">(public)</span>
            <br />
            └── page.tsx
          </pre>
        </div>
      </section>
    </div>
  );
}

function ArchitectureCard({ title, path, desc }: any) {
  return (
    <Card className="p-4 bg-card/50 border-border">
      <div className="flex items-center gap-3 mb-2">
        <code className="bg-primary/20 text-primary px-2 py-1 rounded text-sm font-bold">
          {title}
        </code>
        <span className="text-xs text-muted-foreground font-mono">{path}</span>
      </div>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </Card>
  );
}
