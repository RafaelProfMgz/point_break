"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Building2, MapPin, Smartphone, Save, Globe } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function SettingsPage() {
  return (
    <div className="space-y-8 max-w-4xl pb-10">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Configurações
        </h2>
        <p className="text-muted-foreground">
          Gerencie os detalhes da empresa e regras do sistema.
        </p>
      </div>

      <Card className="bg-card/50 backdrop-blur border-border">
        <CardHeader>
          <div className="flex items-center gap-2 text-primary mb-2">
            <Building2 className="w-5 h-5" />
            <span className="font-bold text-sm uppercase tracking-wider">
              Perfil da Organização
            </span>
          </div>
          <CardTitle>Detalhes da Empresa</CardTitle>
          <CardDescription>
            Informações visíveis nos relatórios e para os colaboradores.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="companyName">Nome Fantasia</Label>
              <Input
                id="companyName"
                defaultValue="Tech Solutions Ltda"
                className="bg-background/50 border-white/10"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cnpj">CNPJ</Label>
              <Input
                id="cnpj"
                defaultValue="00.000.000/0001-99"
                className="bg-background/50 border-white/10"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Endereço Principal</Label>
            <Input
              id="address"
              defaultValue="Av. Paulista, 1000 - São Paulo, SP"
              className="bg-background/50 border-white/10"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card/50 backdrop-blur border-border">
        <CardHeader>
          <div className="flex items-center gap-2 text-primary mb-2">
            <Globe className="w-5 h-5" />
            <span className="font-bold text-sm uppercase tracking-wider">
              Regras do Sistema
            </span>
          </div>
          <CardTitle>Preferências de Ponto</CardTitle>
          <CardDescription>
            Defina como e onde seus colaboradores podem registrar o ponto.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-row items-center justify-between rounded-lg border border-border p-4 bg-background/20">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2 font-medium text-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                Exigir Geolocalização
              </div>
              <p className="text-sm text-muted-foreground">
                Obrigatório compartilhar localização GPS ao bater ponto.
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex flex-row items-center justify-between rounded-lg border border-border p-4 bg-background/20">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2 font-medium text-foreground">
                <Smartphone className="w-4 h-4 text-primary" />
                Permitir App Mobile
              </div>
              <p className="text-sm text-muted-foreground">
                Colaboradores podem usar o aplicativo Android/iOS.
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <Separator className="bg-border" />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Jornada Diária (Horas)</Label>
              <Input
                type="number"
                defaultValue={8}
                className="bg-background/50 border-white/10"
              />
            </div>
            <div className="space-y-2">
              <Label>Tolerância (Minutos)</Label>
              <Input
                type="number"
                defaultValue={10}
                className="bg-background/50 border-white/10"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-4">
        <Button variant="ghost">Cancelar</Button>
        <Button className="font-bold shadow-lg shadow-primary/20 gap-2 min-w-37.5">
          <Save className="w-4 h-4" />
          Salvar Alterações
        </Button>
      </div>
    </div>
  );
}
