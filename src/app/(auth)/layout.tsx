import Link from "next/link";
import { Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-background text-foreground">
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-125 h-125 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-[-10%] left-[-10%] w-150 h-150 bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="absolute top-8 left-8 md:top-12 md:left-12 z-20">
        <Button
          asChild
          variant="ghost"
          className="gap-2 text-muted-foreground hover:text-primary"
        >
          <Link href="/">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>
        </Button>
      </div>

      <div className="flex flex-col items-center gap-8 w-full max-w-md px-4 z-10">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-2xl text-primary"
        >
          <div className="p-2 bg-primary/10 rounded-xl border border-primary/20">
            <Clock className="w-8 h-8" />
          </div>
          <span>Point Break</span>
        </Link>

        {children}
      </div>
    </div>
  );
}
