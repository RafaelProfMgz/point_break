import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldAlert, Lock } from "lucide-react";

export default function Forbidden() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-background text-foreground">
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-150 h-150 bg-destructive/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-[-10%] left-[-10%] w-125 h-125 bg-orange-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center p-6 animate-fade-in max-w-lg mx-auto">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-destructive/20 blur-xl rounded-full" />
          <div className="relative w-24 h-24 rounded-full bg-card/80 backdrop-blur-xl border border-destructive/30 flex items-center justify-center shadow-2xl">
            <Lock className="w-10 h-10 text-destructive" />

            <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center">
              <ShieldAlert className="w-5 h-5 text-orange-500" />
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-foreground mb-4">
          Acesso Negado
        </h1>

        <p className="text-muted-foreground mb-8 text-lg">
          Desculpe, mas você não tem as credenciais necessárias para visualizar
          esta área confidencial do <strong>Point Break</strong>.
        </p>

        <div className="p-4 rounded-xl bg-destructive/5 border border-destructive/10 mb-8 w-full">
          <p className="text-xs text-destructive font-mono uppercase tracking-widest">
            Error Code: 403 Forbidden
          </p>
        </div>

        <Button asChild size="lg" className="min-w-50 font-bold">
          <Link href="/home">Voltar para Segurança</Link>
        </Button>
      </div>
    </div>
  );
}
