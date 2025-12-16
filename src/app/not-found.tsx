import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileQuestion, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-background text-foreground">
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-125 h-125 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-[20%] right-[20%] w-150 h-150 bg-blue-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center p-6 animate-fade-in max-w-md mx-auto">
        <div className="w-24 h-24 rounded-3xl bg-card/50 backdrop-blur-xl border border-border flex items-center justify-center mb-8 shadow-2xl shadow-primary/10 transform rotate-6 hover:rotate-0 transition-transform duration-500">
          <FileQuestion className="w-10 h-10 text-primary" />
        </div>

        <h1 className="text-8xl font-mono font-bold text-transparent bg-clip-text bg-linear-to-b from-foreground to-foreground/20 mb-2">
          404
        </h1>

        <h2 className="text-2xl font-bold text-foreground mb-4">
          Página não encontrada
        </h2>

        <p className="text-muted-foreground mb-8 text-lg">
          Parece que você tentou acessar um ponto que não existe no nosso mapa.
        </p>

        <div className="flex flex-col  gap-4 w-full">
          <Button
            asChild
            size="lg"
            className="w-full font-bold shadow-lg shadow-primary/20"
          >
            <Link href="/home">
              <Home className="w-4 h-4 mr-2" />
              Ir para Home
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full border-border bg-card/30 hover:bg-card/50"
          >
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Início
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
