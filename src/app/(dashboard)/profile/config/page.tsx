"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, Lock, User, Bell, Save, Smartphone } from "lucide-react";

export default function ProfileConfigPage() {
  return (
    <div className="space-y-6 max-w-3xl mx-auto pb-10 animate-fade-in">
      <Button
        asChild
        variant="ghost"
        className="pl-0 hover:bg-transparent hover:text-primary gap-2 text-muted-foreground"
      >
        <Link href="/profile">
          <ArrowLeft className="w-4 h-4" />
          Voltar para Perfil
        </Link>
      </Button>

      <div className="mb-6">
        <h2 className="text-3xl font-bold text-foreground">Editar Perfil</h2>
        <p className="text-muted-foreground">
          Gerencie suas informações pessoais e de segurança.
        </p>
      </div>

      <Card className="bg-card/50 backdrop-blur border-border">
        <CardHeader>
          <div className="flex items-center gap-2 text-primary mb-1">
            <User className="w-5 h-5" />
            <span className="font-bold text-xs uppercase tracking-wider">
              Pessoal
            </span>
          </div>
          <CardTitle>Informações Básicas</CardTitle>
          <CardDescription>Atualize seus dados de exibição.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome Completo</Label>
              <Input
                id="name"
                defaultValue="Gabriel Silva"
                className="bg-background/50 border-white/10"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email (Não editável)</Label>
              <Input
                id="email"
                defaultValue="gabriel@empresa.com"
                disabled
                className="bg-muted/20 border-white/5 text-muted-foreground"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">Bio / Cargo</Label>
            <Input
              id="bio"
              defaultValue="Engenheiro de Software Sênior"
              className="bg-background/50 border-white/10"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card/50 backdrop-blur border-border">
        <CardHeader>
          <div className="flex items-center gap-2 text-primary mb-1">
            <Lock className="w-5 h-5" />
            <span className="font-bold text-xs uppercase tracking-wider">
              Segurança
            </span>
          </div>
          <CardTitle>Alterar Senha</CardTitle>
          <CardDescription>
            Recomendamos usar uma senha forte e única.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-pass">Senha Atual</Label>
            <Input
              id="current-pass"
              type="password"
              placeholder="••••••••"
              className="bg-background/50 border-white/10"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="new-pass">Nova Senha</Label>
              <Input
                id="new-pass"
                type="password"
                placeholder="••••••••"
                className="bg-background/50 border-white/10"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-pass">Confirmar Nova Senha</Label>
              <Input
                id="confirm-pass"
                type="password"
                placeholder="••••••••"
                className="bg-background/50 border-white/10"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card/50 backdrop-blur border-border">
        <CardHeader>
          <div className="flex items-center gap-2 text-primary mb-1">
            <Bell className="w-5 h-5" />
            <span className="font-bold text-xs uppercase tracking-wider">
              Notificações
            </span>
          </div>
          <CardTitle>Preferências de Alerta</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg bg-background/20 border border-white/5">
            <div className="space-y-0.5">
              <Label className="text-base">Alertas de Ponto</Label>
              <p className="text-xs text-muted-foreground">
                Receber aviso caso esqueça de bater o ponto.
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-background/20 border border-white/5">
            <div className="space-y-0.5">
              <Label className="text-base">Relatório Semanal</Label>
              <p className="text-xs text-muted-foreground">
                Resumo de horas enviadas por email.
              </p>
            </div>
            <Switch />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end pt-4 border-t border-white/5">
          <Button className="font-bold shadow-lg shadow-primary/20 gap-2 min-w-37.5">
            <Save className="w-4 h-4" />
            Salvar Tudo
          </Button>
        </CardFooter>
      </Card>

      <div className="pt-6">
        <h3 className="text-red-500 font-bold mb-2 text-sm uppercase tracking-wider">
          Zona de Perigo
        </h3>
        <div className="border border-red-500/20 bg-red-500/5 rounded-xl p-4 flex items-center justify-between">
          <div>
            <h4 className="font-medium text-foreground">
              Deslogar de todos os dispositivos
            </h4>
            <p className="text-sm text-muted-foreground">
              Isso encerrará sua sessão no celular e outros navegadores.
            </p>
          </div>
          <Button
            variant="destructive"
            className="bg-red-500/10 text-red-500 hover:bg-red-500/20 border border-red-500/20"
          >
            <Smartphone className="w-4 h-4 mr-2" />
            Encerrar Sessões
          </Button>
        </div>
      </div>
    </div>
  );
}
