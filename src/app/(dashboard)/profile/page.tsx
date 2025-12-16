"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Settings,
  MapPin,
  Briefcase,
  CalendarDays,
  Clock,
  Award,
  TrendingUp,
} from "lucide-react";
import StatsCard from "@/components/dashboard/profile/StatsCard";

export default function ProfilePage() {
  return (
    <div className="space-y-8 animate-fade-in pb-10">
      <div className="relative group">
        <div className="h-48 w-full rounded-3xl bg-linear-to-r from-primary/20 via-indigo-500/10 to-blue-500/20 border border-white/5 overflow-hidden relative">
          <div className="absolute inset-0 bg-grid-white/5 mask-[linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        </div>

        <div className="px-6 md:px-10 -mt-16 flex flex-col md:flex-row items-end md:items-end gap-6">
          <div className="relative rounded-full p-2 bg-background/50 backdrop-blur-xl border border-white/10 shadow-2xl">
            <Avatar className="h-32 w-32 border-2 border-primary/20">
              <AvatarImage src="https://github.com/shadcn.png" alt="@gabriel" />
              <AvatarFallback className="text-2xl font-bold bg-primary/10 text-primary">
                GS
              </AvatarFallback>
            </Avatar>
            <div
              className="absolute bottom-4 right-4 w-6 h-6 bg-emerald-500 border-4 border-background rounded-full"
              title="Online"
            />
          </div>

          <div className="flex-1 pb-2 space-y-1">
            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <h1 className="text-3xl font-bold text-foreground">
                Gabriel Silva
              </h1>
              <Badge
                variant="secondary"
                className="w-fit bg-primary/10 text-primary hover:bg-primary/20 border-primary/20"
              >
                Admin
              </Badge>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Briefcase className="w-4 h-4" /> Tech Solutions Ltda
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" /> São Paulo, SP
              </span>
              <span className="flex items-center gap-1">
                <CalendarDays className="w-4 h-4" /> Entrou em Março 2023
              </span>
            </div>
          </div>

          <Button
            asChild
            variant="outline"
            className="mb-2 bg-card/50 border-border backdrop-blur hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all"
          >
            <Link href="/profile/config">
              <Settings className="w-4 h-4 mr-2" />
              Editar Perfil
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <StatsCard
          title="Horas no Mês"
          value="142h"
          sub="Meta: 160h"
          icon={Clock}
          color="blue"
        />
        <StatsCard
          title="Pontualidade"
          value="98%"
          sub="Últimos 30 dias"
          icon={TrendingUp}
          color="emerald"
        />
        <StatsCard
          title="Banco de Horas"
          value="+12h"
          sub="Disponível"
          icon={Award}
          color="purple"
        />
      </div>

      {/* --- DETALHES ADICIONAIS --- */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Coluna Esquerda: Info Pessoal */}
        <Card className="md:col-span-2 bg-card/50 backdrop-blur border-border h-full">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Sobre</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed space-y-4">
            <p>
              Engenheiro de Software Sênior focado em desenvolvimento Front-end.
              Responsável pela liderança técnica da equipe Alpha e implementação
              de novas features na plataforma.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="p-3 rounded-xl bg-background/40 border border-border">
                <p className="text-xs text-muted-foreground uppercase font-bold">
                  Departamento
                </p>
                <p className="text-foreground font-medium">Engenharia</p>
              </div>
              <div className="p-3 rounded-xl bg-background/40 border border-border">
                <p className="text-xs text-muted-foreground uppercase font-bold">
                  ID do Funcionário
                </p>
                <p className="text-foreground font-medium font-mono">#82910</p>
              </div>
              <div className="p-3 rounded-xl bg-background/40 border border-border">
                <p className="text-xs text-muted-foreground uppercase font-bold">
                  Email
                </p>
                <p className="text-foreground font-medium">
                  gabriel@empresa.com
                </p>
              </div>
              <div className="p-3 rounded-xl bg-background/40 border border-border">
                <p className="text-xs text-muted-foreground uppercase font-bold">
                  Jornada
                </p>
                <p className="text-foreground font-medium">40h Semanais</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur border-border h-full">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Atividade Recente
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-6 relative border-l border-border ml-2 pl-6">
              {[
                { action: "Ponto de Saída", time: "Hoje, 18:00", active: true },
                {
                  action: "Ponto de Entrada",
                  time: "Hoje, 09:00",
                  active: false,
                },
                {
                  action: "Ajuste de Ponto",
                  time: "Ontem, 14:30",
                  active: false,
                },
                {
                  action: "Fechamento de Folha",
                  time: "28/Out",
                  active: false,
                },
              ].map((item, i) => (
                <li key={i} className="relative">
                  <div
                    className={`absolute -left-7.25 top-1 h-3 w-3 rounded-full border-2 border-background ${
                      item.active
                        ? "bg-primary animate-pulse"
                        : "bg-muted-foreground/30"
                    }`}
                  />
                  <p className="text-sm font-medium text-foreground">
                    {item.action}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.time}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
