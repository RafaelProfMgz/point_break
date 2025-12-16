import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  MapPin,
  ShieldCheck,
  Zap,
  Smartphone,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import GlassCard from "@/components/landing/GlassCard";

export default function LandingPage() {
  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-150 h-150 bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-200 h-100 bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <section className="relative pt-32 pb-32">
        <div className="container mx-auto px-4 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border backdrop-blur-md text-primary text-xs font-semibold mb-8 shadow-[0_0_20px_rgba(var(--primary),0.3)] animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Sistema 2.0 Disponível
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-foreground drop-shadow-sm">
            O controle de ponto <br />
            <span className="text-transparent bg-clip-text bg-linear-to-t from-primary via-indigo-300 to-blue-400">
              reinventado.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Abandone as planilhas. O <strong>Point Break</strong> une design
            futurista e conformidade jurídica para times que valorizam tempo e
            transparência.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="h-14 px-8 rounded-xl text-lg font-bold shadow-lg shadow-primary/25 transition-all hover:-translate-y-1"
            >
              <Link href="/register">
                Começar Agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 px-8 rounded-xl text-lg font-semibold border-border bg-card/50 text-foreground hover:bg-muted hover:text-foreground backdrop-blur-md transition-all hover:scale-105"
            >
              <Link href="#features">Conhecer Recursos</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Tecnologia que trabalha por você
          </h2>
          <p className="text-muted-foreground">
            Design minimalista, motor robusto.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <GlassCard
            icon={Smartphone}
            title="Mobile First"
            description="Experiência nativa no navegador. Bata o ponto em segundos, sem instalações complexas."
            color="blue"
          />
          <GlassCard
            icon={MapPin}
            title="Geo-Fencing"
            description="Mapeamento preciso. Saiba se o ponto foi batido no escritório ou home-office com exatidão."
            color="purple"
          />
          <GlassCard
            icon={BarChart3}
            title="Metrics Dashboard"
            description="Insights em tempo real. Visualize horas extras e banco de horas com gráficos modernos."
            color="emerald"
          />
        </div>
      </section>

      <section id="advantages" className="container mx-auto px-4 py-20">
        <div className="rounded-[2.5rem] bg-linear-to-b from-card/80 to-transparent border border-border p-8 md:p-20 relative overflow-hidden backdrop-blur-md">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[100px] -z-10" />

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
                Por que migrar para o{" "}
                <span className="text-primary">Point Break?</span>
              </h2>
              <p className="text-muted-foreground mb-10 text-lg">
                Simplificamos a burocracia para que você foque no código e no
                negócio. Segurança jurídica sem interface de 1990.
              </p>

              <ul className="space-y-6">
                {[
                  "Compliance com Portaria 671",
                  "UX/UI de classe mundial",
                  "Backup criptografado na nuvem",
                  "Preço transparente",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="bg-primary/10 p-1 rounded-full">
                      <CheckCircle className="text-primary w-5 h-5" />
                    </div>
                    <span className="font-medium text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-t from-primary to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-card p-8 rounded-2xl border border-border">
                <div className="flex items-center gap-4 mb-8">
                  <ShieldCheck className="w-12 h-12 text-primary" />
                  <div>
                    <h4 className="font-bold text-xl text-card-foreground">
                      Segurança Enterprise
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Seus dados protegidos 24/7
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-8">
                  <Zap className="w-12 h-12 text-yellow-500" />
                  <div>
                    <h4 className="font-bold text-xl text-card-foreground">
                      Performance Extrema
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Zero latência nas batidas
                    </p>
                  </div>
                </div>

                <Button
                  className="w-full font-bold h-12 rounded-xl bg-foreground text-background hover:bg-foreground/90"
                  asChild
                >
                  <Link href="/register">Criar conta agora</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center py-24 px-4 relative">
        <div className="absolute inset-0 bg-linear-to-t from-primary/10 to-transparent -z-10" />
        <h2 className="text-4xl font-bold text-foreground mb-8">
          Pronto para o <span className="text-primary">futuro?</span>
        </h2>
        <div className="flex flex-col items-center gap-6">
          <Button
            asChild
            size="lg"
            className="h-14 px-12 rounded-full text-lg font-bold shadow-lg shadow-primary/20 transition-all"
          >
            <Link href="/register">Acessar Plataforma</Link>
          </Button>
          <p className="text-sm text-muted-foreground">
            Setup instantâneo • Cancele a qualquer momento
          </p>
        </div>
      </section>
    </div>
  );
}
