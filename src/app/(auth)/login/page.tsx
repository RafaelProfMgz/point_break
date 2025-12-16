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

export default function LoginPage() {
  return (
    <Card className="w-full bg-card/50 backdrop-blur-md border-border shadow-xl">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold tracking-tight text-foreground">
          Bem-vindo de volta
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Digite suas credenciais para acessar o painel
        </CardDescription>
      </CardHeader>

      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="nome@empresa.com"
            className="bg-background/50 border-white/10 focus-visible:ring-primary"
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Senha</Label>
            <Link
              href="/forgot-password"
              className="text-xs text-primary hover:underline hover:text-primary/80"
            >
              Esqueceu a senha?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            className="bg-background/50 border-white/10 focus-visible:ring-primary"
          />
        </div>
        <Button className="w-full font-bold shadow-lg shadow-primary/20 mt-2">
          Entrar
        </Button>
      </CardContent>

      <CardFooter className="flex flex-col gap-4 text-center">
        <div className="text-sm text-muted-foreground">
          Não tem uma conta?{" "}
          <Link
            href="/register"
            className="text-primary hover:underline font-medium"
          >
            Crie sua Company
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
