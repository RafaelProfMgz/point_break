"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, KeyRound, Lock, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ForgotPasswordPage() {
  const router = useRouter();

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendCode = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
    }, 1500);
  };

  const handleVerifyCode = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(3);
    }, 1500);
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/home");
    }, 1500);
  };

  return (
    <Card className="w-full bg-card/50 backdrop-blur-md border-border shadow-xl transition-all duration-500">
      {step === 1 && (
        <form onSubmit={handleSendCode} className="animate-fade-in">
          <CardHeader className="space-y-1 text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 border border-primary/20">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="text-2xl font-bold tracking-tight text-foreground">
              Recuperar Senha
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Digite seu email para receber o código de acesso.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email Corporativo</Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="nome@empresa.com"
                className="bg-background/50 border-white/10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Button
              disabled={isLoading}
              className="w-full font-bold shadow-lg shadow-primary/20 mt-2"
            >
              {isLoading ? "Enviando..." : "Enviar Código"}
            </Button>
          </CardContent>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleVerifyCode} className="animate-fade-in">
          <CardHeader className="space-y-1 text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 border border-primary/20">
              <KeyRound className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="text-2xl font-bold text-foreground">
              Código de Verificação
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Enviamos um código de 6 dígitos para <br />
              <span className="text-foreground font-medium">{email}</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="code">Código</Label>
              <Input
                id="code"
                type="text"
                placeholder="000000"
                className="bg-background/50 border-white/10 text-center text-2xl tracking-[0.5em] font-mono h-14 uppercase"
                maxLength={6}
                required
              />
            </div>
            <Button
              disabled={isLoading}
              className="w-full font-bold shadow-lg shadow-primary/20 mt-2"
            >
              {isLoading ? "Verificando..." : "Verificar Código"}
            </Button>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-xs text-muted-foreground hover:text-primary underline text-center mt-2"
            >
              Enviar código novamente
            </button>
          </CardContent>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={handleResetPassword} className="animate-fade-in">
          <CardHeader className="space-y-1 text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4 border border-emerald-500/20">
              <CheckCircle2 className="w-6 h-6 text-emerald-500" />
            </div>
            <CardTitle className="text-2xl font-bold text-foreground">
              Criar Nova Senha
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Código verificado! Defina sua nova senha.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="new-password">Nova Senha</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="new-password"
                  type="password"
                  required
                  className="pl-9 bg-background/50 border-white/10"
                  placeholder="••••••••"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirmar Senha</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="confirm-password"
                  type="password"
                  required
                  className="pl-9 bg-background/50 border-white/10"
                  placeholder="••••••••"
                />
              </div>
            </div>
            <Button
              disabled={isLoading}
              className="w-full font-bold shadow-lg shadow-primary/20 mt-2 group"
            >
              {isLoading ? (
                "Salvando..."
              ) : (
                <span className="flex items-center gap-2">
                  Alterar e Entrar{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              )}
            </Button>
          </CardContent>
        </form>
      )}

      <CardFooter className="flex flex-col gap-4 text-center justify-center border-t border-white/5 pt-6 mt-2">
        <div className="text-sm text-muted-foreground">
          Lembrou a senha?{" "}
          <Link
            href="/login"
            className="text-primary hover:underline font-medium"
          >
            Voltar para Login
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
