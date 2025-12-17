"use client";

import { useState, useEffect, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Fingerprint, Moon, Sun, Loader2 } from "lucide-react";
import { usePostHog } from "posthog-js/react";
import { toast } from "sonner";

type Punch = {
  id: string;
  timestamp: string;
  type: string;
};

export default function DashboardHome() {
  const posthog = usePostHog();
  const [time, setTime] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [punches, setPunches] = useState<Punch[]>([]);

  const isWorking = punches.length > 0 && punches[0].type === "ENTRY";

  const fetchPunches = useCallback(async () => {
    try {
      const res = await fetch("/api/punch");
      if (res.ok) {
        const data = await res.json();
        setPunches(data);
      }
    } catch (error) {
      console.error("Erro ao carregar pontos", error);
    }
  }, []);

  useEffect(() => {
    fetchPunches();
  }, [fetchPunches]);

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handlePunch = async () => {
    setLoading(true);

    const now = new Date().toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const actionLabel = isWorking ? "Saída" : "Entrada";

    try {
      const res = await fetch("/api/punch", { method: "POST" });

      if (res.ok) {
        await fetchPunches();
        posthog.capture("ponto_registrado", {
          tipo: actionLabel,
          horario: now,
          modo: "web",
        });
      } else {
        toast.error("Erro ao registrar ponto. Tente novamente.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro de conexão.");
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (isoString: string) => {
    return new Date(isoString).toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="flex flex-col items-center gap-12 py-8 animate-fade-in">
      <div className="text-center space-y-2">
        <h2 className="text-4xl md:text-6xl font-mono font-bold tracking-tight text-foreground drop-shadow-sm">
          {time || "--:--"}
        </h2>
        <p className="text-muted-foreground capitalize">
          {new Date().toLocaleDateString("pt-BR", {
            weekday: "long",
            day: "numeric",
            month: "long",
          })}
        </p>
      </div>

      <div className="relative flex items-center justify-center">
        <div
          className={`absolute inset-0 rounded-full blur-[60px] transition-all duration-700 opacity-20 group-hover:opacity-40 scale-75 ${
            isWorking ? "bg-destructive" : "bg-emerald-500"
          }`}
        />

        <div
          className={`absolute inset-0 rounded-full border opacity-30 animate-pulse-glow ${
            isWorking ? "border-destructive" : "border-emerald-500"
          }`}
        />

        <button
          onClick={handlePunch}
          disabled={loading}
          className={`
            relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full 
            flex flex-col items-center justify-center gap-4
            transition-all duration-500 ease-out
            backdrop-blur-2xl border
            active:scale-95 group hover:scale-[1.02]
            disabled:opacity-50 disabled:cursor-not-allowed
            ${
              isWorking
                ? "bg-linear-to-b from-destructive/10 to-destructive/5 border-destructive/30 text-destructive shadow-[0_0_50px_-12px_rgba(239,68,68,0.3)] hover:shadow-[0_0_70px_-10px_rgba(239,68,68,0.4)]"
                : "bg-linear-to-b from-emerald-500/10 to-emerald-500/5 border-emerald-500/30 text-emerald-500 shadow-[0_0_50px_-12px_rgba(16,185,129,0.3)] hover:shadow-[0_0_70px_-10px_rgba(16,185,129,0.4)]"
            }
          `}
        >
          <div className="absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-linear-to-b from-white/5 to-transparent opacity-50 pointer-events-none" />

          {loading ? (
            <Loader2 className="w-16 h-16 animate-spin" />
          ) : (
            <>
              <div
                className={`p-6 rounded-full transition-all duration-500 ${
                  isWorking
                    ? "bg-destructive/10 group-hover:bg-destructive/20 rotate-180"
                    : "bg-emerald-500/10 group-hover:bg-emerald-500/20"
                }`}
              >
                <Fingerprint className="w-12 h-12 md:w-16 md:h-16 stroke-[1.5]" />
              </div>

              <div className="text-center relative z-10">
                <span className="text-2xl md:text-4xl font-bold uppercase tracking-[0.2em] block drop-shadow-sm">
                  {isWorking ? "Parar" : "Bater"}
                </span>
                <span
                  className={`text-xs font-medium uppercase tracking-[0.3em] mt-2 block transition-colors ${
                    isWorking ? "text-destructive/70" : "text-emerald-500/70"
                  }`}
                >
                  {isWorking ? "Encerrar Agora" : "Iniciar Ponto"}
                </span>
              </div>
            </>
          )}
        </button>
      </div>

      {/* Lista de Histórico */}
      <Card className="w-full max-w-md bg-card/50 backdrop-blur-md border-border p-0 overflow-hidden shadow-lg">
        <div className="p-4 border-b border-border bg-muted/20 flex justify-between items-center">
          <span className="font-semibold text-sm text-foreground">
            Histórico de Hoje
          </span>
          <span className="text-xs text-muted-foreground bg-background/50 border border-border px-2 py-1 rounded">
            {punches.length} registros
          </span>
        </div>

        <div className="divide-y divide-border max-h-75 overflow-y-auto scrollbar-thin scrollbar-thumb-border">
          {punches.length === 0 && (
            <div className="p-8 text-center text-muted-foreground text-sm">
              Nenhum ponto registrado hoje.
            </div>
          )}

          {punches.map((punch) => (
            <div
              key={punch.id}
              className="flex items-center justify-between p-4 hover:bg-muted/30 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`
                  w-10 h-10 rounded-lg flex items-center justify-center border
                  ${
                    punch.type === "ENTRY"
                      ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-500"
                      : "bg-destructive/10 border-destructive/20 text-destructive"
                  }
                `}
                >
                  {punch.type === "ENTRY" ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <p className="font-medium text-foreground">
                    {punch.type === "ENTRY" ? "Entrada" : "Saída"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Registro via Web
                  </p>
                </div>
              </div>

              <div className="text-right">
                <span className="font-mono text-lg font-bold text-foreground tracking-tight">
                  {formatTime(punch.timestamp)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
