import Link from "next/link";
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
import { Separator } from "@/components/ui/separator";
import { Building2, User } from "lucide-react";

export default function RegisterPage() {
  return (
    <Card className="w-full bg-card/50 backdrop-blur-md border-border shadow-xl">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold tracking-tight text-foreground">
          Comece Gratuitamente
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Crie sua organização e gerencie seu time hoje mesmo.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-primary font-semibold text-sm">
            <Building2 className="w-4 h-4" />
            <h3>Dados da Empresa</h3>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="companyName">Nome da Empresa</Label>
            <Input
              id="companyName"
              placeholder="Ex: Tech Solutions Ltda"
              className="bg-background/50 border-white/10"
            />
          </div>
        </div>

        <Separator className="bg-border" />

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-primary font-semibold text-sm">
            <User className="w-4 h-4" />
            <h3>Seus Dados (Admin)</h3>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="name">Seu Nome Completo</Label>
            <Input
              id="name"
              placeholder="Ex: Gabriel Silva"
              className="bg-background/50 border-white/10"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email Corporativo</Label>
            <Input
              id="email"
              type="email"
              placeholder="voce@empresa.com"
              className="bg-background/50 border-white/10"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="password">Senha de Acesso</Label>
            <Input
              id="password"
              type="password"
              className="bg-background/50 border-white/10"
            />
          </div>
        </div>

        <Button className="w-full font-bold shadow-lg shadow-primary/20 h-11 text-base">
          Criar minha Company
        </Button>
      </CardContent>

      <CardFooter className="text-center justify-center">
        <div className="text-sm text-muted-foreground">
          Já possui uma conta?{" "}
          <Link
            href="/login"
            className="text-primary hover:underline font-medium"
          >
            Fazer Login
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
