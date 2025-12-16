import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-primary hover:opacity-90 transition-opacity"
          >
            <Clock className="w-6 h-6" />
            <span>Point Break</span>
          </Link>

          <nav className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            <Link
              href="#features"
              className="hover:text-primary transition-colors duration-200"
            >
              Funcionalidades
            </Link>
            <Link
              href="#advantages"
              className="hover:text-primary transition-colors duration-200"
            >
              Vantagens
            </Link>
            <Link
              href="#pricing"
              className="hover:text-primary transition-colors duration-200"
            >
              Planos
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              asChild
              variant="ghost"
              className="text-muted-foreground hover:text-foreground"
            >
              <Link href="/login">Entrar</Link>
            </Button>

            <Button
              asChild
              className="font-semibold shadow-lg shadow-primary/20"
            >
              <Link href="/register">Criar Conta</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 relative">{children}</main>

      <footer className="bg-muted/20 border-t border-border py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4 text-muted-foreground opacity-50">
            <Clock className="w-5 h-5" />
            <span className="font-bold text-lg">Point Break</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Point Break. Simplificando a gestão de
            tempo.
          </p>
        </div>
      </footer>
    </div>
  );
}
