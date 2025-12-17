"use client";

import { useState } from "react";
import { Plus, Loader2, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface InviteDialogProps {
  onSuccess: () => void;
}

export function InviteDialog({ onSuccess }: InviteDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [generatedLink, setGeneratedLink] = useState("");

  const handleInvite = async () => {
    setIsLoading(true);
    setGeneratedLink("");

    try {
      const res = await fetch("/api/invite", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (res.ok) {
        setGeneratedLink(data.link);
        setEmail("");
        onSuccess();
      } else {
        toast.error("Erro ao enviar convite", {
          description: data.error || "Verifique suas credenciais.",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro de conexão", {
        description: "Não foi possível conectar ao servidor.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(generatedLink);
    alert("Link copiado!");
    setIsOpen(false);
    setGeneratedLink("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="font-bold shadow-lg shadow-primary/20 gap-2">
          <Plus className="w-4 h-4" />
          Convidar Membro
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-card border-border backdrop-blur-xl sm:max-w-106.25">
        <DialogHeader>
          <DialogTitle>Convidar Colaborador</DialogTitle>
          <DialogDescription>
            Gere um link de acesso para um novo membro.
          </DialogDescription>
        </DialogHeader>

        {!generatedLink ? (
          <>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email do Colaborador</Label>
                <Input
                  id="email"
                  placeholder="joao@empresa.com"
                  className="bg-background/50 border-white/10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                disabled={isLoading || !email}
                onClick={handleInvite}
                className="w-full font-bold"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Gerando...
                  </>
                ) : (
                  "Gerar Convite"
                )}
              </Button>
            </DialogFooter>
          </>
        ) : (
          <div className="py-4 space-y-4">
            <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-center">
              <p className="text-emerald-500 text-sm font-medium">
                Convite criado com sucesso!
              </p>
            </div>
            <div className="space-y-2">
              <Label>Link de Acesso</Label>
              <div className="flex gap-2">
                <Input
                  value={generatedLink}
                  readOnly
                  className="bg-muted/50 font-mono text-xs"
                />
                <Button size="icon" variant="outline" onClick={copyLink}>
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Copie e envie este link para a pessoa.
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
