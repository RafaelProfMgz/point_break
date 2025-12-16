"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Erro capturado na Dashboard:", error);
  }, [error]);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center min-h-[50vh] animate-fade-in p-6">
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-destructive/20 rounded-full blur-xl animate-pulse" />
        <div className="relative w-20 h-20 bg-card border border-destructive/30 rounded-full flex items-center justify-center text-destructive shadow-lg">
          <AlertTriangle className="w-10 h-10" />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-foreground mb-2">
        Algo deu errado!
      </h2>

      <p className="text-muted-foreground text-center max-w-md mb-8">
        Não conseguimos carregar os dados desta seção. O erro foi registrado e
        nossa equipe já foi notificada.
      </p>

      <div className="flex gap-4">
        <Button
          onClick={() => reset()}
          className="font-bold shadow-lg shadow-primary/20 gap-2"
        >
          <RefreshCcw className="w-4 h-4" />
          Tentar Novamente
        </Button>
      </div>

      <div className="mt-8 p-4 rounded-lg bg-muted/50 border border-border max-w-lg w-full overflow-hidden">
        <p className="text-xs font-mono text-muted-foreground truncate">
          Error: {error.message || "Unknown error"}
        </p>
        {error.digest && (
          <p className="text-xs font-mono text-muted-foreground mt-1">
            Digest: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
